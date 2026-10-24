import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title:"Resorts Valley", tag:"Hospitality", image:"/resortvalley.png", link:"https://www.resortsvalley.com/", description:"A polished hospitality experience built around destination discovery and a calm, visual browsing journey." },
  { title:"Direct To Retail Distributor", tag:"Wholesale Distribution", image:"/DTR.png", link:"https://dtrdistro.co.uk/", description:"DTR Distro is a UK-based online store offering a range of products with convenient shopping, secure payments, and reliable delivery services." },
  { title:"Corbett Valley", tag:"Hospitality", image:"/corbettvalley.png", link:"https://corbettvalley.com/", description:"A polished hospitality experience built around destination discovery and a calm, visual browsing journey." },
  { title:"Polar Pro", tag:"Creative Commerce", image:"/polarpro.png", link:"https://www.polarpro.com/", description:"A premium product experience for filters, lenses and creative gear built for filmmakers and creators." },
  { title:"Neeca", tag:"E-commerce", image:"/neeca.png", link:"https://neers.com.pk/", description:"A modern product-focused frontend for a fan and appliance brand, designed for clarity and easy browsing." },
  { title:"Foodile", tag:"Food Commerce", image:"/foodile.png", link:"https://foodil.co/", description:"A global food export platform with a strong product catalog and a smooth international shopping flow." },
  { title:"Maaoz", tag:"Fashion", image:"/moaaz.png", link:"https://maaozofficialstore.shop/", description:"A clean fashion storefront focused on product presentation, discovery and a premium shopping feel." },
  { title:"Scotani", tag:"Business", image:"/scotani.png", link:"#", description:"A structured business interface with a strong visual hierarchy and responsive frontend experience." },
  { title:"Twala Meals", tag:"Food", image:"/twala.png", link:"#", description:"A friendly food experience designed around clear content, visual appetite and simple navigation." },
  { title:"Rogueframes", tag:"AI Creative", image:"/rogue.png", link:"https://rogueframes.com/", description:"An AI-powered creative platform concept for generating videos, photos, illustrations and digital art." },
];

export default function Projects() {
  return <section id="portfolio" className="section-space bg-white">
    <div className="container-shell">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><span className="eyebrow">Selected work</span><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">A few things I&apos;ve <span className="text-[#ff674f]">built.</span></h2></div>
        <p className="max-w-md text-sm leading-6 text-[#687082]">A compact selection of frontend projects. Hover a project to explore it, or open the live experience.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project,index)=><a key={project.title} href={project.link} target={project.link === "#" ? undefined : "_blank"} rel={project.link === "#" ? undefined : "noreferrer"} className={`project-card group block overflow-hidden rounded-[24px] border border-black/10 bg-[#f6f4ef] ${index === 0 ? "md:col-span-2" : ""}`}>
          <div className={`relative overflow-hidden ${index === 0 ? "aspect-[2.35/1]" : "aspect-[1.95/1]"}`}>
            <Image src={project.image} alt={project.title} fill className="project-image object-cover" sizes={index === 0 ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 768px) 100vw, 550px"} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/75 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
              <div><p className="mb-1 text-[10px] font-black uppercase tracking-[.18em] text-white/65">{project.tag}</p><h3 className="text-xl font-black tracking-tight">{project.title}</h3></div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#121826] transition group-hover:rotate-45"><ArrowUpRight size={17}/></span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 px-5 py-4"><p className="max-w-2xl text-xs leading-5 text-[#687082]">{project.description}</p><span className="hidden text-[10px] font-black uppercase tracking-widest text-[#ff674f] sm:block">View project</span></div>
        </a>)}
      </div>
    </div>
  </section>;
}
