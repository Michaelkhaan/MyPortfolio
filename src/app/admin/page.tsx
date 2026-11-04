"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, FileText, FolderKanban, Globe2, LayoutDashboard, LogOut, Mail, Save, Search, Settings, ShieldCheck, UserRound, Wrench } from "lucide-react";

type Content = Record<string, unknown>;
const sections = [
  { id:"overview", label:"Overview", icon:LayoutDashboard },
  { id:"profile", label:"Profile", icon:UserRound },
  { id:"skills", label:"Skills", icon:Code2 },
  { id:"services", label:"Services", icon:Wrench },
  { id:"projects", label:"Projects", icon:FolderKanban },
  { id:"messages", label:"Messages", icon:Mail },
  { id:"seo", label:"SEO", icon:Globe2 },
  { id:"settings", label:"Settings", icon:Settings },
] as const;
type Section = typeof sections[number]["id"];

const starter: Content = {
  profile: { name:"Mekaiel Khan", role:"Frontend Developer", headline:"I build clean interfaces that feel alive.", bio:"Frontend developer focused on React, Next.js and responsive digital experiences.", location:"Pakistan", cvUrl:"/MyCV2.pdf" },
  skills: ["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Redux Toolkit","Tailwind CSS","REST APIs","Git","GitHub","Responsive Design","UI/UX Design"],
  services: [{ title:"Web Development", description:"Fast, responsive websites and web apps." },{ title:"E-commerce Frontend", description:"Modern storefront interfaces." },{ title:"Portfolio & Landing Pages", description:"Focused personal brands and landing pages." }],
  projects: [{ title:"Resorts Valley", category:"Hospitality", image:"/resortvalley.png", url:"https://www.resortsvalley.com/" },{ title:"DTR Distro", category:"E-commerce", image:"/DTR.png", url:"https://dtrdistro.co.uk/" }],
  seo: { title:"Mekaiel Khan — Frontend Developer", description:"Frontend developer specializing in React and Next.js.", ogImage:"/portfolio.png" },
  settings: { email:"", phone:"", location:"Pakistan", github:"https://github.com/Michaelkhaan", linkedin:"", instagram:"" },
};

function pretty(value: unknown) { return JSON.stringify(value, null, 2); }

export default function AdminDashboardPage() {
  const [active, setActive] = useState<Section>("overview");
  const [content, setContent] = useState<Content>(starter);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const session = await fetch("/api/admin/session", { cache:"no-store" }).then(r=>r.json());
        if (!session.authenticated) { window.location.replace("/admin/login"); return; }
        if (!alive) return;
        setAuthenticated(true);
        const response = await fetch("/api/admin/content", { cache:"no-store" });
        if (response.ok) {
          const saved = await response.json();
          if (Object.keys(saved).length) setContent(current=>({...current,...saved}));
        }
      } catch { setNotice("Could not load saved content. Check your database configuration."); }
      finally { if (alive) setLoading(false); }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (active !== "overview" && active !== "messages") setDraft(pretty(content[active] ?? starter[active]));
  }, [active, content]);

  const projectCount = Array.isArray(content.projects) ? content.projects.length : 0;
  const skillCount = Array.isArray(content.skills) ? content.skills.length : 0;
  const serviceCount = Array.isArray(content.services) ? content.services.length : 0;
  const filteredSections = useMemo(()=>sections.filter(s=>s.label.toLowerCase().includes(query.toLowerCase())),[query]);

  async function save() {
    let value: unknown;
    try { value = JSON.parse(draft); } catch { setNotice("Invalid JSON. Please correct the content before saving."); return; }
    setSaving(true); setNotice("");
    try {
      const response = await fetch("/api/admin/content", { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({key:active,value}) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Save failed.");
      setContent(current=>({...current,[active]:value}));
      setNotice("Changes saved to your database.");
    } catch(e) { setNotice(e instanceof Error ? e.message : "Unable to save changes."); }
    finally { setSaving(false); }
  }

  async function logout() {
    await fetch("/api/admin/logout",{method:"POST"});
    window.location.href="/admin/login";
  }

  if (loading || !authenticated) return <div className="grid min-h-screen place-items-center text-sm text-slate-400">Loading your secure workspace...</div>;

  return <div className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
    <aside className="border-b border-white/10 bg-[#0d1425] p-5 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
      <a href="/" className="flex items-center gap-3 px-2 py-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ff674f] text-sm font-black text-white">MK</span><span><b className="block text-sm text-white">Portfolio CMS</b><small className="text-xs text-slate-500">Admin workspace</small></span></a>
      <div className="mt-8 hidden px-3 text-[10px] font-bold uppercase tracking-[.2em] text-slate-600 lg:block">Workspace</div>
      <nav className="mt-3 grid grid-cols-4 gap-1 sm:grid-cols-8 lg:grid-cols-1">
        {sections.map(item=>{const Icon=item.icon; return <button key={item.id} onClick={()=>setActive(item.id)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-semibold transition ${active===item.id?"bg-[#ff674f]/15 text-[#ff907e]":"text-slate-400 hover:bg-white/5 hover:text-white"}`}><Icon size={17}/><span className="hidden sm:inline lg:inline">{item.label}</span></button>})}
      </nav>
      <div className="mt-8 hidden rounded-2xl border border-white/10 bg-white/[.03] p-4 lg:block"><div className="flex items-center gap-2 text-xs font-bold text-slate-200"><ShieldCheck size={15} className="text-emerald-400"/> Secure workspace</div><p className="mt-2 text-[11px] leading-5 text-slate-500">Only authenticated administrators can edit stored website content.</p></div>
      <div className="mt-5 flex items-center gap-2 lg:absolute lg:bottom-5 lg:left-5 lg:right-5"><button onClick={logout} className="flex w-full items-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold text-slate-500 hover:bg-white/5 hover:text-white"><LogOut size={16}/> Sign out</button></div>
    </aside>

    <main className="min-w-0 p-5 sm:p-8 xl:p-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff8b78]">Personal website / Admin</p><h1 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{sections.find(s=>s.id===active)?.label}</h1><p className="mt-1 text-xs text-slate-500">Manage your portfolio from one workspace.</p></div>
        <div className="flex items-center gap-2"><a href="/" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/5">View website <ExternalLink size={14}/></a><span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff674f]/15 text-xs font-black text-[#ff907e]">MK</span></div>
      </header>

      {notice && <div role="status" className="mt-6 rounded-xl border border-[#ff674f]/20 bg-[#ff674f]/10 px-4 py-3 text-xs text-[#ffb0a3]">{notice}</div>}

      {active==="overview" ? <>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[{label:"Projects",value:projectCount,icon:BriefcaseBusiness,sub:"Portfolio entries"},{label:"Skills",value:skillCount,icon:Code2,sub:"Technical capabilities"},{label:"Services",value:serviceCount,icon:Wrench,sub:"What you offer"},{label:"Content areas",value:6,icon:FileText,sub:"Editable CMS collections"}].map(card=>{const Icon=card.icon;return <div key={card.label} className="rounded-2xl border border-white/10 bg-[#111a2d] p-5"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-400">{card.label}</span><Icon size={17} className="text-[#ff806c]"/></div><div className="mt-5 text-3xl font-black text-white">{card.value}</div><p className="mt-1 text-[11px] text-slate-600">{card.sub}</p></div>})}
        </div>
        <div className="mt-6 grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
          <section className="rounded-2xl border border-white/10 bg-[#111a2d] p-5"><div className="flex items-center justify-between"><h2 className="font-bold text-white">Manage your website</h2><Activity size={17} className="text-[#ff806c]"/></div><p className="mt-2 text-xs leading-5 text-slate-500">Choose a section to edit its saved content. Updates are stored in your PostgreSQL database.</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{sections.filter(s=>s.id!=="overview").map(s=>{const Icon=s.icon;return <button key={s.id} onClick={()=>setActive(s.id)} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[.025] p-4 text-left transition hover:border-[#ff674f]/30 hover:bg-[#ff674f]/5"><span className="flex items-center gap-3 text-xs font-semibold text-slate-300"><Icon size={16} className="text-[#ff806c]"/>{s.label}</span><ArrowUpRight size={15} className="text-slate-600"/></button>})}</div></section>
          <section className="rounded-2xl border border-white/10 bg-[#111a2d] p-5"><h2 className="font-bold text-white">Quick status</h2><div className="mt-5 space-y-4"><div className="flex items-center justify-between text-xs"><span className="text-slate-500">Admin authentication</span><span className="text-emerald-400">Active</span></div><div className="flex items-center justify-between text-xs"><span className="text-slate-500">Database content</span><span className="text-slate-300">{Object.keys(content).length} collections</span></div><div className="flex items-center justify-between text-xs"><span className="text-slate-500">Public design</span><span className="text-emerald-400">Untouched</span></div></div><div className="mt-7 rounded-xl bg-[#ff674f]/10 p-4"><p className="text-xs font-bold text-[#ff9b8b]">Content editor</p><p className="mt-1 text-[11px] leading-5 text-slate-500">Use the section editor to update structured JSON data. Public component integration is the next rollout step.</p></div></section>
        </div>
      </> : active==="messages" ? <section className="mt-8 rounded-2xl border border-white/10 bg-[#111a2d] p-6"><Mail className="text-[#ff806c]"/><h2 className="mt-4 font-bold text-white">Contact inbox</h2><p className="mt-2 text-xs leading-6 text-slate-500">The messages table is ready in the database. Your current contact form sends enquiries to WhatsApp, so messages will appear here after the public contact form is connected to the inbox API.</p></section> : <section className="mt-8 rounded-2xl border border-white/10 bg-[#111a2d] p-5 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-bold text-white">Edit {active}</h2><p className="mt-1 text-xs text-slate-500">Edit the JSON below. Keep valid JSON syntax to save changes.</p></div><button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-[#ff674f] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#ff806c] disabled:opacity-50"><Save size={15}/>{saving?"Saving...":"Save changes"}</button></div><textarea spellCheck={false} value={draft} onChange={e=>setDraft(e.target.value)} className="mt-5 min-h-[420px] w-full resize-y rounded-xl border border-white/10 bg-[#080d19] p-4 font-mono text-xs leading-6 text-emerald-200 outline-none focus:border-[#ff674f]/60"/><div className="mt-3 flex items-center gap-2 text-[10px] text-slate-600"><FileText size={13}/> Stored securely in PostgreSQL · JSON format</div></section>}
      <footer className="mt-10 border-t border-white/5 pt-5 text-[10px] text-slate-600">Portfolio CMS · Built for Mekaiel Khan</footer>
    </main>
  </div>;
}
