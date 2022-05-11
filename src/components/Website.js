import React from 'react'
// import '../css/website.css'
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
                                pContent="adriisabz v.1 is my first website developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to built this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                                webLink="https://adriisabz.netlify.app/"
                                githubLink="https://github.com/comicstrip12345/adriisabz-personal-website"
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
                            pContent="adriisabz v.1 is my first website developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to built this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                            webLink="https://adriisabz.netlify.app/"
                            githubLink="https://github.com/comicstrip12345/adriisabz-personal-website"
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
                            pContent="adriisabz v.1 is my first website developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to built this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                            webLink="https://adriisabz.netlify.app/"
                            githubLink="https://github.com/comicstrip12345/adriisabz-personal-website"
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
                                pContent="GadSpect is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                                webLink="https://comicstrip12345.github.io/"
                                githubLink="https://github.com/comicstrip12345/comicstrip12345.github.io"
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
                            pContent="GadSpect is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                            webLink="https://comicstrip12345.github.io/"
                            githubLink="https://github.com/comicstrip12345/comicstrip12345.github.io"
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
                            pContent="GadSpect is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                            webLink="https://comicstrip12345.github.io/"
                            githubLink="https://github.com/comicstrip12345/comicstrip12345.github.io"
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
                                pContent="ecalc is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                                webLink="https://comicstrip12345.github.io/ecalc/"
                                githubLink="https://github.com/comicstrip12345/ecalc"
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
                                    <a href="#/" className="prog-lang">SASS</a>
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
                            pContent="ecalc is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                            webLink="https://comicstrip12345.github.io/ecalc/"
                            githubLink="https://github.com/comicstrip12345/ecalc"
                        />
                        <p>Release Date: April 1, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a href="#/">Javascript ES6</a>
                            <a href="#/" className="me-0">SASS</a>
                        </p>
                    </div>
                    <div className="col-12 website-title-tab">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#ecalcTab">e-calc</a></h1>
                        <Modal 
                            id="ecalcTab"
                            img={require('../images/websites/devices/ecalc-tab.png')}
                            h1="ecalc"
                            pRelDate="April 1, 2022"
                            pContent="ecalc is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                            webLink="https://comicstrip12345.github.io/ecalc/"
                            githubLink="https://github.com/comicstrip12345/ecalc"
                        />
                        <p>Release Date: April 1, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a href="#/">Javascript ES6</a>
                            <a href="#/" className="me-0">SASS</a>
                        </p>
                    </div>
                    <div className="col-5 website-title d-flex align-items-sm-center">
                        <h1>
                            <a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#watchr">watchr</a> <br/>
                            <Modal 
                                id="watchr"
                                img={require('../images/websites/devices/watchr-desktop.png')}
                                h1="watchr"
                                pRelDate="April 29, 2022"
                                pContent="watchr is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used are Bootstrap 5 and MUI, and library used is ReactJS. This website is an online streaming where you can watch unlimited Movies and TV Series, and you can avail per monthly subscription. It's goal is to provide users the entertainment where they can relax and forget all the problems from work and etc."
                                webLink="https://watchrs2.vercel.app/"
                                githubLink="https://github.com/prot3ch1993/watchrs2"
                            />
                            <div className="row">
                                <div className="col-12 releaseDate">
                                    <p>Release Date: April 29, 2022</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 progLang">
                                    <a href="#/" className="prog-lang">HTML5</a>
                                    <a href="#/" className="prog-lang">CSS3</a>
                                    <a href="#/" className="prog-lang">Bootstrap 5</a> <br/>
                                    <a href="#/" className="prog-lang">Javascript ES6</a> 
                                    <a href="#/" className="prog-lang">SASS</a>
                                    <a href="#/" className="prog-lang">ReactJS</a> <br/>
                                    <a href="#/" className="prog-lang">MUI</a>
                                </div>
                            </div>
                        </h1> 
                    </div>
                    <div className="col-7 images">
                    <img src={require("../images/websites/watchr.png")} alt=""/>
                    </div>
                    <div className="col-12 images-sub">
                        <img src={require("../images/websites/devices/watchr-mobile.png")} alt=""/>
                    </div>
                    <div className="col-12 images-tab">
                        <img src={require('../images/websites/devices/watchr-tab.png')} alt=""/>
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#watchrPortrait">watchr</a></h1>
                        <Modal 
                            id="watchrPortrait"
                            img={require('../images/websites/devices/watchr-mobile.png')}
                            h1="watchr"
                            pRelDate="April 29, 2022"
                            pContent="watchr is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used are Bootstrap 5 and MUI, and library used is ReactJS. This website is an online streaming where you can watch unlimited Movies and TV Series, and you can avail per monthly subscription. It's goal is to provide users the entertainment where they can relax and forget all the problems from work and etc."
                            webLink="https://watchrs2.vercel.app/"
                            githubLink="https://github.com/prot3ch1993/watchrs2"
                        />
                        <p>Release Date: April 29, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a href="#/">SASS</a>
                            <a href="#/">ReactJS</a> 
                            <a className='me-0' href="#/">MUI</a>
                        </p>
                    </div>
                    <div className="col-12 website-title-tab">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#watchrTab">watchr</a></h1>
                        <Modal 
                            id="watchrTab"
                            img={require('../images/websites/devices/watchr-tab.png')}
                            h1="watchr"
                            pRelDate="April 29, 2022"
                            pContent="watchr is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used are Bootstrap 5 and MUI, and library used is ReactJS. This website is an online streaming where you can watch unlimited Movies and TV Series, and you can avail per monthly subscription. It's goal is to provide users the entertainment where they can relax and forget all the problems from work and etc."
                            webLink="https://watchrs2.vercel.app/"
                            githubLink="https://github.com/prot3ch1993/watchrs2"
                        />
                        <p>Release Date: April 29, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a href="#/">Javascript ES6</a> 
                            <a href="#/">SASS</a>
                            <a className='me-0' href="#/">ReactJS</a> <br/><br/>
                            <a className='me-0' href="#/">MUI</a>
                        </p>
                    </div>
                    <div className="col-5 website-title d-flex align-items-sm-center">
                        <h1>
                            <a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#adriisabz-v2">adriisabz v.2</a> <br/>
                            <Modal 
                                id="adriisabz-v2"
                                img={require('../images/websites/devices/adriisabzv2-desktop.png')}
                                h1="adriisabz v.2"
                                pRelDate="May 11, 2022"
                                pContent="adriisabz v.2 is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used is Bootstrap 5, and library used is ReactJS. This website is a version 2 of my previous personal website. I used my learnings in bootcamp to develop the second version of my website a best user experience and simple user interface design."
                                webLink="https://adriisabz.vercel.app/"
                                githubLink="https://github.com/comicstrip12345/adriisabz"
                            />
                            <div className="row">
                                <div className="col-12 releaseDate">
                                    <p>Release Date: May 11, 2022</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 progLang">
                                    <a href="#/" className="prog-lang">HTML5</a>
                                    <a href="#/" className="prog-lang">CSS3</a>
                                    <a href="#/" className="prog-lang">Bootstrap 5</a> <br/>
                                    <a href="#/" className="prog-lang">Javascript ES6</a> 
                                    <a href="#/" className="prog-lang">SASS</a>
                                    <a href="#/" className="prog-lang">ReactJS</a>
                                </div>
                            </div>
                        </h1> 
                    </div>
                    <div className="col-7 images">
                    <img src={require("../images/websites/adriisabz-v2.png")} alt=""/>
                    </div>
                    <div className="col-12 images-sub">
                        <img src={require("../images/websites/devices/adriisabzv2-mob.png")} alt=""/>
                    </div>
                    <div className="col-12 images-tab">
                        <img src={require('../images/websites/devices/adriisabzv2-tab.png')} alt=""/>
                    </div>
                    <div className="col-12 website-title-sub">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#adriisabzv2Portrait">adriisabz v.2</a></h1>
                        <Modal 
                            id="adriisabzv2Portrait"
                            img={require('../images/websites/devices/adriisabzv2-mob.png')}
                            h1="adriisabz v.2"
                            pRelDate="May 11, 2022"
                            pContent="adriisabz v.2 is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used is Bootstrap 5, and library used is ReactJS. This website is a version 2 of my previous personal website. I used my learnings in bootcamp to develop the second version of my website a best user experience and simple user interface design."
                            webLink="https://adriisabz.vercel.app/"
                            githubLink="https://github.com/comicstrip12345/adriisabz"
                        />
                        <p>Release Date: May 11, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a href="#/">SASS</a>
                            <a className='me-0' href="#/">ReactJS</a>
                        </p>
                    </div>
                    <div className="col-12 website-title-tab">
                        <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target="#adriisabzv2Tab">adriisabz v.2</a></h1>
                        <Modal 
                            id="adriisabzv2Tab"
                            img={require('../images/websites/devices/adriisabzv2-tab.png')}
                            h1="adriisabz v.2"
                            pRelDate="May 11, 2022"
                            pContent="adriisabz v.2 is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used is Bootstrap 5, and library used is ReactJS. This website is a version 2 of my previous personal website. I used my learnings in bootcamp to develop the second version of my website a best user experience and simple user interface design."
                            webLink="https://adriisabz.vercel.app/"
                            githubLink="https://github.com/comicstrip12345/adriisabz"
                        />
                        <p>Release Date: May 11, 2022</p>
                        <p className="progLang">
                            <a href="#/">HTML5</a>
                            <a href="#/">CSS3</a>
                            <a className='me-0' href="#/">Bootstrap 5</a> <br/><br/>
                            <a href="#/">Javascript ES6</a> 
                            <a href="#/">SASS</a>
                            <a className='me-0' href="#/">ReactJS</a> 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Website