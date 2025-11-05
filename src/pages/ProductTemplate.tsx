import React from 'react';
import { ExternalLink, CheckCircle, ArrowRight, Hexagon, Clock, Zap } from 'lucide-react';

interface ProductData {
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  synergy: string;
  appUrl: string;
  status: string;
  image: string;
}

interface Props {
  data: ProductData;
}

export function ProductTemplate({ data }: Props) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Coming Soon':
        return 'bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30';
      case 'Beta Access':
        return 'bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0 blockchain-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Hexagon className="h-16 w-16 text-[#00BFFF] floating" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">R3</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">{data.name}</h1>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(data.status)} mt-2 pulse-glow`}>
                    {data.status === 'Coming Soon' && <Clock className="h-4 w-4 inline mr-2" />}
                    {data.status === 'Beta Access' && <Zap className="h-4 w-4 inline mr-2" />}
                    {data.status}
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-1">{data.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-2">
                {data.status === 'Beta Access' ? (
                  <a
                    href={data.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg font-semibold">Access Beta</span>
                    <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ) : (
                  <button className="px-8 py-4 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2">
                    <span className="text-lg font-semibold">Join Waitlist</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src={data.image}
                alt={data.name}
                className="rounded-xl shadow-2xl w-full scale-on-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Key <span className="text-[#00BFFF]">Features</span>
              </h2>
              <div className="space-y-4">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 glass-effect rounded-lg hover:bg-[#1E1E1E]/80 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Key <span className="text-[#FFD700]">Benefits</span>
              </h2>
              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 glass-effect rounded-lg hover:bg-[#1E1E1E]/80 transition-all duration-300">
                    <div className="w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#121212] font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ecosystem <span className="gradient-text">Synergy</span>
            </h2>
            <p className="text-xl text-gray-300">
              How this product integrates with our broader ecosystem
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-12 text-center">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {data.synergy}
            </p>
            
            {data.status === 'Beta Access' ? (
              <a
                href={data.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow space-x-3"
              >
                <span className="text-lg font-semibold">Access Beta Version</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            ) : (
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow space-x-3">
                <span className="text-lg font-semibold">Join Waitlist</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}