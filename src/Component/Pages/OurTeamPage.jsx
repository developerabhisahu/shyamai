import React, { useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const OurTeamPage = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current.children,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
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

    const team = [
        { id: 1, name: "John Doe", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Jane Smith", role: "Lead Designer", image: "https://images.unsplash.com/photo-1573496359-7013c53bcae4?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Mike Johnson", role: "Senior Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <div className="page-wrapper" ref={containerRef}>
            <SectionWrapper>
                <div className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Our Team</h1>
                        <p className="page-subtitle">Meet the experts behind our success.</p>
                    </div>

                    <div className="team-grid" ref={cardsRef} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '3rem'
                    }}>
                        {team.map(member => (
                            <div key={member.id} className="team-card" style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <div className="image-wrapper" style={{
                                    width: '100%',
                                    height: '350px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                    />
                                    <div className="social-overlay" style={{
                                        position: 'absolute',
                                        bottom: '-50px',
                                        left: 0,
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'rgba(0,0,0,0.8)',
                                        backdropFilter: 'blur(5px)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: '1.5rem',
                                        transition: 'bottom 0.3s ease'
                                    }}>
                                        <FaLinkedin style={{ cursor: 'pointer', color: '#fff', fontSize: '1.2rem' }} />
                                        <FaTwitter style={{ cursor: 'pointer', color: '#fff', fontSize: '1.2rem' }} />
                                        <FaGithub style={{ cursor: 'pointer', color: '#fff', fontSize: '1.2rem' }} />
                                    </div>
                                </div>

                                <div className="team-info" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>{member.name}</h3>
                                    <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
            <style jsx>{`
                .team-card:hover img {
                    transform: scale(1.1);
                }
                .team-card:hover .social-overlay {
                    bottom: 0 !important;
                }
            `}</style>
        </div>
    );
};

export default OurTeamPage;
