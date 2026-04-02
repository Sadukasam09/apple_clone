import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./store.css";

const categories = [
  {
    title: "Mac",
    href: "/mac",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1739502370210",
  },
  {
    title: "iPhone",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202509?wid=200&hei=200&fmt=png-alpha&.v=1758131628324",
  },
  {
    title: "iPad",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=200&hei=200&fmt=png-alpha&.v=1714706893655",
  },
  {
    title: "Apple Watch",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=200&hei=200&fmt=png-alpha&.v=1723857138464",
  },
  {
    title: "AirPods",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=200&hei=200&fmt=png-alpha&.v=1722974349822",
  },
  {
    title: "AirTag",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtag-nav-202108?wid=200&hei=200&fmt=png-alpha&.v=1625789421000",
  },
  {
    title: "Apple TV 4K",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=200&fmt=png-alpha&.v=1664912135437",
  },
  {
    title: "HomePod",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=200&fmt=png-alpha&.v=1670389216654",
  },
  {
    title: "Accessories",
    href: "#",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1739502143318",
  },
];

const latestCards = [
  {
    eyebrow: "NEW",
    title: "iPhone 17 Pro",
    copy: "All out Pro. From Rs. 134900.00.",
    theme: "dark",
    size: "featured",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQjVOVStZaG1ncWFjNXVUZkZ4anVIYlNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R2RBR0JWVHBRN0NKVm11SFZzeU45T2VCTXFJbjVIbEFUN05pTHFFYldZYzg",
  },
  {
    eyebrow: "NEW",
    title: "MacBook Neo",
    copy: "The magic of Mac at a surprising price. From Rs. 69900.00.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-neo-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772005276",
  },
  {
    eyebrow: "NEW",
    title: "AirPods Max 2",
    copy: "New intelligent features. More immersive listening. Rs. 67900.00.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-airpods-max-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655432542",
  },
  {
    eyebrow: "NEW",
    title: "Apple Watch Series 11",
    copy: "The ultimate way to watch your health. From Rs. 46900.00.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s11-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740783230322",
  },
  {
    eyebrow: "NEW",
    title: "iPad Air",
    copy: "Light, quick and ready for everyday work. From Rs. 64900.00.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772219677",
  },
  {
    eyebrow: "NEW",
    title: "MacBook Air",
    copy: "Everyday notebook energy with more headroom. From Rs. 119900.00.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772307337",
  },
];

const differenceCards = [
  {
    badge: "EMI",
    title: "No Cost EMI. Plus instant cashback.",
    copy: "Flexible ways to pay on selected products with eligible cards.",
  },
  {
    badge: "TRADE",
    title: "Exchange your smartphone, get credit.",
    copy: "Trade in and put the value toward a new iPhone.",
  },
  {
    badge: "BUILD",
    title: "Customise your Mac.",
    copy: "Choose your chip, memory, storage and finish.",
  },
  {
    badge: "SHIP",
    title: "Free delivery or easy pickup.",
    copy: "Fast, simple and designed around your schedule.",
  },
  {
    badge: "GIFT",
    title: "Free engraving on selected devices.",
    copy: "Make gifts more personal with names, numbers or emoji.",
  },
];

const helpCards = [
  {
    eyebrow: "APPLE SPECIALIST",
    title: "Shop one on one with a Specialist online.",
    size: "featured",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-help-202509_GEO_IN?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1756359255040",
  },
  {
    eyebrow: "PERSONAL SETUP",
    title: "Set up your new device with help from a Specialist.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1727714994626",
  },
  {
    eyebrow: "TODAY AT APPLE",
    title: "Join free sessions at your Apple Store.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-todayatapple-202402?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1707254448267",
  },
  {
    eyebrow: "WATCH AND LEARN",
    title: "Get quick help and short walkthroughs from support.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-support-help-202402?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1707254439985",
  },
  {
    eyebrow: "SMALL BUSINESS",
    title: "Get help choosing the right setup for your team.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-business-202402?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1707254423320",
  },
];

const accessoryCards = [
  {
    eyebrow: "ACCESSORIES",
    title: "Here and wow.",
    copy: "The accessories you love. In a fresh mix of colours.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-accessories-story-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1755126497178",
  },
  {
    title: "iPhone 17 Pro Silicone Case with MagSafe",
    copy: "MRP Rs. 4900.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHW04?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1754510114894",
  },
  {
    title: "46mm Bright Guava Sport Loop",
    copy: "MRP Rs. 4500.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHYW4?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1754500958181",
  },
  {
    title: "20W USB-C Power Adapter",
    copy: "MRP Rs. 2190.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUVR3?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693248282791",
  },
];

const audioCards = [
  {
    eyebrow: "AUDIO",
    title: "Loud and clear.",
    copy: "Unparalleled choices for rich, high-quality sound.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-audio-story-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724186477353",
  },
  {
    title: "AirPods Pro 3",
    copy: "MRP Rs. 25900.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MFHP4?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1754515498442",
  },
  {
    title: "HomePod mini",
    copy: "MRP Rs. 10900.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ2D3?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1754515448042",
  },
  {
    title: "Beats Solo 4",
    copy: "MRP Rs. 22900.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUW33?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1710355301529",
  },
  {
    title: "HomePod",
    copy: "MRP Rs. 32900.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDEW4?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1730468975375",
  },
];

const nikeCards = [
  {
    eyebrow: "FEATURED DROP",
    title: "Sport with style.",
    copy: "Performance gear, bright colour and workout-ready accessories.",
    theme: "dark",
    size: "featured",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-nike-beats-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1755126564930",
  },
  {
    title: "Powerbeats Pro 2 Special Edition",
    copy: "MRP Rs. 29900.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ2D4?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1754526645148",
  },
  {
    title: "46mm Volt Splash Sport Loop",
    copy: "MRP Rs. 4500.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD24?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1754526641146",
  },
  {
    title: "Rugged Case with MagSafe",
    copy: "MRP Rs. 7900.00",
    product: true,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGJM4?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1754525943014",
  },
];

const experienceCards = [
  {
    eyebrow: "APPLE INTELLIGENCE",
    title: "Create, communicate and get things done effortlessly.",
    theme: "dark",
    size: "featured",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-intelligence-202509?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1755126518456",
  },
  {
    eyebrow: "APPLE TV+",
    title: "Get 3 months of Apple TV+ free when you buy an Apple device.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-tv-plus-202402?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1707254433869",
  },
  {
    eyebrow: "APPLE STORE APP",
    title: "Put your bow on it with a personalised message.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-app-store-app-202505?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1746159453073",
  },
  {
    eyebrow: "HOME",
    title: "See how one app can help run your home setup.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-home-202405?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1715638846800",
  },
];

const savingsCards = [
  {
    eyebrow: "EDUCATION",
    title: "Savings on a new Mac or iPad for eligible students.",
    copy: "Special pricing and guided help for campus setups.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-education-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772177753",
  },
  {
    eyebrow: "BUSINESS",
    title: "Flexible buying and support for growing teams.",
    copy: "From solo founders to larger companies, build the right setup.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-business-202402?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1707254436015",
  },
  {
    eyebrow: "OFFERS",
    title: "Card offers and trade-in options that reduce the jump.",
    copy: "Explore payments, savings and upgrade routes in one place.",
    theme: "dark",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-offers-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772297399",
  },
];

const quickLinks = [
  "Find a Store",
  "Order Status",
  "Shopping Help",
  "Your Saves",
  "Ways to Buy",
  "Business",
];

const notes = [
  "Flexible payment plans and cashback offers vary by card issuer and eligibility.",
  "Trade-in values depend on the device condition, age and configuration.",
  "Delivery timelines, pickup windows and availability can change by location.",
];

function StoreRail({ title, subtitle, cards, compact = false, info = null }) {
  return (
    <section className="store-section">
      <div className="store-section-head">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
        {info ? (
          <a href="#" className="store-section-link">
            {info}
          </a>
        ) : null}
      </div>
      <div className={`store-rail${compact ? " store-rail-compact" : ""}`}>
        {cards.map((card) => (
          <article
            key={card.title}
            className={`store-card${card.theme === "dark" ? " store-card-dark" : ""}${card.product ? " store-card-product" : ""}${card.size ? ` store-card-${card.size}` : ""}`}
          >
            <img src={card.image} alt={card.title} loading="lazy" />
            <div className="store-card-content">
              {card.eyebrow ? (
                <p className="store-card-eyebrow">{card.eyebrow}</p>
              ) : null}
              <h3>{card.title}</h3>
              {card.copy ? <p>{card.copy}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function StorePage() {
  const [storeQuery, setStoreQuery] = useState("");

  const normalizedQuery = storeQuery.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) {
      return categories;
    }

    return categories.filter((category) =>
      category.title.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  const filteredQuickLinks = useMemo(() => {
    if (!normalizedQuery) {
      return quickLinks;
    }

    return quickLinks.filter((item) =>
      item.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  const handleStoreSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="store-page">
      <section className="store-hero">
        <div className="store-hero-copy">
          <h1>Store</h1>
        </div>
        <div className="store-hero-aside">
          <h2>The best way to buy the products you love.</h2>
          <a href="#">Connect with a Specialist</a>
          <a href="#">Find an Apple Store</a>

          <form
            className="store-search-form"
            onSubmit={handleStoreSearchSubmit}
          >
            <label htmlFor="store-search" className="store-search-label">
              Quick find in Store
            </label>
            <div className="store-search-field">
              <input
                id="store-search"
                type="search"
                value={storeQuery}
                onChange={(event) => setStoreQuery(event.target.value)}
                placeholder="Search categories or links"
                aria-describedby="store-search-helper"
              />
              {storeQuery ? (
                <button
                  type="button"
                  className="store-search-clear"
                  onClick={() => setStoreQuery("")}
                  aria-label="Clear store search"
                >
                  Clear
                </button>
              ) : null}
            </div>
            <p
              id="store-search-helper"
              className="store-search-helper"
              role="status"
            >
              {normalizedQuery
                ? `${filteredCategories.length} matching categories, ${filteredQuickLinks.length} quick links.`
                : "Tip: use keyboard search to jump to what you need faster."}
            </p>
          </form>
        </div>
      </section>

      <section className="store-categories">
        <div className="store-category-strip">
          <div className="store-category-row">
            {filteredCategories.map((category) =>
              category.href !== "#" ? (
                <Link
                  to={category.href}
                  key={category.title}
                  className="store-category-item"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                  />
                  <span>{category.title}</span>
                </Link>
              ) : (
                <a
                  href="#"
                  key={category.title}
                  className="store-category-item"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                  />
                  <span>{category.title}</span>
                </a>
              ),
            )}
          </div>
          {normalizedQuery && filteredCategories.length === 0 ? (
            <p className="store-search-empty" role="status">
              No category match for "{storeQuery.trim()}". Try terms like
              iPhone, Mac or Accessories.
            </p>
          ) : null}
          <button
            type="button"
            className="store-category-next"
            aria-label="Next categories"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M7.65 4.23a.75.75 0 0 1 1.06 0l5.24 5.24a.75.75 0 0 1 0 1.06l-5.24 5.24a.75.75 0 1 1-1.06-1.06L12.36 10 7.65 5.29a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>
        </div>
      </section>

      <StoreRail
        title="The latest."
        subtitle="Take a look at what’s new right now."
        cards={latestCards}
        info="Browse all new arrivals"
      />

      <section className="store-section">
        <div className="store-section-head">
          <h2>The Apple Store difference.</h2>
          <p>Even more reasons to shop with us.</p>
        </div>
        <div className="store-rail store-rail-compact">
          {differenceCards.map((card) => (
            <article key={card.title} className="store-info-card">
              <span className="store-info-badge">{card.badge}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <StoreRail
        title="Help is here."
        subtitle="Whenever and however you need it."
        cards={helpCards}
        info="Talk to a Specialist"
      />

      <StoreRail
        title="Accessories."
        subtitle="Essentials that pair perfectly with your favourite devices."
        cards={accessoryCards}
        compact
        info="Explore accessories"
      />

      <StoreRail
        title="Loud and clear."
        subtitle="Unparalleled choices for rich, high-quality sound."
        cards={audioCards}
        compact
        info="See audio picks"
      />

      <StoreRail
        title="Performance drop."
        subtitle="Workout-ready gear with stronger colour and energy."
        cards={nikeCards}
        compact
        info="See featured collabs"
      />

      <StoreRail
        title="The Apple experience."
        subtitle="Do even more with Apple products and services."
        cards={experienceCards}
        info="Discover services"
      />

      <StoreRail
        title="Savings and offers."
        subtitle="Extra ways to make the move a bit easier."
        cards={savingsCards}
        compact
        info="See current offers"
      />

      <section className="store-section store-quick-links">
        <div className="store-section-head">
          <h2>Quick Links</h2>
        </div>
        <div className="store-link-pills">
          {filteredQuickLinks.map((item) => (
            <a key={item} href="#" className="store-link-pill">
              {item}
            </a>
          ))}
        </div>
        {normalizedQuery && filteredQuickLinks.length === 0 ? (
          <p className="store-search-empty" role="status">
            No quick links matched "{storeQuery.trim()}".
          </p>
        ) : null}
      </section>

      <section className="store-section store-notes">
        {notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </section>
    </main>
  );
}
