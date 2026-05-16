import { motion } from "framer-motion";

const clientLogos = [
  { name: "ArcelorMittal", logo: "/logos/ArcelorMittal.jpg" },
  { name: "Bharat Petroleum", logo: "/logos/Bharat-Petroleum-emblem.png" },
  { name: "Torrent Power", logo: "/logos/torrent.png" },
  { name: "Alstom", logo: "/logos/Alstom.jpg" },
  { name: "Bosch", logo: "/logos/Bosch.jpg" },
  { name: "GSECL", logo: "/logos/GSECL.jpg" },
  { name: "Lumax", logo: "/logos/Lumax.png" },
  { name: "GHCL", logo: "/logos/HCL.png" },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="relative py-16 overflow-hidden bg-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#2D5A27] rounded-full blur-[140px] animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Updated Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 bg-[#2D5A27]/10 rounded-full border border-[#2D5A27]/20 mb-6">
            <span className="text-[10px] font-black text-[#2D5A27] uppercase tracking-[0.3em]">
              Our Network
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[0.9] tracking-tighter mb-6">
            Building Partnerships <br />
            <span className="text-[#2D5A27]">Across Industries.</span>
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 font-medium max-w-2xl mx-auto">
            From day one, we are engaging with forward-thinking organisations across
            manufacturing, energy, and infrastructure who share our vision for a cleaner India.
          </p>
        </div>

        {/* Row 1: Left to Right */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1920] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }
            }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
              <LogoCard key={`row1-${index}`} client={client} />
            ))}
          </motion.div>
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10" />
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [-1920, 0] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" }
            }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
              <LogoCard key={`row2-${index}`} client={client} />
            ))}
          </motion.div>
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual logo cards to keep code clean
function LogoCard({ client }: { client: { name: string; logo: string } }) {
  return (
    <div className="group relative flex-shrink-0 w-64 h-36 bg-white/80 backdrop-blur-md border border-gray-100 rounded-[32px] p-8 flex items-center justify-center hover:shadow-[0_30px_60px_-15px_rgba(45,90,39,0.1)] transition-all duration-500">
      <img
        src={client.logo}
        alt={client.name}
        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-100"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      {/* Fallback Text if Logo fails */}
      <span className="hidden text-xs font-black text-[#1A1A1A] uppercase tracking-widest text-center">
        {client.name}
      </span>
      
      {/* Small design accent */}
      <div className="absolute bottom-4 right-6 w-1 h-1 bg-[#2D5A27]/20 rounded-full group-hover:bg-[#2D5A27] group-hover:scale-150 transition-all" />
    </div>
  );
}