import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";

const plants = [
  {
    name: "Karnataka Gulbarga",
    state: "Karnataka",
    capacity: "150 MWp",
    status: "Active",
    x: 395,
    y: 540,
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Tamil Nadu Kamuthi",
    state: "Tamil Nadu",
    capacity: "200 MWp",
    status: "Upcoming",
    x: 425,
    y: 630,
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Telangana Floating Solar",
    state: "Telangana",
    capacity: "120 MWp",
    status: "Active",
    x: 440,
    y: 460,
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Andhra Pradesh Anantapur",
    state: "Andhra Pradesh",
    capacity: "150 MWp",
    status: "Active",
    x: 460,
    y: 530,
    img: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Maharastra Rooftop Grid",
    state: "Maharastra",
    capacity: "500 MWp",
    status: "Upcoming",
    x: 375,
    y: 610,
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Karnataka Bidar",
    state: "Karnataka",
    capacity: "150 MWp",
    status: "Optimizing",
    x: 415,
    y: 420,
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=800"
  },
];

export default function NetworkMap() {
  return (
    <section className="relative py-16 overflow-hidden bg-white text-[#004A7C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A27]/10 rounded-full mb-6 backdrop-blur">
              <Globe className="w-4 h-4 text-[#6bc73a]" />
              <span className="text-[11px] font-black text-[#2D5A27] uppercase tracking-widest">
                National Infrastructure
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-[#004A7C]">
              The Pan-India <br />
              <span className="text-[#2D5A27]">Development Vision-2030 </span>
            </h2>
          </motion.div>

          <p className="text-gray-500 text-lg max-w-sm">
            A high-efficiency renewable network perfectly synchronized across the Southern peninsula.
          </p>
        </div>

  
        {/* 🌍 IMAGE PLACEHOLDER (Replacing Grid/SVG) */}
        <div className="relative w-full h-[720px] flex items-center justify-center mb-20 rounded-[60px] bg-gray-100 border border-gray-200 shadow-xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 0.15, scale: 1 }} /* SOFTEN: Setting opacity to 0.25 (25%) avoids domination */
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: "url('/Solar-city-image.png')", /* Replace with your actual image path */
            }}
          />
          <img 
            src="/IndiaMap.png" 
            alt="Development Grid Visual" 
            className="w-auto h-auto object-cover"
          />
        </div>

        {/* PROJECT CARDS (Retained as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[240px] rounded-[28px] overflow-hidden bg-white border border-gray-100 shadow-md"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${plant.img})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-[#6bc73a] uppercase font-bold">
                    {plant.state}
                  </span>
                  <span className="text-[10px] px-2 py-1 bg-[#6bc73a] text-white rounded-full">
                    {plant.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white">{plant.name}</h4>

                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Zap className="w-4 h-4 text-[#6bc73a]" />
                  {plant.capacity}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}