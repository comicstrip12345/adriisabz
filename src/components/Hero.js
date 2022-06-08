import React from 'react'
import Fade from 'react-reveal'

const Hero = () => {
    return (
        <section className="hero" id='scrollSpy'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-7 col-md-12 col-lg-7 col-xl-6 title">
                    <div className='row'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Fade left>
                                    <h1 className='hero'>Adriano Sabanal Jr.</h1>
                                    <p className="skill">Front-end Web Developer and Web Designer</p>
                                    <div className="col-12 socmed">
                                        <a href="https://www.facebook.com/adriisabz/"><img src={require("../images/socmed/facebook.png")} alt="fb"/></a>
                                        <a href="https://twitter.com/comicstrip12345"><img src={require("../images/socmed/twitter.png")} alt="twitter"/></a>
                                        <a href="https://www.linkedin.com/in/adriano-sabanal-jr-15b4a3180/"><img src={require("../images/socmed/linkedin.png")} alt="linkedin"/></a>
                                        <a className='github' href="https://github.com/comicstrip12345"><img src={require("../images/socmed/github.png")} alt="github"/></a>
                                    </div>
                                    <div className="col-12 buttons hero" >
                                        <a href='#buttonWebsite'><button>Websites</button></a>
                                        <a className='me-0' href='https://drive.google.com/file/d/1m4xTBFb9VLildJ3mj4uA9EZh99pvy5EP/view?usp=sharing' target={'_blank'} rel="noreferrer noopener" download><button>Resume</button></a>
                                    </div>
                                    </Fade>
                                </div>
                                <div className="carousel-item profile-info">
                                    <h1 className='profile'>Hi. I'm Adriano</h1>
                                    <p className="nickname">But you can call me Adrii</p>
                                    <p className="content">
                                        I’m a Front-end Web Developer and Web Designer. But before that, I’m a licensed Aeronautical Engineer.  Currently I'm graduated at KodeGo for Front-end Web Developer Course , and studying Web Designer Course at Udemy. I must say, they did well in explaining things on how to create stunning websites. <br/> <br/>
                                        In my freetime, I take photos on everywhere, creating websites to increase my knowledge in coding, and riding a bike elsewhere.
                                    </p>
                                    <div className="buttons profile">
                                        <button><strong>4+</strong> Months of Experience</button>
                                        <a href='#buttonWebsite'><button><strong>7</strong>  Projects Finished</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero