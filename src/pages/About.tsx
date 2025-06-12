
import React from 'react';
import { CheckCircle, Star, Wrench, Battery, Bike } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 font-roboto">
            About Mahadev Electric Mobility
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Leading the electric mobility revolution in Uppal, Hyderabad with sustainable, 
            reliable, and professional transportation solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize urban transportation in Hyderabad, 
                Mahadev Electric Mobility has been at the forefront of the electric vehicle movement. 
                We recognized the need for sustainable, affordable, and reliable mobility solutions 
                in the rapidly growing Uppal area.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple belief: everyone deserves access to clean, 
                efficient transportation. Today, we're proud to serve hundreds of customers 
                with our comprehensive range of electric bike services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-green to-light-green rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Bike className="h-24 w-24 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">100% Electric</h3>
                  <p className="text-lg">Committed to eco-friendly mobility solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-background-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Driving sustainable transportation forward with integrity, quality, and customer focus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Quality Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in all our services, from bike maintenance 
                to customer support, ensuring complete satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make puts our customers first. We listen, understand, 
                and deliver solutions that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Battery className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to reducing carbon footprint and promoting eco-friendly 
                transportation solutions for a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Experienced professionals dedicated to providing exceptional electric mobility services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-dark-text mb-6">
                Experienced Technicians
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">Certified Electric Vehicle Specialists</h4>
                    <p className="text-gray-600">Our team is trained and certified in electric vehicle maintenance and repair.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">3+ Years Experience</h4>
                    <p className="text-gray-600">Extensive experience working with various electric bike models and brands.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">Customer Service Excellence</h4>
                    <p className="text-gray-600">Committed to providing friendly, professional, and helpful service.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-green to-light-green rounded-2xl p-8 text-white text-center">
              <Wrench className="h-20 w-20 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Expert Service</h3>
              <p className="text-lg mb-6">
                Our skilled technicians ensure your electric bike runs at peak performance
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Bikes Serviced</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
              Why Choose Mahadev Electric Mobility?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">Premium Batteries</h3>
              <p className="text-gray-600">High-quality lithium batteries for maximum range and durability.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">Expert Maintenance</h3>
              <p className="text-gray-600">Professional maintenance services to keep your e-bike running smoothly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your electric mobility needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">Trusted Service</h3>
              <p className="text-gray-600">Reliable and trustworthy service with 500+ satisfied customers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
