import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import RTHeader from '../components/RTHeader';

const teamMembers = [
  {
    title: 'CEO & Founder',
    bio: 'An experienced professional with over 15 years in the marketing industry, leading successful campaigns.',
    photo: 'https://via.placeholder.com/150',
  },
  {
    title: 'Head of Marketing',
    bio: 'An expert in digital marketing strategies with a flair for creative storytelling.',
    photo: 'https://via.placeholder.com/150',
  },
  {
    title: 'SEO Specialist',
    bio: 'Passionate about helping businesses grow their online presence through SEO best practices.',
    photo: 'https://via.placeholder.com/150',
  },
  {
    title: 'Content Creator',
    bio: 'Crafts compelling content that engages audiences and drives conversions.',
    photo: 'https://via.placeholder.com/150',
  },
];

const RTAbout = () => {
  return (
    <>
     <RTHeader/>
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <Fade duration={1000}>
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        </Fade>
        <Zoom duration={1000}>
          <p className="text-lg text-center mb-8">
            We are a leading marketing and advertising agency dedicated to helping businesses grow
            and succeed in the digital world. Our team of experts leverages the latest strategies and
            technologies to deliver exceptional results for our clients.
          </p>
        </Zoom>

        <Fade duration={1000}>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Our Mission</h3>
          <p className="text-lg text-center mb-8">
            Our mission is to empower businesses by providing innovative marketing solutions that
            drive growth and engagement. We believe in the power of collaboration and creativity to
            achieve success.
          </p>
        </Fade>

        <Fade duration={1000}>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Our Values</h3>
          <ul className="list-disc list-inside text-lg mx-auto max-w-2xl">
            <li className="mb-2">🔹 Integrity: We believe in transparency and honesty in all our interactions.</li>
            <li className="mb-2">🔹 Innovation: We constantly seek new ideas and approaches to stay ahead of the curve.</li>
            <li className="mb-2">🔹 Collaboration: We work together with our clients to achieve common goals.</li>
            <li className="mb-2">🔹 Excellence: We strive for the highest quality in our work and results.</li>
          </ul>
        </Fade>

        <Fade duration={1000}>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <img
                  src={member.photo}
                  alt={`Team member ${index + 1}`}
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h4 className="text-xl font-bold mb-2">{member.title}</h4>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
    </>
    
  );
};

export default RTAbout;
