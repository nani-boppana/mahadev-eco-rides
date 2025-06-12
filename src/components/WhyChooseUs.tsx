
import React from 'react';
import { CheckCircle, Star, Wrench, Battery } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: '100% Electric Solutions',
      description: 'Completely eco-friendly mobility options for a sustainable future.'
    },
    {
      icon: Star,
      title: 'Expert Technicians',
      description: 'Highly trained professionals with years of experience in electric vehicles.'
    },
    {
      icon: Wrench,
      title: 'Quality Service',
      description: 'Premium maintenance and repair services to keep your e-bike in perfect condition.'
    },
    {
      icon: Battery,
      title: 'Genuine Parts',
      description: 'Original spare parts and high-quality batteries for optimal performance.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-dark-text mb-8 font-roboto">
              Why Choose Mahadev Electric Mobility?
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex items-start space-x-4 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-text mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">Trusted by 500+ customers</span>
              </div>
              <p className="text-gray-600">
                "Excellent service and reliable e-bikes. Mahadev Electric Mobility 
                has transformed my daily commute!"
              </p>
              <p className="text-dark-text font-semibold mt-2">- Satisfied Customer</p>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-green to-light-green rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">98%</div>
                <div className="text-xl mb-2">Customer Satisfaction</div>
                <div className="text-lg opacity-90">Rating</div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce">
              <Battery className="h-8 w-8 text-brand-green" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center animate-pulse">
              <Wrench className="h-8 w-8 text-brand-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
