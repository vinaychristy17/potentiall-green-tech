import { motion } from "framer-motion";
import { MapPin, Zap, ArrowUpRight, Shovel } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projects = [
  {
    name: "Karnataka Solar Park",
    location: "Bidar, Karnataka",
    capacity: "250 MWp",
    type: "Ground-Mounted",
    status: "Operational",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
    metrics: ["1.2M Panels", "Zero Water Cleaning"],
  },
  {
    name: "Gujarat Floating Solar",
    location: "Narmada, Gujarat",
    capacity: "180 MWp",
    type: "Floating Solar",
    status: "Operational",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    metrics: ["Cooling Efficiency +15%", "Reservoir Integration"],
  },
  {
    name: "Maharashtra Rooftop",
    location: "Pune, Maharashtra",
    capacity: "95 MWp",
    type: "Rooftop Commercial",
    status: "Operational",
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80",
    metrics: ["Industrial Grade", "Smart Load Balancing"],
  },
  {
    name: "Andhra Pradesh Ground Mount",
    location: "Anantapur, Andhra Pradesh",
    capacity: "150 MWp",
    type: "Ground-Mounted",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    metrics: ["Phase 2/3", "Regional Grid Sync"],
  },
];

export default function ProjectsSection() {
  return (
    // Added pt-28 to clear the fixed navigation
    <section id="projects" className="relative pt-28 pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/87 to-white/85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-6">
              <span className="text-[10px] font-black text-[#2D5A27] uppercase tracking-[0.3em]">
                Project Portfolio
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[0.85] tracking-tighter">
              Powering the <br />
              <span className="text-[#2D5A27]">New Areas.</span>
            </h2>
          </motion.div>
          <p className="text-[#1A1A1A]/90 text-xl font-medium max-w-md pb-2">
            Engineering resilient renewable energy systems across India's most challenging terrains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden bg-gray-100 mb-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)]">
                <div className="absolute top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl">
                  {project.status === "Operational" ? <Zap className="w-3 h-3 text-[#2D5A27]" /> : <Shovel className="w-3 h-3 text-amber-600" />}
                  <span className="text-[10px] font-black uppercase tracking-widest">{project.status}</span>
                </div>
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#2D5A27] text-[10px] font-black uppercase tracking-[0.2em]">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </div>
                  <h3 className="text-3xl font-black text-[#1A1A1A] tracking-tighter group-hover:text-[#2D5A27] transition-colors">{project.name}</h3>
                </div>
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#2D5A27] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}