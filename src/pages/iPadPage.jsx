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
    id: "ipad-pro",
    badge: null,
    category: "iPad Pro",
    name: "iPad Pro",
    tagline: "The ultimate iPad experience with the most advanced technology.",
    price: "From \u20b999,900.00**",
    emi: "or \u20b915,983.00/mo. for 6 mo.*",
    colors: ["#1c1c1e", "#e8e8ed"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-unselect-gallery-1-202405?wid=800&hei=1000&fmt=png-alpha&.v=1713296391764",
  },
  {
    id: "ipad-air",
    badge: "New",
    category: "iPad Air",
    name: "iPad Air",
    tagline: "Serious performance in a thin and light design.",
    price: "From \u20b964,900.00**",
    emi: "or \u20b910,150.00/mo. for 6 mo.*",
    colors: ["#68696e", "#6c8fbd", "#a47bb5", "#e8e3da"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-select-wifi-blue-202503?wid=800&hei=1000&fmt=png-alpha&.v=1740769332690",
  },
  {
    id: "ipad",
    badge: null,
    category: "iPad",
    name: "iPad",
    tagline: "The colourful, all-screen iPad for the things you do every day.",
    price: "From \u20b934,900.00**",
    emi: "or \u20b95,317.00/mo. for 6 mo.*",
    colors: ["#6a9fd8", "#f5a7bb", "#f9e179", "#e8e8ed"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-select-yellow-202212?wid=800&hei=1000&fmt=png-alpha&.v=1670372099011",
  },
  {
    id: "ipad-mini",
    badge: null,
    category: "iPad mini",
    name: "iPad mini",
    tagline: "The full iPad experience in an ultra\u2011portable design.",
    price: "From \u20b949,900.00**",
    emi: "or \u20b97,817.00/mo. for 6 mo.*",
    colors: ["#68696e", "#6c8fbd", "#a47bb5", "#e8e3da"],
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-select-wifi-purple-202501?wid=800&hei=1000&fmt=png-alpha&.v=1730764635890",
  },
];

const FILTERS = ["All products", "iPad Pro", "iPad Air", "iPad", "iPad mini"];

const productNavItems = [
  {
    label: "iPad Pro",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-nav-select-202405?wid=88&hei=88&fmt=png-alpha&.v=1712892060006",
  },
  {
    label: "iPad Air",
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-nav-select-202503?wid=88&hei=88&fmt=png-alpha&.v=1740769332690",
  },
  {
    label: "iPad",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-nav-yellow-202212?wid=88&hei=88&fmt=png-alpha&.v=1670372099015",
  },
  {
    label: "iPad mini",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-nav-select-202501?wid=88&hei=88&fmt=png-alpha&.v=1730764635890",
  },
  {
    label: "Compare",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/compare-ipad-nav-202501?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Apple Pencil",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQUY3?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Keyboards",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJQJ3?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Accessories",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-accessories-nav-202401?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Shop iPad",
    badge: null,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/shop-ipad-nav-202401?wid=88&hei=88&fmt=png-alpha",
  },
];

const whyCards = [
  {
    title: "Ways to Buy",
    desc: "Monthly payment options available. Choose an easy way to finance with convenient payment options.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/ways_to_buy__f1j7cxfmvs82_large.jpg",
  },
  {
    title: "Apple Trade In",
    desc: "Save with Apple Trade In. Get credit towards your next iPad when you trade in an eligible device at an Apple Store.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/trade_in__byyqhgbmgzuu_large.jpg",
  },
  {
    title: "Education Pricing",
    desc: "Save on a new iPad with education pricing. Available to college students and educators.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/education__cfy0vhcfpmwy_large.jpg",
  },
  {
    title: "Personal Setup",
    desc: "Meet your new iPad with Personal Setup. Jump into online sessions with a Specialist to set up your iPad.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/personal_setup__eujkfxdmrmqy_large.jpg",
  },
  {
    title: "Delivery and Pickup",
    desc: "Get flexible delivery and easy pickup. Get free delivery or pickup at your Apple Store.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/delivery__gbrpvjpmdyiq_large.jpg",
  },
  {
    title: "Engraving",
    desc: "Personalise your iPad for free. Engrave your new iPad with a mix of emoji, names, initials and numbers.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/engraving__ddfbjkhgk1iq_large.jpg",
  },
  {
    title: "Guided Shopping",
    desc: "Shop live with a Specialist. Let us guide you live over video and answer all of your questions.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/guided_shopping__dtyqe25ek66y_large.jpg",
  },
  {
    title: "Apple Store App",
    desc: "Explore a shopping experience designed around you. Use the Apple Store app to get a more personal way to shop.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/apple_store_app__bj2xb5hfqf2e_large.jpg",
  },
];

const knowCards = [
  {
    cat: "iPadOS + Apps",
    title: "Flexible windowing.\nA multitasker\u2019s delight.",
    dark: true,
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/consider/ipados__bm50r6ftdca2_large.jpg",
  },
  {
    cat: "Apple Intelligence",
    title: "Effortlessly helpful every day.",
    dark: true,
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/consider/apple_intelligence__bqkx185k78qu_large.jpg",
  },
  {
    cat: "Productivity",
    title: "Your workplace can be any place.",
    dark: false,
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/consider/productivity__e2ufnttgtbqy_large.jpg",
  },
  {
    cat: "Creativity",
    title: "Take your inner artist out and about.",
    dark: true,
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/consider/creativity__cxqmk4zy9tyu_large.jpg",
  },
  {
    cat: "Learning",
    title: "Your classroom can be anywhere.",
    dark: false,
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/consider/learning__fjgnijmv6gue_large.jpg",
  },
  {
    cat: "Entertainment",
    title: "Kick back. Tune in. Game on.",
    dark: true,
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/consider/entertainment__c1gixzdyv4iu_large.jpg",
  },
  {
    cat: "Apple Pencil",
    title: "Dream it up.\nJot it down.",
    dark: false,
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/consider/apple_pencil__fv9eodmg26uq_large.jpg",
  },
];

const essentials = [
  {
    title: "Apple Pencil",
    desc: "Dream it up. Jot it down.",
    link: "Learn more about Apple Pencil",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQUY3?wid=800&hei=600&fmt=jpeg&qlt=90",
  },
  {
    title: "Keyboards for iPad",
    desc: "Type it out. Take it with you.",
    link: "Learn more about iPad Keyboards",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJQJ3?wid=800&hei=600&fmt=jpeg&qlt=90",
  },
  {
    title: "Cases and Protection",
    desc: "Protect your iPad in style.",
    link: "Shop cases",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-smart-folio-202212?wid=800&hei=600&fmt=jpeg&qlt=90",
  },
  {
    title: "AppleCare+ for iPad",
    desc: "Keep your iPad protected with comprehensive coverage and 24/7 technical support.",
    link: "Learn more about AppleCare+",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/essentials/applecare__c1vk7r5b1gu2_large.jpg",
  },
];

const others = [
  {
    title: "iPad and iPhone",
    desc: "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/significant_others/ipad_iphone__cmg5iqw7yduu_large.jpg",
  },
  {
    title: "iPad and Mac",
    desc: "With Sidecar, you can extend your Mac workspace by using iPad as a second display. And with Universal Control, you can use a single mouse and keyboard to control both your Mac and iPad.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/significant_others/ipad_mac__db2d5kfwlnsy_large.jpg",
  },
  {
    title: "iPad and Apple Watch",
    desc: "Handoff lets you pick up exactly where you left off on all your Apple devices. Start typing a note on iPad and finish it on your Apple Watch.",
    img: "https://www.apple.com/v/ipad/home/cf/images/overview/significant_others/ipad_watch__dq8e4j5g5oyy_large.jpg",
  },
];

const CARD_W = 290,
  CARD_STEP = 302;
const WHY_W = 25,
  KNOW_W = 25;

export default function iPadPage() {
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
        Get up to 6 months of No Cost EMI plus up to ₹4000 instant cashback on
        iPad with eligible cards. <a href="#">Shop now</a>
      </div>

      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-content-width">
          <h1 className="pp-hero-title">iPad</h1>
        </div>
      </section>

      {/* Product nav */}
      <nav className="pp-product-nav" aria-label="iPad products">
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
                onClick={() => {
                  setActiveFilter(f);
                  lineupC.idx && lineupC.prev();
                }}
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
              place to buy iPad.
            </h2>
            <a href="#" className="pp-text-link">
              Shop iPad &rsaquo;
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
            <h2 className="pp-h2">Get to know iPad.</h2>
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
          <h2 className="pp-h2">iPad essentials.</h2>
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

      {/* Significant Others */}
      <section className="pp-others-section">
        <div className="pp-content-width">
          <h2 className="pp-h2">Significant others.</h2>
          <div className="pp-others-list">
            {others.map((o) => (
              <div key={o.title} className="pp-others-card">
                <div className="pp-others-card-body">
                  <p className="pp-others-card-eyebrow">
                    iPad + {o.title.split(" and ")[1]}
                  </p>
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
            * Includes instant cashback and No Cost EMI. No Cost EMI is
            available with the purchase of an eligible product made using
            qualifying cards. Monthly pricing is rounded to the nearest rupee.
          </p>
          <p>
            ** Listed pricing is Maximum Retail Price (inclusive of all taxes).
          </p>
        </div>
      </section>
    </div>
  );
}
