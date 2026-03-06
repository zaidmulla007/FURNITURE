"use client";

import Link from "next/link";
import PageTransition from "../../components/PageTransition";
import FadeIn from "../../components/FadeIn";

export default function RollerBlindsPage() {
  const products = [
    {
      name: "Classic Roller Blind",
      image: "/images/RollerBlinds/PNG-01.jpg",
      description: "Simple and elegant roller blind perfect for any room",
    },
    {
      name: "Blackout Roller Blind",
      image: "/images/RollerBlinds/PNG-02.jpg",
      description: "Complete light blocking for bedrooms and media rooms",
    },
    {
      name: "Sunscreen Roller Blind",
      image: "/images/RollerBlinds/PNG-03.jpg",
      description: "UV protection while maintaining natural light",
    },
    {
      name: "Motorized Roller Blind",
      image: "/images/RollerBlinds/PNG-04.jpg",
      description: "Smart automation with remote control operation",
    },
    {
      name: "Patterned Roller Blind",
      image: "/images/RollerBlinds/PNG-05.jpg",
      description: "Decorative patterns to enhance your interior design",
    },
    {
      name: "Dual Roller Blind",
      image: "/images/RollerBlinds/PNG-06.jpg",
      description: "Two layers for versatile light control options",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-[#3b4d33] to-[#23c9bc]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('/images/RollerBlinds/PNG-07.jpg')" }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Roller Blinds</h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100">
            Enhance your space with sleek and functional roller blinds
          </p>
          <a
            href={`https://wa.me/971505522437?text=${encodeURIComponent("Hi, I'm interested in Roller Blinds. Can you provide more information?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#23c9bc] text-white px-8 py-4 rounded-full hover:bg-[#1db3a8] transition-colors duration-200 font-semibold text-lg"
          >
            Order via WhatsApp
          </a>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Our Roller Blind Collection</h2>
            <p className="text-gray-600 text-lg">Choose from our wide range of styles and functionalities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#3b4d33] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a
                    href={`https://wa.me/971505522437?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Can you provide more information?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#23c9bc] font-semibold hover:text-[#1db3a8]"
                  >
                    Order Now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Why Choose Our Roller Blinds?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-3">Easy Operation</h3>
              <p className="text-gray-600">Simple chain or spring mechanism for effortless control</p>
            </div>
            <div className="text-center">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-3">Custom Sizes</h3>
              <p className="text-gray-600">Made to measure for perfect fit in any window</p>
            </div>
            <div className="text-center">
              <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b4d33] mb-3">Quality Materials</h3>
              <p className="text-gray-600">Premium fabrics designed for durability and style</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3b4d33] mb-6">About Roller Blinds</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Roller blinds are one of the most popular window treatment options, offering a perfect blend of
              functionality and style. They feature a simple yet elegant design with fabric that rolls up and down
              around a tube mechanism.
            </p>
            <p className="mb-4">
              Our roller blinds are available in a wide range of fabrics, colors, and patterns to complement any
              interior design. Whether you need complete blackout for bedrooms, sunscreen fabrics for living areas,
              or decorative options for offices, we have the perfect solution.
            </p>
            <p className="mb-4">
              All our roller blinds are custom-made to your exact specifications and include professional installation.
              Choose from manual operation with chain or spring mechanisms, or upgrade to motorized options with
              remote control for the ultimate convenience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b4d33] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for measurements and a free quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/971505522437?text=${encodeURIComponent("Hi, I'd like to get a quote for Roller Blinds.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#23c9bc] text-white px-8 py-4 rounded-full hover:bg-[#1db3a8] transition-colors duration-200 font-semibold text-lg"
            >
              WhatsApp Us
            </a>
            <Link
              href="/catalogs"
              className="inline-block bg-white text-[#3b4d33] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
            >
              Browse Other Catalogs
            </Link>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
