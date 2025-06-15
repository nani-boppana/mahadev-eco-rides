
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Wrench, Battery, Settings, ArrowRight, Sparkles } from 'lucide-react';

const ServiceOverview = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Bike,
      title: 'Electric Bike Rental',
      description: 'Daily, weekly, and monthly rental options for premium electric bikes with 24/7 support and maintenance.',
      link: '/services/rental',
      gradient: 'from-blue-500 to-indigo-600',
      accent: 'bg-blue-50 border-blue-200'
    },
    {
      icon: Wrench,
      title: 'Professional Services',
      description: 'Expert maintenance and repair services by certified technicians with genuine parts and warranty.',
      link: '/services/repair',
      gradient: 'from-green-500 to-emerald-600',
      accent: 'bg-green-50 border-green-200'
    },
    {
      icon: Battery,
      title: 'Lithium Batteries',
      description: 'High-performance lithium battery replacements and upgrades for extended range and reliability.',
      link: '/services/batteries',
      gradient: 'from-yellow-500 to-orange-500',
      accent: 'bg-yellow-50 border-yellow-200'
    },
    {
      icon: Settings,
      title: 'Genuine Parts',
      description: 'Original spare parts and premium accessories for all electric bike models and brands.',
      link: '/services/parts',
      gradient: 'from-purple-500 to-pink-600',
      accent: 'bg-purple-50 border-purple-200'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-brand-green/10 px-6 py-3 rounded-full mb-6 border border-brand-green/20">
            <Sparkles className="h-5 w-5 text-brand-green mr-2 animate-pulse" />
            <span className="text-brand-green font-semibold">Premium Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-8 font-roboto">
            Our <span className="gradient-text">Complete Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From rentals to repairs, batteries to parts - we provide comprehensive electric mobility solutions 
            for Uppal and surrounding areas with professional expertise.
          </p>
        </div>
        
        {/* Enhanced Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100 overflow-hidden ${
                visibleCards.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} text-white rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-10 w-10" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-text mb-6 font-roboto group-hover:text-brand-green transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Enhanced CTA */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-brand-green font-bold hover:text-dark-green transition-all duration-300 group-hover:translate-x-2"
                >
                  <span className="border-b-2 border-transparent group-hover:border-brand-green transition-all duration-300">
                    Learn More
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Accent Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="group inline-flex items-center button-premium px-12 py-6 text-xl font-bold hover-lift relative overflow-hidden"
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
