import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, FileText, Mail, Phone } from 'lucide-react';

export function PrivacyPolicy() {
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
              <Shield className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-gray-400">
              <p>Last updated: January 15, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Eye className="h-8 w-8 text-[#00BFFF] mr-3" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We collect information you provide directly to us, including:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Name, email address, and contact information</li>
                <li>• Account credentials and authentication data</li>
                <li>• Financial information for investment transactions</li>
                <li>• Identity verification documents (KYC/AML compliance)</li>
                <li>• Investment preferences and risk profile</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Automatically Collected Information</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We automatically collect certain information when you use our services:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Device information and browser type</li>
                <li>• IP address and location data</li>
                <li>• Usage patterns and platform interactions</li>
                <li>• Transaction history and investment activity</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center mt-12">
                <Lock className="h-8 w-8 text-[#00BFFF] mr-3" />
                How We Use Your Information
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Provide and maintain our investment platforms</li>
                <li>• Process transactions and manage your investments</li>
                <li>• Verify your identity and ensure regulatory compliance</li>
                <li>• Communicate with you about your account and services</li>
                <li>• Improve our platforms and develop new features</li>
                <li>• Detect and prevent fraud and security threats</li>
                <li>• Comply with legal and regulatory requirements</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center mt-12">
                <FileText className="h-8 w-8 text-[#00BFFF] mr-3" />
                Information Sharing and Disclosure
              </h2>
              
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Service Providers</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We may share your information with trusted third-party service providers who assist us in:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Payment processing and financial services</li>
                <li>• Identity verification and compliance checks</li>
                <li>• Cloud hosting and data storage</li>
                <li>• Customer support and communication</li>
                <li>• Analytics and platform optimization</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Legal Requirements</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We may disclose your information when required by law or to:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Comply with legal processes and regulatory requirements</li>
                <li>• Protect our rights, property, or safety</li>
                <li>• Investigate potential violations of our terms</li>
                <li>• Respond to government requests and court orders</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center mt-12">
                <Shield className="h-8 w-8 text-[#00BFFF] mr-3" />
                Data Security
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• AES-256 encryption for data at rest and in transit</li>
                <li>• Multi-factor authentication and access controls</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Secure cloud infrastructure with redundancy</li>
                <li>• Employee training on data protection practices</li>
                <li>• Incident response and breach notification procedures</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Your Rights and Choices</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Access and review your personal data</li>
                <li>• Correct inaccurate or incomplete information</li>
                <li>• Request deletion of your data (subject to legal requirements)</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Data portability and export options</li>
                <li>• Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Cookies and Tracking</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We use cookies and similar technologies to:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze platform usage and performance</li>
                <li>• Provide personalized content and recommendations</li>
                <li>• Ensure security and prevent fraud</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">International Transfers</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data in accordance with 
                applicable privacy laws and regulations.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Children's Privacy</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Our services are not intended for individuals under 18 years of age. We do not 
                knowingly collect personal information from children. If we become aware that we 
                have collected information from a child, we will take steps to delete it promptly.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Changes to This Policy</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on our website and updating the 
                "Last updated" date. Your continued use of our services constitutes acceptance 
                of the updated policy.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center">
                <Mail className="h-8 w-8 text-[#00BFFF] mr-3" />
                Contact Us
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#1E1E1E] rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 text-[#00BFFF] mr-3" />
                    <span>privacy@r3alm.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 text-[#00BFFF] mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="text-gray-300">
                    <strong>Mailing Address:</strong><br />
                    Capital R3alm Privacy Officer<br />
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