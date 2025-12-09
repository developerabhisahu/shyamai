import React, { useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

const AboutUsPage = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Image Parallax & Scale
            gsap.fromTo(imageRef.current,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1
                    }
                }
            );

            // Text Stagger
            gsap.fromTo(textRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        { icon: <FaRocket />, title: "Innovation", desc: "Pushing boundaries with cutting-edge tech." },
        { icon: <FaLightbulb />, title: "Creativity", desc: "Crafting unique digital experiences." },
        { icon: <FaUsers />, title: "Collaboration", desc: "Working together to achieve greatness." }
    ];

    return (
        <div className="page-wrapper" ref={containerRef}>
            <SectionWrapper>
                <div className="page-content">
                    <div className="about-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                        {/* Image Section */}
                        <div className="about-image-wrapper" ref={imageRef} style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0,229,255,0.2), transparent)', zIndex: 1 }}></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>

                        {/* Text Section */}
                        <div className="about-content" ref={textRef}>
                            <div className="section-badge" style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.5rem',
                                background: 'rgba(0, 229, 255, 0.1)',
                                color: 'var(--primary-color)',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(0, 229, 255, 0.2)'
                            }}>
                                WHO WE ARE
                            </div>

                            <h1 className="page-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '3.5rem', lineHeight: 1.1 }}>
                                We Build <span style={{ color: 'var(--primary-color)' }}>Digital Future</span>
                            </h1>

                            <p className="page-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                We are a team of passionate creators and problem solvers dedicated to empowering businesses with innovative digital solutions that drive growth and efficiency.
                            </p>

                            <div className="features-grid" style={{ display: 'grid', gap: '1.5rem' }}>
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-item" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <div className="feature-icon" style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'rgba(0, 229, 255, 0.1)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--primary-color)',
                                            fontSize: '1.2rem'
                                        }}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.2rem' }}>{feature.title}</h3>
                                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <style jsx>{`
                @media (max-width: 768px) {
                    .about-container {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .page-title {
                        font-size: 2.5rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutUsPage;
