import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Website from './Website';
import ContactUs from './ContactUs';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
            <Website/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default HomePage