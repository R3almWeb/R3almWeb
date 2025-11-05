import React from 'react';
import { Code, Database, Shield, Cloud, Layers, Zap } from 'lucide-react';

export function TechArchitecture() {
  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      icon: Code,
      description: "Modern, responsive user interfaces built with cutting-edge web technologies"
    },
    {
      category: "Backend",
      technologies: ["Supabase", "PostgreSQL", "Node.js", "GraphQL"],
      icon: Database,
      description: "Scalable backend infrastructure with real-time capabilities and robust data management"
    },
    {
      category: "Blockchain",
      technologies: ["Ethereum", "Solana", "Smart Contracts", "Web3.js"],
      icon: Layers,
      description: "Multi-chain blockchain integration for tokenization and DeFi protocols"
    },
    {
      category: "Infrastructure",
      technologies: ["AWS", "Docker", "Kubernetes", "CloudFlare"],
      icon: Cloud,
      description: "Enterprise-grade cloud infrastructure ensuring 99.9% uptime and global accessibility"
    },
    {
      category: "Security",
      technologies: ["OAuth 2.0", "AES-256", "Multi-Sig", "HSM"],
      icon: Shield,
      description: "Bank-level security protocols protecting user assets and sensitive information"
    },
    {
      category: "Analytics",
      technologies: ["TensorFlow", "Python", "BigQuery", "Apache Kafka"],
      icon: Zap,
      description: "AI-powered analytics and machine learning for market predictions and risk assessment"
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical <span className="gradient-text">Architecture</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge technology stack designed for scale, security, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full flex items-center justify-center mr-4 floating">
                    <stack.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-reveal">{stack.category}</h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 text-reveal stagger-1">{stack.description}</p>

                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className={`px-3 py-2 bg-[#1E1E1E]/50 rounded-lg text-center card-hover text-reveal stagger-${techIndex + 1}`}>
                      <span className="text-[#FFD700] font-medium text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              System <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-level overview of our distributed system design
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Frontend Layer */}
              <div className="text-center space-y-4 slide-up">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full mx-auto flex items-center justify-center floating">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white text-reveal">Frontend Layer</h3>
                <p className="text-gray-300 text-reveal stagger-1">React-based applications with responsive design and real-time updates</p>
              </div>

              {/* Backend Layer */}
              <div className="text-center space-y-4 slide-up stagger-1">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full mx-auto flex items-center justify-center floating stagger-1">
                  <Database className="h-10 w-10 text-[#121212]" />
                </div>
                <h3 className="text-2xl font-bold text-white text-reveal">Backend Layer</h3>
                <p className="text-gray-300 text-reveal stagger-1">Supabase-powered backend with PostgreSQL and real-time subscriptions</p>
              </div>

              {/* Blockchain Layer */}
              <div className="text-center space-y-4 slide-up stagger-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#9333EA] to-[#7C3AED] rounded-full mx-auto flex items-center justify-center floating stagger-2">
                  <Layers className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white text-reveal">Blockchain Layer</h3>
                <p className="text-gray-300 text-reveal stagger-1">Multi-chain integration with Ethereum and Solana networks</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-[#1E1E1E]/50 rounded-xl slide-up stagger-3">
              <h3 className="text-2xl font-bold text-white mb-6 text-center text-reveal">
                Key <span className="text-[#00BFFF]">Architecture</span> Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Scalability", description: "Microservices architecture that scales with demand" },
                  { title: "Security", description: "Multi-layered security with encryption at rest and in transit" },
                  { title: "Reliability", description: "99.9% uptime with automated failover and redundancy" },
                  { title: "Performance", description: "Optimized for speed with global CDN and caching strategies" }
                ].map((principle, index) => (
                  <div key={index} className={`flex items-start space-x-4 text-reveal stagger-${index + 1}`}>
                    <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center flex-shrink-0 mt-1 pulse-glow">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1 text-reveal">{principle.title}</h4>
                      <p className="text-gray-300 text-sm text-reveal stagger-1">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Standards */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Security <span className="gradient-text">Standards</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security measures protecting your assets and data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "End-to-End Encryption", description: "AES-256 encryption for all sensitive data" },
              { title: "Multi-Signature Wallets", description: "Enhanced security for blockchain transactions" },
              { title: "Regular Audits", description: "Quarterly security audits by leading firms" },
              { title: "Compliance Monitoring", description: "Real-time monitoring for regulatory compliance" }
            ].map((standard, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#121212]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{standard.title}</h3>
                <p className="text-gray-400 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}