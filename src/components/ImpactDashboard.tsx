// import { motion } from "framer-motion";
// import { Battery, Users, Leaf, TrendingUp, ChevronLeft, ChevronRight, Activity, type LucideIcon } from "lucide-react";
// import { useEffect, useState, useRef } from "react";

// interface Metric {
//   icon: LucideIcon;
//   value: number;
//   suffix: string;
//   unit: string;
//   label: string;
//   description: string;
//   color: string;
//   bgImage: string;
// }

// const metrics: Metric[] = [
//   {
//     icon: Battery,
//     value: 900,
//     suffix: "+",
//     unit: "MWp",
//     label: "Total Capacity",
//     description: "Grid-scale deployment",
//     color: "#6bc73a",
//     bgImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
//   },
//   {
//     icon: Users,
//     value: 150,
//     suffix: "+",
//     unit: "Clients",
//     label: "Active Partners",
//     description: "Strategic partnerships",
//     color: "#6bc73a",
//     bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
//   },
//   {
//     icon: Leaf,
//     value: 2,
//     suffix: "M+",
//     unit: "Tons",
//     label: "Carbon Offset",
//     description: "Environmental impact",
//     color: "#6bc73a",
//     bgImage: "https://images.unsplash.com/photo-1466611653911-954ffaa137a8?auto=format&fit=crop&q=80&w=600",
//   },
//   {
//     icon: TrendingUp,
//     value: 98,
//     suffix: "%",
//     unit: "",
//     label: "Reliability",
//     description: "Operational excellence",
//     color: "#6bc73a",
//     bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
//   },
// ];

// export default function ImpactDashboard() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % metrics.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + metrics.length) % metrics.length);

//   return (
//     <section
//       ref={sectionRef}
//       id="impact-dashboard"
//       className="relative py-24 overflow-hidden bg-[#0a0a0a]"
//     >
//       {/* Background Layer */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//           initial={{ scale: 1.05, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2400')",
//           }}
//         />
//         {/* Adjusted Gradient for better visibility */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]/90" />
        
//         <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
//           <motion.path
//             d="M0 400 Q 200 350 400 400 T 800 400 T 1200 350 T 1600 400"
//             fill="none"
//             stroke="#6bc73a"
//             strokeWidth="0.5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
//             transition={{ duration: 3, ease: "easeInOut" }}
//           />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-4">
//               <Activity className="w-3.5 h-3.5 text-[#6bc73a] animate-pulse" />
//               <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">
//                 Live Analytics
//               </span>
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter">
//               The Physics of <br />
//               <span className="text-[#6bc73a]">Our Impact.</span>
//             </h2>
//           </motion.div>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-gray-300 text-base font-medium max-w-sm border-l border-[#6bc73a]/50 pl-6 mb-2"
//           >
//             Deploying grid-scale renewable assets with real-time precision and 
//             operational transparency.
//           </motion.p>
//         </div>

//         <div className="relative">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//             {metrics.map((metric, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="group relative p-7 h-[300px] flex flex-col justify-between rounded-[2rem] overflow-hidden transition-all duration-500"
//               >
//                 {/* CARD BACKGROUND IMAGE (Solar Tech) */}
//                 <div 
//                   className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 scale-105 group-hover:scale-110 opacity-15 group-hover:opacity-40 grayscale group-hover:grayscale-0"
//                   style={{ backgroundImage: `url(${metric.bgImage})` }}
//                 />

//                 {/* Glass Blur Overlay */}
//                 <div className="absolute inset-0 z-[1] bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-[#6bc73a]/50 group-hover:bg-[#6bc73a]/5 transition-all duration-500" />
                
//                 <div className="relative z-10">
//                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#6bc73a] group-hover:shadow-[0_0_20px_rgba(107,199,58,0.3)] transition-all duration-500">
//                     <metric.icon className="w-6 h-6 text-[#6bc73a] group-hover:text-black transition-colors" />
//                   </div>

//                   <div className="space-y-0.5">
//                     <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#6bc73a] transition-colors">
//                       {metric.label}
//                     </p>
//                     <div className="flex items-baseline gap-1">
//                       <span className="text-4xl font-black text-white tracking-tighter italic">
//                         {isVisible ? <CountUp end={metric.value} /> : "0"}
//                         <span className="text-[#6bc73a] ml-1">{metric.suffix}</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative z-10">
//                   <p className="text-[11px] font-semibold text-gray-300 leading-relaxed group-hover:text-white transition-colors">
//                     {metric.description}
//                   </p>
//                 </div>
                
//                 {/* Interactive Accent Line */}
//                 <div className="absolute bottom-0 left-0 h-[3px] bg-[#6bc73a] w-0 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#6bc73a]" />
//               </motion.div>
//             ))}
//           </div>

//           {/* Controls */}
//           <div className="flex justify-center items-center gap-6 mt-12">
//             <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#6bc73a] hover:border-[#6bc73a] transition-all group">
//               <ChevronLeft className="w-4 h-4 text-white group-hover:text-black" />
//             </button>
//             <div className="flex gap-2.5">
//               {metrics.map((_, index) => (
//                 <div key={index} className={`h-1 rounded-full transition-all duration-500 ${currentSlide === index ? "w-8 bg-[#6bc73a]" : "w-1.5 bg-white/20"}`} />
//               ))}
//             </div>
//             <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#6bc73a] hover:border-[#6bc73a] transition-all group">
//               <ChevronRight className="w-4 h-4 text-white group-hover:text-black" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CountUp({ end }: { end: number }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = end / (duration / 16);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) { setCount(end); clearInterval(timer); }
//       else { setCount(Math.floor(start)); }
//     }, 16);
//     return () => clearInterval(timer);
//   }, [end]);
//   return <span>{count}</span>;
// }

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
    value: 900,
    suffix: "+",
    unit: "MWp",
    label: "Total Capacity",
    description: "Grid-scale deployment",
    context: "Sufficient to power over 650,000 homes with clean, sustainable energy annually.",
    color: "#6bc73a",
    bgImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Users,
    value: 20,
    suffix: "+",
    unit: "Clients",
    label: "Active Partners",
    description: "Strategic partnerships",
    context: "Trusted by industry leaders across 12 states to drive India's energy transition.",
    color: "#6bc73a",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Leaf,
    value: 2,
    suffix: "M+",
    unit: "Tons",
    label: "Carbon Offset",
    description: "Environmental impact",
    context: "Equivalent to planting 33 million trees or removing 400,000 cars from the road.",
    color: "#6bc73a",
    bgImage: "https://images.unsplash.com/photo-1466611653911-954ffaa137a8?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    unit: "",
    label: "Reliability",
    description: "Operational excellence",
    context: "Advanced AI monitoring ensuring maximum uptime and optimized asset performance.",
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
            We transform raw potential into high-performance renewable infrastructure, 
            delivering absolute transparency through data-driven results.
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