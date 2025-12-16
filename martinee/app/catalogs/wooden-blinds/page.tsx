import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Wooden Blinds - Martini Furniture",
  description: "Classic elegance with natural wood grain and warmth. Starting at AED 95 per sq. meter",
};

export default function WoodenBlindsPage() {
  const products = [
    { name: "Basswood Blinds", image: "https://images.unsplash.com/photo-1618220924273-338d82d6b886?w=600&h=600&fit=crop", price: "AED 95 per sq.m", description: "Lightweight and smooth natural basswood" },
    { name: "Oak Wooden Blinds", image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=600&h=600&fit=crop", price: "AED 125 per sq.m", description: "Premium oak with rich grain patterns" },
    { name: "Stained Wood Blinds", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=600&fit=crop", price: "AED 110 per sq.m", description: "Various stain colors to match your décor" },
    { name: "Faux Wood Blinds", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop", price: "AED 75 per sq.m", description: "Wood look with superior durability and moisture resistance" },
    { name: "Wide Slat Wooden Blinds", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop", price: "AED 115 per sq.m", description: "Contemporary wider slats for modern style" },
    { name: "Motorized Wooden Blinds", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop", price: "AED 185 per sq.m", description: "Automated operation for convenience" },
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

  return <CatalogTemplate title="Wooden Blinds" description="Classic elegance with natural wood grain and warmth" priceRange="Starting at AED 95 per sq. meter" heroImage="https://images.unsplash.com/photo-1618220924273-338d82d6b886?w=1920&h=500&fit=crop" products={products} features={features} aboutContent={aboutContent} />;
}
