import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "SPC Flooring - Martini Furniture",
  description: "Stone Plastic Composite flooring for durability and style",
};

export default function SPCFlooringPage() {
  const products = [
    { name: "Grey Oak SPC", image: "/images/SPC/PNG-01.jpg", description: "Contemporary grey tones with oak texture" },
    { name: "Natural Walnut SPC", image: "/images/SPC/PNG-02.jpg", description: "Rich walnut appearance with deep grain" },
    { name: "Light Maple SPC", image: "/images/SPC/PNG-03.jpg", description: "Bright and airy maple wood look" },
    { name: "Stone Effect SPC", image: "/images/SPC/PNG-04.jpg", description: "Realistic stone and tile appearance" },
    { name: "Extra Wide Plank SPC", image: "/images/SPC/PNG-05.jpg", description: "Modern wide plank format" },
    { name: "Premium Embossed SPC", image: "/images/SPC/PNG-06.jpg", description: "Enhanced texture with deep embossing" },
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

  return <CatalogTemplate title="SPC Flooring" description="Stone Plastic Composite flooring for durability and style" heroImage="/images/SPC/PNG-07.jpg" products={products} features={features} aboutContent={aboutContent} />;
}
