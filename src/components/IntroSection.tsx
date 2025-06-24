
import React from 'react';

const IntroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              HI I'M{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AKSHAT SRIVASTAVA
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                About Me
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 h-[400px] lg:h-[500px] flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-6xl mb-4">📷</div>
                <p className="text-lg">Your Image Here</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
