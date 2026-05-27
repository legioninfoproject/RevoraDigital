import "./App.css";
import { Routes, Route } from "react-router-dom";

import Section from "./section/Section";
import Navbar from "./components/Navbar/Navbar";
import ContactSection from "./section/ContactSection";
import AboutSection from "./section/AboutSection";
// import BlogSection from "./section/BlogSection";
import RevoraFormSection from "./section/RevoraFormSection";
import BrandMarketing from "./section/BrandMarketing";
import DigitalSection from "./section/DigitalSection";
import EcommerceMarketing from "./section/EcommerceMarketing";
import PrivacyPolicy from "./section/Privacypolicy";
import  Footer from "./components/Footer/Footer";
import ScrollTop from "./components/Scrolltop/Scrolltop";

function App() {
  return (
    <div className="App">
      <Navbar />
     <ScrollTop />
      <Routes>
        <Route path="/digital-marketing-growth" element={<Section />} />
        <Route path="/contact-revora-digital" element={<ContactSection />} />
        <Route path="/about-revora-digital" element={<AboutSection />} />
        {/* <Route path="/blog" element={<BlogSection />} /> */}
        <Route path="/revora-consultation-form" element={<RevoraFormSection />} />
        <Route path="/brand-marketing-services" element={<BrandMarketing />} />
        <Route path="/digital-marketing-services" element={<DigitalSection />} />
        <Route path="/ecommerce-marketing-services" element={<EcommerceMarketing />} />
        <Route path="/legal-policies" element={<PrivacyPolicy />} />
      </Routes>

      <Footer variant="light"/>
    </div>
  );
}

export default App;