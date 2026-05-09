import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Hook for navigation

export default function HeroSection() {
  const navigate = useNavigate();

  // FUNCTIONAL HANDLERS
  const handleConsultation = () => {
    navigate("/contact");
  };

  const handleViewProjects = () => {
    // Option A: If you have a separate projects page
    navigate("/projects"); 

    // Option B: If your projects are further down on the home page
    // const projectSection = document.getElementById("impact-dashboard");
    // if (projectSection) {
    //   projectSection.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Solar Panel Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-float-small"
          style={{
            backgroundImage: "url('/image_0bc25d.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        {/* Sun Ray Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-yellow-400/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#88f452]/10 rounded-full blur-[100px] animate-float" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <div className="w-2 h-2 bg-[#6bc73a] rounded-full animate-pulse" />
            <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
              India's Premier Solar EPC
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-8">
            Engineering <br />
            <span className="text-[#6bc73a]">Sustainable</span> <br />
            Infrastructure.
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl mb-12">
            Premium turnkey solar power plant solutions from architectural design to
            nationwide commissioning. Powering India's transition to a carbon-neutral future.
          </p>

          <div className="flex flex-wrap gap-6">
            {/* FUNCTIONAL: Request Consultation */}
            <button 
              onClick={handleConsultation}
              className="group px-10 py-5 bg-[#2D5A27] text-white rounded-2xl font-black text-lg hover:bg-[#6bc73a] hover:text-[#1A1A1A] transition-all hover:shadow-[0_20px_40px_rgba(107,199,58,0.4)] hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                Request Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            {/* FUNCTIONAL: View Projects */}
            <button 
              onClick={handleViewProjects}
              className="flex items-center gap-4 px-8 py-5 text-white font-black group"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <Play className="w-5 h-5 fill-current group-hover:text-[#2D5A27]" />
              </div>
              <span className="text-sm uppercase tracking-widest text-white/80 group-hover:text-white">
                View Projects
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
}