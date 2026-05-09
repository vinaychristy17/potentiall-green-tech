import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, } from "lucide-react";

export default function BlogDetail() {

  const navigate = useNavigate();
  // In a real app, find post by ID from your data
  
  return (
    <main className="pt-28 pb-24 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto px-6 lg:px-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-[#2D5A27] font-black text-[10px] uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </button>

        <header className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-tight mb-8">
            The Future of Green Hydrogen in India's Grid
          </h1>
          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2D5A27] rounded-full flex items-center justify-center text-white font-bold">P</div>
              <div>
                <p className="font-black text-sm text-[#1A1A1A]">Potentiall Tech Team</p>
                <p className="text-xs text-gray-400 font-medium">May 05, 2026 • 8 min read</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 hover:bg-gray-50 rounded-full transition-colors"><Share2 className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>
        </header>

        <div className="aspect-video rounded-[40px] overflow-hidden mb-12">
          <img src="/Solar-city-image.png" className="w-full h-full object-cover" alt="Hydrogen" />
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
          <p className="text-xl text-[#1A1A1A] font-bold mb-6">As global energy demands shift toward zero-emission targets, green hydrogen stands as the most surgical solution for heavy industry decarbonization.</p>
          <p>The integration of high-capacity electrolyzers powered by off-grid solar farms allows for consistent H2 production without stressing the national grid...</p>
          {/* Add more detailed content sections here to match Photo 2 */}
        </div>
      </article>
    </main>
  );
}