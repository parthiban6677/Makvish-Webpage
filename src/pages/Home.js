import React from 'react'
import Menubar from '../component/Menubar'
import '../css/Home.css'
import bulb from '../assets/img/bulb.svg'
import adjustments_horizontal from '../assets/img/adjustments_horizontal.svg'
import Quality_icon from '../assets/img/Quality_icon.svg'
import Client_Centric_icon from '../assets/img/Client_Centric_icon.svg'
import { Tab, Tabs, Carousel, Button } from 'react-bootstrap'

import Portfolio_img_01 from '../assets/img/Portfolio_img_01.png'
import Portfolio_img_02 from '../assets/img/Portfolio_img_02.png'
import Portfolio_img_03 from '../assets/img/Portfolio_img_03.png'
import Portfolio_img_04 from '../assets/img/Portfolio_img_04.png'
import Portfolio_img_05 from '../assets/img/Portfolio_img_05.png'
import see_more_icon from '../assets/img/see_more_icon.png'
import team_img_01 from '../assets/img/team_img_01.png'
import team_img_02 from '../assets/img/team_img_02.png'



export const About = () => {
    return (
        <>
            <Menubar></Menubar>

            <section id='about' >

                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <div>
                                <h3 className='about-title'>ABOUT US</h3>
                                <h1> <span className='about-sub-title'>The</span> <span className='about-story'>Story</span> <span className='about-sub-title'>Behind</span> <span className='about-story'>Our Success</span></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-7'>
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
                        <div className="col-12 col-md-3">
                            <div className=" card about-card ">
                                <div className='bulb-icon'>
                                    <img src={bulb} alt="bulb" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Innovation</h5>
                                    <p className="card-text">We thrive on innovation, constantly exploring emerging technologies and trends to provide you with the most advanced solutions.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card about-card">
                                <div className='bulb-icon'>
                                    <img src={adjustments_horizontal} alt='adjustments_horizontal' />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Customization</h5>
                                    <p className="card-text">We understand that every client is unique, which is why we tailor our software to your specific needs and goals.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-3">
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

                        <div className="col-12 col-md-3">
                            <div className="card about-card">
                                <div className='bulb-icon'>
                                    <img src={Client_Centric_icon} className="card-img-top" alt="Client_Centric_icon" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Client-Centric</h5>
                                    <p className="card-text">Your success is our success. We prioritize your needs, always striving to exceed your expectations.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>


            <section id='portfolio'>

                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <div>
                                <h3 className='about-title'>PORTFOLIO</h3>
                                <h1> <span className='about-sub-title'>Turning</span> <span className='about-story'>Ideas</span> <span className='about-sub-title'>into</span> <span className='about-story'>Reality</span></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-7'>
                            <div className='about-desc'>
                                <p>
                                    Explore the projects that define our journey of innovation and excellence. Each solution reflects our commitment to quality, creativity, and client success. From mobile apps to web platforms, our portfolio showcases the diverse and impactful work we’ve delivered to businesses across industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" container tab-header mt-5">
                    <Carousel indicators={false} controls={false} autoplay={true}>
                        <Carousel.Item>
                            <Tabs defaultActiveKey="1" id="tab-example">
                                <Tab eventKey="1" title="All" className='mt-4'>
                                    <div className='row'>
                                        <div className='Col-12 col-md-4'>
                                            <div>
                                                <img src={Portfolio_img_01} alt='...' className='protfolio-img' />
                                            </div>
                                        </div>
                                        <div className='Col-12 col-md-4'>
                                            <div>
                                                <img src={Portfolio_img_02} alt='...' className='protfolio-img' />
                                            </div>
                                        </div>
                                        <div className='Col-12 col-md-4'>
                                            <div>
                                                <img src={Portfolio_img_03} alt='...' className='protfolio-img' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mt-4'>
                                        <div className='Col-12 col-md-4'>
                                            <div>
                                                <img src={Portfolio_img_04} alt='...' className='protfolio-img' />
                                            </div>
                                        </div>
                                        <div className='Col-12 col-md-4'>
                                            <div>
                                                <img src={Portfolio_img_05} alt='...' className='protfolio-img' />
                                            </div>
                                        </div>
                                        <div className='Col-12 col-md-4'>
                                            <div>
                                                <img src={Portfolio_img_01} alt='...' className='protfolio-img' />
                                            </div>
                                        </div>
                                    </div>

                                </Tab>

                                <Tab eventKey="2" title="Branding">
                                    Content for Bar Graph
                                </Tab>

                                <Tab eventKey="3" title="Mobile App">
                                    Content for Bubble Map
                                </Tab>

                                <Tab eventKey="4" title="Web App">
                                    Content for Comparison Chart
                                </Tab>

                                <Tab eventKey="5" title="Website">
                                    Content for Concept Map
                                </Tab>
                            </Tabs>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className='mt-4 text-center'>
                    <h1 className='see-more'>See More</h1>
                    <img src={see_more_icon} alt='See More Icon' className="mx-auto d-block" />
                </div>

            </section>

            <section id='team'>

                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <div>
                                <h3 className='about-title'>TEAM</h3>
                                <h1> <span className='about-sub-title'>The</span> <span className='about-story'>Minds</span> <span className='about-sub-title'>Behind</span> <span className='about-story'>Our Mission</span></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-7'>
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
                        <div className='col-12 col-md-3'>
                            <div>
                                <div className='team-img'>
                                    <img src={team_img_01} alt='' />
                                </div>
                                <div className='teams-name'>
                                    <h3>Indumathi</h3>
                                    <p>FOUNDER</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                <div className='team-img'>
                                    <img src={team_img_01} alt='' />
                                </div>
                                <div className='teams-name'>
                                    <h3>Veeramani</h3>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                <div className='team-img'>
                                    <img src={team_img_02} alt='' />
                                </div>
                                <div className='teams-name'>
                                    <h3>Suthakar</h3>
                                    <p>ACCOUNT HEAD</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                <div className='team-img'>
                                    <img src={team_img_02} alt='' />
                                </div>
                                <div className='teams-name'>
                                    <h3>Suthakar</h3>
                                    <p>ACCOUNT HEAD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section id='blog'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <div>
                                <h3 className='about-title'>CONTACT US</h3>
                                <h1> <span className='about-story'>Let’s Build</span> <span className='about-sub-title'>Something Great</span> <span className='about-story'>Together</span></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-7'>
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
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <div className='about-desc'>
                                <p>
                                    We’re interested in <br /> Working together
                                </p>
                                <h1 className='see-more'>+91 8124161463</h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-2'>
                            <div className='about-desc'>
                                <p>
                                    Having a project in mind? Send a message to
                                </p>
                                <h1 className='see-more'>veera@makvishan.com</h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <form action="/submit" method="POST">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="first-name" name="first-name" placeholder='First Name' required />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" id="last-name" name="last-name" placeholder='Last Name' required />
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" name="email" placeholder='Your Mail ID' required />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" id="message" name="message" placeholder='Your Message…' rows="4" required></textarea>
                                </div>

                                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>

            </section>



            <div>
                <h1>skmksdjmksjdk</h1>
            </div>


        </>
    )
}

export default About


// Client_Centric_icon
//row-cols-1 row-cols-md-3 g-4