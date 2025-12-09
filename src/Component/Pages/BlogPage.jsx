import React, { useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const BlogPage = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current.children,
                { y: 50, opacity: 0 },
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

    const posts = [
        {
            id: 1,
            title: "The Future of Web Development",
            date: "Oct 12, 2023",
            excerpt: "Exploring the latest trends in AI and web technologies that are shaping the digital landscape.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            category: "Technology"
        },
        {
            id: 2,
            title: "Why UI/UX Matters",
            date: "Nov 05, 2023",
            excerpt: "How good design translates to better business results and improved user retention.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
            category: "Design"
        },
        {
            id: 3,
            title: "SEO Best Practices for 2024",
            date: "Dec 01, 2023",
            excerpt: "Stay ahead of the curve with these essential SEO tips for higher ranking and visibility.",
            image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80",
            category: "Marketing"
        }
    ];

    return (
        <div className="page-wrapper" ref={containerRef}>
            <SectionWrapper>
                <div className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Our Blog</h1>
                        <p className="page-subtitle">Insights, news, and trends from the tech world.</p>
                    </div>

                    <div className="blog-grid" ref={cardsRef} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {posts.map(post => (
                            <div key={post.id} className="blog-card" style={{
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                                    e.currentTarget.querySelector('.blog-img').style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.querySelector('.blog-img').style.transform = 'scale(1)';
                                }}
                            >
                                <div className="image-wrapper" style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1rem',
                                        background: 'rgba(0,0,0,0.6)',
                                        backdropFilter: 'blur(5px)',
                                        padding: '0.4rem 1rem',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        color: '#fff',
                                        zIndex: 2,
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}>
                                        {post.category}
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="blog-img"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                    />
                                </div>

                                <div className="content" style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        <FaCalendarAlt /> {post.date}
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{post.excerpt}</p>

                                    <button style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'var(--primary-color)',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        cursor: 'pointer',
                                        padding: 0
                                    }}>
                                        Read More <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default BlogPage;
