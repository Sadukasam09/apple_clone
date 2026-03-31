import Hero from "../components/Hero";
import FeaturedDuo from "../components/FeaturedDuo";
import ProductGrid from "../components/ProductGrid";
import TVCarousel from "../components/TVCarousel";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedDuo />
      <ProductGrid />
      <TVCarousel />
    </main>
  );
}