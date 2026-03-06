import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Vertical Blinds - Martini Furniture",
  description: "Perfect for large windows and sliding doors with vertical operation",
};

export default function VerticalBlindsPage() {
  const products = [
    { name: "Fabric Vertical Blinds", image: "/images/VerticalBlinds/PNG-01.jpg", description: "Soft fabric slats in various colors and textures" },
    { name: "PVC Vertical Blinds", image: "/images/VerticalBlinds/PNG-02.jpg", description: "Waterproof and easy to clean for practical use" },
    { name: "Wooden Vertical Blinds", image: "/images/VerticalBlinds/PNG-03.jpg", description: "Natural wood finish for warm elegance" },
    { name: "Blackout Vertical Blinds", image: "/images/VerticalBlinds/PNG-04.jpg", description: "Complete light blocking capability" },
    { name: "Patterned Vertical Blinds", image: "/images/VerticalBlinds/PNG-05.jpg", description: "Decorative patterns for style" },
    { name: "Motorized Vertical Blinds", image: "/images/VerticalBlinds/PNG-06.jpg", description: "Smart automation with remote control" },
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

  return <CatalogTemplate title="Vertical Blinds" description="Perfect for large windows and sliding doors" heroImage="/images/VerticalBlinds/PNG-07.jpg" products={products} features={features} aboutContent={aboutContent} />;
}
