import { useState } from "react";
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
    id: "watch-series-11",
    badge: null,
    category: "Series 11",
    name: "Apple Watch Series\u00a011",
    tagline: "The ultimate watch for a healthy life.",
    price: "From \u20b946,900.00**",
    emi: "or \u20b97,150.00/mo. for 6 mo.*",
    colors: [
      "#68696e",
      "#e8e8ed",
      "#e8b4b8",
      "#1c1c1e",
      "#e8dac8",
      "#e8c87c",
      "#6e7882",
    ],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-series11-unselect-gallery-1-202409?wid=800&hei=1000&fmt=png-alpha&.v=1725311366473",
  },
  {
    id: "watch-se-3",
    badge: null,
    category: "SE 3",
    name: "Apple Watch SE\u00a03",
    tagline: "Essential health features at a great value.",
    price: "From \u20b925,900.00**",
    emi: "or \u20b93,983.00/mo. for 6 mo.*",
    colors: ["#1c1c1e", "#e8e3da"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-se3-unselect-gallery-1-202409?wid=800&hei=1000&fmt=png-alpha",
  },
  {
    id: "watch-ultra-3",
    badge: null,
    category: "Ultra 3",
    name: "Apple Watch Ultra\u00a03",
    tagline: "The ultimate sports and adventure watch.",
    price: "From \u20b989,900.00**",
    emi: "or \u20b913,983.00/mo. for 6 mo.*",
    colors: ["#d4c0a0", "#1c1c1e"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-ultra3-unselect-gallery-natural-202409?wid=800&hei=1000&fmt=png-alpha",
  },
];

const FILTERS = ["All products", "Series 11", "SE 3", "Ultra 3"];

const productNavItems = [
  {
    label: "Series 11",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-series11-nav-202409?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "SE 3",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-se3-nav-202409?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Ultra 3",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-ultra3-nav-natural-202409?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Nike",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-nike-nav?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Compare",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/compare-watch-nav?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Straps",
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-bands-nav?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Accessories",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-accessories-nav?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Shop Watch",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/shop-watch-nav?wid=88&hei=88&fmt=png-alpha",
  },
];

const whyCards = [
  {
    title: "Ways to Buy",
    desc: "Monthly payment options are available. Choose the easy way to finance with convenient monthly payment options.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/why-apple/ways_to_buy__large.jpg",
  },
  {
    title: "Delivery and Pickup",
    desc: "Get flexible delivery and easy pickup. Get free delivery or pickup at your Apple Store.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/why-apple/delivery__large.jpg",
  },
  {
    title: "Personal Setup",
    desc: "Make the most of your Apple Watch with an online session. Talk one-to-one with a Specialist.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/why-apple/personal_setup__large.jpg",
  },
  {
    title: "Guided Video Shopping",
    desc: "Shop live with a Specialist. Let us help you find what you need and answer all of your questions.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/why-apple/guided_shopping__large.jpg",
  },
  {
    title: "Apple Trade In",
    desc: "Save on a new Apple Watch with a trade\u2011in. Get credit towards your next Apple Watch at an Apple Store.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/why-apple/trade_in__large.jpg",
  },
  {
    title: "Apple Store App",
    desc: "Explore a shopping experience designed around you. Use the app to get a more personal way to shop.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/why-apple/apple_store_app__large.jpg",
  },
];

const knowCards = [
  {
    cat: "Health",
    title: "Knows you.\nInsights and out.",
    dark: true,
    img: "https://www.apple.com/v/watch/home/cv/images/overview/consider/health__large.jpg",
  },
  {
    cat: "Fitness",
    title: "Unlimited motivation.",
    dark: true,
    img: "https://www.apple.com/v/watch/home/cv/images/overview/consider/fitness__large.jpg",
  },
  {
    cat: "Safety",
    title: "Keep help close at hand.",
    dark: false,
    img: "https://www.apple.com/v/watch/home/cv/images/overview/consider/safety__large.jpg",
  },
  {
    cat: "Apple Watch Ultra 3",
    title: "The ultimate sports\nand adventure watch.",
    dark: true,
    img: "https://www.apple.com/v/watch/home/cv/images/overview/consider/ultra3__large.jpg",
  },
  {
    cat: "Connectivity",
    title: "The right call for\nstaying in touch.",
    dark: false,
    img: "https://www.apple.com/v/watch/home/cv/images/overview/consider/connectivity__large.jpg",
  },
  {
    cat: "Personalisation",
    title: "Make it you-nique.",
    dark: true,
    img: "https://www.apple.com/v/watch/home/cv/images/overview/consider/personalisation__large.jpg",
  },
  {
    cat: "For Your Kids",
    title: "Independence for them.\nPeace of mind for you.",
    dark: false,
    img: "https://www.apple.com/v/watch/home/cv/images/overview/consider/kids__large.jpg",
  },
];

const essentials = [
  {
    title: "Colour the moment.",
    desc: "Explore the latest straps in fresh shades, styles and materials.",
    link: "Shop Apple Watch straps",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/essentials/straps__large.jpg",
  },
  {
    title: "Apple Watch Studio",
    desc: "Pair any Apple Watch case with any band to create a look that\u2019s uniquely yours.",
    link: "Design your watch",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/essentials/studio__large.jpg",
  },
];

const others = [
  {
    title: "Apple Watch and iPhone",
    desc: "Combining Apple Watch and iPhone opens up a world of features. You can start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/significant_others/watch_iphone__large.jpg",
  },
  {
    title: "Apple Watch and AirPods",
    desc: "Apple Watch and AirPods are made for each other. Control your AirPods from your wrist and let your watch automatically switch your audio as you move between devices.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/significant_others/watch_airpods__large.jpg",
  },
  {
    title: "Apple Watch and Apple Fitness+",
    desc: "Apple Fitness+ is a fitness and wellness service built for Apple Watch. With thousands of workouts and meditations, it\u2019s easy to find something you love.",
    img: "https://www.apple.com/v/watch/home/cv/images/overview/significant_others/watch_fitness__large.jpg",
  },
];

const CARD_W = 290,
  CARD_STEP = 302;
const WHY_W = 25,
  KNOW_W = 25;

export default function WatchPage() {
  const [activeFilter, setActiveFilter] = useState("All products");
  const filtered =
    activeFilter === "All products"
      ? lineupProducts
      : lineupProducts.filter((p) => p.category === activeFilter);

  const lineupC = useCarousel(filtered.length, 3);
  const whyC = useCarousel(whyCards.length, 4);
  const knowC = useCarousel(knowCards.length, 4);

  return (
    <div className="pp-page">
      <div className="pp-promo-bar">
        Get up to ₹6000 instant cashback on Apple Watch with eligible cards.
        Plus up to 6 months of No Cost EMI.{" "}
        <a href="#">Shop Apple Watch &rsaquo;</a>
      </div>

      <section className="pp-hero">
        <div className="pp-content-width">
          <h1 className="pp-hero-title">Apple Watch</h1>
        </div>
      </section>

      <nav className="pp-product-nav" aria-label="Apple Watch products">
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

      <section className="pp-why-section">
        <div className="pp-content-width">
          <div className="pp-why-header">
            <h2 className="pp-h2">
              Why Apple is the best
              <br />
              place to buy Apple Watch.
            </h2>
            <a href="#" className="pp-text-link">
              Shop Apple Watch &rsaquo;
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

      <section className="pp-know-section">
        <div className="pp-content-width">
          <div className="pp-why-header">
            <h2 className="pp-h2">Get to know Apple Watch.</h2>
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

      <section className="pp-essentials-section">
        <div className="pp-content-width">
          <h2 className="pp-h2">Apple Watch essentials.</h2>
          <div className="pp-essentials-grid">
            {essentials.map((e) => (
              <div key={e.title} className="pp-essentials-card">
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

      <section className="pp-others-section">
        <div className="pp-content-width">
          <h2 className="pp-h2">Made for each other.</h2>
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

      <section className="pp-footnotes">
        <div className="pp-content-width">
          <p>
            * Includes instant cashback and No Cost EMI. Monthly pricing is
            rounded to the nearest rupee.
          </p>
          <p>
            ** Listed pricing is Maximum Retail Price (inclusive of all taxes).
          </p>
        </div>
      </section>
    </div>
  );
}
