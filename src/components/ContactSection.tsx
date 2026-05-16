import { ArrowRight, Download, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 overflow-hidden">
      {/* Solar Technology Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A27]/95 via-[#1A1A1A]/90 to-[#2D5A27]/85" />

        {/* Energy glow effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#88f452]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#88f452]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-bounce-slow">
          <Zap className="w-4 h-4 text-[#88f452] fill-[#88f452]" />
          <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
            Ignite Your Transition
          </span>
        </div>

        <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
          Ready to Power <br /> <span className="text-[#88f452]">Your Future?</span>
        </h2>

        <p className="text-xl text-white font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
          Partner with a solar EPC company built for India's clean energy future. Get a comprehensive
          consultation and a bespoke energy roadmap tailored to your project.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link to="/contact">
          <button className="group px-12 py-5 bg-white text-[#2D5A27] rounded-2xl font-black text-lg hover:bg-[#88f452] hover:text-[#1A1A1A] transition-all hover:shadow-[0_20px_50px_rgba(136,244,82,0.3)] hover:-translate-y-1">
            <span className="flex items-center gap-3">
              Request Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
          </Link>

          <button className="px-12 py-5 border-2 border-white/40 text-white rounded-2xl font-black text-lg backdrop-blur-sm hover:bg-white hover:text-[#2D5A27] hover:border-white transition-all duration-500 flex items-center gap-3">
            <Download className="w-5 h-5" />
            Company Brochure
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/20">
          {[
            { label: "Customer Support", value: "24/7", sub: "Live Technical Desk" },
            { label: "Project Assessment", value: "30 Days", sub: "Concept to Design" },
            { label: "Performance Warranty", value: "25 Years", sub: "End-to-End Coverage" },
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <div className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-[11px] font-black text-white/80 uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#88f452] font-bold bg-white/10 inline-block px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
