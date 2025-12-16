"use client";

import Link from "next/link";
import Image from "next/image";
import PageTransition from "./components/PageTransition";
import FadeIn from "./components/FadeIn";
import { motion } from "framer-motion";

export default function Home() {
  const categories = [
    { name: "Roller Blinds", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&h=500&fit=crop", href: "/catalogs/roller-blinds" },
    { name: "Vertical Blinds", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=500&h=500&fit=crop", href: "/catalogs/vertical-blinds" },
    { name: "Wooden Blinds", image: "https://images.unsplash.com/photo-1618220924273-338d82d6b886?w=500&h=500&fit=crop", href: "/catalogs/wooden-blinds" },
    { name: "Carpet", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&h=500&fit=crop", href: "/catalogs/carpet" },
    { name: "Curtains", image: "https://images.unsplash.com/photo-1565183928294-7d22f2d53383?w=500&h=500&fit=crop", href: "/catalogs/curtains" },
    { name: "Wallpaper", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop", href: "/catalogs/wallpaper" },
    { name: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop", href: "/catalogs/sofa" },
    { name: "LVT Flooring", image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=500&h=500&fit=crop", href: "/catalogs/lvt-flooring" },
    { name: "SPC Flooring", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&h=500&fit=crop", href: "/catalogs/spc-flooring" },
    { name: "Remote Control", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", href: "/catalogs/remote-control" },
    { name: "Parquet Flooring", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=500&h=500&fit=crop", href: "/catalogs/parquet-flooring" },
  ];

  const services = [
    {
      title: "Window Styling",
      description: "Tailored roller, vertical, and wooden blinds—customized to fit your space with elegance and privacy.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="16" x2="20" y2="16" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      )
    },
    {
      title: "Wall Design",
      description: "Modern, textured, and luxury wallpapers that redefine your walls and set the mood of your interiors.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L4 6v6c0 5 3 9 8 10 5-1 8-5 8-10V6l-8-4z" />
          <path d="M8 10l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Floor Styling",
      description: "Premium LVT and SPC flooring options for durable, stylish, and water-resistant surfaces that last.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "Furniture Setup",
      description: "From sofa placements to carpet installation, our team ensures your space is styled and furnished perfectly.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M3 12h18" />
          <path d="M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
        </svg>
      )
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-[#3b4d33] to-[#23c9bc]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=600&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Elevate Every Space. Naturally
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Timeless furniture and interiors inspired by nature
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogs"
              className="bg-[#23c9bc] text-white px-8 py-4 rounded-full hover:bg-[#1db3a8] transition-colors duration-200 font-semibold text-lg"
            >
              Browse Catalogs
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#3b4d33] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Our Product Catalog</h2>
              <p className="text-gray-600 text-lg">Discover our complete range of premium furniture and interior solutions</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <FadeIn key={category.name} delay={index * 0.1}>
              <Link
                href={category.href}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg text-center">{category.name}</h3>
                  </div>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
              <h2 className="text-4xl font-bold text-[#3b4d33] mb-6">Rooted in the Heart of the UAE</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Martini Furniture, we blend exceptional craftsmanship with nature-inspired elegance.
                Every piece we create is designed to transform your space into a sanctuary of comfort and style.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our commitment to sustainability and quality ensures that you receive products that not only
                look beautiful but also stand the test of time. From window treatments to flooring solutions,
                we bring your vision to life.
              </p>
              <Link
                href="/about"
                className="inline-block bg-[#3b4d33] text-white px-8 py-3 rounded-full hover:bg-[#2a3826] transition-colors duration-200 font-semibold"
              >
                Learn More About Us
              </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=800&fit=crop"
                alt="About Us"
                className="w-full h-full object-cover"
              />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Our Services</h2>
              <p className="text-gray-600 text-lg">Comprehensive interior solutions tailored to your needs</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.15}>
              <div
                className="bg-white text-[#3b4d33] p-8 rounded-2xl border border-gray-200 hover:bg-[#3b4d33] hover:text-white hover:border-[#3b4d33] transition-all duration-300 flex flex-col h-full group"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-200 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg">Simple, efficient, and customer-focused</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-3">Contact & Consultation</h3>
              <p className="text-gray-600">Reach out to us and schedule a consultation to discuss your needs and vision</p>
            </div>
            <div className="text-center">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-3">Design & Selection</h3>
              <p className="text-gray-600">Choose from our extensive catalog and customize to match your style</p>
            </div>
            <div className="text-center">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-3">Delivery & Setup</h3>
              <p className="text-gray-600">Professional installation and setup ensuring perfect results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#3b4d33] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Martini Furniture</h2>
            <p className="text-gray-200 text-lg">Excellence in every detail</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#23c9bc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Design</h3>
              <p className="text-gray-200">Premium materials and craftsmanship in every product</p>
            </div>
            <div className="text-center">
              <div className="bg-[#23c9bc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-200">Skilled professionals dedicated to your satisfaction</p>
            </div>
            <div className="text-center">
              <div className="bg-[#23c9bc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Service</h3>
              <p className="text-gray-200">From consultation to installation, we've got you covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator Section */}
      <section className="py-8 bg-gray-50"></section>
      </div>
    </PageTransition>
  );
}
