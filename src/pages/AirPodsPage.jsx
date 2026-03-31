import { useState } from "react";
import "../product-page.css";
import "./AirPodsPage.css";

/* ── Helpers ── */
function useCarousel(total, visible) {
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, total - visible);
  return {
    idx,
    prev: () => setIdx((i) => Math.max(0, i - 1)),
    next: () => setIdx((i) => Math.min(max, i + 1)),
    canPrev: idx > 0,
    canNext: idx < max,
  };
}
const NavArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M9 2L4 7l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const NavArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M5 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Data ── */
const heroProducts = [
  {
    id: "airpods-max-2",
    badge: "New",
    name: "AirPods Max 2",
    tagline: "New intelligent features. More immersive listening.",
    price: "\u20b967,900.00*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max2-select-midnight-202409?wid=800&hei=800&fmt=png-alpha",
    cta1: "Learn more",
    cta2: "Order",
    dark: false,
    bg: "#f5f5f7",
  },
  {
    id: "airpods-pro-3",
    badge: null,
    name: "AirPods Pro 3",
    tagline: "The world\u2019s best in-ear Active Noise Cancellation.",
    price: "\u20b925,900.00*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro3-select-202409?wid=800&hei=800&fmt=png-alpha",
    cta1: "Learn more",
    cta2: "Buy",
    dark: true,
    bg: "#1d1d1f",
  },
  {
    id: "airpods-4",
    badge: null,
    name: "AirPods 4",
    tagline: "Iconic. Now supersonic.",
    price: "Starting from \u20b912,900.00*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409?wid=800&hei=800&fmt=png-alpha",
    cta1: "Learn more",
    cta2: "Buy",
    dark: false,
    bg: "#f5f5f7",
  },
];

const compareRows = [
  {
    id: "airpods-4-base",
    name: "AirPods 4",
    tagline: "The next evolution of sound and comfort.",
    price: "\u20b912,900.00*",
    anc: false,
    adaptiveAudio: false,
    spatialAudio: true,
    lossless: false,
    heartRate: false,
    hearingHealth: false,
    battery: "5 hours",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: "airpods-4-anc",
    name: "AirPods 4\nActive Noise Cancellation",
    tagline: "The next evolution of sound, comfort and noise control.",
    price: "\u20b917,900.00*",
    anc: true,
    adaptiveAudio: true,
    spatialAudio: true,
    lossless: false,
    heartRate: false,
    hearingHealth: false,
    battery: "5 hours",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: "airpods-pro-3",
    name: "AirPods Pro 3",
    tagline:
      "The world\u2019s best in-ear Active Noise Cancellation, with heart rate sensing during workouts.",
    price: "\u20b925,900.00*",
    anc: true,
    adaptiveAudio: true,
    spatialAudio: true,
    lossless: false,
    heartRate: true,
    hearingHealth: true,
    battery: "8 hours",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro3-select-202409?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: "airpods-max-2",
    name: "AirPods Max 2",
    badge: "New",
    tagline: "The ultimate over\u2011ear personal listening experience.",
    price: "\u20b967,900.00*",
    anc: true,
    adaptiveAudio: true,
    spatialAudio: true,
    lossless: true,
    heartRate: false,
    hearingHealth: false,
    battery: "20 hours",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max2-select-midnight-202409?wid=400&hei=400&fmt=png-alpha",
  },
];

const knowCards = [
  {
    cat: "Heart Rate Sensing",
    title: "Track your heart rate during workouts.",
    dark: true,
    img: "https://www.apple.com/v/airpods/home/images/overview/consider/heart_rate__large.jpg",
  },
  {
    cat: "Live Translation",
    title: "Easily communicate across languages.",
    dark: false,
    img: "https://www.apple.com/v/airpods/home/images/overview/consider/live_translation__large.jpg",
  },
  {
    cat: "Active Noise Cancellation",
    title: "Control what you hear.\nAnd what you don\u2019t.",
    dark: true,
    img: "https://www.apple.com/v/airpods/home/images/overview/consider/anc__large.jpg",
  },
  {
    cat: "Hearing Health",
    title: "Minimise your exposure\nto loud noise.",
    dark: false,
    img: "https://www.apple.com/v/airpods/home/images/overview/consider/hearing_health__large.jpg",
  },
  {
    cat: "Personalised Spatial Audio",
    title: "Immersive sound.\nFine\u2011tuned to you.",
    dark: true,
    img: "https://www.apple.com/v/airpods/home/images/overview/consider/spatial_audio__large.jpg",
  },
];

const KNOW_W = 25;

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#34c759" />
    <path
      d="M4.5 8.5l2.5 2.5 4.5-5"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#e5e5ea" />
    <path
      d="M5.5 5.5l5 5M10.5 5.5l-5 5"
      stroke="#8e8e93"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function AirPodsPage() {
  const knowC = useCarousel(knowCards.length, 4);

  return (
    <div className="pp-page">
      <div className="pp-promo-bar">
        Get up to ₹4000 instant cashback on AirPods with eligible cards. Plus up
        to 6 months of No Cost EMI. <a href="#">Shop AirPods &rsaquo;</a>
      </div>

      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-content-width">
          <h1 className="pp-hero-title">AirPods</h1>
        </div>
      </section>

      {/* Hero product tiles */}
      <section className="ap-hero-tiles">
        <div className="pp-content-width">
          <div className="ap-tiles-grid">
            {heroProducts.map((p) => (
              <div
                key={p.id}
                className={`ap-tile${p.dark ? " ap-tile-dark" : ""}`}
                style={{ background: p.bg }}
              >
                {p.badge && (
                  <span
                    className="pp-card-badge"
                    style={{ position: "absolute", top: 20, left: 20 }}
                  >
                    {p.badge}
                  </span>
                )}
                <div className="ap-tile-img">
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={(e) => {
                      e.target.style.opacity = "0";
                    }}
                  />
                </div>
                <div className="ap-tile-body">
                  <h2
                    className="ap-tile-name"
                    style={{ color: p.dark ? "#fff" : "#1d1d1f" }}
                  >
                    {p.name}
                  </h2>
                  <p
                    className="ap-tile-tagline"
                    style={{
                      color: p.dark ? "rgba(255,255,255,0.7)" : "#6e6e73",
                    }}
                  >
                    {p.tagline}
                  </p>
                  <p
                    className="ap-tile-price"
                    style={{
                      color: p.dark ? "rgba(255,255,255,0.9)" : "#1d1d1f",
                    }}
                  >
                    {p.price}
                  </p>
                  <div className="ap-tile-actions">
                    <a href="#" className="pp-card-btn-primary">
                      {p.cta1}
                    </a>
                    <a
                      href="#"
                      className="pp-card-link"
                      style={{ color: p.dark ? "#2997ff" : "#06c" }}
                    >
                      {p.cta2} &rsaquo;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare models */}
      <section className="ap-compare-section">
        <div className="pp-content-width">
          <div className="pp-lineup-header" style={{ marginBottom: "32px" }}>
            <h2 className="pp-h2">Compare AirPods models</h2>
            <a href="#" className="pp-text-link">
              Compare all AirPods models &rsaquo;
            </a>
          </div>
          <div className="ap-compare-grid">
            {compareRows.map((r) => (
              <div key={r.id} className="ap-compare-card">
                <div className="ap-compare-img">
                  <img
                    src={r.image}
                    alt={r.name}
                    onError={(e) => {
                      e.target.style.opacity = "0";
                    }}
                  />
                </div>
                <div className="ap-compare-body">
                  {r.badge && <span className="pp-card-badge">{r.badge}</span>}
                  <h3
                    className="ap-compare-name"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {r.name}
                  </h3>
                  <p className="ap-compare-tagline">{r.tagline}</p>
                  <p className="ap-compare-price">{r.price}</p>
                  <div className="ap-compare-features">
                    <div className="ap-compare-row">
                      <span>Active Noise Cancellation</span>
                      {r.anc ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className="ap-compare-row">
                      <span>Adaptive Audio</span>
                      {r.adaptiveAudio ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className="ap-compare-row">
                      <span>Personalised Spatial Audio</span>
                      {r.spatialAudio ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className="ap-compare-row">
                      <span>Lossless Audio</span>
                      {r.lossless ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className="ap-compare-row">
                      <span>Heart Rate Sensing</span>
                      {r.heartRate ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className="ap-compare-row">
                      <span>Hearing Health</span>
                      {r.hearingHealth ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className="ap-compare-row ap-battery-row">
                      <span>Battery Life</span>
                      <span className="ap-battery">{r.battery}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="pp-card-btn-primary"
                    style={{ marginTop: "16px", display: "inline-flex" }}
                  >
                    Buy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get to know */}
      <section className="pp-know-section">
        <div className="pp-content-width">
          <div className="pp-why-header">
            <h2 className="pp-h2">Get to know AirPods.</h2>
          </div>
          <div className="pp-carousel-wrap">
            <div
              className="pp-carousel-track"
              style={{ transform: `translateX(-${knowC.idx * KNOW_W}%)` }}
            >
              {knowCards.map((c) => (
                <div
                  key={c.cat}
                  className={`pp-know-card${c.dark ? "" : " is-light"}`}
                  style={{ width: `${KNOW_W}%`, flex: `0 0 ${KNOW_W}%` }}
                >
                  <img
                    src={c.img}
                    alt={c.cat}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="pp-know-card-overlay">
                    <p className="pp-know-card-cat">{c.cat}</p>
                    <h3
                      className="pp-know-card-title"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {c.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pp-carousel-nav">
            <button
              className={`pp-arr-btn${!knowC.canPrev ? " is-hidden" : ""}`}
              onClick={knowC.prev}
              aria-label="Previous"
            >
              <NavArrowLeft />
            </button>
            <button
              className={`pp-arr-btn${!knowC.canNext ? " is-hidden" : ""}`}
              onClick={knowC.next}
              aria-label="Next"
            >
              <NavArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Apple Music promo */}
      <section className="ap-music-promo">
        <div className="pp-content-width">
          <div className="ap-music-card">
            <div className="ap-music-icon">
              <img
                src="https://www.apple.com/v/airpods/home/images/overview/apple_music/apple_music_logo__large.png"
                alt="Apple Music"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div className="ap-music-body">
              <h2
                className="pp-h2"
                style={{ fontSize: "clamp(24px,3vw,40px)" }}
              >
                Apple Music
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#6e6e73",
                  margin: "8px 0 20px",
                }}
              >
                Get 3 months of Apple Music free with your AirPods.
              </p>
              <a
                href="#"
                className="pp-card-btn-primary"
                style={{ height: "40px", padding: "0 20px", fontSize: "15px" }}
              >
                Learn more &rsaquo;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-footnotes">
        <div className="pp-content-width">
          <p>
            * Listed pricing is Maximum Retail Price (inclusive of all taxes).
          </p>
          <p>
            No Cost EMI is available with the purchase of an eligible product
            made using qualifying cards. Monthly pricing is rounded to the
            nearest rupee.
          </p>
        </div>
      </section>
    </div>
  );
}
