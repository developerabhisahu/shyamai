import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const stats = [
        { id: 1, value: "10+", label: "Happy Clients" },
        { id: 2, value: "25+", label: "Successful Projects" },
        { id: 3, value: "5+", label: "Years of Industry Experience" },
        { id: 4, value: "10+", label: "Awards & Recognitions" },
        { id: 5, value: "90%", label: "Client Retention Rate" },
        { id: 6, value: "20+", label: "Professionals Expert team", type: "highlight" },
        { id: 7, value: "24/7", label: "Global Presence" },
        { id: 8, value: "100%", label: "Transparency" }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray(".panel");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: "+=3500", // Drag out the scroll 
                }
            });

            // Collage Animation in first panel
            gsap.from('.collage-image', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.who-panel',
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="horizontal-scroll-section" ref={triggerRef}>
            <div className="horizontal-content-wrapper" ref={sectionRef}>

                {/* Panel 1: Who We Are */}
                <div className="panel who-panel">
                    <div className="panel-inner">
                        <div className="collage-container local-collage">
                            <div className="decorative-circle"></div>
                            <div className="collage-column-left">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="collage-image main-image" />
                            </div>
                            <div className="collage-column-right">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Brainstorm" className="collage-image small-image" />
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Meeting" className="collage-image small-image" />
                            </div>
                        </div>
                        <div className="text-content local-text">
                            <h2 className="section-title neon-text">Who We Are</h2>
                            <div className="title-underline" style={{ margin: '0 0 2rem 0', width: '60px', background: 'var(--primary-color)' }}></div>
                            <p className="section-description glass-desc">
                                ShyamAI Tech Solutions isn't just a dev shop. We are a strategic partner for startups and enterprises, crafting high-quality digital experiences that drive real growth.
                            </p>
                            <div className="scroll-hint">
                                <span>Scroll to Discover More &rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 2: Why Choose Us (Stats) */}
                <div className="panel why-panel">
                    <div className="panel-inner why-inner">
                        <div className="why-header-small">
                            <h2 className="section-title text-center">Why Choose <span className="highlight-text">ShyamAI?</span></h2>
                            <div className="title-underline"></div>
                        </div>
                        <div className="stats-grid-horizontal">
                            {stats.map((stat) => (
                                <div key={stat.id} className={`stat-card-pro ${stat.type === 'highlight' ? 'highlight-pro' : ''}`}>
                                    <h3 className="stat-val">{stat.value}</h3>
                                    <p className="stat-lbl">{stat.label}</p>
                                    <div className="hover-glow"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhoWeAre;
