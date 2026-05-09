import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Your Homepage Sections
import HeroSection from "./components/HeroSection";
import ImpactDashboard from "./components/ImpactDashboard";
import AboutSection from "./components/AboutSection";
import ServicesGrid from "./components/ServicesGrid";
import SolutionsSection from "./components/SolutionsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import NetworkMap from "./components/NetworkMap";
import CertificationsSection from "./components/CertificationsSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";

// Page imports
import ProjectsSection from "./pages/ProjectsSection";
import Leadership from "./pages/Leadership";
import LeadershipMessage from "./pages/LeadershipMessage";
import OurTeam from "./pages/OurTeam";
import SolarEPC from "./pages/SolarEPC";
import WindHybrid from "./pages/WindHybrid";
import SolarIPP from "./pages/SolarIPP";
import BESS from "./pages/BESS";
import GreenHydrogen from "./pages/GreenHydrogen";
import EVCharging from "./pages/EVCharging";
import InvestorDownloads from "./pages/InvestorDownloads";
import CorporateGovernance from "./pages/CorporateGovernance";
import KeyManagerialPersonnel from "./pages/KeyManagerialPersonnel";
import Careers from "./pages/Careers";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetial";
import News from "./pages/News";
import Support from "./pages/Support";
import GetInTouch from "./pages/GetInTouch";
import Locations from "./pages/Locations";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Compliance from "./pages/Compliance";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 🚀 FIXED: Navigation is now outside Routes, so it stays on every page */}
      <Navigation />
      
      <main>
        <Routes>
          {/* HOME PAGE ROUTE */}
          <Route path="/" element={
            <>
              <HeroSection />
              <ImpactDashboard />
              <AboutSection />
              <ServicesGrid />
              <SolutionsSection />
              <WhyChooseSection />
              <NetworkMap />
              <CertificationsSection />
              <ClientsSection />
              <ContactSection />
            </>
          } />

          {/* DEDICATED SUB-PAGES */}
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/about/board-of-directors" element={<Leadership />} />
          <Route path="/about/leadership-message" element={<LeadershipMessage />} />
          <Route path="/about/team" element={<OurTeam />} />
          <Route path="/services/solar-epc" element={<SolarEPC />} />
          <Route path="/services/hybrid" element={<WindHybrid />} />
          <Route path="/services/solar-ipp" element={<SolarIPP />} />
          <Route path="/services/bess" element={<BESS />} />
          <Route path="/services/green-hydrogen" element={<GreenHydrogen />} />
          <Route path="/services/ev" element={<EVCharging />} />
          <Route path="/investors/downloads" element={<InvestorDownloads />} />
          <Route path="/investors/governance" element={<CorporateGovernance />} />
          <Route path="/investors/personnel" element={<KeyManagerialPersonnel />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media/blogs" element={<BlogList />} />
          <Route path="/media/blogs/:id" element={<BlogDetail />} />
          <Route path="/media/news" element={<News />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </main>

      {/* 🚀 FIXED: Footer is now outside Routes, appearing on every page */}
      <Footer />
    </div>
  );
}