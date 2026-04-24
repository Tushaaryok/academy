import { NextResponse } from "next/server";
import { razorpay } from "@/packages/lib/razorpay";

export async function POST(req: Request) {
  try {
    const { amount, currency = "INR", receipt } = await req.json();

    const options = {
      amount: amount * 100, // Amount in paise
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
