import { Link } from "react-router-dom";
import "./EntertainmentPage.css";

const services = [
  {
    id: "tv-plus",
    name: "Apple TV+",
    tagline: "Brilliant. Original. Ad‑free.",
    desc: "Groundbreaking storytelling from the world's greatest creative minds. New originals added every month.",
    bg: "#000",
    textColor: "#fff",
    ctaBg: "#fff",
    ctaColor: "#000",
    cta: "Watch now",
    link: "https://tv.apple.com",
    img: "https://www.apple.com/v/apple-tv-plus/ag/images/overview/tv-plus-hero-poster__g3m0qjsanvmy_large.jpg",
  },
  {
    id: "music",
    name: "Apple Music",
    tagline: "100 million songs. Zero ads.",
    desc: "Listen to millions of songs, discover music you'll love, and enjoy Spatial Audio and lossless quality.",
    bg: "#fc3c44",
    textColor: "#fff",
    ctaBg: "#fff",
    ctaColor: "#000",
    cta: "Listen now",
    link: "https://music.apple.com",
    img: "https://www.apple.com/v/apple-music/l/images/overview/hero__d73tpq1lx8qi_large.jpg",
  },
  {
    id: "arcade",
    name: "Apple Arcade",
    tagline: "The ultimate games destination.",
    desc: "Access 200+ exclusive games with no ads or in‑app purchases. Family Sharing included.",
    bg: "#1a1a1a",
    textColor: "#fff",
    ctaBg: "#fff",
    ctaColor: "#000",
    cta: "Play now",
    link: "https://www.apple.com/apple-arcade/",
    img: "https://www.apple.com/v/apple-arcade/f/images/overview/hero__g9tqidh4gqye_large.jpg",
  },
  {
    id: "fitness-plus",
    name: "Apple Fitness+",
    tagline: "Fitness for all bodies. All levels.",
    desc: "Unlimited access to expert‑led workouts and meditations, included with Apple Watch.",
    bg: "#1c2b3a",
    textColor: "#fff",
    ctaBg: "#fff",
    ctaColor: "#000",
    cta: "Start training",
    link: "https://www.apple.com/apple-fitness-plus/",
    img: "https://www.apple.com/v/apple-fitness-plus/g/images/overview/hero__bltb80oelqeq_large.jpg",
  },
  {
    id: "podcasts",
    name: "Apple Podcasts",
    tagline: "Over a million shows. Free.",
    desc: "The world's largest podcast catalogue. Browse, subscribe and listen to shows you love — on any device.",
    bg: "#5a0197",
    textColor: "#fff",
    ctaBg: "#fff",
    ctaColor: "#000",
    cta: "Explore podcasts",
    link: "https://podcasts.apple.com",
    img: "https://www.apple.com/v/apple-podcasts/b/images/overview/hero__d5x1ky56gqq2_large.jpg",
  },
];

export default function EntertainmentPage() {
  return (
    <div className="ent-page">
      {/* Hero */}
      <section className="ent-hero">
        <div className="ent-content-width">
          <h1 className="ent-hero-title">Entertainment.</h1>
          <p className="ent-hero-sub">
            Award‑winning movies. Binge‑worthy shows. Heart‑pounding games. The
            soundtracks of your life. All on your Apple devices.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="ent-services">
        {services.map((svc, i) => (
          <div
            key={svc.id}
            className={`ent-service-card ${i % 2 === 1 ? "ent-reverse" : ""}`}
            style={{ background: svc.bg, color: svc.textColor }}
          >
            <div className="ent-content-width ent-card-inner">
              <div className="ent-card-body">
                <h2 className="ent-card-name" style={{ color: svc.textColor }}>
                  {svc.name}
                </h2>
                <h3
                  className="ent-card-tagline"
                  style={{ color: svc.textColor }}
                >
                  {svc.tagline}
                </h3>
                <p
                  className="ent-card-desc"
                  style={{ color: `${svc.textColor}cc` }}
                >
                  {svc.desc}
                </p>
                <div className="ent-card-actions">
                  <a
                    href={svc.link}
                    className="ent-btn-cta"
                    style={{ background: svc.ctaBg, color: svc.ctaColor }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {svc.cta}
                  </a>
                  <a
                    href={svc.link}
                    className="ent-btn-learn"
                    style={{ color: svc.textColor }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more &rsaquo;
                  </a>
                </div>
              </div>
              <div className="ent-card-img-wrap">
                <img
                  src={svc.img}
                  alt={svc.name}
                  className="ent-card-img"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Apple One bundle */}
      <section className="ent-one-section">
        <div className="ent-content-width">
          <div className="ent-one-card">
            <div className="ent-one-body">
              <p className="ent-one-eyebrow">Apple One</p>
              <h2 className="ent-one-title">
                Bundle Apple services.
                <br />
                Save every month.
              </h2>
              <p className="ent-one-desc">
                Apple One bundles up to six Apple services into a single monthly
                subscription that you can share with up to five family members.
              </p>
              <div className="ent-one-actions">
                <a
                  href="https://www.apple.com/apple-one/"
                  className="ent-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
              <div className="ent-one-services">
                {[
                  "TV+",
                  "Music",
                  "Arcade",
                  "Fitness+",
                  "Podcasts",
                  "iCloud+",
                ].map((s) => (
                  <span key={s} className="ent-one-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="ent-one-img-wrap">
              <img
                src="https://www.apple.com/v/apple-one/f/images/overview/hero__d6tqlqzg1qia_large.jpg"
                alt="Apple One"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footnotes */}
      <footer className="ent-footnotes">
        <div className="ent-content-width">
          <p>
            1. Apple TV+ is ₹99/month after a 7-day free trial. Plan
            automatically renews until cancelled.
          </p>
          <p>
            2. Apple Music is ₹99/month for the Individual plan. Family plan
            ₹149/month.
          </p>
          <p>
            3. Apple Arcade is ₹99/month. Family plan allows up to six members.
          </p>
          <p>
            4. Apple Fitness+ is ₹99/month or ₹999/year. Requires Apple Watch.
          </p>
        </div>
      </footer>
    </div>
  );
}
