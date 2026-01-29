"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Leaf } from 'lucide-react';

export default function ProductsPage() {
  const allProducts = [
    {
      id: "1",      name: "Romantic Red Roses",      price: "$89.99",      variant: "12 stems • Premium grade",      imageSrc: "https://img.b2bpic.net/free-photo/floral-decor-woman-holding-bouquet-anthurium_140725-10842.jpg",      imageAlt: "Red roses bouquet",      isFavorited: false,
    },
    {
      id: "2",      name: "Spring Tulip Paradise",      price: "$74.99",      variant: "15 stems • Mixed colors",      imageSrc: "https://img.b2bpic.net/free-photo/romantic-bouquet-fresh-flowers-wedding-celebration-generated-by-ai_188544-45526.jpg",      imageAlt: "Colorful tulip arrangement",      isFavorited: false,
    },
    {
      id: "3",      name: "Sunshine Sunflowers",      price: "$64.99",      variant: "10 stems • Cheerful arrangement",      imageSrc: "https://img.b2bpic.net/free-photo/valentines-day-womens-mothers-day-red-rose-with-ribbon-gift-surprise_114579-427.jpg",      imageAlt: "Bright sunflower bouquet",      isFavorited: false,
    },
    {
      id: "4",      name: "Exotic Orchid Elegance",      price: "$99.99",      variant: "8 stems • Rare varieties",      imageSrc: "https://img.b2bpic.net/free-photo/valentines-day-womens-mothers-day-red-rose-with-ribbon-heart-gift-surprise_114579-449.jpg",      imageAlt: "Premium orchid arrangement",      isFavorited: false,
    },
    {
      id: "5",      name: "Lavender Dreams",      price: "$79.99",      variant: "14 stems • Calming blend",      imageSrc: "https://img.b2bpic.net/free-photo/bouquet-pink-roses-single-branch-rose-with-green-leaves-inside-vase_114579-1440.jpg",      imageAlt: "Lavender dream bouquet",      isFavorited: false,
    },
    {
      id: "6",      name: "White Elegance",      price: "$94.99",      variant: "12 stems • Classic white",      imageSrc: "https://img.b2bpic.net/free-photo/bouquet-pink-roses-with-green-leaves-inside-vase_114579-1439.jpg",      imageAlt: "White elegance arrangement",      isFavorited: false,
    },
    {
      id: "7",      name: "Sunset Blend",      price: "$84.99",      variant: "16 stems • Warm tones",      imageSrc: "https://img.b2bpic.net/free-photo/violet-pink-tone-flowers-bouquet_114579-2150.jpg",      imageAlt: "Sunset blend arrangement",      isFavorited: false,
    },
    {
      id: "8",      name: "Tropical Sunset",      price: "$109.99",      variant: "20 stems • Exotic collection",      imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-luxurious-bouquet-pink-roses-white-red-dahlias-black_181624-22567.jpg",      imageAlt: "Tropical sunset arrangement",      isFavorited: false,
    },
    {
      id: "9",      name: "Garden Party Bouquet",      price: "$69.99",      variant: "18 stems • Mixed garden flowers",      imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-luxurious-bouquet-pink-roses-white-red-dahlias_181624-23613.jpg",      imageAlt: "Garden party bouquet",      isFavorited: false,
    },
    {
      id: "10",      name: "Rainbow Celebration",      price: "$99.99",      variant: "24 stems • All colors",      imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-beautifully-bloomed-colorful-rose-flowers_23-2149005528.jpg",      imageAlt: "Rainbow celebration bouquet",      isFavorited: false,
    },
    {
      id: "11",      name: "Minimalist Zen",      price: "$54.99",      variant: "6 stems • Simple elegance",      imageSrc: "https://img.b2bpic.net/free-photo/day-beauti-flowers-flower-white_1303-2012.jpg",      imageAlt: "Minimalist zen arrangement",      isFavorited: false,
    },
    {
      id: "12",      name: "Executive Gift Box",      price: "$124.99",      variant: "Premium arrangement in gift box",      imageSrc: "https://img.b2bpic.net/free-photo/floral-decor-woman-holding-bouquet-anthurium_140725-10842.jpg",      imageAlt: "Executive gift box arrangement",      isFavorited: false,
    },
  ];

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
              { name: "Contact", id: "contact" },
            ]}
            button={{
              text: "Order Now",              href: "/products"
            }}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardFour
            title="All Products"
            description="Explore our complete collection of handcrafted floral arrangements"
            tag="Full Catalog"
            tagIcon={Leaf}
            products={allProducts}
            gridVariant="three-columns-all-equal-width"
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