import './App.css';
import { Routes, Route } from "react-router-dom";
import Section from  "./section/Section";
import Navbar from './components/Navbar/Navbar';
import ContactSection from './section/ContactSection';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>  
          <Route path="/" element={<Section />}></Route>
          <Route path="/contact" element={<ContactSection />}></Route>
      </Routes>
    </div>
  );
}

export default App;
