import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Users, Shield, Zap, CheckCircle, Building2, Globe, Target, ArrowRight, Hexagon, BookOpen, Award } from 'lucide-react';

export function REducation() {
  const keyFeatures = [
    {
      icon: BookOpen,
      title: "Interactive Courses",
      description: "Comprehensive course modules with hands-on exercises, quizzes, and practical applications for real-world learning."
    },
    {
      icon: Award,
      title: "Professional Certifications",
      description: "Industry-recognized certifications in Web3 finance, blockchain technology, and investment strategies."
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "One-on-one mentorship with industry experts and successful investors for personalized guidance."
    },
    {
      icon: Target,
      title: "Trading Simulations",
      description: "Virtual trading environments with real market data for risk-free practice and skill development."
    },
    {
      icon: Globe,
      title: "Community Learning",
      description: "Collaborative learning groups, discussion forums, and peer-to-peer knowledge sharing."
    },
    {
      icon: Zap,
      title: "Expert Workshops",
      description: "Live workshops and masterclasses led by industry experts and successful entrepreneurs."
    }
  ];

  const courseCategories = [
    {
      title: "Blockchain Fundamentals",
      description: "Understanding blockchain technology and cryptocurrencies",
      duration: "4-6 weeks",
      level: "Beginner",
      certification: "Yes"
    },
    {
      title: "DeFi Strategies",
      description: "Advanced decentralized finance protocols and strategies",
      duration: "6-8 weeks",
      level: "Intermediate",
      certification: "Yes"
    },
    {
      title: "Investment Analysis",
      description: "Professional investment analysis and portfolio management",
      duration: "8-10 weeks",
      level: "Advanced",
      certification: "Professional"
    }
  ];

  const platformBenefits = [
    "Enhanced financial literacy and knowledge",
    "Professional skill development and certification",
    "Networking opportunities with industry experts",
    "Practical investment experience through simulations",
    "Industry-recognized certifications and credentials",
    "Continuous learning support and resources",
    "Access to exclusive educational content",
    "Career advancement opportunities in Web3"
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0 blockchain-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/waitlist"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Waitlist
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Education</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Financial Learning</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-reveal stagger-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium border bg-gray-400/20 text-gray-400 border-gray-400/30 pulse-glow">
                  Expected Launch: Q3 2026
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <GraduationCap className="h-5 w-5 text-[#00BFFF]" />
                  <span>Education</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-3">
                Comprehensive educational platform offering courses, certifications, and mentorship programs 
                in Web3 finance and investment strategies, empowering users with knowledge and skills for 
                successful financial decision-making.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-4">
                <button className="px-8 py-4 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">Join Waitlist</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
                alt="R3alm Education Platform"
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
              Learning <span className="gradient-text">Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive educational infrastructure for Web3 finance mastery
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

      {/* Course Categories */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Course <span className="gradient-text">Catalog</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning paths from beginner to professional level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseCategories.map((course, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{course.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{course.description}</p>
                
                <div className="space-y-4 text-reveal stagger-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-[#00BFFF] font-bold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-[#FFD700] font-bold">{course.level}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Certification:</span>
                    <span className="text-white font-bold">{course.certification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Master <span className="gradient-text">Web3 Finance</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join the waitlist for R3alm Education and start your journey to financial expertise
          </p>
          
          <Link
            to="/waitlist/r3alm-education"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <GraduationCap className="h-5 w-5" />
            <span className="text-lg font-semibold">Join Waitlist</span>
          </Link>
        </div>
      </section>
    </div>
  );
}