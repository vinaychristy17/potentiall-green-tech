import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageSquare, } from "lucide-react";

export default function GetInTouch() {
  return (
    <main className="pt-28 pb-24 bg-[#FBFBFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-[#2D5A27] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Connect</p>
            <h1 className="text-6xl lg:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-none mb-8">
              Let's talk <br /> <span className="text-[#2D5A27]">Business.</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg mb-12 max-w-md">
              Whether you're looking for a Solar EPC partner or interested in our IPP model, our team is ready to assist.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Email Us", val: "sales@potentiallgreen.com" },
                { icon: <Phone />, label: "Call Us", val: "+91 (80) 4567 8900" },
                { icon: <MessageSquare />, label: "WhatsApp", val: "+91 98765 43210" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#2D5A27] shadow-sm border border-gray-100 group-hover:bg-[#2D5A27] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
                    <p className="text-lg font-bold text-[#1A1A1A]">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Surgical Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 lg:p-14 rounded-[50px] shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2D5A27] outline-none transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2D5A27] outline-none transition-all font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4">Inquiry Type</label>
                <select className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2D5A27] outline-none transition-all font-medium appearance-none">
                  <option>Solar EPC Inquiry</option>
                  <option>Investor Relations</option>
                  <option>Careers / HR</option>
                  <option>Partnership Proposal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2D5A27] outline-none transition-all font-medium" />
              </div>
              <button className="w-full py-6 bg-[#2D5A27] text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#1A1A1A] transition-all flex items-center justify-center gap-3">
                Send Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}