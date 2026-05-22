import React from "react";
import EcommerceHero from "../pages/Ecommerce/EcommerceHero";
import Ecommerceabout from "../pages/Ecommerce/Ecommerceabout";
import EcommerceServices from "../pages/Ecommerce/EcommerceService";
import Process from "../pages/Ecommerce/Process";
import Footer from "../components/Footer/Footer";

const EcommerceMarketing = () => {
    return(
        <div>
            <EcommerceHero />
            <Ecommerceabout />
            <EcommerceServices />
            <Process />
            <Footer variant="light" />
        </div>
    )
};

export default EcommerceMarketing;