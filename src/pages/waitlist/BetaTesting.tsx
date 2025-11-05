import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, MessageSquare, Award, CheckCircle, Bug, Lightbulb, Target } from 'lucide-react';

export function BetaTesting() {
  const betaBenefits = [
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join a select group of beta testers and help shape the future of finance"
    },
    {
      icon: MessageSquare,
      title: "Direct Feedback",
      description: "Your input directly influences product development and feature prioritization"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Get credited as a founding beta tester and receive special recognition"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Help create products that will revolutionize how people invest and manage money"
    }
  ];

  const testingPhases = [
    {
      phase: "Alpha Testing",
      duration: "2-4 weeks",
      participants: "10-20 users",
      focus: "Core functionality and basic features",
      activities: ["Feature testing", "Bug reporting", "Usability feedback"]
    },
    {
      phase: "Closed Beta",
      duration: "4-8 weeks",
      participants: "50-100 users",
      focus: "Performance, security, and user experience",
      activities: ["Stress testing", "Security validation", "UI/UX feedback"]
    },
    {
      phase: "Open Beta",
      duration: "2-4 weeks",
      participants: "200-500 users",
      focus: "Scalability and final polish",
      activities: ["Load testing", "Final bug fixes", "Documentation review"]
    }
  ];

  const testingAreas = [
    {
      icon: Bug,
      title: "Bug Detection",
      description: "Help identify and report technical issues before public launch"
    },
    {
      icon: Lightbulb,
      title: "Feature Feedback",
      description: "Provide insights on new features and suggest improvements"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Test the platform's usability and overall user experience"
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Help validate security measures and identify potential vulnerabilities"
    }
  ];

  const rewards = [
    {
      title: "Beta Tester Badge",
      description: "Permanent recognition on your profile as a founding beta tester"
    },
    {
      title: "Exclusive Merchandise",
      description: "Limited edition Capital R3alm beta tester merchandise and swag"
    },
    {
      title: "Platform Credits",
      description: "$50-200 in platform credits based on your testing contributions"
    },
    {
      title: "Lifetime Benefits",
      description: "Permanent access to beta programs for all future products"
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
              <Shield className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Beta <span className="gradient-text">Testing</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help shape the final product with your feedback and insights while getting exclusive access to cutting-edge features
            </p>
          </div>
        </div>
      </section>

      {/* Beta Benefits */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Beta Testing <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why beta testing is valuable for both you and our development process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {betaBenefits.map((benefit, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <benefit.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Phases */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Testing <span className="gradient-text">Phases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive beta testing process ensures quality and reliability
            </p>
          </div>

          <div className="space-y-8">
            {testingPhases.map((phase, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 slide-up stagger-${index + 1}`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 text-reveal">{phase.phase}</h3>
                    <div className="text-[#FFD700] font-semibold text-reveal stagger-1">{phase.duration}</div>
                    <div className="text-gray-400 text-sm text-reveal stagger-2">{phase.participants}</div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-white mb-3 text-reveal stagger-3">Focus Area:</h4>
                    <p className="text-gray-300 mb-4 text-reveal stagger-4">{phase.focus}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 text-reveal stagger-5">Activities:</h4>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className={`flex items-center space-x-2 text-reveal stagger-${activityIndex + 1}`}>
                          <CheckCircle className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{activity}</span>
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

      {/* Testing Areas */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What You'll <span className="gradient-text">Test</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key areas where your feedback will make the biggest impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingAreas.map((area, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <area.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Tester Rewards */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Beta Tester <span className="gradient-text">Rewards</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition and rewards for your valuable contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rewards.map((reward, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-[#FFD700] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 text-reveal">{reward.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{reward.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              How to <span className="gradient-text">Participate</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to become a beta tester
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Join Waitlist", description: "Sign up for beta testing notifications" },
              { step: "2", title: "Get Selected", description: "Receive invitation to beta program" },
              { step: "3", title: "Start Testing", description: "Access beta platform and features" },
              { step: "4", title: "Provide Feedback", description: "Share insights and report issues" }
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
            Become a <span className="gradient-text">Beta Tester</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join our beta testing program and help create the future of Web3 finance
          </p>
          
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <Shield className="h-5 w-5" />
            <span className="text-lg font-semibold">Join Beta Program</span>
          </Link>
        </div>
      </section>
    </div>
  );
}