import { Resend } from 'resend';
import Booking from "@/emails/Booking"
import { NextResponse } from 'next/server';


const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request:Request) {

    const {name, email, guests,date, time} = await request.json()

    console.log("email sent", name)

   const booking =  await resend.emails.send({
        from: 'Nique <khomotso@khomotso.dev>',
        to: email,
        subject: 'Nique reservation confirmation',
        react: Booking({name, email, guests,date, time})
      });

  console.log("nooking res", booking)

  return NextResponse.json({
    status:'ok'
  })
}