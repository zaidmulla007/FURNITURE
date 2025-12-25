"use client";

import Link from "next/link";
import PageTransition from "../components/PageTransition";
import FadeIn from "../components/FadeIn";

export default function CatalogsPage() {
  const catalogs = [
    {
      name: "Roller Blinds",
      image: "https://images.unsplash.com/photo-1620222071550-a5c7f8b600ed?w=800&h=600&fit=crop&q=80",
      description: "Enhance your space with sleek and functional roller blinds",
      href: "/catalogs/roller-blinds",
      category: "Window Treatments"
    },
    {
      name: "Vertical Blinds",
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop&q=80",
      description: "Perfect for large windows and sliding doors with vertical operation",
      href: "/catalogs/vertical-blinds",
      category: "Window Treatments"
    },
    {
      name: "Wooden Blinds",
      image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&h=600&fit=crop&q=80",
      description: "Classic elegance with natural wood grain and warmth",
      href: "/catalogs/wooden-blinds",
      category: "Window Treatments"
    },
    {
      name: "Carpet",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&h=600&fit=crop&q=80",
      description: "Luxurious carpets in various textures and colors",
      href: "/catalogs/carpet",
      category: "Flooring"
    },
    {
      name: "Curtains",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop&q=80",
      description: "Premium curtains and drapes for sophisticated window styling",
      href: "/catalogs/curtains",
      category: "Window Treatments"
    },
    {
      name: "Wallpaper",
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&h=600&fit=crop&q=80",
      description: "Transform your walls with stunning designer wallpapers",
      href: "/catalogs/wallpaper",
      category: "Wall Styling"
    },
    {
      name: "Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80",
      description: "Comfort meets style in our sofa collection",
      href: "/catalogs/sofa",
      category: "Furniture"
    },
    {
      name: "LVT Flooring",
      image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=800&h=600&fit=crop&q=80",
      description: "Luxury Vinyl Tile flooring with realistic wood and stone looks",
      href: "/catalogs/lvt-flooring",
      category: "Flooring"
    },
    {
      name: "SPC Flooring",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=600&fit=crop&q=80",
      description: "Stone Plastic Composite flooring for durability and style",
      href: "/catalogs/spc-flooring",
      category: "Flooring"
    },
    {
      name: "Remote Control",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
      description: "Smart automation systems for your window treatments",
      href: "/catalogs/remote-control",
      category: "Automation"
    },
    {
      name: "Parquet Flooring",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop&q=80",
      description: "Timeless parquet flooring in various patterns and finishes",
      href: "/catalogs/parquet-flooring",
      category: "Flooring"
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=800&fit=crop&q=80')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b4d33]/90 via-[#3b4d33]/70 to-[#23c9bc]/80"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Catalogs</h1>
              <p className="text-xl md:text-2xl text-gray-100 font-light">
                Discover our complete range of premium furniture and interior solutions
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Catalogs Grid */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Browse Our Collections</h2>
                <p className="text-gray-600 text-lg md:text-xl">From blinds to flooring, explore all our product categories</p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {catalogs.map((catalog, index) => (
                <FadeIn key={catalog.name} delay={index * 0.05}>
                  <Link
                    href={catalog.href}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={catalog.image}
                        alt={catalog.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-block bg-[#23c9bc] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                          {catalog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#1e293b] mb-3 group-hover:text-[#3b4d33] transition-colors">
                        {catalog.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{catalog.description}</p>
                      <div className="flex items-center text-[#23c9bc] font-semibold">
                        <span className="mr-2">Explore Collection</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] text-center mb-16">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <div className="space-y-6">
              {[
                {
                  question: "What types of blinds do you offer?",
                  answer: "We offer a comprehensive range of blinds including roller blinds, vertical blinds, and wooden blinds. Each type is available in various colors, materials, and operation styles to suit your specific needs."
                },
                {
                  question: "Do you provide installation services?",
                  answer: "Yes, all our products come with professional installation services. Our expert team ensures perfect fitting and setup, guaranteeing the best results for your space."
                },
                {
                  question: "Can I request custom sizes?",
                  answer: "Absolutely! We specialize in custom solutions tailored to your exact specifications. Contact us with your measurements, and we'll create the perfect fit for your space."
                },
                {
                  question: "What is your warranty policy?",
                  answer: "We stand behind the quality of our products with comprehensive warranty coverage. The specific warranty period varies by product type. Contact us for detailed warranty information."
                }
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-200 hover:border-[#23c9bc] transition-colors">
                    <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 mb-16 bg-gradient-to-br from-[#3b4d33] to-[#2a3826] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-10">
                Contact us today for a free consultation and quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#23c9bc] text-white px-10 py-4 rounded-md hover:bg-[#1db3a8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/gallery"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-md hover:bg-white hover:text-[#3b4d33] transition-all duration-300 font-semibold text-lg"
                >
                  View Gallery
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
