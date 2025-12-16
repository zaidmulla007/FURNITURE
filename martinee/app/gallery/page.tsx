"use client";

import PageTransition from "../components/PageTransition";
import FadeIn from "../components/FadeIn";

export default function GalleryPage() {
  const projects = [
    { title: "Modern Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop", category: "Residential" },
    { title: "Luxury Bedroom Blinds", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop", category: "Window Treatments" },
    { title: "Office Flooring Installation", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", category: "Commercial" },
    { title: "Contemporary Sofa Set", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop", category: "Furniture" },
    { title: "Designer Wallpaper Installation", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", category: "Wallpaper" },
    { title: "Wooden Blinds Project", image: "https://images.unsplash.com/photo-1618220924273-338d82d6b886?w=800&h=600&fit=crop", category: "Window Treatments" },
    { title: "Luxury Carpet Installation", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&h=600&fit=crop", category: "Flooring" },
    { title: "Elegant Curtains Setup", image: "https://images.unsplash.com/photo-1565183928294-7d22f2d53383?w=800&h=600&fit=crop", category: "Window Treatments" },
    { title: "Modern Office Space", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop", category: "Commercial" },
    { title: "Parquet Flooring", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop", category: "Flooring" },
    { title: "Vertical Blinds Installation", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=600&fit=crop", category: "Window Treatments" },
    { title: "Complete Home Makeover", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop", category: "Residential" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#3b4d33] to-[#23c9bc]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=400&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Discover our completed projects and successful installations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Project Showcase</h2>
            <p className="text-gray-600 text-lg">Take a look at some of our recent installations and projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1}>
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-[#23c9bc] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Real feedback from satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Excellent service from start to finish! The team was professional, punctual, and the quality of
                installation exceeded our expectations. Highly recommended!"
              </p>
              <p className="font-semibold text-[#3b4d33]">Ahmed Al Mansoori</p>
              <p className="text-sm text-gray-500">Dubai Marina</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Beautiful flooring installed perfectly! The team helped us choose the right product and the
                installation was flawless. Very happy with our new LVT floors."
              </p>
              <p className="font-semibold text-[#3b4d33]">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Abu Dhabi</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Great experience! Ordered custom blinds for our entire villa and couldn't be happier. Quality
                products, competitive pricing, and excellent customer service."
              </p>
              <p className="font-semibold text-[#3b4d33]">Mohammed Al Hashimi</p>
              <p className="text-sm text-gray-500">Sharjah</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b4d33] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Project Today</h2>
          <p className="text-xl text-gray-200 mb-8">
            Let us help you create the space of your dreams
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#23c9bc] text-white px-8 py-4 rounded-full hover:bg-[#1db3a8] transition-colors duration-200 font-semibold text-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Separator Section */}
      <section className="py-8 bg-gray-50"></section>
      </div>
    </PageTransition>
  );
}
