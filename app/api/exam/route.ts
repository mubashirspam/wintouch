import { NextResponse } from "next/server";

// API endpoint for NEET exam registration
// This proxies the request to the external API to avoid CORS issues

interface ExamFormData {
  type: string;
  name: string;
  dob: string;
  contactNo: string;
  whatsappNo: string;
  email: string;
  parentName: string;
  parentOccupation: string;
  school: string;
  district: string;
  state: string;
  board: string;
  ambition?: string;
  stream?: string;
  interestedInNeetCoaching?: string;
  interestedInStayingHostel?: string;
  attendNeetCoachingBefore?: string;
}

export async function POST(request: Request) {
  try {
    const body: ExamFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      "type",
      "name",
      "dob",
      "contactNo",
      "whatsappNo",
      "email",
      "parentName",
      "parentOccupation",
      "school",
      "district",
      "state",
      "board",
    ];

    for (const field of requiredFields) {
      if (!body[field as keyof ExamFormData]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate stream for exam_twelfth
    if (body.type === "exam_twelfth" && !body.stream) {
      return NextResponse.json(
        { success: false, message: "stream is required for 12th class" },
        { status: 400 }
      );
    }

    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    if (!apiEndpoint) {
      console.error("API endpoint not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    console.log("Sending to external API:", JSON.stringify(body, null, 2));

    // Make server-side request to external API
    const response = await fetch(`${apiEndpoint}/leads/exams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add API token here if needed in the future
        // "Authorization": `Bearer ${process.env.WINTOUCH_API_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    // Check if external API returned successfully
    if (response.ok) {
      const data = await response.json();
      console.log("External API success:", data);
      return NextResponse.json({
        success: true,
        message: "Registration successful",
        data,
      });
    } else {
      // Handle external API errors
      const errorText = await response.text();
      console.error("External API error status:", response.status);
      console.error("External API error response:", errorText);
      console.error("Request URL:", `${apiEndpoint}/leads/exams`);

      return NextResponse.json(
        {
          success: false,
          message: "Registration failed. Please try again later.",
          error: errorText,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Exam registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
