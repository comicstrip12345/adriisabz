import React,{Fragment} from 'react'
import ModalCert from './ModalCert'
import ExperienceList from './ExperienceList'

const Experience = () => {
    return (
        <section className="experience" id='scrollspyEducation'>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="col-12 title">
                        <h1>Education</h1>
                    </div>
                    <ExperienceList
                        name="KodeGo"
                        timeline="Feb. 2022 - May 2022"
                        position="Trainee"
                        specialization="Front-end Web Developer"
                        industry="Information Technology"
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
                        <button data-bs-toggle="modal" data-bs-target="#kodeGoCert">View Certificate</button>
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
                        industry="Information Technology"
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
                        <button data-bs-toggle="modal" data-bs-target="#tesdaCert">View Certificate</button>
                        <ModalCert
                            id="tesdaCert" 
                            img={require('../images/tesda-cert.PNG')}
                            link="https://drive.google.com/file/d/1vKd_9Jtk8n3DpbUPEuxlmaB5maa0EFdm/view?usp=sharing"
                        />
                    </ExperienceList>
                    <div data-aos="fade-right" className="col-12 title" id='scrollspyExperiences'>
                        <h1>Work Experience</h1>
                    </div>
                    <ExperienceList
                        name="Collabera Philippines"
                        timeline="September 2022 - Present"
                        position="ReactJS Engineer"
                        specialization="Web Development"
                        industry="Information Technology"
                        description={<Fragment>
                            <p>- Focuses on developing and implementing software programs</p>
                            <p>
                                - Work closely with the Solutions Architect to translate design principles into code.
                            </p>
                            <p>
                                - work with programming tasks like design patterns and data structures and may also handle tasks like control flaws and unit testing.
                            </p>
                        </Fragment>}
                    >
                    </ExperienceList>
                    <ExperienceList
                        name="Aircraft Engineering and Consultancy Ltd."
                        timeline="January 2020 - October 2020"
                        position="Intern"
                        specialization="Aircraft Technical Records"
                        industry="Aviation"
                        description={<Fragment>
                            <p>- Organization and safekeeping of all aircraft technical records</p>
                            <p>
                                - Auditing and scanning of completed work packages
                            </p>
                            <p>
                                - Administering technical records and archives per regulatory requirements
                            </p>
                        </Fragment>}
                    >
                    </ExperienceList>
                </div>
            </div>
        </section>
    )
}

export default Experience