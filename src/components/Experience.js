import React,{Fragment} from 'react'
import ModalCert from './ModalCert'
import ExperienceList from './ExperienceList'

const Experience = () => {
    return (
        <section className="experience" id='scrollspyExperiences'>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="col-12 title">
                        <h1>Coding Experiences</h1>
                    </div>
                    <ExperienceList
                        name="KodeGo"
                        timeline="Feb. 2022 - May 2022"
                        position="Trainee"
                        specialization="Front-end Web Developer"
                        industry="Computer Systems Design and Related Services"
                        modalID="#kodeGoCert"
                        description={<Fragment>
                            <p>- Incorporate the HTML Design into HTML file.</p>
                            <p>
                                - Design the HTML website according to the client’s specifications.
                            </p>
                            <p>
                                - Understanding the basic concepts of HTML, CSS, Javascript, Bootstrap 5, ReactJS, NodeJS, ExpressJS and Laravel for developing a website.
                            </p>
                            <p>
                                - Understanding the tools needed for Version Control like GitHub and Git.
                            </p>
                            <p>
                                - Knowing the useful tips needed to accomplish the website.
                            </p>
                            <p>
                                - Knowing the coding standards needed for debugging and reviewing the codes of website.
                            </p>
                            <p>- has created 5 websites.</p>
                        </Fragment>}
                    >
                        <ModalCert
                            id="kodeGoCert" 
                            img={require('../images/kodego-cert.PNG')}
                            link="https://drive.google.com/file/d/1Ns16nSQnAHfJqRK2ypEvLet8vqphARBA/view?usp=sharing"
                        />
                    </ExperienceList>
                    <ExperienceList
                        name="Swiss IT Academy"
                        timeline="Dec. 2021 - Jan. 2022"
                        position="Trainee"
                        specialization="Front-end Web Developer"
                        industry="Computer Systems Design and Related Services"
                        modalID="#tesdaCert"
                        description={<Fragment>
                            <p>
                                - Understanding the basic concepts of HTML, CSS, Javascript, and materializeCSS for developing a website
                            </p>
                            <p>
                                - Knowing the useful tips needed to accomplish the website 
                            </p>
                            <p>
                                - Knowing how to deploy the website using Netlify
                            </p>
                            <p>- has created 1 website.</p>
                        </Fragment>}
                    >
                        <ModalCert
                            id="tesdaCert" 
                            img={require('../images/tesda-cert.PNG')}
                            link="https://drive.google.com/file/d/1vKd_9Jtk8n3DpbUPEuxlmaB5maa0EFdm/view?usp=sharing"
                        />
                    </ExperienceList>
                </div>
            </div>
        </section>
    )
}

export default Experience