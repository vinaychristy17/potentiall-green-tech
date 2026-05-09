import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const blogPosts = [
  {
    id: "green-hydrogen-2026",
    title: "The Future of Green Hydrogen in India's Grid",
    excerpt: "Exploring how electrolyzer technology is revolutionizing industrial energy consumption...",
    image: "/Solar-city-image.png",
    date: "May 05, 2026",
    author: "Tech Team",
    category: "Innovation"
  },
  {
    id: "solar-epc-excellence",
    title: "Achieving 99% Efficiency in Solar EPC Projects",
    excerpt: "A deep dive into our surgical approach to engineering and procurement for utility projects...",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800",
    date: "April 28, 2026",
    author: "Operations",
    category: "Engineering"
  }
];

export default function BlogList() {
  const navigate = useNavigate();

  return (
    <main className="pt-28 pb-24 bg-[#FBFBFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16">
          <p className="text-[#2D5A27] font-black uppercase tracking-[0.3em] text-[10px] mb-3">Insights</p>
          <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter">Latest <span className="text-[#2D5A27]">Blogs.</span></h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/media/blogs/${post.id}`)}
              className="group bg-white rounded-[40px] border border-gray-100 overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-[#2D5A27]">
                  {post.category}
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-6 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A1A] mb-4 group-hover:text-[#2D5A27] transition-colors">{post.title}</h2>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[#2D5A27] font-black text-xs uppercase tracking-widest">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}