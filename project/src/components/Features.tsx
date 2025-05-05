import React from 'react';
import { Monitor, Cpu, Palette, Laptop, PenTool, Wifi, HardDrive, Printer } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-blue-800 font-bold">{price}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const services = [
    {
      icon: <Laptop size={24} className="text-blue-700" />,
      title: "Laptop Repair",
      description: "Professional laptop repair services including screen replacement, keyboard fixing, and hardware upgrades.",
      price: "From TSh 10,000"
    },
    {
      icon: <Cpu size={24} className="text-blue-700" />,
      title: "PC Maintenance",
      description: "Complete PC servicing, virus removal, software installation, and system optimization.",
      price: "From TSh 10,000"
    },
    {
      icon: <HardDrive size={24} className="text-blue-700" />,
      title: "Data Recovery",
      description: "Recovery of lost data from damaged hard drives, SSDs, and other storage devices.",
      price: "From TSh 5,000"
    },
    {
      icon: <Wifi size={24} className="text-blue-700" />,
      title: "Network Setup",
      description: "Installation and configuration of home and office networks, including Wi-Fi setup.",
      price: "From TSh 10,000"
    },
    {
      icon: <PenTool size={24} className="text-blue-700" />,
      title: "Logo Design",
      description: "Custom logo design with unlimited revisions and multiple file formats.",
      price: "From TSh 5,000"
    },
    {
      icon: <Palette size={24} className="text-blue-700" />,
      title: "Branding Package",
      description: "Complete branding package including logo, business cards, and social media assets.",
      price: "From TSh 10,000"
    },
    {
      icon: <Monitor size={24} className="text-blue-700" />,
      title: "Web Design",
      description: "Custom website design with responsive layouts and modern aesthetics.",
      price: "From TSh 50,000"
    },
    {
      icon: <Printer size={24} className="text-blue-700" />,
      title: "Print Design",
      description: "Professional design for brochures, flyers, banners, and other marketing materials.",
      price: "From TSh 1,000"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Professional Tech & Design Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive computer maintenance and creative design services
            to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;