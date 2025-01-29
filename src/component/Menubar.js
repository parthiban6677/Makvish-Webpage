import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import makvishan_logo from "../assets/img/makvishan-logo.png";
import "../css/Menubar.css";

const Menubar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <Navbar expand="lg" className="container mt-3">
                {/* Logo Section */}
                <Navbar.Brand href="#home">
                    <img src={makvishan_logo} alt="Makvishan Logo" className="navbar-logo" />
                </Navbar.Brand>

                {/* Toggle Button (Visible Only on Mobile) */}
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className="custom-toggler d-lg-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                {/* Standard Desktop Navbar (No Changes) */}
                <Navbar.Collapse id="responsive-navbar-nav" className=" d-lg-flex">
                    <Nav className="ms-auto" style={{display:"flex",alignItems:"center"}}>
                        <Nav.Link className="navbar-link" href="#home">Home</Nav.Link>
                        <Nav.Link className="navbar-link" href="#about">About</Nav.Link>
                        <Nav.Link className="navbar-link" href="#services">Services</Nav.Link>
                        <Nav.Link className="navbar-link" href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="navbar-link" href="#team">Team</Nav.Link>
                        <Nav.Link className="navbar-link" href="#blog">Blog</Nav.Link>
                        <Button type="button" className="talk-btn">Let’s Talk</Button>
                    </Nav>
                </Navbar.Collapse>

                {/* Mobile Sliding Menu */}
                <div className={`mobile-menu d-lg-none ${menuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
                    <Nav className="nav-links">
                        <Nav.Link className="navbar-link" href="#home" onClick={() => setMenuOpen(false)}>Home</Nav.Link>
                        <Nav.Link className="navbar-link" href="#about" onClick={() => setMenuOpen(false)}>About</Nav.Link>
                        <Nav.Link className="navbar-link" href="#services" onClick={() => setMenuOpen(false)}>Services</Nav.Link>
                        <Nav.Link className="navbar-link" href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Nav.Link>
                        <Nav.Link className="navbar-link" href="#team" onClick={() => setMenuOpen(false)}>Team</Nav.Link>
                        <Nav.Link className="navbar-link" href="#blog" onClick={() => setMenuOpen(false)}>Blog</Nav.Link>
                        <Button type="button" className="talk-btn">Let’s Talk</Button>
                    </Nav>
                </div>
            </Navbar>
        </header>
    );
};

export default Menubar;
