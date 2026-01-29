"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, Leaf, Heart } from 'lucide-react';

export default function PricingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div className="min-h-screen bg-background">
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            brandName="Bee Job"
            navItems={[
              { name: "Home", id: "/" },
              { name: "Products", id: "/products" },
              { name: "Pricing", id: "/pricing" },
              { name: "Contact", id: "/contact" },
            ]}
            button={{
              text: "Order Now",              href: "/products"
            }}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardThree
            title="Flexible Plans for Every Occasion"
            description="Choose the perfect arrangement package for your special moment. All plans include free greeting card and careful delivery."
            tag="Pricing"
            plans={[
              {
                id: "1",                badge: "Classic Arrangement",                badgeIcon: Leaf,
                price: "$49.99",                name: "Perfect for birthdays and celebrations",                buttons: [
                  { text: "Choose Plan", href: "/products" },
                  { text: "Customize", href: "/products" },
                ],
                features: [
                  "6-8 stems of premium flowers",                  "Elegant vase included",                  "Standard delivery available",                  "Free greeting card"
                ],
              },
              {
                id: "2",                badge: "Premium Bouquet",                badgeIcon: Sparkles,
                price: "$84.99",                name: "Best for romantic occasions",                buttons: [
                  { text: "Choose Plan", href: "/products" },
                  { text: "Customize", href: "/products" },
                ],
                features: [
                  "12-15 stems of luxury flowers",                  "Premium decorative vase",                  "Same-day delivery included",                  "Personalized message card",                  "Complimentary ribbon wrap"
                ],
              },
              {
                id: "3",                badge: "Grand Celebration",                badgeIcon: Heart,
                price: "$149.99",                name: "For unforgettable moments",                buttons: [
                  { text: "Choose Plan", href: "/products" },
                  { text: "Customize", href: "/products" },
                ],
                features: [
                  "20+ stems of exotic varieties",                  "Designer luxury arrangement",                  "Priority same-day delivery",                  "Bespoke consultation included",                  "Premium packaging",                  "Flower care guide provided"
                ],
              },
              {
                id: "4",                price: "$199.99",                name: "For corporate events and weddings",                buttons: [
                  { text: "Contact Us", href: "/contact" },
                  { text: "Learn More", href: "/pricing" },
                ],
                features: [
                  "30+ stems of premium selection",                  "Custom color schemes",                  "Multiple arrangement options",                  "Dedicated florist consultation",                  "Event planning support",                  "White glove delivery service",                  "Special occasion guarantee"
                ],
              },
            ]}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground="noInvert"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal logoText="Bee Job" />
        </div>
      </div>
    </ThemeProvider>
  );
}
