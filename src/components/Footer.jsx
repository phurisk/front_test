import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="row">
                        {/* footer-widget */}
                        <div className="col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Get Our Application</div>
                                <div className="footer-widget-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                                    <div className="api-links-wrap">
                                        <a href="#" className="footer-widget-content-link"><span> On Apple Store</span><i className="fa-brands fa-apple"></i></a>
                                        <a href="#" className="footer-widget-content-link"><span> On Google PLay</span><i className="fa-brands fa-google-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget end */}
                        {/* footer-widget */}
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Helpful links</div>
                                <div className="footer-widget-content">
                                    <div className="footer-list footer-box">
                                        <ul>
                                            <li><a href="#">Our last News</a></li>
                                            <li><a href="#">Pricing Plans</a></li>
                                            <li><a href="#">Contacts</a></li>
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget end */}
                        {/* footer-widget */}
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Our Contacts</div>
                                <div className="footer-widget-content">
                                    <div className="footer-list footer-box">
                                        <ul className="footer-contacts">
                                            <li><span>Mail :</span><a href="#" target="_blank">yourmail@domain.com</a></li>
                                            <li><span>Adress :</span><a href="#" target="_blank">USA 27TH Brooklyn NY</a></li>
                                            <li><span>Phone :</span><a href="#">+2(111)123456789</a></li>
                                        </ul>
                                        <a href="contacts.html" className="footer-widget-content-link"><span>Get in Touch</span><i className="fa-solid fa-caret-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget end */}
                        {/* footer-widget */}
                        <div className="col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Subscribe</div>
                                <div className="footer-widget-content">
                                    <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                                    <form id="subscribe" className="subscribe-item" noValidate>
                                        <input className="enteremail" name="EMAIL" id="subscribe-email" placeholder="Your Email" spellCheck="false" type="text" />
                                        <button type="submit" id="subscribe-button" className="subscribe-button"><span>Send</span></button>
                                        <label htmlFor="subscribe-email" className="subscribe-message"></label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget end */}
                    </div>
                    {/* footer-widget-wrap end */}
                </div>
                <div className="footer-bottom">
                    <a href="index.html" className="footer-home_link"><i className="fa-regular fa-house"></i></a>
                    <div className="copyright"> <span>©Renstate 2024</span> . All rights reserved. </div>
                    <div className="footer-social">
                        <span className="footer-social-title">Follow Us</span>
                        <div className="footer-social-wrap color-white">
                            <a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                            <a href="#" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
