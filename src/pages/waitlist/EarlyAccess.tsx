import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Users, Shield, CheckCircle, Zap, Target, Globe } from 'lucide-react';

export function EarlyAccess() {
  const earlyAccessBenefits = [
    {
      icon: Clock,
      title: "First Access",
      description: "Be among the first 100 users to access new platforms before public launch"
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join a select group of early adopters and industry pioneers"
    },
    {
      icon: Shield,
      title: "VIP Treatment",
      description: "Receive priority support and direct access to development team"
    },
    {
      icon: Zap,
      title: "Feature Preview",
      description: "Get sneak peeks of upcoming features and product roadmaps"
    }
  ];

  const platforms = [
    {
      name: "R3alm Ventures",
      access: "2-3 weeks early",
      features: ["Beta testing", "Feature feedback", "Direct developer access"]
    },
    {
      name: "R3alm Insurance",
      access: "1-2 weeks early",
      features: ["Risk assessment tools", "Coverage customization", "Claims testing"]
    },
    {
      name: "R3alm Lending",
      access: "3-4 weeks early",
      features: ["Lending algorithms", "Risk models", "Portfolio tools"]
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
              <Star className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Early <span className="gradient-text">Access</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get exclusive early access to our revolutionary financial platforms before they're available to the public
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Early Access <span className="gradient-text">Advantages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive benefits reserved for our most valued early supporters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {earlyAccessBenefits.map((benefit, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <benefit.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Access Timeline */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Platform <span className="gradient-text">Access Timeline</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How early you'll get access to each upcoming platform
            </p>
          </div>

          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 slide-up stagger-${index + 1}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 text-reveal">{platform.name}</h3>
                    <div className="text-[#FFD700] font-semibold text-lg text-reveal stagger-1">{platform.access}</div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-white mb-4 text-reveal stagger-2">Early Access Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-center space-x-3 text-reveal stagger-${featureIndex + 1}`}>
                          <CheckCircle className="h-5 w-5 text-[#00BFFF] flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              How Early Access <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to get exclusive early access to our platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Join Waitlist", description: "Sign up for early access notifications" },
              { step: "2", title: "Get Invited", description: "Receive exclusive invitation email" },
              { step: "3", title: "Beta Access", description: "Access platform before public launch" },
              { step: "4", title: "Provide Feedback", description: "Help shape the final product" }
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
            Ready for <span className="gradient-text">Early Access?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join our waitlists now to secure your early access to revolutionary financial platforms
          </p>
          
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <Star className="h-5 w-5" />
            <span className="text-lg font-semibold">Join Waitlists Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}