import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      name,
      email,
      phone,
      companyName,
      company,
      service,
      serviceCategory,
      timeline,
      message,
      sourcePage,
      requestType,
      turnstileToken,
      website_hp,
    } = body;

    const backendUrl =
      process.env.BACKEND_API_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://localhost:5000";

    const payload = {
      fullName: (fullName || name || "").trim(),
      email: (email || "").trim(),
      phone: (phone || "").trim(),
      companyName: (companyName || company || "").trim(),
      service: (service || serviceCategory || "").trim(),
      timeline: timeline || "",
      message: (message || "").trim(),
      sourcePage: sourcePage || "/",
      requestType: requestType || "quote",
      turnstileToken: turnstileToken || "",
      website_hp: website_hp || "",
    };

    if (process.env.NODE_ENV !== "production") {
      console.log("[Quotes API Route Proxy]", {
        hasToken: Boolean(turnstileToken),
        tokenLength: typeof turnstileToken === "string" ? turnstileToken.length : 0,
        targetUrl: `${backendUrl}/api/v1/quotes`,
      });
    }

    try {
      const backendRes = await fetch(`${backendUrl}/api/v1/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await backendRes.json().catch(() => ({}));
      return NextResponse.json(data, { status: backendRes.status });
    } catch (fetchErr) {
      console.error(
        "[Quotes API Route] Backend API unreachable at " + backendUrl + ":",
        fetchErr instanceof Error ? fetchErr.message : fetchErr
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to connect to the backend server. Please ensure the backend service is running.",
        },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("Error proxying quotes request to backend:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}
