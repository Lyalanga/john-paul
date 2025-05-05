import React from 'react';
import { ExternalLink, Monitor, PenTool, Laptop, Printer } from 'lucide-react';

type PortfolioItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

const portfolioData: PortfolioItemType[] = [
  {
    id: 1,
    title: "Computer Lab Setup",
    category: "Tech Services",
    description: "Complete setup and maintenance of a 30-computer lab for a local college in Dar es Salaam.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    tags: ["Network Setup", "Hardware Installation", "Maintenance"]
  },
  {
    id: 2,
    title: "Business Branding Package",
    category: "Design",
    description: "Full branding package including logo, business cards, and marketing materials for a local startup.",
    image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg",
    tags: ["Logo Design", "Branding", "Print Design"]
  },
  {
    id: 3,
    title: "Data Recovery Project",
    category: "Tech Services",
    description: "Successfully recovered critical business data from damaged hard drives for a local company.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    tags: ["Data Recovery", "Hardware Repair", "Emergency Service"]
  },
  {
    id: 4,
    title: "Corporate Website Design",
    category: "Design",
    description: "Modern website design and development for a leading Tanzanian business consulting firm.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tags: ["Web Design", "UI/UX", "Development"]
  }
];

const PortfolioCard: React.FC<{ item: PortfolioItemType }> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-800 text-white text-sm px-3 py-1 rounded-full">
          {item.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg text-blue-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-blue-800 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors flex items-center justify-center">
          View Details
          <ExternalLink size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const Listings: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">OUR WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful tech and design projects. From computer maintenance
            to creative design solutions, we deliver excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.map(item => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Listings;