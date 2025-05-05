import React from 'react';
import { CreditCard, Clock, Shield, DollarSign } from 'lucide-react';

const PaymentSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold">SIMPLE PAYMENTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Fast and Secure Payments via M-Pesa
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We've integrated M-Pesa for seamless payments between tenants and landlords. 
            Send and receive rent payments with just a few clicks, all for just $2.25 per transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <CreditCard className="text-orange-400" size={40} />,
              title: "Pay Rent Easily",
              description: "Send your monthly rent payments directly through the platform with M-Pesa integration."
            },
            { 
              icon: <Clock className="text-orange-400" size={40} />,
              title: "Instant Transfers",
              description: "Money is transferred instantly, so landlords receive payments right away."
            },
            { 
              icon: <Shield className="text-orange-400" size={40} />,
              title: "Secure Transactions",
              description: "All payments are protected with bank-level security and encryption."
            },
            { 
              icon: <DollarSign className="text-orange-400" size={40} />,
              title: "Affordable Fees",
              description: "Low transaction fee of just $2.25 per payment via M-Pesa."
            }
          ].map((item, index) => (
            <div key={index} className="bg-blue-800/50 p-6 rounded-xl border border-blue-700 hover:bg-blue-800 transition-colors duration-300 text-center">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Learn More About Payments
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;