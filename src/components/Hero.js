import React from 'react'
import '../css/hero.css'

const Hero = () => {
    return (
        <section className="hero" id='scrollSpy'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-6 col-xl-6 title">
                    <h1>Adriano Sabanal Jr.</h1>
                    <p className="skill">Front-end Web Developer and Web Designer</p>
                    <div className="col-12 socmed">
                        <a href="#/"><img src={require("../images/socmed/facebook.png")} alt="fb"/></a>
                        <a href="#/"><img src={require("../images/socmed/twitter.png")} alt="twitter"/></a>
                        <a href="#/"><img src={require("../images/socmed/linkedin.png")} alt="linkedin"/></a>
                        <a href="#/"><img src={require("../images/socmed/github.png")} alt="github"/></a>
                        <a href="#/"><img src={require("../images/socmed/discord.png")} alt="discord"/></a>
                    </div>
                    <div className="buttons">
                        <a href='#buttonWebsite'><button>Websites</button></a>
                        <a href='../files/adrianResume.pdf'><button>Resume</button></a>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 image">
                    <img src={require("../images/hero-pic.png")} alt=""/>
                </div>
                <div className="col-12 col-xl-6 title-sub">
                    <center>
                        <h1>Adriano Sabanal Jr.</h1>
                        <p className="skill">Front-end Web Developer Web Designer</p>
                        <div className="col-12 socmed">
                            <a href="#/"><img src={require("../images/socmed/facebook.png")} alt="fb"/></a>
                            <a href="#/"><img src={require("../images/socmed/twitter.png")} alt="twitter"/></a>
                            <a href="#/"><img src={require("../images/socmed/discord.png")} alt="discord"/></a>
                            <a href="#/"><img src={require("../images/socmed/github.png")} alt="github"/></a>
                            <a href="#/"><img src={require("../images/socmed/linkedin.png")} alt="linkedin" className="linkedin"/></a>
                        </div>
                        <div className="buttons">
                            <button>Websites</button>
                            <button className="resume">Resume</button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero