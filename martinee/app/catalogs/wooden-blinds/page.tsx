import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Wooden Blinds - Martini Furniture",
  description: "Classic elegance with natural wood grain and warmth",
};

export default function WoodenBlindsPage() {
  const products = [
    { name: "Basswood Blinds", image: "/images/WoodenBlinds/PNG-01.jpg", description: "Lightweight and smooth natural basswood" },
    { name: "Oak Wooden Blinds", image: "/images/WoodenBlinds/PNG-02.jpg", description: "Premium oak with rich grain patterns" },
    { name: "Stained Wood Blinds", image: "/images/WoodenBlinds/PNG-03.jpg", description: "Various stain colors to match your décor" },
    { name: "Faux Wood Blinds", image: "/images/WoodenBlinds/PNG-04.jpg", description: "Wood look with superior durability and moisture resistance" },
    { name: "Wide Slat Wooden Blinds", image: "/images/WoodenBlinds/PNG-05.jpg", description: "Contemporary wider slats for modern style" },
    { name: "Motorized Wooden Blinds", image: "/images/WoodenBlinds/PNG-06.jpg", description: "Automated operation for convenience" },
  ];

  const features = [
    { title: "Natural Beauty", description: "Authentic wood grain brings warmth and character", icon: "🌳" },
    { title: "Timeless Style", description: "Classic design that never goes out of fashion", icon: "✨" },
    { title: "Durable Quality", description: "Solid construction for long-lasting performance", icon: "💪" },
  ];

  const aboutContent = [
    "Wooden blinds offer timeless elegance and natural beauty that complements any interior style. The warmth and texture of real wood creates an inviting atmosphere while providing excellent light control.",
    "We offer a range of wood species and finishes, from light basswood to rich oak, with various stain options to perfectly match your existing décor. For high-moisture areas, we also offer faux wood options that look like real wood but offer superior durability.",
    "All wooden blinds are custom-made with precision and include professional installation. Choose from various slat widths and operation systems including traditional cord, wand control, or motorized automation for ultimate convenience.",
  ];

  return <CatalogTemplate title="Wooden Blinds" description="Classic elegance with natural wood grain and warmth" heroImage="/images/WoodenBlinds/PNG-07.jpg" products={products} features={features} aboutContent={aboutContent} />;
}
