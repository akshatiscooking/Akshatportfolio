
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Responsive Web Design',
      description: 'Creating beautiful, mobile-first websites that work perfectly on all devices and screen sizes.',
      icon: '🎨',
    },
    {
      title: 'React Development',
      description: 'Building dynamic, interactive web applications using React and modern JavaScript frameworks.',
      icon: '⚛️',
    },
    {
      title: 'UI/UX Implementation',
      description: 'Translating designs into pixel-perfect, user-friendly interfaces with attention to detail.',
      icon: '✨',
    },
    {
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, accessibility, and search engine rankings.',
      icon: '🚀',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer a comprehensive range of frontend development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
