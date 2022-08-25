import React,{useEffect, useState} from 'react'
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
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(false)
    },[])
    return (
        <>
            {loading && 
                <section className='loading'>
                    <div className='col-12 loadingHead'>
                                <h1>LOADING.....</h1>
                            </div>
                </section>
            }
            {!loading &&
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
            }
        </>
    )
}

export default HomePage