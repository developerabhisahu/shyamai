import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const sectionRef = useRef(null);

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
            gsap.from('.stat-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power2.out'
            });

            gsap.from('.why-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="why-choose-section">
            <div className="why-container">
                <div className="why-header">
                    <h2 className="section-title">Why Choose <span className="highlight-text">ShyamAI?</span></h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        We stand out with our innovative approach, skilled team, and unwavering commitment to excellence.
                        Client satisfaction is at our core, cultivating trust and long-term partnerships built for success.
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className={`stat-item ${stat.type === 'highlight' ? 'highlight-cell' : ''}`}>
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
