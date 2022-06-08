import React from 'react'

const WebsiteLists = (props) => {
    return (
        <>
            <div className="col-sm-5 col-xl-5 website-title d-flex align-items-sm-center">
                <h1>
                    <a href="#/" type="button" data-bs-toggle="modal" data-bs-target={props.modalID}>{props.websiteTitle}</a> <br/>
                    {props.children}
                    <div className="row">
                        <div className="col-12 releaseDate">
                            <p>Release Date: {props.relDate}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 progLang">
                            {props.progLang}
                        </div>
                    </div>
                </h1> 
            </div>
            <div className={`col-sm-7 col-xl-7 images ${props.class}`}>
                <img src={props.image} alt=""/>
            </div>
        </>
        
    )
}

export default WebsiteLists