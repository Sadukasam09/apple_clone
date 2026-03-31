import { useState } from "react";
import "./AccessoriesPage.css";

const CATEGORIES = [
  "All",
  "Mac",
  "iPad",
  "iPhone",
  "Apple Watch",
  "AirPods",
  "TV & Home",
  "Beats",
];

const FEATURED = [
  {
    id: "airtag",
    name: "AirTag",
    tagline: "Lose your knack for losing things.",
    desc: "Attach one to your keys, slip one in your bag. AirTag sends out a secure Bluetooth signal that can be detected by devices in the Find My network, helping you find your stuff.",
    price: "From ₹3,490",
    bg: "#f5f5f7",
    textDark: true,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104?wid=800&hei=800&fmt=jpeg&qlt=90",
    cta: "Shop AirTag",
    learnMore: "Learn more",
  },
  {
    id: "magsafe-wallet",
    name: "MagSafe",
    tagline: "The perfect attachment.",
    desc: "Cases, chargers, wallets — MagSafe accessories snap perfectly into place every time, so you're always connected and always charged.",
    price: "From ₹999",
    bg: "#1d1d1f",
    textDark: false,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/magsafe-charger-US-MQGQ3LL-A-202312?wid=800&hei=800&fmt=jpeg&qlt=90",
    cta: "Shop MagSafe",
    learnMore: "Learn more",
  },
  {
    id: "apple-pencil",
    name: "Apple Pencil",
    tagline: "Every mark you make, perfected.",
    desc: "From sketching to note-taking, Apple Pencil brings your ideas to life with incredible precision, ultra-low latency and tilt sensitivity.",
    price: "From ₹8,500",
    bg: "#f5f5f7",
    textDark: true,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-pencil-pro-select-202405?wid=800&hei=800&fmt=jpeg&qlt=90",
    cta: "Shop Apple Pencil",
    learnMore: "Learn more",
  },
  {
    id: "watch-bands",
    name: "Apple Watch Bands",
    tagline: "One watch. Infinite looks.",
    desc: "Change your band to match your mood, your style or your workout. Every Apple Watch band is made to work with every Apple Watch case.",
    price: "From ₹3,900",
    bg: "#1d1d1f",
    textDark: false,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-band-gallery-202503?wid=800&hei=800&fmt=jpeg&qlt=90",
    cta: "Shop Bands",
    learnMore: "Learn more",
  },
];

const PRODUCT_ACCESSORIES = [
  {
    category: "Mac",
    title: "Mac Accessories",
    items: [
      {
        name: "Magic Keyboard",
        price: "From ₹9,500",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK2C3LL-A?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "Magic Mouse",
        price: "From ₹7,500",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK2E3LL-A?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "Magic Trackpad",
        price: "From ₹11,900",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK2D3LL-A?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "Studio Display",
        price: "From ₹1,74,900",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/studio-display-202203?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
    ],
  },
  {
    category: "iPhone",
    title: "iPhone Accessories",
    items: [
      {
        name: "iPhone Cases",
        price: "From ₹3,900",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-case-card-202409?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "MagSafe Charger",
        price: "From ₹3,900",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/magsafe-charger-202312?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "Lightning Cable",
        price: "From ₹1,900",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQGH2ZM-A?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "AirTag",
        price: "From ₹3,490",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
    ],
  },
  {
    category: "iPad",
    title: "iPad Accessories",
    items: [
      {
        name: "Apple Pencil Pro",
        price: "From ₹11,500",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-pencil-pro-select-202405?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "Magic Keyboard for iPad",
        price: "From ₹26,900",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/magic-keyboard-ipad-pro-13-M4-202405?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "Smart Folio",
        price: "From ₹8,500",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/smart-folio-ipad-pro-11-M4-202405?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
      {
        name: "iPad Cases",
        price: "From ₹4,900",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-case-card-202405?wid=400&hei=400&fmt=jpeg&qlt=90",
      },
    ],
  },
];

export default function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedSections =
    activeCategory === "All"
      ? PRODUCT_ACCESSORIES
      : PRODUCT_ACCESSORIES.filter((s) => s.category === activeCategory);

  return (
    <div className="acc-page">
      {/* Hero */}
      <section className="acc-hero">
        <div className="acc-content-width">
          <h1 className="acc-hero-title">Meet your match.</h1>
          <p className="acc-hero-sub">
            Genuine Apple accessories. Designed to complement every product in
            your life.
          </p>
        </div>
      </section>

      {/* Category filter nav */}
      <div className="acc-cat-nav">
        <div className="acc-content-width acc-cat-inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`acc-cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured hero tiles */}
      {activeCategory === "All" && (
        <section className="acc-featured">
          <div className="acc-content-width">
            {FEATURED.map((item, i) => (
              <div
                key={item.id}
                className={`acc-feature-tile ${i % 2 === 1 ? "acc-reverse" : ""} ${!item.textDark ? "acc-dark" : ""}`}
                style={{ background: item.bg }}
              >
                <div className="acc-feature-body">
                  <h2
                    className={`acc-feature-name ${!item.textDark ? "acc-text-white" : ""}`}
                  >
                    {item.name}
                  </h2>
                  <h3
                    className={`acc-feature-tagline ${!item.textDark ? "acc-text-white" : ""}`}
                  >
                    {item.tagline}
                  </h3>
                  <p
                    className={`acc-feature-desc ${!item.textDark ? "acc-text-muted-white" : "acc-text-muted"}`}
                  >
                    {item.desc}
                  </p>
                  <p
                    className={`acc-feature-price ${!item.textDark ? "acc-text-white" : ""}`}
                  >
                    {item.price}
                  </p>
                  <div className="acc-feature-actions">
                    <a href="#shop" className="acc-btn-primary">
                      {item.cta}
                    </a>
                    <a
                      href="#learn"
                      className={`acc-btn-link ${!item.textDark ? "acc-link-white" : ""}`}
                    >
                      {item.learnMore} &rsaquo;
                    </a>
                  </div>
                </div>
                <div className="acc-feature-img">
                  <img
                    src={item.img}
                    alt={item.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Product accessory grids */}
      {displayedSections.map((section) => (
        <section key={section.category} className="acc-grid-section">
          <div className="acc-content-width">
            <div className="acc-grid-header">
              <h2 className="acc-grid-title">{section.title}</h2>
              <a href="#shop" className="acc-see-all">
                Shop all &rsaquo;
              </a>
            </div>
            <div className="acc-product-grid">
              {section.items.map((item) => (
                <div key={item.name} className="acc-product-card">
                  <div className="acc-product-img">
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <div className="acc-product-info">
                    <p className="acc-product-name">{item.name}</p>
                    <p className="acc-product-price">{item.price}</p>
                    <div className="acc-product-actions">
                      <a href="#buy" className="acc-card-btn-primary">
                        Buy
                      </a>
                      <a href="#learn" className="acc-card-link">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* AirTag promo */}
      <section className="acc-airtag-promo">
        <div className="acc-content-width">
          <div className="acc-airtag-card">
            <div className="acc-airtag-body">
              <p className="acc-airtag-eyebrow">AirTag</p>
              <h2 className="acc-airtag-title">
                Lose your knack
                <br />
                for losing things.
              </h2>
              <p className="acc-airtag-desc">
                AirTag is an easy way to keep track of your stuff. Attach one to
                your keys, slip one in your bag. AirTag is precision-designed to
                be found — by you.
              </p>
              <div className="acc-airtag-actions">
                <a href="#buy" className="acc-btn-primary">
                  Shop AirTag
                </a>
                <a href="#learn" className="acc-btn-link-dark">
                  Learn more &rsaquo;
                </a>
              </div>
            </div>
            <div className="acc-airtag-img">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104?wid=800&hei=800&fmt=jpeg&qlt=90"
                alt="AirTag"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footnotes */}
      <footer className="acc-footnotes">
        <div className="acc-content-width">
          <p>
            Prices and availability may vary by region and are subject to
            change.
          </p>
          <p>
            Financing available through Apple Financial Services. Subject to
            credit approval.
          </p>
        </div>
      </footer>
    </div>
  );
}
