import React from "react";
import AboutHeader from "../pages/AboutPage/AboutHeader";
import Mission from "../pages/AboutPage/Mission";
import TeamSection from "../components/TeamSection/TeamSection";
import Footer from "../components/Footer/Footer";



const AboutSection = () => {
    return (
        <div>
            <AboutHeader />
            <Mission />
            <TeamSection />
            <Footer variant="light" />

        </div>
    );
};

export default AboutSection;