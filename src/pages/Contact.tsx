
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 font-roboto">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Get in touch with our electric mobility experts. We're here to help with rentals, 
            services, and all your e-bike needs in Uppal and surrounding areas.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 bg-background-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for emergencies</p>
              <a 
                href="tel:+919951912925" 
                className="text-2xl font-bold text-brand-green hover:text-dark-green transition-colors"
              >
                +91 99519 12925
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <a 
                href="mailto:mahadevelectricmobility@gmail.com" 
                className="text-lg font-semibold text-brand-green hover:text-dark-green transition-colors break-all"
              >
                mahadevelectricmobility@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Gokul Nagar, Mallapur<br />
                Hyderabad, Telangana
              </p>
              <p className="text-sm text-gray-500">Serving Uppal and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* How We Handle Your Enquiries */}
      <section className="py-20 bg-background-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
              How We Handle Your Enquiries
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Your enquiry information is sent directly to our team for immediate attention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Direct Email Notification</h3>
              <p className="text-gray-600">
                All form submissions are sent directly to our admin email: 
                <span className="font-semibold"> mahadevelectricmobility@gmail.com</span>
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Immediate Response</h3>
              <p className="text-gray-600">
                Our team monitors enquiries throughout business hours and responds within 24 hours for urgent requests.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Personal Follow-up</h3>
              <p className="text-gray-600">
                For service requests and rentals, we'll contact you directly to arrange scheduling and provide detailed information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
              Business Hours & Emergency Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background-gray rounded-lg p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-6">Regular Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-semibold text-dark-text">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-semibold text-dark-text">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-semibold text-dark-text">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-green text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Emergency Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 mt-1" />
                  <div>
                    <p className="font-semibold">24/7 Roadside Assistance</p>
                    <p className="text-sm opacity-90">Available for all rental customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 mt-1" />
                  <div>
                    <p className="font-semibold">Emergency Repairs</p>
                    <p className="text-sm opacity-90">After-hours emergency service available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 mt-1" />
                  <div>
                    <p className="font-semibold">Customer Support</p>
                    <p className="text-sm opacity-90">Round-the-clock phone support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
