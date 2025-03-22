import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal'; // For animation effects

const services = [
  {
    category: 'Digital Marketing',
    services: [
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'Improve your website’s visibility on search engines and attract organic traffic.',
        price: '$1000/month',
        features: ['On-page SEO', 'Keyword Research', 'Link Building', 'Content Optimization'],
        icon: '🔍',
      },
      {
        title: 'Pay-Per-Click (PPC) Advertising',
        description: 'Drive targeted traffic to your site with Google Ads, Bing Ads, and other platforms.',
        price: 'Starting from $500/month',
        features: ['Campaign Setup', 'Ad Copywriting', 'A/B Testing', 'Conversion Tracking'],
        icon: '💰',
      },
      {
        title: 'Social Media Marketing',
        description: 'Promote your brand on platforms like Facebook, Instagram, LinkedIn, and Twitter.',
        price: '$800/month',
        features: ['Ad Campaigns', 'Target Audience Analysis', 'Engagement Tracking', 'Influencer Marketing'],
        icon: '📱',
      },
    ],
  },
  {
    category: 'Content Marketing',
    services: [
      {
        title: 'Content Strategy',
        description: 'Develop a comprehensive content plan that aligns with your business goals.',
        price: '$1500',
        features: ['Content Planning', 'Keyword Targeting', 'Competitor Analysis', 'Content Calendar'],
        icon: '📝',
      },
      {
        title: 'Blog Writing',
        description: 'Create high-quality blog posts that attract readers and improve search rankings.',
        price: '$200 per post',
        features: ['SEO Optimized Content', 'Research-Based Topics', 'Internal Linking', 'Engaging Copy'],
        icon: '✍️',
      },
      {
        title: 'Video Marketing',
        description: 'Produce engaging video content for platforms like YouTube, Vimeo, and social media.',
        price: 'Starting from $1000 per video',
        features: ['Scriptwriting', 'Video Production', 'Video SEO', 'Video Distribution'],
        icon: '🎥',
      },
    ],
  },
  {
    category: 'Advertising',
    services: [
      {
        title: 'Display Advertising',
        description: 'Promote your brand through banner ads on Google Display Network and other platforms.',
        price: '$700/month',
        features: ['Creative Design', 'Retargeting Campaigns', 'Ad Placement Optimization', 'Performance Monitoring'],
        icon: '🖼️',
      },
      {
        title: 'Email Marketing',
        description: 'Reach your audience directly with personalized email campaigns.',
        price: '$500 per campaign',
        features: ['Email List Segmentation', 'Custom Templates', 'A/B Testing', 'Analytics and Reporting'],
        icon: '📧',
      },
      {
        title: 'Influencer Marketing',
        description: 'Partner with influencers to promote your brand and reach new audiences.',
        price: 'Custom Pricing',
        features: ['Influencer Identification', 'Campaign Management', 'Engagement Tracking', 'Brand Awareness'],
        icon: '🌟',
      },
    ],
  },
  {
    category: 'Analytics & Reporting',
    services: [
      {
        title: 'Google Analytics Setup & Management',
        description: 'Track your website’s traffic and user behavior with Google Analytics.',
        price: '$500 setup, $300/month',
        features: ['Advanced Tracking', 'Custom Dashboards', 'Conversion Funnels', 'Data Insights'],
        icon: '📊',
      },
      {
        title: 'Marketing Performance Audits',
        description: 'Evaluate your existing marketing efforts and identify areas for improvement.',
        price: '$1000',
        features: ['SEO Audit', 'PPC Audit', 'Content Audit', 'Social Media Audit'],
        icon: '🔍',
      },
      {
        title: 'A/B Testing & Optimization',
        description: 'Test different strategies and optimize your marketing efforts for better performance.',
        price: '$800/month',
        features: ['Landing Page Tests', 'Ad Copy Testing', 'Email Subject Line Tests', 'Conversion Rate Optimization'],
        icon: '⚡',
      },
    ],
  },
  {
    category: 'Branding & Identity',
    services: [
      {
        title: 'Logo Design',
        description: 'Create a unique and memorable logo that represents your brand identity.',
        price: '$1000',
        features: ['Initial Concepts', 'Revisions', 'Final Deliverables', 'Brand Guidelines'],
        icon: '🎨',
      },
      {
        title: 'Brand Messaging',
        description: 'Develop a compelling brand voice and message that resonates with your audience.',
        price: '$1200',
        features: ['Tone of Voice', 'Brand Story', 'Core Messaging', 'Tagline Creation'],
        icon: '🗣️',
      },
      {
        title: 'Rebranding Services',
        description: 'Revitalize your brand with a fresh identity and updated messaging.',
        price: '$3000',
        features: ['Logo Redesign', 'Brand Guidelines', 'Visual Identity', 'Messaging Update'],
        icon: '🔄',
      },
    ],
  },
];

const RTServices = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Marketing & Advertising Services</h2>
        {services.map((category, index) => (
          <Zoom key={index}>
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, idx) => (
                  <Fade key={idx} direction="up" cascade>
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 transition-transform"
                    >
                      <div className="flex items-center justify-center text-5xl mb-4 animate-pulse">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                      <p className="mb-4">{service.description}</p>
                      <p className="text-lg font-semibold mb-4 text-blue-600">{service.price}</p>
                      <ul className="list-disc list-inside mb-4">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-gray-700">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out">
                        Learn More
                      </button>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default RTServices;
