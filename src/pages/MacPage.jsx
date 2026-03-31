import { useState } from "react";
import { Link } from "react-router-dom";
import "../mac.css";

/* ─── Data ──────────────────────────────────────────────── */

const lineupProducts = [
  {
    id: "macbook-neo", badge: "New", category: "Laptops",
    name: "MacBook Neo", fullName: "MacBook Neo",
    tagline: "The magic of Mac at a surprising price.",
    price: "From \u20b969,900.00**",
    emi: "or \u20b911,150.00/mo. for 6 mo.*",
    colors: ["#c9cacb","#f2c8d6","#dce873","#5a6ad4"],
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-neo-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772307337",
  },
  {
    id: "macbook-air", badge: "New", category: "Laptops",
    name: "MacBook Air 13\u2033 and 15\u2033", fullName: "MacBook Air",
    tagline: "Thin. Fast. Powerful and portable.",
    price: "From \u20b91,19,900.00**",
    emi: "or \u20b918,817.00/mo. for 6 mo.*",
    colors: ["#a9d4ff","#dad6d0","#f3e5b4","#2b3040"],
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772307337",
  },
  {
    id: "macbook-pro", badge: "New", category: "Laptops",
    name: "MacBook Pro 14\u2033 and 16\u2033", fullName: "MacBook Pro",
    tagline: "The most advanced Mac laptops for demanding tasks.",
    price: "From \u20b91,89,900.00**",
    emi: "or \u20b929,983.00/mo. for 6 mo.*",
    colors: ["#1e1e1e","#d6d4d0"],
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-pro-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740782219568",
  },
  {
    id: "imac", badge: null, category: "Desktops",
    name: "iMac", fullName: "iMac",
    tagline: "An all-in-one desktop for creativity and productivity.",
    price: "From \u20b91,34,900.00**",
    emi: "or \u20b921,650.00/mo. for 6 mo.*",
    colorImages: [
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_blue_d569f351c.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_purple_5184607e5.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_pink_cbcd01dea.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_orange_f065edb6d.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_yellow_3d07e057d.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_green_f02f2102c.png",
    ],
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-imac-202410?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1728342376329",
  },
  {
    id: "mac-mini", badge: null, category: "Desktops",
    name: "Mac mini", fullName: "Mac mini",
    tagline: "The mini-est, most affordable Mac desktop.",
    price: "From \u20b959,900.00**",
    emi: "or \u20b99,317.00/mo. for 6 mo.*",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-mac-mini-202410?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1730075290527",
  },
  {
    id: "mac-studio", badge: "New", category: "Desktops",
    name: "Mac Studio", fullName: "Mac Studio",
    tagline: "Powerful performance and connectivity for pros.",
    price: "From \u20b92,14,900.00**",
    emi: "or \u20b934,150.00/mo. for 6 mo.*",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-mac-studio-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772359059",
  },
  {
    id: "studio-display", badge: "New", category: "Displays",
    name: "Studio Display", fullName: "Studio Display",
    tagline: "A 5K Retina display that\u2019s perfect for Mac.",
    price: "From \u20b91,89,900.00\u25ca\u25ca",
    emi: "or \u20b933,142.00/mo. for 6 mo.\u25ca",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-studio-display-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772333996",
  },
  {
    id: "studio-display-xdr", badge: "New", category: "Displays",
    name: "Studio Display XDR", fullName: "Studio Display XDR",
    tagline: "The ultimate 5K Retina XDR display for creative and pro workflows.",
    price: "From \u20b93,99,900.00\u25ca\u25ca",
    emi: "or \u20b969,793.00/mo. for 6 mo.\u25ca",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-pro-display-xdr-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693346626695",
  },
];

const FILTERS = ["All products","Laptops","Desktops","Displays"];

const productNavItems = [
  { label: "MacBook Neo", badge: "New", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-macbook-neo-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772173939" },
  { label: "MacBook Air", badge: "New", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-macbook-air-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772174329" },
  { label: "MacBook Pro", badge: "New", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-macbook-pro-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740782219568" },
  { label: "iMac",        badge: null,  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-imac-nav-202410?wid=200&hei=200&fmt=png-alpha&.v=1728342374591" },
  { label: "Mac mini",    badge: null,  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-mini-nav-202410?wid=200&hei=200&fmt=png-alpha&.v=1730075288419" },
  { label: "Mac Studio",  badge: null,  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-studio-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772356783" },
  { label: "Compare",     badge: null,  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-compare-mac-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203" },
  { label: "Displays",    badge: "New", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-display-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203" },
  { label: "Accessories", badge: null,  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-mac-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203" },
  { label: "Shop Mac",    badge: null,  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-shop-mac-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203" },
];

const buyReasons = [
  {
    id: "ways-to-buy",
    eyebrow: "Ways to Buy",
    title: "Monthly payment options are available.",
    desc: "Choose an easy way to finance with convenient payment options.",
    link: "Learn more about financing options",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/financing__dol3s5rdvqia_large.jpg",
  },
  {
    id: "customise",
    eyebrow: "Customise",
    title: "Customise your Mac.",
    desc: "Choose your chip, memory, storage, even colour.",
    link: "Learn more about customising your Mac",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/customise__cymo75dpg5ma_large.jpg",
  },
  {
    id: "education",
    eyebrow: "Education Pricing",
    title: "Save on a new Mac with education pricing.",
    desc: "Students and educators can save exclusively through the Apple Store.",
    link: "Learn more about education pricing",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/education__ek1akovofbqa_large.jpg",
  },
  {
    id: "personal-setup",
    eyebrow: "Personal Setup",
    title: "Meet your new Mac with Personal Setup.",
    desc: "Get one-to-one guidance with data transfer, the latest features and more.",
    link: "Learn more about your new Mac",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/personal_setup__blb9x0g2mxya_large.jpg",
  },
  {
    id: "delivery",
    eyebrow: "Delivery and Pickup",
    title: "Get flexible delivery and easy pickup.",
    desc: "Get free delivery or pickup at your Apple Store.",
    link: "Learn more about delivery and pickup",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/delivery__dh8c9ne3l5ia_large.jpg",
  },
  {
    id: "trade-in",
    eyebrow: "Trade In",
    title: "Save with Apple Trade\u00a0In.",
    desc: "Get credit towards your next Mac when you trade in an eligible device.",
    link: "Learn more about Apple Trade In",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/trade_in__ccfzjb6plb6e_large.jpg",
  },
  {
    id: "guided",
    eyebrow: "Guided Shopping",
    title: "Shop live with a Specialist.",
    desc: "Let us help you find what you need, one-to-one, at an Apple Store or online.",
    link: "Learn more about Guided Shopping",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/guided_shopping__el68i3gywpqm_large.jpg",
  },
  {
    id: "app",
    eyebrow: "Apple Store App",
    title: "Explore a shopping experience designed around you.",
    desc: "Use the Apple Store app to get a more personal way to shop.",
    link: "Learn more about the Apple Store App",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/why_apple/apple_store_app__bnbpkex5v7q2_large.jpg",
  },
];

const knowCards = [
  { eyebrow: "Performance and Battery Life", title: "Go fast.\u00a0Go far.",              image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/performance__b7qvzyfk5r6q_large.jpg", dark: true },
  { eyebrow: "Built for AI",                 title: "Smart. Secure.\nOn device.",          image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/built_for_apple_intelligence__f2g8l46if5u2_large.jpg", dark: true },
  { eyebrow: "macOS and Apple Intelligence", title: "Easy to use.\u00a0Easy to love.",     image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/macos__b8h5me9j3cqa_large.jpg", dark: false },
  { eyebrow: "Mac + iPhone",                 title: "Together they work wonders.",          image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/mac_iphone__gh1tblkt6bqm_large.jpg", dark: false },
  { eyebrow: "Compatibility",                title: "Mac runs your favourite apps.",        image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/compatibility__f8hm76ektxua_large.jpg", dark: false },
  { eyebrow: "Privacy and Security",         title: "Your business is nobody else\u2019s.", image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/privacy__e66n36h1q0om_large.jpg", dark: false },
  { eyebrow: "Durability",                   title: "Built to stand the test of time.",    image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/durability__ck6nkw4c5rki_large.jpg", dark: false },
  { eyebrow: "Apple Values",                 title: "Our values drive everything we do.",  image: "https://www.apple.com/v/mac/home/cd/images/overview/consider/apple_values__f9kyyvtj0b6a_large.jpg", dark: false },
];

const continuityItems = [
  {
    title: "Mac and iPhone",
    copy: "Answer calls or messages from your iPhone directly on your Mac. See and control what\u2019s on your iPhone from your Mac with iPhone Mirroring and Live Activities. Use Universal Clipboard to copy images, video or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/continuity/mac_iphone__dvlbqlf8b3xy_large.jpg",
  },
  {
    title: "Mac and iPad",
    copy: "Use your iPad as a second display for your Mac. Or use it as a drawing tablet with Apple Pencil. Work with the same files from either device, thanks to iCloud.",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/continuity/mac_ipad__efp2s86j1xoy_large.jpg",
  },
  {
    title: "Mac and Apple Watch",
    copy: "Unlock your Mac automatically when you\u2019re wearing your Apple Watch. Approve password requests on your Mac from your wrist.",
    image: "https://www.apple.com/v/mac/home/cd/images/overview/continuity/mac_watch__ddkzkg9m0guq_large.jpg",
  },
];

const macNotes = [
  "* Includes instant cashback and No Cost EMI. No Cost EMI is available with qualifying cards on 3- or 6-month tenures. Monthly pricing is rounded to the nearest rupee.",
  "** Listed pricing is Maximum Retail Price (inclusive of all taxes).",
  "1. Mac trade-in is available only in-store in India. Trade-in values vary based on condition, year and configuration of your eligible trade-in device.",
];

/* ─── Helpers ───────────────────────────────────────────── */

function NavArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function NavArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M6.5 3.5L12 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Carousel hook ─────────────────────────────────────── */
function useCarousel(total, visible) {
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, total - visible);
  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(max, i + 1));
  return { idx, prev, next, canPrev: idx > 0, canNext: idx < max };
}

/* ─── Component ─────────────────────────────────────────── */

export default function MacPage() {
  const [activeFilter, setActiveFilter] = useState("All products");
  const [openContinuity, setOpenContinuity] = useState(0);

  const filtered = activeFilter === "All products"
    ? lineupProducts
    : lineupProducts.filter((p) => p.category === activeFilter);

  const lineupCarousel = useCarousel(filtered.length, 4);
  const whyCarousel = useCarousel(buyReasons.length, 4);
  const knowCarousel = useCarousel(knowCards.length, 4);

  /* lineup: fixed px; why/know: % of track */
  const LINEUP_CARD_PX = 290; /* ~4 visible at 1200px */
  const LINEUP_STEP_PX = 302; /* card + gap */
  const CARD_W_WHY     = 25;
  const CARD_W_KNOW    = 25;

  return (
    <main className="mac-page">

      {/* ── Promo bar ── */}
      <div className="mac-promo-bar">
        Get up to \u20b910,000 instant cashback on selected Mac models with eligible cards.
        {" "}Plus up to 6\u00a0months of No\u00a0Cost EMI.*{" "}
        <a href="#">Shop Mac \u203a</a>
      </div>

      {/* ── Hero ── */}
      <section className="mac-hero">
        <div className="mac-content-width">
          <h1 className="mac-hero-title">Mac</h1>
        </div>
      </section>

      {/* ── Sticky product nav ── */}
      <nav className="mac-product-nav" aria-label="Mac models">
        <div className="mac-product-nav-inner mac-content-width">
          {productNavItems.map((item) => (
            <a key={item.label} href="#" className="mac-nav-item">
              <img src={item.img} alt={item.label} loading="lazy" />
              <span className="mac-nav-label">{item.label}</span>
              {item.badge && <span className="mac-nav-badge">{item.badge}</span>}
            </a>
          ))}
          <button className="mac-nav-arrow" aria-label="Scroll right"><NavArrowRight /></button>
        </div>
      </nav>

      {/* ── Lineup ── */}
      <section className="mac-lineup-section">
        <div className="mac-content-width">
          <div className="mac-lineup-head">
            <h2 className="mac-h2">Explore the line&#8209;up.</h2>
            <div className="mac-filter-row" role="group">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`mac-filter-btn${activeFilter === f ? " is-active" : ""}`}
                  onClick={() => { setActiveFilter(f); lineupCarousel.idx && lineupCarousel.prev(); }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mac-carousel-wrap">
            <div
              className="mac-carousel-track"
              style={{ transform: `translateX(-${lineupCarousel.idx * LINEUP_STEP_PX}px)` }}
            >
              {filtered.map((p) => (
                <div key={p.id} className="mac-lineup-card" style={{ width: `${LINEUP_CARD_PX}px`, flex: `0 0 ${LINEUP_CARD_PX}px` }}>
                  <div className="mac-lineup-img-area">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="mac-lineup-info">
                    {p.colors && (
                      <div className="mac-dots">
                        {p.colors.map((c) => <span key={c} className="mac-dot" style={{ background: c }} />)}
                      </div>
                    )}
                    {p.colorImages && (
                      <div className="mac-dots">
                        {p.colorImages.map((s) => <img key={s} src={s} alt="" className="mac-dot-img" loading="lazy" />)}
                      </div>
                    )}
                    {!p.colors && !p.colorImages && <div className="mac-dots-ph" />}
                    {p.badge && <div className="mac-card-badge">{p.badge}</div>}
                    <h3 className="mac-lineup-name">{p.name}</h3>
                    <p className="mac-lineup-tagline">{p.tagline}</p>
                    <p className="mac-lineup-price">{p.price}</p>
                    <p className="mac-lineup-emi">{p.emi}</p>
                    <div className="mac-lineup-actions">
                      <a href="#" className="mac-btn-learn">Learn more</a>
                      <a href="#" className="mac-link-buy">Buy \u203a</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev/Next arrows */}
            <div className="mac-carousel-arrows">
              <button
                className={`mac-arr-btn${lineupCarousel.canPrev ? "" : " is-hidden"}`}
                onClick={lineupCarousel.prev}
                aria-label="Previous"
              ><NavArrowLeft /></button>
              <button
                className={`mac-arr-btn${lineupCarousel.canNext ? "" : " is-hidden"}`}
                onClick={lineupCarousel.next}
                aria-label="Next"
              ><NavArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Apple ── */}
      <section className="mac-why-section">
        <div className="mac-content-width">
          <div className="mac-section-head">
            <h2 className="mac-h2">Why Apple is the best{"\u00a0"}place<br />to buy Mac.</h2>
            <Link to="/store" className="mac-text-link">Shop Mac \u203a</Link>
          </div>

          <div className="mac-carousel-wrap">
            <div
              className="mac-carousel-track"
              style={{ transform: `translateX(-${whyCarousel.idx * CARD_W_WHY}%)` }}
            >
              {buyReasons.map((r) => (
                <div key={r.id} className="mac-why-card" style={{ minWidth: `${CARD_W_WHY}%` }}>
                  <div className="mac-why-top">
                    <p className="mac-why-eyebrow">{r.eyebrow}</p>
                    <h3 className="mac-why-title">{r.title}</h3>
                    <p className="mac-why-desc">{r.desc}</p>
                    <a href="#" className="mac-text-link">{r.link}</a>
                  </div>
                  <div className="mac-why-img-area">
                    <img src={r.image} alt={r.eyebrow} loading="lazy" />
                    <button className="mac-plus-btn" aria-label="More info"><PlusIcon /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mac-carousel-arrows">
              <button className={`mac-arr-btn${whyCarousel.canPrev ? "" : " is-hidden"}`} onClick={whyCarousel.prev} aria-label="Previous"><NavArrowLeft /></button>
              <button className={`mac-arr-btn${whyCarousel.canNext ? "" : " is-hidden"}`} onClick={whyCarousel.next} aria-label="Next"><NavArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get to know Mac ── */}
      <section className="mac-know-section">
        <div className="mac-content-width">
          <h2 className="mac-h2">Get to know Mac.</h2>
          <div className="mac-carousel-wrap">
            <div
              className="mac-carousel-track"
              style={{ transform: `translateX(-${knowCarousel.idx * CARD_W_KNOW}%)` }}
            >
              {knowCards.map((c) => (
                <div
                  key={c.eyebrow}
                  className={`mac-know-card${c.dark ? " is-dark" : ""}`}
                  style={{ minWidth: `${CARD_W_KNOW}%` }}
                >
                  <div className="mac-know-text-overlay">
                    <p className="mac-know-eyebrow">{c.eyebrow}</p>
                    <h3 className="mac-know-title">{c.title}</h3>
                  </div>
                  <div className="mac-know-img-fill">
                    <img src={c.image} alt={c.eyebrow} loading="lazy" />
                  </div>
                  <button className="mac-plus-btn mac-plus-dark" aria-label="More info"><PlusIcon /></button>
                </div>
              ))}
            </div>
            <div className="mac-carousel-arrows">
              <button className={`mac-arr-btn${knowCarousel.canPrev ? "" : " is-hidden"}`} onClick={knowCarousel.prev} aria-label="Previous"><NavArrowLeft /></button>
              <button className={`mac-arr-btn${knowCarousel.canNext ? "" : " is-hidden"}`} onClick={knowCarousel.next} aria-label="Next"><NavArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Switch to Mac ── */}
      <section className="mac-switch-section">
        <div className="mac-content-width">
          <h2 className="mac-h2">Switch to Mac.</h2>
          <article className="mac-switch-card">
            <div className="mac-switch-left">
              <h3 className="mac-switch-eyebrow">Mac does that.</h3>
              <p className="mac-switch-copy">See how easy it is to move to Mac.</p>
              <a href="#" className="mac-text-link">Learn more \u203a</a>
            </div>
            <div className="mac-switch-right">
              <img
                src="https://www.apple.com/v/mac/home/cd/images/overview/switch/mac_does_that__f4t5v2wmwa6e_large.jpg"
                alt="Mac does that"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </section>

      {/* ── Mac essentials ── */}
      <section className="mac-essentials-section">
        <div className="mac-content-width">
          <h2 className="mac-h2">Mac essentials.</h2>
          <div className="mac-essentials-grid">
            {/* Card 1 – Accessories */}
            <article className="mac-ess-card">
              <div className="mac-ess-top">
                <h3>Mac accessories</h3>
                <p>Explore keyboards, mice and other essentials.</p>
                <a href="#" className="mac-text-link">Shop Mac accessories \u203a</a>
              </div>
              <div className="mac-ess-img">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/accessories-category-card-mac-202307?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1687543083228"
                  alt="Mac accessories"
                  loading="lazy"
                />
              </div>
            </article>
            {/* Card 2 – Studio Display */}
            <article className="mac-ess-card">
              <div className="mac-ess-top">
                <span className="mac-card-badge">New</span>
                <h3>Studio Display</h3>
                <p>The 68.29&thinsp;cm (27\u2033) 5K Retina display pairs beautifully with Mac.</p>
                <a href="#" className="mac-text-link">Learn more \u203a</a>
              </div>
              <div className="mac-ess-img">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-studio-display-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772333996"
                  alt="Studio Display"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Unlock the world of Apple (accordion) ── */}
      <section className="mac-continuity-section">
        <div className="mac-content-width">
          <div className="mac-section-head">
            <h2 className="mac-h2">Unlock the world of Apple.</h2>
            <a href="#" className="mac-text-link">Learn how Apple devices work better together \u203a</a>
          </div>
          <div className="mac-accordion-card">
            {/* Left accordion list */}
            <div className="mac-acc-left">
              {continuityItems.map((item, i) => (
                <div key={item.title} className="mac-acc-row">
                  <button
                    className="mac-acc-trigger"
                    onClick={() => setOpenContinuity(openContinuity === i ? -1 : i)}
                    aria-expanded={openContinuity === i}
                  >
                    <span className="mac-acc-title">{item.title}</span>
                    <span className="mac-acc-chevron">
                      {openContinuity === i
                        ? <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 10l5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                        : <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                      }
                    </span>
                  </button>
                  {openContinuity === i && (
                    <div className="mac-acc-body">
                      <p>{item.copy}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right image panel */}
            <div className="mac-acc-image-panel">
              {openContinuity >= 0 && (
                <img
                  src={continuityItems[openContinuity].image}
                  alt={continuityItems[openContinuity].title}
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footnotes ── */}
      <footer className="mac-footnotes">
        <div className="mac-content-width">
          {macNotes.map((n, i) => <p key={i}>{n}</p>)}
        </div>
      </footer>

    </main>
  );
}
