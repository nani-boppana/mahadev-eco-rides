
import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Bike, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-dark-green to-light-green"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-green/20 to-light-green/30"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <Battery className="absolute top-20 left-20 h-24 w-24 animate-pulse animation-delay-0" />
        <Bike className="absolute top-40 right-32 h-32 w-32 animate-bounce animation-delay-200" />
        <Zap className="absolute top-60 left-1/3 h-20 w-20 animate-pulse animation-delay-400" />
        <Battery className="absolute bottom-32 left-1/4 h-20 w-20 animate-pulse animation-delay-600" />
        <Bike className="absolute bottom-20 right-20 h-28 w-28 animate-bounce animation-delay-800" />
        <Zap className="absolute bottom-40 right-1/3 h-16 w-16 animate-pulse animation-delay-1000" />
      </div>
      
      {/* Enhanced Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
            <Zap className="h-5 w-5 mr-2 text-yellow-300" />
            <span className="text-sm font-semibold">100% Electric • Zero Emissions</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in font-roboto leading-tight">
          <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Eco-Friendly
          </span>
          <span className="block text-yellow-300 drop-shadow-lg">Electric Mobility</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-1 text-gray-100">
          Premium electric bike rental services in <span className="font-semibold text-yellow-300">Uppal, Hyderabad</span>. 
          Experience sustainable transportation with expert maintenance and genuine parts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2 mb-16">
          <Link
            to="/services"
            className="group bg-white text-brand-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-all duration-300 hover-scale flex items-center shadow-2xl border-2 border-white"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-green transition-all duration-300 hover-scale backdrop-blur-sm bg-white/10"
          >
            Get Quote Now
          </Link>
        </div>
        
        {/* Enhanced Stats with Better Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay-2">
          {[
            { number: "100%", label: "Electric Mobility", icon: Zap },
            { number: "24/7", label: "Expert Support", icon: Bike },
            { number: "Eco", label: "Friendly Solutions", icon: Battery }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 hover-lift">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-yellow-300 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                <div className="text-lg text-gray-100">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-white rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-white/80 text-sm mt-2 font-medium">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
