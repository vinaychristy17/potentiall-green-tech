import { motion } from "framer-motion";
import { ExternalLink, Newspaper, } from "lucide-react";

const newsItems = [
  {
    title: "Potentiall Green Awarded 500MW Solar EPC Contract",
    source: "Financial Express",
    date: "May 01, 2026",
    link: "#"
  },
  {
    title: "New Battery Storage Hub Launched in Bengaluru",
    source: "Clean Energy Times",
    date: "April 15, 2026",
    link: "#"
  }
];

export default function News() {
  return (
    <main className="pt-28 pb-24 bg-[#1A1A1A] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-20">
          <p className="text-[#6bc73a] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Media Center</p>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">In The <span className="text-[#6bc73a]">News.</span></h1>
        </header>

        <div className="space-y-6">
          {newsItems.map((item, i) => (
            <motion.a 
              key={i}
              href={item.link}
              target="_blank"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-[#6bc73a] hover:text-[#1A1A1A] transition-all group"
            >
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <Newspaper className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">{item.source}</span>
                    <span className="w-1 h-1 bg-[#6bc73a] rounded-full group-hover:bg-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                </div>
              </div>
              <ExternalLink className="w-6 h-6 mt-6 md:mt-0 opacity-20 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}