import { motion } from "framer-motion";
import { Clock, Shield, TrendingUp, Users, Award, HeadphonesIcon, CheckCircle2 } from "lucide-react";

const row1 = [
  {
    icon: Clock,
    title: "Precision Timelines",
    description: "Zero-delay track record powered by proprietary project management frameworks.",
    tag: "Operational",
    img: "/Precisive-timeline.jpg",
  },
  {
    icon: Shield,
    title: "ISO-Grade Quality",
    description: "Rigorous quality assurance protocols certified to international solar standards.",
    tag: "Compliance",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Yield Assurance",
    description: "Industry-leading 98% uptime with performance warranties spanning 25 years.",
    tag: "Reliability",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const row2 = [
  {
    icon: Users,
    title: "Elite Engineering",
    description: "500+ specialized technicians trained in high-complexity grid deployments.",
    tag: "Human Capital",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Award,
    title: "Scale at Speed",
    description: "900+ MWp commissioned across diverse, high-challenge terrains.",
    tag: "Track Record",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: HeadphonesIcon,
    title: "Active Monitoring",
    description: "Round-the-clock telemetry and support ensuring continuous grid health.",
    tag: "24/7 Support",
    img: "/Monitoring.jpeg",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* Solar Panels Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-5 py-2.5 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-6">
              <span className="text-[11px] font-black text-[#2D5A27] uppercase tracking-[0.3em]">
                The Potentiall Edge
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[0.9] tracking-tighter">
              Our Identity & <br />
              <span className="text-[#2D5A27]">Excellence.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#1A1A1A] text-xl font-medium max-w-sm"
          >
            Delivering unmatched asset value through technical rigor and operational maturity.
          </motion.p>
        </div>

        {/* Marquee Row 1 - Transparency masks removed */}
        <div className="flex mb-8 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap px-4"
          >
            {[...row1, ...row1, ...row1].map((advantage, index) => (
              <AdvantageCard key={index} advantage={advantage} />
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 - Transparency masks removed */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [-1200, 0] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap px-4"
          >
            {[...row2, ...row2, ...row2].map((advantage, index) => (
              <AdvantageCard key={index} advantage={advantage} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 py-8 border-t border-[#2D5A27]/20 text-center"
        >
          <div className="text-[11px] font-black text-[#1A1A1A]/70 uppercase tracking-widest">
            ISO 9001:2015 <span className="mx-3 text-[#2D5A27]">|</span> ISO 14001:2015{" "}
            <span className="mx-3 text-[#2D5A27]">|</span> OHSAS 18001
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AdvantageCard({ advantage }: { advantage: any }) {
  return (
    <div className="group relative w-[400px] flex-shrink-0 h-[280px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border border-white/10">
      {/* High-Relevance Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${advantage.img})` }}
      />
      
      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
      
      <div className="relative h-full p-8 flex flex-col justify-end z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-[#2D5A27] transition-all duration-500 border border-white/20">
            <advantage.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-white/60">
            {advantage.tag}
          </span>
        </div>

        <h3 className="text-2xl font-black text-white tracking-tight mb-2">
          {advantage.title}
        </h3>

        <p className="text-white/80 text-xs font-medium leading-relaxed whitespace-normal">
          {advantage.description}
        </p>

        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">
            Verified Protocol
          </span>
        </div>
      </div>
    </div>
  );
}