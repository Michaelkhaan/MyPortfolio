import Image from "next/image";
import { ArrowUpRight, Code2, Layers3, Smartphone } from "lucide-react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Redux", "Git", "REST API"];

export default function About() {
  return (
    <section id="about" className="section-space bg-white">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative mx-auto w-full max-w-[350px]">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#ffe4dd]" />
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#f6f4ef] p-3 shadow-xl">
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px]">
                <Image src="/myimage.png" alt="Mekaiel Khan" fill className="object-cover" sizes="350px" />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-[#121826] px-4 py-3 text-white shadow-xl">
              <p className="text-2xl font-black">09+</p><p className="text-[10px] uppercase tracking-widest text-white/50">Core skills</p>
            </div>
          </div>

          <div>
            <span className="eyebrow">About me</span>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-.04em] sm:text-5xl">Design-minded code, <span className="text-[#ff674f]">without the clutter.</span></h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#687082]">I&apos;m a results-driven Front-End Developer passionate about UI/UX and modern web technologies. I turn complex ideas into responsive, maintainable and high-performing interfaces with a strong focus on clarity and user experience.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[{icon:<Code2 size={19}/>,title:"Clean code"},{icon:<Layers3 size={19}/>,title:"Scalable UI"},{icon:<Smartphone size={19}/>,title:"Responsive"}].map((item)=><div key={item.title} className="rounded-2xl border border-black/10 bg-[#f6f4ef] p-4"><div className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-white text-[#ff674f] shadow-sm">{item.icon}</div><p className="text-sm font-black">{item.title}</p></div>)}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill)=><span key={skill} className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#687082]">{skill}</span>)}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#121826] hover:text-[#ff674f]">Let&apos;s work together <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
