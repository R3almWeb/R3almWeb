import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield, Mail, Phone } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Terms of <span className="gradient-text">Service</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms.
            </p>
            <div className="mt-6 text-gray-400">
              <p>Last updated: January 15, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FileText className="h-8 w-8 text-[#00BFFF] mr-3" />
                Acceptance of Terms
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                By accessing or using Capital R3alm's services, including our subsidiaries (R3alm Crowdfund, 
                R3alm Assets, R3alm Trade, R3alm Governance, and R3alm Connect), you agree to be bound by 
                these Terms of Service and all applicable laws and regulations. If you do not agree with 
                any of these terms, you are prohibited from using our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center mt-12">
                <Shield className="h-8 w-8 text-[#00BFFF] mr-3" />
                Eligibility and Account Registration
              </h2>
              
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Age and Jurisdiction Requirements</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To use our services, you must:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Be at least 18 years of age</li>
                <li>• Have the legal capacity to enter into binding agreements</li>
                <li>• Be a resident of a jurisdiction where our services are legally available</li>
                <li>• Not be prohibited from using financial services under applicable laws</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Account Security</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                You are responsible for:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Maintaining the confidentiality of your account credentials</li>
                <li>• All activities that occur under your account</li>
                <li>• Immediately notifying us of any unauthorized access</li>
                <li>• Providing accurate and up-to-date information</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center mt-12">
                <AlertTriangle className="h-8 w-8 text-[#FFD700] mr-3" />
                Investment Risks and Disclaimers
              </h2>
              
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Important Risk Disclosure</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All investments carry risk, including the potential loss of principal. Past performance 
                  does not guarantee future results. You should carefully consider your investment 
                  objectives, risk tolerance, and financial situation before investing.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Cryptocurrency and digital asset investments are highly volatile</li>
                  <li>• Real estate investments may be illiquid and subject to market fluctuations</li>
                  <li>• Crowdfunding investments in startups carry high risk of total loss</li>
                  <li>• Trading algorithms may not perform as expected</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Service Descriptions</h2>
              
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">R3alm Crowdfund</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Provides access to crowdfunding opportunities in startups, real estate, and other ventures. 
                All investments are subject to regulatory compliance and may have holding periods.
              </p>

              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">R3alm Assets</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Offers tokenized real estate investments with fractional ownership. Properties are 
                professionally managed, and returns depend on rental income and property appreciation.
              </p>

              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">R3alm Trade</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Provides AI-driven trading tools and algorithms. Trading involves substantial risk, 
                and you may lose more than your initial investment.
              </p>

              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">R3alm Governance</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Offers corporate governance and compliance tools. We do not provide legal advice, 
                and you should consult with qualified professionals for legal matters.
              </p>

              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">R3alm Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Provides social media management tools. You are responsible for compliance with 
                platform policies and applicable advertising regulations.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Fees and Payments</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Our fee structure includes:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Management fees ranging from 0.5% to 2% annually</li>
                <li>• Transaction fees of 0.1% to 0.5% per trade</li>
                <li>• Performance fees on certain investment products</li>
                <li>• Third-party fees for payment processing and compliance</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                All fees are disclosed before you invest. We reserve the right to modify fees with 
                30 days' notice.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Prohibited Activities</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                You may not use our services to:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Engage in money laundering or terrorist financing</li>
                <li>• Violate any applicable laws or regulations</li>
                <li>• Manipulate markets or engage in fraudulent activities</li>
                <li>• Access accounts that do not belong to you</li>
                <li>• Interfere with the operation of our platforms</li>
                <li>• Use our services for illegal gambling or other prohibited activities</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Intellectual Property</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                All content, trademarks, and intellectual property on our platforms are owned by 
                Capital R3alm or our licensors. You may not:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Copy, modify, or distribute our proprietary content</li>
                <li>• Use our trademarks without written permission</li>
                <li>• Reverse engineer our software or algorithms</li>
                <li>• Create derivative works based on our platforms</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Limitation of Liability</h2>
              
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAPITAL R3ALM SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Investment losses or poor performance of investments</li>
                  <li>• Technical failures or interruptions of service</li>
                  <li>• Unauthorized access to your account due to your negligence</li>
                  <li>• Third-party actions or market conditions beyond our control</li>
                  <li>• Indirect, incidental, or consequential damages</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Indemnification</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                You agree to indemnify and hold harmless Capital R3alm, its officers, directors, 
                employees, and agents from any claims, damages, or expenses arising from:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Your use of our services</li>
                <li>• Your violation of these terms</li>
                <li>• Your violation of applicable laws</li>
                <li>• Your investment decisions and their consequences</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Termination</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We may terminate or suspend your account at any time for:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Violation of these terms</li>
                <li>• Suspicious or fraudulent activity</li>
                <li>• Regulatory requirements</li>
                <li>• Extended inactivity</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Upon termination, you remain liable for all outstanding obligations, and certain 
                provisions of these terms will survive termination.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Dispute Resolution</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Any disputes arising from these terms or your use of our services will be resolved through:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Good faith negotiations between the parties</li>
                <li>• Binding arbitration if negotiations fail</li>
                <li>• Arbitration conducted under the rules of the American Arbitration Association</li>
                <li>• New York law governing the interpretation of these terms</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Changes to Terms</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We may modify these terms at any time. Material changes will be communicated through:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Email notification to your registered address</li>
                <li>• Prominent notice on our website</li>
                <li>• In-app notifications</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Continued use of our services after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center">
                <Mail className="h-8 w-8 text-[#00BFFF] mr-3" />
                Contact Information
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-[#1E1E1E] rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 text-[#00BFFF] mr-3" />
                    <span>legal@r3alm.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 text-[#00BFFF] mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="text-gray-300">
                    <strong>Legal Department:</strong><br />
                    Capital R3alm Legal Team<br />
                    123 Blockchain Avenue<br />
                    Web3 District, NY 10001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}