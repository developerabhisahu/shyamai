import React, { useEffect, useRef } from 'react';
import { FaAirbnb, FaGoogle, FaAmazon, FaMicrosoft, FaUber, FaSpotify, FaSlack, FaApple } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TrustedMarquee = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    const companies = [
        { id: 1, name: 'Airbnb', icon: <FaAirbnb /> },
        { id: 2, name: 'Google', icon: <FaGoogle /> },
        { id: 3, name: 'Amazon', icon: <FaAmazon /> },
        { id: 4, name: 'Microsoft', icon: <FaMicrosoft /> },
        { id: 5, name: 'Uber', icon: <FaUber /> },
        { id: 6, name: 'Spotify', icon: <FaSpotify /> },
        { id: 7, name: 'Slack', icon: <FaSlack /> },
        { id: 8, name: 'Apple', icon: <FaApple /> },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animate);

        const scrollTrigger = ScrollTrigger.create({
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            onUpdate: e => {
                direction = e.direction * -1;
            }
        });

        return () => {
            scrollTrigger.kill();
        }
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }

        if (firstText.current && secondText.current) {
            gsap.set(firstText.current, { xPercent: xPercent })
            gsap.set(secondText.current, { xPercent: xPercent })
        }

        requestAnimationFrame(animate);
        xPercent += 0.05 * direction;
    }

    return (
        <section className="marquee-section">
            <div className="marquee-header-container">
                <h2 className="marquee-header">Trusted by companies of all sizes</h2>
                <div className="marquee-underline"></div>
            </div>

            <div className="marquee-wrapper">
                <div ref={slider} className="marquee-slider-container">
                    <div ref={firstText} className="marquee-content">
                        {companies.map((company) => (
                            <div key={`set1-${company.id}`} className="marquee-item">
                                <span className="company-icon">{company.icon}</span>
                                <span className="company-name">{company.name}</span>
                            </div>
                        ))}
                    </div>
                    <div ref={secondText} className="marquee-content">
                        {companies.map((company) => (
                            <div key={`set2-${company.id}`} className="marquee-item">
                                <span className="company-icon">{company.icon}</span>
                                <span className="company-name">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="marquee-overlay-left"></div>
            <div className="marquee-overlay-right"></div>
        </section>
    );
};

export default TrustedMarquee;
