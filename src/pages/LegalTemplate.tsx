import { motion } from "framer-motion";
import type { JSX } from "react";

interface LegalProps {
  title: string;
  lastUpdated: string;
  content: JSX.Element;
}

export default function LegalTemplate({ title, lastUpdated, content }: LegalProps) {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[#2D5A27] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Legal Documentation</p>
          <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter mb-4">{title}</h1>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-12">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A1A] prose-headings:font-black prose-p:text-gray-600 prose-p:font-medium prose-li:text-gray-600">
            {content}
          </div>
        </motion.div>
      </div>
    </main>
  );
}