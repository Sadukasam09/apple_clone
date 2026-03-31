import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
