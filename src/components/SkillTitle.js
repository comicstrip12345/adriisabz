import React from 'react'

const SkillTitle = (props) => {
    return (
        <>
            <div className="col-12 col-sm-4 col-md-12 col-lg-4 skills">
                <div className="row">
                    <div data-aos="fade-down" className={`col-12 skill-title ${props.class}`}>
                        <h1>{props.title}</h1>
                    </div>
                    <div data-aos="fade-up" className="col-12 tools">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillTitle