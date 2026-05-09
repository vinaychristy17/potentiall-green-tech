import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Solar Installation Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-float-medium"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/78 to-white/75" />

        {/* Animated glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#88f452]/30 rounded-full blur-[120px] animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-5 py-2.5 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-8">
            <div className="w-2.5 h-2.5 bg-[#2D5A27] rounded-full animate-pulse mr-3" />
            <span className="text-[11px] font-black text-[#2D5A27] uppercase tracking-[0.25em]">
              Our Heritage
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.05] tracking-tight mb-8">
            Leading the Solar <br />
            <span className="text-[#2D5A27]">Revolution</span> in India
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-xl text-[#1A1A1A] leading-relaxed font-medium">
              Born from the legacy of <span className="font-black">Potentiall Facility Services</span>,
              we bring decades of infrastructure excellence to the renewable energy sector. Since 2018,
              Potentiall Green has emerged as a premier Solar EPC provider.
            </p>

            <p className="text-lg text-[#1A1A1A]/90 leading-relaxed font-medium">
              We combine technical expertise with proven execution capabilities to deliver solar power
              plants that exceed performance expectations across 15+ Indian states.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "ISO 9001:2015 Certified",
              "900+ MWp Commissioned",
              "98% System Uptime",
              "24/7 O&M Support",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2D5A27]/10 hover:border-[#2D5A27]/30 hover:bg-white transition-all group"
              >
                <CheckCircle2 className="w-6 h-6 text-[#2D5A27] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>

          <button className="group px-10 py-5 bg-[#2D5A27] text-white rounded-2xl font-black hover:bg-[#1A1A1A] transition-all hover:shadow-[0_20px_40px_rgba(45,90,39,0.3)] hover:-translate-y-1">
            <span className="flex items-center gap-3">
              Learn More About Us
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
