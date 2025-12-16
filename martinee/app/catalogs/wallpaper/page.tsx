import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Wallpaper - Martini Furniture",
  description: "Transform your walls with stunning designer wallpapers. Starting at AED 35 per sq. meter",
};

export default function WallpaperPage() {
  const products = [
    {
      name: "Modern Geometric Wallpaper",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
      price: "AED 45 per sq.m",
      description: "Contemporary geometric patterns for modern interiors",
    },
    {
      name: "Textured Plain Wallpaper",
      image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop",
      price: "AED 35 per sq.m",
      description: "Subtle texture adds depth without overwhelming the space",
    },
    {
      name: "Floral Designer Wallpaper",
      image: "https://images.unsplash.com/photo-1584626128161-b0123456a352?w=600&h=600&fit=crop",
      price: "AED 65 per sq.m",
      description: "Elegant floral designs for sophisticated spaces",
    },
    {
      name: "3D Effect Wallpaper",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=600&fit=crop",
      price: "AED 85 per sq.m",
      description: "Dramatic 3D visual effects for feature walls",
    },
    {
      name: "Brick Effect Wallpaper",
      image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=600&h=600&fit=crop",
      price: "AED 55 per sq.m",
      description: "Realistic brick texture for industrial-style décor",
    },
    {
      name: "Marble Effect Wallpaper",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&h=600&fit=crop",
      price: "AED 75 per sq.m",
      description: "Luxurious marble look without the cost and weight",
    },
  ];

  const features = [
    {
      title: "Easy Application",
      description: "Professional installation ensures bubble-free perfect finish",
      icon: "🎨",
    },
    {
      title: "Washable & Durable",
      description: "Easy to clean and maintain for long-lasting beauty",
      icon: "💧",
    },
    {
      title: "Design Variety",
      description: "Hundreds of patterns, colors, and textures to choose from",
      icon: "✨",
    },
  ];

  const aboutContent = [
    "Wallpaper is one of the most impactful ways to transform a room. Our extensive collection features everything from subtle textures to bold patterns, offering endless possibilities for your interior design.",
    "We stock wallpapers from leading manufacturers worldwide, ensuring you have access to the latest trends and timeless classics. Choose from various materials including vinyl, fabric-backed, and premium designer options.",
    "Our professional installation service guarantees a perfect finish. We handle all aspects including wall preparation, precise pattern matching, and seamless application. Transform your space in just one day with our expert team.",
  ];

  return (
    <CatalogTemplate
      title="Wallpaper"
      description="Transform your walls with stunning designer wallpapers"
      priceRange="Starting at AED 35 per sq. meter"
      heroImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=500&fit=crop"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
