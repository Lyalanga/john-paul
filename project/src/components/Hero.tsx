import React from 'react';
import { ArrowRight, Laptop, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Professional Tech Services & Design Solutions
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg">
            Expert computer maintenance and creative graphic design services in Tanzania. 
            Fast, reliable, and affordable solutions for all your tech needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Laptop size={20} className="mr-2" />
              Tech Services
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Palette size={20} className="mr-2" />
              Design Services
            </button>
          </div>
          
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Client 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Client 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Client 3" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Client 4" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            </div>
            <p className="ml-4 text-white">Trusted by 500+ satisfied clients in Tanzania</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;