import React from "react";
import DigitalHero from "../pages/DigitalMarketing/DigitalHero";
import DigitalMarketingpurpose from "../pages/DigitalMarketing/DigitalMarketingpurpose";
import DigitalMarketingExplore from "../pages/DigitalMarketing/DigitalMarketingExplore";
import Services from "../pages/DigitalMarketing/Services";
import DigitalGrowth from "../pages/DigitalMarketing/DigitalGrowth";
import CtaSection from "../pages/AboutPage/CtaSection";
import Footer from "../components/Footer/Footer";

const DigitalSection = () => {
    return (
        <section className="digitalSection">
            <DigitalHero />
             <Services />
             <DigitalMarketingpurpose />
             <DigitalMarketingExplore />
             <DigitalGrowth />
             <CtaSection />
             <Footer variant="light" />
        </section>
    );
};

export default DigitalSection;