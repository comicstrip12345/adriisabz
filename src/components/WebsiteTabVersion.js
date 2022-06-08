import React, {Fragment} from 'react'
import WebsiteTabletList from './WebsiteTabletList'
import Modal from './Modal'

const WebsiteTabVersion = () => {
    return (
        <>
            {/* Adriisabz v.1 */}
            <WebsiteTabletList
                                image={require('../images/websites/devices/adriisabz-v1-tab.png')}
                                modalID="#adriisabzTab"
                                title="adriisabz v.1"
                                relDate="January 24, 2022"
                                progLang={<Fragment>
                                    <a href="#/">HTML</a>
                                    <a href="#/">CSS</a>
                                    <a className="me-0" href="#/">materializeCSS</a>
                                </Fragment>}
                            >
                                <Modal 
                                    id="adriisabzTab"
                                    img={require('../images/websites/devices/adriisabz-v1-tab.png')}
                                    h1="adriisabz v.1"
                                    pRelDate="January 24, 2022"
                                    pContent="adriisabz v.1 is my first website developed under the program of TESDA TWSP at Swiss IT Academy. The programming languages used to built this website are HTML5 and CSS3, and framework used is materializeCSS. This website is my first personal website and it contains my previous work, and about myself."
                                    webLink="https://adriisabz.netlify.app/"
                                    githubLink="https://github.com/comicstrip12345/adriisabz-personal-website"
                                />
            </WebsiteTabletList>
            {/* GadSpect */}
            <WebsiteTabletList
                image={require('../images/websites/devices/gadspect-tab.png')}
                modalID="#gadspectTab"
                title="GadSpect"
                relDate="March 21, 2022"
                progLang={<Fragment>
                    <a href="#/">HTML</a>
                    <a href="#/">CSS</a>
                    <a className='me-0' href="#/">Bootstrap</a>
                </Fragment>}
            >
                <Modal 
                    id="gadspectTab"
                    img={require('../images/websites/devices/gadspect-tab.png')}
                    h1="GadSpect"
                    pRelDate="March 21, 2022"
                    pContent="GadSpect is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5 and CSS3, and framework used is Bootstrap 5. This website is an online magazine, and it's goal is to provide for users the knowledge of their gadgets before and after buying."
                    webLink="https://comicstrip12345.github.io/"
                    githubLink="https://github.com/comicstrip12345/comicstrip12345.github.io"
                />
            </WebsiteTabletList>
            {/* e-calc */}
            <WebsiteTabletList
                image={require('../images/websites/devices/ecalc-tab.png')}
                modalID="#ecalcTab"
                title="e-calc"
                relDate="April 1, 2022"
                progLang={<Fragment>
                    <a href="#/">HTML</a>
                    <a href="#/">CSS</a>
                    <a className='me-0' href="#/">Bootstrap</a> <br/><br/>
                    <a href="#/">Javascript</a>
                    <a href="#/" className="me-0">SASS</a>
                </Fragment>}
            >
                <Modal 
                    id="ecalcTab"
                    img={require('../images/websites/devices/ecalc-tab.png')}
                    h1="ecalc"
                    pRelDate="April 1, 2022"
                    pContent="ecalc is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3, and Javascript ES6, and framework used is Bootstrap 5. This website is a tool to compute mathematical operations, and it helps the user to solve their math problems online."
                    webLink="https://comicstrip12345.github.io/ecalc/"
                    githubLink="https://github.com/comicstrip12345/ecalc"
                />
            </WebsiteTabletList>
            {/* watchr */}
            <WebsiteTabletList
                image={require('../images/websites/devices/watchr-tab.png')}
                modalID="#watchrTab"
                title="watchr"
                relDate="April 29, 2022"
                progLang={<Fragment>
                    <a href="#/">HTML</a>
                    <a href="#/">CSS</a>
                    <a className='me-0' href="#/">Bootstrap</a> <br/><br/>
                    <a href="#/">Javascript</a> 
                    <a href="#/">SASS</a>
                    <a className='me-0' href="#/">ReactJS</a> <br/><br/>
                    <a className='me-0' href="#/">MUI</a>
                </Fragment>}
            >
                <Modal 
                    id="watchrTab"
                    img={require('../images/websites/devices/watchr-tab.png')}
                    h1="watchr"
                    pRelDate="April 29, 2022"
                    pContent="watchr is a website developed under the program of KodeGo. This website is an online streaming where you can watch unlimited Movies and TV Series, and you can avail per monthly subscription. It's goal is to provide users the entertainment where they can relax and forget all the problems from work and etc. It was built by 3 members, and we used HTML5, CSS3 and Javascript ES6, framework used are Bootstrap 5 and MUI, and library used is ReactJS. I designed the website and incorporate those designs to HTML Pages."
                    webLink="https://watchrs2.vercel.app/"
                    githubLink="https://github.com/prot3ch1993/watchrs2"
                />
            </WebsiteTabletList>
            {/* Adriisabz v.2 */}
            <WebsiteTabletList
                image={require('../images/websites/devices/adriisabzv2-tab.png')}
                modalID="#adriisabzv2Tab"
                title="adriisabz v.2"
                relDate="June 8, 2022"
                progLang={<Fragment>
                    <a href="#/">HTML</a>
                    <a href="#/">CSS</a>
                    <a className='me-0' href="#/">Bootstrap</a> <br/><br/>
                    <a href="#/">Javascript</a> 
                    <a href="#/">SASS</a>
                    <a className='me-0' href="#/">ReactJS</a> 
                </Fragment>}
            >
                <Modal 
                    id="adriisabzv2Tab"
                    img={require('../images/websites/devices/adriisabzv2-tab.png')}
                    h1="adriisabz v.2"
                    pRelDate="June 8, 2022"
                    pContent="adriisabz v.2 is a website developed under the program of KodeGo. The programming languages used to built this website are HTML5, CSS3 and Javascript ES6, framework used is Bootstrap 5, and library used is ReactJS. This website is a version 2 of my previous personal website. I used my learnings in bootcamp to develop the second version of my website a best user experience and simple user interface design."
                    webLink="https://adriisabz.vercel.app/"
                    githubLink="https://github.com/comicstrip12345/adriisabz"
                />
            </WebsiteTabletList>
            {/* postme */}
            <WebsiteTabletList
                image={require('../images/websites/devices/postme-tab.png')}
                modalID="#postmeTab"
                title="postme"
                relDate="May 27, 2022"
                progLang={<Fragment>
                    <a href="#/">HTML</a>
                    <a href="#/">CSS</a>
                    <a className='me-0' href="#/">Bootstrap</a> <br/><br/>
                    <a href="#/">SASS</a>
                    <a href="#/">Javascript</a>
                    <a className='me-0' href="#/">ReactJS</a> <br/><br/>
                    <a href="#/">NodeJS</a>
                    <a href="#/">ExpressJS</a>
                    <a className='me-0' href="#/">mySQL</a>
                </Fragment>}
            >
                <Modal 
                    id="postmeTab"
                    img={require('../images/websites/devices/postme-tab.png')}
                    h1="postme"
                    pRelDate="May 27, 2022"
                    pContent="postme is a website developed under the program of KodeGo. This website was built by 2 members, and we used ReactJS as a front-end Framework, and NodeJS and ExpressJS as a back-end framework. We used mySql as our main database. This website is a social media platform to connect users to other users through posts. They can like and comment to their post or to other post. I was assigned as a web designer and front-end web developer while my other member was assigned as a back-end web developer."
                    webLink="https://postme.vercel.app/"
                    githubLink="https://github.com/comicstrip12345/postme"
                />
            </WebsiteTabletList>
        </>
    )
}

export default WebsiteTabVersion