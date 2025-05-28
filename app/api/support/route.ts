import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';
  const file = formData.get('file') as File | null;

  const attachments = [];

  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    attachments.push({
      filename: file.name,
      content: buffer,
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'm_vold92@hotmail.com',
      pass: 'Mavold1992!!!'
    },
  });

  await transporter.sendMail({
    from: email,
    to: 'm.vold@me.com',
    subject: 'ONEF1 Support Ticket',
    text: message,
    attachments,
  });

  return NextResponse.json({ success: true });
}
