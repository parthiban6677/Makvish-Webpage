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
            <div className='container-fluid mt-5 bottom-head '>
                <div className='footer-backround '>
                    <div className='row container-footer p-1'>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='makvishan-top'>
                                <img src={makvishanlogo} alt="makvishanlogo" className='mak-logo' />
                                <div className='personl-deteils'>
                                    <ul className='details-container'>

                                        <div className="d-flex align-items-center  mail-headr   ">
                                            <img src={sendmail} alt="sendmail" className="mail-wrapper me-2" />
                                            <li className="wrapper-details m-0">veera@makvishan.com</li>
                                        </div>

                                        <div className="d-flex align-items-center phone-header">
                                            <img src={phone} alt="phone" className="phone-wrapper me-2" />
                                            <li className="wrapper-details m-0">+91 8124161463</li>
                                        </div>
                                        <div className="d-flex align-items-start map-header">
                                            <img src={map} alt="map" className="location-icon me-2" />
                                            <li className="wrapper-detail m-0">
                                                N0 45, VAO Nagar, Sandapet,
                                                Thirukoilur, Tamilnadu-60575
                                            </li>
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
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Services</li>
                                        <li>Terms of Service</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-5 col-lg-2 service-warper '>
                            <div className='mt-5 services-header' >
                                <h4 className='quick-linked'>SERVICES</h4>
                                <div className='service-containers '>
                                    <ul className='container-linked  p-0'>
                                        <li>UI Design</li>
                                        <li>UX Design</li>
                                        <li>Graphic Design</li>
                                        <li>Development</li>
                                        <li>Product Management</li>
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


        </div>
    )
}

export default Footer