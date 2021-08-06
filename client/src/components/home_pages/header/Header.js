import React from 'react'
import Nav from './Nav';
const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
            <div className="container" >
                <img src="../img/logo1.png" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i id="bar" className="fas fa-bars" /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav {...props} />
                </div>
            </div>
        </nav>

    )
}

export default Header
