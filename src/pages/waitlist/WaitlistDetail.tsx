import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle, Clock, Star, TrendingUp, Shield, DollarSign, BarChart3, GraduationCap, Hexagon, AlertCircle } from 'lucide-react';
import { waitlistDivisions } from '../../data/waitlist';
import { useWaitlist } from '../../hooks/useWaitlist';

export function WaitlistDetail() {
  const { joinWaitlist, loading } = useWaitlist();
  const { id } = useParams<{ id: string }>();
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState('');

  const item = waitlistDivisions.find(div => div.id === id);

  if (!item) {
    return <Navigate to="/waitlist" replace />;
  }

  const handleSignup = async () => {
    // Clear previous error
    setError('');
    
    // Validate email
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Submit to waitlist
    const { success, error: submitError } = await joinWaitlist(email, item.id, item.name);
    
    if (success) {
      setSignedUp(true);
      setEmail(''); // Clear email field
      setTimeout(() => {
        setSignedUp(false);
      }, 3000);
    } else {
      setError(submitError || 'Failed to join waitlist');
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

  const CategoryIcon = getCategoryIcon(item.category);

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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">{item.name}</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">{item.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-reveal stagger-2">
                <div className={`px-4 py-2 rounded-full text-sm font-medium border ${getPriorityColor(item.priority)} pulse-glow`}>
                  <Clock className="h-4 w-4 inline mr-2" />
                  {item.expectedLaunch}
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CategoryIcon className="h-5 w-5 text-[#00BFFF]" />
                  <span>{item.category}</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-3">
                {item.description}
              </p>
              
              <div className="flex gap-4 text-reveal stagger-4">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                />
                <button
                  type="button"
                  onClick={handleSignup}
                  disabled={signedUp || loading}
                  className="px-8 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
                >
                  {signedUp ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Joined!</span>
                    </>
                  ) : loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#121212]"></div>
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      <span>Join Waitlist</span>
                    </>
                  )}
                </button>
              </div>
              {error && (
                <div className="flex items-center space-x-2 text-red-400 text-sm mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}
              {signedUp && (
                <div className="flex items-center space-x-2 text-green-400 text-sm mt-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Successfully joined the waitlist! Check your email for confirmation.</span>
                </div>
              )}
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src={item.image}
                alt={item.name}
                className="rounded-xl shadow-2xl w-full scale-on-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary capabilities designed to transform the financial landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {item.features.map((feature, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Platform <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advantages that set this platform apart from traditional solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {item.benefits.map((benefit, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#121212] font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Development <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-xl text-gray-300">
              Expected milestones and launch schedule
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { phase: "Planning", status: "Complete", description: "Market research and technical planning" },
                { phase: "Development", status: "In Progress", description: "Core platform development and testing" },
                { phase: "Beta Testing", status: "Upcoming", description: "Limited beta release for waitlist members" },
                { phase: "Launch", status: item.expectedLaunch, description: "Full public launch and availability" }
              ].map((milestone, index) => (
                <div key={index} className={`text-center slide-up stagger-${index + 1}`}>
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl ${
                    milestone.status === 'Complete' ? 'bg-green-500' :
                    milestone.status === 'In Progress' ? 'bg-[#00BFFF]' :
                    milestone.status === 'Upcoming' ? 'bg-[#FFD700]' :
                    'bg-gradient-to-br from-[#00BFFF] to-[#FFD700]'
                  } floating`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-reveal">{milestone.phase}</h3>
                  <div className={`text-sm font-medium mb-2 ${
                    milestone.status === 'Complete' ? 'text-green-400' :
                    milestone.status === 'In Progress' ? 'text-[#00BFFF]' :
                    milestone.status === 'Upcoming' ? 'text-[#FFD700]' :
                    'text-[#FFD700]'
                  }`}>
                    {milestone.status}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed text-reveal stagger-1">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Be Among the <span className="gradient-text">First</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join the waitlist for {item.name} and get exclusive early access when we launch
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
              />
              <button
                onClick={handleSignup}
                disabled={signedUp}
                className="px-8 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
              >
                {signedUp ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Joined!</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    <span>Join</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Get exclusive updates, early access, and special launch benefits
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}