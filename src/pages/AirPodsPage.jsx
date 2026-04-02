import { useState } from "react";
import "./AirPodsPage.css";

const appleAsset = (path) => `https://www.apple.com${path}`;

/* ── Color swatches for AirPods Max 2 ── */
const maxColors = [
  {
    id: "purple",
    color: "#7E5BC1",
    label: "Purple",
    src: appleAsset(
      "/v/airpods/ae/images/overview/airpods_max_purple__d9y3g3n7cnyq_large.png",
    ),
  },
  {
    id: "stardust",
    color: "#E3DDCF",
    label: "Stardust",
    border: "rgba(0,0,0,0.2)",
    src: appleAsset(
      "/v/airpods/ae/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png",
    ),
  },
  {
    id: "orange",
    color: "#E8632A",
    label: "Orange",
    src: appleAsset(
      "/v/airpods/ae/images/overview/airpods_max_orange__gln3ifz5o9ei_large.png",
    ),
  },
  {
    id: "blue",
    color: "#3B79C0",
    label: "Blue",
    src: appleAsset(
      "/v/airpods/ae/images/overview/airpods_max_blue__fsfaleh1smuu_large.png",
    ),
  },
  {
    id: "midnight",
    color: "#1c1c1e",
    label: "Midnight",
    src: appleAsset(
      "/v/airpods/ae/images/overview/airpods_max_black__x3byrd2venmu_large.png",
    ),
  },
];

/* ── Feature row metadata (icon type per row, order matches compareModels[x].features) ── */
const featureRowData = [
  { icon: "anc" },
  { icon: "adaptive" },
  { icon: "spatial" },
  { icon: "lossless" },
  { icon: "heart" },
  { icon: "hearing" },
  { icon: "translation" },
  { icon: "battery" },
  { icon: "charging" },
  { icon: "siri" },
];

/* ── Compare table ── */
const compareModels = [
  {
    id: "airpods-4",
    name: "AirPods 4",
    price: "₹12,900.00*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=png-alpha",
    copy: "The next evolution of sound and comfort.",
    buyUrl:
      "https://www.apple.com/in/shop/goto/buy_airpods/airpods_4/without_active_noise_cancellation",
    learnUrl: "https://www.apple.com/in/airpods-4/",
    features: [
      { unavailable: "Active Noise Cancellation unavailable" },
      { unavailable: "Adaptive Audio and Transparency mode unavailable" },
      { text: "Personalised Spatial Audio with dynamic head tracking" },
      { unavailable: "Lossless audio unavailable" },
      { unavailable: "Heart rate sensing unavailable" },
      {
        unavailable:
          "Hearing Test, Hearing Aid feature, and Hearing Protection unavailable",
      },
      { unavailable: "Live translation unavailable" },
      {
        text: "5 hours",
        sub: "Up to 5 hours of listening time on a single charge",
      },
      { text: "Charging case (USB\u2011C)" },
      { text: "Voice Isolation, Hey Siri and Siri Interactions" },
    ],
  },
  {
    id: "airpods-4-anc",
    name: "AirPods 4",
    subname: "Active Noise Cancellation",
    price: "₹17,900.00*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=png-alpha",
    copy: "The next evolution of sound, comfort and noise control.",
    buyUrl:
      "https://www.apple.com/in/shop/goto/buy_airpods/airpods_4/with_active_noise_cancellation",
    learnUrl: "https://www.apple.com/in/airpods-4/",
    features: [
      { text: "Active Noise Cancellation" },
      { text: "Adaptive Audio and Transparency mode" },
      { text: "Personalised Spatial Audio with dynamic head tracking" },
      { unavailable: "Lossless audio unavailable" },
      { unavailable: "Heart rate sensing unavailable" },
      {
        unavailable:
          "Hearing Test, Hearing Aid feature, and Hearing Protection unavailable",
      },
      { text: "Live Translation" },
      {
        text: "5 hours",
        sub: "Up to 5 hours (up to 4 hours with ANC)",
      },
      { text: "Wireless Charging Case (USB\u2011C)" },
      { text: "Voice Isolation, Hey Siri and Siri Interactions" },
    ],
  },
  {
    id: "airpods-pro-3",
    name: "AirPods Pro 3",
    price: "₹25,900.00*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro3-select-202409?wid=400&hei=400&fmt=png-alpha",
    copy: "The world\u2019s best in\u2011ear Active Noise Cancellation, with heart rate sensing during workouts.",
    buyUrl: "https://www.apple.com/in/shop/goto/buy_airpods/airpods_pro_3",
    learnUrl: "https://www.apple.com/in/airpods-pro/",
    features: [
      {
        text: "Up to 4x more Active Noise Cancellation than original AirPods Pro and AirPods 4 with Active Noise Cancellation",
      },
      { text: "Adaptive Audio and Transparency mode" },
      { text: "Personalised Spatial Audio with dynamic head tracking" },
      { unavailable: "Lossless audio unavailable" },
      { text: "Heart rate sensing during workouts" },
      {
        text: "Loud Sound Reduction, Conversation Boost, Background Sounds",
      },
      { text: "Live Translation" },
      {
        text: "8 hours",
        sub: "Up to 8 hours of listening time on a single charge with Active Noise Cancellation",
      },
      { text: "MagSafe Charging Case (USB\u2011C)" },
      { text: "Voice Isolation, Hey Siri and Siri Interactions" },
    ],
  },
  {
    id: "airpods-max-2",
    name: "AirPods Max 2",
    badge: "New",
    price: "₹67,900.00*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max2-select-midnight-202409?wid=400&hei=400&fmt=png-alpha",
    copy: "The ultimate over\u2011ear personal listening experience.",
    buyUrl: "https://www.apple.com/in/shop/goto/buy_airpods/airpods_max_2",
    learnUrl: "https://www.apple.com/in/airpods-max/",
    features: [
      {
        text: "Up to 1.5x more Active Noise Cancellation than original AirPods Max",
      },
      { text: "Adaptive Audio and Transparency mode" },
      { text: "Personalised Spatial Audio with dynamic head tracking" },
      { text: "Lossless Audio and ultra\u2011low latency audio via USB\u2011C" },
      { unavailable: "Heart rate sensing unavailable" },
      { text: "Loud Sound Reduction" },
      { text: "Live Translation" },
      {
        text: "20 hours",
        sub: "Up to 20 hours of listening time on a single charge with Active Noise Cancellation",
      },
      { text: "Smart Case" },
      { text: "Voice Isolation, Hey Siri and Siri Interactions" },
    ],
  },
];

/* ── Feature "consider" cards ── */
const featureCards = [
  {
    id: "heart-rate",
    label: "Heart Rate Sensing",
    title: "Track your heart rate and calories burned during workouts.",
    expand:
      "With AirPods Pro 3, you can keep track of your heart rate and calories burned during workouts. Using LEDs that pulse invisible light 256 times per second — and sensor fusion from the accelerometers — AirPods Pro 3 give you incredibly accurate data from the treadmill to the trail.",
    image: appleAsset(
      "/in/airpods/images/overview/consider/card_heart_rate_sensing__exas9s71qo4m_large.jpg",
    ),
    imgAlt:
      "AirPods Pro 3 next to iPhone with heart rate monitor on screen",
    wide: false,
  },
  {
    id: "translation",
    label: "Live Translation",
    title: "Easily communicate across languages.",
    caption: "Available in selected languages and regions.",
    expand:
      "Live Translation lets you communicate across languages like never before. While having a conversation with someone, their speech is automatically translated into your preferred language with AirPods Max 2, AirPods Pro 3 or AirPods 4 with Active Noise Cancellation.",
    image: appleAsset(
      "/v/airpods/ae/images/overview/consider/card_live_translation__ep68h9wscbee_large.jpg",
    ),
    imgAlt: "Live Translation icon on iPhone",
    wide: false,
  },
  {
    id: "noise",
    label: "Active Noise Cancellation",
    title: "Control what you hear. And what you don\u2019t.",
    expand:
      "Active Noise Cancellation reduces unwanted sounds so you can immerse yourself in what you\u2019re listening to or simply stay focused. And Transparency lets you comfortably hear the world around you.",
    image: appleAsset(
      "/v/airpods/ae/images/overview/consider/card_noise_cancellation__bcl69t06noci_large.jpg",
    ),
    imgAlt: "AirPods Pro 3 with circular sound ripple",
    wide: false,
  },
  {
    id: "hearing",
    label: "Hearing Health",
    title: "Minimise your exposure to loud noise.",
    expand:
      "With AirPods Pro 3, Loud Sound Reduction minimises your exposure to loud environmental noise.",
    image: appleAsset(
      "/in/airpods/images/overview/consider/card_hearing_health__ss2uxyv3j5m6_large.jpg",
    ),
    imgAlt: "Blue sound wave and Hearing Test icon",
    wide: false,
  },
  {
    id: "spatial",
    label: "Personalised Spatial Audio",
    title: "Immersive sound. Fine\u2011tuned to you.",
    expand:
      "Personalised Spatial Audio brings you 3D sound suited to your specific ear shape for a theatre-like experience that surrounds you with sound.",
    image: appleAsset(
      "/v/airpods/ae/images/overview/consider/card_personalized_spatial_audio__d9ghs2utja82_large.jpg",
    ),
    imgAlt: "AirPods Pro 3 inserted in the ear of a dancer",
    wide: true,
  },
];

/* ── Buy-strip blocks ── */
const buyBlocks = [
  {
    id: "delivery",
    title: "Free delivery and pickup",
    copy: "Get free delivery or pickup at your Apple Store.",
    link: "https://www.apple.com/in/shop/shipping-pickup",
    linkText: "Learn more",
  },
  {
    id: "ways",
    title: "Ways to buy",
    copy: "Choose the way that\u2019s right for you.",
    link: "https://www.apple.com/in/shop/goto/ways_to_buy",
    linkText: "Learn more",
  },
  {
    id: "help",
    title: "Get help buying",
    copy: "Have a question? Call a Specialist or chat online.",
    phone: "000800 040 1966",
    link: "https://contactretail.apple.com/?pg=COM:/airpods/&ap=COM&c=in&l=en",
    linkText: "Contact us",
  },
];

/* ── Compare feature icon ── */
function CompareIcon({ type }) {
  const head = (
    <>
      <circle cx="20" cy="13" r="6" fill="#1d1d1f" />
      <path d="M7 37Q7 25 20 25T33 37" fill="#1d1d1f" />
    </>
  );
  const extras = {
    anc: (
      <path
        d="M5 19Q5 7 20 7T35 19"
        stroke="#1d1d1f"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.38"
      />
    ),
    adaptive: (
      <>
        <path d="M29 15Q33 19 29 24" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
        <path d="M33 12Q38 19 33 26" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" opacity="0.22" />
      </>
    ),
    spatial: (
      <>
        <circle cx="5" cy="19" r="2.5" fill="#1d1d1f" opacity="0.38" />
        <circle cx="35" cy="19" r="2.5" fill="#1d1d1f" opacity="0.38" />
        <circle cx="7" cy="30" r="2" fill="#1d1d1f" opacity="0.22" />
        <circle cx="33" cy="30" r="2" fill="#1d1d1f" opacity="0.22" />
      </>
    ),
    lossless: null,
    heart: (
      <path
        d="M20 35 L15 30Q11 26 14 22Q17 18 20 22Q23 18 26 22Q29 26 25 30Z"
        fill="#ff3b30"
      />
    ),
    hearing: (
      <>
        <path d="M28 17Q32 21 28 25" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" opacity="0.42" />
        <path d="M31 14Q37 21 31 28" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      </>
    ),
    translation: (
      <>
        <rect x="5" y="3" width="14" height="8" rx="1.5" stroke="#1d1d1f" strokeWidth="1.5" opacity="0.4" />
        <rect x="21" y="7" width="14" height="8" rx="1.5" stroke="#1d1d1f" strokeWidth="1.5" opacity="0.4" />
      </>
    ),
    battery: (
      <>
        <rect x="10" y="3" width="18" height="10" rx="2" stroke="#1d1d1f" strokeWidth="1.5" opacity="0.38" />
        <rect x="14" y="6" width="6" height="4" rx="0.5" fill="#1d1d1f" opacity="0.38" />
      </>
    ),
    charging: (
      <>
        <rect x="10" y="3" width="18" height="10" rx="2" stroke="#1d1d1f" strokeWidth="1.5" opacity="0.38" />
        <path d="M22 3.5 L18 9 L21 9 L18 16.5 L24 8 L21 8 Z" fill="#1d1d1f" opacity="0.5" />
      </>
    ),
    siri: (
      <path
        d="M13 10 L14 7 L15 13 L16.5 4 L18 14 L19.5 7 L21 10"
        stroke="#1d1d1f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
    ),
  };

  if (type === "lossless") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" fill="none">
        <path
          d="M4 20 L9 12 L14 28 L19 8 L24 32 L29 16 L34 22"
          stroke="#1d1d1f"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" fill="none">
      {head}
      {extras[type] ?? null}
    </svg>
  );
}

/* ── Chevron SVG ── */
function Chevron({ color = "currentColor" }) {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M1 1l6 5.5L1 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Expandable feature card ── */
function FeatureCard({ card }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ap2-consider-card${card.wide ? " ap2-consider-card-wide" : ""}`}>
      <img
        src={card.image}
        alt={card.imgAlt}
        loading="lazy"
        className="ap2-consider-img"
      />
      <div className="ap2-consider-body">
        <p className="ap2-consider-label">{card.label}</p>
        <h3 className="ap2-consider-title">{card.title}</h3>
        {card.caption && (
          <p className="ap2-consider-caption">{card.caption}</p>
        )}
        <button
          className="ap2-consider-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? `Close ${card.label}` : `Read more about ${card.label}`}
        </button>
        {open && (
          <div className="ap2-consider-expand">
            <h4 className="ap2-consider-expand-title">{card.label}</h4>
            <p className="ap2-consider-expand-text">{card.expand}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Page component ── */
export default function AirPodsPage() {
  const [maxColor, setMaxColor] = useState(maxColors[0]);

  return (
    <div className="ap2-page">
      {/* ── Local sub-nav ── */}
      <nav className="ap2-localnav" aria-label="AirPods">
        <div className="ap2-localnav-inner">
          <ul className="ap2-localnav-list">
            <li>
              <a
                href="https://www.apple.com/in/airpods-4/"
                className="ap2-localnav-link"
                target="_blank"
                rel="noreferrer"
              >
                AirPods
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/in/airpods-pro/"
                className="ap2-localnav-link"
                target="_blank"
                rel="noreferrer"
              >
                AirPods Pro
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/in/airpods-max/"
                className="ap2-localnav-link"
                target="_blank"
                rel="noreferrer"
              >
                AirPods Max
                <span className="ap2-localnav-badge">New</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/in/airpods/compare/"
                className="ap2-localnav-link"
                target="_blank"
                rel="noreferrer"
              >
                Compare
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/in/shop/goto/airpods/accessories"
                className="ap2-localnav-link"
                target="_blank"
                rel="noreferrer"
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/in/apple-music/"
                className="ap2-localnav-link"
                target="_blank"
                rel="noreferrer"
              >
                Apple Music
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ── Page intro ── */}
        <section className="ap2-intro">
          <div className="ap2-content">
            <h1 className="ap2-page-title">AirPods</h1>
            <p className="ap2-intro-copy">
              Get up to ₹4,000 instant cashback on AirPods with eligible cards.
              Plus up to 6 months of No Cost EMI.{" "}
              <sup>
                <a
                  href="https://www.apple.com/in/shop/goto/accessories/all_accessories/headphones_speakers/"
                  className="ap2-footnote-ref"
                  target="_blank"
                  rel="noreferrer"
                >
                  ‡
                </a>
              </sup>
            </p>
            <a
              href="https://www.apple.com/in/shop/goto/accessories/all_accessories/headphones_speakers/"
              className="ap2-cta-link"
              target="_blank"
              rel="noreferrer"
            >
              Shop AirPods <Chevron color="#0066cc" />
            </a>
          </div>
        </section>

        {/* ── Hero 1: AirPods Max 2 ── */}
        <section className="ap2-hero ap2-hero-max">
          <div className="ap2-hero-content">
            <p className="ap2-hero-eyebrow">New</p>
            <h2 className="ap2-hero-title">AirPods Max 2</h2>
            <p className="ap2-hero-tagline">
              New intelligent features.
              <br />
              More immersive listening.
            </p>
            <div className="ap2-hero-ctas">
              <a
                href="https://www.apple.com/in/airpods-max/"
                className="ap2-cta-link ap2-cta-link-light"
                target="_blank"
                rel="noreferrer"
              >
                Learn more <Chevron color="#2997ff" />
              </a>
              <a
                href="https://www.apple.com/in/shop/goto/buy_airpods/airpods_max_2"
                className="ap2-cta-link ap2-cta-link-light"
                target="_blank"
                rel="noreferrer"
              >
                Buy <Chevron color="#2997ff" />
              </a>
            </div>

            {/* Color swatches */}
            <div className="ap2-colorswatches" role="group" aria-label="AirPods Max colour">
              {maxColors.map((c) => (
                <button
                  key={c.id}
                  className={`ap2-swatch${maxColor.id === c.id ? " ap2-swatch-active" : ""}`}
                  style={{
                    background: c.color,
                    borderColor: c.border ?? "transparent",
                  }}
                  aria-label={c.label}
                  aria-pressed={maxColor.id === c.id}
                  onClick={() => setMaxColor(c)}
                />
              ))}
            </div>

            {/* Product image */}
            <div className="ap2-hero-imgwrap">
              <img
                key={maxColor.id}
                src={maxColor.src}
                alt={`AirPods Max 2 — ${maxColor.label}`}
                className="ap2-hero-img"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── Hero 2: AirPods Pro 3 ── */}
        <section className="ap2-hero ap2-hero-pro">
          <div className="ap2-hero-content">
            <h2 className="ap2-hero-title">AirPods Pro 3</h2>
            <p className="ap2-hero-tagline">
              The world&#8217;s best in&#8209;ear
              <br />
              Active Noise Cancellation.
            </p>
            <div className="ap2-hero-ctas">
              <a
                href="https://www.apple.com/in/airpods-pro/"
                className="ap2-cta-link ap2-cta-link-light"
                target="_blank"
                rel="noreferrer"
              >
                Learn more <Chevron color="#2997ff" />
              </a>
              <a
                href="https://www.apple.com/in/shop/goto/buy_airpods/airpods_pro_3"
                className="ap2-cta-link ap2-cta-link-light"
                target="_blank"
                rel="noreferrer"
              >
                Buy <Chevron color="#2997ff" />
              </a>
            </div>
            <div className="ap2-hero-imgwrap">
              <img
                src={appleAsset(
                  "/v/airpods/ae/images/overview/hero_endframe__calpooy4ucr6_large.jpg",
                )}
                alt="AirPods Pro 3 — left and right wireless earbuds"
                className="ap2-hero-img"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── Hero 3: AirPods 4 ── */}
        <section className="ap2-hero ap2-hero-four">
          <div className="ap2-hero-content">
            <h2 className="ap2-hero-title ap2-hero-title-dark">AirPods 4</h2>
            <p className="ap2-hero-tagline ap2-hero-tagline-dark">
              Iconic. Now supersonic.
            </p>
            <div className="ap2-hero-ctas">
              <a
                href="https://www.apple.com/in/airpods-4/"
                className="ap2-cta-link"
                target="_blank"
                rel="noreferrer"
              >
                Learn more <Chevron color="#0066cc" />
              </a>
              <a
                href="https://www.apple.com/in/shop/goto/buy_airpods/airpods_4"
                className="ap2-cta-link"
                target="_blank"
                rel="noreferrer"
              >
                Buy <Chevron color="#0066cc" />
              </a>
            </div>
            <div className="ap2-hero-imgwrap">
              <img
                src={appleAsset(
                  "/v/airpods/ae/images/overview/hero__gb4d3fd8jnu6_large.jpg",
                )}
                alt="A dancer wearing AirPods 4"
                className="ap2-hero-img"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── Compare Section ── */}
        <section className="ap2-compare-section">
          <div className="ap2-content">
            <h2 className="ap2-section-title">Compare AirPods models</h2>
            <div className="ap2-compare-scroll">
              {/*
                True aligned grid: all header cells + all feature cells are
                direct grid children so every row spans all 4 columns at
                exactly the same height — no JS height-sync needed.
              */}
              <div className="ap2-compare-table">

                {/* ── Row 0: product headers ── */}
                {compareModels.map((model) => (
                  <div key={`h-${model.id}`} className="ap2-compare-header-cell">
                    <a
                      href={model.learnUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ap2-compare-imglink"
                    >
                      <img
                        src={model.image}
                        alt={model.name}
                        className="ap2-compare-img"
                      />
                    </a>
                    {model.badge && (
                      <p className="ap2-compare-new">{model.badge}</p>
                    )}
                    <h3 className="ap2-compare-name">{model.name}</h3>
                    {model.subname && (
                      <p className="ap2-compare-subname">{model.subname}</p>
                    )}
                    <p className="ap2-compare-copy">{model.copy}</p>
                    <p className="ap2-compare-price">{model.price}</p>
                    <div className="ap2-compare-btns">
                      <a
                        href={model.buyUrl}
                        className="ap2-btn-buy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buy
                      </a>
                      <a
                        href={model.learnUrl}
                        className="ap2-cta-link ap2-compare-learnlink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn more <Chevron color="#0066cc" />
                      </a>
                    </div>
                  </div>
                ))}

                {/* ── Header / features separator ── */}
                <div className="ap2-compare-sep" />

                {/* ── Rows 1–N: feature rows ── */}
                {compareModels[0].features.flatMap((_, rowIdx) => {
                  const isLast =
                    rowIdx === compareModels[0].features.length - 1;
                  return compareModels.map((model) => {
                    const f = model.features[rowIdx];
                    return (
                      <div
                        key={`${model.id}-${rowIdx}`}
                        className={`ap2-compare-feat-cell${isLast ? " ap2-compare-feat-cell-last" : ""}`}
                      >
                        {f.unavailable ? (
                          <span className="ap2-compare-dash">&mdash;</span>
                        ) : (
                          <>
                            <CompareIcon type={featureRowData[rowIdx].icon} />
                            <span className="ap2-compare-row-text">
                              {f.text}
                            </span>
                            {f.sub && (
                              <span className="ap2-compare-row-sub">
                                {f.sub}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    );
                  });
                })}
              </div>
            </div>

            <div className="ap2-compare-footer">
              <a
                href="https://www.apple.com/in/airpods/compare/"
                className="ap2-cta-link"
                target="_blank"
                rel="noreferrer"
              >
                Compare all AirPods models <Chevron color="#0066cc" />
              </a>
            </div>
          </div>
        </section>

        {/* ── "Get to know AirPods" feature gallery ── */}
        <section className="ap2-consider-section">
          <div className="ap2-content">
            <h2 className="ap2-section-title">Get to know AirPods.</h2>
            <div className="ap2-consider-grid">
              {featureCards
                .filter((c) => !c.wide)
                .map((card) => (
                  <FeatureCard key={card.id} card={card} />
                ))}
            </div>
            <div className="ap2-consider-wide-row">
              {featureCards
                .filter((c) => c.wide)
                .map((card) => (
                  <FeatureCard key={card.id} card={card} />
                ))}
            </div>
          </div>
        </section>

        {/* ── Apple Music promo ── */}
        <section className="ap2-music-section">
          <div className="ap2-content ap2-music-inner">
            <div className="ap2-music-text">
              <p className="ap2-music-eyebrow">Apple Music</p>
              <h2 className="ap2-music-title">
                Get 3 months of Apple Music free
                <br />
                with your AirPods.{" "}
                <sup>
                  <span className="ap2-music-footnote">**</span>
                </sup>
              </h2>
              <a
                href="https://www.apple.com/in/apple-music/"
                className="ap2-cta-link ap2-cta-link-white"
                target="_blank"
                rel="noreferrer"
              >
                Learn more <Chevron color="#fff" />
              </a>
            </div>
            <div className="ap2-music-imagery">
              <img
                src={appleAsset(
                  "/v/airpods/ae/images/overview/music/music_album_hero__gme6dccldf6u_large.jpg",
                )}
                alt="New Music Mix playlist"
                className="ap2-music-hero"
                loading="lazy"
              />
              <img
                src={appleAsset(
                  "/v/airpods/ae/images/overview/music/music_album_stack__bi4gk5n0vwb6_large.png",
                )}
                alt=""
                aria-hidden="true"
                className="ap2-music-stack"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── Buy strip ── */}
        <section className="ap2-buystrip-section">
          <div className="ap2-content">
            <div className="ap2-buystrip-grid">
              {buyBlocks.map((b) => (
                <div key={b.id} className="ap2-buystrip-block">
                  <h3 className="ap2-buystrip-title">{b.title}</h3>
                  <p className="ap2-buystrip-copy">{b.copy}</p>
                  {b.phone && (
                    <p className="ap2-buystrip-phone">Call {b.phone}.</p>
                  )}
                  <a
                    href={b.link}
                    className="ap2-cta-link ap2-cta-link-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {b.linkText}
                  </a>
                </div>
              ))}
            </div>
            <div className="ap2-buystrip-engrave">
              <h3 className="ap2-buystrip-title">Make them yours</h3>
              <p className="ap2-buystrip-copy">
                Engrave your AirPods with your initials or favourite emoji —
                free. Only at Apple.
              </p>
              <a
                href="https://www.apple.com/in/shop/goto/engraving_and_gift_wrap"
                className="ap2-cta-link ap2-cta-link-sm"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* ── Footnotes ── */}
        <section className="ap2-footnotes-section">
          <div className="ap2-content">
            <ul className="ap2-footnotes-list">
              <li>
                * Listed pricing is Maximum Retail Price (inclusive of all
                taxes).
              </li>
              <li>
                ** New subscribers only. ₹119/month after trial. Offer
                available for new Apple Music subscribers with a new eligible
                device for a limited time only. Terms apply.
              </li>
              <li>‡ Includes instant cashback and No Cost EMI.</li>
              <li>
                No Cost EMI is available with the purchase of an eligible
                product through the Apple Store app or on apple.com/in. Terms
                apply.
              </li>
              <li>
                Instant cashback is available with the purchase of an eligible
                product with qualifying American Express, Axis Bank and ICICI
                Bank cards only. Minimum transaction value of ₹10,001 applies.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
