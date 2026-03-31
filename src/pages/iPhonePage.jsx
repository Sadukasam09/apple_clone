import { useState } from "react";
import { Link } from "react-router-dom";
import "../product-page.css";

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
const lineupProducts = [
  {
    id: "iphone-17-pro",
    badge: null,
    category: "iPhone 17 Pro",
    name: "iPhone 17 Pro",
    tagline: "Innovative design for ultimate performance and battery life.",
    price: "From \u20b91,34,900.00*",
    emi: "or \u20b921,650.00/mo. for 6 mo.\u2021",
    colors: ["#e8622a", "#2a4570", "#e8e8ed"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17pro-cosmic-orange-select?wid=800&hei=1000&fmt=png-alpha",
  },
  {
    id: "iphone-air",
    badge: null,
    category: "iPhone Air",
    name: "iPhone Air",
    tagline: "The thinnest iPhone ever. With the power of pro inside.",
    price: "From \u20b91,19,900.00*",
    emi: "or \u20b919,150.00/mo. for 6 mo.\u2021",
    colors: ["#9ec4e8", "#e8d9b0", "#f5f0eb", "#1c1c1e"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-sky-blue-select?wid=800&hei=1000&fmt=png-alpha",
  },
  {
    id: "iphone-17",
    badge: null,
    category: "iPhone 17",
    name: "iPhone 17",
    tagline: "Even more delightful. Even more durable.",
    price: "From \u20b982,900.00*",
    emi: "or \u20b914,468.00/mo. for 6 mo.\u2021\u2021",
    colors: ["#c4b8e0", "#b0c4a8", "#b8ccd8", "#f5f5f0", "#1c1c1e"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17-lavender-select?wid=800&hei=1000&fmt=png-alpha",
  },
  {
    id: "iphone-17e",
    badge: "New",
    category: "iPhone 17e",
    name: "iPhone 17e",
    tagline: "Feature stacked. Value packed.",
    price: "From \u20b964,900.00*",
    emi: "or \u20b911,327.00/mo. for 6 mo.\u2021\u2021",
    colors: ["#f2c8d0", "#f5f5f0", "#1c1c1e"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17e-soft-pink-select?wid=800&hei=1000&fmt=png-alpha",
  },
  {
    id: "iphone-16",
    badge: null,
    category: "iPhone 16",
    name: "iPhone 16",
    tagline: "Amazing performance. Durable design.",
    price: "From \u20b969,900.00*",
    emi: "or \u20b910,983.00/mo. for 6 mo.\u2021",
    colors: ["#4c5f8a", "#2e7d82", "#e8b4c0", "#f5f5f0", "#1c1c1e"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16-ultramarine-select?wid=800&hei=1000&fmt=png-alpha",
  },
];

const FILTERS = [
  "All products",
  "iPhone 17 Pro",
  "iPhone Air",
  "iPhone 17",
  "iPhone 17e",
  "iPhone 16",
];

const productNavItems = [
  {
    label: "iPhone 17 Pro",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17-pro-nav-cosmic-orange?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "iPhone Air",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-nav-sky-blue?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "iPhone 17",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17-nav-lavender?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "iPhone 17e",
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17e-nav-soft-pink?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "iPhone 16",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16-nav-ultramarine?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Compare",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/compare-iphone-nav?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Accessories",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-accessories-nav?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Shop iPhone",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/shop-iphone-nav?wid=88&hei=88&fmt=png-alpha",
  },
];

const whyCards = [
  {
    title: "Apple Trade In",
    desc: "Save on a new iPhone with a trade\u2011in. Get up to \u20b922,000\u2013\u20b962,700 in credit towards iPhone 17 when you trade in eligible devices.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/why-apple/trade_in__large.jpg",
  },
  {
    title: "Ways to Buy",
    desc: "Monthly payment options are available. Choose the easy way to finance with convenient monthly payment options.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/why-apple/ways_to_buy__large.jpg",
  },
  {
    title: "Personal Setup",
    desc: "Make the most of your iPhone with an online session. Talk one-to-one with a Specialist to set up your device.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/why-apple/personal_setup__large.jpg",
  },
  {
    title: "Delivery and Pickup",
    desc: "Get flexible delivery and easy pickup. Get free delivery or pickup at your Apple Store.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/why-apple/delivery__large.jpg",
  },
  {
    title: "Guided Shopping",
    desc: "Shop live with a Specialist. Let us help you find what you need and answer all of your questions.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/why-apple/guided_shopping__large.jpg",
  },
  {
    title: "Apple Store App",
    desc: "Explore a shopping experience designed around you. Use the app to get a more personal way to shop.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/why-apple/apple_store_app__large.jpg",
  },
];

const knowCards = [
  {
    cat: "Innovation",
    title: "Beautiful and durable,\nby design.",
    dark: true,
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/consider/innovation__large.jpg",
  },
  {
    cat: "Cutting-Edge Cameras",
    title: "Picture your best\nphotos and videos.",
    dark: true,
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/consider/cameras__large.jpg",
  },
  {
    cat: "Chip and Battery Life",
    title: "Fast that lasts.",
    dark: false,
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/consider/chip__large.jpg",
  },
  {
    cat: "iOS and Apple Intelligence",
    title: "New look. Even more magic.",
    dark: true,
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/consider/ios__large.jpg",
  },
  {
    cat: "Environment",
    title: "Designed with the earth in mind.",
    dark: false,
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/consider/environment__large.jpg",
  },
  {
    cat: "Privacy",
    title: "Your data. Just where you want it.",
    dark: true,
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/consider/privacy__large.jpg",
  },
  {
    cat: "Peace of Mind",
    title: "Helpful features.\nJust in case.",
    dark: false,
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/consider/peaceofmind__large.jpg",
  },
];

const essentials = [
  {
    title: "iPhone accessories",
    desc: "Protect and personalise your iPhone with fresh accessories like colourful cases, the Crossbody Strap and more.",
    link: "Shop iPhone accessories",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/essentials/accessories__large.jpg",
  },
  {
    badge: "New",
    title: "AirTag",
    desc: "Now with a 50% louder speaker and up to a 1.5x greater Precision Finding range, it\u2019s easier than ever to keep track of what matters.",
    link: "Buy AirTag",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104?wid=800&hei=600&fmt=jpeg&qlt=90",
  },
];

const others = [
  {
    title: "iPhone and Mac",
    desc: "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/significant_others/iphone_mac__large.jpg",
  },
  {
    title: "iPhone and Apple Watch",
    desc: "Combining iPhone and Apple Watch opens up a world of features. Start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/significant_others/iphone_watch__large.jpg",
  },
  {
    title: "iPhone and AirPods",
    desc: "AirPods use Personalized Spatial Audio and dynamic head tracking to create a truly immersive listening experience. And with Live Listen, AirPods can help you hear better in noisy environments.",
    img: "https://www.apple.com/v/iphone/home/cf/images/overview/significant_others/iphone_airpods__large.jpg",
  },
];

const CARD_W = 290,
  CARD_STEP = 302;
const WHY_W = 25,
  KNOW_W = 25;

export default function iPhonePage() {
  const [activeFilter, setActiveFilter] = useState("All products");

  const filtered =
    activeFilter === "All products"
      ? lineupProducts
      : lineupProducts.filter((p) => p.category === activeFilter);

  const lineupC = useCarousel(filtered.length, 4);
  const whyC = useCarousel(whyCards.length, 4);
  const knowC = useCarousel(knowCards.length, 4);

  return (
    <div className="pp-page">
      {/* Promo bar */}
      <div className="pp-promo-bar">
        Get up to ₹5000 instant cashback on selected iPhone models with eligible
        cards. Plus up to 6 months of No Cost EMI.{" "}
        <a href="#">Shop iPhone &rsaquo;</a>
      </div>

      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-content-width">
          <h1 className="pp-hero-title">iPhone</h1>
        </div>
      </section>

      {/* Product nav */}
      <nav className="pp-product-nav" aria-label="iPhone products">
        <div className="pp-content-width">
          <div className="pp-product-nav-inner">
            {productNavItems.map((item) => (
              <button key={item.label} className="pp-nav-item">
                {item.badge && (
                  <span className="pp-nav-badge">{item.badge}</span>
                )}
                <img
                  src={item.img}
                  alt={item.label}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Lineup */}
      <section className="pp-lineup-section">
        <div className="pp-content-width">
          <div className="pp-lineup-header">
            <h2 className="pp-h2">Explore the line&#8209;up.</h2>
            <a href="#" className="pp-text-link">
              Compare all models &rsaquo;
            </a>
          </div>
          <div className="pp-filter-row">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`pp-filter-btn${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="pp-carousel-wrap">
            <div
              className="pp-carousel-track"
              style={{ transform: `translateX(-${lineupC.idx * CARD_STEP}px)` }}
            >
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="pp-lineup-card"
                  style={{ width: `${CARD_W}px`, flex: `0 0 ${CARD_W}px` }}
                >
                  <div className="pp-lineup-card-img">
                    <img
                      src={p.image}
                      alt={p.name}
                      onError={(e) => {
                        e.target.style.opacity = "0";
                      }}
                    />
                  </div>
                  <div className="pp-lineup-card-body">
                    {p.badge && (
                      <span className="pp-card-badge">{p.badge}</span>
                    )}
                    <h3 className="pp-card-name">{p.name}</h3>
                    <p className="pp-card-tagline">{p.tagline}</p>
                    <p className="pp-card-price">{p.price}</p>
                    <p className="pp-card-emi">{p.emi}</p>
                    <div className="pp-card-colors">
                      {p.colors.map((c, i) => (
                        <span
                          key={i}
                          className="pp-color-dot"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                    <div className="pp-card-actions">
                      <a href="#" className="pp-card-btn-primary">
                        Learn more
                      </a>
                      <a href="#" className="pp-card-link">
                        Buy &rsaquo;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pp-carousel-nav">
            <button
              className={`pp-arr-btn${!lineupC.canPrev ? " is-hidden" : ""}`}
              onClick={lineupC.prev}
              aria-label="Previous"
            >
              <NavArrowLeft />
            </button>
            <button
              className={`pp-arr-btn${!lineupC.canNext ? " is-hidden" : ""}`}
              onClick={lineupC.next}
              aria-label="Next"
            >
              <NavArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Why Apple */}
      <section className="pp-why-section">
        <div className="pp-content-width">
          <div className="pp-why-header">
            <h2 className="pp-h2">
              Why Apple is the best
              <br />
              place to buy iPhone.
            </h2>
            <a href="#" className="pp-text-link">
              Shop iPhone &rsaquo;
            </a>
          </div>
          <div className="pp-carousel-wrap">
            <div
              className="pp-carousel-track"
              style={{ transform: `translateX(-${whyC.idx * WHY_W}%)` }}
            >
              {whyCards.map((c) => (
                <div
                  key={c.title}
                  className="pp-why-card"
                  style={{ width: `${WHY_W}%`, flex: `0 0 ${WHY_W}%` }}
                >
                  <div className="pp-why-card-body">
                    <h3 className="pp-why-card-title">{c.title}</h3>
                    <p className="pp-why-card-desc">{c.desc}</p>
                  </div>
                  <img
                    src={c.img}
                    alt={c.title}
                    className="pp-why-card-img"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pp-carousel-nav">
            <button
              className={`pp-arr-btn${!whyC.canPrev ? " is-hidden" : ""}`}
              onClick={whyC.prev}
              aria-label="Previous"
            >
              <NavArrowLeft />
            </button>
            <button
              className={`pp-arr-btn${!whyC.canNext ? " is-hidden" : ""}`}
              onClick={whyC.next}
              aria-label="Next"
            >
              <NavArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Get to know */}
      <section className="pp-know-section">
        <div className="pp-content-width">
          <div className="pp-why-header">
            <h2 className="pp-h2">Get to know iPhone.</h2>
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

      {/* Essentials */}
      <section className="pp-essentials-section">
        <div className="pp-content-width">
          <h2 className="pp-h2">iPhone essentials.</h2>
          <div className="pp-essentials-grid">
            {essentials.map((e) => (
              <div key={e.title} className="pp-essentials-card">
                {e.badge && <span className="pp-card-badge">{e.badge}</span>}
                <h3 className="pp-essentials-card-title">{e.title}</h3>
                <p className="pp-essentials-card-desc">{e.desc}</p>
                <a href="#" className="pp-essentials-card-link">
                  {e.link} &rsaquo;
                </a>
                <img
                  src={e.img}
                  alt={e.title}
                  onError={(ev) => {
                    ev.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significant Others */}
      <section className="pp-others-section">
        <div className="pp-content-width">
          <h2 className="pp-h2">Significant others.</h2>
          <div className="pp-others-list">
            {others.map((o) => (
              <div key={o.title} className="pp-others-card">
                <div className="pp-others-card-body">
                  <p className="pp-others-card-eyebrow">{o.title}</p>
                  <h3 className="pp-others-card-title">{o.title}</h3>
                  <p className="pp-others-card-desc">{o.desc}</p>
                </div>
                <div className="pp-others-card-img-wrap">
                  <img
                    src={o.img}
                    alt={o.title}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footnotes */}
      <section className="pp-footnotes">
        <div className="pp-content-width">
          <p>
            * Listed pricing is Maximum Retail Price (inclusive of all taxes).
          </p>
          <p>
            ‡ Includes instant cashback and No Cost EMI. No Cost EMI is
            available with the purchase of an eligible product made using
            qualifying cards. Monthly pricing is rounded to the nearest rupee.
          </p>
        </div>
      </section>
    </div>
  );
}
