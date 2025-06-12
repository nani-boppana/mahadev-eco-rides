
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Wrench, Battery, Settings, ArrowRight, Zap, Sparkles, Star } from 'lucide-react';

const ServiceOverview = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Bike,
      title: 'Electric Bike Rental',
      description: 'Daily, weekly, and monthly rental options for premium electric bikes. Perfect for commuting, leisure, or business needs with 24/7 support.',
      link: '/services/rental',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      bgGradient: 'from-blue-50 via-blue-100 to-indigo-100',
      accent: 'blue'
    },
    {
      icon: Wrench,
      title: 'Electric Bike Services',
      description: 'Professional maintenance and repair services by expert technicians. Keep your e-bike running at peak performance with genuine parts.',
      link: '/services/repair',
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      bgGradient: 'from-green-50 via-emerald-100 to-teal-100',
      accent: 'green'
    },
    {
      icon: Battery,
      title: 'Lithium Batteries',
      description: 'High-performance lithium battery replacements and upgrades. Extend your e-bike range with quality batteries and advanced technology.',
      link: '/services/batteries',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      bgGradient: 'from-yellow-50 via-orange-100 to-red-100',
      accent: 'orange'
    },
    {
      icon: Settings,
      title: 'Spare Parts',
      description: 'Genuine spare parts and accessories for all electric bike models. Quality components for optimal performance and longevity.',
      link: '/services/parts',
      gradient: 'from-purple-500 via-violet-600 to-pink-600',
      bgGradient: 'from-purple-50 via-violet-100 to-pink-100',
      accent: 'purple'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden particles">
      {/* Advanced Background Elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <div className="relative">
          <Zap className="h-40 w-40 text-brand-green animate-float" />
          <div className="absolute inset-0 animate-ping opacity-20">
            <Zap className="h-40 w-40 text-brand-green" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Battery className="h-32 w-32 text-brand-green animate-float animation-delay-300" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-5">
        <Sparkles className="h-28 w-28 text-light-green animate-float animation-delay-600" />
      </div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-8 font-bold border border-brand-green/20 hover-lift">
            <div className="relative mr-3">
              <Zap className="h-5 w-5 text-brand-green animate-pulse" />
              <div className="absolute inset-0 animate-ping opacity-30">
                <Zap className="h-5 w-5 text-brand-green" />
              </div>
            </div>
            <span className="gradient-text">Our Premium Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text mb-10 font-roboto animate-slide-in-bottom">
            Complete Electric
            <span className="block gradient-text bg-gradient-to-r from-brand-green via-light-green to-dark-green bg-clip-text animate-gradient-shift">
              Mobility Solutions
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-slide-in-bottom animation-delay-200">
            Comprehensive electric mobility solutions for Uppal and surrounding areas. 
            From premium rentals to expert maintenance, we've got you covered.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center mt-10 space-x-8 animate-slide-in-bottom animation-delay-400">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
              <span className="ml-3 text-gray-600 font-semibold">500+ Happy Customers</span>
            </div>
          </div>
        </div>
        
        {/* Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-card group relative overflow-hidden card-premium hover-lift hover-glow transition-all duration-700 ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Premium Card Content */}
              <div className="relative bg-white/80 backdrop-blur-sm p-10 h-full border border-white/50">
                {/* Floating Icon with Advanced Animations */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} text-white rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl morph-button`}>
                    <service.icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                </div>
                
                {/* Premium Typography */}
                <h3 className="text-2xl font-bold text-dark-text mb-6 group-hover:gradient-text transition-all duration-300 font-roboto">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-lg group-hover:text-gray-800 transition-colors">
                  {service.description}
                </p>
                
                {/* Premium CTA Button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-brand-green font-bold hover:text-dark-green transition-all duration-500 group-hover:translate-x-2 text-lg hover-glow"
                >
                  <span className="relative">
                    Learn More
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-green to-dark-green group-hover:w-full transition-all duration-500"></div>
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </Link>
              </div>
              
              {/* Premium Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} p-[2px]`}>
                  <div className="w-full h-full rounded-3xl bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium Call-to-Action */}
        <div className="text-center">
          <div className="inline-block animate-slide-in-bottom animation-delay-600">
            <Link
              to="/services"
              className="group button-premium px-16 py-8 text-2xl font-bold hover-lift morph-button magnetic inline-flex items-center shadow-2xl"
            >
              <div className="relative mr-4">
                <Bike className="h-8 w-8 group-hover:rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Bike className="h-8 w-8" />
                </div>
              </div>
              <span className="relative z-10">View All Premium Services</span>
              <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
            </Link>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="mt-12 flex justify-center space-x-12 animate-slide-in-bottom animation-delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-600">Electric</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-gray-600">Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
