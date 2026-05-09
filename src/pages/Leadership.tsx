import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const leaders = [
  {
    name: "Ashwath Krishnappa",
    role: "Cheif Advisory",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&q=85&fit=crop",
    bio: "Visionary leader with 20+ years in renewable infrastructure and strategic asset management.",
  },
  {
    name: "Poornima Pattabhi",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&q=85&fit=crop",
    bio: "Expert in grid-scale EPC execution and multi-state project commissioning cycles.",
  },
  {
    name: "Vinay Christy",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&q=85&fit=crop",
    bio: "Specializing in high-efficiency PV systems and next-gen hybrid energy storage integration.",
  },
];

export default function Leadership() {
  return (
    // Added pt-28 to clear the fixed navigation
    <section id="leadership" className="relative pt-28 pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=2400&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/96 via-white/93 to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center px-4 py-1.5 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-6">
            <span className="text-[10px] font-black text-[#2D5A27] uppercase tracking-[0.3em]">
              Board of Directors
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[0.9] tracking-tighter mb-8">
            Our Board <br />
            <span className="text-[#2D5A27]">Members.</span>
          </h2>
          <p className="text-xl text-[#1A1A1A]/90 font-medium leading-relaxed">
            Led by industry veterans, our board combines decades
            of expertise in facility management, structural
            engineering, and renewable technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden bg-gray-100 mb-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight group-hover:text-[#2D5A27] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[10px] font-black text-[#1A1A1A]/70 uppercase tracking-[0.2em]">
                  {member.role}
                </p>
                <p className="text-[#1A1A1A]/90 text-sm leading-relaxed font-medium">
                  {member.bio}
                </p>

                <div className="pt-2 flex items-center gap-2 text-[#2D5A27] text-xs font-black uppercase tracking-widest cursor-pointer group/link">
                  View Full Profile
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}