import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, Mail, Clock, CheckCircle, Users, Headphones, Star } from 'lucide-react';

export function PrioritySupport() {
  const supportBenefits = [
    {
      icon: Clock,
      title: "Faster Response Times",
      description: "Get responses within 1-2 hours instead of standard 24-48 hours"
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Access to specialized support agents familiar with your account and needs"
    },
    {
      icon: Headphones,
      title: "Multiple Channels",
      description: "Priority access via phone, chat, email, and video calls when needed"
    },
    {
      icon: Star,
      title: "VIP Treatment",
      description: "Skip the queue and get immediate attention for all your support requests"
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Priority Phone Support",
      availability: "24/7",
      responseTime: "Immediate",
      description: "Direct phone line with no wait times for urgent issues"
    },
    {
      icon: MessageCircle,
      title: "Live Chat Priority",
      availability: "24/7",
      responseTime: "< 5 minutes",
      description: "Jump to the front of the chat queue for instant assistance"
    },
    {
      icon: Mail,
      title: "Priority Email",
      availability: "24/7",
      responseTime: "< 2 hours",
      description: "Dedicated email channel with guaranteed fast response times"
    }
  ];

  const supportLevels = [
    {
      level: "Standard Support",
      responseTime: "24-48 hours",
      channels: ["Email", "Chat"],
      features: ["Basic troubleshooting", "General inquiries", "Standard documentation"]
    },
    {
      level: "Priority Support",
      responseTime: "1-2 hours",
      channels: ["Email", "Chat", "Phone"],
      features: ["Priority queue", "Dedicated agents", "Advanced troubleshooting", "Account specialists"]
    },
    {
      level: "VIP Support",
      responseTime: "< 30 minutes",
      channels: ["Email", "Chat", "Phone", "Video"],
      features: ["Immediate response", "Personal account manager", "Custom solutions", "Direct developer access"]
    }
  ];

  const supportTeam = [
    {
      role: "Technical Specialists",
      expertise: "Platform issues, integrations, API support",
      availability: "24/7"
    },
    {
      role: "Investment Advisors",
      expertise: "Portfolio guidance, investment strategies, market insights",
      availability: "Business hours"
    },
    {
      role: "Compliance Experts",
      expertise: "Regulatory questions, KYC/AML, legal compliance",
      availability: "Business hours"
    },
    {
      role: "Account Managers",
      expertise: "Account setup, feature guidance, personalized assistance",
      availability: "Extended hours"
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/waitlist"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Waitlist
          </Link>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Priority <span className="gradient-text">Support</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated support channels and priority assistance for all your questions and technical needs
            </p>
          </div>
        </div>
      </section>

      {/* Support Benefits */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Priority Support <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive advantages that ensure you get the help you need, when you need it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportBenefits.map((benefit, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <benefit.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Support <span className="gradient-text">Channels</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get priority assistance whenever you need it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 text-center scale-on-hover slide-up stagger-${index + 1}`}>
                <channel.icon className="h-16 w-16 text-[#00BFFF] mx-auto mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{channel.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-reveal stagger-1">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-[#FFD700] font-semibold">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-2">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-[#00BFFF] font-semibold">{channel.responseTime}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-reveal stagger-3">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels Comparison */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Support <span className="gradient-text">Levels</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare different support tiers and see what priority support offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${index + 1} ${index === 1 ? 'ring-2 ring-[#00BFFF] ring-opacity-50' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{level.level}</h3>
                <div className="text-[#FFD700] font-semibold text-lg mb-4 text-reveal stagger-1">{level.responseTime}</div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 text-reveal stagger-2">Channels:</h4>
                  <div className="flex flex-wrap gap-2">
                    {level.channels.map((channel, channelIndex) => (
                      <span key={channelIndex} className="bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full text-sm">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 text-reveal stagger-3">Features:</h4>
                  <div className="space-y-2">
                    {level.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center space-x-3 text-reveal stagger-${featureIndex + 1}`}>
                        <CheckCircle className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Expert Support <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized experts ready to help with any aspect of our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTeam.map((member, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-[#00BFFF] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 text-reveal">{member.role}</h3>
                    <p className="text-gray-300 mb-3 text-reveal stagger-1">{member.expertise}</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-[#FFD700]" />
                      <span className="text-[#FFD700] text-sm font-medium text-reveal stagger-2">{member.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Response Time <span className="gradient-text">Guarantee</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our commitment to priority support response times
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="slide-up">
                <div className="text-4xl font-bold text-[#FFD700] mb-2 text-reveal">&lt; 30min</div>
                <div className="text-white font-semibold mb-2 text-reveal stagger-1">Critical Issues</div>
                <div className="text-gray-400 text-sm text-reveal stagger-2">Platform outages, security concerns</div>
              </div>
              <div className="slide-up stagger-1">
                <div className="text-4xl font-bold text-[#00BFFF] mb-2 text-reveal">&lt; 2hrs</div>
                <div className="text-white font-semibold mb-2 text-reveal stagger-1">General Support</div>
                <div className="text-gray-400 text-sm text-reveal stagger-2">Account issues, feature questions</div>
              </div>
              <div className="slide-up stagger-2">
                <div className="text-4xl font-bold text-white mb-2 text-reveal">&lt; 24hrs</div>
                <div className="text-white font-semibold mb-2 text-reveal stagger-1">Complex Requests</div>
                <div className="text-gray-400 text-sm text-reveal stagger-2">Custom solutions, integrations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Get <span className="gradient-text">Priority Support</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join our waitlists to secure priority support access and dedicated assistance
          </p>
          
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <Headphones className="h-5 w-5" />
            <span className="text-lg font-semibold">Access Priority Support</span>
          </Link>
        </div>
      </section>
    </div>
  );
}