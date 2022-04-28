import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import SkillsExp from './SkillsExp'
import HobCert from './HobCert'
import ContactUs from './ContactUs'
import Footer from './Footer'

const AboutMe = () => {
    return (
        <div>
            <Navbar/>
            <Profile/>
            <SkillsExp/>
            <HobCert/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default AboutMe