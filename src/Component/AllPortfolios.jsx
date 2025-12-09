import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi';
import Navbar from './Navbar';

const AllPortfolios = () => {
    const navigate = useNavigate();

    const allProjects = [
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
        },
        {
            id: 5,
            category: "UI/UX Design",
            title: "Mobile App Redesign",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 6,
            category: "Web Development",
            title: "SaaS Dashboard",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        }
    ];

    return (
        <> 
        {/* <Navbar /> */}
  
        <div className="all-portfolios-page">
            <div className="portfolio-container">
                <div className="all-portfolios-header">
                    <button onClick={() => navigate('/')} className="back-button">
                        <FiArrowLeft /> Back to Home
                    </button>
                    <h1>All Projects</h1>
                    <p className="portfolio-description">
                        Explore our comprehensive collection of successful projects.
                    </p>
                </div>

                <div className="portfolio-grid">
                    {allProjects.map((project) => (
                        <div key={project.id} className="portfolio-card">
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
        </div>
</>
    );
};

export default AllPortfolios;
