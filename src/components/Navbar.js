import React from 'react'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <h1><a href="/#">adriisabz</a></h1>
                <nav className="nav">
                    <a href="/#">About Me</a>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar