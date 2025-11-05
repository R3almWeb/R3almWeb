import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, DollarSign, Percent, Gift, CheckCircle, Star, Target } from 'lucide-react';

export function SpecialPricing() {
  const pricingBenefits = [
    {
      icon: Percent,
      title: "Reduced Fees",
      description: "Up to 50% off standard management and transaction fees for the first year"
    },
    {
      icon: Gift,
      title: "Bonus Credits",
      description: "Receive $100-500 in platform credits based on your investment level"
    },
    {
      icon: Star,
      title: "Lifetime Discounts",
      description: "Lock in preferential rates that continue as long as you remain active"
    },
    {
      icon: Target,
      title: "Exclusive Tiers",
      description: "Access to VIP membership tiers not available to regular users"
    }
  ];

  const pricingTiers = [
    {
      name: "Early Bird",
      discount: "25% Off",
      investment: "$100 - $1,000",
      benefits: ["Reduced transaction fees", "$50 platform credit", "Priority support"],
      color: "from-[#00BFFF] to-[#0099CC]"
    },
    {
      name: "Pioneer",
      discount: "35% Off",
      investment: "$1,000 - $10,000",
      benefits: ["Reduced management fees", "$200 platform credit", "VIP support", "Exclusive webinars"],
      color: "from-[#FFD700] to-[#FFA500]"
    },
    {
      name: "Founder",
      discount: "50% Off",
      investment: "$10,000+",
      benefits: ["Maximum fee reduction", "$500 platform credit", "Personal advisor", "Beta feature access"],
      color: "from-[#9333EA] to-[#7C3AED]"
    }
  ];

  const feeComparison = [
    {
      service: "Management Fees",
      standard: "1.5% - 2.5%",
      earlyAccess: "0.75% - 1.25%",
      savings: "Up to 50%"
    },
    {
      service: "Transaction Fees",
      standard: "0.25% - 0.5%",
      earlyAccess: "0.1% - 0.25%",
      savings: "Up to 50%"
    },
    {
      service: "Trading Fees",
      standard: "0.1% - 0.3%",
      earlyAccess: "0.05% - 0.15%",
      savings: "Up to 50%"
    },
    {
      service: "Withdrawal Fees",
      standard: "$5 - $25",
      earlyAccess: "$2 - $12",
      savings: "Up to 50%"
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
              <TrendingUp className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Special <span className="gradient-text">Pricing</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive discounts and preferential fee structures for early supporters and beta testers
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Benefits */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Exclusive <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Special pricing advantages reserved for our early community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingBenefits.map((benefit, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <benefit.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Early Access <span className="gradient-text">Tiers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Different discount levels based on your investment commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`glass-effect rounded-2xl p-8 scale-on-hover slide-up stagger-${index + 1} ${index === 1 ? 'ring-2 ring-[#FFD700] ring-opacity-50' : ''}`}>
                <div className={`w-full h-2 bg-gradient-to-r ${tier.color} rounded-full mb-6`}></div>
                
                <h3 className="text-2xl font-bold text-white mb-2 text-reveal">{tier.name}</h3>
                <div className="text-3xl font-bold text-[#FFD700] mb-2 text-reveal stagger-1">{tier.discount}</div>
                <div className="text-gray-400 mb-6 text-reveal stagger-2">{tier.investment}</div>
                
                <div className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className={`flex items-center space-x-3 text-reveal stagger-${benefitIndex + 1}`}>
                      <CheckCircle className="h-5 w-5 text-[#00BFFF] flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Comparison */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Fee <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how much you can save with early access pricing
            </p>
          </div>

          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1E1E1E]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Standard Rate</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Early Access Rate</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {feeComparison.map((fee, index) => (
                    <tr key={index} className={`border-t border-[#333] ${index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#1A1A1A]'}`}>
                      <td className="px-6 py-4 text-white font-medium">{fee.service}</td>
                      <td className="px-6 py-4 text-center text-gray-400">{fee.standard}</td>
                      <td className="px-6 py-4 text-center text-[#00BFFF] font-semibold">{fee.earlyAccess}</td>
                      <td className="px-6 py-4 text-center text-[#FFD700] font-bold">{fee.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Potential <span className="gradient-text">Savings</span>
            </h2>
            <p className="text-xl text-gray-300">
              Example savings based on different investment amounts
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { investment: "$1,000", annualSavings: "$75", lifetimeSavings: "$750" },
                { investment: "$10,000", annualSavings: "$750", lifetimeSavings: "$7,500" },
                { investment: "$100,000", annualSavings: "$7,500", lifetimeSavings: "$75,000" }
              ].map((example, index) => (
                <div key={index} className={`text-center slide-up stagger-${index + 1}`}>
                  <div className="text-2xl font-bold text-[#00BFFF] mb-2 text-reveal">{example.investment}</div>
                  <div className="text-sm text-gray-400 mb-4 text-reveal stagger-1">Investment Amount</div>
                  <div className="text-xl font-semibold text-[#FFD700] mb-2 text-reveal stagger-2">{example.annualSavings}</div>
                  <div className="text-sm text-gray-400 mb-4 text-reveal stagger-3">Annual Savings</div>
                  <div className="text-lg font-bold text-white text-reveal stagger-4">{example.lifetimeSavings}</div>
                  <div className="text-sm text-gray-400 text-reveal stagger-5">10-Year Savings</div>
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
            Lock In Your <span className="gradient-text">Savings</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join our waitlists now to secure exclusive pricing that could save you thousands
          </p>
          
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <DollarSign className="h-5 w-5" />
            <span className="text-lg font-semibold">Secure Special Pricing</span>
          </Link>
        </div>
      </section>
    </div>
  );
}