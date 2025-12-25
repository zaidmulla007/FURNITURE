"use client";

import { useState } from "react";
import PageTransition from "../components/PageTransition";
import FadeIn from "../components/FadeIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/971505522437?text=${message}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b4d33]/90 via-[#3b4d33]/70 to-[#23c9bc]/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light">
              Get in touch with us for a free consultation
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <FadeIn direction="left">
            <div>
              <h2 className="text-3xl font-bold text-[#3b4d33] mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Have a question about our products or services? We're here to help! Reach out to us through
                any of the methods below, and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#23c9bc] text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#3b4d33] mb-1">Phone</h3>
                    <p className="text-gray-600">+971 50 552 2437</p>
                    <p className="text-sm text-gray-500 mt-1">Available 7 AM – 5 PM, Mon-Sat</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#23c9bc] text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#3b4d33] mb-1">Email</h3>
                    <p className="text-gray-600">martiniinterior@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#23c9bc] text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#3b4d33] mb-1">Location</h3>
                    <p className="text-gray-600">United Arab Emirates</p>
                    <p className="text-sm text-gray-500 mt-1">Serving all Emirates</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#23c9bc] text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#3b4d33] mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/971505522437"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#23c9bc] hover:text-[#1db3a8] font-semibold"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Quick response guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3b4d33] mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#3b4d33] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#23c9bc]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#23c9bc]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#23c9bc]"
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#23c9bc]"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Blinds & Curtains">Blinds & Curtains</option>
                    <option value="Flooring">Flooring</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Wallpaper">Wallpaper</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#23c9bc]"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#23c9bc] text-white px-8 py-4 rounded-full hover:bg-[#1db3a8] transition-colors duration-200 font-semibold text-lg"
                >
                  Send Message via WhatsApp
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you'll be redirected to WhatsApp to complete your message
                </p>
              </form>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">We Serve All Emirates</h2>
            <p className="text-gray-600 text-lg">Professional installation services across the UAE</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-2">Free Consultation</h3>
              <p className="text-gray-600">Expert advice on products and solutions for your space</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-2">Free Measurement</h3>
              <p className="text-gray-600">Accurate on-site measurements for perfect fit</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-2">Free Quote</h3>
              <p className="text-gray-600">Transparent pricing with no hidden costs</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
