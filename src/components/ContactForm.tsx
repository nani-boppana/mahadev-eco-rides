
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { sanitizeInput, validateEmail, validatePhone, validateName, validateMessage } from '../utils/inputValidation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Electric Bike Rental',
    'Electric Bike Services',
    'Lithium Batteries',
    'Spare Parts',
    'General Inquiry'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be between 2-100 characters';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be between 10-1000 characters';
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting || !validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        service: sanitizeInput(formData.service),
        message: sanitizeInput(formData.message)
      };

      console.log('Form submission:', sanitizedData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you! We\'ll get back to you within 24 hours.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6 font-roboto">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience eco-friendly mobility? Contact us for rentals, services, or any questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark-text mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+91 99519 12925',
                  subtitle: 'Available 24/7',
                  gradient: 'from-green-500 to-emerald-600'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'mahadevelectricmobility@gmail.com',
                  subtitle: 'Response within 24 hours',
                  gradient: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Gokul Nagar, Mallapur, Hyderabad',
                  subtitle: 'Serving Uppal area',
                  gradient: 'from-purple-500 to-pink-600'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group hover-lift">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-text">{item.title}</h4>
                    <p className="text-gray-600">{item.content}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Business Hours */}
            <div className="mt-8 bg-background-gray rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-brand-green mr-3" />
                <h4 className="text-lg font-semibold text-dark-text">Business Hours</h4>
              </div>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
                <p className="text-brand-green font-semibold mt-2">Emergency services available 24/7</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background-gray rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-8">Send us a Message</h3>
              
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all disabled:opacity-50 ${
                      errors.name ? 'border-red-500' : 'border-light-gray'
                    }`}
                    placeholder="Your full name"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all disabled:opacity-50 ${
                      errors.email ? 'border-red-500' : 'border-light-gray'
                    }`}
                    placeholder="your.email@example.com"
                    maxLength={254}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-text mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all disabled:opacity-50 ${
                      errors.phone ? 'border-red-500' : 'border-light-gray'
                    }`}
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={15}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark-text mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-light-gray rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none disabled:opacity-50 ${
                    errors.message ? 'border-red-500' : 'border-light-gray'
                  }`}
                  placeholder="Tell us about your requirements..."
                  maxLength={1000}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                <p className="text-sm text-gray-500 mt-1">{formData.message.length}/1000 characters</p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-premium py-4 text-lg font-bold hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
