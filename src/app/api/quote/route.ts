import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, and Message are required)." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Lead payload details (Configured lead recipient: moderntechnologies12@gmail.com / info@mitsafe.com)
    const leadData = {
      name,
      email,
      phone: phone || "Not specified",
      company: company || "Not specified",
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      message,
      submittedAt: new Date().toISOString(),
      recipientEmail: "moderntechnologies12@gmail.com",
    };

    // Log the lead data on the server side
    console.log("New Quote Request Lead Received:", leadData);

    // If an external SMTP or webhook URL is configured via environment variables, process it securely
    if (process.env.LEAD_EMAIL_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEAD_EMAIL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      } catch (webhookErr) {
        console.error("Failed to forward lead to webhook:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your quote request has been submitted successfully. Our team will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
