
import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Wrench, Battery, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'rental',
      icon: Bike,
      title: 'Electric Bike Rental',
      description: 'Flexible rental options for all your mobility needs',
      features: [
        'Daily, weekly, and monthly rental plans',
        'Well-maintained, premium electric bikes',
        'Free helmet and safety gear included',
        'Flexible pickup and delivery options',
        'No hidden charges',
        '24/7 roadside assistance'
      ],
      link: '/services/rental'
    },
    {
      id: 'repair',
      icon: Wrench,
      title: 'Electric Bike Services',
      description: 'Professional maintenance and repair services',
      features: [
        'Complete diagnostic and troubleshooting',
        'Motor and electrical system repairs',
        'Brake and suspension servicing',
        'Software updates and calibration',
        'Preventive maintenance programs',
        'Genuine parts and accessories'
      ],
      link: '/services/repair'
    },
    {
      id: 'batteries',
      icon: Battery,
      title: 'Lithium Batteries',
      description: 'High-performance battery solutions',
      features: [
        'Premium lithium-ion batteries',
        'Extended range and durability',
        'Fast charging capabilities',
        'Battery health diagnostics',
        'Warranty and after-sales support',
        'Eco-friendly battery recycling'
      ],
      link: '/services/batteries'
    },
    {
      id: 'parts',
      icon: Settings,
      title: 'Spare Parts',
      description: 'Genuine parts and accessories',
      features: [
        'Original manufacturer parts',
        'Wide range of accessories',
        'Quality assured components',
        'Expert installation service',
        'Quick availability and delivery'
      ],
      link: '/services/parts'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 font-roboto">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Comprehensive electric mobility solutions for Uppal and surrounding areas. 
            From rentals to maintenance, we provide everything you need for sustainable transportation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-text">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-dark-text mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="border-t border-gray-200 pt-6">
                  <Link
                    to={service.link}
                    className="w-full bg-brand-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-dark-green transition-colors flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
              Service Areas
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              We proudly serve Uppal and surrounding areas with reliable electric mobility solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background-gray rounded-lg">
              <h3 className="text-xl font-semibold text-dark-text mb-4">Primary Service Area</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Uppal</li>
                <li>• Mallapur</li>
                <li>• Gokul Nagar</li>
                <li>• Boduppal</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-background-gray rounded-lg">
              <h3 className="text-xl font-semibold text-dark-text mb-4">Extended Service Area</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Nagole</li>
                <li>• LB Nagar</li>
                <li>• Dilsukhnagar</li>
                <li>• Kothapet</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-background-gray rounded-lg">
              <h3 className="text-xl font-semibold text-dark-text mb-4">Delivery Available</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Free delivery within 5km</li>
                <li>• Pickup and drop service</li>
                <li>• Emergency roadside assistance</li>
                <li>• 24/7 support coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-green to-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-roboto">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Contact us today for personalized service recommendations and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors hover-scale"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+919951912925"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-green transition-all duration-300 hover-scale"
            >
              Call Now: +91 99519 12925
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
