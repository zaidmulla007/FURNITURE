import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Wallpaper - Martini Furniture",
  description: "Transform your walls with stunning designer wallpapers",
};

export default function WallpaperPage() {
  const products = [
    {
      name: "Modern Geometric Wallpaper",
      image: "/images/Wallpaper/PNG-01.jpg",

      description: "Contemporary geometric patterns for modern interiors",
    },
    {
      name: "Textured Plain Wallpaper",
      image: "/images/Wallpaper/PNG-02.jpg",

      description: "Subtle texture adds depth without overwhelming the space",
    },
    {
      name: "Floral Designer Wallpaper",
      image: "/images/Wallpaper/PNG-03.jpg",

      description: "Elegant floral designs for sophisticated spaces",
    },
    {
      name: "3D Effect Wallpaper",
      image: "/images/Wallpaper/PNG-04.jpg",

      description: "Dramatic 3D visual effects for feature walls",
    },
    {
      name: "Brick Effect Wallpaper",
      image: "/images/Wallpaper/PNG-05.jpg",

      description: "Realistic brick texture for industrial-style décor",
    },
    {
      name: "Marble Effect Wallpaper",
      image: "/images/Wallpaper/PNG-06.jpg",

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

      heroImage="/images/Wallpaper/PNG-07.jpg"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
