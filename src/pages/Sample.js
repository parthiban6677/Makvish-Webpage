import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa"; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import makvishan_logo from "../assets/img/makvishan-logo.png"
import '../css/Menubar.css'
const Menubar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>

            <div className="container mt-5">
                <div className="row align-items-center">
                    {/* Logo Section */}
                    <div className="col-6 col-md-5">
                        <Navbar.Brand href="#home">
                            <img
                                src={makvishan_logo}
                                alt="makvishan_logo"
                                style={{ maxWidth: "150px" }} 
                            />
                        </Navbar.Brand>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="col-5 d-md-none text-end">
                        <FaBars
                            size={14}
                            onClick={toggleMenu}
                            style={{ cursor: "pointer" }}
                        />
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`col-12 col-md-7 ${isMenuOpen ? "d-block" : "d-none d-md-block"
                            }`}
                    >
                        <Nav className="me-auto flex-column flex-md-row text-end">
                            <Nav.Link className="navbar-link" href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="navbar-link" href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link className="navbar-link" href="#services">
                                Services
                            </Nav.Link>
                            <Nav.Link className="navbar-link" href="#portfolio">
                                Portfolio
                            </Nav.Link>
                            <Nav.Link className="navbar-link" href="#team">
                                Team
                            </Nav.Link>
                            <Nav.Link className="navbar-link" href="#blog">
                                Blog
                            </Nav.Link>
                            <Button type="submit" className="talk-btn mt-3 mt-md-0">
                                Let’s Talk
                            </Button>
                        </Nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menubar