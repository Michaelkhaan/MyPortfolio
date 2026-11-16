import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  if (name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Please provide a valid name, email and message." }, { status: 400 });
  }
  try {
    await prisma.contactMessage.create({ data: { name, email, subject: subject.slice(0, 160), message } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Messages are temporarily unavailable. Please use the WhatsApp contact option." }, { status: 503 });
  }
}
