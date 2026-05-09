import { motion } from "framer-motion";
import { 
  Users, Rocket, Globe, Heart, 
  ArrowUpRight, Briefcase, MapPin, Clock,
  Search,
} from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    role: "Solar Project Engineer",
    location: "Bengaluru, India",
    type: "Full-Time",
    department: "Engineering"
  },
  {
    id: 2,
    role: "Business Development Manager",
    location: "Mumbai, India",
    type: "Full-Time",
    department: "Sales"
  },
  {
    id: 3,
    role: "Site Supervisor - Wind Hybrid",
    location: "Gujarat, India",
    type: "On-site",
    department: "Operations"
  }
];

export default function Careers() {
  const scrollToJobs = () => {
    document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000" 
            className="w-full h-full object-cover opacity-40" 
            alt="Team working" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <p className="text-[#6bc73a] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Work with us</p>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Build the <span className="text-[#6bc73a]">Future</span> <br /> of Energy.
            </h1>
            <p className="text-xl text-gray-300 font-medium mb-10 leading-relaxed">
              Join a team of innovators, engineers, and visionaries dedicated to 
              accelerating the world's transition to sustainable energy.
            </p>
            <button 
              onClick={scrollToJobs}
              className="bg-[#6bc73a] text-[#1A1A1A] px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center gap-3"
            >
              Explore Openings <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- CULTURE & VALUES --- */}
      <section className="py-24 px-6 lg:px-12 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter mb-4">Why Potentiall?</h2>
            <p className="text-gray-500 font-medium">We create an environment where high-performance meets high-purpose.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket />, t: "Innovation First", d: "Work on cutting-edge BESS and Green Hydrogen tech." },
              { icon: <Users />, t: "Diverse Team", d: "Collaborate with experts from across the globe." },
              { icon: <Heart />, t: "Holistic Growth", d: "Comprehensive health and professional development." },
              { icon: <Globe />, t: "Global Impact", d: "Every project contributes to a zero-carbon planet." }
            ].map((v, i) => (
              <div key={i} className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6 group-hover:bg-[#2D5A27] group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black mb-3">{v.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOB LISTINGS --- */}
      <section id="open-positions" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter">Current Openings</h2>
              <p className="text-gray-500 font-medium mt-2">Find your next challenge in our growing ecosystem.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search roles..." className="pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-medium outline-none focus:border-[#2D5A27]" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <motion.div 
                key={job.id}
                whileHover={{ x: 10 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-gray-100 rounded-[30px] hover:border-[#2D5A27] hover:shadow-lg transition-all cursor-pointer"
              >
                <div>
                  <h4 className="text-xl font-black text-[#1A1A1A] mb-2">{job.role}</h4>
                  <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-400">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.department}</span>
                  </div>
                </div>
                <button className="mt-6 md:mt-0 px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-black uppercase text-[10px] tracking-widest group-hover:bg-[#2D5A27] transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#2D5A27] rounded-[50px] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 relative z-10">
            Don’t see the <br /> right fit?
          </h2>
          <p className="text-white/70 text-lg font-medium mb-10 max-w-2xl mx-auto relative z-10">
            We are always looking for passionate individuals. Send your resume and 
            we’ll keep you in mind for future roles.
          </p>
          <a 
            href="mailto:careers@potentiallgreen.com"
            className="inline-flex bg-[#1A1A1A] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#1A1A1A] transition-all relative z-10"
          >
            Send Speculative Application
          </a>
        </div>
      </section>
    </main>
  );
}