"use client";

import Link from "next/link";
import PageTransition from "./PageTransition";
import FadeIn from "./FadeIn";

interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface CatalogTemplateProps {
  title: string;
  description: string;
  priceRange: string;
  heroImage: string;
  products: Product[];
  aboutContent: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function CatalogTemplate({
  title,
  description,
  priceRange,
  heroImage,
  products,
  aboutContent,
  features,
}: CatalogTemplateProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-[#3b4d33] to-[#23c9bc]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100">
            {description}
          </p>
          <p className="text-2xl font-semibold mb-8">{priceRange}</p>
          <p className="text-lg text-gray-200 mb-8">Installation included</p>
          <a
            href={`https://wa.me/971505522437?text=${encodeURIComponent(`Hi, I'm interested in ${title}. Can you provide more information?`)}`}
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
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Our {title} Collection</h2>
            <p className="text-gray-600 text-lg">Choose from our wide range of styles and options</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeIn key={product.name} delay={index * 0.1}>
              <div
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
                  <p className="text-2xl font-semibold text-[#23c9bc] mb-3">
                    {product.price}
                  </p>
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b4d33] mb-4">Why Choose Our {title}?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-[#23c9bc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#3b4d33] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3b4d33] mb-6">About {title}</h2>
          <div className="prose prose-lg text-gray-600">
            {aboutContent.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 mb-16 bg-[#3b4d33] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for measurements and a free quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/971505522437?text=${encodeURIComponent(`Hi, I'd like to get a quote for ${title}.`)}`}
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
