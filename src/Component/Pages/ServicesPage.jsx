import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCloud, FaShieldAlt } from 'react-icons/fa';

const ServicesPage = () => {
    const services = [
        {
            id: 1,
            icon: <FaCode />,
            title: "Web Development",
            description: "Custom websites built with modern technologies like React, Node.js, and more. Fast, secure, and scalable."
        },
        {
            id: 2,
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            description: "User-centered design that looks amazing and works perfectly. We create intuitive interfaces for web and mobile."
        },
        {
            id: 3,
            icon: <FaSearch />,
            title: "SEO Optimization",
            description: "Rank higher on Google with our data-driven SEO strategies. Drive organic traffic and grow your business."
        },
        {
            id: 4,
            icon: <FaMobileAlt />,
            title: "App Development",
            description: "Native and cross-platform mobile apps for iOS and Android. Seamless performance and great user experience."
        },
        {
            id: 5,
            icon: <FaCloud />,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure setup and management. AWS, Google Cloud, and Azure expertise."
        },
        {
            id: 6,
            icon: <FaShieldAlt />,
            title: "Cyber Security",
            description: "Protect your digital assets with our advanced security solutions. Audits, penetration testing, and more."
        }
    ];

    return (
        <div className="page-wrapper">
            <SectionWrapper>
                <div className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Our Services</h1>
                        <p className="page-subtitle">Comprehensive digital solutions to propel your business forward.</p>
                    </div>

                    <div className="services-grid-3d">
                        {services.map((service) => (
                            <div key={service.id} className="service-card-3d">
                                <div className="card-content">
                                    <div className="card-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <div className="card-bg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ServicesPage;
