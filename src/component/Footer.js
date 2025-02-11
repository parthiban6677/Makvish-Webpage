import React from 'react'
import '../css/Footer.css'
import makvishanlogo from '../assets/img/Colored Logo with Text@2x.png'
import sendmail from '../assets/img/mail.png'
import phone from '../assets/img/phone.png'
import map from '../assets/img/map-pin.png'
import arrow from '../assets/img/arrow-right.png'


function Footer() {
    return (
        <div>
            {/* <Footer Section 7> */}
            <section>
                {/* <Footer Section 7> */}
                <div className='container-fluid mt-5 bottom-head '>
                    <div className='footer-backround p-1 '>
                        <div className='row container-footer '>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div className='makvishan-top'>
                                    <img src={makvishanlogo} alt="makvishanlogo" className='mak-logo' />
                                    <div className='personl-deteils'>
                                        <ul className='details-container'>

                                            <div className="d-flex align-items-center  mail-headr   ">
                                                <img src={sendmail} alt="sendmail" className="mail-wrapper me-2" />
                                                <a href='mailto:veera@makvishan.com' className='link-list'><li className="wrapper-details m-0">veera@makvishan.com</li></a>

                                            </div>

                                            <div className="d-flex align-items-center phone-header">
                                                <img src={phone} alt="phone" className="phone-wrapper me-2" />
                                                <a href='tel:+918124161463' className='link-list'><li className="wrapper-details m-0">+91 8124161463</li></a>
                                            </div>
                                            <div className="d-flex align-items-start map-header">
                                                <img src={map} alt="map" className="location-icon me-2" />
                                                <a href='https://www.google.com/maps/search/?api=1&query=N0+45,+VAO+Nagar,+Sandapet,+Thirukoilur,+Tamilnadu-60575' className='link-list'><li className="wrapper-detail m-0">
                                                    N0 45, VAO Nagar, Sandapet, <br />
                                                    Thirukoilur, Tamilnadu-60575
                                                </li></a>
                                            </div>



                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-6 col-lg-2   quick-container'>
                                <div className=' quick-header ' >
                                    <h4 className='quick-link'>QUICK LINKS</h4>
                                    <div className='mt-4 ' >
                                        <ul className='container-links p-0'>
                                            <a href='#home' className='link-list'><li>Home</li></a>
                                            <a href='#about' className='link-list'><li>About Us</li></a>
                                            <a href='#services' className='link-list'><li>Services</li></a>
                                            <a href='#portfolio' className='link-list'><li>Portfolio</li></a>
                                            <a href='#team' className='link-list'><li>Team</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-5 col-lg-2 service-warper '>
                                <div className='mt-5 services-header' >
                                    <h4 className='quick-linked'>SERVICES</h4>
                                    <div className='service-containers '>
                                        <ul className='container-linked  p-0'>
                                            <li><a href="#ux-design" className='link-list'>UX Design</a></li>
                                            <li><a href="#ui-design" className='link-list'>UI Design</a></li>
                                            <li><a href="#web-development" className='link-list'>Web Development</a></li>
                                            <li><a href="#digital-marketing" className='link-list'>Digital Marketing</a></li>
                                            <li><a href="#content-creation" className='link-list'>Content Creation</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className='col-12 col-md-6 col-lg-4 join-letter'>
                                <div className='ournews-contaniner'>
                                    <div>
                                        <h4 className='letter' >JOIN OUR NEWSLETTER</h4>
                                    </div>
                                    <div className='contant-warper'>
                                        <p>Subscribe our newsletter to get the latest news and <br />  Updates</p>
                                    </div>

                                    <div className="lapel-container">
                                        <input className="lapel-warper" type="text" placeholder="Your Email" />
                                        <img src={arrow} alt="arrow" className="input-icon" />
                                    </div>
                                </div>

                            </div>

                            <div class="footer-container">
                                <hr class="row-line" />
                                <div class="c-footer  ">
                                    <h5 class="copyrights ">Copyrights © 2025 . All Rights Reserved.</h5>
                                    <h5 class="mak-tech ">Powered by Makvishan Technology</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Footer