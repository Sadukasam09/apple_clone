import { useEffect, useRef, useState } from "react";
import "./WatchPage.css";

const chapterNavItems = [
  {
    label: "Series 11",
    href: "https://www.apple.com/in/apple-watch-series-11/",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/watch_s11_f3d43534c.svg",
  },
  {
    label: "SE 3",
    href: "https://www.apple.com/in/apple-watch-se-3/",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/watch_se_5af4fbe6c.svg",
  },
  {
    label: "Ultra 3",
    href: "https://www.apple.com/in/apple-watch-ultra-3/",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/watch_ultra_c6d26b96b.svg",
  },
  {
    label: "Nike",
    href: "https://www.apple.com/in/apple-watch-nike/",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/watch_nike_095f6983c.svg",
  },
  {
    label: "Compare",
    href: "https://www.apple.com/in/watch/compare/",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/compare_watch_6b6259c4a.svg",
  },
  {
    label: "Straps",
    badge: "New",
    href: "https://www.apple.com/in/shop/goto/watch/bands",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/watch_bands_0e3eb7a2d.svg",
  },
  {
    label: "Accessories",
    href: "https://www.apple.com/in/shop/goto/watch/accessories",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/accessories_watch_6ad7b5f53.svg",
  },
  {
    label: "Apple Fitness+",
    href: "https://www.apple.com/in/apple-fitness-plus/",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/fitness_plus_5e817af2a.svg",
  },
  {
    label: "Shop Watch",
    href: "https://www.apple.com/in/shop/goto/buy_watch",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/shop_watch_4b61b477b.svg",
  },
  {
    label: "watchOS 26",
    href: "https://www.apple.com/in/os/watchos/",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/chapter_nav/watchos_cfaae638b.svg",
  },
];

const lineupModels = [
  {
    id: "series-11",
    name: "Apple Watch Series 11",
    tagline: "The ultimate watch for a healthy life.",
    finish: "41 mm or 45 mm case. Aluminium or titanium.",
    price: "From \u20b946,900.00**",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/product_tile/large/s11_01ae61a6b_2x.png",
    learnHref: "https://www.apple.com/in/apple-watch-series-11/",
    buyHref:
      "https://www.apple.com/in/shop/goto/buy_watch/apple_watch_series_11",
    colors: [
      "#d8d8dd",
      "#5f6167",
      "#1d1d1f",
      "#e5cbc6",
      "#d3c8ba",
      "#c8b07c",
      "#70818b",
    ],
  },
  {
    id: "se-3",
    name: "Apple Watch SE 3",
    tagline: "Essential health features at a great value.",
    finish: "40 mm or 44 mm aluminium case.",
    price: "From \u20b925,900.00**",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/product_tile/large/se_32690d524_2x.png",
    learnHref: "https://www.apple.com/in/apple-watch-se-3/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_watch/apple_watch_se",
    colors: ["#d9d6d1", "#2d2d31"],
  },
  {
    id: "ultra-3",
    name: "Apple Watch Ultra 3",
    tagline: "The ultimate sports and adventure watch.",
    finish: "49 mm titanium case with precision dual-frequency GPS.",
    price: "From \u20b989,900.00**",
    image:
      "https://www.apple.com/assets-www/en_IN/watch/product_tile/large/u3_6b7e98fe2_2x.png",
    learnHref: "https://www.apple.com/in/apple-watch-ultra-3/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_watch/apple_watch_ultra_3",
    colors: ["#c9b393", "#3d515b"],
  },
];

const whyBuyCards = [
  {
    title: "Ways to Buy",
    description:
      "Choose a way to pay, including convenient monthly payment options.",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/incentive_card/large/financing_04ab3d017_2x.jpg",
  },
  {
    title: "Delivery and Pickup",
    description: "Enjoy free delivery or easy pickup at your Apple Store.",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/incentive_card/large/delivery_and_pickup_2a582422f_2x.jpg",
  },
  {
    title: "Personal Setup",
    description:
      "Set up your new Apple Watch with an online Specialist session.",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/incentive_card/large/personal_setup_df47efc29_2x.jpg",
  },
  {
    title: "Guided Video Shopping",
    description:
      "Shop live with a Specialist over video and get answers in real time.",
    image:
      "https://www.apple.com/assets-www/en_IN/watch/incentive_card/large/specialist_81772a16c_2x.jpg",
  },
  {
    title: "Apple Trade In",
    description:
      "Save on a new Apple Watch when you trade in an eligible device at an Apple Store.",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/incentive_card/large/trade_in_d7fa0dfa7_2x.jpg",
  },
  {
    title: "Apple Store App",
    description: "Get a more personal way to shop with the Apple Store app.",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/incentive_card/large/store_app_fba803b7c_2x.jpg",
  },
];

const featureCards = [
  {
    category: "Health",
    title: "Knows you.\nInsights and out.",
    tone: "dark",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/feature_card/large/health_a1aa3fe20_2x.jpg",
  },
  {
    category: "Fitness",
    title: "Unlimited motivation.",
    tone: "dark",
    image:
      "https://www.apple.com/assets-www/en_IN/watch2/feature_card/large/fitness_cab5dfca5_2x.jpg",
  },
  {
    category: "Safety",
    title: "Keep help close at hand.",
    tone: "light",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/feature_card/large/safety_b3e0fe93f_2x.jpg",
  },
  {
    category: "Apple Watch Ultra 3",
    title: "The ultimate sports\nand adventure watch.",
    tone: "dark",
    image:
      "https://www.apple.com/assets-www/en_IN/watch2/feature_card/large/adventure_43270ba52_2x.jpg",
  },
  {
    category: "Connectivity",
    title: "The right call for\nstaying in touch.",
    tone: "light",
    image:
      "https://www.apple.com/assets-www/en_IN/watch2/feature_card/large/connectivity_9f98b7daf_2x.jpg",
  },
  {
    category: "Personalisation",
    title: "Make it you-nique.",
    tone: "dark",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/feature_card/large/personalization_186f896b8_2x.jpg",
  },
  {
    category: "Apple Watch For Your Kids",
    title: "Independence for them.\nPeace of mind for you.",
    tone: "light",
    image:
      "https://www.apple.com/assets-www/en_IN/watch2/feature_card/large/family_setup_322cbddb5_2x.jpg",
  },
  {
    category: "Apple Watch + iPhone",
    title: "Dynamic duo.",
    tone: "light",
    image:
      "https://www.apple.com/assets-www/en_WW/watch/feature_card/large/watch_and_iphone_44eb2d765_2x.jpg",
  },
];

const companionStories = [
  {
    id: "watch-iphone",
    title: "Apple Watch and iPhone",
    teaser: "Start a workout on your wrist and bring it to life on iPhone.",
    description:
      "Combining Apple Watch and iPhone opens up a world of features. You can start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone.",
    image:
      "https://www.apple.com/assets-www/en_IN/watch/image_accordion/large/watch_and_iphone_963309f31_2x.jpg",
    href: "https://www.apple.com/in/iphone/",
  },
  {
    id: "watch-airpods",
    title: "Apple Watch and AirPods",
    teaser: "Control your listening without reaching for your phone.",
    description:
      "Apple Watch and AirPods are made for each other. Control your AirPods from your wrist and let your watch automatically switch your audio as you move between devices.",
    image:
      "https://www.apple.com/assets-www/en_IN/watch/image_accordion/large/watch_and_airpods_d359e9f1d_2x.jpg",
    href: "https://www.apple.com/in/airpods/",
  },
  {
    id: "watch-fitness-plus",
    title: "Apple Watch and Apple Fitness+",
    teaser: "See live metrics during every Fitness+ session.",
    description:
      "Apple Fitness+ is a fitness and wellness service built for Apple Watch. With thousands of workouts and meditations, it is easy to find something you love.",
    image:
      "https://www.apple.com/assets-www/en_IN/watch/image_accordion/large/watch_and_fitness_plus_f19ef6975_2x.jpg",
    href: "https://www.apple.com/in/apple-fitness-plus/",
  },
];

const routerColumns = [
  {
    title: "Explore Watch",
    links: [
      {
        label: "Apple Watch Series 11",
        href: "https://www.apple.com/in/apple-watch-series-11/",
      },
      {
        label: "Apple Watch SE 3",
        href: "https://www.apple.com/in/apple-watch-se-3/",
      },
      {
        label: "Apple Watch Ultra 3",
        href: "https://www.apple.com/in/apple-watch-ultra-3/",
      },
      {
        label: "Apple Watch Nike",
        href: "https://www.apple.com/in/apple-watch-nike/",
      },
      {
        label: "watchOS 26",
        href: "https://www.apple.com/in/os/watchos/",
      },
    ],
  },
  {
    title: "Shop Watch",
    links: [
      {
        label: "Shop Apple Watch",
        href: "https://www.apple.com/in/shop/goto/buy_watch",
      },
      {
        label: "Apple Watch Studio",
        href: "https://www.apple.com/in/shop/goto/buy_watch",
      },
      {
        label: "Apple Watch Straps",
        href: "https://www.apple.com/in/shop/goto/watch/bands",
      },
      {
        label: "Apple Watch Accessories",
        href: "https://www.apple.com/in/shop/goto/watch/accessories",
      },
      {
        label: "Ways to Buy",
        href: "https://www.apple.com/in/shop/ways-to-buy",
      },
    ],
  },
  {
    title: "More from Watch",
    links: [
      {
        label: "Compare",
        href: "https://www.apple.com/in/watch/compare/",
      },
      {
        label: "Why Apple Watch",
        href: "https://www.apple.com/in/watch/why-apple-watch/",
      },
      {
        label: "Apple Fitness+",
        href: "https://www.apple.com/in/apple-fitness-plus/",
      },
      {
        label: "Personal Setup",
        href: "https://www.apple.com/in/shop/goto/personal_setup",
      },
      {
        label: "Apple Watch For Your Kids",
        href: "https://www.apple.com/in/watch/for-your-kids/",
      },
    ],
  },
];

const footnotes = [
  "* Instant cashback and No Cost EMI offers vary by eligible card, tenure and order total.",
  "** Listed pricing is Maximum Retail Price inclusive of all taxes.",
  "Apple Watch trade-in is available only in store in India, and trade-in values vary based on the condition, year and configuration of the eligible device.",
];

function AppleLink({ href, className, children }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function ArrowIcon({ direction }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path
          d="M9 2L4 7l5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M5 2l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function RailControls({ canPrev, canNext, onPrev, onNext, label }) {
  return (
    <div className="watch-rail-controls" aria-label={label}>
      <button
        type="button"
        className="watch-rail-button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Scroll backward"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        className="watch-rail-button"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Scroll forward"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}

function useRailControls() {
  const railRef = useRef(null);
  const [controls, setControls] = useState({ canPrev: false, canNext: false });

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return undefined;
    }

    const update = () => {
      const maxScroll = rail.scrollWidth - rail.clientWidth - 4;
      setControls({
        canPrev: rail.scrollLeft > 4,
        canNext: rail.scrollLeft < maxScroll,
      });
    };

    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction) => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * Math.max(rail.clientWidth * 0.85, 320),
      behavior: "smooth",
    });
  };

  return [
    railRef,
    controls.canPrev,
    controls.canNext,
    () => scroll(-1),
    () => scroll(1),
  ];
}

export default function WatchPage() {
  const [
    lineupRailRef,
    lineupCanPrev,
    lineupCanNext,
    handleLineupPrev,
    handleLineupNext,
  ] = useRailControls();
  const [whyRailRef, whyCanPrev, whyCanNext, handleWhyPrev, handleWhyNext] =
    useRailControls();
  const [
    featureRailRef,
    featureCanPrev,
    featureCanNext,
    handleFeaturePrev,
    handleFeatureNext,
  ] = useRailControls();
  const [activeCompanion, setActiveCompanion] = useState(
    companionStories[0].id,
  );

  const activeStory =
    companionStories.find((story) => story.id === activeCompanion) ??
    companionStories[0];

  return (
    <main className="watch-page">
      <nav
        className="watch-chapternav"
        aria-label="Apple Watch family of products"
      >
        <div className="watch-chapternav-scroll">
          <div className="watch-chapternav-list">
            {chapterNavItems.map((item) => (
              <AppleLink
                key={item.label}
                href={item.href}
                className="watch-chapternav-item"
              >
                <span className="watch-chapternav-media">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                </span>
                <span className="watch-chapternav-label">{item.label}</span>
                {item.badge ? (
                  <span className="watch-chapternav-badge">{item.badge}</span>
                ) : null}
              </AppleLink>
            ))}
          </div>
        </div>
      </nav>

      <div className="watch-ribbon">
        <p>
          Get up to \u20b96000 instant cashback on Apple Watch with eligible
          cards. Plus up to 6 months of No Cost EMI.{" "}
          <AppleLink
            href="https://www.apple.com/in/shop/goto/buy_watch"
            className="watch-inline-link"
          >
            Shop Apple Watch &rsaquo;
          </AppleLink>
        </p>
      </div>

      <header className="watch-hero">
        <div className="watch-shell watch-hero-grid">
          <div className="watch-hero-copy">
            <h2>Apple Watch</h2>
            <p className="watch-hero-lede">
              Apple Watch is the ultimate device for a healthy life. Available
              in three models: Apple Watch Series 11, Apple Watch SE 3 and Apple
              Watch Ultra 3.
            </p>
            <div className="watch-hero-actions">
              <AppleLink
                href="https://www.apple.com/in/shop/goto/buy_watch"
                className="watch-button watch-button-primary"
              >
                Shop Apple Watch
              </AppleLink>
              <AppleLink
                href="https://www.apple.com/in/watch/compare/"
                className="watch-button watch-button-secondary"
              >
                Compare all models
              </AppleLink>
            </div>
          </div>

          <div className="watch-hero-stage" aria-hidden="true">
            <div className="watch-hero-stage-surface" />
            {lineupModels.map((model, index) => (
              <img
                key={model.id}
                src={model.image}
                alt=""
                className={`watch-hero-device watch-hero-device-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </header>

      <section className="watch-section">
        <div className="watch-shell">
          <div className="watch-section-head">
            <h2>Explore the line-up.</h2>
            <AppleLink
              href="https://www.apple.com/in/watch/compare/"
              className="watch-section-link"
            >
              Compare all models &rsaquo;
            </AppleLink>
          </div>

          <div className="watch-rail" ref={lineupRailRef}>
            {lineupModels.map((model) => (
              <article key={model.id} className="watch-model-card">
                <div className="watch-model-image-wrap">
                  <img src={model.image} alt={model.name} loading="lazy" />
                </div>
                <div className="watch-model-body">
                  <div className="watch-model-colors" aria-hidden="true">
                    {model.colors.map((color) => (
                      <span
                        key={`${model.id}-${color}`}
                        className="watch-model-color"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <h3>{model.name}</h3>
                  <p className="watch-model-tagline">{model.tagline}</p>
                  <p className="watch-model-finish">{model.finish}</p>
                  <p className="watch-model-price">{model.price}</p>
                  <div className="watch-card-actions">
                    <AppleLink
                      href={model.learnHref}
                      className="watch-button watch-button-primary watch-button-small"
                    >
                      Learn more
                    </AppleLink>
                    <AppleLink href={model.buyHref} className="watch-text-link">
                      Buy &rsaquo;
                    </AppleLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <RailControls
            canPrev={lineupCanPrev}
            canNext={lineupCanNext}
            onPrev={handleLineupPrev}
            onNext={handleLineupNext}
            label="Apple Watch lineup carousel controls"
          />
        </div>
      </section>

      <section className="watch-section">
        <div className="watch-shell">
          <div className="watch-section-head">
            <h2>
              Why Apple is the best place
              <br />
              to buy Apple Watch.
            </h2>
            <AppleLink
              href="https://www.apple.com/in/shop/goto/buy_watch"
              className="watch-section-link"
            >
              Shop Apple Watch &rsaquo;
            </AppleLink>
          </div>

          <div className="watch-rail" ref={whyRailRef}>
            {whyBuyCards.map((card) => (
              <article key={card.title} className="watch-benefit-card">
                <img src={card.image} alt={card.title} loading="lazy" />
                <div className="watch-benefit-body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>

          <RailControls
            canPrev={whyCanPrev}
            canNext={whyCanNext}
            onPrev={handleWhyPrev}
            onNext={handleWhyNext}
            label="Why Apple Watch carousel controls"
          />
        </div>
      </section>

      <section className="watch-section">
        <div className="watch-shell">
          <div className="watch-section-head watch-section-head-solo">
            <h2>Get to know Apple Watch.</h2>
          </div>

          <div className="watch-rail watch-rail-feature" ref={featureRailRef}>
            {featureCards.map((card) => (
              <article
                key={card.category}
                className={`watch-feature-card${card.tone === "light" ? " is-light" : ""}`}
              >
                <img src={card.image} alt={card.category} loading="lazy" />
                <div className="watch-feature-overlay">
                  <p>{card.category}</p>
                  <h3>{card.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <RailControls
            canPrev={featureCanPrev}
            canNext={featureCanNext}
            onPrev={handleFeaturePrev}
            onNext={handleFeatureNext}
            label="Get to know Apple Watch carousel controls"
          />
        </div>
      </section>

      <section className="watch-section">
        <div className="watch-shell">
          <div className="watch-section-head">
            <h2>Apple Watch essentials.</h2>
            <AppleLink
              href="https://www.apple.com/in/shop/goto/watch/accessories"
              className="watch-section-link"
            >
              All Apple Watch accessories &rsaquo;
            </AppleLink>
          </div>

          <article className="watch-essentials-banner">
            <div className="watch-essentials-copy">
              <p className="watch-eyebrow">Bands and accessories</p>
              <h3>Colour the moment.</h3>
              <p>
                Explore the latest straps in fresh shades, styles and materials.
              </p>
              <AppleLink
                href="https://www.apple.com/in/shop/goto/watch/bands"
                className="watch-text-link"
              >
                Shop Apple Watch straps &rsaquo;
              </AppleLink>
            </div>
            <div className="watch-essentials-media">
              <img
                src={
                  "https://www.apple.com/assets-www/en_WW/watch/01_banner_card_1up/large/essentials_319dfa557_2x.jpg"
                }
                alt="Apple Watch straps in fresh colours"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="watch-section">
        <div className="watch-shell">
          <div className="watch-section-head watch-section-head-solo">
            <h2>Made for each other.</h2>
          </div>

          <div className="watch-companion-layout">
            <div
              className="watch-companion-tabs"
              role="tablist"
              aria-label="Made for each other"
            >
              {companionStories.map((story) => (
                <button
                  key={story.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCompanion === story.id}
                  aria-controls={`watch-companion-panel-${story.id}`}
                  id={`watch-companion-tab-${story.id}`}
                  className={`watch-companion-tab${activeCompanion === story.id ? " is-active" : ""}`}
                  onClick={() => setActiveCompanion(story.id)}
                >
                  <span className="watch-companion-tab-title">
                    {story.title}
                  </span>
                  <span className="watch-companion-tab-copy">
                    {story.teaser}
                  </span>
                </button>
              ))}
            </div>

            <article
              className="watch-companion-card"
              role="tabpanel"
              id={`watch-companion-panel-${activeStory.id}`}
              aria-labelledby={`watch-companion-tab-${activeStory.id}`}
            >
              <div className="watch-companion-copy">
                <p className="watch-eyebrow">Made for each other</p>
                <h3>{activeStory.title}</h3>
                <p>{activeStory.description}</p>
                <AppleLink href={activeStory.href} className="watch-text-link">
                  Learn more &rsaquo;
                </AppleLink>
              </div>
              <div className="watch-companion-media">
                <img
                  src={activeStory.image}
                  alt={activeStory.title}
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="watch-section watch-router-section">
        <div className="watch-shell">
          <div className="watch-router-surface">
            <p className="watch-router-label">Apple Watch</p>
            <div className="watch-router-grid">
              {routerColumns.map((column) => (
                <div key={column.title} className="watch-router-column">
                  <h3>{column.title}</h3>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <AppleLink
                          href={link.href}
                          className="watch-router-link"
                        >
                          {link.label}
                        </AppleLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="watch-footnotes">
        <div className="watch-shell">
          {footnotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
