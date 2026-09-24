"use client";

import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef, useCallback } from "react";
import { AlertCircle, RefreshCw, Loader2 } from "lucide-react";

export interface TurnstileWidgetHandle {
  reset: () => void;
  remove: () => void;
  getResponse: () => string | undefined;
}

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onError?: (errorCode?: string) => void;
  onExpire?: () => void;
  className?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: (errorCode?: string) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
          action?: string;
          cData?: string;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string | undefined;
    };
  }
}

const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let isScriptAppended = false;

function loadTurnstileScript(onLoaded: () => void) {
  if (typeof window === "undefined") return;

  if (window.turnstile) {
    onLoaded();
    return;
  }

  let script = document.getElementById(TURNSTILE_SCRIPT_ID) as HTMLScriptElement | null;
  if (!script && !isScriptAppended) {
    isScriptAppended = true;
    script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  const pollInterval = setInterval(() => {
    if (window.turnstile) {
      clearInterval(pollInterval);
      onLoaded();
    }
  }, 50);

  const timeoutId = setTimeout(() => {
    clearInterval(pollInterval);
  }, 10000);

  if (script) {
    script.addEventListener(
      "load",
      () => {
        clearInterval(pollInterval);
        clearTimeout(timeoutId);
        if (window.turnstile) {
          onLoaded();
        }
      },
      { once: true }
    );
  }
}

export const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
  ({ onSuccess, onError, onExpire, className = "" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const renderCountRef = useRef<number>(0);
    const isMountedRef = useRef<boolean>(true);

    const [status, setStatus] = useState<"loading" | "ready" | "success" | "error" | "expired">("loading");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const siteKey = (process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "").trim();

    // Store callbacks in stable refs to avoid re-triggering widget lifecycle on parent re-renders
    const callbacksRef = useRef({ onSuccess, onError, onExpire });
    useEffect(() => {
      callbacksRef.current = { onSuccess, onError, onExpire };
    });

    const removeWidget = useCallback(() => {
      if (widgetIdRef.current) {
        const idToRemove = widgetIdRef.current;
        widgetIdRef.current = null;
        if (typeof window !== "undefined" && window.turnstile) {
          try {
            window.turnstile.remove(idToRemove);
          } catch {
            // suppress Turnstile internal removal warnings if already cleared
          }
        }
      }
    }, []);

    const resetWidget = useCallback(() => {
      if (process.env.NODE_ENV !== "production") {
        console.log("[Turnstile Diagnostics]", { resetTiming: "manual/post-submit", widgetIdExists: !!widgetIdRef.current });
      }
      if (widgetIdRef.current && typeof window !== "undefined" && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
          setStatus("ready");
          setErrorMessage("");
        } catch {
          // If reset fails, trigger re-render
          removeWidget();
          setStatus("loading");
        }
      }
    }, [removeWidget]);

    const getResponse = useCallback(() => {
      if (widgetIdRef.current && typeof window !== "undefined" && window.turnstile) {
        try {
          return window.turnstile.getResponse(widgetIdRef.current);
        } catch {
          return undefined;
        }
      }
      return undefined;
    }, []);

    useImperativeHandle(ref, () => ({
      reset: resetWidget,
      remove: removeWidget,
      getResponse: getResponse,
    }));

    useEffect(() => {
      isMountedRef.current = true;

      const renderWidget = () => {
        if (!isMountedRef.current || !containerRef.current || !window.turnstile) return;

        if (!siteKey) {
          setStatus("error");
          setErrorMessage("Security verification is currently unavailable (Site key missing).");
          return;
        }

        // If a widget is already rendered, do not duplicate render
        if (widgetIdRef.current) {
          return;
        }

        renderCountRef.current += 1;

        if (process.env.NODE_ENV !== "production") {
          console.log("[Turnstile Diagnostics]", {
            scriptLoaded: typeof window !== "undefined" && !!window.turnstile,
            siteKeyExists: !!siteKey,
            siteKeyLength: siteKey.length,
            siteKeyPrefix: siteKey.slice(0, 4),
            renderCount: renderCountRef.current,
            widgetIdExists: !!widgetIdRef.current,
          });
        }

        try {
          const id = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              if (!isMountedRef.current) return;
              if (process.env.NODE_ENV !== "production") {
                console.log("[Turnstile Diagnostics]", {
                  tokenReceived: !!token,
                  tokenLength: token ? token.length : 0,
                  renderCount: renderCountRef.current,
                });
              }
              setStatus("success");
              setErrorMessage("");
              callbacksRef.current.onSuccess(token);
            },
            "error-callback": (errorCode?: string) => {
              if (!isMountedRef.current) return;
              if (process.env.NODE_ENV !== "production") {
                console.warn("[Turnstile Error Code]", errorCode || "unknown");
              }
              setStatus("error");
              setErrorMessage(
                errorCode === "110200"
                  ? "Turnstile domain mismatch (110200). Ensure localhost is added to Allowed Domains in Cloudflare dashboard."
                  : "Security verification failed. Please try again."
              );
              callbacksRef.current.onError?.(errorCode);
            },
            "expired-callback": () => {
              if (!isMountedRef.current) return;
              setStatus("expired");
              setErrorMessage("Verification expired. Please verify again.");
              callbacksRef.current.onExpire?.();
            },
            theme: "light",
            size: "normal",
          });

          if (id && isMountedRef.current) {
            widgetIdRef.current = id;
            setStatus("ready");
            if (process.env.NODE_ENV !== "production") {
              console.log("[Turnstile Diagnostics]", {
                scriptLoaded: true,
                widgetIdExists: true,
                renderCount: renderCountRef.current,
              });
            }
          }
        } catch (err) {
          console.error("Turnstile render error:", err);
          if (isMountedRef.current) {
            setStatus("error");
            setErrorMessage("Security verification service could not load.");
          }
        }
      };

      loadTurnstileScript(() => {
        if (isMountedRef.current) {
          renderWidget();
        }
      });

      return () => {
        isMountedRef.current = false;
        if (widgetIdRef.current) {
          const idToRemove = widgetIdRef.current;
          widgetIdRef.current = null;
          if (typeof window !== "undefined" && window.turnstile) {
            try {
              window.turnstile.remove(idToRemove);
            } catch {
              // ignore
            }
          }
        }
      };
    }, [siteKey]); // ONLY depend on siteKey, NEVER re-render on callback prop changes!

    return (
      <div className={`flex flex-col items-center justify-center my-0.5 w-full shrink-0 ${className}`}>
        {status === "loading" && (
          <div className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 w-full min-h-[65px]">
            <Loader2 className="w-4 h-4 animate-spin text-[#305EFF]" />
            <span>Loading security check...</span>
          </div>
        )}

        <div
          ref={containerRef}
          className={`min-h-[65px] flex items-center justify-center ${status === "loading" ? "hidden" : "block"}`}
        />

        {status === "error" && (
          <div className="mt-1 flex items-center gap-1.5 text-xs text-red-600 bg-red-50 py-1.5 px-3 rounded-lg border border-red-200 w-full justify-between">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage || "Security check failed"}</span>
            </div>
            <button
              type="button"
              onClick={resetWidget}
              className="flex items-center gap-1 font-semibold text-[#305EFF] hover:underline text-[11px] cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {status === "expired" && (
          <div className="mt-1 flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 py-1.5 px-3 rounded-lg border border-amber-200 w-full justify-between">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Verification expired</span>
            </div>
            <button
              type="button"
              onClick={resetWidget}
              className="flex items-center gap-1 font-semibold text-[#305EFF] hover:underline text-[11px] cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Refresh</span>
            </button>
          </div>
        )}
      </div>
    );
  }
);

TurnstileWidget.displayName = "TurnstileWidget";
export default TurnstileWidget;
