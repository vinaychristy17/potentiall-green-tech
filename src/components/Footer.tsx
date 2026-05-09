import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { name: "Solar EPC", path: "/services/solar-epc" },
    { name: "Wind & Solar Hybrid", path: "/services/hybrid" },
    { name: "Solar IPP", path: "/services/solar-ipp" },
    { name: "BESS Solutions", path: "/services/bss" },
    { name: "Green Hydrogen", path: "/services/green-hydrogen" },
    { name: "EV Infrastructure", path: "/services/ev" },
  ];

  const company = [
    { name: "Our Legacy", path: "/about/leadership-message" },
    { name: "Project Portfolio", path: "/projects" },
    { name: "Compliance & ESG", path: "/investors/governance" },
    { name: "Career Hub", path: "/careers" },
    { name: "Media Relations", path: "/media/news" },
    { name: "Investor Center", path: "/investors/personnel" },
  ];

  return (
    <footer className="relative bg-[#1A1A1A] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80')",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Logo & Description */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transition-opacity hover:opacity-80">
               {/* LOGO PLACEHOLDER - Replace 'logo.png' with your file in public folder */}
               <img src="/logo.png" alt="Potentiall Green Logo" className="h-16 w-auto object-contain" />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed font-medium">
              Architecting the next generation of renewable
              energy infrastructure. Engineering sustainable
              ecosystems for a carbon-neutral India.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-black text-[#2D5A27] uppercase tracking-[0.3em] mb-8">
              Solutions
            </h4>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white transition-colors text-sm font-bold flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-black text-[#2D5A27] uppercase tracking-[0.3em] mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white transition-colors text-sm font-bold flex items-center group"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h4 className="text-xs font-black text-[#2D5A27] uppercase tracking-[0.3em] mb-8">
              Get In Touch
            </h4>
            <ul className="space-y-6">
              <li className="group">
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1 group-hover:text-[#2D5A27] transition-colors">
                  Direct Line
                </div>
                <a href="tel:+919899899898" className="text-sm font-bold text-white hover:text-[#6bc73a] transition-colors">
                  +91 989 989 9898
                </a>
              </li>
              <li className="group">
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1 group-hover:text-[#2D5A27] transition-colors">
                  Headquarters
                </div>
                <Link to="/locations" className="text-sm font-bold text-white leading-relaxed hover:text-[#6bc73a] transition-colors">
                  Bengaluru, Karnataka, <br />
                  India
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <button className="w-full py-4 bg-[#2D5A27]/10 border border-[#2D5A27]/30 rounded-2xl text-[#2D5A27] text-xs font-black uppercase tracking-widest hover:bg-[#2D5A27] hover:text-white transition-all duration-500">
                    Contact Support
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
              © {currentYear} Potentiall Green. A Subsidiary of
              Potentiall Facility Services.
            </p>
            <div className="flex gap-8">
              {["Privacy", "Terms", "Compliance"].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase() === 'privacy' ? 'privacy' : item.toLowerCase() === 'terms' ? 'terms' : 'compliance'}`}
                  className="text-white/60 hover:text-[#2D5A27] text-[10px] font-bold uppercase tracking-widest transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}