import React from 'react';

const HeroFlower = ({ className }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="petalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FB923C" />
                    <stop offset="100%" stopColor="#F87171" />
                </linearGradient>
                <linearGradient id="petalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
            </defs>
            {/* Top Right Petal */}
            <path
                d="M50 50 Q 50 5 95 5 L 95 50 Z"
                fill="url(#petalGradient1)"
            />
            {/* Bottom Right Petal */}
            <path
                d="M50 50 Q 95 50 95 95 L 50 95 Z"
                fill="url(#petalGradient2)"
                style={{ opacity: 0.9 }}
            />
            {/* Bottom Left Petal */}
            <path
                d="M50 50 Q 50 95 5 95 L 5 50 Z"
                fill="url(#petalGradient2)"
            />
            {/* Top Left Petal */}
            <path
                d="M50 50 Q 5 50 5 5 L 50 5 Z"
                fill="url(#petalGradient1)"
                style={{ opacity: 0.9 }}
            />
        </svg>
    );
};

export default HeroFlower;
