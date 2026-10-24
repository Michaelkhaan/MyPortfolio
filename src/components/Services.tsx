import { ArrowUpRight, Code2, ShoppingBag, LayoutTemplate } from "lucide-react";

const services = [
  { n:"01", icon:<Code2 size={22}/>, title:"Web Development", text:"Fast, responsive websites and web apps built around clean structure, performance and a polished user experience." },
  { n:"02", icon:<ShoppingBag size={22}/>, title:"E-commerce Frontend", text:"Modern storefront interfaces that make products easy to discover, compare and buy across every screen." },
  { n:"03", icon:<LayoutTemplate size={22}/>, title:"Portfolio & Landing Pages", text:"Focused personal brands, campaign pages and portfolios designed to communicate clearly and convert visitors." },
];

export default function Services() {
  return <section id="services" className="section-space bg-[#f6f4ef]">
    <div className="container-shell">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><span className="eyebrow">What I do</span><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">Built for <span className="text-[#ff674f]">real users.</span></h2></div>
        <p className="max-w-md text-sm leading-6 text-[#687082]">From marketing sites to complete frontend experiences, I care about the details people notice and the performance they don&apos;t.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((s)=><article key={s.n} className="group rounded-[24px] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-between"><span className="text-xs font-black text-[#ff674f]">{s.n}</span><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#ffe4dd] text-[#ff674f]">{s.icon}</div></div>
          <h3 className="mt-14 text-xl font-black tracking-tight">{s.title}</h3><p className="mt-3 text-sm leading-6 text-[#687082]">{s.text}</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#121826] group-hover:text-[#ff674f]">Start a project <ArrowUpRight size={14}/></a>
        </article>)}
      </div>
    </div>
  </section>;
}
