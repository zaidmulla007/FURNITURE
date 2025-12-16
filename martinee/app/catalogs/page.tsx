"use client";

import Link from "next/link";
import PageTransition from "../components/PageTransition";
import FadeIn from "../components/FadeIn";

export default function CatalogsPage() {
  const catalogs = [
    {
      name: "Roller Blinds",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop",
      description: "Enhance your space with sleek and functional roller blinds",
      href: "/catalogs/roller-blinds",
    },
    {
      name: "Vertical Blinds",
      image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&h=600&fit=crop",
      description: "Perfect for large windows and sliding doors with vertical operation",
      href: "/catalogs/vertical-blinds",
    },
    {
      name: "Wooden Blinds",
      image: "https://images.unsplash.com/photo-1618220924273-338d82d6b886?w=600&h=600&fit=crop",
      description: "Classic elegance with natural wood grain and warmth",
      href: "/catalogs/wooden-blinds",
    },
    {
      name: "Carpet",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop",
      description: "Luxurious carpets in various textures and colors",
      href: "/catalogs/carpet",
    },
    {
      name: "Curtains",
      image: "https://images.unsplash.com/photo-1565183928294-7d22f2d53383?w=600&h=600&fit=crop",
      description: "Premium curtains and drapes for sophisticated window styling",
      href: "/catalogs/curtains",
    },
    {
      name: "Wallpaper",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
      description: "Transform your walls with stunning designer wallpapers",
      href: "/catalogs/wallpaper",
    },
    {
      name: "Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
      description: "Comfort meets style in our sofa collection",
      href: "/catalogs/sofa",
    },
    {
      name: "LVT Flooring",
      image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=600&h=600&fit=crop",
      description: "Luxury Vinyl Tile flooring with realistic wood and stone looks",
      href: "/catalogs/lvt-flooring",
    },
    {
      name: "SPC Flooring",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop",
      description: "Stone Plastic Composite flooring for durability and style",
      href: "/catalogs/spc-flooring",
    },
    {
      name: "Remote Control",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      description: "Smart automation systems for your window treatments",
      href: "/catalogs/remote-control",
    },
    {
      name: "Parquet Flooring",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=600&fit=crop",
      description: "Timeless parquet flooring in various patterns and finishes",
      href: "/catalogs/parquet-flooring",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#3b4d33] to-[#23c9bc]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=400&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Catalogs</h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Discover our complete range of premium furniture and interior solutions
          </p>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogs.map((catalog, index) => (
              <FadeIn key={catalog.name} delay={index * 0.1}>
              <Link
                href={catalog.href}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={catalog.image}
                    alt={catalog.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#3b4d33] mb-3">
                    {catalog.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{catalog.description}</p>
                  <span className="inline-flex items-center text-[#23c9bc] font-semibold group-hover:text-[#1db3a8]">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#3b4d33] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#3b4d33] mb-3">
                What types of blinds do you offer?
              </h3>
              <p className="text-gray-600">
                We offer a comprehensive range of blinds including roller blinds, vertical blinds, and wooden blinds.
                Each type is available in various colors, materials, and operation styles to suit your specific needs.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#3b4d33] mb-3">
                Do you provide installation services?
              </h3>
              <p className="text-gray-600">
                Yes, all our products come with professional installation services. Our expert team ensures perfect
                fitting and setup, guaranteeing the best results for your space.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#3b4d33] mb-3">
                Can I request custom sizes?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in custom solutions tailored to your exact specifications. Contact us with
                your measurements, and we'll create the perfect fit for your space.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-[#3b4d33] mb-3">
                What is your warranty policy?
              </h3>
              <p className="text-gray-600">
                We stand behind the quality of our products with comprehensive warranty coverage. The specific warranty
                period varies by product type. Contact us for detailed warranty information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b4d33] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#23c9bc] text-white px-8 py-4 rounded-full hover:bg-[#1db3a8] transition-colors duration-200 font-semibold text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
