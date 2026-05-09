import { motion } from "framer-motion";
import { Quote, Calendar, Award, Target, Zap } from "lucide-react";

const messages = [
  {
    name: "Ashwath Krishnappa",
    role: "Chief Advisory",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85&fit=crop",
    message: "Our vision transcends beyond just providing services; it's about engineering a sustainable legacy. By integrating advanced facility management with renewable energy, we are setting new benchmarks for operational excellence.",
    alignment: "left"
  },
  {
    name: "Vinay Christy",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&q=85&fit=crop",
    message: "Efficiency is the heart of sustainability. We focus on the precision of execution—ensuring every solar asset and facility we manage operates at peak performance, reducing carbon footprints while maximizing output.",
    alignment: "right"
  },
  {
    name: "Poornima Pattabhi",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&fit=crop",
    message: "Efficiency is the heart of sustainability. We focus on the precision of execution—ensuring every solar asset and facility we manage operates at peak performance, reducing carbon footprints while maximizing output.",
    alignment: "left"
  }
];

const milestones = [
  {
    year: "2018",
    title: "The Genesis",
    description: "Inception of Potentiall Green with a focus on specialized structural engineering for solar parks.",
    icon: <Target className="w-5 h-5" />
  },
  {
    year: "2020",
    title: "100MW Milestone",
    description: "Successfully commissioned O&M services for our first 100MWp cluster across Karnataka.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    year: "2022",
    title: "Pan-India Expansion",
    description: "Expanded operations to Rajasthan and Gujarat, introducing AI-driven asset monitoring.",
    icon: <Award className="w-5 h-5" />
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched our specialized 'Atelier' division for virtual facility modeling and digital twins.",
    icon: <Calendar className="w-5 h-5" />
  }
];

export default function Leadership() {
  return (
    <main className="pt-24 bg-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative py-16 px-6 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D5A27]/20 rounded-full border border-[#2D5A27]/30 mb-4"
          >
            <span className="text-[9px] font-black text-[#6bc73a] uppercase tracking-[0.2em]">Leadership Message</span>
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter">
            Guided by <span className="text-[#6bc73a]">Purpose.</span>
          </h1>
        </div>
      </section>

      {/* --- BOARD MESSAGES --- */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-32">
          {messages.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${item.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Reduced Image Size & Refined Shape */}
              <div className="w-full lg:w-[40%]">
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl group">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A27]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Refined Typography */}
              <div className="w-full lg:w-[60%] space-y-6">
                <Quote className="w-10 h-10 text-[#2D5A27]/20" />
                <p className="text-xl lg:text-2xl font-medium text-[#1A1A1A]/90 leading-relaxed italic">
                  "{item.message}"
                </p>
                <div className="pt-2">
                  <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight">{item.name}</h3>
                  <p className="text-[#2D5A27] font-bold uppercase tracking-[0.15em] text-xs mt-1">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- JOURNEY MILESTONES (Timeline) --- */}
      <section className="py-28 bg-[#F8F9FA] px-6 lg:px-12 relative">
        {/* Subtle Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] grayscale pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=90" 
              alt="Background texture" 
              className="w-full h-full object-cover"
            />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter">
                Our <span className="text-[#2D5A27]">Journey.</span>
            </h2>
          </div>

          <div className="relative border-l border-[#2D5A27]/20 ml-6 lg:ml-auto lg:mr-auto lg:max-w-3xl">
            {milestones.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mb-16 ml-12 relative"
              >
                {/* Refined Timeline Dot */}
                <div className="absolute -left-[61px] top-0 w-11 h-11 bg-white border border-[#2D5A27]/20 rounded-2xl flex items-center justify-center text-[#2D5A27] shadow-sm group hover:border-[#2D5A27] transition-colors">
                  {step.icon}
                </div>
                
                <span className="text-3xl font-black text-[#2D5A27]/20 mb-1 block leading-none">{step.year}</span>
                <h4 className="text-xl font-black text-[#1A1A1A] mb-2">{step.title}</h4>
                <p className="text-base text-[#1A1A1A]/70 font-medium max-w-lg leading-relaxed">
                    {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}