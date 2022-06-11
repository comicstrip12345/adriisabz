import React from 'react'

const ExperienceList = (props) => {
    return (
        <div data-aos="fade-up" className="col-12 col-sm-6 col-md-12 col-lg-6 exp">
            <div className="row">
                <div className="col-12 exp-place">
                    <h1>{props.name}</h1> 
                    <p className="exp-date">{props.timeline}</p>
                    <div className="row">
                        <div className="col-4 exp-place-content">
                            <p>Position:</p>
                            <p>Specialization:</p>
                            <p>Industry:</p>
                        </div>
                        <div className="col-8 exp-place-content">
                            <p>{props.position}</p>
                            <p>{props.specialization}</p>
                            <p>{props.industry}</p>
                        </div>
                        <div className="col-12 exp-place-content">
                            {props.description}
                        </div>
                        <div data-aos="fade-down" className='col-7 col-xl-4 cert'>
                            {props.children}
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default ExperienceList