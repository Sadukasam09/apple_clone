import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDuo from "./components/FeaturedDuo";
import ProductGrid from "./components/ProductGrid";
import TVCarousel from "./components/TVCarousel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDuo />
        <ProductGrid />
        <TVCarousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
