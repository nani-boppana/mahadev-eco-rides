
import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Wrench, Battery, Settings, ArrowRight, Zap } from 'lucide-react';

const ServiceOverview = () => {
  const services = [
    {
      icon: Bike,
      title: 'Electric Bike Rental',
      description: 'Daily, weekly, and monthly rental options for premium electric bikes. Perfect for commuting, leisure, or business needs.',
      link: '/services/rental',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Wrench,
      title: 'Electric Bike Services',
      description: 'Professional maintenance and repair services by expert technicians. Keep your e-bike running at peak performance.',
      link: '/services/repair',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100'
    },
    {
      icon: Battery,
      title: 'Lithium Batteries',
      description: 'High-performance lithium battery replacements and upgrades. Extend your e-bike range with quality batteries.',
      link: '/services/batteries',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-100'
    },
    {
      icon: Settings,
      title: 'Spare Parts',
      description: 'Genuine spare parts and accessories for all electric bike models. Quality components for optimal performance.',
      link: '/services/parts',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 opacity-5">
        <Zap className="h-32 w-32 text-brand-green animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-5">
        <Battery className="h-24 w-24 text-brand-green animate-bounce" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-brand-green/10 text-brand-green px-4 py-2 rounded-full mb-6 font-semibold">
            <Zap className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-8 font-roboto">
            Complete Electric
            <span className="block text-brand-green">Mobility Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-text max-w-4xl mx-auto leading-relaxed">
            Comprehensive electric mobility solutions for Uppal and surrounding areas. 
            From rentals to maintenance, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              
              <div className="relative bg-white p-8 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-dark-text mb-4 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-brand-green font-bold hover:text-dark-green transition-all duration-300 group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/services"
            className="group inline-flex items-center bg-gradient-to-r from-brand-green to-dark-green text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-dark-green hover:to-brand-green transition-all duration-300 hover-scale shadow-2xl"
          >
            <Bike className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
            View All Services
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
