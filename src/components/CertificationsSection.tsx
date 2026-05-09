import { Award, Shield, FileCheck, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    bg: "https://images.unsplash.com/photo-1581091870627-3f9f6a1d1b0e?w=1200&q=80",
    desc: "Ensures consistent product quality and customer satisfaction.",
  },
  {
    icon: Shield,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    bg: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    desc: "Minimizing environmental impact through sustainable practices.",
  },
  {
    icon: FileCheck,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    bg: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80",
    desc: "Ensuring safe and healthy working environments.",
  },
  {
    icon: Target,
    title: "MNRE Approved",
    subtitle: "Govt. of India Recognition",
    bg: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=80",
    desc: "Certified under India's renewable energy authority.",
  },
];

export default function CertificationsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/96 via-white/94 to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-6">
            <span className="text-[10px] font-black text-[#2D5A27] uppercase tracking-[0.3em]">
              Global Standards
            </span>
          </div>

          <h2 className="text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
            Trust & <span className="text-[#2D5A27]">Compliance</span>
          </h2>

          <p className="text-lg text-[#1A1A1A]/90 font-medium max-w-2xl mx-auto">
            Potentiall Green operates under the most stringent international frameworks.
          </p>
        </div>

        {/* 🔥 MARQUEE */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative min-w-[300px] h-[260px] rounded-[32px] overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cert.bg})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <cert.icon className="w-8 h-8 text-green-300" />
                  </div>

                  <h3 className="text-lg font-bold">{cert.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-white/80">
                    {cert.subtitle}
                  </p>
                </div>

                {/* Hover Tooltip */}
                {hovered === index && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg backdrop-blur-md">
                    {cert.desc}
                  </div>
                )}

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-400 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}