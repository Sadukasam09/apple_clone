import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MacPage from "./pages/MacPage";
import StorePage from "./pages/StorePage";
import IPadPage from "./pages/iPadPage";
import IPhonePage from "./pages/iPhonePage";
import WatchPage from "./pages/WatchPage";
import AirPodsPage from "./pages/AirPodsPage";
import TVHomePage from "./pages/TVHomePage";
import EntertainmentPage from "./pages/EntertainmentPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import SupportPage from "./pages/SupportPage";
import "./App.css";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function mapExternalUrlToInternalPath(rawUrl) {
  try {
    const parsed = new URL(rawUrl, window.location.origin);
    const combined = `${parsed.hostname}${parsed.pathname}`.toLowerCase();

    if (
      combined.includes("support") ||
      combined.includes("repair") ||
      combined.includes("applecare") ||
      combined.includes("checkcoverage") ||
      combined.includes("iforgot") ||
      combined.includes("account")
    ) {
      return "/support";
    }

    if (combined.includes("airpods")) {
      return "/airpods";
    }

    if (
      combined.includes("apple-tv") ||
      combined.includes("tv") ||
      combined.includes("homepod") ||
      combined.includes("home-app")
    ) {
      return "/tv-home";
    }

    if (
      combined.includes("music") ||
      combined.includes("arcade") ||
      combined.includes("fitness") ||
      combined.includes("podcasts") ||
      combined.includes("books") ||
      combined.includes("app-store") ||
      combined.includes("services")
    ) {
      return "/entertainment";
    }

    if (
      combined.includes("accessories") ||
      combined.includes("airtag") ||
      combined.includes("shop/goto/accessories")
    ) {
      return "/accessories";
    }

    if (combined.includes("watch")) {
      return "/watch";
    }

    if (combined.includes("iphone") || combined.includes("ios")) {
      return "/iphone";
    }

    if (combined.includes("ipad")) {
      return "/ipad";
    }

    if (combined.includes("mac") || combined.includes("imac")) {
      return "/mac";
    }

    if (
      combined.includes("store") ||
      combined.includes("shop") ||
      combined.includes("retail")
    ) {
      return "/store";
    }
  } catch {
    return "/";
  }

  return "/";
}

function InternalNavigationGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      let parsed;
      try {
        parsed = new URL(href, window.location.origin);
      } catch {
        return;
      }

      if (parsed.origin === window.location.origin) {
        return;
      }

      event.preventDefault();
      navigate(mapExternalUrlToInternalPath(parsed.href));
    };

    const originalOpen = window.open;

    window.open = (url, target, features) => {
      if (typeof url === "string") {
        navigate(mapExternalUrlToInternalPath(url));
      }

      return null;
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.open = originalOpen;
    };
  }, [navigate]);

  return null;
}

function App() {
  return (
    <>
      <a className="skip-link" href="#app-main-content">
        Skip to main content
      </a>
      <ScrollToTopOnRouteChange />
      <InternalNavigationGuard />
      <Navbar />
      <div id="app-main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<IPadPage />} />
          <Route path="/iphone" element={<IPhonePage />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/airpods" element={<AirPodsPage />} />
          <Route path="/tv-home" element={<TVHomePage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
