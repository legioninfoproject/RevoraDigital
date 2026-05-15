import React from "react";
import BrandHeader from "../pages/BrandMarketing/BrandHeader";
import BrandExplore from "../pages/BrandMarketing/BrandExplore";
import BrandProcess from "../pages/BrandMarketing/BrandProcess";
import Footer from "../components/Footer/Footer";

const BrandMarketing = () => {
    return (
        <div>
            <BrandHeader />
            <BrandExplore />
            <BrandProcess />
            <Footer variant="light" />
        </div>
    );
};

export default BrandMarketing;