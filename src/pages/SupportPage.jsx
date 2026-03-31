import { useState } from "react";
import "./SupportPage.css";

const PRODUCTS = [
  {
    name: "iPhone",
    icon: "📱",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17-pro-finish-select-202509-6-9inch-blacktitanium?wid=200&hei=200&fmt=jpeg&qlt=90",
  },
  {
    name: "Mac",
    icon: "💻",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=200&hei=200&fmt=jpeg&qlt=90",
  },
  {
    name: "iPad",
    icon: "📲",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202405?wid=200&hei=200&fmt=jpeg&qlt=90",
  },
  {
    name: "Apple Watch",
    icon: "⌚",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-s11-45-alum-midnight-nc-s11_VW_34FR_WF_CO?wid=200&hei=200&fmt=jpeg&qlt=90",
  },
  {
    name: "AirPods",
    icon: "🎧",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=200&hei=200&fmt=jpeg&qlt=90",
  },
  {
    name: "Apple TV",
    icon: "📺",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-tv-4k-202210-gallery?wid=200&hei=200&fmt=jpeg&qlt=90",
  },
];

const SUPPORT_TOOLS = [
  {
    title: "Apple ID",
    desc: "Manage your Apple ID, reset your password, or find out if your account has been compromised.",
    link: "https://account.apple.com",
    icon: "🔑",
  },
  {
    title: "Check Coverage",
    desc: "Check your service and support coverage, including limited warranty, AppleCare plan, and more.",
    link: "https://checkcoverage.apple.com",
    icon: "🛡️",
  },
  {
    title: "Apple Repair",
    desc: "Get your Apple product repaired at an Apple Store or Apple Authorised Service Provider.",
    link: "https://support.apple.com/en-in/repair",
    icon: "🔧",
  },
  {
    title: "Find My",
    desc: "Locate, lock, or erase your lost or stolen Apple device using iCloud.com or the Find My app.",
    link: "https://icloud.com/find",
    icon: "📍",
  },
];

const POPULAR_TOPICS = [
  {
    title: "Set up your new iPhone",
    link: "https://support.apple.com/en-in/102538",
  },
  {
    title: "Back up your iPhone",
    link: "https://support.apple.com/en-in/108771",
  },
  {
    title: "Transfer data to new iPhone",
    link: "https://support.apple.com/en-in/111796",
  },
  {
    title: "Apple ID password reset",
    link: "https://support.apple.com/en-in/111825",
  },
  { title: "Update macOS", link: "https://support.apple.com/en-in/100100" },
  {
    title: "Set up Family Sharing",
    link: "https://support.apple.com/en-in/108380",
  },
];

const SERVICE_PROGRAMS = [
  {
    title: "AppleCare+",
    desc: "Your plan. Your peace of mind. Includes expert technical support, accidental damage protection, and hardware repair coverage.",
    link: "https://www.apple.com/in/support/products/",
    cta: "Learn more",
  },
  {
    title: "Apple Trade In",
    desc: "Get credit towards a new Apple device when you trade in your eligible device.",
    link: "https://www.apple.com/in/trade-in/",
    cta: "Get your estimate",
  },
  {
    title: "Today at Apple",
    desc: "Free sessions to help you get the most from your Apple devices — in‑store and online.",
    link: "https://www.apple.com/in/today/",
    cta: "Find a session",
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(
        `https://support.apple.com/en-in/search?q=${encodeURIComponent(searchQuery)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <div className="sup-page">
      {/* Hero / Search */}
      <section className="sup-hero">
        <div className="sup-content-width">
          <h1 className="sup-hero-title">Need help? Start here.</h1>
          <form className="sup-search-form" onSubmit={handleSearch}>
            <div className="sup-search-wrap">
              <svg className="sup-search-icon" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13.5 13.5L18 18M8.5 15A6.5 6.5 0 1 1 8.5 2a6.5 6.5 0 0 1 0 13Z"
                  stroke="#6e6e73"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="search"
                className="sup-search-input"
                placeholder="Search Support"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search Support"
              />
            </div>
            <button type="submit" className="sup-search-btn">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Product quick links */}
      <section className="sup-products">
        <div className="sup-content-width">
          <h2 className="sup-section-title">Support by product</h2>
          <div className="sup-product-grid">
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={`https://support.apple.com/en-in/${p.name.toLowerCase().replace(" ", "-")}`}
                className="sup-product-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sup-product-img">
                  <img
                    src={p.img}
                    alt={p.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <span className="sup-product-name">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support tools */}
      <section className="sup-tools-section">
        <div className="sup-content-width">
          <h2 className="sup-section-title">Support tools</h2>
          <div className="sup-tools-grid">
            {SUPPORT_TOOLS.map((tool) => (
              <a
                key={tool.title}
                href={tool.link}
                className="sup-tool-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sup-tool-icon" role="img" aria-hidden="true">
                  {tool.icon}
                </span>
                <div className="sup-tool-body">
                  <h3 className="sup-tool-title">{tool.title}</h3>
                  <p className="sup-tool-desc">{tool.desc}</p>
                </div>
                <svg className="sup-tool-arrow" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4 2l4 4-4 4"
                    stroke="#06c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular topics */}
      <section className="sup-popular-section">
        <div className="sup-content-width">
          <h2 className="sup-section-title">Popular topics</h2>
          <ul className="sup-popular-list">
            {POPULAR_TOPICS.map((t) => (
              <li key={t.title} className="sup-popular-item">
                <a
                  href={t.link}
                  className="sup-popular-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.title}
                  <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
                    <path
                      d="M4 2l4 4-4 4"
                      stroke="#06c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AppleCare section */}
      <section className="sup-applecare">
        <div className="sup-content-width">
          <div className="sup-applecare-card">
            <div className="sup-applecare-body">
              <p className="sup-applecare-eyebrow">AppleCare+</p>
              <h2 className="sup-applecare-title">
                Expert support and service coverage for every Apple product.
              </h2>
              <p className="sup-applecare-desc">
                Get unlimited repairs for accidental damage, 24/7 access to
                Apple experts, and hardware repair coverage — all in one plan.
              </p>
              <div className="sup-applecare-actions">
                <a
                  href="https://www.apple.com/in/support/products/"
                  className="sup-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about AppleCare+
                </a>
                <a
                  href="https://checkcoverage.apple.com"
                  className="sup-btn-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check your coverage &rsaquo;
                </a>
              </div>
            </div>
            <div className="sup-applecare-img">
              <img
                src="https://www.apple.com/v/applecare-products/f/images/overview/hero__dvvfbsqq1kia_large.jpg"
                alt="AppleCare+"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service programs */}
      <section className="sup-service-section">
        <div className="sup-content-width">
          <h2 className="sup-section-title">More to explore</h2>
          <div className="sup-service-grid">
            {SERVICE_PROGRAMS.map((s) => (
              <div key={s.title} className="sup-service-card">
                <h3 className="sup-service-title">{s.title}</h3>
                <p className="sup-service-desc">{s.desc}</p>
                <a
                  href={s.link}
                  className="sup-service-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.cta} &rsaquo;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="sup-footnotes">
        <div className="sup-content-width">
          <p>
            Apple Support is available in India. For in‑person service or
            repairs, schedule an appointment at an Apple Store or Authorised
            Service Provider.
          </p>
          <p>1800‑108‑4600 — Available Mon–Fri, 9 am to 9 pm IST.</p>
        </div>
      </div>
    </div>
  );
}
