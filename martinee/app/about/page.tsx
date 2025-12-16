"use client";

import PageTransition from "../components/PageTransition";
import FadeIn from "../components/FadeIn";

export default function AboutPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Martini Furniture</h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Rooted in the heart of the UAE
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3b4d33] mb-6">Our Story</h2>
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
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop"
                alt="Our Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3b4d33] mb-4 text-center">Quality First</h3>
              <p className="text-gray-600 text-center">
                We never compromise on quality. Every product is carefully selected and inspected to meet our
                high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3b4d33] mb-4 text-center">Customer Focus</h3>
              <p className="text-gray-600 text-center">
                Your satisfaction is our success. We listen to your needs and deliver solutions that exceed
                expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3b4d33] mb-4 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We're committed to environmental responsibility, sourcing materials sustainably and minimizing waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Experienced professionals dedicated to your satisfaction</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#3b4d33] mb-6">AFSAR - Managing Director</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Leading our team with vision and expertise, AFSAR brings years of experience in the furniture
                and interior design industry. Under his guidance, Martini Furniture has become a trusted name
                throughout the UAE.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our team consists of skilled craftsmen, experienced designers, and dedicated installation professionals
                who work together to bring your vision to life. We believe in continuous training and staying updated
                with the latest trends and technologies in the industry.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-2 text-[#23c9bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+971 50 552 2437</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#3b4d33] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Martini Furniture</h2>
            <p className="text-gray-200 text-lg">Your trusted partner for interior solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-200">Only the finest materials and craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Competitive Prices</h3>
              <p className="text-gray-200">Best value for your investment</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
              <p className="text-gray-200">Professional fitting and finishing</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Customer Service</h3>
              <p className="text-gray-200">Dedicated support from start to finish</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
