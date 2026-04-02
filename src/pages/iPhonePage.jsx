import { useState } from "react";
import "./iPhonePage.css";

const appleAsset = (path) => `https://www.apple.com${path}`;

const chapterNavItems = [
  {
    label: "iPhone 17 Pro",
    href: "https://www.apple.com/in/iphone-17-pro/",
    image: appleAsset(
      "/in/iphone/home/images/overview/chapternav/nav_iphone_17pro__d60uog2c064i_large.png",
    ),
  },
  {
    label: "iPhone Air",
    href: "https://www.apple.com/in/iphone-air/",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/chapternav/nav_iphone_air__f066mfdfhi62_large.png",
    ),
  },
  {
    label: "iPhone 17",
    href: "https://www.apple.com/in/iphone-17/",
    image: appleAsset(
      "/in/iphone/home/images/overview/chapternav/nav_iphone_17__ffxyxejeezqm_large.png",
    ),
  },
  {
    label: "iPhone 17e",
    badge: "New",
    href: "https://www.apple.com/in/iphone-17e/",
    image: appleAsset(
      "/in/iphone/home/images/overview/chapternav/nav_iphone_17e__dea363vi6ggi_large.png",
    ),
  },
  {
    label: "iPhone 16",
    href: "https://www.apple.com/in/shop/goto/buy_iphone/iphone_16",
    image: appleAsset(
      "/in/iphone/home/images/overview/chapternav/nav_iphone_16__kcscr25z9num_large.png",
    ),
  },
  {
    label: "Compare",
    href: "https://www.apple.com/in/iphone/compare/",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/chapternav/nav_compare__e3xurpy671me_large.png",
    ),
  },
  {
    label: "Accessories",
    href: "/accessories",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/chapternav/nav_accessories__d0p6sy36eueu_large.png",
    ),
  },
  {
    label: "Shop iPhone",
    href: "https://www.apple.com/in/shop/goto/buy_iphone",
    image: appleAsset(
      "/in/iphone/home/images/overview/chapternav/nav_shop_alt__dur38g1c4ii6_large.png",
    ),
  },
  {
    label: "iOS",
    href: "https://www.apple.com/in/os/ios/",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/chapternav/nav_ios__e5jic1u960ya_large.png",
    ),
  },
];

const lineupModels = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    tagline: "Innovative design for ultimate performance and battery life.",
    price: "From ₹134900.00*",
    emi: "or ₹21650.00/mo. for 6 mo.‡",
    image: appleAsset(
      "/in/iphone/home/images/overview/select/iphone_17pro__t1j902iw6kya_large.jpg",
    ),
    alt: "iPhone 17 Pro in cosmic orange.",
    colors: ["#c56f41", "#293b78", "#d7d7d9"],
    learnHref: "https://www.apple.com/in/iphone-17-pro/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_iphone/iphone_17_pro",
  },
  {
    id: "iphone-air",
    name: "iPhone Air",
    tagline: "The thinnest iPhone ever. With the power of pro inside.",
    price: "From ₹119900.00*",
    emi: "or ₹19150.00/mo. for 6 mo.‡",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/select/iphone_air__b5qmgl05ojyq_large.jpg",
    ),
    alt: "iPhone Air in sky blue.",
    colors: ["#b6d7ea", "#d3c19c", "#f1efec", "#2e2d31"],
    learnHref: "https://www.apple.com/in/iphone-air/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_iphone/iphone_air",
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    tagline: "Even more delightful. Even more durable.",
    price: "From ₹82900.00*",
    emi: "or ₹14468.00/mo. for 6 mo.‡‡",
    image: appleAsset(
      "/in/iphone/home/images/overview/select/iphone_17__fb1277oq3eaa_large.jpg",
    ),
    alt: "iPhone 17 in lavender.",
    colors: ["#c7b0f4", "#c6d2b2", "#abc4dd", "#f2f2f4", "#2e2d31"],
    learnHref: "https://www.apple.com/in/iphone-17/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_iphone/iphone_17",
  },
  {
    id: "iphone-17e",
    name: "iPhone 17e",
    badge: "New",
    tagline: "Feature stacked. Value packed.",
    price: "From ₹64900.00*",
    emi: "or ₹11327.00/mo. for 6 mo.‡‡",
    image: appleAsset(
      "/in/iphone/home/images/overview/select/iphone_17e__cq5ygzct314y_large.jpg",
    ),
    alt: "iPhone 17e in soft pink.",
    colors: ["#e6c5d0", "#f3f2f5", "#2b2b2f"],
    learnHref: "https://www.apple.com/in/iphone-17e/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_iphone/iphone_17e",
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    tagline: "Amazing performance. Durable design.",
    price: "From ₹69900.00*",
    emi: "or ₹10983.00/mo. for 6 mo.‡",
    image: appleAsset(
      "/in/iphone/home/images/overview/select/iphone_16__b6tkv86m2gc2_large.jpg",
    ),
    alt: "iPhone 16 in ultramarine.",
    colors: ["#5a80ef", "#6db8a8", "#efc4d2", "#f3f4f6", "#2f2f33"],
    learnHref: "https://www.apple.com/in/iphone-16/specs/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_iphone/iphone_16",
  },
];

const featureCards = [
  {
    id: "innovation",
    label: "Innovation",
    title: "Beautiful and durable,\nby design.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/consider/innovation__fmir5mp9zpay_large.jpg",
    ),
    tone: "dark",
  },
  {
    id: "cameras",
    label: "Cutting-Edge Cameras",
    title: "Picture your best\nphotos and videos.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/consider/camera__dez4cvpw83sm_large.jpg",
    ),
    tone: "dark",
  },
  {
    id: "chip",
    label: "Chip and Battery Life",
    title: "Fast that lasts.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/consider/chip__fh5j5on49p2e_large.jpg",
    ),
    tone: "dark",
  },
  {
    id: "ios",
    label: "iOS and Apple Intelligence",
    title: "New look.\nEven more magic.",
    image: appleAsset(
      "/in/iphone/home/images/overview/consider/ios__8z58j1o80yqi_large.jpg",
    ),
    tone: "dark",
  },
  {
    id: "environment",
    label: "Environment",
    title: "Designed with the earth\nin mind.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/consider/environment__c8tpot4ti2qa_large.jpg",
    ),
    tone: "light",
  },
  {
    id: "privacy",
    label: "Privacy",
    title: "Your data. Just where\nyou want it.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/consider/privacy__cv4ztv5gebyq_large.jpg",
    ),
    tone: "light",
  },
  {
    id: "peace-of-mind",
    label: "Peace of Mind",
    title: "Helpful features.\nJust in case.",
    image: appleAsset(
      "/in/iphone/home/images/overview/consider/safety__grtwyqpan8yi_large.jpg",
    ),
    tone: "dark",
  },
];

const whyBuyCards = [
  {
    id: "trade-in",
    label: "Apple Trade In",
    title: "Save on a new iPhone with a trade-in.",
    copy: "Get up to ₹22000.00–₹62700.00 in credit towards iPhone 17, iPhone Air or iPhone 17 Pro when you trade in iPhone 13 or higher.**",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/incentive/trade_in__d4dobu5egm0y_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/trade_in",
  },
  {
    id: "ways-to-buy",
    label: "Ways to Buy",
    title: "Monthly payment options are available.",
    copy: "Choose the easy way to finance with convenient monthly payment options.",
    image: appleAsset(
      "/in/iphone/home/images/overview/incentive/buy__gdo4oaj4ekmm_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/ways_to_buy",
  },
  {
    id: "personal-setup",
    label: "Personal Setup",
    title: "Make the most of your iPhone with an online session.",
    copy: "Talk one-to-one with a Specialist to set up your device and discover new features.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/incentive/setup__d177om0fsqs2_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/personal_setup",
  },
  {
    id: "delivery-pickup",
    label: "Delivery and Pickup",
    title: "Get flexible delivery and easy pickup.",
    copy: "Get free delivery or pickup at your Apple Store.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/incentive/deliver__by32yxmh41ma_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/shipping_pickup",
  },
  {
    id: "guided-shopping",
    label: "Guided Shopping",
    title: "Shop live with a Specialist.",
    copy: "Let us help you find what you need and answer all of your questions, one-to-one, at an Apple Store or online.",
    image: appleAsset(
      "/in/iphone/home/images/overview/incentive/specialist__bxk6m5pp2k3m_large.jpg",
    ),
    href: "https://contactretail.apple.com/?ap=com&c=in&l=en&pg=COM:retailStore",
  },
  {
    id: "store-app",
    label: "Apple Store App",
    title: "Explore a shopping experience designed around you.",
    copy: "Use the app to get a more personal way to shop.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/incentive/app__evu5fxqoamye_large.jpg",
    ),
    href: "https://apps.apple.com/in/app/apple-store/id375380948/",
  },
];

const essentialsCards = [
  {
    id: "accessories",
    title: "iPhone accessories",
    copy: "Cases, MagSafe gear, straps, and other add-ons that protect the phone or change how you carry it.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/essentials/accessories__ghgqo4vsxcqe_large.jpg",
    ),
    href: "/accessories",
    cta: "Shop accessories",
  },
  {
    id: "airtag",
    badge: "New",
    title: "AirTag",
    copy: "Pair it with iPhone to keep track of keys, luggage, or bags with more precise location help.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/essentials/airtag_accessories__kpd2m3mfy4ia_large.jpg",
    ),
    href: "https://www.apple.com/in/shop/goto/buy_airtag/airtag",
    cta: "Buy AirTag",
  },
];

const companionStories = [
  {
    id: "mac",
    title: "iPhone and Mac",
    teaser: "Mirror, paste, call, and keep files flowing across both devices.",
    description:
      "iPhone Mirroring, shared clipboards, continuity calling, and iCloud access make the Mac pairing feel especially cohesive.",
    image: appleAsset(
      "/in/iphone/home/images/overview/augment/mac__e1itm725bz8m_large.jpg",
    ),
    alt: "iPhone mirrored on a Mac display.",
    href: "/mac",
  },
  {
    id: "watch",
    title: "iPhone and Apple Watch",
    teaser:
      "Use your watch as a finder, remote, and extension of incoming calls.",
    description:
      "Apple Watch can help locate your phone, preview a camera shot, and keep a conversation moving from wrist to handset.",
    image: appleAsset(
      "/v/iphone/home/cj/images/overview/augment/watch__co62o3s4jn6u_large.jpg",
    ),
    alt: "iPhone next to Apple Watch using camera remote.",
    href: "/watch",
  },
  {
    id: "airpods",
    title: "iPhone and AirPods",
    teaser:
      "Fast pairing, adaptive audio, and a listening experience tuned to your surroundings.",
    description:
      "AirPods setup is nearly instant on iPhone, and the pairing unlocks personalized audio and smarter noise behavior.",
    image: appleAsset(
      "/in/iphone/home/images/overview/augment/airpods__bz9s5pwm8j6u_large.jpg",
    ),
    alt: "iPhone next to open AirPods case.",
    href: "/airpods",
  },
];

const routerColumns = [
  {
    title: "Explore iPhone",
    links: [
      { label: "Explore All iPhone", href: "https://www.apple.com/in/iphone/" },
      {
        label: "iPhone 17 Pro",
        href: "https://www.apple.com/in/iphone-17-pro/",
      },
      { label: "iPhone Air", href: "https://www.apple.com/in/iphone-air/" },
      { label: "iPhone 17", href: "https://www.apple.com/in/iphone-17/" },
      { label: "iPhone 17e", href: "https://www.apple.com/in/iphone-17e/" },
      {
        label: "iPhone 16",
        href: "https://www.apple.com/in/shop/goto/buy_iphone/iphone_16",
      },
      {
        label: "Compare iPhone",
        href: "https://www.apple.com/in/iphone/compare/",
      },
      {
        label: "Switch from Android",
        href: "https://www.apple.com/in/iphone/switch/",
      },
    ],
  },
  {
    title: "Shop iPhone",
    links: [
      {
        label: "Shop iPhone",
        href: "https://www.apple.com/in/shop/goto/buy_iphone",
      },
      {
        label: "iPhone Accessories",
        href: "https://www.apple.com/in/shop/goto/iphone/accessories",
      },
      {
        label: "Apple Trade In",
        href: "https://www.apple.com/in/shop/goto/trade_in",
      },
      {
        label: "Ways to Buy",
        href: "https://www.apple.com/in/shop/goto/ways_to_buy",
      },
      {
        label: "Personal Setup",
        href: "https://www.apple.com/in/shop/goto/personal_setup",
      },
    ],
  },
  {
    title: "More from iPhone",
    links: [
      {
        label: "iPhone Support",
        href: "https://support.apple.com/en-in/iphone?cid=gn-ols-iphone-psp-prodfly",
      },
      {
        label: "AppleCare",
        href: "https://www.apple.com/in/applecare/?filter=iphone",
      },
      { label: "iOS 26", href: "https://www.apple.com/in/os/ios/" },
      {
        label: "Apple Intelligence",
        href: "https://www.apple.com/in/apple-intelligence/",
      },
      { label: "Apps by Apple", href: "https://www.apple.com/in/apps/" },
      { label: "iPhone Privacy", href: "https://www.apple.com/in/privacy/" },
      {
        label: "Better with Mac",
        href: "https://www.apple.com/in/macos/continuity/",
      },
      { label: "iCloud+", href: "https://www.apple.com/in/icloud/" },
      { label: "Wallet", href: "https://www.apple.com/in/wallet/" },
      { label: "Siri", href: "https://www.apple.com/in/siri/" },
    ],
  },
];

const guidedTourHref =
  "https://www.apple.com/105/media/in/iphone/2025/bf3428fe-1ccc-4e3f-a0fc-30af341431f8/films/guided-tour/iphone-guided-tour-tpl-in-2025_16x9.m3u8";

function IPhonePage() {
  const [activeCompanionId, setActiveCompanionId] = useState(
    companionStories[0].id,
  );

  const activeCompanion =
    companionStories.find((story) => story.id === activeCompanionId) ??
    companionStories[0];

  return (
    <div className="iphone-page">
      <div className="iphone-ribbon">
        <div className="iphone-shell">
          <p>
            Get up to Rs 5000 instant cashback on selected iPhone models with
            eligible cards, plus flexible no-cost EMI options.{" "}
            <a href="https://www.apple.com/in/shop/goto/buy_iphone">
              Shop iPhone
            </a>
          </p>
        </div>
      </div>

      <header className="iphone-header iphone-shell">
        <div className="iphone-header-title-wrap">
          <h1 className="iphone-header-title">iPhone</h1>
        </div>
      </header>

      <nav className="iphone-chapternav" aria-label="iPhone family">
        <div className="iphone-shell iphone-chapternav-scroll">
          <div className="iphone-chapternav-track">
            {chapterNavItems.map((item) => (
              <a
                key={item.label}
                className="iphone-chapter-item"
                href={item.href}
              >
                <span className="iphone-chapter-media">
                  <img src={item.image} alt="" loading="lazy" />
                </span>
                <span className="iphone-chapter-label">{item.label}</span>
                {item.badge ? (
                  <span className="iphone-chapter-badge">{item.badge}</span>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="iphone-main">
        <section className="iphone-section iphone-section-lineup iphone-shell">
          <div className="iphone-section-head">
            <h2>Explore the line-up.</h2>
            <a
              className="iphone-section-link"
              href="https://www.apple.com/in/iphone/compare/"
            >
              Compare all models <span>&rsaquo;</span>
            </a>
          </div>

          <div className="iphone-rail iphone-lineup-rail">
            {lineupModels.map((model) => (
              <article key={model.id} className="iphone-lineup-card">
                <div className="iphone-lineup-media">
                  <img src={model.image} alt={model.alt} loading="lazy" />
                </div>
                <div
                  className="iphone-lineup-colors"
                  aria-label="Available finishes"
                >
                  {model.colors.map((color) => (
                    <span
                      key={`${model.id}-${color}`}
                      className="iphone-color-dot"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="iphone-lineup-copy">
                  {model.badge ? (
                    <span className="iphone-badge">{model.badge}</span>
                  ) : null}
                  <h3>{model.name}</h3>
                  <p>{model.tagline}</p>
                  <p className="iphone-lineup-price">{model.price}</p>
                  <p className="iphone-lineup-emi">{model.emi}</p>
                </div>
                <div className="iphone-card-actions iphone-lineup-actions">
                  <a
                    className="iphone-button iphone-button-primary"
                    href={model.learnHref}
                  >
                    Learn more
                  </a>
                  <a className="iphone-lineup-buy-link" href={model.buyHref}>
                    Buy <span>&rsaquo;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="iphone-section iphone-shell">
          <div className="iphone-section-head iphone-section-head-solo">
            <h2>Get to know iPhone.</h2>
          </div>
          <div className="iphone-rail">
            {featureCards.map((card) => (
              <article
                key={card.id}
                className={`iphone-feature-card iphone-card-tone-${card.tone}`}
              >
                <img src={card.image} alt={card.label} loading="lazy" />
                <div className="iphone-feature-overlay" />
                <div className="iphone-feature-copy">
                  <p className="iphone-card-label">{card.label}</p>
                  <h3 style={{ whiteSpace: "pre-line" }}>{card.title}</h3>
                </div>
                <span className="iphone-card-plus" aria-hidden="true">
                  +
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="iphone-section iphone-shell">
          <div className="iphone-section-head iphone-section-head-solo">
            <h2>Take a closer look.</h2>
          </div>
          <div className="iphone-guided-card">
            <img
              className="iphone-guided-image"
              src={appleAsset(
                "/v/iphone/home/cj/images/overview/guided-tour/guided_tour__e70yvshmbb2i_large.jpg",
              )}
              alt="A Guided Tour, person holding iPhone 17 Pro and iPhone Air."
              loading="lazy"
            />
            <div className="iphone-guided-copy">
              <p className="iphone-eyebrow">A Guided Tour of</p>
              <h3>
                iPhone 17 Pro, iPhone Air
                <br />
                and iPhone 17
              </h3>
              <a
                className="iphone-button iphone-guided-button"
                href={guidedTourHref}
              >
                Watch the film
              </a>
            </div>
          </div>
        </section>

        <section className="iphone-section iphone-shell">
          <div className="iphone-section-head">
            <h2>
              Why Apple is the best
              <br />
              place to buy iPhone.
            </h2>
            <a
              className="iphone-section-link"
              href="https://www.apple.com/in/shop/goto/buy_iphone"
            >
              Shop iPhone <span>&rsaquo;</span>
            </a>
          </div>

          <div className="iphone-rail iphone-buy-rail">
            {whyBuyCards.map((card) => (
              <a key={card.id} className="iphone-buy-card" href={card.href}>
                <div className="iphone-buy-copy">
                  <p className="iphone-card-label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p className="iphone-card-body">{card.copy}</p>
                </div>
                <div className="iphone-buy-media">
                  <img src={card.image} alt={card.label} loading="lazy" />
                </div>
                <span className="iphone-card-plus" aria-hidden="true">
                  +
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="iphone-section iphone-shell">
          <div className="iphone-section-head">
            <h2>iPhone essentials.</h2>
            <a className="iphone-section-link" href="/accessories">
              All iPhone accessories <span>&rsaquo;</span>
            </a>
          </div>
          <div className="iphone-essentials-grid">
            {essentialsCards.map((card) => (
              <a
                key={card.id}
                className="iphone-essential-card"
                href={card.href}
              >
                <div className="iphone-essential-copy">
                  {card.badge ? (
                    <span className="iphone-badge">{card.badge}</span>
                  ) : null}
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span className="iphone-inline-link">
                    {card.cta} <span>&rsaquo;</span>
                  </span>
                </div>
                <div className="iphone-essential-media">
                  <img src={card.image} alt={card.title} loading="lazy" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="iphone-section iphone-shell">
          <div className="iphone-section-head iphone-section-head-solo">
            <h2>Significant others.</h2>
          </div>

          <div className="iphone-companion-surface">
            <div
              className="iphone-companion-nav"
              role="tablist"
              aria-label="iPhone pairings"
            >
              {companionStories.map((story) => {
                const isActive = story.id === activeCompanionId;

                return (
                  <button
                    key={story.id}
                    type="button"
                    className={`iphone-companion-tab${isActive ? " iphone-companion-tab-active" : ""}`}
                    onClick={() => setActiveCompanionId(story.id)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span className="iphone-companion-tab-title">
                      {story.title}
                    </span>
                    <span className="iphone-companion-tab-copy">
                      {story.teaser}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="iphone-companion-panel" role="tabpanel">
              <div className="iphone-companion-panel-copy">
                <h3>{activeCompanion.title}</h3>
                <p>{activeCompanion.description}</p>
                <a className="iphone-inline-link" href={activeCompanion.href}>
                  Explore more <span>&rsaquo;</span>
                </a>
              </div>
              <div className="iphone-companion-panel-media">
                <img
                  src={activeCompanion.image}
                  alt={activeCompanion.alt}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="iphone-section iphone-shell iphone-router-section">
          <div className="iphone-router-surface">
            <h2 className="iphone-router-title">iPhone</h2>
            <div className="iphone-router-grid">
              {routerColumns.map((column) => (
                <div key={column.title} className="iphone-router-column">
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

export default IPhonePage;
