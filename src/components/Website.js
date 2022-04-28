import React from 'react'
import '../css/website.css'
import Modal from './Modal'

const Website = () => {
    return (
        <section className="websites" data-bs-spy="scroll" data-bs-target="#scrollSpy" id='buttonWebsite'>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <h1>Websites</h1>
                    </div>
                    <div className="col-sm-5 col-xl-5 website-title d-flex align-items-sm-center">
                        <h1>
                            <a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#adriisabz">adriisabz v.1</a> <br/>
                            <Modal 
                                id="adriisabz"
                                img={require('../images/websites/devices/adriisabz-v1-desktop.png')}
                                h1="adriisabz v.1"
                                pRelDate="January 24, 2022"
                                pContent="adriisabz v.1 is my first website to developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to build this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                                webLink="https://adriisabz.netlify.app/"
                            />
                            <div className="row">
                                <div className="col-12 releaseDate">
                                    <p>Release Date: January 24, 2022</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 progLang">
                                    <a href="#/" className="prog-lang">HTML5</a>
                                    <a href="#/" className="prog-lang">CSS3</a>
                                    <a href="#/" className="prog-lang">materializeCSS</a>
                                </div>
                            </div>
                        </h1> 
                    </div>
                    <div className="col-sm-7 col-xl-7 images">
                        <img src={require("../images/websites/adriisabz-v1.png")} alt=""/>
                    </div>
                    <div className="col-12 images-sub">
                        <img src={require('../images/websites/devices/adriisabz-v1-mobile.png')} alt=""/>
                    </div>
                    <div className="col-12 images-tab">
                        <img src={require('../images/websites/devices/adriisabz-v1-tab.png')} alt=""/>
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#adriisabzPortrait">adriisabz v.1</a></h1>
                        <Modal 
                            id="adriisabzPortrait"
                            img={require('../images/websites/devices/adriisabz-v1-mobile.png')}
                            h1="adriisabz v.1"
                            pRelDate="January 24, 2022"
                            pContent="adriisabz v.1 is my first website to developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to build this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                            webLink="https://adriisabz.netlify.app/"
                        />
                        <p className='releaseDate'>Release Date: January 24, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className="me-0" href="#/">materializeCSS</a>
                        </p>
                    </div>
                    <div className="col-12 website-title-tab">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#adriisabzTab">adriisabz v.1</a></h1>
                        <Modal 
                            id="adriisabzTab"
                            img={require('../images/websites/devices/adriisabz-v1-tab.png')}
                            h1="adriisabz v.1"
                            pRelDate="January 24, 2022"
                            pContent="adriisabz v.1 is my first website to developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to build this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                            webLink="https://adriisabz.netlify.app/"
                        />
                        <p className='releaseDate'>Release Date: January 24, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className="me-0" href="#/">materializeCSS</a>
                        </p>
                    </div>
                    <div className="col-5 website-title d-flex align-items-sm-center">
                        <h1>
                            <a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#gadspect">GadSpect</a> <br/>
                            <Modal 
                                id="gadspect"
                                img={require('../images/websites/devices/gadspect-desktop.png')}
                                h1="GadSpect"
                                pRelDate="March 21, 2022"
                                pContent="GadSpect is a website to developed under the program of KodeGo. The programming languages used to build this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                                webLink="https://comicstrip12345.github.io/"
                            />
                            <div className="row">
                                <div className="col-12 releaseDate">
                                    <p>Release Date: March 21, 2022</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 progLang">
                                    <a href="#/" className="prog-lang">HTML5</a>
                                    <a href="#/" className="prog-lang">CSS3</a>
                                    <a href="#/" className="prog-lang">Bootstrap 5</a>
                                </div>
                            </div>
                        </h1> 
                    </div>
                    <div className="col-7 images">
                    <img src={require("../images/websites/gadspect.png")} alt=""/>
                    </div>
                    <div className="col-12 images-sub">
                        <img src={require("../images/websites/devices/gadspect-mobile.png")} alt=""/>
                    </div>
                    <div className="col-12 images-tab">
                        <img src={require('../images/websites/devices/gadspect-tab.png')} alt=""/>
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#gadspectPortrait">GadSpect</a></h1>
                        <Modal 
                            id="gadspectPortrait"
                            img={require('../images/websites/devices/gadspect-mobile.png')}
                            h1="GadSpect"
                            pRelDate="March 21, 2022"
                            pContent="GadSpect is a website to developed under the program of KodeGo. The programming languages used to build this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                            webLink="https://comicstrip12345.github.io/"
                        />
                        <p>Release Date: March 21, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a>
                        </p>
                    </div>
                    <div className="col-12 website-title-tab">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#gadspectTab">GadSpect</a></h1>
                        <Modal 
                            id="gadspectTab"
                            img={require('../images/websites/devices/gadspect-tab.png')}
                            h1="GadSpect"
                            pRelDate="March 21, 2022"
                            pContent="GadSpect is a website to developed under the program of KodeGo. The programming languages used to build this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                            webLink="https://comicstrip12345.github.io/"
                        />
                        <p>Release Date: March 21, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a>
                        </p>
                    </div>
                    <div className="col-5 website-title d-flex align-items-sm-center">
                        <h1>
                            <a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#ecalc">e-calc</a> <br/>
                            <Modal 
                                id="ecalc"
                                img={require('../images/websites/devices/ecalc-desktop.png')}
                                h1="ecalc"
                                pRelDate="April 1, 2022"
                                pContent="ecalc is a website to developed under the program of KodeGo. The programming languages used to build this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                                webLink="https://comicstrip12345.github.io/ecalc/"
                            />
                            <div className="row">
                                <div className="col-12 releaseDate">
                                    <p>Release Date: April 1, 2022</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-9 col-xl-12 progLang">
                                    <a href="#/" className="prog-lang">HTML5</a>
                                    <a href="#/" className="prog-lang">CSS3</a>
                                    <a href="#/" className="prog-lang">Bootstrap&nbsp;5</a> <br/>
                                    <a href="#/" className="prog-lang">Javascript ES6</a>
                                </div>
                            </div>
                        </h1> 
                    </div>
                    <div className="col-7 e-calc">
                        <img src={require("../images/websites/e-calc.png")} alt=""/>
                    </div>
                    <div className="col-12 images-sub">
                        <img src={require("../images/websites/devices/ecalc-mobile.png")} alt=""/>
                    </div>
                    <div className="col-12 images-tab">
                        <img src={require('../images/websites/devices/ecalc-tab.png')} alt=""/>
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#ecalcPortrait">e-calc</a></h1>
                        <Modal 
                            id="ecalcPortrait"
                            img={require('../images/websites/devices/ecalc-mobile.png')}
                            h1="ecalc"
                            pRelDate="April 1, 2022"
                            pContent="ecalc is a website to developed under the program of KodeGo. The programming languages used to build this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                            webLink="https://comicstrip12345.github.io/ecalc/"
                        />
                        <p>Release Date: April 1, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a className='me-0' href="#/">Javascript ES6</a>
                        </p>
                    </div>
                    <div className="col-12 website-title-tab">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#ecalcTab">e-calc</a></h1>
                        <Modal 
                            id="ecalcTab"
                            img={require('../images/websites/devices/ecalc-tab.png')}
                            h1="ecalc"
                            pRelDate="April 1, 2022"
                            pContent="ecalc is a website to developed under the program of KodeGo. The programming languages used to build this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                            webLink="https://comicstrip12345.github.io/ecalc/"
                        />
                        <p>Release Date: April 1, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a className='me-0' href="#/">Javascript ES6</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Website