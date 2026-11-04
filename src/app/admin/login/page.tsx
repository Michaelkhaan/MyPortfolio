"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault(); setError(""); setLoading(true);
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to sign in.");
      window.location.href = "/admin";
    } catch (e) { setError(e instanceof Error ? e.message : "Something went wrong."); }
    finally { setLoading(false); }
  }

  return <main className="grid min-h-screen place-items-center bg-[radial-gradient(ellipse_at_top,_#242044_0%,_#0b1020_55%)] px-5 py-12">
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[.045] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff674f] text-white"><LockKeyhole size={25}/></div>
      <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ff8b78]">Mekaiel Khan · Workspace</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-white">Welcome back.</h1>
      <p className="mt-2 text-sm leading-6 text-slate-400">Sign in to manage your portfolio content and website settings.</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <label className="block text-xs font-semibold text-slate-300">Admin password</label>
        <input autoFocus type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your admin password" className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#ff674f]"/>
        {error && <p role="alert" className="rounded-lg border border-rose-400/20 bg-rose-400/10 px-3 py-2 text-xs text-rose-300">{error}</p>}
        <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff674f] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#ff806c] disabled:opacity-60">{loading ? "Signing in..." : "Sign in to dashboard"} <ArrowRight size={16}/></button>
      </form>
      <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-[11px] text-slate-500"><ShieldCheck size={14}/> Protected admin area · Private access only</div>
    </div>
  </main>;
}
