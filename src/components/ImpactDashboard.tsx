import { motion } from "framer-motion";
import { Battery, Users, Leaf, TrendingUp, BarChart3, type LucideIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface Metric {
  icon: LucideIcon;
  value: number;
  suffix: string;
  unit: string;
  label: string;
  description: string;
  context: string; // Added for descriptive understanding
  color: string;
  bgImage: string;
}

const metrics: Metric[] = [
  {
    icon: Battery,
    value: 50,
    suffix: "+",
    unit: "MW",
    label: "Pipeline Capacity",
    description: "Projects in development",
    context: "Initial solar project pipeline across South India, with capacity targets scaling rapidly through 2027.",
    color: "#6bc73a",
    bgImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    unit: "Partners",
    label: "Early Partners",
    description: "Strategic partnerships",
    context: "Building a trusted network of clients and partners across manufacturing and energy sectors in India.",
    color: "#6bc73a",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Leaf,
    value: 2026,
    suffix: "",
    unit: "",
    label: "Founded",
    description: "Year of incorporation",
    context: "Launched in 2026 as a dedicated solar EPC entity, spun off from Potentiall Facility Services.",
    color: "#6bc73a",
    bgImage: "https://images.unsplash.com/photo-1466611653911-954ffaa137a8?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: " GW",
    unit: "",
    label: "Vision 2030",
    description: "Capacity target",
    context: "A bold five-year growth trajectory from pipeline to 10 GW — powered by institutional capital and execution discipline.",
    color: "#6bc73a",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
  },
];

export default function ImpactDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-dashboard"
      className="relative py-16 overflow-hidden bg-white" // Changed to white/bright bg
    >
      {/* Background Layer - Brightened and Optimized */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }} // Increased opacity for "Brightened" look
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2400')",
          }}
        />
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6bc73a]/10 backdrop-blur-md rounded-full border border-[#6bc73a]/20 mb-4">
              <BarChart3 className="w-3.5 h-3.5 text-[#6bc73a]" />
              <span className="text-[9px] font-black text-[#004A7C] uppercase tracking-[0.3em]">
                Measurable Value
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#004A7C] leading-[1.1] tracking-tighter">
              Defining the <br />
              <span className="text-[#6bc73a]">Future of Energy.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base font-medium max-w-sm border-l-2 border-[#6bc73a] pl-6 mb-2"
          >
            We are at the start of an ambitious journey — building India's next major solar 
            EPC company from the ground up, with real projects, real partners, and a clear 2030 roadmap.
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 h-[380px] flex flex-col justify-between rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#6bc73a]/30 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#6bc73a] group-hover:shadow-[0_10px_20px_rgba(107,199,58,0.2)] transition-all duration-500">
                    <metric.icon className="w-7 h-7 text-[#004A7C] group-hover:text-white transition-colors" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-[#6bc73a] uppercase tracking-widest">
                      {metric.label}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-[#004A7C] tracking-tighter">
                        {isVisible ? <CountUp end={metric.value} /> : "0"}
                        <span className="text-[#6bc73a] ml-1">{metric.suffix}</span>
                      </span>
                      <span className="text-lg font-bold text-gray-400">{metric.unit}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 space-y-3">
                  <p className="text-sm font-bold text-[#004A7C]">
                    {metric.description}
                  </p>
                  <p className="text-[12px] font-medium text-gray-500 leading-relaxed">
                    {metric.context}
                  </p>
                </div>
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6bc73a]/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-[#6bc73a]/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (end === 0) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}</span>;
}