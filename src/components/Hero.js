import React from 'react'

const Hero = () => {
    return (
        <section className="hero" id='scrollSpy'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-6 col-xl-6 title">
                    <h1>Adriano Sabanal Jr.</h1>
                    <p className="skill">Front-end Web Developer and Web Designer</p>
                    <div className="col-12 socmed">
                        <a href="https://www.facebook.com/adriisabz/"><img src={require("../images/socmed/facebook.png")} alt="fb"/></a>
                        <a href="https://twitter.com/comicstrip12345"><img src={require("../images/socmed/twitter.png")} alt="twitter"/></a>
                        <a href="https://www.linkedin.com/in/adriano-sabanal-jr-15b4a3180/"><img src={require("../images/socmed/linkedin.png")} alt="linkedin"/></a>
                        <a href="https://github.com/comicstrip12345"><img src={require("../images/socmed/github.png")} alt="github"/></a>
                    </div>
                    <div className="buttons">
                        <a href='#buttonWebsite'><button>Websites</button></a>
                        <a href='https://drive.google.com/file/d/1Q2lxlPaDPFntVv9jJQoTGGK8NlIl_kak/view?usp=sharing' target={'_blank'} rel="noreferrer noopener" download><button>Resume</button></a>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 image">
                    <img src={require("../images/hero-pic.png")} alt=""/>
                </div>
                <div className="col-12 col-xl-6 title-sub">
                    <center>
                        <h1>Adriano Sabanal Jr.</h1>
                        <p className="skill">Front-end Web Developer and Web Designer</p>
                        <div className="col-12 socmed">
                            <a href="#/"><img src={require("../images/socmed/facebook.png")} alt="fb"/></a>
                            <a href="#/"><img src={require("../images/socmed/twitter.png")} alt="twitter"/></a>
                            <a href="#/"><img src={require("../images/socmed/discord.png")} alt="discord"/></a>
                            <a href="#/"><img src={require("../images/socmed/github.png")} alt="github"/></a>
                            <a href="#/"><img src={require("../images/socmed/linkedin.png")} alt="linkedin" className="linkedin"/></a>
                        </div>
                        <div className="buttons">
                            <a href='#buttonWebsite'><button>Websites</button></a>
                            <a href='https://drive.google.com/file/d/1a-iFWZ0t1eBr7BuMfDKQyCKTHicClWxh/view?usp=sharing' target={'_blank'} rel="noreferrer noopener" download><button className='resume'>Resume</button></a>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero