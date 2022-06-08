import React, {Fragment} from 'react'
import WebsiteLists from './WebsiteLists'
import Modal from './Modal'

const WebsiteDesktopVersion = () => {
    return (
        <>
            {/* Adriisabz v.1 */}
            <WebsiteLists
                image={require("../images/websites/adriisabz-v1.png")}
                modalID="#adriisabz" 
                websiteTitle="adriisabz v.1" 
                relDate="January 24, 2022"
                progLang={<Fragment>
                    <a href="#/" className="prog-lang">HTML</a>
                    <a href="#/" className="prog-lang">CSS</a>
                    <a href="#/" className="prog-lang">materializeCSS</a>
                </Fragment>}
            >
                <Modal 
                    id="adriisabz"
                    img={require('../images/websites/devices/adriisabz-v1-desktop.png')}
                    h1="adriisabz v.1"
                    pRelDate="January 24, 2022"
                    pContent="adriisabz v.1 is my first website developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to built this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                    webLink="https://adriisabz.netlify.app/"
                    githubLink="https://github.com/comicstrip12345/adriisabz-personal-website"
                />
            </WebsiteLists>
            {/* Gadspect */}
            <WebsiteLists
                image={require("../images/websites/gadspect.png")}
                modalID="#gadspect" 
                websiteTitle="GadSpect" 
                relDate="March 21, 2022"
                progLang={<Fragment>
                    <a href="#/" className="prog-lang">HTML</a>
                    <a href="#/" className="prog-lang">CSS</a>
                    <a href="#/" className="prog-lang">Bootstrap</a>
                </Fragment>}
            >
                <Modal 
                    id="gadspect"
                    img={require('../images/websites/devices/gadspect-desktop.png')}
                    h1="GadSpect"
                    pRelDate="March 21, 2022"
                    pContent="GadSpect is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                    webLink="https://comicstrip12345.github.io/"
                    githubLink="https://github.com/comicstrip12345/comicstrip12345.github.io"
                />
            </WebsiteLists>
            {/* e-calc */}
            <WebsiteLists
                image={require("../images/websites/e-calc.png")}
                class="e-calc"
                modalID="#ecalc" 
                websiteTitle="e-calc" 
                relDate="April 1, 2022"
                progLang={<Fragment>
                    <a href="#/" className="prog-lang">HTML</a>
                    <a href="#/" className="prog-lang">CSS</a>
                    <a href="#/" className="prog-lang">Bootstrap</a> <br/>
                    <a href="#/" className="prog-lang">Javascript</a>
                    <a href="#/" className="prog-lang">SASS</a>
                </Fragment>}
            >
                <Modal 
                    id="ecalc"
                    img={require('../images/websites/devices/ecalc-desktop.png')}
                    h1="ecalc"
                    pRelDate="April 1, 2022"
                    pContent="ecalc is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                    webLink="https://comicstrip12345.github.io/ecalc/"
                    githubLink="https://github.com/comicstrip12345/ecalc"
                />
            </WebsiteLists>
            {/* watchr */}
            <WebsiteLists
                image={require("../images/websites/watchr.png")}
                modalID="#watchr" 
                websiteTitle="watchr" 
                relDate="April 29, 2022"
                progLang={<Fragment>
                    <a href="#/" className="prog-lang">HTML</a>
                    <a href="#/" className="prog-lang">CSS</a>
                    <a href="#/" className="prog-lang">Bootstrap</a> <br/>
                    <a href="#/" className="prog-lang">Javascript</a> 
                    <a href="#/" className="prog-lang">SASS</a>
                    <a href="#/" className="prog-lang">ReactJS</a> <br/>
                    <a href="#/" className="prog-lang">MUI</a>
                </Fragment>}
            >
                <Modal 
                    id="watchr"
                    img={require('../images/websites/devices/watchr-desktop.png')}
                    h1="watchr"
                    pRelDate="April 29, 2022"
                    pContent="watchr is a website developed under the program of KodeGo. This website is an online streaming where you can watch unlimited Movies and TV Series, and you can avail per monthly subscription. It's goal is to provide users the entertainment where they can relax and forget all the problems from work and etc. It was built by 3 members, and we used HTML5, CSS3 and Javascript ES6, framework used are Bootstrap 5 and MUI, and library used is ReactJS. I designed the website and incorporate those designs to HTML Pages."
                    webLink="https://watchrs2.vercel.app/"
                    githubLink="https://github.com/prot3ch1993/watchrs2"
                />
            </WebsiteLists>
            {/* adriisabz v.2 */}
            <WebsiteLists
                image={require("../images/websites/adriisabz-v2.png")}
                modalID="#adriisabz-v2" 
                websiteTitle="adriisabz v.2" 
                relDate="June 8, 2022"
                progLang={<Fragment>
                    <a href="#/" className="prog-lang">HTML</a>
                    <a href="#/" className="prog-lang">CSS</a>
                    <a href="#/" className="prog-lang">Bootstrap</a> <br/>
                    <a href="#/" className="prog-lang">Javascript</a> 
                    <a href="#/" className="prog-lang">SASS</a>
                    <a href="#/" className="prog-lang">ReactJS</a>
                </Fragment>}
            >
                <Modal 
                    id="adriisabz-v2"
                    img={require('../images/websites/devices/adriisabzv2-desktop.png')}
                    h1="adriisabz v.2"
                    pRelDate="June 8, 2022"
                    pContent="adriisabz v.2 is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used is Bootstrap 5, and library used is ReactJS. This website is a version 2 of my previous personal website. I used my learnings in bootcamp to develop the second version of my website a best user experience and simple user interface design."
                    webLink="https://adriisabz.vercel.app/"
                    githubLink="https://github.com/comicstrip12345/adriisabz"
                />
            </WebsiteLists>
            {/* postme */}
            <WebsiteLists
                image={require("../images/websites/postme.png")}
                modalID="#postme" 
                websiteTitle="postme" 
                relDate="May 27, 2022"
                progLang={<Fragment>
                    <a href="#/" className="prog-lang">HTML</a>
                    <a href="#/" className="prog-lang">CSS</a>
                    <a href="#/" className="prog-lang">Bootstrap</a> 
                    <a href="#/" className="prog-lang">Javascript</a> <br/> 
                    <a href="#/" className="prog-lang">SASS</a>
                    <a href="#/" className="prog-lang">ReactJS</a>
                    <a href="#/" className="prog-lang">NodeJS</a>
                    <a href="#/" className="prog-lang">ExpressJS</a> <br/>
                    <a href="#/" className="prog-lang">mySQL</a>
                </Fragment>}
            >
                <Modal 
                    id="postme"
                    img={require('../images/websites/devices/postme-desktop.png')}
                    h1="postme"
                    pRelDate="May 27, 2022"
                    pContent="postme is a website developed under the program of KodeGo. This website was built by 2 members, and we used ReactJS as a front-end Framework, and NodeJS and ExpressJS as a back-end framework. We used mySql as our main database. This website is a social media platform to connect users to other users through posts. They can like and comment to their post or to other post. I was assigned as a web designer and front-end web developer while my other member was assigned as a back-end web developer."
                    webLink="https://postme.vercel.app/"
                    githubLink="https://github.com/comicstrip12345/postme"
                />
            </WebsiteLists>
            {/* Team Generator */}
            <WebsiteLists
                image={require("../images/websites/team-gen.png")}
                class="team-gen"
                modalID="#teamgen" 
                websiteTitle="Team Generator" 
                relDate="June 1, 2022"
                progLang={<Fragment>
                    <a href="#/" className="prog-lang">HTML</a>
                    <a href="#/" className="prog-lang">CSS</a>
                    <a href="#/" className="prog-lang">Bootstrap</a> 
                    <a href="#/" className="prog-lang">Typescript</a> <br/> 
                    <a href="#/" className="prog-lang">SASS</a>
                    <a href="#/" className="prog-lang">AngularJS</a>
                </Fragment>}
            >
                <Modal 
                    id="teamgen"
                    img={require('../images/websites/devices/teamgen-desktop.png')}
                    h1="Team Generator"
                    pRelDate="June 1, 2022"
                    pContent="Team Generator is a website for assigning teams randomly by enter the list of names and generate teams randomly. I used AngularJS and Typescript to built this website."
                    webLink="https://team-gen.vercel.app/"
                    githubLink="https://github.com/comicstrip12345/team-generator"
                />
            </WebsiteLists>
        </>
    )
}

export default WebsiteDesktopVersion