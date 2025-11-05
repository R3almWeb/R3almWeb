import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Share2, TrendingUp, Shield, Zap, CheckCircle, Users, Globe, Target, ArrowRight, Hexagon, MessageSquare } from 'lucide-react';

export function RConnect() {
  const keyFeatures = [
    {
      icon: Share2,
      title: "Multi-Platform Publishing",
      description: "Centralized content creation and distribution across all major social media platforms with automated scheduling."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Comprehensive engagement metrics, audience demographics, and performance insights across all platforms."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user workflows with approval processes, content calendars, and role-based access controls."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated content compliance checking for platform guidelines and regulatory requirements."
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      description: "Unified inbox for managing comments, messages, and interactions across all social platforms."
    },
    {
      icon: Globe,
      title: "Brand Consistency",
      description: "Maintain consistent brand voice and visual identity across all social media channels."
    }
  ];

  const platformIntegrations = [
    {
      title: "Social Media Platforms",
      platforms: ["Facebook", "Twitter", "LinkedIn", "Instagram"],
      features: "Full API integration",
      automation: "High"
    },
    {
      title: "Content Management",
      platforms: ["WordPress", "Medium", "Ghost", "Custom CMS"],
      features: "Cross-posting",
      automation: "Medium"
    },
    {
      title: "Analytics Tools",
      platforms: ["Google Analytics", "Facebook Insights", "Twitter Analytics"],
      features: "Unified reporting",
      automation: "High"
    },
    {
      title: "Design Tools",
      platforms: ["Canva", "Adobe Creative", "Figma", "Custom Templates"],
      features: "Asset management",
      automation: "Medium"
    }
  ];

  const platformBenefits = [
    "Centralized social media management",
    "Automated content scheduling",
    "Real-time engagement monitoring",
    "Brand consistency enforcement",
    "Team collaboration tools",
    "Compliance and approval workflows",
    "Advanced analytics and reporting",
    "Multi-platform campaign management"
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0 blockchain-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/products"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Products
          </Link>

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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Connect</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Social Realm</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-2">
                Comprehensive social media publishing platform that drives interaction and loyalty 
                through integrated management, advanced analytics, and automated workflows for 
                enhanced brand visibility and community engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-3">
                <a
                  href="https://connect.r3alm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Access Platform</span>
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <button className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">Watch Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
                alt="R3alm Connect Platform"
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
              Social Media <span className="gradient-text">Management</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete social media management solution for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <feature.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Platform <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamless integration with all major social media and content platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformIntegrations.map((integration, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{integration.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6 text-reveal stagger-1">
                  {integration.platforms.map((platform, platformIndex) => (
                    <span key={platformIndex} className="bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full text-sm">
                      {platform}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-reveal stagger-2">
                  <div className="text-center">
                    <div className="text-[#FFD700] font-bold text-lg">{integration.features}</div>
                    <div className="text-gray-400 text-sm">Features</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00BFFF] font-bold text-lg">{integration.automation}</div>
                    <div className="text-gray-400 text-sm">Automation</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h2 className="text-4xl font-bold text-white mb-8 text-reveal">
                Why Choose <span className="text-[#00BFFF]">R3alm Connect?</span>
              </h2>
              <div className="space-y-4">
                {platformBenefits.map((benefit, index) => (
                  <div key={index} className={`flex items-start space-x-4 text-reveal stagger-${(index % 4) + 1}`}>
                    <CheckCircle className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative slide-up stagger-1">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-reveal">Platform Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-reveal stagger-1">
                    <span className="text-gray-300">Posts Managed</span>
                    <span className="text-[#FFD700] font-bold text-xl">2M+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-2">
                    <span className="text-gray-300">Active Brands</span>
                    <span className="text-[#00BFFF] font-bold text-xl">1,500+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-3">
                    <span className="text-gray-300">Engagement Increase</span>
                    <span className="text-white font-bold text-xl">340%</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-4">
                    <span className="text-gray-300">Time Saved</span>
                    <span className="text-[#FFD700] font-bold text-xl">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Content <span className="gradient-text">Workflow</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamlined process from content creation to publication and analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Create Content", description: "Design and write engaging content" },
              { step: "2", title: "Schedule & Approve", description: "Plan publication and get approvals" },
              { step: "3", title: "Multi-Platform Publish", description: "Distribute across all channels" },
              { step: "4", title: "Analyze & Optimize", description: "Track performance and improve" }
            ].map((item, index) => (
              <div key={index} className={`text-center slide-up stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl floating">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-reveal">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-reveal stagger-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Amplify Your <span className="gradient-text">Social Presence</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join successful brands using integrated social media management
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-2">
            <a
              href="https://connect.r3alm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Start Managing</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Request Demo</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}