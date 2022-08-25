import React from 'react'
import ModalVersion from './ModalVersion'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6 copyright">
                        <p>&copy; 2022 adriisabz. All right reserved</p>
                    </div>
                    <div className='col-6 version'>
                        <a href='/#' type="button" data-bs-toggle="modal" data-bs-target="#version">v.2.2.3</a>
                        <ModalVersion 
                            id="version"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer