import React from 'react'
// import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import makvishan_logo from "../assets/img/makvishan-logo.png"
import '../css/Menubar.css'
const Menubar = () => {
    return (
        <div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <Navbar.Brand href="#home">
                            <img src={makvishan_logo} alt='makvishan_logo' />
                        </Navbar.Brand>
                    </div>
                    <div className='col-12 col-md-7'>
                        <Nav className="me-auto">
                            <Nav.Link className="navbar-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="navbar-link" href="#about">About</Nav.Link>
                            <Nav.Link className="navbar-link" href="#services">Services</Nav.Link>
                            <Nav.Link className="navbar-link" href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="navbar-link" href="#team">Team</Nav.Link>
                            <Nav.Link className="navbar-link" href="#blog">Blog</Nav.Link>

                            <Button type="submit" className='talk-btn'>Let’s Talk</Button>

                        </Nav> 
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Menubar