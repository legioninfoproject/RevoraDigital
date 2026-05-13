import "./App.css";
import { Routes, Route } from "react-router-dom";

import Section from "./section/Section";
import Navbar from "./components/Navbar/Navbar";
import ContactSection from "./section/ContactSection";
// import AboutSection from "./section/AboutSection";
import BlogSection from "./section/BlogSection";
import RevoraFormSection from "./section/RevoraFormSection";
import BrandMarketing from "./section/BrandMarketing";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/contact" element={<ContactSection />} />
        {/* <Route path="/about" element={<AboutSection />} /> */}
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/revoraform" element={<RevoraFormSection />} />
        <Route path="/brandmarketing" element={<BrandMarketing />} />
      </Routes>
    </div>
  );
}

export default App;