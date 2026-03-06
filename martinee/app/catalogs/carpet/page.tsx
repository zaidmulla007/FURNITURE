import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Carpet - Martini Furniture",
  description: "Luxurious carpets in various textures and colors",
};

export default function CarpetPage() {
  const products = [
    {
      name: "Luxury Wool Carpet",
      image: "/images/Carpet/PNG-01.jpg",

      description: "Premium wool carpet with superior softness and durability",
    },
    {
      name: "Synthetic Stain-Resistant Carpet",
      image: "/images/Carpet/PNG-02.jpg",

      description: "Practical and easy-to-clean for high-traffic areas",
    },
    {
      name: "Textured Berber Carpet",
      image: "/images/Carpet/PNG-03.jpg",

      description: "Distinctive loop pile construction for modern aesthetics",
    },
    {
      name: "Plush Cut Pile Carpet",
      image: "/images/Carpet/PNG-04.jpg",

      description: "Ultra-soft and luxurious feel for bedrooms and living spaces",
    },
    {
      name: "Patterned Designer Carpet",
      image: "/images/Carpet/PNG-05.jpg",

      description: "Unique patterns and designs to enhance your décor",
    },
    {
      name: "Commercial Grade Carpet",
      image: "/images/Carpet/PNG-06.jpg",

      description: "Heavy-duty carpet perfect for offices and commercial spaces",
    },
  ];

  const features = [
    {
      title: "Wide Selection",
      description: "Extensive range of colors, textures, and patterns to choose from",
      icon: "🎨",
    },
    {
      title: "Professional Installation",
      description: "Expert fitting and finishing for perfect results",
      icon: "⚙️",
    },
    {
      title: "Quality Guarantee",
      description: "Premium materials backed by warranty for peace of mind",
      icon: "✓",
    },
  ];

  const aboutContent = [
    "Transform your space with our extensive carpet collection. We offer everything from luxurious wool carpets to practical synthetic options, ensuring there's a perfect choice for every room and budget.",
    "Our carpets are sourced from leading manufacturers and come in a wide variety of colors, textures, and pile heights. Whether you're looking for soft plush for bedrooms, durable berber for living areas, or stain-resistant options for family rooms, we have you covered.",
    "All carpet installations include professional fitting, underlay options, and finishing touches like gripper rods and door bars. Our experienced team ensures a flawless installation that will look great and last for years.",
  ];

  return (
    <CatalogTemplate
      title="Carpet"
      description="Luxurious carpets in various textures and colors"

      heroImage="/images/Carpet/PNG-07.jpg"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
