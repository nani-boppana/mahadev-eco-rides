
import React, { useState, useCallback } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { 
  sanitizeInput, 
  validateEmail, 
  validatePhone, 
  validateName, 
  validateMessage,
  createRateLimiter 
} from '../utils/security';

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
  general?: string;
}

// Create rate limiter: max 3 submissions per 5 minutes
const rateLimiter = createRateLimiter(3, 5 * 60 * 1000);

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

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate and sanitize name
    const sanitizedName = sanitizeInput(formData.name);
    if (!validateName(sanitizedName)) {
      newErrors.name = 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes';
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate phone (if provided)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
    }
    
    // Validate and sanitize message
    const sanitizedMessage = sanitizeInput(formData.message);
    if (!validateMessage(sanitizedMessage)) {
      newErrors.message = 'Message must be between 10-1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) {
      return;
    }

    // Rate limiting check
    const userIdentifier = formData.email || 'anonymous';
    if (!rateLimiter(userIdentifier)) {
      setErrors({ general: 'Too many submissions. Please wait 5 minutes before trying again.' });
      toast.error('Rate limit exceeded. Please wait before submitting again.');
      return;
    }

    if (!validateForm()) {
      toast.error('Please correct the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Sanitize all inputs before processing
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: formData.email.toLowerCase().trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: sanitizeInput(formData.message)
      };

      console.log('Secure form submission:', sanitizedData);
      
      // Simulate form processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you! Your message has been sent securely. We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
      setErrors({ general: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting, validateForm]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Basic input length limits for security
    const maxLengths: Record<string, number> = {
      name: 50,
      email: 254,
      phone: 20,
      message: 1000
    };
    
    if (maxLengths[name] && value.length > maxLengths[name]) {
      return; // Prevent input beyond max length
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-text max-w-3xl mx-auto">
            Ready to experience eco-friendly mobility? Contact us for rentals, services, or any questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-dark-text mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-text">Phone</h4>
                  <p className="text-gray-600">+91 99519 12925</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-text">Email</h4>
                  <p className="text-gray-600">mahadevelectricmobility@gmail.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-text">Location</h4>
                  <p className="text-gray-600">Gokul Nagar, Mallapur</p>
                  <p className="text-gray-600">Hyderabad, Telangana</p>
                  <p className="text-sm text-gray-500">Serving Uppal and surrounding areas</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-background-gray rounded-lg">
              <h4 className="text-lg font-semibold text-dark-text mb-2">Business Hours</h4>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
                <p className="text-sm text-brand-green font-semibold">Emergency services available 24/7</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background-gray rounded-lg p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-6">Send us a Message</h3>
              
              {errors.general && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
              )}
              
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
                    maxLength={50}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-light-gray'
                    }`}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                    autoComplete="name"
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
                    maxLength={254}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-light-gray'
                    }`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                    autoComplete="email"
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
                    maxLength={20}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-light-gray'
                    }`}
                    placeholder="+91 XXXXX XXXXX"
                    disabled={isSubmitting}
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark-text mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                    disabled={isSubmitting}
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
                  maxLength={1000}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-light-gray'
                  }`}
                  placeholder="Tell us about your requirements or questions..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/1000 characters</p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover-scale ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-brand-green text-white hover:bg-dark-green'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                * Required fields. We'll respond within 24 hours.<br />
                <span className="text-xs">Your information is secure and will not be shared.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
