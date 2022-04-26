import React from 'react'

const ServiceLayout = (props) => {
    return (
        <div className="col-12 col-sm-4 col-md-12 col-lg-4 col-xl-4 list-services">
            <div className="row">
                <div className="col-12">
                    <img src={props.img} alt="services"/>
                </div>
                <div className="col-12">
                    <h1>{props.h1l1} <br/> {props.h1l2}</h1>
                    <p>{props.p}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceLayout