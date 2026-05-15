import React from "react";
import DigitalHero from "../pages/DigitalMarketing/DigitalHero";
import DigitalMarketingpurpose from "../pages/DigitalMarketing/DigitalMarketingpurpose";
import DigitalMarketingExplore from "../pages/DigitalMarketing/DigitalMarketingExplore";
import Footer from "../components/Footer/Footer";

const DigitalSection = () => {
    return (
        <section className="digitalSection">
            <DigitalHero />
             <DigitalMarketingpurpose />
             <DigitalMarketingExplore />
             <Footer variant="light" />
        </section>
    );
};

export default DigitalSection;