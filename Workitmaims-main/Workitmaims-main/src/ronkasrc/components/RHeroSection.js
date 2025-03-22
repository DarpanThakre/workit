// src/components/HeroSection.js

import React, { useState, useEffect } from 'react';

const heroData = [
    {
        id: 1,
        image: 'https://source.unsplash.com/random/1920x1080/?nature',
        title: 'Explore the Great Outdoors',
        description: 'Discover breathtaking landscapes and adventurous trails.',
        buttonText: 'Learn More',
        link: '#explore'
    },
    {
        id: 2,
        image: 'https://source.unsplash.com/random/1920x1080/?city',
        title: 'Urban Adventures Await',
        description: 'Experience the vibrancy of city life and culture.',
        buttonText: 'Discover More',
        link: '#city'
    },
    {
        id: 3,
        image: 'https://source.unsplash.com/random/1920x1080/?technology',
        title: 'Innovation at Its Best',
        description: 'Embrace the future with cutting-edge technology.',
        buttonText: 'See Innovations',
        link: '#technology'
    }
];

const RHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically change slide every 5 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + heroData.length) % heroData.length);
    };

    return (
        <section className="relative h-screen">
            {/* Slide */}
            {heroData.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}
                    style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative text-white text-center px-4 z-10">
                        <h1 className="text-5xl md:text-6xl font-bold">{item.title}</h1>
                        <p className="mt-4 text-lg md:text-xl">{item.description}</p>
                        <a
                            href={item.link}
                            className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            {item.buttonText}
                        </a>
                    </div>
                </div>
            ))}

            {/* Next/Previous Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition duration-200"
            >
                &#8249;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition duration-200"
            >
                &#8250;
            </button>

            {/* Dots for Manual Slide Control */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-white'} focus:outline-none`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default RHeroSection;
