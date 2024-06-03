import { Resend } from "resend";
import Booking from "@/emails/Booking";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, guests, date, time } = await request.json();
  try {
    await resend.emails.send({
      from: "Nique <khomotso@khomotso.dev>",
      to: email,
      subject: "Nique reservation confirmation",
      react: Booking({ name, email, guests, date, time }),
    });

    return NextResponse.json({
      status: "ok",
      code: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong", ok: false }, { status: 500 });
  }
}
