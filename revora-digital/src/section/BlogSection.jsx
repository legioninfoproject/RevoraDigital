import React from "react";
import BlogHeader from "../pages/BlogPage/BlogHeader";
import BlogListing from "../pages/BlogPage/BlogListing";
// import Footer from "../components/Footer/Footer";

const BlogSection = () => {
    return (
        <div>
            <BlogHeader />
            <BlogListing />
            {/* <Footer  variant="light"/> */}
        </div>
    )
};

export default BlogSection;