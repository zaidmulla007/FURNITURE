"use client";

import PageTransition from "../components/PageTransition";
import FadeIn from "../components/FadeIn";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Quality First",
      description: "We never compromise on quality. Every product is carefully selected and inspected to meet our high standards."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Customer Focus",
      description: "Your satisfaction is our success. We listen to your needs and deliver solutions that exceed expectations."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sustainability",
      description: "We're committed to environmental responsibility, sourcing materials sustainably and minimizing waste."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🏆" },
    { number: "300+", label: "Happy Clients", icon: "💰" },
    { number: "15+", label: "Years Experience", icon: "🔧" },
    { number: "25+", label: "Expert Team", icon: "⭐" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop&q=80')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b4d33]/90 via-[#3b4d33]/70 to-[#23c9bc]/80"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Martini Furniture</h1>
              <p className="text-xl md:text-2xl text-gray-100 font-light">
                Rooted in the heart of the UAE—bringing comfort, style, and elegance to modern living
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn direction="left">
                <div>
                  <div className="inline-block bg-[#23c9bc]/10 text-[#23c9bc] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    OUR STORY
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6 leading-tight">Crafting Spaces with Passion</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Martini Furniture was founded with a vision to bring nature-inspired elegance into every home and
                    office across the UAE. We believe that your space should reflect your personality while providing
                    comfort and functionality.
                  </p>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    From our humble beginnings, we've grown into a trusted name in furniture and interior solutions.
                    Our commitment to quality, craftsmanship, and customer satisfaction has been the cornerstone of
                    our success.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Today, we offer a comprehensive range of products including blinds, flooring, wallpaper, carpets,
                    and furniture - all designed to elevate your space naturally.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1000&fit=crop&q=80"
                      alt="Modern Office Space"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#23c9bc]/20 rounded-2xl -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#3b4d33]/20 rounded-2xl -z-10"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Our Values</h2>
                <p className="text-gray-600 text-lg md:text-xl">The principles that guide everything we do</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 0.15}>
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-[#23c9bc] hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-[#23c9bc] to-[#1db3a8] text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e293b] mb-4 text-center group-hover:text-[#3b4d33] transition-colors">{value.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-[#3b4d33] to-[#2a3826] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Martini Furniture</h2>
                <p className="text-gray-200 text-lg md:text-xl">Your trusted partner for interior solutions</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                    <h3 className="text-lg font-semibold text-gray-200">{stat.label}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Meet Our Team</h2>
                <p className="text-gray-600 text-lg md:text-xl">Experienced professionals dedicated to your satisfaction</p>
              </div>
            </FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn direction="left">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80"
                    alt="Professional Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div>
                  <div className="inline-block bg-[#23c9bc]/10 text-[#23c9bc] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    LEADERSHIP
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">AFSAR - Managing Director</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Leading our team with vision and expertise, AFSAR brings years of experience in the furniture
                    and interior design industry. Under his guidance, Martini Furniture has become a trusted name
                    throughout the UAE.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our team consists of skilled craftsmen, experienced designers, and dedicated installation professionals
                    who work together to bring your vision to life. We believe in continuous training and staying updated
                    with the latest trends and technologies in the industry.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+971505522437" className="inline-flex items-center gap-3 bg-[#3b4d33] text-white px-6 py-3 rounded-md hover:bg-[#2a3826] transition-colors shadow-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-semibold">+971 50 552 2437</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">Ready to Work With Us?</h2>
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Let's discuss your project and bring your vision to life with our expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#3b4d33] text-white px-10 py-4 rounded-md hover:bg-[#2a3826] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/catalogs"
                  className="bg-white border-2 border-[#3b4d33] text-[#3b4d33] px-10 py-4 rounded-md hover:bg-[#3b4d33] hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  View Our Products
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
