import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Dashboard | Mekaiel Khan", robots: { index: false, follow: false } };

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="admin-root min-h-screen bg-[#0b1020] text-slate-100">{children}</div>;
}
