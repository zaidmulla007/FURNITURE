import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "LVT Flooring - Martini Furniture",
  description: "Luxury Vinyl Tile flooring with realistic wood and stone looks. Starting at AED 55 per sq. meter",
};

export default function LVTFlooringPage() {
  const products = [
    {
      name: "Oak Wood Effect LVT",
      image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=600&h=600&fit=crop",
      price: "AED 65 per sq.m",
      description: "Realistic oak wood appearance with superior durability",
    },
    {
      name: "Stone Effect LVT",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=600&fit=crop",
      price: "AED 70 per sq.m",
      description: "Natural stone look with waterproof performance",
    },
    {
      name: "Herringbone Pattern LVT",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop",
      price: "AED 85 per sq.m",
      description: "Classic herringbone design for elegant spaces",
    },
    {
      name: "Wide Plank LVT",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=600&fit=crop",
      price: "AED 75 per sq.m",
      description: "Contemporary wide plank format for modern interiors",
    },
    {
      name: "Commercial Grade LVT",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=600&fit=crop",
      price: "AED 55 per sq.m",
      description: "Heavy-duty flooring for high-traffic commercial areas",
    },
    {
      name: "Premium Designer LVT",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=600&fit=crop",
      price: "AED 95 per sq.m",
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
      priceRange="Starting at AED 55 per sq. meter"
      heroImage="https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=1920&h=500&fit=crop"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
