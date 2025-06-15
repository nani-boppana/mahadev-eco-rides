
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, Bike, ArrowRight, Zap, Star, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-dark-green to-light-green">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full animate-float animation-delay-500 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float animation-delay-1000 blur-xl"></div>
      </div>
      
      {/* Floating Icons with Enhanced Animation */}
      <div className="absolute inset-0 opacity-20">
        <Bike className="absolute top-20 right-20 h-24 w-24 animate-float text-white/40 hover:text-white/60 transition-colors duration-500" />
        <Battery className="absolute bottom-32 left-20 h-20 w-20 animate-float animation-delay-300 text-white/40 hover:text-white/60 transition-colors duration-500" />
        <Zap className="absolute top-1/2 right-1/3 h-16 w-16 animate-float animation-delay-600 text-yellow-300/60 hover:text-yellow-300/80 transition-colors duration-500" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Premium Badge */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center glass px-8 py-4 rounded-full border border-white/40 hover:border-white/60 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
            <Zap className="h-5 w-5 mr-3 text-yellow-300 animate-pulse group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">100% Electric • Zero Emissions • Sustainable Future</span>
          </div>
        </div>
        
        {/* Enhanced Hero Title */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-roboto leading-tight transition-all duration-1200 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
          <span className="block text-white mb-4 hover:text-gray-100 transition-colors duration-300">
            Eco-Friendly
          </span>
          <span className="block text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text hover:from-yellow-200 hover:via-yellow-100 hover:to-yellow-200 transition-all duration-500 bg-[length:200%_auto] animate-gradient-shift">
            Electric Mobility
          </span>
        </h1>
        
        {/* Enhanced Description */}
        <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom animation-delay-400' : 'opacity-0 translate-y-10'}`}>
          Premium electric bike services in <span className="font-bold text-yellow-300 hover:text-yellow-200 transition-colors duration-300">Uppal, Hyderabad</span>. 
          <br className="hidden md:block" />
          Experience sustainable transportation with professional maintenance and 24/7 support.
        </p>
        
        {/* Enhanced Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom animation-delay-600' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/services" 
            className="group relative button-premium px-12 py-5 text-lg font-bold hover-lift overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Explore Services
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
          
          <Link 
            to="/contact" 
            className="group glass border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/70 transition-all duration-500 hover-lift backdrop-blur-lg transform hover:scale-105"
          >
            <span className="group-hover:text-yellow-200 transition-colors duration-300">Get Quote Now</span>
          </Link>
        </div>
        
        {/* Enhanced Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom animation-delay-800' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: "100%", label: "Electric", icon: Zap, color: "text-yellow-300" },
            { number: "24/7", label: "Support", icon: Bike, color: "text-blue-300" },
            { number: "500+", label: "Happy Customers", icon: Star, color: "text-purple-300" }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover-lift cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <stat.icon className={`h-10 w-10 ${stat.color} group-hover:animate-pulse`} />
              </div>
              <div className="text-4xl font-bold mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
              <div className="text-lg text-gray-100 group-hover:text-white transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-center animate-bounce">
        <div className="flex flex-col items-center space-y-2 cursor-pointer hover:text-white/80 transition-colors duration-300">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
