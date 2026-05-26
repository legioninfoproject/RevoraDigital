import React from "react";
import AboutHeader from "../pages/AboutPage/AboutHeader";
import Mission from "../pages/AboutPage/Mission";
import ChooseRevora from "../pages/AboutPage/ChooseRevora";
// import TeamSection from "../components/TeamSection/TeamSection";
import ApproachSection from "../pages/AboutPage/Approach";
import WhyChoose from "../pages/AboutPage/WhyChoose";
import CtaSection from "../pages/AboutPage/CtaSection";
// import Footer from "../components/Footer/Footer";
import WhatWeDo from "../pages/AboutPage/WhatWeDo";



const AboutSection = () => {
    return (
        <div>
            <AboutHeader />
            <ChooseRevora />
            <Mission />
            <WhatWeDo />
            <WhyChoose />
            <ApproachSection />
            <CtaSection />
            {/* <TeamSection /> */}
            {/* <Footer variant="light" /> */}

        </div>
    );
};

export default AboutSection;