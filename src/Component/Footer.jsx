import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Footer Columns
            gsap.from('.footer-col', {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // Animate Bottom Bar
            gsap.from('.footer-bottom', {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'bottom 95%',
                },
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power2.out'
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="footer-section">
            <div className="footer-overlay"></div>
            <div className="footer-container">

                {/* Newsletter Section */}
                <div className="footer-newsletter">
                    <div className="newsletter-content">
                        <h3>Subscribe to our Newsletter</h3>
                        <p>Stay updated with the latest trends and offers.</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn-subscribe">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>

                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <h2 className="footer-logo">ShyamAI Tech Solutions</h2>
                        <p className="brand-desc">
                            Transforming ideas into digital reality. We build scalable, secure, and high-performance web solutions for your business growth.
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-link"><FaFacebookF /></a>
                            <a href="#" className="social-link"><FaTwitter /></a>
                            <a href="#" className="social-link"><FaInstagram /></a>
                            <a href="#" className="social-link"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">Web Development</Link></li>
                            <li><Link to="/services">App Development</Link></li>
                            <li><Link to="/services">UI/UX Design</Link></li>
                            <li><Link to="/services">Digital Marketing</Link></li>
                            <li><Link to="/services">SEO Optimization</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/all-portfolios">Portfolio</Link></li>
                            <li><Link to="/our-team">Our Team</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-col contact-col">
                        <h4>Contact Info</h4>
                        <ul className="contact-list">
                            <li>
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Bhiwadi, Rajasthan</span>
                            </li>
                            <li>
                                <FaPhoneAlt className="contact-icon" />
                                <span>+91 7597675365</span>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>shyamaitechsolution@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ShyamAI Tech Solutions. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
