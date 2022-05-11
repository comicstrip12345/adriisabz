import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <h1><a href="/">adriisabz</a></h1>
                <nav className="nav">
                    <a href="/about">About Me</a>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar