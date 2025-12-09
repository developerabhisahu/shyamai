import React, { useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTrophy, FaAward, FaStar } from 'react-icons/fa';

const RecognitionPage = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current.children,
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const awards = [
        {
            icon: <FaTrophy />,
            title: "Best Tech Startup 2023",
            desc: "Awarded by TechCrunch for innovation and growth.",
            color: "linear-gradient(135deg, #FFD700, #FFA500)",
            glow: "rgba(255, 215, 0, 0.3)"
        },
        {
            icon: <FaAward />,
            title: "Top Web Agency",
            desc: "Recognized as a top-tier web development agency by Clutch.",
            color: "linear-gradient(135deg, #00C6FF, #0072FF)",
            glow: "rgba(0, 198, 255, 0.3)"
        },
        {
            icon: <FaStar />,
            title: "Customer Choice Award",
            desc: "Voted #1 for customer satisfaction in our region.",
            color: "linear-gradient(135deg, #FF512F, #DD2476)",
            glow: "rgba(255, 81, 47, 0.3)"
        }
    ];

    return (
        <div className="page-wrapper" ref={containerRef}>
            <SectionWrapper>
                <div className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Awards & Recognition</h1>
                        <p className="page-subtitle">Celebrating our achievements and industry excellence.</p>
                    </div>

                    <div className="awards-grid" ref={cardsRef} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {awards.map((award, index) => (
                            <div key={index} className="award-card" style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                padding: '3rem 2rem',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px -10px ${award.glow}`;
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                }}
                            >
                                <div className="icon-wrapper" style={{
                                    fontSize: '4rem',
                                    marginBottom: '1.5rem',
                                    background: award.color,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))'
                                }}>
                                    {award.icon}
                                </div>

                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '1rem' }}>{award.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{award.desc}</p>

                                <div className="shine" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '50%',
                                    height: '100%',
                                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
                                    transform: 'skewX(-25deg)',
                                    transition: 'left 0.5s'
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
            <style jsx>{`
                .award-card:hover .shine {
                    left: 150% !important;
                    transition: left 0.7s ease-in-out !important;
                }
            `}</style>
        </div>
    );
};

export default RecognitionPage;
