
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, Bike, ArrowRight, Zap, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-dark-green to-light-green"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-green/20 to-light-green/30"></div>
      
      {/* Floating Icons - Reduced and Simplified */}
      <div className="absolute inset-0 opacity-10">
        <Bike className="absolute top-20 right-20 h-32 w-32 animate-float" />
        <Battery className="absolute bottom-20 left-20 h-28 w-28 animate-float animation-delay-300" />
        <Zap className="absolute top-1/2 right-1/3 h-24 w-24 animate-float animation-delay-600" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Badge */}
        <div className={`mb-8 transition-all duration-800 ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
          <div className="inline-flex items-center glass px-6 py-3 rounded-full border border-white/30 hover-lift">
            <Zap className="h-5 w-5 mr-3 text-yellow-300 animate-pulse" />
            <span className="text-lg font-semibold">100% Electric • Zero Emissions</span>
          </div>
        </div>
        
        {/* Hero Title */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-8 font-roboto leading-tight transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <span className="block text-white mb-4">
            Eco-Friendly
          </span>
          <span className="block text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text">
            Electric Mobility
          </span>
        </h1>
        
        {/* Description */}
        <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100 transition-all duration-800 ${isVisible ? 'animate-slide-in-bottom animation-delay-400' : 'opacity-0'}`}>
          Premium electric bike services in <span className="font-bold text-yellow-300">Uppal, Hyderabad</span>. 
          Sustainable transportation with expert maintenance.
        </p>
        
        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-800 ${isVisible ? 'animate-slide-in-bottom animation-delay-600' : 'opacity-0'}`}>
          <Link
            to="/services"
            className="group button-premium px-10 py-4 text-lg font-bold hover-lift morph-button"
          >
            <span className="relative z-10 flex items-center">
              Explore Services
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
            </span>
          </Link>
          
          <Link
            to="/contact"
            className="group glass border-2 border-white/40 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-500 hover-lift backdrop-blur-lg"
          >
            Get Quote Now
          </Link>
        </div>
        
        {/* Simplified Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-800 ${isVisible ? 'animate-slide-in-bottom animation-delay-800' : 'opacity-0'}`}>
          {[
            { number: "100%", label: "Electric", icon: Zap },
            { number: "24/7", label: "Support", icon: Bike },
            { number: "500+", label: "Customers", icon: Star }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-yellow-300">{stat.number}</div>
              <div className="text-lg text-gray-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 text-center">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center mb-2">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-sm font-medium">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
