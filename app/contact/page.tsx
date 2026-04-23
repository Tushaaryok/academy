import React from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Send, School } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <header className="text-center mb-16 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
            <Mail className="w-32 h-32 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4 relative z-10">Get in Touch</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Have questions about our curriculum or admissions? Our team is here to guide you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Bento */}
          <div className="lg:col-span-5 space-y-8">
            <div className="neo-out rounded-3xl p-8 bg-surface border border-white/50">
              <h2 className="text-2xl font-bold text-primary mb-8">Contact Information</h2>
              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<Phone className="text-primary w-6 h-6" />}
                  label="Phone Number"
                  value="+91 98765 43210"
                  sub="Mon-Fri, 8am to 4pm"
                />
                <ContactInfoItem 
                  icon={<Mail className="text-primary w-6 h-6" />}
                  label="Email Address"
                  value="admissions@krishnaacademy.edu"
                  sub="Reply within 24 hours"
                />
                <ContactInfoItem 
                  icon={<MapPin className="text-primary w-6 h-6" />}
                  label="Campus Location"
                  value="Rajkot Road, Upleta"
                  sub="Gujarat, India - 360490"
                />
              </div>
            </div>

            <div className="relative h-64 neo-out rounded-3xl overflow-hidden bg-primary-container/10 group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 glass-card rounded-2xl border border-white/30">
                  <School className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="font-bold text-primary">Visit Our Campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="neo-out rounded-3xl p-10 bg-surface border border-white/50 h-full">
              <h2 className="text-2xl font-bold text-primary mb-4">Send a Message</h2>
              <p className="text-secondary mb-10">Fill out the form below and we'll get back to you shortly.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormGroup label="Full Name" placeholder="John Doe" />
                  <FormGroup label="Email Address" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant ml-2 uppercase tracking-widest">Subject</label>
                  <select className="w-full bg-surface-container-low neo-in border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-container transition-all">
                    <option>Admission Inquiry</option>
                    <option>General Inquiry</option>
                    <option>Curriculum Questions</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant ml-2 uppercase tracking-widest">Message</label>
                  <textarea 
                    className="w-full bg-surface-container-low neo-in border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-container transition-all min-h-[150px]" 
                    placeholder="How can we help you?"
                  />
                </div>
                <button className="w-full py-5 gold-gradient rounded-2xl text-white text-xl font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer">
                  Send Message
                  <Send className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactInfoItem({ icon, label, value, sub }: any) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-secondary mb-1 uppercase tracking-widest">{label}</p>
        <p className="text-lg font-bold text-on-background">{value}</p>
        <p className="text-xs text-outline">{sub}</p>
      </div>
    </div>
  );
}

function FormGroup({ label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-on-surface-variant ml-2 uppercase tracking-widest">{label}</label>
      <input 
        type={type} 
        className="w-full bg-surface-container-low neo-in border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-container transition-all" 
        placeholder={placeholder} 
      />
    </div>
  );
}
