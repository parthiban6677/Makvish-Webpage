import React from 'react'
import Menubar from '../component/Menubar'
import '../css/About.css'
import bulb from '../assets/img/bulb.svg'
import adjustments_horizontal from '../assets/img/adjustments_horizontal.svg'
import Quality_icon from '../assets/img/Quality_icon.svg'
import Client_Centric_icon from '../assets/img/Client_Centric_icon.svg'

export const About = () => {
    return (
        <>
            <Menubar></Menubar>

           <section id='about'>

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
                        <div className="card h-100">
                            <div className='bulb-icon'>
                                <img src={bulb} className="card-img-top" alt="bulb" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Innovation</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card h-100">
                            <div className='bulb-icon'>
                                <img src={adjustments_horizontal} alt='adjustments_horizontal' />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card h-100">
                            <div className='bulb-icon'>
                                <img src={Quality_icon} className="card-img-top" alt="Quality_icon" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="card h-100">
                            <div className='bulb-icon'>
                                <div className='bulb-icon'>
                                    <img src={Client_Centric_icon} className="card-img-top" alt="Client_Centric_icon" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

           </section>


        </>
    )
}

export default About


// Client_Centric_icon
//row-cols-1 row-cols-md-3 g-4