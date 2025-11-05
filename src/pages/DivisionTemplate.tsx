import React from 'react';
import { ExternalLink, CheckCircle, ArrowRight, Hexagon } from 'lucide-react';

interface DivisionData {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  valueProposition: string;
  appUrl: string;
  image: string;
}

interface Props {
  data: DivisionData;
}

export function DivisionTemplate({ data }: Props) {
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
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">{data.subtitle}</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-2">{data.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-3">
                <a
                  href={data.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Access App</span>
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <button className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
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

      {/* Key Features */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive capabilities designed to revolutionize your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, index) => (
              <div key={index} className={`glass-effect rounded-lg p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 text-reveal">
            Value <span className="gradient-text">Proposition</span>
          </h2>
          <div className="glass-effect rounded-2xl p-12 scale-on-hover">
            <p className="text-2xl text-gray-300 leading-relaxed mb-8 text-reveal stagger-1">
              "{data.valueProposition}"
            </p>
            <a
              href={data.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
            >
              <span className="text-lg font-semibold">Get Started Today</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}