import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const rows = await prisma.siteContent.findMany({ orderBy: { key: "asc" } });
  return NextResponse.json(Object.fromEntries(rows.map((row) => [row.key, row.value])));
}

export async function PUT(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => null);
  const key = typeof body?.key === "string" ? body.key : "";
  if (!/^(profile|skills|services|projects|seo|settings)$/.test(key) || body?.value === undefined) {
    return NextResponse.json({ error: "Invalid content key or missing value." }, { status: 400 });
  }
  const row = await prisma.siteContent.upsert({
    where: { key }, create: { key, value: body.value }, update: { value: body.value },
  });
  await prisma.activityLog.create({ data: { action: "Updated content", target: key } });
  return NextResponse.json({ success: true, key: row.key, updatedAt: row.updatedAt });
}
