import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Curtains - Martini Furniture",
  description: "Premium curtains and drapes for sophisticated window styling",
};

export default function CurtainsPage() {
  const products = [
    {
      name: "Blackout Curtains",
      image: "/images/Curtain/PNG-01.jpg",

      description: "Complete light blocking for bedrooms and media rooms",
    },
    {
      name: "Sheer Voile Curtains",
      image: "/images/Curtain/PNG-02.jpg",

      description: "Light and airy for soft natural light filtering",
    },
    {
      name: "Velvet Luxury Curtains",
      image: "/images/Curtain/PNG-03.jpg",

      description: "Opulent velvet fabric for elegant sophistication",
    },
    {
      name: "Thermal Insulated Curtains",
      image: "/images/Curtain/PNG-04.jpg",

      description: "Energy-efficient with temperature control properties",
    },
    {
      name: "Patterned Designer Curtains",
      image: "/images/Curtain/PNG-05.jpg",

      description: "Unique patterns and designs to enhance your décor",
    },
    {
      name: "Motorized Smart Curtains",
      image: "/images/Curtain/PNG-06.jpg",

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

      heroImage="/images/Curtain/PNG-07.jpg"
      products={products}
      features={features}
      aboutContent={aboutContent}
    />
  );
}
