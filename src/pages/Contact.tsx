import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Calendar, Clock, User, Video } from 'lucide-react';
import { useContact } from '../hooks/useContact';

export function Contact() {
  const { submitContactForm, loading: submitting } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const { success, error } = await submitContactForm(formData);
    
    if (success) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setError(error || 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our services? Ready to start your Web3 finance journey? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-reveal">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3 slide-up">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 slide-up stagger-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none focus:scale-105"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span className="text-lg font-semibold">{submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 slide-up stagger-1">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-reveal">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 glass-effect rounded-lg card-hover text-reveal stagger-1">
                    <Mail className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                      <p className="text-gray-300">info@r3alm.com</p>
                      <p className="text-gray-300">support@r3alm.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 glass-effect rounded-lg card-hover text-reveal stagger-2">
                    <Phone className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 glass-effect rounded-lg card-hover text-reveal stagger-3">
                    <MapPin className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                      <p className="text-gray-300">123 Blockchain Avenue</p>
                      <p className="text-gray-300">Web3 District, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-reveal">
                  Quick <span className="text-[#FFD700]">Answers</span>
                </h3>
                <div className="mb-6">
                  <Link
                    to="/faq"
                    className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 text-sm font-medium"
                  >
                    <span>View All FAQs</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      question: "How do I get started with Capital R3alm?",
                      answer: "Simply create an account and explore our subsidiaries and products to find the right investment opportunities for you."
                    },
                    {
                      question: "Are your platforms regulated?",
                      answer: "Yes, we maintain full compliance with FINRA, SEC, and other relevant regulatory bodies through our partnerships."
                    },
                    {
                      question: "What's the minimum investment amount?",
                      answer: "Minimum investments vary by product and opportunity. Many of our offerings start as low as $100 for fractional ownership."
                    }
                  ].map((faq, index) => (
                    <div key={index} className={`glass-effect rounded-lg p-4 hover:bg-[#1E1E1E]/80 transition-colors duration-300 card-hover text-reveal stagger-${index + 1}`}>
                      <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Scheduler */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Schedule a <span className="gradient-text">Consultation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Book a personalized consultation with our experts to discuss your investment goals and explore our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-effect rounded-xl p-8 text-center scale-on-hover slide-up">
              <User className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating" />
              <h3 className="text-xl font-bold text-white mb-3">Investment Consultation</h3>
              <p className="text-gray-400 text-sm mb-4">Discuss investment strategies and portfolio optimization</p>
              <div className="text-[#FFD700] font-semibold mb-4">30 minutes</div>
              <button className="w-full px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic">
                Schedule Now
              </button>
            </div>

            <div className="glass-effect rounded-xl p-8 text-center scale-on-hover slide-up stagger-1">
              <Video className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating stagger-1" />
              <h3 className="text-xl font-bold text-white mb-3">Platform Demo</h3>
              <p className="text-gray-400 text-sm mb-4">Live demonstration of our products and features</p>
              <div className="text-[#FFD700] font-semibold mb-4">45 minutes</div>
              <button className="w-full px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic">
                Book Demo
              </button>
            </div>

            <div className="glass-effect rounded-xl p-8 text-center scale-on-hover slide-up stagger-2">
              <Phone className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating stagger-2" />
              <h3 className="text-xl font-bold text-white mb-3">Technical Support</h3>
              <p className="text-gray-400 text-sm mb-4">Get help with platform issues and technical questions</p>
              <div className="text-[#FFD700] font-semibold mb-4">15 minutes</div>
              <button className="w-full px-6 py-3 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 button-magnetic">
                Get Support
              </button>
            </div>
          </div>

          {/* Appointment Booking Interface */}
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calendar className="h-16 w-16 text-[#00BFFF] mx-auto mb-4 floating" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Book Your <span className="gradient-text">Appointment</span>
              </h3>
              <p className="text-gray-300">
                Choose your preferred time and consultation type. We'll send you a confirmation email with meeting details.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Appointment Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Consultation Type
                  </label>
                  <select className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300">
                    <option value="">Select consultation type</option>
                    <option value="investment">Investment Consultation (30 min)</option>
                    <option value="demo">Platform Demo (45 min)</option>
                    <option value="support">Technical Support (15 min)</option>
                    <option value="partnership">Partnership Discussion (60 min)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <select className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300">
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM EST</option>
                      <option value="10:00">10:00 AM EST</option>
                      <option value="11:00">11:00 AM EST</option>
                      <option value="14:00">2:00 PM EST</option>
                      <option value="15:00">3:00 PM EST</option>
                      <option value="16:00">4:00 PM EST</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What would you like to discuss?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your investment goals, questions, or specific topics you'd like to cover..."
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg font-semibold">Schedule Appointment</span>
                </button>
              </div>

              {/* Available Times Preview */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 text-reveal">Available This Week</h4>
                  <div className="space-y-3">
                    {[
                      { day: 'Today', date: 'Jan 16', times: ['2:00 PM', '3:00 PM', '4:00 PM'] },
                      { day: 'Tomorrow', date: 'Jan 17', times: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'] },
                      { day: 'Thursday', date: 'Jan 18', times: ['9:00 AM', '11:00 AM', '2:00 PM'] },
                      { day: 'Friday', date: 'Jan 19', times: ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM'] }
                    ].map((day, index) => (
                      <div key={index} className={`p-4 bg-[#1E1E1E]/50 rounded-lg card-hover text-reveal stagger-${index + 1}`}>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-white font-semibold">{day.day}</div>
                            <div className="text-gray-400 text-sm">{day.date}</div>
                          </div>
                          <Clock className="h-5 w-5 text-[#00BFFF]" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {day.times.map((time, timeIndex) => (
                            <button
                              key={timeIndex}
                              className="px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] rounded-full text-sm hover:bg-[#00BFFF] hover:text-white transition-all duration-300"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-xl">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#00BFFF]" />
                    <span>What to Expect</span>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Personalized discussion about your financial goals</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Live demonstration of relevant platforms</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Q&A session with our investment experts</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Customized investment recommendations</span>
                    </div>
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