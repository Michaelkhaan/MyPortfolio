import { NextRequest, NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "node:crypto";
import { adminCookie, adminSessionMaxAge, createSessionToken } from "@/lib/admin-auth";

export const runtime = "nodejs";

function equalSecret(a: string, b: string) {
  const left = createHash("sha256").update(a).digest();
  const right = createHash("sha256").update(b).digest();
  return timingSafeEqual(left, right);
}

export async function POST(request: NextRequest) {
  const configured = process.env.ADMIN_PASSWORD;
  if (!configured || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json({ error: "Admin credentials are not configured on the server." }, { status: 503 });
  }
  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";
  if (!password || !equalSecret(password, configured)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }
  const response = NextResponse.json({ success: true });
  response.cookies.set(adminCookie, createSessionToken(), {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict",
    path: "/", maxAge: adminSessionMaxAge,
  });
  return response;
}
