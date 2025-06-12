
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Daily Commuter',
      content: 'Amazing service! The e-bike rental made my daily commute to Uppal much more convenient and eco-friendly. Highly recommend Mahadev Electric Mobility!',
      rating: 5,
      avatar: 'RK',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Vikram Singh',
      role: 'Business Owner',
      content: 'Professional service and excellent maintenance support. Their team fixed my e-bike battery issue promptly. Great customer service!',
      rating: 5,
      avatar: 'VS',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Amit Patel',
      role: 'College Student',
      content: 'Affordable rental rates and well-maintained bikes. Perfect for students like me who need reliable transportation around Hyderabad.',
      rating: 5,
      avatar: 'AP',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background-gray to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-brand-green rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-light-green rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-brand-green/10 text-brand-green px-4 py-2 rounded-full mb-6 font-semibold">
            <Star className="h-4 w-4 mr-2" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-8 font-roboto">
            What Our Customers
            <span className="block text-brand-green">Say About Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-text max-w-3xl mx-auto">
            Real experiences from our satisfied customers across Uppal and Hyderabad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
              
              <div className="relative p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Quote className="h-6 w-6" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 group-hover:text-gray-800 transition-colors">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-text text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex -space-x-2 mr-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white`}>
                  {testimonial.avatar}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-dark-text">Join 500+ Happy Customers</div>
              <div className="text-gray-600 text-sm">Experience the difference today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
