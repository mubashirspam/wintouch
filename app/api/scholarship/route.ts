import { NextResponse } from "next/server";

// API endpoint for NEET scholarship registration
// This proxies the request to the external API to hide the endpoint from clients

interface ScholarshipFormData {
  name: string;
  class: string;
  school: string;
  phone: string;
  whatsapp: string;
  place: string;
  district: string;
}

export async function POST(request: Request) {
  try {
    const body: ScholarshipFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "class",
      "school",
      "phone",
      "whatsapp",
      "place",
      "district",
    ];

    for (const field of requiredFields) {
      if (!body[field as keyof ScholarshipFormData]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Map class values to readable format for API
    const classMapping: Record<string, string> = {
      grade10: "Grade 10",
      grade12: "Grade 12 - Science Stream",
    };

    const apiPayload = {
      name: body.name,
      class: classMapping[body.class] || body.class,
      school: body.school,
      phone: body.phone,
      whatsapp: body.whatsapp,
      place: body.place,
      district: body.district,
    };

    // Make server-side request to external API
    const response = await fetch(
      "https://api.wintouchacademy.com/register/neet-scholarship",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add API token here if needed in the future
          // "Authorization": `Bearer ${process.env.WINTOUCH_API_TOKEN}`,
        },
        body: JSON.stringify(apiPayload),
      }
    );

    // Check if external API returned successfully
    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({
        success: true,
        message: "Registration successful",
        data,
      });
    } else {
      // Handle external API errors
      const errorText = await response.text();
      console.error("External API error:", errorText);

      return NextResponse.json(
        {
          success: false,
          message: "Registration failed. Please try again later.",
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Scholarship registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
