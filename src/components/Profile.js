import React from 'react'

const Profile = () => {
    return (
        <section className="about-hero">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-5 col-xl-5 title">
                        <h1>Hi. I'm Adriano</h1>
                        <p className="nickname">But you can call me Adrii</p>
                        <p className="content">
                            I’m a Front-end Web Developer and Web Designer. But before that, I’m a licensed Aeronautical Engineer.  Currently I’m studying the Front-end Web Developer Course at KodeGo, and Web Designer at Udemy . I must say, they did well in explaining things on how to create stunning websites. <br/> <br/>
                            In my freetime, I take photos on everywhere, creating websites to increase my knowledge in coding, and riding a bike elsewhere.
                        </p>
                        <div className="buttons-about">
                            <button><strong>3+</strong> Months of Experience</button>
                            <button><strong>5</strong>  Projects Finished</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-12 col-lg-7 col-xl-7 image">
                        <img src={require("../images/hero-pic.png")} alt=""/>
                    </div>
                    <div className="col-12 col-md-12 col-xl-6 title-sub">
                        <center>
                            <h1>Hi. I'm Adriano</h1>
                            <p className="nickname">But you can call me Adrii</p>
                            <p className="content">
                                I’m a Front-end Web Developer and Web Designer. But before that, I’m a licensed Aeronautical Engineer.  Currently I’m studying the Front-end Web Developer Course at KodeGo, and Web Designer at Udemy . I must say, they did well in explaining things on how to create stunning websites. <br/> <br/>
                                In my freetime, I take photos on everywhere, creating websites to increase my knowledge in coding, and riding a bike elsewhere.
                            </p>
                            <div className="buttons-about">
                                <button><strong>3+</strong> Months of Experience</button>
                                <button><strong>5</strong>  Projects Finished</button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile