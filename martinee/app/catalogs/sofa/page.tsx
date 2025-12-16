import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Sofa - Martini Furniture",
  description: "Comfort meets style in our premium sofa collection. Starting at AED 2500",
};

export default function SofaPage() {
  const products = [
    {
      name: "Modern L-Shape Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
      price: "AED 4500",
      description: "Contemporary L-shaped sofa perfect for spacious living rooms",
    },
    {
      name: "Classic 3-Seater Sofa",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      price: "AED 2500",
      description: "Timeless design with premium upholstery and comfort",
    },
    {
      name: "Leather Recliner Sofa",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop",
      price: "AED 5500",
      description: "Luxurious leather with electric reclining mechanism",
    },
    {
      name: "Fabric Sectional Sofa",
      image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600&h=600&fit=crop",
      price: "AED 3800",
      description: "Modular sectional design for flexible arrangements",
    },
    {
      name: "Velvet Chesterfield Sofa",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=600&fit=crop",
      price: "AED 4200",
      description: "Elegant tufted design in luxurious velvet fabric",
    },
    {
      name: "Sleeper Sofa Bed",
      image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=600&h=600&fit=crop",
      price: "AED 3200",
      description: "Dual-purpose sofa converts to comfortable bed",
    },
  ];

  const features = [
    {
      title: "Premium Materials",
      description: "High-quality fabrics, leather, and sturdy frames built to last",
      icon: "✨",
    },
    {
      title: "Custom Options",
      description: "Choose from various fabrics, colors, and configurations",
      icon: "🎨",
    },
    {
      title: "Comfort First",
      description: "Ergonomically designed with premium cushioning for maximum comfort",
      icon: "🛋️",
    },
  ];

  const aboutContent = [
    "Our sofa collection combines exceptional comfort with timeless style. Each piece is carefully crafted using premium materials and superior construction techniques to ensure durability and longevity.",
    "From modern minimalist designs to classic traditional styles, we offer a wide range of options to suit every taste and interior. Choose from various upholstery options including fabric, leather, and velvet in numerous colors and patterns.",
    "All our sofas come with professional delivery and assembly service. We also offer customization options for size, configuration, and upholstery to perfectly match your space and preferences.",
  ];

  return (
    <CatalogTemplate
      title="Sofa"
      description="Comfort meets style in our premium sofa collection"
      priceRange="Starting at AED 2500"
      heroImage="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=500&fit=crop"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
