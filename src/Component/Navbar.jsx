import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FiAlignRight, FiX } from "react-icons/fi";
import { FaTwitter, FaWhatsapp, FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const menuRef = useRef(null);
    const tl = useRef();

    const toggleMenu = () => {
        setOpen(prev => !prev);
    };

    const closeMenu = () => {
        setOpen(false);
        setActiveDropdown(null);
    };

    const handleMouseEnter = (name) => {
        if (window.innerWidth > 768) {
            setActiveDropdown(name);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (name) => {
        setActiveDropdown(prev => prev === name ? null : name);
    };


    // GSAP Animation for Mobile Menu
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (open) {
                // Menu Slide In (Managed by CSS class, but we can enhance items)
                // We mainly stagger the list items
                gsap.fromTo('.nav-links > li',
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power3.out" }
                );
            }
        }, menuRef);

        return () => ctx.revert();
    }, [open]);

    return (
        <nav ref={menuRef}>
            <div className="logo">
                <h1>ShyamAI Tech Solutions</h1>
                <button
                    className="hamburger"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="main-navigation"
                    onClick={toggleMenu}
                    type="button"
                >
                    {open ? <FiX size={28} /> : <FiAlignRight size={28} />}
                </button>
            </div>

            {/* Main Navigation */}
            <ul id="main-navigation" className={`nav-links ${open ? 'active' : ''}`}>
                <li onMouseEnter={() => handleMouseEnter(null)}><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li onMouseEnter={() => handleMouseEnter(null)}><Link to="/services" onClick={closeMenu}>Services</Link></li>

                <li
                    className={`has-dropdown ${activeDropdown === 'resources' ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter('resources')}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="drop-btn"
                        aria-expanded={activeDropdown === 'resources'}
                        onClick={() => toggleDropdown('resources')}
                    >
                        Resources
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/offer" onClick={closeMenu}>Offer</Link>
                        <Link to="/blog" onClick={closeMenu}>Blog</Link>
                        <Link to="/all-portfolios" onClick={closeMenu}>Portfolio</Link>
                    </div>
                </li>

                <li
                    className={`has-dropdown ${activeDropdown === 'company' ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter('company')}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="drop-btn"
                        aria-expanded={activeDropdown === 'company'}
                        onClick={() => toggleDropdown('company')}
                    >
                        Company
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/about-us" onClick={closeMenu}>About us</Link>
                        <Link to="/our-team" onClick={closeMenu}>Our Team</Link>
                        <Link to="/recognition" onClick={closeMenu}>Recognition</Link>
                    </div>
                </li>

                <li onMouseEnter={() => handleMouseEnter(null)}><Link to="/contact-us" onClick={closeMenu}>Contact us</Link></li>
            </ul>

            {/* Social Links - Separate from main nav to avoid mobile menu conflict */}
            <div className="nav-right">
                <ul className="social-links">
                    <li
                        className={`has-dropdown ${activeDropdown === 'socials' ? 'active' : ''}`}
                        onMouseEnter={() => handleMouseEnter('socials')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className="drop-btn"
                            aria-expanded={activeDropdown === 'socials'}
                        // onClick={() => toggleDropdown('socials')} // Usually hover only on desktop, but consistent behavior is good
                        >
                            Socials
                        </button>
                        <div className="dropdown-menu">
                            <a href="#" onClick={closeMenu}> <FaTwitter className='icon' /> Twitter</a>
                            <a href="#" onClick={closeMenu}> <FaWhatsapp className='icon' /> Whatsapp</a>
                            <a href="#" onClick={closeMenu}> <FaFacebook className='icon' /> Facebook</a>
                            <a href="#" onClick={closeMenu}> <FaGithub className='icon' /> Github</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
