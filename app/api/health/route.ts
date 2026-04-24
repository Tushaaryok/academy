import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    message: "Krishna Academy API is operational",
    timestamp: new Date().toISOString()
  });
}
