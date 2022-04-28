import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5'>
                            <img src={props.img} alt='img'/>
                        </div>
                        <div className='col-12 col-sm-7 col-md-12 col-lg-7 col-xl-7'>
                            <h1>{props.h1}</h1>
                            <p className='relDate'>{props.pRelDate}</p>
                            <p className='content'>{props.pContent}</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className='buttons'>
                        <a href={props.webLink} target={'_blank'} rel="noreferrer noopener"><button type="button" className="btn btn-primary gap">Enter Site</button></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal