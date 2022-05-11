import React from 'react'

const ModalCert = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-12'>
                            <img src={props.img} alt='img'/>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className='buttons'>
                        <a href="https://drive.google.com/file/d/1vKd_9Jtk8n3DpbUPEuxlmaB5maa0EFdm/view?usp=sharing" target={'_blank'} rel="noreferrer noopener" download>Download</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCert