import "../pages/TVHomePage.css";

const products = [
  {
    id: "homepod",
    name: "HomePod",
    tagline: "Profound sound.",
    desc: "Immersive audio. Intelligent home controls. Powered by Apple.",
    price: "From \u20b932,900.00*",
    cta1: "Learn more",
    cta2: "Buy",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-2nd-gen-select-202302?wid=800&hei=800&fmt=png-alpha&.v=1675711544996",
    dark: false,
    bg: "#f5f5f7",
  },
  {
    id: "homepod-mini",
    name: "HomePod mini",
    tagline: "Surprising sound for its size.",
    desc: "Room-filling audio. Smart home controls. Five vibrant colours.",
    price: "From \u20b910,900.00*",
    cta1: "Learn more",
    cta2: "Buy",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-mini-select-202104?wid=800&hei=800&fmt=png-alpha&.v=1617058831000",
    dark: false,
    bg: "#fff",
  },
  {
    id: "apple-tv-4k",
    name: "Apple TV 4K",
    tagline: "The Apple experience. Cinematic in every sense.",
    desc: "Stunning 4K Dolby Vision. Dolby Atmos sound. Powered by A15 Bionic.",
    price: "From \u20b915,900.00*",
    cta1: "Learn more",
    cta2: "Buy",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=800&hei=800&fmt=png-alpha&.v=1664388031361",
    dark: true,
    bg: "#1d1d1f",
  },
  {
    id: "home-app",
    name: "Home app",
    tagline: "The foundation for a smarter home.",
    desc: "Control all your smart home accessories and automations from one place.",
    price: null,
    cta1: "Learn more",
    cta2: null,
    image:
      "https://www.apple.com/v/home-app/f/images/overview/hero/home_app_hero__large.png",
    dark: false,
    bg: "#f5f5f7",
  },
];

const smartHomeFeatures = [
  {
    title:
      "Easily control your home from anywhere with your favourite devices.",
    desc: "Use the Home app on iPhone, iPad, Mac or Apple Watch to control your lights, locks, cameras and more from anywhere.",
    link: "Learn more about the Home app",
    img: "https://www.apple.com/v/tv-home/m/images/overview/home_control__large.jpg",
  },
  {
    title: "Seamlessly connected entertainment in every room.",
    desc: "HomePod and HomePod mini work as a pair and can be placed in different rooms to create a whole-home audio experience.",
    link: "Learn more about HomePod",
    img: "https://www.apple.com/v/tv-home/m/images/overview/home_entertainment__large.jpg",
  },
  {
    title: "Run it all with your voice.",
    desc: "Hey Siri, set my bedtime scene. Hey Siri, make it warmer. Hey Siri, turn off the lights downstairs.",
    link: "Learn more about Siri",
    img: "https://www.apple.com/v/tv-home/m/images/overview/siri__large.jpg",
  },
  {
    title: "All with the security and privacy of Apple.",
    desc: "Home accessories that work with Apple support end-to-end encryption, so only you can control your home.",
    link: "Learn more about privacy",
    img: "https://www.apple.com/v/tv-home/m/images/overview/privacy__large.jpg",
  },
];

const services = [
  {
    name: "Apple TV+",
    tagline: "Stream award-winning Apple Originals on every screen.",
    cta: "Try Apple TV+ free",
    img: "https://tv.apple.com/assets/atv-shared-content/static/img/icons/favicon/apple-touch-icon-120x120.png",
    bg: "#000",
    dark: true,
  },
  {
    name: "Apple Music",
    tagline: "All music. Highest audio quality. Zero ads.",
    cta: "Try Apple Music free",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/120px-Apple_Music_icon.svg.png",
    bg: "#fc3c44",
    dark: true,
  },
  {
    name: "Apple Arcade",
    tagline: "Best collection of mobile games for every player.",
    cta: "Try Apple Arcade free",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_Arcade_logo.svg/120px-Apple_Arcade_logo.svg.png",
    bg: "#1c1c1e",
    dark: true,
  },
  {
    name: "Apple Fitness+",
    tagline: "From HIIT to Meditation, there\u2019s something for everyone.",
    cta: "Try Apple Fitness+ free",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_Fitness%2B_logo.svg/120px-Apple_Fitness%2B_logo.svg.png",
    bg: "#000",
    dark: true,
  },
];

export default function TVHomePage() {
  return (
    <div className="tvh-page">
      {/* Hero */}
      <section className="tvh-hero">
        <div className="tvh-content-width">
          <h1 className="tvh-hero-title">TV &amp; Home</h1>
          <p className="tvh-hero-sub">
            Watch, listen, play and control. Right at home.
          </p>
        </div>
      </section>

      {/* Product tiles */}
      <section className="tvh-products">
        <div className="tvh-content-width">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`tvh-product-tile${p.dark ? " tvh-dark" : ""}`}
              style={{
                background: p.bg,
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div className="tvh-tile-body">
                <h2
                  className="tvh-tile-name"
                  style={{ color: p.dark ? "#fff" : "#1d1d1f" }}
                >
                  {p.name}
                </h2>
                <p
                  className="tvh-tile-tagline"
                  style={{ color: p.dark ? "#f5f5f7" : "#1d1d1f" }}
                >
                  {p.tagline}
                </p>
                <p
                  className="tvh-tile-desc"
                  style={{
                    color: p.dark ? "rgba(255,255,255,0.7)" : "#6e6e73",
                  }}
                >
                  {p.desc}
                </p>
                {p.price && (
                  <p
                    className="tvh-tile-price"
                    style={{ color: p.dark ? "#fff" : "#1d1d1f" }}
                  >
                    {p.price}
                  </p>
                )}
                <div className="tvh-tile-actions">
                  <a
                    href="#"
                    className={`tvh-btn-primary${p.dark ? " tvh-btn-white" : ""}`}
                  >
                    {p.cta1}
                  </a>
                  {p.cta2 && (
                    <a
                      href="#"
                      className="tvh-btn-link"
                      style={{ color: p.dark ? "#2997ff" : "#06c" }}
                    >
                      {p.cta2} &rsaquo;
                    </a>
                  )}
                </div>
              </div>
              <div className="tvh-tile-img">
                <img
                  src={p.image}
                  alt={p.name}
                  onError={(e) => {
                    e.target.style.opacity = "0";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Smart home features */}
      <section className="tvh-smart-section">
        <div className="tvh-content-width">
          <h2 className="tvh-h2">
            Every reason to turn your
            <br />
            house into a smart home.
          </h2>
          <div className="tvh-features-grid">
            {smartHomeFeatures.map((f) => (
              <div key={f.title} className="tvh-feature-card">
                <div className="tvh-feature-img">
                  <img
                    src={f.img}
                    alt={f.title}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="tvh-feature-body">
                  <h3 className="tvh-feature-title">{f.title}</h3>
                  <p className="tvh-feature-desc">{f.desc}</p>
                  <a href="#" className="tvh-text-link">
                    {f.link} &rsaquo;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="tvh-services-section">
        <div className="tvh-content-width">
          <h2 className="tvh-h2">
            Watch, sing, play and work out.
            <br />
            On the big screen.
          </h2>
          <div className="tvh-services-list">
            {services.map((s) => (
              <div
                key={s.name}
                className="tvh-service-card"
                style={{ background: s.bg }}
              >
                <div className="tvh-service-body">
                  <h3 className="tvh-service-name">{s.name}</h3>
                  <p className="tvh-service-tagline">{s.tagline}</p>
                  <a href="#" className="tvh-btn-white">
                    {s.cta} &rsaquo;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tvh-footnotes">
        <div className="tvh-content-width">
          <p>
            * Listed pricing is Maximum Retail Price (inclusive of all taxes).
          </p>
          <p>
            New subscribers only. Plan automatically renews until cancelled.
            Terms apply.
          </p>
        </div>
      </section>
    </div>
  );
}
