import React from "react";
import EcommerceHero from "../pages/Ecommerce/EcommerceHero";
import EcommerceServices from "../pages/Ecommerce/EcommerceService";
import Process from "../pages/Ecommerce/Process";
import Footer from "../components/Footer/Footer";

const EcommerceMarketing = () => {
    return(
        <div>
            <EcommerceHero />
            <EcommerceServices />
            <Process />
            <Footer variant="light" />
        </div>
    )
};

export default EcommerceMarketing;