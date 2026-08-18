"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAdminAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setGlobalError("");

    // Required Email Validation
    if (!email.trim()) {
      setEmailError("Email address is required");
      isValid = false;
    } else {
      // Email format regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        setEmailError("Please enter a valid email address");
        isValid = false;
      }
    }

    // Required Password Validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setGlobalError("");

    try {
      // Submit via authentication context (real backend API call with credentials: "include")
      const result = await login(email.trim().toLowerCase(), password);

      if (result.success) {
        const fromParam = searchParams.get("from");
        const destination =
          fromParam && fromParam.startsWith("/admin") && fromParam !== "/admin/login"
            ? fromParam
            : "/admin/blogs";
        router.replace(destination);
      } else {
        setGlobalError(result.message || "Invalid email or password.");
      }
    } catch (err: any) {
      setGlobalError("Unable to connect to authentication server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-[#305EFF]/20 selection:text-[#305EFF] relative overflow-hidden">
      {/* Background Decorative Mesh & Glow Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#305EFF]/10 via-[#305EFF]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Admin Login Container Card */}
      <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-3xl shadow-xl shadow-slate-200/50 p-6 sm:p-8 relative z-10 transition-all">
        {/* Header Branding */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-6 group transition-transform hover:scale-105"
            title="Return to Mitsafe Public Website"
          >
            <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-extrabold text-xl shadow-2xs">
              M
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight font-display">
                Mitsafe <span className="text-slate-900">CMS</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono -mt-0.5">
                Enterprise Portal
              </span>
            </div>
          </Link>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Admin Login
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-1.5 max-w-xs">
            Sign in to access the admin dashboard
          </p>
        </div>

        {/* Global Error Banner */}
        {globalError && (
          <div className="mb-6 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{globalError}</span>
          </div>
        )}

        {/* Form Elements */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Email Address Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="admin-email"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                  if (globalError) setGlobalError("");
                }}
                placeholder="Enter your admin email"
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm font-medium text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                  emailError
                    ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                    : "border-slate-200 focus:border-[#305EFF] focus:ring-4 focus:ring-[#305EFF]/10"
                }`}
                autoComplete="username"
              />
            </div>
            {emailError && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{emailError}</span>
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="admin-password"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                  if (globalError) setGlobalError("");
                }}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-11 py-3 rounded-2xl border text-sm font-medium text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                  passwordError
                    ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                    : "border-slate-200 focus:border-[#305EFF] focus:ring-4 focus:ring-[#305EFF]/10"
                }`}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{passwordError}</span>
              </p>
            )}
          </div>

          {/* Submit Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 bg-[#305EFF] text-white text-sm font-bold rounded-2xl shadow-lg shadow-[#305EFF]/25 hover:bg-[#305EFF]/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Logging in...</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Security Badge Footer Notice */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#305EFF]" />
            <span>Secure Admin Session</span>
          </div>
          <Link
            href="/"
            className="font-semibold text-slate-600 hover:text-[#305EFF] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer Branding Copyright */}
      <div className="mt-8 text-center text-xs text-slate-400 font-medium">
        &copy; {new Date().getFullYear()} Mitsafe Admin Portal. All rights reserved.
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#305EFF] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-semibold text-slate-500 font-mono">
              Loading Admin Portal...
            </p>
          </div>
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
