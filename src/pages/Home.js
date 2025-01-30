import React, { useState } from "react"
import Footer from '../component/Footer';
import Menubar from '../component/Menubar'
import '../css/Home.css'
import '../css/aboutes.css';
import Quality_icon from '../assets/img/Quality_icon.svg'
import { Tab, Tabs, Carousel, } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';
import bulb from '../assets/img/bulb.svg'
import adjustments_horizontal from '../assets/img/adjustments_horizontal.svg'
import Client_Centric_icon from '../assets/img/Client_Centric_icon.svg'



// import back from "../assets/img/contact-back-img copy.png"
import Portfolio_img_01 from '../assets/img/Portfolio_img_01.png'
import Portfolio_img_02 from '../assets/img/Portfolio_img_02.png'
import Portfolio_img_03 from '../assets/img/Portfolio_img_03.png'
import Portfolio_img_04 from '../assets/img/Portfolio_img_04.png'
import Portfolio_img_05 from '../assets/img/Portfolio_img_05.png'
import see_more_icon from '../assets/img/see_more_icon.png'
import team_img_01 from '../assets/img/team_img_01.png'
import team_img_02 from '../assets/img/team_img_02.png'
import lineblack from '../assets/img/Group 22410@2x.png'

import home01 from "../assets/img/home-01.png"
import home02 from '../assets/img/home-02.png'
import home03 from '../assets/img/home-03.png'
import home04 from '../assets/img/home-04.png'
import home05 from '../assets/img/home-05.png'
import home06 from '../assets/img/home-06.png'
import home07 from '../assets/img/home-07.png'
import home08 from '../assets/img/home-08.png'


import { IconBulb } from '@tabler/icons-react';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { IconUserScan } from '@tabler/icons-react';



 const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    };

    const [openKey, setOpenKey] = useState(null);

    const toggleAccordion = (key) => {
        setOpenKey(openKey === key ? null : key);
    };

    return (
        <div>

            <Menubar></Menubar>
           

            <section id="home">
                <div className="container ">
                    <div className="hero-section">
                        <div className="hero-title">
                            <h1>
                                <span className="home-title">Elevate</span>
                                <span className="about-sub-title"> Your Business <br /> with </span>
                                <span className="about-story"> Cutting Edge <br /> Software Solutions </span>
                            </h1>
                            <p className="about-desc">
                                We are more than just a software company. We leverage technology to drive
                                <br />
                                innovation, growth, and success.
                            </p>
                        </div>
                        <div className="hero-images">
                            <div className="hero-img-01">
                                <img src={home01} alt="home01" />
                            </div>
                            <div className="hero-img-02">
                                <img src={home02} alt="home02" />
                            </div>
                            <div className="hero-img-03">
                                <img src={home03} alt="home03" />
                            </div>
                            <div className="hero-img-04">
                                <img src={home04} alt="home04" />
                            </div>
                            <div className="hero-img-05">
                                <img src={home05} alt="home05" />
                            </div>
                            <div className="hero-img-06">
                                <img src={home06} alt="home06" />
                            </div>
                            <div className="hero-img-07">
                                <img src={home07} alt="home07" />
                            </div>
                            <div className="hero-img-08">
                                <img src={home08} alt="home08" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <section className="back-img"> */}

            <section id='about' >
                <div className="about-section">
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div>
                                    <h6 className='about-title'>ABOUT US</h6>
                                    <h1> <span className='about-sub-title'>The</span> <span className='about-story'>Story</span> <span className='about-sub-title'>Behind <br /> </span> <span className='about-story'>Our Success</span></h1>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='about-desc'>
                                    <p>
                                        Our mission is clear: to empower businesses, organizations, and individuals with software solutions that make a difference. We believe in harnessing the power of technology to solve complex problems, streamline operations, and create exceptional user experiences.
                                    </p>
                                    <p>
                                        Founded in 2023, MAKVISHAN has been at the forefront of the software industry. Delivering innovative and reliable solutions to clients across diverse sectors. Our team of highly skilled professionals brings a wealth of experience, creativity, and technical expertise to every project, ensuring that we meet and exceed your expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-5'>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                                <div className=" card about-card ">
                                    <div className='bulb-icon'>
                                        <img src={bulb} alt="bulb" />
                                        {/* <IconBulb stroke={2} /> */}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Innovation</h5>
                                        <p className="card-text">We thrive on innovation, constantly exploring emerging technologies and trends to provide you with the most advanced solutions.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                                <div className="card about-card">
                                    <div className='horizontal-icon'>
                                        <img src={adjustments_horizontal} alt='adjustments_horizontal' />
                                        {/* <IconAdjustmentsHorizontal stroke={2} /> */}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Customization</h5>
                                        <p className="card-text">We understand that every client is unique, which is why we tailor our software to your specific needs and goals.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                                <div className="card about-card">
                                    <div className='bulb-icon'>
                                        <img src={Quality_icon} className="card-img-top" alt="Quality_icon" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Quality</h5>
                                        <p className="card-text">Quality is the cornerstone of everything we do. We rigorously test and refine our products to ensure they meet the highest industry standards.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                                <div className="card about-card">
                                    <div className='bulb-icon'>
                                        <img src={Client_Centric_icon} className="card-img-top" alt="Client_Centric_icon" />
                                        {/* <IconUserScan stroke={2} /> */}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Client-Centric</h5>
                                        <p className="card-text">Your success is our success. We prioritize your needs, always striving to exceed your expectations.</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* <About us Section 3> */}
            <section className="back-img">
                <section id="services">
                    <   div className="container-fluid mt-5">   
                        <div className="aboutus-backround">
                            <div className="row">
                                <div className="col-12 col-md-4  aboutus-top">
                                    <div className="aboutus-warper">
                                        <h5 className="aboutus">ABOUT US</h5>
                                        <div className="mt-3">
                                            <h2 className="header-conatiner">
                                                <span className="what-warper">What</span><span className="bring-container">We Bring</span>
                                            </h2>
                                            <h2 className="header-table">to the Table</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 paragraph-left">
                                    <p className="paragraph-head">
                                        Our services are designed to empower your business with innovative and tailored solutions. With a focus on
                                        quality and expertise, we ensure every project delivers value, drives growth, and exceeds expectations. Discover how we can help bring your vision to life.
                                    </p>
                                    <div className="mt-4  line-container">
                                        <div className="d-flex align-items-center gap-3">
                                            <img className="line-blue" src={lineblack} alt="line-icon" />
                                            <p className="paragraph m-0">
                                                <span className="paragraph-aboutes">Tailored Solutions </span>: Custom strategies designed to meet your unique business needs
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center mt-3 gap-3">
                                            <img className="line-blue" src={lineblack} alt="line-icon" />
                                            <p className="paragraph m-0">
                                                <span className="paragraph-aboutes">Expert Execution </span>: Delivered by a skilled team with a passion for excellence
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center mt-3 gap-3">
                                            <img className="line-blue" src={lineblack} alt="line-icon" />
                                            <p className="paragraph m-0">
                                                <span className="paragraph-aboutes">Impact-Driven Results </span>: Focused on creating measurable value and success
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dash-top">
                                <hr className="dash-row" />
                            </div>
                            <div >
                                <Accordion className="custom-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header
                                            onClick={() => toggleAccordion(0)}
                                            className="custom-header"
                                        >
                                            <div className="d-flex justify-content-between w-100">
                                                <span className="accordion-title">UX DESIGN</span>
                                                <span className="icon">{openKey === 0 ? "−" : "+"}</span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="warper-header">
                                                <div className="col-12 col-md-6">
                                                    <p className="paragraph-ux">
                                                        We craft user experiences that connect with your audience on a
                                                        deeper level. By combining user research, wireframing, and
                                                        prototyping, we ensure every interaction is seamless and
                                                        intuitive. Our goal is to create experiences that delight users
                                                        and drive results. Let us turn your vision into a user-centered
                                                        masterpiece.
                                                    </p>
                                                </div>
                                                    <div className="col-12 col-md-5 header-list ">
                                                    <div className="orderlist-head">
                                                        <ul className="list-container">
                                                            <li>User Research </li>
                                                            <li>Persona Development </li>
                                                            <li>User Journey Mapping </li>
                                                            <li>AI Wireframing</li>
                                                            <li>Wireframing</li>
                                                        </ul>
                                                       </div>
                                                    </div>

                                            
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <div className='dash-heads'>
                                        <hr className="dash-lines" />
                                    </div>
                                    {/* UI Design */}
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header
                                            onClick={() => toggleAccordion(1)}
                                            className="custom-header"
                                        >
                                            <div className="d-flex justify-content-between w-100">
                                                <span className="accordion-title">UI DESIGN</span>
                                                <span className="icon">{openKey === 1 ? "−" : "+"}</span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Our UI design focuses on aesthetics and functionality. We create
                                                visually stunning interfaces that align with your brand identity
                                                and engage users effectively. Every color, font, and layout is
                                                carefully chosen to enhance usability and deliver a consistent
                                                design language.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <div className='dash-heads'>
                                        <hr className="dash-lines" />
                                    </div>
                                    {/* Web Development */}
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header
                                            onClick={() => toggleAccordion(2)}
                                            className="custom-header"
                                        >
                                            <div className="d-flex justify-content-between w-100">
                                                <span className="accordion-title">WEB DEVELOPMENT</span>
                                                <span className="icon">{openKey === 2 ? "−" : "+"}</span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-container">
                                                <li>Frontend Development</li>
                                                <li>Backend Development</li>
                                                <li>API Integration</li>
                                                <li>Responsive Design</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <div className='dash-heads'>
                                        <hr className="dash-lines" />
                                    </div>
                                    {/* Digital Marketing */}
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header
                                            onClick={() => toggleAccordion(3)}
                                            className="custom-header"
                                        >
                                            <div className="d-flex justify-content-between w-100">
                                                <span className="accordion-title">DIGITAL MARKETING</span>
                                                <span className="icon">{openKey === 3 ? "−" : "+"}</span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>

                                            <ul className="list-container">
                                                <li>SEO Optimization</li>
                                                <li>Content Marketing</li>
                                                <li>Social Media Management</li>
                                                <li>Pay-Per-Click Campaigns</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <div className='dash-heads'>
                                        <hr className="dash-lines" />
                                    </div>
                                    {/* Content Creation */}
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header
                                            onClick={() => toggleAccordion(4)}
                                            className="custom-header"
                                        >
                                            <div className="d-flex justify-content-between w-100">
                                                <span className="accordion-title">CONTENT CREATION</span>
                                                <span className="icon">{openKey === 4 ? "−" : "+"}</span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-container">
                                                <li>Blog Writing</li>
                                                <li>Copywriting</li>
                                                <li>Video Scriptwriting</li>
                                                <li>Infographics</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>


                    
                    </div>
                </section>

                <section id='portfolio'>
                    <div className='container mt-5 '>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div>
                                    <h3 className='about-title'>PORTFOLIO</h3>
                                    <h1> <span className='about-sub-title'>Turning</span> <span className='about-story'>Ideas</span> <span className='about-sub-title'>into</span> <br /> <span className='about-story'>Reality</span></h1>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='about-desc'>
                                    <p>
                                        Explore the projects that define our journey of innovation and excellence. Each solution reflects our commitment to quality, creativity, and client success. From mobile apps to web platforms, our portfolio showcases the diverse and impactful work we’ve delivered to businesses across industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" container tab-header mt-5">
                        {/* <Carousel indicators={false} controls={false} autoplay={true}> */}
                            {/* <Carousel.Item> */}
                                {/* <Tabs defaultActiveKey="1" id="tab-example" className='tab-content'> */}
                                    {/* <Tab eventKey="1"  className='mt-4'> */}
                                        <div className='row'>
                                            <div className='Col-12 col-md-4'>
                                                <div>
                                                    <img src={Portfolio_img_01} alt='...' className='portfolio-img' />
                                                </div>
                                            </div>
                                            <div className='Col-12 col-md-4'>
                                                <div>
                                                    <img src={Portfolio_img_02} alt='...' className='portfolio-img' />
                                                </div>
                                            </div>
                                            <div className='Col-12 col-md-4'>
                                                <div>
                                                    <img src={Portfolio_img_03} alt='...' className='portfolio-img' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row portfolio-row-img'>
                                            <div className='Col-12 col-md-4'>
                                                <div>
                                                    <img src={Portfolio_img_04} alt='...' className='portfolio-img' />
                                                </div>
                                            </div>
                                            <div className='Col-12 col-md-4'>
                                                <div>
                                                    <img src={Portfolio_img_05} alt='...' className='portfolio-img' />
                                                </div>
                                            </div>
                                            <div className='Col-12 col-md-4'>
                                                <div>
                                                    <img src={Portfolio_img_01} alt='...' className='portfolio-img' />
                                                </div>
                                            </div>
                                        </div>

                                    {/* </Tab> */}


                                {/* </Tabs> */}
                            {/* </Carousel.Item> */}
                        {/* </Carousel> */}
                    </div>

                    <div className='m-4 text-center'>
                        <h1 className='see-more'>See More</h1>

                        <a href="#team" >
                            <img src={see_more_icon} alt="See More Icon" className="mx-auto d-block" />
                        </a>

                    </div>

                </section>

                <section id='team'>

                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div>
                                    <h3 className='about-title'>TEAM</h3>
                                    <h1> <span className='about-sub-title'>The</span> <span className='about-story'>Minds</span> <span className='about-sub-title'>Behind <br /> </span> <span className='about-story'>Our Mission</span></h1>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='about-desc'>
                                    <p>
                                        Meet the leadership team that drives our vision forward. Their strategic thinking and industry expertise lay the foundation for our innovation and success. With a focus on excellence, they guide our efforts to create impactful solutions. Committed to growth and collaboration, they inspire us to achieve more every day. Together, they shape the future of our organization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-12  col-md-6 col-lg-3'>
                                <div className="team-hero">
                                    <div>
                                        <img className="team-img" src={team_img_01} alt='' />
                                    </div>
                                    <div className='team-content'>
                                        <h3 className='teams-name'>Indumathi</h3>
                                        <p className='team-desc'>FOUNDER</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div>
                                    <div>
                                        <img className="team-img" src={team_img_01} alt='' />
                                    </div>
                                    <div className='team-content'>
                                        <h3 className='teams-name'>Veeramani</h3>
                                        <p className='team-desc'>CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div>
                                    <div>
                                        <img className="team-img" src={team_img_02} alt='' />
                                    </div>
                                    <div className='team-content'>
                                        <h3 className='teams-name'>Suthakar</h3>
                                        <p className='team-desc'>ACCOUNT HEAD</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div>
                                    <div>
                                        <img className="team-img" src={team_img_02} alt='' />
                                    </div>
                                    <div className='team-content'>
                                        <h3 className='teams-name'>Suthakar</h3>
                                        <p className='team-desc'>ACCOUNT HEAD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                  <section id='blog'>
                
                    <div className='container mt-5 team-section'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div>
                                    <h3 className='about-title'>CONTACT US</h3>
                                    <h1> <span className='about-story'>Let’s Build</span> <span className='about-sub-title'>Something <br /> Great</span> <span className='about-story'>Together</span></h1>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='about-desc'>
                                    <p>
                                        We’re always happy to connect! Whether you have a question, need support, or simply want to share feedback, our team is here to assist you. Reach out to us via the form below, and we’ll get back to you as quickly as possible. Let’s start a conversation!
                                    </p>
                                    <p>
                                        We’re committed to providing you with the best possible experience. Let’s start a conversation!
                                    </p>
                                </div>
                            </div>
                        </div>
                     
                        <div className='row mt-5'>
                            <div className='col-12 col-md-3'>
                                <div>
                                    <p className='contact-desc'>
                                        We’re interested in <br /> Working together
                                    </p>
                                    <h1 className='see-more'>+91 8124161463</h1>
                                </div>
                            </div>
                            <div className='col-12 col-md-3'>
                                <div>
                                    <p className='contact-desc'>
                                        Having a project in mind? <br /> Send a message to
                                    </p>
                                    <h1 className='see-more'>veera@makvishan.com</h1>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <form action="/submit" method="POST">
                                    <div className='row'>
                                        <div className='col'>
                                            <div className="form-group ">
                                                <input type="text" className="form-control form-content" id="first-name" name="first-name" placeholder='First Name' required />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-content" id="last-name" name="last-name" placeholder='Last Name' required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mt-3">
                                        <input type="email" className="form-control form-mail" id="email" name="email" placeholder='Your Mail ID' required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <textarea className="form-control form-message" id="message" name="message" placeholder='Your Message…' rows="4" required></textarea>
                                    </div>

                                    <div className='mt-4'>
                                        <button type="submit" className="btn btn-primary form-talk-btn">Let’s Talk</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
              
                </section> 
         

            <Footer />
            </section>
            </div>
    )
}

export default About


