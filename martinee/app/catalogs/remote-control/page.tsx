import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Remote Control Systems - Martini Furniture",
  description: "Smart automation systems for your window treatments. Starting at AED 450",
};

export default function RemoteControlPage() {
  const products = [
    { name: "Basic Remote Motor", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop", price: "AED 450", description: "Simple remote control operation for blinds" },
    { name: "Smart Home Integration", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop", price: "AED 650", description: "Compatible with Alexa, Google Home, and Apple HomeKit" },
    { name: "Timer Control System", image: "https://images.unsplash.com/photo-1606146485686-bc3e53f24a7c?w=600&h=600&fit=crop", price: "AED 550", description: "Programmable schedules for automated operation" },
    { name: "Multi-Channel Controller", image: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=600&h=600&fit=crop", price: "AED 750", description: "Control multiple blinds from one device" },
    { name: "Solar-Powered Motor", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=600&fit=crop", price: "AED 850", description: "Eco-friendly solar charging with battery backup" },
    { name: "Premium Silent Motor", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop", price: "AED 950", description: "Whisper-quiet operation with advanced features" },
  ];

  const features = [
    { title: "Convenience", description: "Control your blinds without leaving your seat", icon: "🎮" },
    { title: "Smart Integration", description: "Works with popular smart home platforms", icon: "🏠" },
    { title: "Energy Savings", description: "Automated schedules optimize natural light and temperature", icon: "💡" },
  ];

  const aboutContent = [
    "Modernize your window treatments with our range of motorization and remote control solutions. Enjoy the convenience of operating your blinds, curtains, or shades at the touch of a button or through voice commands.",
    "Our automation systems range from simple remote controls to fully integrated smart home solutions. Schedule your window coverings to open and close automatically, control them via smartphone app, or integrate with voice assistants like Alexa and Google Home.",
    "Professional installation ensures smooth, reliable operation. We can retrofit motors to most existing window treatments or install them with new blinds and curtains. Transform your space into a smart home with our cutting-edge automation technology.",
  ];

  return <CatalogTemplate title="Remote Control Systems" description="Smart automation systems for your window treatments" priceRange="Starting at AED 450 per motor" heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=500&fit=crop" products={products} features={features} aboutContent={aboutContent} />;
}
