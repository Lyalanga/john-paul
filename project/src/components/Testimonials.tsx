import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tenant",
    comment: "I found my dream apartment through RentEase. The integrated WhatsApp Business feature made communication with the landlord so easy!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Owner",
    comment: "As a landlord, I love how simple it is to list properties and collect payments via M-Pesa. It's streamlined my entire rental business.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Real Estate Agent",
    comment: "The Google Drive integration is a game-changer. All my client documents are organized and accessible from anywhere.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what property owners, tenants, and real estate 
            professionals have to say about our platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop View */}
          {!isMobile && (
            <div className="flex items-stretch gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 flex-1 flex flex-col
                    ${index === currentIndex ? 'scale-105 shadow-xl border-blue-100' : 'opacity-70'}`}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">{testimonial.comment}</p>
                </div>
              ))}
            </div>
          )}

          {/* Mobile View */}
          {isMobile && (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-blue-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <p className="text-gray-600">{testimonials[currentIndex].comment}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-blue-50 text-blue-900 p-2 rounded-full shadow-md transition-colors"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-blue-50 text-blue-900 p-2 rounded-full shadow-md transition-colors"
            onClick={nextTestimonial}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;