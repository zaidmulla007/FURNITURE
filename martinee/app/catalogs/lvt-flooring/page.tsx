import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "LVT Flooring - Martini Furniture",
  description: "Luxury Vinyl Tile flooring with realistic wood and stone looks",
};

export default function LVTFlooringPage() {
  const products = [
    {
      name: "Oak Wood Effect LVT",
      image: "/images/LVT/PNG-01.jpg",

      description: "Realistic oak wood appearance with superior durability",
    },
    {
      name: "Stone Effect LVT",
      image: "/images/LVT/PNG-02.jpg",

      description: "Natural stone look with waterproof performance",
    },
    {
      name: "Herringbone Pattern LVT",
      image: "/images/LVT/PNG-03.jpg",

      description: "Classic herringbone design for elegant spaces",
    },
    {
      name: "Wide Plank LVT",
      image: "/images/LVT/PNG-04.jpg",

      description: "Contemporary wide plank format for modern interiors",
    },
    {
      name: "Commercial Grade LVT",
      image: "/images/LVT/PNG-05.jpg",

      description: "Heavy-duty flooring for high-traffic commercial areas",
    },
    {
      name: "Premium Designer LVT",
      image: "/images/LVT/PNG-06.jpg",

      description: "Luxury collection with authentic textures and finishes",
    },
  ];

  const features = [
    {
      title: "100% Waterproof",
      description: "Perfect for kitchens, bathrooms, and moisture-prone areas",
      icon: "💧",
    },
    {
      title: "Easy Maintenance",
      description: "Simple cleaning and highly resistant to stains and scratches",
      icon: "✨",
    },
    {
      title: "Realistic Look",
      description: "Advanced printing technology for authentic wood and stone appearance",
      icon: "🎨",
    },
  ];

  const aboutContent = [
    "Luxury Vinyl Tile (LVT) flooring combines the beautiful appearance of natural materials with the practical benefits of modern technology. Our LVT collection offers realistic wood and stone looks that are virtually indistinguishable from the real thing.",
    "LVT is 100% waterproof, making it ideal for any room in your home including kitchens, bathrooms, and basements. It's also extremely durable, resistant to scratches, dents, and stains, making it perfect for busy households and commercial spaces.",
    "Our professional installation ensures a perfect finish that will last for years. With minimal maintenance requirements and excellent value for money, LVT flooring is one of the smartest flooring choices available today.",
  ];

  return (
    <CatalogTemplate
      title="LVT Flooring"
      description="Luxury Vinyl Tile flooring with realistic wood and stone looks"

      heroImage="/images/LVT/PNG-07.jpg"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
