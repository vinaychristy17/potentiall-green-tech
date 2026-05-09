import { motion } from "framer-motion";
import { Mail, ShieldCheck, Briefcase, Award } from "lucide-react";

const kmpData = [
  {
    name: "Mr. Aswath Krishnappa",
    designation: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&q=85&fit=crop",
    bio: "A visionary leader with over 20 years of experience in the renewable energy sector, spearheading Potentiall Green's strategic expansion.",
    expertise: ["Strategic Planning", "Project Finance", "Policy Advocacy"]
  },
  {
    name: "Ms. Poornima Pattabhi",
    designation: "Company Secretary & Compliance Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&q=85&fit=crop",
    bio: "Expert in capital markets and fiscal management, ensuring the financial stability and growth of our global energy assets.",
    expertise: ["Risk Management", "Corporate Finance", "Investor Relations"]
  },
  {
    name: "Mr. Vinay Christy",
    designation: "Managing Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&q=85&fit=crop",
    bio: "Ensures the highest standards of corporate governance and regulatory compliance across all national and international operations.",
    expertise: ["Corporate Law", "Board Relations", "Statutory Filings"]
  }
];

export default function KeyManagerialPersonnel() {
  return (
    <main className="pt-28 bg-[#FBFBFC] min-h-screen">
      {/* --- Page Header --- */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Corporate Background" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[#6bc73a] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Leadership</p>
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              Key Managerial <br /> <span className="text-[#6bc73a]">Personnel.</span>
            </h1>
            <p className="max-w-2xl text-gray-400 font-medium text-lg mx-auto lg:mx-0">
              The strength of Potentiall Green lies in our leadership—a diverse group 
              of experts committed to a sustainable and transparent corporate future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- KMP Grid --- */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {kmpData.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[40px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="h-[400px] relative overflow-hidden">
                  <img 
                    src={person.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={person.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
                  
                  {/* Social Overlay */}
                  <div className="absolute bottom-6 left-8 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D5A27] hover:bg-[#6bc73a] hover:text-white transition-colors">
                      {/* <Linkedin className="w-4 h-4" /> */}
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D5A27] hover:bg-[#6bc73a] hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-1">{person.name}</h3>
                    <p className="text-[#2D5A27] font-bold text-xs uppercase tracking-widest">{person.designation}</p>
                  </div>
                  
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                    {person.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {person.expertise.map((skill, sIdx) => (
                      <span key={sIdx} className="px-4 py-2 bg-gray-50 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Governance Commitment --- */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] shrink-0">
                <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-[#1A1A1A] uppercase tracking-widest text-xs mb-2">Integrity</h4>
              <p className="text-sm text-gray-500 font-medium">Adhering to strict ethical guidelines in every managerial decision.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] shrink-0">
                <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-[#1A1A1A] uppercase tracking-widest text-xs mb-2">Professionalism</h4>
              <p className="text-sm text-gray-500 font-medium">Expert-led oversight across our engineering and financial hubs.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] shrink-0">
                <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-[#1A1A1A] uppercase tracking-widest text-xs mb-2">Excellence</h4>
              <p className="text-sm text-gray-500 font-medium">Driven by a commitment to world-class energy infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}