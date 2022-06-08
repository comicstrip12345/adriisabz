import React from 'react'

const WebsiteMobileList = (props) => {
    return (
        <>
            <div className="col-12 images-sub">
                <img src={props.image} alt=""/>
            </div>
            <div className="col-12 website-title-sub">
                <h1><a href="#/" type="button" data-bs-toggle="modal" data-bs-target={props.modalID}>{props.title}</a></h1>
                {props.children}
                <p className='releaseDate'>Release Date: {props.relDate}</p>
                <p className="progLang">
                    {props.progLang}
                </p>
            </div>
        </>
    )
}

export default WebsiteMobileList