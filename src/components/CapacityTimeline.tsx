import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3 } from "lucide-react";

const timelineData = [
  { year: "2026", capacity: "Pipeline", grow: "In Development", color: "from-[#00A8E8] to-[#007EA7]", width: "15%" },
  { year: "2027", capacity: "250 MW", grow: "5.0x growth", color: "from-[#007EA7] to-[#004A7C]", width: "30%" },
  { year: "2028", capacity: "1 GW", grow: "4.0x growth", color: "from-[#004A7C] to-[#2D5A27]", width: "50%" },
  { year: "2029", capacity: "4 GW", grow: "4.0x growth", color: "from-[#2D5A27] to-[#4A8D3F]", width: "75%" },
  { year: "2030", capacity: "10 GW", grow: "2.5x growth", color: "from-[#4A8D3F] to-[#6bc73a]", width: "100%" },
];

export default function CapacityTimeline() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <Target className="w-5 h-5 text-[#2D5A27]" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#2D5A27]">Growth Trajectory</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Our Capacity Build Projection-<span className="text-[#2D5A27]">Timeline</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl font-medium">
            From our first projects in 2026 to a 10 GW ambition by 2030 — a strategic five-year deployment roadmap backed by disciplined execution and institutional-grade planning.
          </p>
        </div>

        {/* Visualized Chart Area */}
        <div className="space-y-6 relative">
          {timelineData.map((item, index) => (
            <div key={item.year} className="relative group">
              <div className="flex items-center gap-6">
                {/* Year Label */}
                <div className="w-16 text-xl font-black text-[#1A1A1A]">
                  {item.year}
                </div>

                {/* Animated Bar Container */}
                <div className="flex-1 h-16 bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-200/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "circOut" }}
                    className={`h-full bg-gradient-to-r ${item.color} relative flex items-center justify-end px-6 shadow-lg`}
                  >
                    {/* Floating Glow Effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <span className="text-white font-black text-lg">
                      {item.capacity}
                    </span>
                  </motion.div>
                </div>

                {/* Growth Metric */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (index * 0.2) + 1 }}
                  className="hidden md:flex items-center gap-2 w-32 text-sm italic text-gray-400 font-bold"
                >
                  <TrendingUp className="w-4 h-4 text-[#6bc73a]" />
                  {item.grow}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 bg-[#1A1A1A] rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#2D5A27] rounded-xl text-white">
              <BarChart3 className="w-6 h-6" />
            </div>
            <p className="text-white font-bold text-xl">
              Targeting 200× Capacity Growth In Next Five Years
            </p>
          </div>
          <div className="h-px flex-1 bg-white/10 hidden md:block mx-4" />
          <span className="text-white/60 text-xs font-black uppercase tracking-widest">
            Vision 2030 Portfolio
          </span>
        </motion.div>
      </div>
    </section>
  );
}