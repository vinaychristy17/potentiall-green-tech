import {  
  FileText, 
  Settings, 
  ShieldCheck, 
  ArrowUpRight // Added this
} from "lucide-react";

export default function Support() {
  return (
    <main className="pt-28 pb-24 bg-[#1A1A1A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-20">
          <p className="text-[#6bc73a] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Post-Installation</p>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">Support <span className="text-[#6bc73a]">Hub.</span></h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Settings />, t: "Technical Support", d: "Remote troubleshooting for your Solar & BESS systems." },
            { icon: <FileText />, t: "Service Request", d: "Schedule an on-site maintenance visit from our engineers." },
            { icon: <ShieldCheck />, t: "Warranty Claims", d: "Manage your hardware warranties and performance guarantees." }
          ].map((item, i) => (
            <div key={i} className="p-12 border border-white/10 rounded-[40px] bg-white/5 hover:bg-white/10 transition-all">
              <div className="text-[#6bc73a] mb-8">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4">{item.t}</h3>
              <p className="text-gray-400 font-medium text-sm mb-8">{item.d}</p>
              <button className="text-[#6bc73a] font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                Open Ticket <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#6bc73a] rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[#1A1A1A]">
            <h2 className="text-3xl font-black tracking-tight mb-2">24/7 Emergency Support</h2>
            <p className="font-bold opacity-70 uppercase tracking-widest text-xs">For critical grid outages only</p>
          </div>
          <p className="text-5xl font-black text-[#1A1A1A] tracking-tighter">+91 1800 900 1000</p>
        </div>
      </div>
    </main>
  );
}