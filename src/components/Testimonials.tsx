import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Daily Commuter',
      content: 'Amazing service! The e-bike rental made my daily commute to Uppal much more convenient and eco-friendly. Highly recommend Mahadev Electric Mobility!',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Business Owner',
      content: 'Professional service and excellent maintenance support. Their team fixed my e-bike battery issue promptly. Great customer service!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'College Student',
      content: 'Affordable rental rates and well-maintained bikes. Perfect for students like me who need reliable transportation around Hyderabad.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-text max-w-3xl mx-auto">
            Real experiences from our satisfied customers across Uppal and Hyderabad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">"</span>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-700 text-lg italic text-center mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Author */}
              <div className="text-center">
                <h4 className="font-semibold text-dark-text text-lg">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
