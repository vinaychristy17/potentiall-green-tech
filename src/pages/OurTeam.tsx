import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const teams = {
  technical: [
    {
      name: "Arjun Mehta",
      role: "Lead Solar Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      name: "Sneha Rao",
      role: "Infrastructure Architect",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    },
    {
      name: "Vikram Singh",
      role: "ML Engineer (Computer Vision)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      name: "Riya Kapoor",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    },
  ],
  operations: [
    {
      name: "Rahul Verma",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
    {
      name: "David D'Souza",
      role: "Client Success Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    },
    {
      name: "Ananya Iyer",
      role: "Supply Chain Coordinator",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
    },
  ],
};

type TeamType = "technical" | "operations";

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState<TeamType>("technical");

  return (
    <main className="pt-32 bg-white min-h-screen">
      {/* Header Section */}
      <section className="pb-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-6"
          >
            <span className="text-[10px] font-black text-[#2D5A27] uppercase tracking-[0.2em]">
              The People Behind Potentiall
            </span>
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight tracking-tighter mb-8">
            The Experts Powering <br />
            <span className="text-[#2D5A27]">Our Innovation.</span>
          </h1>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-[24px] border border-gray-200 mt-4 relative">
            {(["technical", "operations"] as TeamType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-[20px] z-10 ${
                  activeTab === tab ? "text-white" : "text-gray-500 hover:text-[#1A1A1A]"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-[#2D5A27] rounded-[20px] z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab === "technical" ? "Technical Team" : "Operations Team"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* We use a standard div here to ensure the grid structure is stable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {teams[activeTab].map((member, idx) => (
                <motion.div
                  key={`${activeTab}-${member.name}`} // Unique key is vital
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-50 mb-6 border border-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A27]/90 via-[#2D5A27]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                      <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#2D5A27] transition-all">
                          {/* <Linkedin className="w-4 h-4" /> */}
                        </a>
                        <a href={`mailto:info@potentiall.com`} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#2D5A27] transition-all">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="px-2">
                    <h3 className="text-xl font-black text-[#1A1A1A] group-hover:text-[#2D5A27] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1.5">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] mb-6">
              Join the <span className="text-[#6bc73a]">Green Force.</span>
            </h2>
            <p className="text-gray-400 font-medium text-lg leading-relaxed">
              We're looking for individuals who are passionate about scaling renewable energy infrastructure across the globe.
            </p>
          </div>
          <button className="group flex items-center gap-4 bg-[#2D5A27] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#6bc73a] transition-all duration-500 shadow-xl shadow-[#2D5A27]/20">
            View Openings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}