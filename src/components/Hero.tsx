
import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Bike, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-light-green"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Battery className="absolute top-20 left-20 h-24 w-24 animate-pulse" />
        <Bike className="absolute top-40 right-32 h-32 w-32 animate-bounce" />
        <Battery className="absolute bottom-32 left-1/4 h-20 w-20 animate-pulse" />
        <Bike className="absolute bottom-20 right-20 h-28 w-28 animate-bounce" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-roboto">
          Eco-Friendly
          <span className="block text-white">Electric Mobility</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-1">
          Professional electric bike rental services in Uppal, Hyderabad. 
          Experience sustainable transportation with our premium e-bikes, 
          expert maintenance, and genuine parts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
          <Link
            to="/services"
            className="bg-white text-brand-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-scale flex items-center group"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-green transition-all duration-300 hover-scale"
          >
            Get Quote Now
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-delay-2">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-lg opacity-90">Electric Mobility</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-lg opacity-90">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">Eco</div>
            <div className="text-lg opacity-90">Friendly Solutions</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
