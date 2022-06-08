import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top" id="navbar-example2">
            <div className="container">
                <h1 data-aos="fade-right"><a href="/">adriisabz</a></h1>
                <nav data-aos="fade-left" className="nav">
                    <a href="#scrollspyServices">Services</a>
                    <a href="#scrollspySkills">Skills</a>
                    <a href="#buttonWebsite">Websites</a>
                    <a href="#scrollspyExperiences">Experiences</a>
                    <a href="#scrollspyContacts">Contact Us</a>
                </nav>
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-list"></i></button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul>
                            <li><a href="#scrollspyServices">Services</a></li>
                            <li><a href="#scrollspySkills">Skills</a></li>
                            <li><a href="#buttonWebsite">Websites</a></li>
                            <li><a href="#scrollspyExperiences">Experiences</a></li>
                            <li><a href="#scrollspyContacts">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar