
import React from 'react';
import { CheckCircle, Star, Wrench, Battery, Zap, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: '100% Electric Solutions',
      description: 'Completely eco-friendly mobility options for a sustainable future.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Highly trained professionals with years of experience in electric vehicles.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Quality Service',
      description: 'Premium maintenance and repair services to keep your e-bike in perfect condition.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Battery,
      title: 'Genuine Parts',
      description: 'Original spare parts and high-quality batteries for optimal performance.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-brand-green/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-light-green/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/10 rounded-full animate-pulse animation-delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center bg-brand-green/10 text-brand-green px-4 py-2 rounded-full mb-6 font-semibold">
              <Zap className="h-4 w-4 mr-2" />
              Why Choose Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-8 font-roboto leading-tight">
              Why Choose 
              <span className="block text-brand-green">Mahadev Electric Mobility?</span>
            </h2>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group flex items-start space-x-6 animate-fade-in hover:translate-x-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0`}>
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-text mb-3 group-hover:text-brand-green transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2 font-semibold">Trusted by 500+ customers</span>
              </div>
              <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-4">
                "Excellent service and reliable e-bikes. Mahadev Electric Mobility 
                has transformed my daily commute!"
              </blockquote>
              <p className="text-dark-text font-bold">- Satisfied Customer</p>
            </div>
          </div>
          
          {/* Right Column - Enhanced Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-green via-dark-green to-light-green rounded-3xl p-12 flex items-center justify-center shadow-2xl transform hover:rotate-1 transition-transform duration-500">
              <div className="text-center text-white">
                <div className="relative mb-8">
                  <div className="text-7xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">98%</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl mb-3 font-bold">Customer Satisfaction</div>
                <div className="text-lg opacity-90 mb-8">Rating</div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Support</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-bounce">
              <Battery className="h-10 w-10 text-brand-green" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
              <Wrench className="h-10 w-10 text-brand-green" />
            </div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl shadow-xl flex items-center justify-center animate-bounce animation-delay-300">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
