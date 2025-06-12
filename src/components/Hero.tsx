
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, Bike, ArrowRight, Zap, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles">
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-dark-green to-light-green animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-green/30 to-light-green/40"></div>
      
      {/* Interactive Mouse Follow Effect */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-gradient-radial from-white/10 to-transparent pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          filter: 'blur(40px)'
        }}
      ></div>
      
      {/* Enhanced Floating Icons with Advanced Animations */}
      <div className="absolute inset-0 opacity-20">
        <Battery className="absolute top-20 left-20 h-28 w-28 animate-float animation-delay-0 hover-glow" />
        <Bike className="absolute top-32 right-32 h-36 w-36 animate-float animation-delay-300 hover-rotate" />
        <Zap className="absolute top-60 left-1/3 h-24 w-24 animate-float animation-delay-600 hover-bounce" />
        <Star className="absolute top-40 left-2/3 h-20 w-20 animate-float animation-delay-200 hover-glow" />
        <Sparkles className="absolute bottom-40 left-1/4 h-22 w-22 animate-float animation-delay-800 hover-rotate" />
        <Battery className="absolute bottom-32 right-1/4 h-24 w-24 animate-float animation-delay-1000 hover-glow" />
        <Bike className="absolute bottom-20 right-20 h-32 w-32 animate-float animation-delay-400 hover-bounce" />
        <Zap className="absolute bottom-60 right-1/3 h-18 w-18 animate-float animation-delay-700 hover-rotate" />
      </div>
      
      {/* Premium Content with Staggered Animations */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Badge with Shimmer Effect */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
          <div className="inline-flex items-center glass px-8 py-4 rounded-full mb-8 border border-white/30 hover-lift hover-glow">
            <div className="relative">
              <Zap className="h-6 w-6 mr-3 text-yellow-300 animate-pulse" />
              <div className="absolute inset-0 animate-ping">
                <Zap className="h-6 w-6 text-yellow-300/50" />
              </div>
            </div>
            <span className="text-lg font-bold gradient-text bg-gradient-to-r from-white to-yellow-200 bg-clip-text">
              100% Electric • Zero Emissions • Premium Quality
            </span>
          </div>
        </div>
        
        {/* Hero Title with Advanced Typography */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-12 font-roboto leading-tight transition-all duration-1200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-shimmer stagger-1">
            Eco-Friendly
          </span>
          <span className="block text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text drop-shadow-2xl animate-gradient-shift stagger-2">
            Electric Mobility
          </span>
        </h1>
        
        {/* Enhanced Description */}
        <p className={`text-2xl md:text-3xl lg:text-4xl mb-16 max-w-5xl mx-auto leading-relaxed text-gray-100 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom animation-delay-400' : 'opacity-0'}`}>
          Premium electric bike rental services in{' '}
          <span className="font-bold text-transparent bg-gradient-to-r from-yellow-300 to-yellow-200 bg-clip-text">
            Uppal, Hyderabad
          </span>
          . Experience sustainable transportation with expert maintenance and genuine parts.
        </p>
        
        {/* Premium Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom animation-delay-600' : 'opacity-0'}`}>
          <Link
            to="/services"
            className="group button-premium px-12 py-6 text-xl font-bold hover-lift morph-button magnetic"
          >
            <span className="relative z-10 flex items-center">
              Explore Services
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-all duration-300" />
            </span>
          </Link>
          
          <Link
            to="/contact"
            className="group glass border-2 border-white/40 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 hover:border-white/60 transition-all duration-500 hover-lift morph-button magnetic backdrop-blur-lg"
          >
            <span className="flex items-center">
              Get Quote Now
              <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-180 transition-all duration-500" />
            </span>
          </Link>
        </div>
        
        {/* Premium Stats with Advanced Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom animation-delay-800' : 'opacity-0'}`}>
          {[
            { number: "100%", label: "Electric Mobility", icon: Zap, gradient: "from-yellow-400 to-orange-500" },
            { number: "24/7", label: "Expert Support", icon: Bike, gradient: "from-blue-400 to-blue-600" },
            { number: "Eco", label: "Friendly Solutions", icon: Battery, gradient: "from-green-400 to-emerald-600" }
          ].map((stat, index) => (
            <div key={index} className={`group stagger-${index + 1}`}>
              <div className="card-premium p-8 hover-lift hover-glow glass border border-white/30 backdrop-blur-lg">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-125 transition-all duration-500 hover-bounce`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-xl text-gray-100 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator with Premium Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group cursor-pointer">
        <div className="relative">
          <div className="w-10 h-16 border-2 border-white/60 rounded-full flex justify-center glass backdrop-blur-sm hover:border-white transition-all duration-300 group-hover:scale-110">
            <div className="w-2 h-6 bg-gradient-to-b from-white to-yellow-300 rounded-full mt-4 animate-bounce"></div>
          </div>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20">
            <div className="w-10 h-16 border-2 border-white rounded-full"></div>
          </div>
        </div>
        <p className="text-white/90 text-sm mt-4 font-bold tracking-wider group-hover:text-white transition-all duration-300">
          SCROLL DOWN
        </p>
        <div className="w-8 h-8 mx-auto mt-2 border-l-2 border-b-2 border-white/60 transform rotate-[-45deg] animate-bounce animation-delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;
