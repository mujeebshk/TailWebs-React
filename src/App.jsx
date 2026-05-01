import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import PlatformSection from "./components/PlatformSection";
import ProductsSection from "./components/ProductsSection";
import SupportersSection from "./components/SupportersSection";
import Footer from "./components/Footer";

import "./App.css";
import "./styles/global.css";
import "./styles/components.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <PlatformSection />
        <ProductsSection />
        <SupportersSection />
      </main>
      <Footer />
    </div>
  );
}
