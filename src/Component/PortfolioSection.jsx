import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.portfolio-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.portfolio-card', {
                scrollTrigger: {
                    trigger: '.portfolio-grid',
                    start: 'top 85%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            id: 1,
            category: "Web Development",
            title: "Custom Wordpress Website",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            category: "Web Development",
            title: "eCommerce Web Application",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            category: "Web Development",
            title: "Wordpress Business Website",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            category: "App Development",
            title: "Android Application Development",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
        }
    ];

    return (
        <section ref={sectionRef} className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h1>Our Portfolio</h1>
                    <p className="portfolio-description">
                        Look through our portfolio to know how we have made the client's ideas into reality. Each project listed below shows our expertise and promise of excellence.
                    </p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="portfolio-card" onClick={() => navigate('/all-portfolios')}>
                            <div className="portfolio-card-content">
                                <div className="portfolio-text">
                                    <span className="portfolio-category">
                                        {project.category}
                                    </span>
                                    <h3 className="portfolio-title">
                                        {project.title}
                                    </h3>
                                    <div className="portfolio-icon-wrapper">
                                        <FiArrowUpRight className="portfolio-icon" />
                                    </div>
                                </div>
                                <div className="portfolio-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="portfolio-image"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
