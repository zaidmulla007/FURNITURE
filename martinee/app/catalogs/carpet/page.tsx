import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Carpet - Martini Furniture",
  description: "Luxurious carpets in various textures and colors. Starting at AED 45 per sq. meter",
};

export default function CarpetPage() {
  const products = [
    {
      name: "Luxury Wool Carpet",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop",
      price: "AED 85 per sq.m",
      description: "Premium wool carpet with superior softness and durability",
    },
    {
      name: "Synthetic Stain-Resistant Carpet",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=600&fit=crop",
      price: "AED 45 per sq.m",
      description: "Practical and easy-to-clean for high-traffic areas",
    },
    {
      name: "Textured Berber Carpet",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop",
      price: "AED 65 per sq.m",
      description: "Distinctive loop pile construction for modern aesthetics",
    },
    {
      name: "Plush Cut Pile Carpet",
      image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&h=600&fit=crop",
      price: "AED 70 per sq.m",
      description: "Ultra-soft and luxurious feel for bedrooms and living spaces",
    },
    {
      name: "Patterned Designer Carpet",
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&h=600&fit=crop",
      price: "AED 95 per sq.m",
      description: "Unique patterns and designs to enhance your décor",
    },
    {
      name: "Commercial Grade Carpet",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=600&fit=crop",
      price: "AED 55 per sq.m",
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
      priceRange="Starting at AED 45 per sq. meter"
      heroImage="https://images.unsplash.com/photo-1600166898405-da9535204843?w=1920&h=500&fit=crop"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
