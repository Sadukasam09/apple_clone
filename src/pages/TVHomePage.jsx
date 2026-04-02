import { useEffect, useRef, useState } from "react";
import "./TVHomePage.css";

const chapterNavItems = [
  {
    label: "Apple TV 4K",
    href: "https://www.apple.com/in/apple-tv-4k/",
    iconType: "tv4k",
  },
  {
    label: "Apple TV app",
    href: "https://www.apple.com/in/apple-tv-app/",
    iconType: "tvapp",
  },
  {
    label: "Apple TV",
    href: "https://www.apple.com/in/apple-tv-plus/",
    iconType: "tv",
  },
  {
    label: "HomePod",
    href: "https://www.apple.com/in/homepod-2nd-generation/",
    iconType: "homepod",
  },
  {
    label: "HomePod mini",
    href: "https://www.apple.com/in/homepod-mini/",
    iconType: "homepod-mini",
  },
  {
    label: "Home app",
    href: "https://www.apple.com/in/home-app/",
    iconType: "homeapp",
  },
  {
    label: "Accessories",
    href: "https://www.apple.com/in/shop/goto/smart_home/accessories",
    iconType: "accessories",
  },
];

const showcaseTiles = [
  {
    id: "homepod",
    name: "HomePod",
    headline: "Profound sound.",
    price: "₹32900.00*",
    theme: "dark",
    image:
      "https://www.apple.com/v/tv-home/q/images/overview/homepod__eam53jjm772a_large.jpg",
    imageAlt: "One White, and one Midnight HomePod pictured side-by-side",
    primaryLabel: "Buy",
    primaryHref: "https://www.apple.com/in/shop/goto/buy_homepod/homepod",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/homepod-2nd-generation/",
  },
  {
    id: "homepod-mini",
    name: "HomePod mini",
    headline: "Surprising sound for its size.",
    price: "₹10900.00*",
    theme: "light",
    image:
      "https://www.apple.com/v/tv-home/q/images/overview/room_filling_sound__zagu3551kwyi_large.jpg",
    imageAlt:
      "From left to right: one White, one Blue, one Orange, one Yellow, and one Midnight HomePod mini",
    primaryLabel: "Buy",
    primaryHref: "https://www.apple.com/in/shop/goto/buy_homepod/homepod_mini",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/homepod-mini/",
  },
  {
    id: "apple-tv-4k",
    name: "Apple TV 4K",
    headline: "The Apple experience. Cinematic in every sense.",
    theme: "dark",
    logo: "https://www.apple.com/v/tv-home/q/images/overview/apple_tv_4k_logo__vyjj7uki3tui_large.png",
    image:
      "https://www.apple.com/v/tv-home/q/images/overview/apple_tv_4k__b30wcqp0pdle_large.jpg",
    imageAlt: "Image shows Apple TV 4K and Siri Remote",
    primaryLabel: "Buy",
    primaryHref: "https://www.apple.com/in/shop/goto/buy_tv/apple_tv_4k",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-tv-4k/",
  },
  {
    id: "home-app",
    name: "Home app",
    headline: "The foundation for a smarter home.",
    theme: "light",
    image:
      "https://www.apple.com/in/tv-home/images/overview/homeapp__cpc1k972xys2_large.jpg",
    imageAlt: "An iPhone showing the Home app My Home interface",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/home-app/",
  },
];

const smartHomeCards = [
  {
    id: "control",
    title:
      "Easily control your home from anywhere with your favourite devices.",
    linkLabel: "Learn more about the Home app",
    href: "https://www.apple.com/in/home-app/",
    variant: "image",
    image:
      "https://www.apple.com/in/tv-home/images/overview/smart_control__dsa6v8m1pp0m_large.jpg",
    imageAlt:
      "A Midnight HomePod with iPhone showing My Home UI on the Home app",
  },
  {
    id: "connect",
    title: "Seamlessly connected entertainment in every room.",
    linkLabel: "Learn more about HomePod",
    href: "https://www.apple.com/in/homepod-mini/",
    variant: "image",
    image:
      "https://www.apple.com/v/tv-home/q/images/overview/smart_connect__d8o6agoqfh0m_large.jpg",
    imageAlt: "Floor plan showing a HomePod or HomePod mini in multiple rooms",
  },
  {
    id: "siri",
    title: "Run it all with your voice.",
    linkLabel: "Learn more about Siri",
    href: "https://www.apple.com/in/siri/",
    variant: "siri",
    quote: ["Hey Siri, turn", "off the lights", "downstairs"],
  },
  {
    id: "privacy",
    title: "All with the security and privacy of Apple.",
    linkLabel: "Learn more about Privacy",
    href: "https://www.apple.com/in/privacy/",
    variant: "privacy",
    image:
      "https://www.apple.com/in/tv-home/images/overview/security_and_privacy__bzlguj2x29jm_large.jpg",
    imageAlt: "Apple privacy icon",
  },
];

const services = [
  {
    name: "Apple TV+",
    mark: "tvplus",
    copy: "Stream award-winning Apple Originals on every screen.",
    primaryLabel: "Try it free",
    footnote: "1",
    primaryHref:
      "https://tv.apple.com/in?itscg=10000&itsct=pod-services-tv-apl-tvhm-21_1019",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-tv-plus/",
  },
  {
    name: "Apple Music",
    mark: "music",
    copy: "All music. Highest audio quality. Zero ads.",
    primaryLabel: "Try it free",
    footnote: "2",
    primaryHref:
      "https://music.apple.com/in?itscg=10000&itsct=pod-services-music-apl-tvhm-21_1019",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-music/",
  },
  {
    name: "Apple Arcade",
    mark: "arcade",
    copy: "Best collection of mobile games for every player.",
    primaryLabel: "Get started",
    primaryHref:
      "https://apps.apple.com/in/arcade?itscg=10000&itsct=pod-services-arcade-apl-tvhm-21_1019",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-arcade/",
  },
  {
    name: "Apple Fitness+",
    mark: "fitness",
    copy: "From HIIT to Meditation, there's something for everyone.",
    primaryLabel: "Try it free",
    footnote: "3",
    primaryHref:
      "https://fitness.apple.com/in/subscribe?itscg=10000&itsct=pod-services-fitness-apl-tvhm-21_1019",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-fitness-plus/",
  },
];

const buyStripCards = [
  {
    iconType: "delivery",
    title: "Free delivery and pickup",
    copy: "Get free delivery or pickup at your Apple Store.",
    href: "https://www.apple.com/in/shop/shipping-pickup",
    linkLabel: "Learn more",
  },
  {
    iconType: "buy",
    title: "Ways to buy",
    copy: "Choose the way that's right for you.",
    href: "https://www.apple.com/in/shop/goto/ways_to_buy",
    linkLabel: "Learn more",
  },
  {
    iconType: "help",
    title: "Get help buying",
    copy: "Have a question? Call a Specialist or chat online.",
    detail: "Call 000800 040 1966.",
    href: "https://contactretail.apple.com/?pg=COM:tv-home&ap=COM&c=in&l=en",
    linkLabel: "Contact us",
  },
];

const footnoteIntro =
  "Listed pricing is Maximum Retail Price (inclusive of all taxes).";

const footnotes = [
  "New subscribers only. ₹99/month after free trial. Apple TV+ subscription does not include third-party branded subscription services or content available for rental or purchase in the Apple TV app. Plan automatically renews until cancelled. Terms apply.",
  "New subscribers only. Plan renews at your region's price per month after free trial until cancelled. Terms apply.",
  "Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. ₹149/month after trial. Plan automatically renews until cancelled. Terms apply.",
];

function ChapterNavIcon({ type }) {
  switch (type) {
    case "tv4k":
      return (
        <svg viewBox="0 0 48 48" className="tvh-chapter-svg" aria-hidden="true">
          <rect x="8" y="17" width="24" height="12" rx="6" />
          <rect x="35" y="13" width="6" height="22" rx="3" />
          <circle cx="17" cy="23" r="1.5" className="tvh-chapter-svg-accent" />
        </svg>
      );
    case "tvapp":
      return (
        <svg viewBox="0 0 48 48" className="tvh-chapter-svg" aria-hidden="true">
          <rect x="10" y="10" width="28" height="28" rx="8" />
          <polygon
            points="21,19 21,29 30,24"
            className="tvh-chapter-svg-accent"
          />
        </svg>
      );
    case "tv":
      return (
        <span className="tvh-chapter-wordmark" aria-hidden="true">
          tv
        </span>
      );
    case "homepod":
      return (
        <svg viewBox="0 0 48 48" className="tvh-chapter-svg" aria-hidden="true">
          <rect x="15" y="8" width="18" height="32" rx="9" />
        </svg>
      );
    case "homepod-mini":
      return (
        <svg viewBox="0 0 48 48" className="tvh-chapter-svg" aria-hidden="true">
          <rect x="17" y="13" width="14" height="22" rx="7" />
        </svg>
      );
    case "homeapp":
      return (
        <svg viewBox="0 0 48 48" className="tvh-chapter-svg" aria-hidden="true">
          <path
            d="M24 9 34 17v17H14V17l10-8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path
            d="M19 35V24h10v11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "accessories":
      return (
        <svg viewBox="0 0 48 48" className="tvh-chapter-svg" aria-hidden="true">
          <path d="M24 11c4.8 0 8.5 3.8 8.5 8.6 0 3.3-1.7 5.9-3.9 8.3-1.5 1.7-3 4-4.6 8.1-1.7-4.1-3.2-6.4-4.7-8.1-2.2-2.4-3.8-5-3.8-8.3 0-4.8 3.7-8.6 8.5-8.6Z" />
        </svg>
      );
    default:
      return null;
  }
}

function ServiceMark({ type, name }) {
  if (type === "tvplus") {
    return (
      <div className="tvh-service-mark tvh-service-mark-tv">Apple TV+</div>
    );
  }

  if (type === "music") {
    return <div className="tvh-service-mark">Apple Music</div>;
  }

  if (type === "arcade") {
    return <div className="tvh-service-mark">Apple Arcade</div>;
  }

  if (type === "fitness") {
    return <div className="tvh-service-mark">Apple Fitness+</div>;
  }

  return <div className="tvh-service-mark">{name}</div>;
}

function BuyStripIcon({ type }) {
  switch (type) {
    case "delivery":
      return (
        <svg
          viewBox="0 0 48 48"
          className="tvh-buystrip-svg"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="17"
            width="19"
            height="12"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M27 21h7l6 6v2h-13Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle
            cx="18"
            cy="33"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="34"
            cy="33"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "buy":
      return (
        <svg
          viewBox="0 0 48 48"
          className="tvh-buystrip-svg"
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="24"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M21 17h6.2M24 17v14M20.5 22.2c0-1.3 1.3-2.2 3.2-2.2 2 0 3.3.9 3.3 2.3 0 1.2-.9 1.8-2.7 2.3l-1 .2c-2 .4-2.9 1.1-2.9 2.4 0 1.6 1.4 2.7 3.7 2.7 2.1 0 3.5-.9 3.8-2.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "help":
      return (
        <svg
          viewBox="0 0 48 48"
          className="tvh-buystrip-svg"
          aria-hidden="true"
        >
          <path
            d="M14 26c-3.3 0-6-2.5-6-5.7 0-3.2 2.7-5.8 6-5.8h12c3.3 0 6 2.6 6 5.8 0 3.2-2.7 5.7-6 5.7h-5.3l-5.4 4.4V26H14Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M28 29h3.2l4.8 4V29h.8c2.9 0 5.2-2.2 5.2-5s-2.3-5-5.2-5H31"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function CarouselArrowLeft() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="m12.25 4.5-5.5 5.5 5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarouselArrowRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="m7.75 4.5 5.5 5.5-5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TVHomePage() {
  const reasonsRailRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const rail = reasonsRailRef.current;

    if (!rail) {
      return undefined;
    }

    const updateScrollState = () => {
      const maxScrollLeft = Math.max(rail.scrollWidth - rail.clientWidth, 0);
      setCanScrollPrev(rail.scrollLeft > 4);
      setCanScrollNext(rail.scrollLeft < maxScrollLeft - 4);
    };

    updateScrollState();
    rail.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      rail.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollReasons = (direction) => {
    const rail = reasonsRailRef.current;

    if (!rail) {
      return;
    }

    const firstCard = rail.querySelector(".tvh-reason-card");
    const step = firstCard
      ? firstCard.clientWidth + 16
      : rail.clientWidth * 0.85;

    rail.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  return (
    <div className="tvh-page">
      <section className="tvh-chapter-nav">
        <div className="tvh-content-width">
          <div className="tvh-chapter-scroll" aria-label="TV and Home products">
            {chapterNavItems.map((item) => (
              <a
                key={item.label}
                className="tvh-chapter-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="tvh-chapter-icon-wrap">
                  <ChapterNavIcon type={item.iconType} />
                </span>
                <span className="tvh-chapter-label">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="tvh-showcase-section">
        <div className="tvh-content-width tvh-showcase-grid">
          {showcaseTiles.map((tile) => (
            <article
              key={tile.id}
              className={`tvh-showcase-card tvh-showcase-card-${tile.theme}`}
            >
              <div className="tvh-showcase-copy">
                {tile.logo ? (
                  <img
                    className="tvh-showcase-logo"
                    src={tile.logo}
                    alt={tile.name}
                  />
                ) : (
                  <p className="tvh-showcase-name">{tile.name}</p>
                )}
                <h2 className="tvh-showcase-headline">{tile.headline}</h2>
                {tile.price ? (
                  <p className="tvh-showcase-price">{tile.price}</p>
                ) : null}
                <div className="tvh-showcase-actions">
                  {tile.primaryLabel ? (
                    <a
                      className="tvh-pill"
                      href={tile.primaryHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {tile.primaryLabel}
                    </a>
                  ) : null}
                  {tile.secondaryLabel ? (
                    <a
                      className="tvh-inline-link"
                      href={tile.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {tile.secondaryLabel} &rsaquo;
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="tvh-showcase-media">
                <img src={tile.image} alt={tile.imageAlt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tvh-reasons-section">
        <div className="tvh-content-width">
          <h2 className="tvh-section-title">
            Every reason to turn your house into a smart home.
          </h2>

          <div ref={reasonsRailRef} className="tvh-reasons-rail">
            {smartHomeCards.map((card) => (
              <article
                key={card.id}
                className={`tvh-reason-card tvh-reason-card-${card.variant}`}
              >
                <div className="tvh-reason-copy">
                  <h3>{card.title}</h3>
                  <a href={card.href} target="_blank" rel="noreferrer">
                    {card.linkLabel} &rsaquo;
                  </a>
                </div>

                {card.variant === "siri" ? (
                  <div className="tvh-siri-callout" aria-hidden="true">
                    {card.quote.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                ) : (
                  <div className="tvh-reason-media">
                    <img src={card.image} alt={card.imageAlt} />
                  </div>
                )}
              </article>
            ))}
          </div>

          <div
            className="tvh-carousel-controls"
            aria-label="Smart home gallery controls"
          >
            <button
              type="button"
              className="tvh-carousel-button"
              onClick={() => scrollReasons(-1)}
              disabled={!canScrollPrev}
              aria-label="Scroll smart home cards left"
            >
              <CarouselArrowLeft />
            </button>
            <button
              type="button"
              className="tvh-carousel-button"
              onClick={() => scrollReasons(1)}
              disabled={!canScrollNext}
              aria-label="Scroll smart home cards right"
            >
              <CarouselArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="tvh-entertainment-section">
        <div className="tvh-content-width">
          <h2 className="tvh-stage-title">
            Watch, sing, play and work out.
            <br />
            On the big screen.
          </h2>

          <article
            className="tvh-stage-card"
            aria-label="Apple services on Apple TV"
          >
            <img
              src="https://www.apple.com/in/tv-home/images/overview/tv-home_startframe__bo8dl916u8dy_medium_2x.jpg"
              alt="A television showing Apple TV services"
            />
          </article>

          <div className="tvh-services-row">
            {services.map((service) => (
              <article key={service.name} className="tvh-service-item">
                <ServiceMark type={service.mark} name={service.name} />
                <p>{service.copy}</p>
                <div className="tvh-service-actions">
                  <a
                    href={service.primaryHref}
                    className="tvh-pill"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {service.primaryLabel}
                    {service.footnote ? <sup>{service.footnote}</sup> : null}
                  </a>
                  <a
                    href={service.secondaryHref}
                    className="tvh-inline-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {service.secondaryLabel} &rsaquo;
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="tvh-buystrip">
            {buyStripCards.map((card) => (
              <article key={card.title} className="tvh-buystrip-card">
                <BuyStripIcon type={card.iconType} />
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                {card.detail ? (
                  <p className="tvh-buystrip-detail">{card.detail}</p>
                ) : null}
                <a href={card.href} target="_blank" rel="noreferrer">
                  {card.linkLabel} &rsaquo;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tvh-footnotes">
        <div className="tvh-content-width">
          <p className="tvh-footnotes-intro">* {footnoteIntro}</p>
          <ol className="tvh-footnotes-list">
            {footnotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ol>
          <p className="tvh-footnotes-credit">
            VIZHI VEEKURA (from &quot;Think Indie&quot;) Written By: Adesh
            Krishna, Sai Abhyankkar.
          </p>
        </div>
      </section>
    </div>
  );
}
