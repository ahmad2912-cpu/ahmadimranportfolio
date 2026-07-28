import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { submitContactForm } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    const response = await submitContactForm(formData);

    if (response.success) {
      setStatus({ loading: false, success: true, message: response.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus({ loading: false, success: false, message: response.message || 'Error submitting message.' });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something <span className="text-gradient-emerald">Great Together</span>
          </h2>
          <p className="text-slate-400 text-base">
            Open for Software Engineering, MERN Stack, Backend, or Full-Stack roles. Send a direct message below to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block uppercase">Email Address</span>
                <a href="mailto:ahmadimranmughal.2912@gmail.com" className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                  ahmadimranmughal.2912@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block uppercase">Phone Number</span>
                <a href="tel:+923204751625" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                  (+92)-320-4751625
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block uppercase">LinkedIn Profile</span>
                <a
                  href="https://linkedin.com/in/ahmad-imran-396025266"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-white hover:text-purple-400 transition-colors"
                >
                  linkedin.com/in/ahmad-imran-396025266
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block uppercase">Current Location</span>
                <p className="text-sm font-bold text-white">Lahore, Pakistan</p>
              </div>
            </div>

          </div>

          {/* Right Column: Functional MERN Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl">
              
              <h3 className="text-xl font-bold text-white mb-6">Send Ahmad a Direct Message</h3>

              {status.success === true && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.success === false && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Opportunity / Collaboration Inquiry"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Message *</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-4 rounded-xl glow-button text-slate-950 font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                >
                  <span>{status.loading ? 'Sending Message...' : 'Send Message to Express REST API'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
