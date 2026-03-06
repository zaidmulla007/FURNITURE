import CatalogTemplate from "@/app/components/CatalogTemplate";

export const metadata = {
  title: "Remote Control Systems - Martini Furniture",
  description: "Smart automation systems for your window treatments",
};

export default function RemoteControlPage() {
  const products = [
    { name: "Basic Remote Motor", image: "/images/RemoteControlSystem/PNG-01.jpg", description: "Simple remote control operation for blinds" },
    { name: "Smart Home Integration", image: "/images/RemoteControlSystem/PNG-02.jpg", description: "Compatible with Alexa, Google Home, and Apple HomeKit" },
    { name: "Timer Control System", image: "/images/RemoteControlSystem/PNG-03.jpg", description: "Programmable schedules for automated operation" },
    { name: "Multi-Channel Controller", image: "/images/RemoteControlSystem/PNG-04.jpg", description: "Control multiple blinds from one device" },
    { name: "Solar-Powered Motor", image: "/images/RemoteControlSystem/PNG-05.jpg", description: "Eco-friendly solar charging with battery backup" },
    { name: "Premium Silent Motor", image: "/images/RemoteControlSystem/PNG-06.jpg", description: "Whisper-quiet operation with advanced features" },
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

  return <CatalogTemplate title="Remote Control Systems" description="Smart automation systems for your window treatments" heroImage="/images/RemoteControlSystem/PNG-07.jpg" products={products} features={features} aboutContent={aboutContent} />;
}
