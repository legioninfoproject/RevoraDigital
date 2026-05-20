import Header from "../pages/Home/Header";
import React from "react";
import Logostrips from "../pages/Home/Logostrips";
import AboutUs from "../components/About/About";
import BrandSection from "../components/BrandSection/BrandSection";
import Workprocess from "../pages/Home/Workprocess";
// import TeamSection from "../components/TeamSection/TeamSection";
import Testimonial from "../components/Testimonial/Testimonial";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

const Section = () => {
    return (
        <div>
            <Header />
            <Logostrips />
            <AboutUs />
            <BrandSection />
            <Workprocess />
            {/* <TeamSection /> */}
            <Testimonial />
            <ContactForm />
            <Footer variant="light"/>
        </div>
    );
};

export default Section;