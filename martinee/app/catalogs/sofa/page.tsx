import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Sofa - Martini Furniture",
  description: "Comfort meets style in our premium sofa collection",
};

export default function SofaPage() {
  const products = [
    {
      name: "Modern L-Shape Sofa",
      image: "/images/Sofa/PNG-01.jpg",

      description: "Contemporary L-shaped sofa perfect for spacious living rooms",
    },
    {
      name: "Classic 3-Seater Sofa",
      image: "/images/Sofa/PNG-02.jpg",

      description: "Timeless design with premium upholstery and comfort",
    },
    {
      name: "Leather Recliner Sofa",
      image: "/images/Sofa/PNG-03.jpg",

      description: "Luxurious leather with electric reclining mechanism",
    },
    {
      name: "Fabric Sectional Sofa",
      image: "/images/Sofa/PNG-04.jpg",

      description: "Modular sectional design for flexible arrangements",
    },
    {
      name: "Velvet Chesterfield Sofa",
      image: "/images/Sofa/PNG-05.jpg",

      description: "Elegant tufted design in luxurious velvet fabric",
    },
    {
      name: "Sleeper Sofa Bed",
      image: "/images/Sofa/PNG-06.jpg",

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

      heroImage="/images/Sofa/PNG-07.jpg"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
