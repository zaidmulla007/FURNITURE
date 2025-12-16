# Martini Furniture Website

A modern, responsive furniture and interior solutions website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Custom Theme Colors**: Primary (#3b4d33) and Secondary (#23c9bc)
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🛋️ **Complete Product Catalog**: 11 product categories with detailed pages
- 🖼️ **Project Gallery**: Showcase of completed installations
- 📞 **WhatsApp Integration**: Direct contact through WhatsApp
- ⚡ **Fast Performance**: Built with Next.js 16 App Router
- 🎯 **SEO Optimized**: Proper metadata and semantic HTML

## Contact Information

- **Phone**: +971 50 552 2437
- **Email**: martiniinterior@gmail.com
- **Managing Director**: AFSAR
- **Business Hours**: 7 AM – 5 PM, Monday – Saturday

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- **Home** (/) - Hero section, product grid, services, and company information
- **About Us** (/about) - Company story, values, and team
- **Our Catalogs** (/catalogs) - Complete product catalog listing
- **Individual Catalog Pages** (/catalogs/[category]) - Detailed product information with pricing
- **Gallery** (/gallery) - Project showcase and client testimonials
- **Contact** (/contact) - Contact form and business information

## Product Categories

1. Roller Blinds - Starting at AED 75/sq.m
2. Vertical Blinds - Starting at AED 70/sq.m
3. Wooden Blinds - Starting at AED 95/sq.m
4. Carpet - Starting at AED 45/sq.m
5. Curtains - Starting at AED 120/panel
6. Wallpaper - Starting at AED 35/sq.m
7. Sofa - Starting at AED 2500
8. LVT Flooring - Starting at AED 55/sq.m
9. SPC Flooring - Starting at AED 60/sq.m
10. Remote Control Systems - Starting at AED 450
11. Parquet Flooring - Starting at AED 85/sq.m

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Unsplash (for demo purposes)

## Customization

### Changing Colors
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #3b4d33;    /* Your primary color */
  --secondary: #23c9bc;  /* Your secondary color */
}
```

### Contact Information
Update contact details in:
- `app/components/Footer.tsx`
- `app/contact/page.tsx`
- WhatsApp links throughout the site

## Notes

- All images are currently sourced from Unsplash for demonstration
- Replace with actual product images for production
- Logo (new-logo.png) is located in `/public` directory and used throughout the site
- Favicon automatically generated from logo
- WhatsApp integration requires valid phone number format

## License

Private project for Martini Furniture LLC.