import React from 'react'
import VersionList from './VersionList'

const ModalVersion = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Versions</h1>
                        <button type="button" className="" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="modal-body">
                        <VersionList
                            ver="v.2.0.2"
                            relDate="May 1, 2022"
                            author="Adriano Sabanal Jr."
                            details="Added Version List Modal located in footer section."
                        />
                        <VersionList
                            ver="v.2.0.1"
                            relDate="May 1, 2022"
                            author="Adriano Sabanal Jr."
                            details="Modified Professional Skill in mobile and tablet screens from 'Front-end Web Developer Web Designer' to 'Front-end Web Developer and Web Designer'."
                        />
                        <VersionList
                            ver="v.2.0.0"
                            relDate="April 29, 2022"
                            author="Adriano Sabanal Jr."
                            details="First website to release with functionalites and responsiveness."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVersion