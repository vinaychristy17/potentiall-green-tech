export default function ClientShowcase() {
  const clients = [
    { name: "Client One", logo: "/api/placeholder/200/80" },
    { name: "Client Two", logo: "/api/placeholder/200/80" },
    { name: "Client Three", logo: "/api/placeholder/200/80" },
    { name: "Client Four", logo: "/api/placeholder/200/80" },
    { name: "Client Five", logo: "/api/placeholder/200/80" },
    { name: "Client Six", logo: "/api/placeholder/200/80" },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Energy Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/96 via-[#1A1A1A]/93 to-[#2D5A27]/90" />

        {/* Dynamic particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#88f452]/30 rounded-full animate-float-small"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-[#2D5A27]/20 rounded-full border border-[#2D5A27]/30 mb-6">
              <span className="text-[10px] font-black text-[#2D5A27] uppercase tracking-[0.3em]">
                Our Footprint
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter">
              The Network <br />
              <span className="text-[#2D5A27]">
                Spread Across
              </span>{" "}
              <br />
              the Nation.
            </h2>
          </div>

          <div className="flex gap-12">
            <div className="space-y-2">
              <p className="text-[#2D5A27] text-6xl font-black tracking-tighter">
                15+
              </p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
                States Impacted
              </p>
            </div>
            <div className="w-px h-20 bg-white/10 hidden sm:block"></div>
            <div className="space-y-2">
              <p className="text-[#2D5A27] text-6xl font-black tracking-tighter">
                150+
              </p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
                Corporate Partners
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative group overflow-hidden py-10">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center w-64 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 group/logo hover:bg-white/10 hover:border-[#2D5A27]/50 transition-all duration-500"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain opacity-40 grayscale group-hover/logo:opacity-100 group-hover/logo:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>

          {/* Side Gradients for Smooth Fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-20"></div>
        </div>

        <p className="text-center text-white/70 text-sm font-medium mt-16 tracking-wide">
          Powering Fortune 500 companies and government
          infrastructures with reliable solar tech.
        </p>
      </div>
    </section>
  );
}