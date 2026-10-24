import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return <footer className="bg-[#121826] px-4 pb-8 text-white">
    <div className="container-shell flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-white/40">© {new Date().getFullYear()} Mekaiel Khan. All rights reserved.</p>
      <div className="flex items-center gap-4"><a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold text-white/70 hover:text-[#ff674f]">Start a project <ArrowUpRight size={14}/></a><a href="#home" aria-label="Back to top" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:border-[#ff674f] hover:text-[#ff674f]"><ArrowUp size={15}/></a></div>
    </div>
  </footer>;
}
