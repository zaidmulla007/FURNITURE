import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Vertical Blinds - Martini Furniture",
  description: "Perfect for large windows and sliding doors with vertical operation. Starting at AED 70 per sq. meter",
};

export default function VerticalBlindsPage() {
  const products = [
    { name: "Fabric Vertical Blinds", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&h=600&fit=crop", price: "AED 70 per sq.m", description: "Soft fabric slats in various colors and textures" },
    { name: "PVC Vertical Blinds", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop", price: "AED 65 per sq.m", description: "Waterproof and easy to clean for practical use" },
    { name: "Wooden Vertical Blinds", image: "https://images.unsplash.com/photo-1618220924273-338d82d6b886?w=600&h=600&fit=crop", price: "AED 95 per sq.m", description: "Natural wood finish for warm elegance" },
    { name: "Blackout Vertical Blinds", image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=600&fit=crop", price: "AED 85 per sq.m", description: "Complete light blocking capability" },
    { name: "Patterned Vertical Blinds", image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&h=600&fit=crop", price: "AED 80 per sq.m", description: "Decorative patterns for style" },
    { name: "Motorized Vertical Blinds", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop", price: "AED 150 per sq.m", description: "Smart automation with remote control" },
  ];

  const features = [
    { title: "Large Windows", description: "Ideal solution for expansive windows and patio doors", icon: "🪟" },
    { title: "Smooth Operation", description: "Effortless opening and closing with quality mechanisms", icon: "⚙️" },
    { title: "Light Control", description: "Precise adjustment of natural light and privacy", icon: "☀️" },
  ];

  const aboutContent = [
    "Vertical blinds are the perfect window treatment solution for large windows, sliding doors, and wide openings. The vertical slat design allows for smooth operation and excellent light control.",
    "Our vertical blinds are available in numerous materials including fabric, PVC, and wood, with a wide selection of colors and patterns. They're particularly well-suited for modern and commercial interiors.",
    "Professional installation ensures smooth operation and perfect alignment. All our vertical blinds are custom-made to your exact measurements and come with quality tracking systems for long-lasting performance.",
  ];

  return <CatalogTemplate title="Vertical Blinds" description="Perfect for large windows and sliding doors" priceRange="Starting at AED 70 per sq. meter" heroImage="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=1920&h=500&fit=crop" products={products} features={features} aboutContent={aboutContent} />;
}
