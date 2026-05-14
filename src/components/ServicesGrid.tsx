import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Ruler, Cog, Wrench, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Consultancy & Advisory",
    description: "Feasibility studies and regulatory compliance for optimal solar deployment.",
    items: ["Site Assessment", "Financial Modeling", "Policy Compliance", "Risk Analysis"],
  },
  {
    step: "02",
    icon: Ruler,
    title: "Design & Engineering",
    description: "Precision design and technical optimization using advanced modeling.",
    items: ["System Design", "3D Modeling", "Load Analysis", "Performance Simulation"],
  },
  {
    step: "03",
    icon: Cog,
    title: "Turnkey EPC Solutions",
    description: "Complete execution from procurement to commissioning with quality guarantees.",
    items: ["Procurement", "Installation", "Grid Integration", "Commissioning"],
  },
  {
    step: "04",
    icon: Wrench,
    title: "O&M Services",
    description: "Asset management programs ensuring long-term performance optimization.",
    items: ["Remote Monitoring", "Preventive Care", "Optimization", "Warranty Support"],
  },
];

export default function ServicesGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dynamic movement of the background image
  const xMovement = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden bg-[#0a0a0a]">
      {/* Fixed Background Image Implementation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ 
            backgroundImage: "url('/image_0b682b.jpg')",
            x: xMovement 
          }}
          className="absolute inset-0 bg-cover bg-center opacity-90 scale-110"
        />
        {/* Adjusted gradient: less black, more transparency in the middle to show the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#6bc73a]/10 backdrop-blur-md rounded-full border border-[#6bc73a]/20 mb-6">
              <span className="text-[10px] font-black text-[#6bc73a] uppercase tracking-[0.3em]">
                Full Spectrum EPC
              </span>
            </div>
            {/* Heading size synced with Impact section */}
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter">
              The Solar <br />
              <span className="text-[#6bc73a]">Lifecycle.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg font-medium max-w-sm border-l-2 border-[#6bc73a] pl-8 mb-4"
          >
            A vertically integrated approach to developing and managing high-yield 
            renewable energy infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -12 }}
              className="group relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 hover:bg-[#6bc73a]/10 hover:border-[#6bc73a]/50 transition-all duration-500"
            >
              {/* Step Indicator */}
              <div className="text-7xl font-black text-white/[0.05] group-hover:text-[#6bc73a]/20 transition-colors absolute top-6 right-8">
                {service.step}
              </div>

              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#6bc73a] group-hover:shadow-[0_0_30px_rgba(107,199,58,0.4)] transition-all duration-500">
                <service.icon className="w-7 h-7 text-[#6bc73a] group-hover:text-black transition-colors" />
              </div>

              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[#6bc73a] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium group-hover:text-gray-100 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                    <div className="w-1 h-1 bg-[#6bc73a] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-all">
                <span className="text-[10px] font-black text-[#6bc73a] uppercase tracking-widest">
                  View Phase details
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#6bc73a]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}