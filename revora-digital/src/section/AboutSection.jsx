import React from "react";
import AboutHeader from "../pages/AboutPage/AboutHeader";
import Mission from "../pages/AboutPage/Mission";
// import TeamSection from "../components/TeamSection/TeamSection";
import Footer from "../components/Footer/Footer";
import WhatWeDo from "../pages/AboutPage/WhatWeDo";



const AboutSection = () => {
    return (
        <div>
            <AboutHeader />
            <Mission />
            <WhatWeDo />
            {/* <TeamSection /> */}
            <Footer variant="light" />

        </div>
    );
};

export default AboutSection;