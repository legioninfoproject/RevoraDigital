import React from "react";
import BrandHeader from "../pages/BrandMarketing/BrandHeader";
import BrandPresence from "../pages/BrandMarketing/BrandPresence";
import BrandExplore from "../pages/BrandMarketing/BrandExplore";
import BrandProcess from "../pages/BrandMarketing/BrandProcess";
import Footer from "../components/Footer/Footer";

const BrandMarketing = () => {
    return (
        <div>
            <BrandHeader />
            <BrandPresence />
            <BrandExplore />
            <BrandProcess />
            <Footer variant="light" />
        </div>
    );
};

export default BrandMarketing;