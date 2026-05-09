import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, FileDown, FileAudio, TrendingUp, 
  Search, Download,
  Award, Globe, BarChart3, Mail, X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Investors Presentations",
    icon: <TrendingUp className="w-5 h-5" />,
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    description: "Quarterly and strategic business updates for our shareholders.",
    docs: ["Q4 FY2026 Presentation", "Strategic Growth Roadmap 2026", "Q3 FY2026 Presentation"]
  },
  {
    title: "Financial Statements",
    icon: <BarChart3 className="w-5 h-5" />,
    bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
    description: "Audited and unaudited financial results and balance sheets.",
    docs: ["Audited Financials FY25-26", "Consolidated Balance Sheet Q4", "Cash Flow Statements"]
  },
  {
    title: "Financials of Subsidiary Companies",
    icon: <Globe className="w-5 h-5" />,
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    description: "Performance reports for Potentiall Green's regional subsidiaries.",
    docs: ["Subsidiary A - Annual Accounts", "Subsidiary B - Financial Summary"]
  },
  {
    title: "Annual Reports",
    icon: <FileText className="w-5 h-5" />,
    bgImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
    description: "Comprehensive annual business and sustainability performance.",
    docs: ["Integrated Annual Report 2025-26", "Annual Report 2024-25"]
  },
  {
    title: "Earnings Call Audio & Transcripts",
    icon: <FileAudio className="w-5 h-5" />,
    bgImage: "https://images.unsplash.com/photo-1589903308914-47103b185d39?q=80&w=800",
    description: "Recordings and text versions of our quarterly earnings calls.",
    docs: ["Q4 Earnings Audio Recording", "Q4 Transcript (PDF)", "Q3 Earnings Audio"]
  },
  {
    title: "Latest Credit Rating",
    icon: <Award className="w-5 h-5" />,
    bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
    description: "Independent assessment of financial stability.",
    docs: ["CRISIL Rating Report 2026", "ICRA Long-term Credit Rating"]
  }
];

export default function InvestorDownloads() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Function to handle "Download" - Opens a mock file in a new tab
  const handleDownload = () => {
    // In a real app, you'd provide the actual URL: const url = `/docs/${docName}.pdf`;
    const mockPdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    window.open(mockPdfUrl, "_blank");
  };

  // Filter categories and documents based on search
  const filteredCategories = categories.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.docs.some(doc => doc.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="pt-28 bg-[#FBFBFC] min-h-screen">
      {/* --- Dynamic Header with Search --- */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" className="w-full h-full object-cover" alt="bg" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#6bc73a] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Transparency & Compliance</motion.p>
              <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                Investor <span className="text-[#6bc73a]">Repository.</span>
              </h1>
            </div>

            {/* Search Input Field */}
            <div className="relative group w-full lg:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#6bc73a] transition-colors" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by report name or category..." 
                className="w-full pl-14 pr-12 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] outline-none text-white focus:border-[#6bc73a] transition-all font-medium"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Filtered Documents Grid --- */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCategories.map((cat) => (
                <motion.div
                  key={cat.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Category Banner with Background Image */}
                  <div className="h-40 relative overflow-hidden">
                    <img src={cat.bgImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.title} />
                    <div className="absolute inset-0 bg-[#2D5A27]/80 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-4 text-white">
                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">{cat.icon}</div>
                        <h3 className="text-xl font-black tracking-tight">{cat.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">{cat.description}</p>
                    <div className="space-y-2">
                      {cat.docs.map((doc, dIdx) => (
                        <button 
                          key={dIdx}
                          onClick={() => handleDownload()}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-[#2D5A27] hover:text-white transition-all group/item"
                        >
                          <div className="flex items-center gap-3">
                            <FileDown className="w-4 h-4 opacity-50 group-hover/item:opacity-100" />
                            <span className="text-sm font-bold">{doc}</span>
                          </div>
                          <Download className="w-4 h-4 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold text-xl">No documents found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* --- Fixed Contact Relations Section --- */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#1A1A1A] rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000" className="w-full h-full object-cover" alt="contact-bg" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
              Need specialized <br /> <span className="text-[#6bc73a]">Investor Assistance?</span>
            </h2>
            <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto mb-10">
              Our dedicated Investor Relations desk is here to provide you with clarifications 
              on financial results and statutory filings.
            </p>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-white text-[#1A1A1A] px-12 py-6 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#6bc73a] hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-4 mx-auto"
            >
              Contact Relations <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}