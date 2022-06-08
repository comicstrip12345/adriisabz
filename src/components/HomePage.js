import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import ScrolltoTopButton from './ScrolltoTopButton'
import Services from './Services';
import Skills from './Skills';
import Website from './Website';
import Experience from './Experience';
import ContactUs from './ContactUs';
import Footer from './Footer';

const HomePage = () => {
    return (
        <>
            <ScrolltoTopButton/>
            <Navbar/>
            <Hero/>
            <Services/>
            <Skills/>
            <Website/>
            <Experience/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default HomePage