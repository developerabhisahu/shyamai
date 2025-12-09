import React, { useState, useEffect, Suspense, lazy } from 'react'
import HeroFlower from './Component/HeroFlower'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import PortfolioSection from './Component/PortfolioSection'
import WhoWeAre from './Component/WhoWeAre'
import TrustedMarquee from './Component/TrustedMarquee'
import WhyChooseUs from './Component/WhyChooseUs'
import Footer from './Component/Footer'
import { FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { Outlet } from 'react-router-dom'
import SmoothScroll from './Component/SmoothScroll'

// Lazy Loading Pages
const ServicesPage = lazy(() => import('./Component/Pages/ServicesPage'));
const OfferPage = lazy(() => import('./Component/Pages/OfferPage'));
const BlogPage = lazy(() => import('./Component/Pages/BlogPage'));
const AboutUsPage = lazy(() => import('./Component/Pages/AboutUsPage'));
const OurTeamPage = lazy(() => import('./Component/Pages/OurTeamPage'));
const RecognitionPage = lazy(() => import('./Component/Pages/RecognitionPage'));
const ContactUsPage = lazy(() => import('./Component/Pages/ContactUsPage'));
const NotFoundPage = lazy(() => import('./Component/Pages/NotFoundPage'));
const AllPortfolios = lazy(() => import('./Component/AllPortfolios'));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div style={{
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#030305',
    color: '#00f2fe',
    fontSize: '2rem'
  }}>
    Loading...
  </div>
);

const Layout = () => {
  useEffect(() => {
    // Advanced Sci-Fi Cursor Logic
    const cursor = document.querySelector('.custom-cursor');
    const outerRing = document.querySelector('.cursor-outer-ring');
    const innerRing = document.querySelector('.cursor-inner-ring');

    // Initial State
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Constant Rotation
    gsap.to(outerRing, { rotation: 360, duration: 10, repeat: -1, ease: "linear" });
    gsap.to(innerRing, { rotation: -360, duration: 15, repeat: -1, ease: "linear" });

    const moveCursor = (e) => {
      // Main container follows mouse with slight delay
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Smoother lag
        ease: "power2.out"
      });
    };

    const addHoverEffect = () => {
      // Lock-on effect
      gsap.to(cursor, { scale: 1.5, duration: 0.3, ease: "back.out(1.7)" });
      gsap.to(outerRing, { stroke: '#ff0080', strokeWidth: 2, duration: 0.3 });
      gsap.to('.cursor-crosshair', { opacity: 1, scale: 1, duration: 0.3 });
      gsap.to('.cursor-center', { fill: '#ff0080', scale: 1.2, duration: 0.3 });
    };

    const removeHoverEffect = () => {
      // Reset
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(outerRing, { stroke: '#00f2fe', strokeWidth: 1, duration: 0.3 });
      gsap.to('.cursor-crosshair', { opacity: 0, scale: 0.5, duration: 0.3 });
      gsap.to('.cursor-center', { fill: '#00f2fe', scale: 1, duration: 0.3 });
    };

    const clickEffect = (e) => {
      // Cursor Animation
      const tl = gsap.timeline();
      tl.to(cursor, { scale: 0.8, duration: 0.1 })
        .to(cursor, { scale: 1, duration: 0.1 });

      // Global Spark Effect
      const x = e.clientX;
      const y = e.clientY;

      for (let i = 0; i < 30; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark-particle';
        document.body.appendChild(spark);
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;

        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 150;

        gsap.to(spark, {
          x: Math.cos(angle) * velocity,
          y: Math.sin(angle) * velocity,
          opacity: 0,
          scale: 0,
          duration: 0.5 + Math.random() * 0.5,
          ease: 'power2.out',
          onComplete: () => spark.remove()
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', clickEffect);

    const interactiveElements = document.querySelectorAll('a, button, .interacting');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', clickEffect);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <div className="app-container">
      {/* Advanced SVG Tech Cursor */}
      <div className="custom-cursor" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999, width: '60px', height: '60px' }}>
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          {/* Rotating Outer Ring (Dashed) */}
          <circle className="cursor-outer-ring" cx="30" cy="30" r="24" fill="none" stroke="#00f2fe" strokeWidth="1" strokeDasharray="10 5" opacity="0.6" style={{ transformOrigin: 'center' }} />

          {/* Rotating Inner Ring (Solid) */}
          <circle className="cursor-inner-ring" cx="30" cy="30" r="14" fill="none" stroke="#4facfe" strokeWidth="1" opacity="0.8" style={{ transformOrigin: 'center' }} />

          {/* Crosshairs (Hidden until hover) */}
          <g className="cursor-crosshair" opacity="0" style={{ transformOrigin: 'center' }}>
            <line x1="30" y1="4" x2="30" y2="10" stroke="#ff0080" strokeWidth="2" />
            <line x1="30" y1="56" x2="30" y2="50" stroke="#ff0080" strokeWidth="2" />
            <line x1="4" y1="30" x2="10" y2="30" stroke="#ff0080" strokeWidth="2" />
            <line x1="56" y1="30" x2="50" y2="30" stroke="#ff0080" strokeWidth="2" />
          </g>

          {/* Center Dot */}
          <circle className="cursor-center" cx="30" cy="30" r="3" fill="#00f2fe" />

          {/* Glow Filter */}
          <defs>
            <filter id="cursor-glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      <SmoothScroll />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div >
  )
}

const Home = () => {
  const servicesData = [
    {
      id: 1,
      title: "PREDICTIVE ANALYTICS",
      description: "Harness the power of historical data to forecast future trends. Our AI models identify patterns and provide actionable insights to drive strategic decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "NATURAL LANGUAGE PROCESSING",
      description: "Enable your systems to understand, interpret, and generate human language. From chatbots to sentiment analysis, we bridge the gap between human communication and machine understanding.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "COMPUTER VISION",
      description: "Empower your applications to 'see' and interpret visual world. We implement facial recognition, object detection, and image analysis to automate visual tasks.",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "GENERATIVE AI SOLUTIONS",
      description: "Unlock creativity and innovation with Generative AI. We build custom models for content generation, code synthesis, and design automation tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.from('.hero-icon', { y: -50, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' })
        .from('.hero-title', { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, "-=0.5")
        .from('.hero-description', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6");

      // Services Pinning Logic (Desktop Only)
      ScrollTrigger.matchMedia({
        "(min-width: 1025px)": function () {
          ScrollTrigger.create({
            trigger: ".services-section",
            start: "top top",
            end: "bottom bottom",
            pin: ".services-left",
            scrub: true,
          });
        }
      });

      // Service Cards Animation (General)
      gsap.utils.toArray('.service-card').forEach((card) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section id='hero'>
        {/* Dynamic Background Orbs */}
        <div className="hero-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        <div className="hero-background-icons">
          <FaHtml5 className="hero-icon icon-html" />
          <FaCss3Alt className="hero-icon icon-css" />
          <FaJs className="hero-icon icon-js" />
          <FaReact className="hero-icon icon-react" />
          <SiTailwindcss className="hero-icon icon-tailwind" />
        </div>

        <div className='hero-content'>
          <div className='vision-wrapper'>
            <span className='vision-pill'>Scale Your Vision. Go Worldwide</span>

          </div>

          <div className="hero-main-text">
            <h1 className='hero-title outline-text ai-title'>
              A<span className="i-container">ı<HeroFlower className="hero-flower-svg" /></span> Powered
            </h1>
            <h1 className='hero-title gradient-text'>Next-Gen Website</h1>
          </div>

          <p className='hero-description'>
            ShyamAI Tech Solutions transforms your complex operational data into revenue-driving digital assets. We design and build custom web apps and software business solutions that secure your competitive edge. We engineer peak efficiency and create a clear path to market leadership in India.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary magnetic-btn"
              onMouseMove={(e) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(e.target, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
              }} onMouseLeave={(e) => gsap.to(e.target, { x: 0, y: 0, duration: 0.3 })}>
              GET FREE DEMO
            </button>
            <span className="divider-text">Or</span>
            <button className="btn btn-secondary magnetic-btn"
              onMouseMove={(e) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(e.target, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
              }} onMouseLeave={(e) => gsap.to(e.target, { x: 0, y: 0, duration: 0.3 })}>
              <FaWhatsapp /> INQUIRE NOW
            </button>
          </div>
        </div>
      </section>
      <TrustedMarquee />
      <WhoWeAre />

      {/* NEW PRO SERVICES SECTION */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-left">
            <h2 className="services-header-pro">
              AI-Driven <br />
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="services-subtext">
              We leverage cutting-edge Artificial Intelligence to transform your business processes. Explore our suite of intelligent solutions designed for the future.
            </p>
            <button className="btn-view-all-pro">Explore All Solutions <FaArrowRight /></button>
          </div>

          <div className="services-right">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <PortfolioSection />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-portfolios" element={<AllPortfolios />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/recognition" element={<RecognitionPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
