// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     {
//       name: "About us",
//       href: "/about",
//       dropdown: [
//         { name: "Leadership Message", href: "/about/leadership-message" },
//         { name: "Board of Directors", href: "/about/board-of-directors" },
//         { name: "Our Team", href: "/about/team" },
//       ],
//     },
//     {
//       name: "Our Services",
//       href: "/services",
//       dropdown: [
//         { name: "Solar EPC", href: "/services/solar-epc" },
//         { name: "Wind & Solar Hybrid", href: "/services/hybrid" },
//         { name: "Solar IPP", href: "/services/solar-ipp" },
//         { name: "BESS", href: "/services/bess" },
//         { name: "Green Hydrogen", href: "/services/green-hydrogen" },
//         { name: "EV", href: "/services/ev" },
//       ],
//     },
//     { name: "Projects", href: "/projects" },
//     {
//       name: "Investors",
//       href: "/investors",
//       dropdown: [
//         { name: "Investor Download", href: "/investors/downloads" },
//         { name: "Corporate Governance", href: "/investors/governance" },
//         { name: "Key Managerial Personnel", href: "/investors/personnel" },
//       ],
//     },
//     {
//       name: "Media",
//       href: "/media",
//       dropdown: [
//         { name: "Blogs", href: "/media/blogs" },
//         { name: "News", href: "/media/news" },
//       ],
//     },
//     { name: "Careers", href: "/careers" },
//     {
//       name: "Contact Us",
//       href: "#contact",
//       dropdown: [
//         { name: "Get in Touch", href: "#contact" },
//         { name: "Locations", href: "#locations" },
//         { name: "Support", href: "#support" },
//       ],
//     },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled ? "mt-4 px-6 lg:px-12" : "px-6 lg:px-12 pt-4"
//       }`}
//     >
//       <div
//         className={`max-w-7xl mx-auto transition-all duration-500 ${
//           isScrolled
//             ? "bg-white/10 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(0,74,124,0.3)] rounded-[30px] border border-white/10" 
//             : "bg-white/90 backdrop-blur-xl border border-white/20"
//         } px-8 py-3 rounded-[30px]`} // Reduced padding slightly to let the logo breathe
//       >
//         <div className="flex items-center justify-between">
          
//           {/* Logo Section: Wrapped in anchor for home redirect */}
//           <a href="/" className="flex items-center group cursor-pointer">
//             <img 
//               src="/logo.png" 
//               alt="Potentiall Green Tech Pvt Ltd" 
//               className={`
//                 h-14 w-auto                   /* Increased height from h-12 to h-16 */
//                 scale-110                     /* Slight boost to fill the vertical space */
//                 object-contain 
//                 mix-blend-multiply 
//                 transition-transform 
//                 duration-300
//                 group-hover:scale-125         /* Enhanced hover effect */
//               `}
//             />
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <div
//                 key={link.name}
//                 className="relative"
//                 onMouseEnter={() => setHoveredMenu(link.name)}
//                 onMouseLeave={() => setHoveredMenu(null)}
//               >
//                 <a
//                   href={link.href}
//                   className="group flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#004A7C] hover:text-[#009B77] transition-colors py-2"
//                 >
//                   {link.name}
//                   {link.dropdown && (
//                     <ChevronDown
//                       className={`w-3 h-3 transition-transform ${
//                         hoveredMenu === link.name ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </a>

//                 <AnimatePresence>
//                   {link.dropdown && hoveredMenu === link.name && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,74,124,0.2)] border border-gray-100 overflow-hidden"
//                     >
//                       {link.dropdown.map((item, index) => (
//                         <a
//                           key={index}
//                           href={item.href}
//                           className="block px-6 py-3 text-sm font-bold text-[#004A7C] hover:bg-[#009B77]/5 hover:text-[#009B77] transition-colors border-b border-gray-50 last:border-0"
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>

//           <button
//             className="lg:hidden p-2 text-[#004A7C]"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (Same as current) */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl lg:hidden border border-gray-100"
//           >
//             <div className="flex flex-col gap-6">
//               {navLinks.map((link) => (
//                 <div key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-xl font-black text-[#004A7C] tracking-tighter hover:text-[#009B77] block mb-3"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {link.name}
//                   </a>
//                   {link.dropdown && (
//                     <div className="ml-4 space-y-2 border-l-2 border-[#009B77]/20 pl-4">
//                       {link.dropdown.map((item, index) => (
//                         <a
//                           key={index}
//                           href={item.href}
//                           className="block text-sm font-medium text-gray-600 hover:text-[#009B77]"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "About us",
      href: "/about",
      dropdown: [
        { name: "Leadership Message", href: "/about/leadership-message" },
        { name: "Board of Directors", href: "/about/board-of-directors" },
        { name: "Our Team", href: "/about/team" },
      ],
    },
    {
      name: "Our Services",
      href: "/services",
      dropdown: [
        { name: "Solar EPC", href: "/services/solar-epc" },
        { name: "Wind & Solar Hybrid", href: "/services/hybrid" },
        { name: "Solar IPP", href: "/services/solar-ipp" },
        { name: "BESS", href: "/services/bess" },
        { name: "Green Hydrogen", href: "/services/green-hydrogen" },
        { name: "EV", href: "/services/ev" },
      ],
    },
    { name: "Projects", href: "/projects" },
    {
      name: "Investors",
      href: "/investors",
      dropdown: [
        { name: "Investor Download", href: "/investors/downloads" },
        { name: "Corporate Governance", href: "/investors/governance" },
        { name: "Key Managerial Personnel", href: "/investors/personnel" },
      ],
    },
    {
      name: "Media",
      href: "/media",
      dropdown: [
        { name: "Blogs", href: "/media/blogs" },
        { name: "News", href: "/media/news" },
      ],
    },
    { name: "Careers", href: "/careers" },
    {
      name: "Contact Us",
      href: "/contact",
      dropdown: [
        { name: "Get in Touch", href: "/contact" },
        { name: "Locations", href: "/locations" },
        { name: "Support", href: "/support" },
      ],
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "mt-4 px-6 lg:px-12" : "px-6 lg:px-12 pt-4"}`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(0,74,124,0.3)] rounded-[30px] border border-white/10" : "bg-white/90 backdrop-blur-xl border border-white/20"} px-8 py-3 rounded-[30px]`}>
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center group cursor-pointer">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto scale-110 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-125" />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative" onMouseEnter={() => setHoveredMenu(link.name)} onMouseLeave={() => setHoveredMenu(null)}>
                <Link to={link.href} className="group flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#004A7C] hover:text-[#009B77] transition-colors py-2">
                  {link.name}
                  {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${hoveredMenu === link.name ? "rotate-180" : ""}`} />}
                </Link>

                <AnimatePresence>
                  {link.dropdown && hoveredMenu === link.name && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,74,124,0.2)] border border-gray-100 overflow-hidden">
                      {link.dropdown.map((item, index) => (
                        <Link key={index} to={item.href} className="block px-6 py-3 text-sm font-bold text-[#004A7C] hover:bg-[#009B77]/5 hover:text-[#009B77] transition-colors border-b border-gray-50 last:border-0">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <button className="lg:hidden p-2 text-[#004A7C]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl lg:hidden border border-gray-100">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link to={link.href} className="text-xl font-black text-[#004A7C] tracking-tighter hover:text-[#009B77] block mb-3" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 space-y-2 border-l-2 border-[#009B77]/20 pl-4">
                      {link.dropdown.map((item, index) => (
                        <Link key={index} to={item.href} className="block text-sm font-medium text-gray-600 hover:text-[#009B77]" onClick={() => setMobileMenuOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}