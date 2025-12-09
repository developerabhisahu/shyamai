import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Glitch Animation Loop
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

            tl.to('.glitch-text', {
                skewX: 20,
                x: -5,
                duration: 0.1,
                ease: "power4.inOut"
            })
                .to('.glitch-text', {
                    skewX: -20,
                    x: 5,
                    duration: 0.1,
                    ease: "power4.inOut"
                })
                .to('.glitch-text', {
                    skewX: 0,
                    x: 0,
                    duration: 0.1,
                    ease: "power4.inOut"
                });

            // Random Floating Elements
            gsap.to('.float-element', {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                rotation: "random(-15, 15)",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="not-found-container">
            <div className="noise-overlay"></div>

            <div className="error-content">
                <div className="error-code-wrapper">
                    <h1 className="error-code glitch-text" data-text="404">404</h1>
                </div>

                <div className="error-message">
                    <FaExclamationTriangle className="warning-icon float-element" />
                    <h2 className="gradient-text">SYSTEM FAILURE</h2>
                    <p>The page you are looking for has been lost in the digital void.</p>
                </div>

                <Link to="/" className="btn btn-primary magnetic-btn" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <FaHome /> RETURN TO BASE
                </Link>
            </div>

            {/* Decorative Tech Elements */}
            <div className="tech-decoration top-left float-element">ERROR_404_NOT_FOUND</div>
            <div className="tech-decoration bottom-right float-element">PROTOCOL_MISSING</div>
        </div>
    );
};

export default NotFoundPage;
