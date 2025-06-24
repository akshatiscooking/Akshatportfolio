
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Frontend{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm passionate about crafting beautiful, responsive, and user-friendly web experiences with modern technologies. 
              I love clean code and innovative design solutions that make a difference.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With expertise in React, TypeScript, and modern frontend frameworks, I bring ideas to life through code 
              and create digital experiences that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Services
              </button>
              <button 
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                My Skills
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Frontend Developer at Work"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
