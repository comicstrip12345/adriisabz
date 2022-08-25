import React from 'react'
import SkillTitle from './SkillTitle'
// import Tools from './Tools'
import ProgLang from './ProgLang'

const Skills = () => {
    return (
        <section className="skill" id="scrollspySkills">
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="col-12 title">
                        <h1>Skills</h1>
                    </div>
                    <SkillTitle title="Front-end">
                        <div className='row'>
                            <div className='col-12 spacing'>
                                <p>
                                <ProgLang tools="HTML"/>
                                <ProgLang tools="CSS"/>
                                <ProgLang tools="Javascript" class="mr-0"/>
                                </p>
                            
                            </div>
                            <div className='col-12 spacing'>
                                <p>
                                    <ProgLang tools="Bootstrap"/>
                                    <ProgLang tools="materializeCSS"/>
                                    <ProgLang tools="ReactJS" class="mr-0"/>
                                </p>
                            </div>
                            <div className='col-12 spacing'>
                                <p>
                                    <ProgLang tools="SASS"/>
                                    <ProgLang tools="MUI"/>
                                    <ProgLang tools="AngularJS" class="mr-0"/>
                                </p>
                            </div>
                            <div className='col-12'>
                                <p>
                                    <ProgLang tools="Redux"/>
                                    <ProgLang tools="NextJS"/>
                                    <ProgLang tools="Typescript" class="mr-0"/>
                                </p>
                            </div>
                        </div>
                    </SkillTitle>
                    <SkillTitle title="Back-end">
                        <div className='row'>
                            <div className='col-12 spacing'>
                                <p>
                                    <ProgLang tools="NodeJS"/>
                                    <ProgLang tools="ExpressJS"/>
                                    <ProgLang tools="PHP" class="mr-0"/>
                                </p>
                            </div>
                            <div className='col-12'>
                                <p>
                                    <ProgLang tools="Laravel" class="mr-0"/>
                                </p>
                            </div>
                        </div>
                    </SkillTitle>
                    <SkillTitle title="Design">
                        <p>
                            <ProgLang tools="Figma" class="mr-0"/>
                        </p>
                    </SkillTitle>
                    <SkillTitle title="Version Control">
                        <p>
                            <ProgLang tools="Github" class="mr-0"/>
                        </p>
                    </SkillTitle>
                    <SkillTitle title="Database">
                        <p>
                            <ProgLang tools="mySQL" class="mr-0"/>
                        </p>
                    </SkillTitle>
                    <SkillTitle title="Tools">
                        <p>
                            <ProgLang tools="Visual Studio Code"/>
                            <ProgLang tools="Sourcetree" class="mr-0"/>
                        </p>
                    </SkillTitle>
                </div>
            </div>
        </section>
    )
}

export default Skills