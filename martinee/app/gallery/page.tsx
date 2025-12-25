"use client";

import PageTransition from "../components/PageTransition";
import FadeIn from "../components/FadeIn";
import Link from "next/link";
import { useState } from "react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Window Treatments", "Flooring", "Furniture", "Wallpaper"];

  const projects = [
    { title: "Modern Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop&q=80", category: "Residential" },
    { title: "Luxury Bedroom Blinds", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop&q=80", category: "Window Treatments" },
    { title: "Office Flooring Installation", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80", category: "Commercial" },
    { title: "Contemporary Sofa Set", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80", category: "Furniture" },
    { title: "Designer Wallpaper Installation", image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&h=600&fit=crop&q=80", category: "Wallpaper" },
    { title: "Wooden Blinds Project", image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&h=600&fit=crop&q=80", category: "Window Treatments" },
    { title: "Luxury Carpet Installation", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&h=600&fit=crop&q=80", category: "Flooring" },
    { title: "Elegant Curtains Setup", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop&q=80", category: "Window Treatments" },
    { title: "Modern Office Space", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80", category: "Commercial" },
    { title: "Parquet Flooring", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop&q=80", category: "Flooring" },
    { title: "Vertical Blinds Installation", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop&q=80", category: "Window Treatments" },
    { title: "Complete Home Makeover", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80", category: "Residential" },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      name: "Ahmed Al Mansoori",
      location: "Dubai Marina",
      rating: 5,
      text: "Excellent service from start to finish! The team was professional, punctual, and the quality of installation exceeded our expectations. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
    },
    {
      name: "Sarah Johnson",
      location: "Abu Dhabi",
      rating: 5,
      text: "Beautiful flooring installed perfectly! The team helped us choose the right product and the installation was flawless. Very happy with our new LVT floors.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80"
    },
    {
      name: "Mohammed Al Hashimi",
      location: "Sharjah",
      rating: 5,
      text: "Great experience! Ordered custom blinds for our entire villa and couldn't be happier. Quality products, competitive pricing, and excellent customer service.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=800&fit=crop&q=80')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b4d33]/90 via-[#3b4d33]/70 to-[#23c9bc]/80"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
              <p className="text-xl md:text-2xl text-gray-100 font-light">
                Discover our completed projects and successful installations across the UAE
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="bg-white border-b sticky top-20 z-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-[#3b4d33] text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Project Showcase</h2>
                <p className="text-gray-600 text-lg md:text-xl">Take a look at some of our recent installations and projects</p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-block bg-[#23c9bc] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                        <div className="flex items-center text-[#23c9bc] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-semibold mr-2">View Details</span>
                          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">What Our Clients Say</h2>
                <p className="text-gray-600 text-lg md:text-xl">Real feedback from satisfied customers</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <div className="bg-[#f8fafc] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#23c9bc]"
                      />
                      <div>
                        <p className="font-bold text-[#1e293b] text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 mb-0 bg-gradient-to-br from-[#3b4d33] to-[#2a3826] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#23c9bc] rounded-full filter blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Project Today</h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-10">
                Let us help you create the space of your dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#23c9bc] text-white px-10 py-4 rounded-md hover:bg-[#1db3a8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Contact Us Now
                </Link>
                <Link
                  href="/catalogs"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-md hover:bg-white hover:text-[#3b4d33] transition-all duration-300 font-semibold text-lg"
                >
                  Browse Products
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Spacer before footer */}
        <div className="h-16 bg-white"></div>
      </div>
    </PageTransition>
  );
}
