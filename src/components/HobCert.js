import React from 'react'
import '../css/hobcert.css'
import ModalCert from './ModalCert'

const HobCert = () => {
    return (
        <section className="hobbies-cert">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 hobbies">
                        <h1>Hobbies</h1>
                        <p>
                            <a href="/#">Coding</a>
                            <a href="/#">Photography</a>
                            <a href="/#" className="biking">Biking</a>
                            <br/><br/>
                            <a href="/#" className="watch">Watching Movies and Series</a>
                            <br/><br/>
                            <a href="/#">Basketball</a>
                            <a href="/#" className="games">Playing Games</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-7 col-md-12 col-lg-7 col-xl-7 cert">
                        <div className="row">
                            <div className="col-xl-12 title">
                                <h1>Certifications</h1>
                            </div>
                            <div className="col-12 col-sm-5 col-xl-5 d-flex align-items-center cert-date">
                                <h1>February 4, 2022</h1>
                            </div>
                            <div className="col-12 col-sm-7 col-xl-7 cert-place">
                                <h1>Web Development III</h1>
                                <h1 className="cert-date">February 4, 2022</h1>
                                <div className="row">
                                    <div className="col-6 col-xl-4 cert-place-content">
                                        <p>Cert. of Reg. #:</p>
                                    </div>
                                    <div className="col-6 col-xl-8 cert-place-content">
                                        <p>NTR201813120071</p>
                                    </div>
                                    <div className="col-6 col-xl-4 cert-place-content">
                                        <p>School Trained:</p>
                                    </div>
                                    <div className="col-6 col-xl-8 cert-place-content">
                                        <p>Swiss IT Academy</p>
                                    </div>
                                    <div className="col-12 cert-place-content a" >
                                        <a href="/#" type="button" data-bs-toggle="modal" data-bs-target="#tesdaCert">Click to view</a>
                                        <ModalCert
                                            id="tesdaCert" 
                                            img={require('../images/tesda-cert.PNG')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HobCert