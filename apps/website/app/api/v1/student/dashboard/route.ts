import { NextResponse } from "next/server";
import { supabase } from "@/packages/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get("studentId");

  if (!studentId) {
    return NextResponse.json({ error: "Student ID required" }, { status: 400 });
  }

  try {
    // 1. Fetch Profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("*, batches(*)")
      .eq("id", studentId)
      .single();

    if (!profile) throw new Error("Profile not found");

    // 2. Fetch Attendance Summary
    const { data: attendance } = await supabase
      .from("attendance")
      .select("status")
      .eq("student_id", studentId);

    // 3. Fetch Fees
    const { data: fees } = await supabase
      .from("fees")
      .select("*")
      .eq("student_id", studentId)
      .order("due_date", { ascending: true });

    // 4. Fetch Batch Lectures
    const { data: lectures } = await supabase
      .from("lectures")
      .select("*")
      .eq("batch_id", profile.batch_id)
      .order("published_at", { ascending: false })
      .limit(5);

    return NextResponse.json({
      profile,
      attendanceSummary: {
        total: attendance?.length || 0,
        present: attendance?.filter(a => a.status === "present").length || 0,
      },
      fees,
      latestLectures: lectures
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
