import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, name, email, phone, companyName, company, service, serviceCategory, budget, timeline, message, sourcePage, requestType } = body;

    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    const payload = {
      fullName: (fullName || name || "").trim(),
      email: (email || "").trim(),
      phone: (phone || "").trim(),
      companyName: (companyName || company || "").trim(),
      service: (service || serviceCategory || "").trim(),
      budget: budget || "",
      timeline: timeline || "",
      message: (message || "").trim(),
      sourcePage: sourcePage || "/",
      requestType: requestType || "quote",
    };

    const backendRes = await fetch(`${backendUrl}/api/v1/quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await backendRes.json().catch(() => ({}));
    return NextResponse.json(data, { status: backendRes.status });
  } catch (error) {
    console.error("Error proxying quote request to backend:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}

