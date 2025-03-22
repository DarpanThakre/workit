import React from 'react';
import { FaLightbulb, FaChartLine, FaCode } from 'react-icons/fa'; // Import icons

const services = [
  {
    title: 'Consulting',
    description: 'We provide top-notch business consulting services, helping you make data-driven decisions.',
    icon: <FaLightbulb className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Marketing',
    description: 'Boost your business presence with our modern marketing strategies and digital outreach.',
    icon: <FaChartLine className="text-4xl text-green-400" />,
  },
  {
    title: 'Development',
    description: 'We build custom tech solutions tailored to your business needs, helping you scale efficiently.',
    icon: <FaCode className="text-4xl text-blue-400" />,
  },
];

const RjServices = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Our <span className="text-blue-500">Services</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl group relative"
            >
              <div className="flex items-center justify-center mb-4">
                {/* Service Icon */}
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-500 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Decorative background shape */}
              <div className="absolute -inset-1 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-blue-500 to-green-400 rounded-lg blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RjServices;
