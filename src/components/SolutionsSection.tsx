import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Sun, Wind, Battery, Droplets, Car, Building2 } from "lucide-react";
import { Link } from "react-router-dom"; 

const services = [
  {
    title: "Solar EPC",
    path: "/services/solar-epc",
    icon: Sun,
    description: "End-to-end engineering and construction for utility-scale solar projects.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    title: "Renewable Energy IPP",
    path: "/services/solar-ipp",
    icon: Building2,
    description: "Independent Power Producer model for long-term sustainable energy assets.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
  },
  {
    title: "Green Hydrogen",
    path: "/services/green-hydrogen",
    icon: Droplets,
    description: "Electrolysis infrastructure for carbon-free industrial fuel production.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80",
  },
  {
    title: "EV Solutions",
    path: "/services/ev",
    icon: Car,
    description: "Smart charging infrastructure and electrification for modern mobility.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  },
  {
    title: "Wind-Solar Hybrid",
    path: "/services/hybrid",
    icon: Wind,
    description: "Synergistic plants leveraging both sun and wind for stable output.",
    image: "/Hybrid.jpg",
  },
  {
    title: "BESS Solutions",
    path: "/services/bess",
    icon: Battery,
    description: "Battery storage systems for grid stability and energy arbitrage.",
    image: "BESS.webp",
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-4">
              <Zap className="w-3.5 h-3.5 text-[#2D5A27]" />
              <span className="text-[10px] font-black text-[#004A7C] uppercase tracking-[0.2em]">
                Excellence in Execution
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#004A7C] leading-[1.1] tracking-tighter">
              Our <span className="text-[#2D5A27]">Services.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm font-medium max-w-sm border-l-2 border-[#2D5A27] pl-6 mb-1"
          >
            A comprehensive ecosystem of renewable infrastructure built for the next generation.
          </motion.p>
        </div>

        {/* 6-Service Grid (Compact 3x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.path} key={index} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-[380px] rounded-[2.5rem] overflow-hidden bg-[#004A7C] shadow-lg hover:shadow-xl hover:shadow-[#2D5A27]/10 transition-all duration-500"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-100 group-hover:opacity-100"
                  // className="absolute inset-0 bg-slate-900/35 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-slate-900/50 group-hover:backdrop-blur-none"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#004A7C] via-[#004A7C]/40 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#2D5A27] flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-[#2D5A27] group-hover:border-[#2D5A27] transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-white tracking-tighter leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {service.description}
                    </p>
                    <div className="pt-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#2D5A27] flex items-center gap-2">
                        View Details <div className="w-3 h-[1px] bg-[#2D5A27]" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-[#2D5A27] w-0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}