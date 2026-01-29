"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ContactPage() {
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

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Get In Touch"
            title="Ready to Order Your Flowers?"
            description="Subscribe to our newsletter for exclusive deals, new arrivals, and floral care tips delivered right to your inbox."
            useInvertedBackground="invertDefault"
            imageSrc="https://img.b2bpic.net/free-photo/day-beauti-flowers-flower-white_1303-2012.jpg"
            imageAlt="Gorgeous flower arrangement in a gift box"
            mediaPosition="right"
            inputPlaceholder="Enter your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe anytime from our mailing list."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal logoText="Bee Job" />
        </div>
      </div>
    </ThemeProvider>
  );
}
