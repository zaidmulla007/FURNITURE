import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "SPC Flooring - Martini Furniture",
  description: "Stone Plastic Composite flooring for durability and style. Starting at AED 60 per sq. meter",
};

export default function SPCFlooringPage() {
  const products = [
    { name: "Grey Oak SPC", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop", price: "AED 65 per sq.m", description: "Contemporary grey tones with oak texture" },
    { name: "Natural Walnut SPC", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=600&fit=crop", price: "AED 70 per sq.m", description: "Rich walnut appearance with deep grain" },
    { name: "Light Maple SPC", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=600&fit=crop", price: "AED 60 per sq.m", description: "Bright and airy maple wood look" },
    { name: "Stone Effect SPC", image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=600&h=600&fit=crop", price: "AED 75 per sq.m", description: "Realistic stone and tile appearance" },
    { name: "Extra Wide Plank SPC", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=600&fit=crop", price: "AED 80 per sq.m", description: "Modern wide plank format" },
    { name: "Premium Embossed SPC", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=600&fit=crop", price: "AED 90 per sq.m", description: "Enhanced texture with deep embossing" },
  ];

  const features = [
    { title: "Super Durable", description: "Stone-based core provides exceptional impact resistance", icon: "💎" },
    { title: "Waterproof", description: "100% waterproof for use in any room", icon: "💧" },
    { title: "Stable", description: "Temperature and humidity resistant, no expansion", icon: "🌡️" },
  ];

  const aboutContent = [
    "Stone Plastic Composite (SPC) flooring is the latest innovation in resilient flooring technology. The rigid stone-based core makes it incredibly durable and stable, while the vinyl surface provides beautiful realistic wood and stone looks.",
    "SPC flooring is 100% waterproof and can be installed in any room, including bathrooms, kitchens, and basements. It's highly resistant to temperature changes and humidity, making it ideal for UAE climate conditions.",
    "With its click-lock installation system, SPC flooring can be installed quickly over most existing floors. It's low maintenance, scratch-resistant, and provides excellent value for money. Our professional installation ensures a perfect, lasting result.",
  ];

  return <CatalogTemplate title="SPC Flooring" description="Stone Plastic Composite flooring for durability and style" priceRange="Starting at AED 60 per sq. meter" heroImage="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&h=500&fit=crop" products={products} features={features} aboutContent={aboutContent} />;
}
