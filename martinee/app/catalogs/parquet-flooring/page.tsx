import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Parquet Flooring - Martini Furniture",
  description: "Timeless parquet flooring in various patterns and finishes. Starting at AED 85 per sq. meter",
};

export default function ParquetFlooringPage() {
  const products = [
    { name: "Herringbone Parquet", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=600&fit=crop", price: "AED 95 per sq.m", description: "Classic herringbone pattern in oak" },
    { name: "Chevron Parquet", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=600&fit=crop", price: "AED 110 per sq.m", description: "Elegant chevron V-pattern design" },
    { name: "Basket Weave Parquet", image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=600&h=600&fit=crop", price: "AED 85 per sq.m", description: "Traditional basket weave layout" },
    { name: "Versailles Panel Parquet", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=600&fit=crop", price: "AED 145 per sq.m", description: "Luxurious French-inspired panels" },
    { name: "Engineered Parquet", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop", price: "AED 90 per sq.m", description: "Stable engineered wood construction" },
    { name: "Custom Design Parquet", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=600&fit=crop", price: "AED 165 per sq.m", description: "Bespoke patterns tailored to your vision" },
  ];

  const features = [
    { title: "Artistic Patterns", description: "Geometric designs create stunning visual impact", icon: "🎨" },
    { title: "Premium Wood", description: "High-quality hardwoods for lasting beauty", icon: "🌳" },
    { title: "Expert Craftsmanship", description: "Precise installation for perfect pattern alignment", icon: "🔨" },
  ];

  const aboutContent = [
    "Parquet flooring is the epitome of classic elegance, featuring geometric wood patterns that have adorned prestigious buildings for centuries. Each pattern is carefully crafted to create stunning visual interest and timeless beauty.",
    "We offer a variety of traditional and contemporary parquet patterns including herringbone, chevron, basket weave, and custom designs. Available in multiple wood species and finishes, parquet flooring adds character and sophistication to any space.",
    "Our skilled craftsmen ensure precise installation with perfect pattern alignment and seamless transitions. Whether you choose solid wood or engineered parquet, our expert team will deliver impeccable results that enhance your property's value and appeal.",
  ];

  return <CatalogTemplate title="Parquet Flooring" description="Timeless parquet flooring in various patterns and finishes" priceRange="Starting at AED 85 per sq. meter" heroImage="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&h=500&fit=crop" products={products} features={features} aboutContent={aboutContent} />;
}
