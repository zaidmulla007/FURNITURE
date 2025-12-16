import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Curtains - Martini Furniture",
  description: "Premium curtains and drapes for sophisticated window styling. Starting at AED 120 per panel",
};

export default function CurtainsPage() {
  const products = [
    {
      name: "Blackout Curtains",
      image: "https://images.unsplash.com/photo-1565183928294-7d22f2d53383?w=600&h=600&fit=crop",
      price: "AED 180 per panel",
      description: "Complete light blocking for bedrooms and media rooms",
    },
    {
      name: "Sheer Voile Curtains",
      image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&h=600&fit=crop",
      price: "AED 120 per panel",
      description: "Light and airy for soft natural light filtering",
    },
    {
      name: "Velvet Luxury Curtains",
      image: "https://images.unsplash.com/photo-1604066867775-43f48e3d6a66?w=600&h=600&fit=crop",
      price: "AED 250 per panel",
      description: "Opulent velvet fabric for elegant sophistication",
    },
    {
      name: "Thermal Insulated Curtains",
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&h=600&fit=crop",
      price: "AED 200 per panel",
      description: "Energy-efficient with temperature control properties",
    },
    {
      name: "Patterned Designer Curtains",
      image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&h=600&fit=crop",
      price: "AED 220 per panel",
      description: "Unique patterns and designs to enhance your décor",
    },
    {
      name: "Motorized Smart Curtains",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop",
      price: "AED 350 per panel",
      description: "Automated operation with remote and smart home integration",
    },
  ];

  const features = [
    {
      title: "Custom Made",
      description: "Tailored to your exact window measurements for perfect fit",
      icon: "📏",
    },
    {
      title: "Premium Fabrics",
      description: "High-quality materials from leading textile manufacturers",
      icon: "✨",
    },
    {
      title: "Expert Installation",
      description: "Professional hanging and styling for flawless results",
      icon: "🔧",
    },
  ];

  const aboutContent = [
    "Our curtain collection offers the perfect finishing touch for any window. Choose from a wide range of fabrics, colors, and styles to complement your interior design and meet your functional needs.",
    "We offer everything from light-filtering sheers to complete blackout options, thermal insulated curtains for energy efficiency, and luxury fabrics like velvet and silk for ultimate elegance. All curtains are custom-made to your exact specifications.",
    "Professional installation is included with all curtain orders. Our team will measure your windows, recommend the best hanging solutions, and install your curtains with precision. We also offer motorization options for convenient automated operation.",
  ];

  return (
    <CatalogTemplate
      title="Curtains"
      description="Premium curtains and drapes for sophisticated window styling"
      priceRange="Starting at AED 120 per panel"
      heroImage="https://images.unsplash.com/photo-1565183928294-7d22f2d53383?w=1920&h=500&fit=crop"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
