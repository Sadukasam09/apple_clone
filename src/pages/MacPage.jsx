import { useState } from "react";
import "./MacPage.css";

/* ── helpers ── */
const appleAsset = (path) => `https://www.apple.com${path}`;
const cdnAsset = (key) =>
  `https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/${key}`;

/* ── Chapter nav ── */
const chapterNavItems = [
  {
    label: "MacBook Neo",
    badge: "New",
    href: "https://www.apple.com/in/macbook-neo/",
    image: cdnAsset(
      "store-card-13-macbook-neo-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772173939",
    ),
  },
  {
    label: "MacBook Air",
    badge: "New",
    href: "https://www.apple.com/in/macbook-air/",
    image: cdnAsset(
      "store-card-13-macbook-air-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772174329",
    ),
  },
  {
    label: "MacBook Pro",
    badge: "New",
    href: "https://www.apple.com/in/macbook-pro/",
    image: cdnAsset(
      "store-card-13-macbook-pro-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740782219568",
    ),
  },
  {
    label: "iMac",
    href: "https://www.apple.com/in/imac/",
    image: cdnAsset(
      "store-card-13-imac-nav-202410?wid=200&hei=200&fmt=png-alpha&.v=1728342374591",
    ),
  },
  {
    label: "Mac mini",
    href: "https://www.apple.com/in/mac-mini/",
    image: cdnAsset(
      "store-card-13-mac-mini-nav-202410?wid=200&hei=200&fmt=png-alpha&.v=1730075288419",
    ),
  },
  {
    label: "Mac Studio",
    badge: "New",
    href: "https://www.apple.com/in/mac-studio/",
    image: cdnAsset(
      "store-card-13-mac-studio-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772356783",
    ),
  },
  {
    label: "Compare",
    href: "https://www.apple.com/in/mac/compare/",
    image: cdnAsset(
      "store-card-13-compare-mac-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203",
    ),
  },
  {
    label: "Displays",
    badge: "New",
    href: "https://www.apple.com/in/displays/",
    image: cdnAsset(
      "store-card-13-display-nav-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203",
    ),
  },
  {
    label: "Accessories",
    href: "https://www.apple.com/in/shop/goto/mac/accessories",
    image: cdnAsset(
      "store-card-13-accessories-mac-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203",
    ),
  },
  {
    label: "Shop Mac",
    href: "https://www.apple.com/in/shop/goto/buy_mac",
    image: cdnAsset(
      "store-card-13-shop-mac-202503?wid=200&hei=200&fmt=png-alpha&.v=1740772362203",
    ),
  },
];

/* ── Lineup models ── */
const LINEUP_FILTERS = ["All products", "Laptops", "Desktops", "Displays"];

const lineupModels = [
  {
    id: "macbook-neo",
    category: "Laptops",
    badge: "New",
    name: "MacBook Neo",
    tagline: "The magic of Mac at a surprising price.",
    price: "From ₹69,900.00**",
    emi: "or ₹11,150.00/mo. for 6 mo.*",
    colors: ["#c9cacb", "#f2c8d6", "#dce873", "#5a6ad4"],
    image: cdnAsset(
      "store-card-40-macbook-neo-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772307337",
    ),
    learnHref: "https://www.apple.com/in/macbook-neo/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/macbook_neo",
  },
  {
    id: "macbook-air",
    category: "Laptops",
    badge: "New",
    name: "MacBook Air 13\u2033 and 15\u2033",
    tagline: "Thin. Fast. Powerful and portable.",
    price: "From ₹1,19,900.00**",
    emi: "or ₹18,817.00/mo. for 6 mo.*",
    colors: ["#a9d4ff", "#dad6d0", "#f3e5b4", "#2b3040"],
    image: cdnAsset(
      "store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772307337",
    ),
    learnHref: "https://www.apple.com/in/macbook-air/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/macbook_air",
  },
  {
    id: "macbook-pro",
    category: "Laptops",
    badge: "New",
    name: "MacBook Pro 14\u2033 and 16\u2033",
    tagline: "The most advanced Mac laptops for demanding tasks.",
    price: "From ₹1,89,900.00**",
    emi: "or ₹29,983.00/mo. for 6 mo.*",
    colors: ["#1e1e1e", "#d6d4d0"],
    image: cdnAsset(
      "store-card-40-macbook-pro-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740782219568",
    ),
    learnHref: "https://www.apple.com/in/macbook-pro/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/macbook_pro",
  },
  {
    id: "imac",
    category: "Desktops",
    name: "iMac",
    tagline: "An all-in-one desktop for creativity and productivity.",
    price: "From ₹1,34,900.00**",
    emi: "or ₹21,650.00/mo. for 6 mo.*",
    colorImages: [
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_blue_d569f351c.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_purple_5184607e5.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_pink_cbcd01dea.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_orange_f065edb6d.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_yellow_3d07e057d.png",
      "https://www.apple.com/assets-www/en_WW/common/color_indicator/fp_color_indicator_green_f02f2102c.png",
    ],
    image: cdnAsset(
      "store-card-40-imac-202410?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1728342376329",
    ),
    learnHref: "https://www.apple.com/in/imac/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/imac",
  },
  {
    id: "mac-mini",
    category: "Desktops",
    badge: "New",
    name: "Mac mini",
    tagline: "The mini-est, most affordable Mac desktop.",
    price: "From ₹59,900.00**",
    emi: "or ₹9,317.00/mo. for 6 mo.*",
    image: cdnAsset(
      "store-card-40-mac-mini-202410?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1730075290527",
    ),
    learnHref: "https://www.apple.com/in/mac-mini/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/mac_mini",
  },
  {
    id: "mac-studio",
    category: "Desktops",
    badge: "New",
    name: "Mac Studio",
    tagline: "Powerful performance and connectivity for pros.",
    price: "From ₹2,14,900.00**",
    emi: "or ₹34,150.00/mo. for 6 mo.*",
    image: cdnAsset(
      "store-card-40-mac-studio-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772359059",
    ),
    learnHref: "https://www.apple.com/in/mac-studio/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/mac_studio",
  },
  {
    id: "studio-display",
    category: "Displays",
    badge: "New",
    name: "Studio Display",
    tagline: "A 5K Retina display that\u2019s perfect for Mac.",
    price: "From ₹1,89,900.00\u25ca\u25ca",
    emi: "or ₹33,142.00/mo. for 6 mo.\u25ca",
    image: cdnAsset(
      "store-card-40-studio-display-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772333996",
    ),
    learnHref: "https://www.apple.com/in/studio-display/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/mac_studio_display",
  },
  {
    id: "studio-display-xdr",
    category: "Displays",
    badge: "New",
    name: "Studio Display XDR",
    tagline:
      "The ultimate 5K Retina XDR display for creative and pro workflows.",
    price: "From ₹3,99,900.00\u25ca\u25ca",
    emi: "or ₹69,793.00/mo. for 6 mo.\u25ca",
    image: cdnAsset(
      "store-card-40-pro-display-xdr-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693346626695",
    ),
    learnHref: "https://www.apple.com/in/studio-display-xdr/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_mac/studio_display_xdr",
  },
];

/* ── Why Apple cards ── */
const whyBuyCards = [
  {
    id: "ways-to-buy",
    label: "Ways to Buy",
    title: "Monthly payment options are available.",
    copy: "Choose an easy way to finance with convenient payment options.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/financing__dol3s5rdvqia_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/ways_to_buy",
  },
  {
    id: "customise",
    label: "Customise",
    title: "Customise your Mac.",
    copy: "Choose your chip, memory, storage, even colour.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/customise__cymo75dpg5ma_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/buy_mac",
  },
  {
    id: "education",
    label: "Education Pricing",
    title: "Save on a new Mac with education pricing.",
    copy: "Students and educators can save exclusively through the Apple Store.****",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/education__ek1akovofbqa_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/educationrouting",
  },
  {
    id: "personal-setup",
    label: "Personal Setup",
    title: "Meet your new Mac with Personal Setup.",
    copy: "Get one-to-one guidance with data transfer, the latest features and more.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/personal_setup__blb9x0g2mxya_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/personal_setup",
  },
  {
    id: "delivery",
    label: "Delivery and Pickup",
    title: "Get flexible delivery and easy pickup.",
    copy: "Get free delivery or pickup at your Apple Store.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/delivery__dh8c9ne3l5ia_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/shipping-pickup",
  },
  {
    id: "trade-in",
    label: "Trade In",
    title: "Save with Apple\u00a0Trade\u00a0In.",
    copy: "Get credit towards your next Mac when you trade in an eligible device at an Apple Store.\u00b9",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/trade_in__ccfzjb6plb6e_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/trade_in",
  },
  {
    id: "guided",
    label: "Guided Shopping",
    title: "Shop live with a\u00a0Specialist.",
    copy: "Let us help you find what you need and answer all your questions, one-to-one, at an Apple Store or online.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/guided_shopping__el68i3gywpqm_large.jpg",
    ),
    href: "https://contactretail.apple.com/?pg=COM:mac&ap=COM&c=in&l=en",
  },
  {
    id: "app",
    label: "Apple Store App",
    title: "Explore a shopping experience designed around you.",
    copy: "Use the Apple Store app to get a more personal way to shop.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/why_apple/apple_store_app__bnbpkex5v7q2_large.jpg",
    ),
    href: "https://apps.apple.com/in/app/apple-store/id375380948",
  },
];

/* ── Get to know Mac (feature cards) ── */
const featureCards = [
  {
    id: "performance",
    label: "Performance and Battery Life",
    title: "Go fast.\u00a0Go far.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/performance__b7qvzyfk5r6q_large.jpg",
    ),
    tone: "dark",
  },
  {
    id: "ai",
    label: "Built for AI",
    title: "Smart. Secure.\nOn device.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/built_for_apple_intelligence__f2g8l46if5u2_large.jpg",
    ),
    tone: "dark",
  },
  {
    id: "macos",
    label: "macOS and Apple Intelligence",
    title: "Easy to use.\u00a0Easy to love.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/macos__b8h5me9j3cqa_large.jpg",
    ),
    tone: "light",
  },
  {
    id: "mac-iphone",
    label: "Mac + iPhone",
    title: "Together they work\nwonders.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/mac_iphone__gh1tblkt6bqm_large.jpg",
    ),
    tone: "light",
  },
  {
    id: "compatibility",
    label: "Compatibility",
    title: "Mac runs your\nfavourite apps.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/compatibility__f8hm76ektxua_large.jpg",
    ),
    tone: "light",
  },
  {
    id: "privacy",
    label: "Privacy and Security",
    title: "Your business is\nnobody else\u2019s.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/privacy__e66n36h1q0om_large.jpg",
    ),
    tone: "dark",
  },
  {
    id: "durability",
    label: "Durability",
    title: "Built to stand\nthe test of time.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/durability__ck6nkw4c5rki_large.jpg",
    ),
    tone: "light",
  },
  {
    id: "values",
    label: "Apple Values",
    title: "Our values drive\neverything we do.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/consider/apple_values__f9kyyvtj0b6a_large.jpg",
    ),
    tone: "light",
  },
];

/* ── Mac essentials ── */
const essentialsCards = [
  {
    id: "accessories",
    title: "Mac accessories",
    copy: "Explore keyboards, mice and other essentials.",
    image: cdnAsset(
      "accessories-category-card-mac-202307?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1687543083228",
    ),
    href: "https://www.apple.com/in/shop/goto/mac/accessories",
    cta: "Shop Mac accessories",
  },
  {
    id: "studio-display",
    badge: "New",
    title: "Studio Display",
    copy: "The 68.29\u2009cm (27\u2033) 5K Retina display pairs beautifully with Mac.",
    image: cdnAsset(
      "store-card-40-studio-display-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740772333996",
    ),
    href: "https://www.apple.com/in/studio-display/",
    cta: "Learn more",
  },
];

/* ── Unlock the world of Apple (companion stories) ── */
const companionStories = [
  {
    id: "iphone",
    title: "Mac and iPhone",
    teaser: "Mirror, call, copy across devices — then continue on either one.",
    description:
      "Answer calls or messages from your iPhone directly on your Mac. See and control what\u2019s on your iPhone from your Mac with iPhone Mirroring and Live Activities. Use Universal Clipboard to copy images, video or text from your iPhone, then paste into another app on your nearby Mac.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/continuity/mac_iphone__dvlbqlf8b3xy_large.jpg",
    ),
    href: "/iphone",
  },
  {
    id: "ipad",
    title: "Mac and iPad",
    teaser: "Use iPad as a second display or drawing tablet.",
    description:
      "Use your iPad as a second display for your Mac. Or use it as a drawing tablet with Apple Pencil. Work with the same files from either device, thanks to iCloud.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/continuity/mac_ipad__efp2s86j1xoy_large.jpg",
    ),
    href: "/ipad",
  },
  {
    id: "watch",
    title: "Mac and Apple Watch",
    teaser: "Unlock your Mac just by wearing your watch.",
    description:
      "Unlock your Mac automatically when you\u2019re wearing your Apple Watch. Approve password requests on your Mac from your wrist.",
    image: appleAsset(
      "/v/mac/home/cd/images/overview/continuity/mac_watch__ddkzkg9m0guq_large.jpg",
    ),
    href: "/watch",
  },
];

/* ── Router columns ── */
const routerColumns = [
  {
    title: "Explore Mac",
    links: [
      { label: "Explore All Mac", href: "https://www.apple.com/in/mac/" },
      { label: "MacBook Neo", href: "https://www.apple.com/in/macbook-neo/" },
      { label: "MacBook Air", href: "https://www.apple.com/in/macbook-air/" },
      { label: "MacBook Pro", href: "https://www.apple.com/in/macbook-pro/" },
      { label: "iMac", href: "https://www.apple.com/in/imac/" },
      { label: "Mac mini", href: "https://www.apple.com/in/mac-mini/" },
      { label: "Mac Studio", href: "https://www.apple.com/in/mac-studio/" },
      { label: "Displays", href: "https://www.apple.com/in/displays/" },
      {
        label: "Compare Mac",
        href: "https://www.apple.com/in/mac/compare/",
      },
      {
        label: "Switch from PC to Mac",
        href: "https://www.apple.com/in/mac/mac-does-that/",
      },
    ],
  },
  {
    title: "Shop Mac",
    links: [
      {
        label: "Shop Mac",
        href: "https://www.apple.com/in/shop/goto/buy_mac",
      },
      {
        label: "Mac Accessories",
        href: "https://www.apple.com/in/shop/goto/mac/accessories",
      },
      {
        label: "Ways to Buy",
        href: "https://www.apple.com/in/shop/goto/ways_to_buy",
      },
      {
        label: "Apple Trade In",
        href: "https://www.apple.com/in/shop/goto/trade_in",
      },
      {
        label: "Personal Setup",
        href: "https://www.apple.com/in/shop/goto/personal_setup",
      },
    ],
  },
  {
    title: "More from Mac",
    links: [
      {
        label: "Mac Support",
        href: "https://support.apple.com/en-in/mac?cid=gn-ols-mac-psp-prodfly",
      },
      {
        label: "AppleCare+ for Mac",
        href: "https://www.apple.com/in/applecare/?filter=mac",
      },
      {
        label: "macOS Tahoe",
        href: "https://www.apple.com/in/os/macos/",
      },
      {
        label: "Apple Intelligence",
        href: "https://www.apple.com/in/apple-intelligence/",
      },
      { label: "Apps by Apple", href: "https://www.apple.com/in/apps/" },
      {
        label: "Apple Creator Studio",
        href: "https://www.apple.com/in/apple-creator-studio/",
      },
      {
        label: "Better with iPhone",
        href: "https://www.apple.com/in/macos/continuity/",
      },
      { label: "iCloud+", href: "https://www.apple.com/in/icloud/" },
      {
        label: "Mac for Business",
        href: "https://www.apple.com/in/business/mac/",
      },
      { label: "Education", href: "https://www.apple.com/in/education/" },
    ],
  },
];

/* ── Component ── */
function MacPage() {
  const [activeFilter, setActiveFilter] = useState("All products");
  const [activeCompanionId, setActiveCompanionId] = useState(
    companionStories[0].id,
  );

  const filteredModels =
    activeFilter === "All products"
      ? lineupModels
      : lineupModels.filter((m) => m.category === activeFilter);

  const activeCompanion =
    companionStories.find((s) => s.id === activeCompanionId) ??
    companionStories[0];

  return (
    <div className="mac-page">
      {/* Promo ribbon */}
      <div className="mac-ribbon">
        <div className="mac-shell">
          <p>
            Get up to ₹10,000 instant cashback on selected Mac models with
            eligible cards. Plus up to 6&nbsp;months of No&nbsp;Cost EMI.{" "}
            <a href="https://www.apple.com/in/shop/goto/buy_mac">Shop Mac</a>
          </p>
        </div>
      </div>

      {/* Mac header */}
      <header className="mac-header mac-shell">
        <h1 className="mac-header-title">Mac</h1>
      </header>

      {/* Sticky chapter nav */}
      <nav className="mac-chapternav" aria-label="Mac family">
        <div className="mac-shell mac-chapternav-scroll">
          <div className="mac-chapternav-track">
            {chapterNavItems.map((item) => (
              <a key={item.label} className="mac-chapter-item" href={item.href}>
                <span className="mac-chapter-media">
                  <img src={item.image} alt="" loading="lazy" />
                </span>
                <span className="mac-chapter-label">{item.label}</span>
                {item.badge ? (
                  <span className="mac-chapter-badge">{item.badge}</span>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="mac-main">
        {/* Explore the line-up */}
        <section className="mac-section mac-shell">
          <div className="mac-section-head">
            <h2>Explore the line&#8209;up.</h2>
            <a
              className="mac-section-link"
              href="https://www.apple.com/in/mac/compare/"
            >
              Compare all models <span>&rsaquo;</span>
            </a>
          </div>

          {/* Filter tabs */}
          <div
            className="mac-filter-row"
            role="group"
            aria-label="Filter Mac products"
          >
            {LINEUP_FILTERS.map((f) => (
              <button
                key={f}
                className={`mac-filter-btn${activeFilter === f ? " is-active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mac-rail mac-lineup-rail">
            {filteredModels.map((model) => (
              <article key={model.id} className="mac-lineup-card">
                <div className="mac-lineup-media">
                  <img src={model.image} alt={model.name} loading="lazy" />
                </div>

                {/* Color dots */}
                {model.colors ? (
                  <div className="mac-lineup-colors">
                    {model.colors.map((c) => (
                      <span
                        key={`${model.id}-${c}`}
                        className="mac-color-dot"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                ) : model.colorImages ? (
                  <div className="mac-lineup-colors">
                    {model.colorImages.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="mac-color-dot-img"
                        loading="lazy"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="mac-lineup-colors-ph" />
                )}

                <div className="mac-lineup-copy">
                  {model.badge ? (
                    <span className="mac-badge">{model.badge}</span>
                  ) : null}
                  <h3>{model.name}</h3>
                  <p>{model.tagline}</p>
                  <p className="mac-lineup-price">{model.price}</p>
                  <p className="mac-lineup-emi">{model.emi}</p>
                </div>

                <div className="mac-card-actions mac-lineup-actions">
                  <a
                    className="mac-button mac-button-primary"
                    href={model.learnHref}
                  >
                    Learn more
                  </a>
                  <a className="mac-lineup-buy-link" href={model.buyHref}>
                    Buy <span>&rsaquo;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why Apple is the best place to buy Mac */}
        <section className="mac-section mac-shell">
          <div className="mac-section-head">
            <h2>
              Why Apple is the best
              <br />
              place to buy Mac.
            </h2>
            <a
              className="mac-section-link"
              href="https://www.apple.com/in/shop/goto/buy_mac"
            >
              Shop Mac <span>&rsaquo;</span>
            </a>
          </div>

          <div className="mac-rail mac-buy-rail">
            {whyBuyCards.map((card) => (
              <a key={card.id} className="mac-buy-card" href={card.href}>
                <div className="mac-buy-copy">
                  <p className="mac-card-label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p className="mac-card-body">{card.copy}</p>
                </div>
                <div className="mac-buy-media">
                  <img src={card.image} alt={card.label} loading="lazy" />
                </div>
                <span className="mac-card-plus" aria-hidden="true">
                  +
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Get to know Mac */}
        <section className="mac-section mac-shell">
          <div className="mac-section-head mac-section-head-solo">
            <h2>Get to know Mac.</h2>
          </div>
          <div className="mac-rail">
            {featureCards.map((card) => (
              <article
                key={card.id}
                className={`mac-feature-card mac-card-tone-${card.tone}`}
              >
                <img src={card.image} alt={card.label} loading="lazy" />
                <div className="mac-feature-overlay" />
                <div className="mac-feature-copy">
                  <p className="mac-card-label">{card.label}</p>
                  <h3 style={{ whiteSpace: "pre-line" }}>{card.title}</h3>
                </div>
                <span className="mac-card-plus" aria-hidden="true">
                  +
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* Switch to Mac */}
        <section className="mac-section mac-shell">
          <div className="mac-section-head mac-section-head-solo">
            <h2>Switch to Mac.</h2>
          </div>
          <div className="mac-switch-card">
            <div className="mac-switch-copy">
              <p className="mac-eyebrow">Mac does that.</p>
              <h3>See how easy it is to move to Mac.</h3>
              <a
                className="mac-inline-link"
                href="https://www.apple.com/in/mac/mac-does-that/"
              >
                Learn more <span>&rsaquo;</span>
              </a>
            </div>
            <div className="mac-switch-media">
              <img
                src={appleAsset(
                  "/v/mac/home/cd/images/overview/switch/mac_does_that__f4t5v2wmwa6e_large.jpg",
                )}
                alt="Mac does that"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Mac essentials */}
        <section className="mac-section mac-shell">
          <div className="mac-section-head mac-section-head-solo">
            <h2>Mac essentials.</h2>
          </div>
          <div className="mac-essentials-grid">
            {essentialsCards.map((card) => (
              <a key={card.id} className="mac-essential-card" href={card.href}>
                <div className="mac-essential-copy">
                  {card.badge ? (
                    <span className="mac-badge">{card.badge}</span>
                  ) : null}
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span className="mac-inline-link">
                    {card.cta} <span>&rsaquo;</span>
                  </span>
                </div>
                <div className="mac-essential-media">
                  <img src={card.image} alt={card.title} loading="lazy" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Unlock the world of Apple */}
        <section className="mac-section mac-shell">
          <div className="mac-section-head">
            <h2>Unlock the world of Apple.</h2>
            <a
              className="mac-section-link"
              href="https://www.apple.com/in/macos/continuity/"
            >
              Learn how Apple devices work better together <span>&rsaquo;</span>
            </a>
          </div>

          <div className="mac-companion-surface">
            <div
              className="mac-companion-nav"
              role="tablist"
              aria-label="Mac pairings"
            >
              {companionStories.map((story) => {
                const isActive = story.id === activeCompanionId;
                return (
                  <button
                    key={story.id}
                    type="button"
                    className={`mac-companion-tab${isActive ? " mac-companion-tab-active" : ""}`}
                    onClick={() => setActiveCompanionId(story.id)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span className="mac-companion-tab-title">
                      {story.title}
                    </span>
                    <span className="mac-companion-tab-copy">
                      {story.teaser}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mac-companion-panel" role="tabpanel">
              <div className="mac-companion-panel-copy">
                <h3>{activeCompanion.title}</h3>
                <p>{activeCompanion.description}</p>
                <a className="mac-inline-link" href={activeCompanion.href}>
                  Explore more <span>&rsaquo;</span>
                </a>
              </div>
              <div className="mac-companion-panel-media">
                <img
                  src={activeCompanion.image}
                  alt={activeCompanion.title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom router */}
        <section className="mac-section mac-shell mac-router-section">
          <div className="mac-router-surface">
            <h2 className="mac-router-title">Mac</h2>
            <div className="mac-router-grid">
              {routerColumns.map((column) => (
                <div key={column.title} className="mac-router-column">
                  <h3>{column.title}</h3>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MacPage;
