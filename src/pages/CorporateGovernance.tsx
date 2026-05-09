import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, FileText, PieChart, 
  Download, HelpCircle, ArrowRight, ExternalLink, 
  Gavel, Users, Bell
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type TabType = "policies" | "shareholding" | "announcements" | "downloads" | "grievance";

const governanceData = {
  policies: [
    { name: "Code of Conduct", date: "Updated Jan 2026" },
    { name: "Whistle Blower Policy", date: "Updated Oct 2025" },
    { name: "CSR Policy", date: "Updated Mar 2026" },
    { name: "Archival Policy", date: "Updated Dec 2025" },
    { name: "Nomination & Remuneration Policy", date: "Updated Feb 2026" },
  ],
  shareholding: [
    { name: "Shareholding Pattern - March 2026", type: "Quarterly" },
    { name: "Shareholding Pattern - December 2025", type: "Quarterly" },
    { name: "Shareholding Pattern - September 2025", type: "Quarterly" },
  ],
  announcements: [
    { name: "Board Meeting Outcome - Financial Results", date: "May 05, 2026" },
    { name: "Change in Key Managerial Personnel", date: "April 20, 2026" },
    { name: "Intimation of Analyst Meet", date: "April 12, 2026" },
  ],
  downloads: [
    { name: "Familiarization Programme for IDs", size: "1.2 MB" },
    { name: "Memorandum & Articles of Association", size: "2.5 MB" },
    { name: "Terms of Appointment of Independent Directors", size: "0.8 MB" },
  ],
  grievance: {
    contact: "Mr. Vinay Christy",
    role: "Compliance Officer",
    email: "compliance@potentiallgreen.com",
    address: "Potentiall Facility Services Pvt. Ltd, Mahadevapura, Bengaluru, Karnataka 560048"
  }
};

export default function CorporateGovernance() {
  const [activeTab, setActiveTab] = useState<TabType>("policies");
  const navigate = useNavigate();

  const handleViewDocument = () => {
    // Replace this with your actual PDF path logic
    const mockUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    window.open(mockUrl, "_blank");
  };

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "policies", label: "Policies", icon: <Gavel className="w-4 h-4" /> },
    { id: "shareholding", label: "Shareholding Patterns", icon: <PieChart className="w-4 h-4" /> },
    { id: "announcements", label: "Corporate Announcement", icon: <Bell className="w-4 h-4" /> },
    { id: "downloads", label: "Other Downloads", icon: <Download className="w-4 h-4" /> },
    { id: "grievance", label: "Grievance Redressal", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <main className="pt-28 bg-[#FBFBFC] min-h-screen">
      {/* --- Section Hero --- */}
      <section className="relative py-24 px-6 lg:px-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <ShieldCheck className="w-full h-full text-[#2D5A27]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#2D5A27] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Framework</p>
            <h1 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-none mb-6">
              Corporate <span className="text-[#2D5A27]">Governance.</span>
            </h1>
            <p className="max-w-2xl text-gray-500 font-medium text-lg">
              Potentiall Green is committed to maintaining the highest standards of integrity, 
              transparency, and accountability in all our business dealings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Tabbed Navigation --- */}
      <section className="py-12 px-6 lg:px-12 border-b border-gray-100 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar gap-2 p-1 bg-gray-50 rounded-3xl border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-[20px] text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id 
                  ? "bg-[#2D5A27] text-white shadow-lg shadow-[#2D5A27]/20" 
                  : "text-gray-400 hover:text-[#1A1A1A]"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Content Area --- */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4"
            >
              {/* Policies & General Downloads Layout */}
              {(activeTab === "policies" || activeTab === "shareholding" || activeTab === "announcements" || activeTab === "downloads") && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(governanceData[activeTab as keyof typeof governanceData] as any[]).map((item, i) => (
                    <div key={i} className="group bg-white p-8 rounded-[32px] border border-gray-100 hover:border-[#2D5A27]/30 transition-all hover:shadow-xl">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6 group-hover:bg-[#2D5A27] group-hover:text-white transition-all duration-500">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-black text-[#1A1A1A] leading-tight mb-4">{item.name}</h3>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            {item.date || item.type || item.size}
                        </span>
                        <button onClick={() => handleViewDocument()}
                            className="flex items-center gap-2 text-[#2D5A27] font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform">
                            View <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Grievance Redressal Layout */}
              {activeTab === "grievance" && (
                <div className="max-w-4xl mx-auto w-full bg-white rounded-[40px] border border-gray-100 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-12 bg-[#2D5A27] text-white">
                      <h3 className="text-3xl font-black tracking-tighter mb-8">Nodal Officer for Grievances</h3>
                      <p className="text-white/70 mb-8 leading-relaxed">
                        In case of any queries or grievances, stakeholders are requested to contact our 
                        Compliance Officer directly.
                      </p>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Users className="w-4 h-4" /></div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Contact Person</p>
                            <p className="font-bold">{governanceData.grievance.contact}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"></div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Email Address</p>
                            <p className="font-bold">{governanceData.grievance.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-12 flex flex-col justify-center">
                      <h4 className="text-xl font-black mb-4">Corporate Office</h4>
                      <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                        {governanceData.grievance.address}
                      </p>
                      <button onClick={() => navigate("/contact")}
                        className="w-full py-5 bg-gray-100 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center justify-center gap-3">
                        Lodge Online Complaint <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}