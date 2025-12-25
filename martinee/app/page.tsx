"use client";

import Link from "next/link";
import Image from "next/image";
import PageTransition from "./components/PageTransition";
import FadeIn from "./components/FadeIn";
import { motion } from "framer-motion";

export default function Home() {
  const categories = [
    { name: "Roller Blinds", image: "https://images.unsplash.com/photo-1620222071550-a5c7f8b600ed?w=800&h=600&fit=crop&q=80", href: "/catalogs/roller-blinds" },
    { name: "Vertical Blinds", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop&q=80", href: "/catalogs/vertical-blinds" },
    { name: "Wooden Blinds", image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&h=600&fit=crop&q=80", href: "/catalogs/wooden-blinds" },
    { name: "Carpet", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&h=600&fit=crop&q=80", href: "/catalogs/carpet" },
    { name: "Curtains", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop&q=80", href: "/catalogs/curtains" },
    { name: "Wallpaper", image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&h=600&fit=crop&q=80", href: "/catalogs/wallpaper" },
    { name: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80", href: "/catalogs/sofa" },
    { name: "LVT Flooring", image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=800&h=600&fit=crop&q=80", href: "/catalogs/lvt-flooring" },
    { name: "SPC Flooring", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=600&fit=crop&q=80", href: "/catalogs/spc-flooring" },
    { name: "Remote Control", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80", href: "/catalogs/remote-control" },
    { name: "Parquet Flooring", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop&q=80", href: "/catalogs/parquet-flooring" },
  ];

  const services = [
    {
      title: "Window Styling",
      description: "Tailored roller, vertical, and wooden blinds—customized to fit your space with elegance and privacy.",
      icon: "🪟"
    },
    {
      title: "Wall Design",
      description: "Modern, textured, and luxury wallpapers that redefine your walls and set the mood of your interiors.",
      icon: "🎨"
    },
    {
      title: "Floor Styling",
      description: "Premium LVT and SPC flooring options for durable, stylish, and water-resistant surfaces that last.",
      icon: "🏠"
    },
    {
      title: "Furniture Setup",
      description: "From sofa placements to carpet installation, our team ensures your space is styled and furnished perfectly.",
      icon: "🛋️"
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "300+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "25+", label: "Expert Team" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section - Enhanced with larger imagery */}
        <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b4d33]/90 via-[#3b4d33]/70 to-[#23c9bc]/80"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Elevate Every Space.<br />
              <span className="text-[#23c9bc]">Naturally</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 text-gray-100 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Timeless furniture and interiors inspired by nature—bringing comfort, style, and elegance to modern living
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/catalogs"
                className="bg-[#23c9bc] text-white px-10 py-4 rounded-md hover:bg-[#1db3a8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Catalogs
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-md hover:bg-white hover:text-[#3b4d33] transition-all duration-300 font-semibold text-lg"
              >
                Get A Quote
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#3b4d33] mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid - Enhanced spacing and visuals */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Our Product Catalog</h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                  Discover our complete range of premium furniture and interior solutions
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <FadeIn key={category.name} delay={index * 0.1}>
                  <Link
                    href={category.href}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="w-full">
                        <h3 className="text-white font-bold text-2xl mb-2">{category.name}</h3>
                        <div className="flex items-center text-[#23c9bc] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-semibold mr-2">View Collection</span>
                          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Enhanced with better imagery */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn direction="left">
                <div>
                  <div className="inline-block bg-[#23c9bc]/10 text-[#23c9bc] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    ABOUT MARTINI FURNITURE
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6 leading-tight">
                    Rooted in the Heart of the UAE
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    At Martini Furniture, we blend exceptional craftsmanship with nature-inspired elegance.
                    Every piece we create is designed to transform your space into a sanctuary of comfort and style.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our commitment to sustainability and quality ensures that you receive products that not only
                    look beautiful but also stand the test of time. From window treatments to flooring solutions,
                    we bring your vision to life.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-[#3b4d33] text-white px-8 py-4 rounded-md hover:bg-[#2a3826] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Learn More About Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop&q=80"
                      alt="Beautiful modern living room"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#23c9bc]/20 rounded-2xl -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#3b4d33]/20 rounded-2xl -z-10"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Section - Enhanced cards */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Our Services</h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                  Comprehensive interior solutions tailored to your needs
                </p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FadeIn key={service.title} delay={index * 0.15}>
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-[#23c9bc] hover:-translate-y-2">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#1e293b] group-hover:text-[#3b4d33] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#23c9bc] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="mr-2">Learn More</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Enhanced visual hierarchy */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">How We Work</h2>
                <p className="text-gray-600 text-lg md:text-xl">Simple, efficient, and customer-focused</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Contact & Consultation",
                  description: "Reach out to us and schedule a consultation to discuss your needs and vision for your perfect space"
                },
                {
                  step: "02",
                  title: "Design & Selection",
                  description: "Choose from our extensive catalog and customize to match your unique style and preferences"
                },
                {
                  step: "03",
                  title: "Delivery & Setup",
                  description: "Professional installation and setup ensuring perfect results that exceed your expectations"
                }
              ].map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.15}>
                  <div className="relative text-center group">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#3b4d33] to-[#23c9bc] text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e293b] mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#23c9bc] to-transparent"></div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced dark section */}
        <section className="py-20 bg-gradient-to-br from-[#3b4d33] to-[#2a3826] text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Martini Furniture</h2>
                <p className="text-gray-200 text-lg md:text-xl">Excellence in every detail</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  title: "Quality Design",
                  description: "Premium materials and exceptional craftsmanship in every product we deliver"
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: "Expert Team",
                  description: "Skilled professionals with years of experience dedicated to your satisfaction"
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  ),
                  title: "Professional Service",
                  description: "From consultation to installation, we've got you covered every step of the way"
                }
              ].map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.15}>
                  <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="bg-[#23c9bc] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">Ready to Transform Your Space?</h2>
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Let's bring your vision to life with our expert team and premium products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#3b4d33] text-white px-10 py-4 rounded-md hover:bg-[#2a3826] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/catalogs"
                  className="bg-white border-2 border-[#3b4d33] text-[#3b4d33] px-10 py-4 rounded-md hover:bg-[#3b4d33] hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  View Our Catalog
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
