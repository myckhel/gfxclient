import React from 'react'
import './style.css'
import Navbar from "../../components/Views/Home/Navbar";
import Banner from "../../components/Views/Home/Banner";
import Services from "../../components/Views/Home/Services";
import FeaturesOne from "../../components/Views/Home/FeaturesOne";
import FeaturesTwo from "../../components/Views/Home/FeaturesTwo";
import Counter from "../../components/Views/Home/Counter";
import Pricing from "../../components/Views/Home/Pricing";
import Testimonial from "../../components/Views/Home/Testimonial";
import Faq from "../../components/Views/Home/Faq";
import BlogHome from "../../components/Views/Home/BlogHome";
import Contact from "../../components/Views/Home/Contact";
import CallToAction from "../../components/Views/Home/CallToAction";
import Footer from "../../components/Views/Home/Footer";


const Home = () => (
  <div className="page-wrapper">
    <Navbar />
    <Banner />
    <Services />
    <FeaturesOne />
    <FeaturesTwo />
    <Counter />
    <Pricing />
    <Testimonial />
    <Faq />
    <BlogHome />
    <Contact />
    <CallToAction />
    <Footer />
  </div>
)
/**/
export default Home;
