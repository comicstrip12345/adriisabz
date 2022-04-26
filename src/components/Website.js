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
                            <a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">adriisabz v.1</a> <br/>
                            <Modal/>
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
                        <img src="" alt=""/>
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">adriisabz v.1</a></h1>
                        <Modal/>
                        <p>Release Date: January 24, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className="me-0" href="#/">materializeCSS</a>
                        </p>
                    </div>
                    <div className="col-5 website-title d-flex align-items-sm-center">
                        <h1>
                            <a href="#/">GadSpect</a> <br/>
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
                        <img src="" alt=""/>
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/">GadSpect</a></h1>
                        <p>Release Date: March 21, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a>
                        </p>
                    </div>
                    <div className="col-5 website-title d-flex align-items-sm-center">
                        <h1>
                            <a href="#/">e-calc</a> <br/>
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
                        {/* <img src="" alt=""/> */}
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/">e-calc</a></h1>
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