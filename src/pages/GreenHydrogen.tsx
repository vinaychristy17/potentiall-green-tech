import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Settings, Zap, BarChart, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SolarEPC() {
  const navigate = useNavigate();

  return (
    <main className="pt-24 bg-white overflow-hidden">
      {/* PHOTO 1: Hero - Clear & Descriptive Heading */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#6bc73a] font-black uppercase tracking-widest text-xs mb-4">
            Industrial Solutions
          </motion.div>
          <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Green <span className="text-[#6bc73a]">Hydrogen.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-400 font-medium leading-relaxed">
            Delivering high-performance, turnkey solar energy solutions through world-class Engineering, Procurement, and Construction.
          </p>
        </div>
      </section>

      {/* PHOTO 2: Sub-Services (Capabilities) */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-16 tracking-tight">Our Specialized Sub-Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Electrolyzer Tech", desc: "Large scale solar farms designed for grid-tie stability." },
              { title: "H2 Storage", desc: "Optimizing industrial roof space for captive consumption." },
              { title: "Industrial Fuel", desc: "Innovative water-based installations to save land and reduce evaporation." }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-white rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl mb-6 flex items-center justify-center text-[#2D5A27]"><Zap /></div>
                <h3 className="text-xl font-black mb-4">{s.title}</h3>
                <p className="text-gray-500 font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO 3: Key Success Milestones */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black tracking-tighter mb-8">Factors of <span className="text-[#2D5A27]">Success.</span></h2>
            <div className="space-y-6">
              {[
                "Precision Site Assessment & Shadow Analysis",
                "Tier-1 Global Component Sourcing",
                "Advanced SCADA Monitoring Integration"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#6bc73a] shrink-0" />
                  <p className="text-lg font-bold text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" className="rounded-[40px] shadow-2xl" alt="Success Factor" />
          </div>
        </div>
      </section>

      {/* PHOTO 4: Our Step-by-Step Procedure */}
      <section className="py-24 px-6 lg:px-12 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">The EPC Lifecycle</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", t: "Renewable Supply", d: "Detailed technical & financial viability studies." },
              { step: "02", t: "Electrolysis", d: "Custom structural and electrical blueprints." },
              { step: "03", t: "Compression", d: "Global sourcing of high-efficiency modules." },
              { step: "04", t: "Storage & Logistics", d: "Rapid on-site installation and grid testing." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-[30px] bg-white/5 backdrop-blur-sm">
                <span className="text-[#6bc73a] font-black text-4xl mb-4 block opacity-50">{item.step}</span>
                <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                <p className="text-gray-400 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO 5: Why Choose Potentiall? */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black tracking-tighter mb-12">Why Potentiall <span className="text-[#2D5A27]">Green?</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield />, t: "Certified Quality" },
              { icon: <BarChart />, t: "Maximized ROI" },
              { icon: <Settings />, t: "Adaptive Tech" },
              { icon: <Globe />, t: "Global Standards" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-[#2D5A27] mb-4">{item.icon}</div>
                <p className="font-black uppercase text-[10px] tracking-widest">{item.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO 6: Redirecting CTA Section */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#2D5A27] rounded-[50px] p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter mb-6">
              Start Your Solar <br /> Transformation Today.
            </h2>
            <p className="text-white/70 font-medium text-lg">Consult with our expert engineers for a custom quote.</p>
          </div>
          <button 
            onClick={() => navigate("/contact")}
            className="relative z-10 bg-white text-[#1A1A1A] px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#6bc73a] hover:text-white transition-all flex items-center gap-3"
          >
            Request Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}