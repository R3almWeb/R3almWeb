import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, CheckCircle, Star, TrendingUp, Shield, DollarSign, BarChart3, GraduationCap, ArrowRight, Hexagon, AlertCircle } from 'lucide-react';
import { waitlistDivisions, waitlistCategories, highPriorityWaitlist } from '../data/waitlist';
import { useWaitlist } from '../hooks/useWaitlist';

export function Waitlist() {
  const { joinWaitlist, loading } = useWaitlist();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [emailSignups, setEmailSignups] = useState<{[key: string]: string}>({});
  const [signedUp, setSignedUp] = useState<{[key: string]: boolean}>({});
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const filteredItems = waitlistDivisions.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleEmailChange = (id: string, email: string) => {
    setEmailSignups(prev => ({ ...prev, [id]: email }));
  };

  const handleSignup = async (id: string) => {
    const email = emailSignups[id];
    const item = waitlistDivisions.find(item => item.id === id);
    
    // Clear previous errors
    setErrors(prev => ({ ...prev, [id]: '' }));
    
    // Validate email
    if (!email) {
      setErrors(prev => ({ ...prev, [id]: 'Email is required' }));
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setErrors(prev => ({ ...prev, [id]: 'Please enter a valid email address' }));
      return;
    }
    
    if (!item) {
      setErrors(prev => ({ ...prev, [id]: 'Product not found' }));
      return;
    }

    // Submit to waitlist
    const { success, error } = await joinWaitlist(email, item.id, item.name);
    
    if (success) {
      setSignedUp(prev => ({ ...prev, [id]: true }));
      setEmailSignups(prev => ({ ...prev, [id]: '' })); // Clear email field
      setTimeout(() => {
        setSignedUp(prev => ({ ...prev, [id]: false }));
      }, 3000);
    } else {
      setErrors(prev => ({ ...prev, [id]: error || 'Failed to join waitlist' }));
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Investment': return TrendingUp;
      case 'Protection': return Shield;
      case 'Lending': return DollarSign;
      case 'Analytics': return BarChart3;
      case 'Education': return GraduationCap;
      default: return Star;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-[#FFD700] border-[#FFD700]/30 bg-[#FFD700]/10';
      case 'medium': return 'text-[#00BFFF] border-[#00BFFF]/30 bg-[#00BFFF]/10';
      case 'low': return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Coming <span className="gradient-text">Soon</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be the first to access our upcoming subsidiaries and revolutionary financial products. 
              Join the waitlist for exclusive early access and special launch benefits.
            </p>
          </div>

          {/* Priority Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {highPriorityWaitlist.map((item, index) => (
              <div key={item.id} className={`glass-effect rounded-2xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Hexagon className="h-12 w-12 text-[#00BFFF] floating" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">R3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white text-reveal">{item.name}</h3>
                      <p className="text-[#FFD700] font-semibold text-reveal stagger-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <Link
                    to={`/waitlist/${item.id}/info`}
                    className="px-3 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 button-magnetic text-sm font-medium flex-shrink-0"
                  >
                    More Info
                  </Link>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(item.priority)} pulse-glow`}>
                    {item.expectedLaunch}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-reveal stagger-2">{item.description}</p>
                
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailSignups[item.id] || ''}
                    onChange={(e) => handleEmailChange(item.id, e.target.value)}
                    className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                  />
                  <button
                    onClick={() => handleSignup(item.id)}
                    disabled={signedUp[item.id]}
                    className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
                  >
                    {signedUp[item.id] ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        <span>Joined!</span>
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        <span>Join Waitlist</span>
                      </>
                    )}
                  </button>
                </div>
                {errors[item.id] && (
                  <div className="flex items-center space-x-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors[item.id]}</span>
                  </div>
                )}
                {signedUp[item.id] && (
                  <div className="flex items-center space-x-2 text-green-400 text-sm mt-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Successfully joined the waitlist! Check your email for confirmation.</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {waitlistCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#00BFFF] text-white pulse-glow'
                    : 'bg-[#1E1E1E] text-gray-400 hover:bg-[#333] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Waitlist Items */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Upcoming <span className="gradient-text">Divisions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary financial products in development across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => {
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <div key={item.id} className={`glass-effect rounded-2xl overflow-hidden scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                  <div className="relative h-48">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(item.priority)}`}>
                        {item.expectedLaunch}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <CategoryIcon className="h-8 w-8 text-[#00BFFF]" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between w-full mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Hexagon className="h-10 w-10 text-[#00BFFF] floating" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">R3</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white text-reveal">{item.name}</h3>
                          <p className="text-[#FFD700] font-semibold text-reveal stagger-1">{item.subtitle}</p>
                        </div>
                      </div>
                      <Link
                        to={`/waitlist/${item.id}/info`}
                        className="px-3 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 button-magnetic text-sm font-medium flex-shrink-0"
                      >
                        More Info
                      </Link>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 text-reveal stagger-2">{item.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 text-reveal stagger-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {item.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-start space-x-3 text-reveal stagger-${featureIndex + 1}`}>
                            <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature}</p>
                          </div>
                        ))}
                        {item.features.length > 3 && (
                          <p className="text-[#FFD700] text-sm font-medium ml-5 text-reveal stagger-4">
                            +{item.features.length - 3} more features
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={emailSignups[item.id] || ''}
                        onChange={(e) => handleEmailChange(item.id, e.target.value)}
                        className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                      />
                      <button
                        onClick={() => handleSignup(item.id)}
                        disabled={signedUp[item.id]}
                        className="px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
                      >
                        {signedUp[item.id] ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            <span>Joined!</span>
                          </>
                        ) : (
                          <>
                            <Mail className="h-4 w-4" />
                            <span>Join</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Waitlist <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive advantages for early supporters and beta testers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Early Access",
                description: "Be among the first to use new platforms before public launch",
                link: "/waitlist/early-access"
              },
              {
                icon: TrendingUp,
                title: "Special Pricing",
                description: "Exclusive discounts and preferential fee structures",
                link: "/waitlist/special-pricing"
              },
              {
                icon: Shield,
                title: "Beta Testing",
                description: "Help shape the final product with your feedback and insights",
                link: "/waitlist/beta-testing"
              },
              {
                icon: Mail,
                title: "Priority Support",
                description: "Dedicated support channels and priority assistance",
                link: "/waitlist/priority-support"
              }
            ].map((benefit, index) => (
              <Link key={index} to={benefit.link} className={`glass-effect rounded-xl p-6 text-center scale-on-hover slide-up stagger-${index + 1} block hover:bg-[#1E1E1E]/80 transition-all duration-300`}>
                <benefit.icon className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating" />
                <h3 className="text-xl font-bold text-white mb-3 text-reveal">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed text-reveal stagger-1">{benefit.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Ready to Join the <span className="gradient-text">Future?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Don't miss out on the next generation of financial innovation. 
            Join our waitlists and be part of the Web3 revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-2">
            <Link
              to="/subsidiaries"
              className="inline-flex items-center px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Explore Current Subsidiaries</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Contact Us</span>
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}