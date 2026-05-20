import React from "react";
import ContactHead from "../pages/ContactPage/ContactHead";
import Contactform from "../pages/ContactPage/Contactform";
import ContactInfo from "../pages/ContactPage/ContactInfo";
import Faq from "../pages/ContactPage/Faq";
import Footer from "../components/Footer/Footer";

const ContactSection = () => {
    return(
        <div>
            <ContactHead />
            <Contactform />
            <ContactInfo />
            <Faq />
            <Footer variant="light" />
        </div>
    )
};

export default ContactSection;  