"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, Leaf, Heart, Truck, Award } from 'lucide-react';

export default function LandingPage() {
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
            text: "Order Now",            href: "/products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Bloom with Bee Job - Handcrafted Floral Arrangements"
          description="Discover our exquisite collection of premium flowers for every occasion. Fresh blooms delivered with care and elegance."
          tag="Premium Flowers"
          tagIcon={Sparkles}
          buttons={[
            { text: "Shop Now", href: "/products" },
            { text: "View Pricing", href: "/pricing" },
          ]}
          carouselItems={[
            {
              id: "1",              imageSrc: "https://img.b2bpic.net/free-photo/bouquet-pink-roses-single-branch-rose-with-green-leaves-inside-vase_114579-1440.jpg",              imageAlt: "Luxury rose bouquet"
            },
            {
              id: "2",              imageSrc: "https://img.b2bpic.net/free-photo/bouquet-pink-roses-with-green-leaves-inside-vase_114579-1439.jpg",              imageAlt: "Spring tulip arrangement"
            },
            {
              id: "3",              imageSrc: "https://img.b2bpic.net/free-photo/violet-pink-tone-flowers-bouquet_114579-2150.jpg",              imageAlt: "Bright sunflower bouquet"
            },
            {
              id: "4",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-luxurious-bouquet-pink-roses-white-red-dahlias-black_181624-22567.jpg",              imageAlt: "Elegant white lilies"
            },
            {
              id: "5",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-luxurious-bouquet-pink-roses-white-red-dahlias_181624-23613.jpg",              imageAlt: "Pink peonies luxury arrangement"
            },
            {
              id: "6",              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-beautifully-bloomed-colorful-rose-flowers_23-2149005528.jpg",              imageAlt: "Mixed colorful flower bouquet"
            },
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          background={{ variant: "plain" }}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Collections"
          description="Hand-selected bouquets crafted by our expert florists for every special moment"
          tag="Fresh Daily"
          tagIcon={Leaf}
          products={[
            {
              id: "1",              name: "Romantic Red Roses",              price: "$89.99",              variant: "12 stems • Premium grade",              imageSrc: "https://img.b2bpic.net/free-photo/floral-decor-woman-holding-bouquet-anthurium_140725-10842.jpg",              imageAlt: "Red roses bouquet",              isFavorited: false,
            },
            {
              id: "2",              name: "Spring Tulip Paradise",              price: "$74.99",              variant: "15 stems • Mixed colors",              imageSrc: "https://img.b2bpic.net/free-photo/romantic-bouquet-fresh-flowers-wedding-celebration-generated-by-ai_188544-45526.jpg",              imageAlt: "Colorful tulip arrangement",              isFavorited: false,
            },
            {
              id: "3",              name: "Sunshine Sunflowers",              price: "$64.99",              variant: "10 stems • Cheerful arrangement",              imageSrc: "https://img.b2bpic.net/free-photo/valentines-day-womens-mothers-day-red-rose-with-ribbon-gift-surprise_114579-427.jpg",              imageAlt: "Bright sunflower bouquet",              isFavorited: false,
            },
            {
              id: "4",              name: "Exotic Orchid Elegance",              price: "$99.99",              variant: "8 stems • Rare varieties",              imageSrc: "https://img.b2bpic.net/free-photo/valentines-day-womens-mothers-day-red-rose-with-ribbon-heart-gift-surprise_114579-449.jpg",              imageAlt: "Premium orchid arrangement",              isFavorited: false,
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "View All Collections", href: "/products" },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="At Bee Job, we craft each bouquet with passion, using only the freshest, most vibrant blooms sourced from sustainable gardens"
          metrics={[
            { icon: Leaf, label: "Years in Blooms", value: "15+" },
            { icon: Heart, label: "Happy Customers", value: "8,500+" },
            { icon: Truck, label: "Same-Day Delivery", value: "Available" },
            { icon: Award, label: "Awards Won", value: "12" },
          ]}
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="comparison" data-section="comparison">
        <FeatureCardSixteen
          title="Why Choose Bee Job Flowers"
          description="Experience the difference between ordinary and extraordinary floral arrangements"
          tag="What Sets Us Apart"
          negativeCard={{
            items: [
              "Mass-produced arrangements",              "Limited variety selection",              "Slow delivery times",              "Low-quality blooms",              "No personalization options"
            ],
          }}
          positiveCard={{
            items: [
              "Handcrafted with artistry",              "Curated premium selection",              "Same-day delivery available",              "Freshest blooms guaranteed",              "Custom arrangements welcome"
            ],
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Real experiences from those who've trusted Bee Job for their special moments"
          tag="Customer Love"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              handle: "Wedding Guest",              testimonial: "The bouquets were absolutely stunning and arrived fresh. The florist really understood what I wanted. Highly recommended!",              imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-woman_23-2148574874.jpg",              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",              name: "James Chen",              handle: "Corporate Client",              testimonial: "We use Bee Job for all our office events. Consistent quality and beautiful arrangements every single time.",              imageSrc: "https://img.b2bpic.net/free-photo/caucasion-woman-casual-confident-concept_53876-137678.jpg",              imageAlt: "James Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              handle: "Regular Customer",              testimonial: "The customer service is incredible. They helped me pick the perfect flowers for my mother's birthday. Will order again!",              imageSrc: "https://img.b2bpic.net/free-photo/positive-blond-girl-shows-tongue-winks-camera-makes-happy-funny-face-stands-against-white-background_176420-46979.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "Michael Park",              handle: "Anniversary Celebrant",              testimonial: "After 10 years of marriage, I needed something special. Bee Job delivered beyond expectations. Worth every penny.",              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-smiling_176474-95672.jpg",              imageAlt: "Michael Park"
            },
            {
              id: "5",              name: "Lisa Anderson",              handle: "Event Planner",              testimonial: "As an event planner, I trust Bee Job with my most important clients. Their reliability is unmatched in the industry.",              imageSrc: "https://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13341.jpg",              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",              name: "David Thompson",              handle: "Repeat Customer",              testimonial: "The freshness of these flowers lasts so much longer than other florists. That's why I come back every time.",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-attractive-african-american-woman-smiling-looking-happy-standing-yellow-background_1258-54850.jpg",              imageAlt: "David Thompson"
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          speed={40}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Ready to Transform Your Occasions?"
          description="Subscribe to our newsletter for exclusive deals, new arrivals, and floral care tips delivered right to your inbox."
          tag="Pricing & Offers"
          plans={[
            {
              id: "1",              badge: "Classic Arrangement",              badgeIcon: Leaf,
              price: "$49.99",              name: "Perfect for birthdays and celebrations",              buttons: [
                { text: "Choose Plan", href: "/products" },
              ],
              features: [
                "6-8 stems of premium flowers",                "Elegant vase included",                "Standard delivery available",                "Free greeting card"
              ],
            },
            {
              id: "2",              badge: "Premium Bouquet",              badgeIcon: Sparkles,
              price: "$84.99",              name: "Best for romantic occasions",              buttons: [
                { text: "Choose Plan", href: "/products" },
              ],
              features: [
                "12-15 stems of luxury flowers",                "Premium decorative vase",                "Same-day delivery included",                "Personalized message card",                "Complimentary ribbon wrap"
              ],
            },
            {
              id: "3",              badge: "Grand Celebration",              badgeIcon: Heart,
              price: "$149.99",              name: "For unforgettable moments",              buttons: [
                { text: "Choose Plan", href: "/products" },
              ],
              features: [
                "20+ stems of exotic varieties",                "Designer luxury arrangement",                "Priority same-day delivery",                "Bespoke consultation included",                "Premium packaging",                "Flower care guide provided"
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
    </ThemeProvider>
  );
}
