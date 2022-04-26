import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Website from './components/Website';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css'

const App = () => {
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

ReactDOM.render(<App/>,document.getElementById("root"))