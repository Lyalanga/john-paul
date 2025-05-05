import React, { useState } from 'react';
import { MessageSquare, User, Mail, Phone, Send, Laptop, PenTool } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'tech',
    service: 'laptop-repair'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType: 'tech',
        service: 'laptop-repair'
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-semibold">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
              Need Our Services?
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you need computer repairs or design services, we're here to help.
              Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Phone size={24} className="text-blue-800" />,
                  title: "Call us",
                  content: "+255 XXX XXX XXX"
                },
                {
                  icon: <Mail size={24} className="text-blue-800" />,
                  title: "Email us",
                  content: "contact@techservice.tz"
                },
                {
                  icon: <MessageSquare size={24} className="text-blue-800" />,
                  title: "WhatsApp",
                  content: "Message us directly"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Request Service</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+255 XXX XXX XXX"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-gray-700 mb-2">Service Type</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          value="tech"
                          checked={formData.serviceType === 'tech'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Laptop size={18} className="mr-1" />
                        Tech Service
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          value="design"
                          checked={formData.serviceType === 'design'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <PenTool size={18} className="mr-1" />
                        Design Service
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Specific Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {formData.serviceType === 'tech' ? (
                      <>
                        <option value="laptop-repair">Laptop Repair</option>
                        <option value="pc-maintenance">PC Maintenance</option>
                        <option value="data-recovery">Data Recovery</option>
                        <option value="network-setup">Network Setup</option>
                      </>
                    ) : (
                      <>
                        <option value="logo-design">Logo Design</option>
                        <option value="branding">Branding Package</option>
                        <option value="web-design">Web Design</option>
                        <option value="print-design">Print Design</option>
                      </>
                    )}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your needs..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;