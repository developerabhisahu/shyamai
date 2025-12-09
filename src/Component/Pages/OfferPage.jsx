import React, { useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck } from 'react-icons/fa';

const OfferPage = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current.children,
                { y: 100, opacity: 0, rotationX: -15 },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const offers = [
        {
            title: "Startup",
            price: "$999",
            features: ["Custom Website", "Basic SEO", "1 Month Support", "Mobile Responsive", "Contact Form"],
            color: "#00e5ff",
            popular: false
        },
        {
            title: "Business Pro",
            price: "$2499",
            features: ["E-commerce Ready", "Advanced SEO", "3 Months Support", "Speed Optimization", "Analytics Dashboard", "Social Media Integration"],
            color: "#ff00e5",
            popular: true
        },
        {
            title: "Enterprise",
            price: "Custom",
            features: ["Full Custom Solution", "Dedicated Team", "24/7 Support", "Cloud Infrastructure", "Security Audit", "API Integration"],
            color: "#e5ff00",
            popular: false
        }
    ];

    return (
        <div className="page-wrapper" ref={containerRef}>
            <SectionWrapper>
                <div className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Special Offers</h1>
                        <p className="page-subtitle">Choose the perfect package to elevate your business.</p>
                    </div>

                    <div className="offers-grid" ref={cardsRef} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        perspective: '1000px'
                    }}>
                        {offers.map((offer, index) => (
                            <div key={index} className="offer-card" style={{
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                padding: '3rem 2rem',
                                border: `1px solid ${offer.popular ? offer.color : 'rgba(255,255,255,0.1)'}`,
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: offer.popular ? `0 0 30px ${offer.color}40` : 'none'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px -5px rgba(0,0,0,0.3), 0 0 20px ${offer.color}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
                                    e.currentTarget.style.boxShadow = offer.popular ? `0 0 30px ${offer.color}40` : 'none';
                                }}
                            >
                                {offer.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: offer.color,
                                        color: '#000',
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        fontSize: '0.9rem',
                                        boxShadow: `0 5px 15px ${offer.color}50`
                                    }}>
                                        MOST POPULAR
                                    </div>
                                )}

                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>{offer.title}</h2>
                                <div className="price" style={{ fontSize: '3.5rem', fontWeight: '800', color: offer.color, marginBottom: '2rem' }}>
                                    {offer.price}
                                </div>

                                <ul style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                                    {offer.features.map((feature, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                                            <FaCheck style={{ color: offer.color }} /> {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'transparent',
                                    border: `2px solid ${offer.color}`,
                                    color: offer.color,
                                    borderRadius: '50px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = offer.color;
                                        e.currentTarget.style.color = '#000';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = offer.color;
                                    }}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default OfferPage;
