import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Parquet Flooring - Martini Furniture",
  description: "Timeless parquet flooring in various patterns and finishes",
};

export default function ParquetFlooringPage() {
  const products = [
    { name: "Herringbone Parquet", image: "/images/FlooringParquet/PNG-01.jpg", description: "Classic herringbone pattern in oak" },
    { name: "Chevron Parquet", image: "/images/FlooringParquet/PNG-02.jpg", description: "Elegant chevron V-pattern design" },
    { name: "Basket Weave Parquet", image: "/images/FlooringParquet/PNG-03.jpg", description: "Traditional basket weave layout" },
    { name: "Versailles Panel Parquet", image: "/images/FlooringParquet/PNG-04.jpg", description: "Luxurious French-inspired panels" },
    { name: "Engineered Parquet", image: "/images/FlooringParquet/PNG-05.jpg", description: "Stable engineered wood construction" },
    { name: "Custom Design Parquet", image: "/images/FlooringParquet/PNG-06.jpg", description: "Bespoke patterns tailored to your vision" },
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

  return <CatalogTemplate title="Parquet Flooring" description="Timeless parquet flooring in various patterns and finishes" heroImage="/images/FlooringParquet/PNG-07.jpg" products={products} features={features} aboutContent={aboutContent} />;
}
