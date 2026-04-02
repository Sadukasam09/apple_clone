import { Link } from "react-router-dom";

const featured = [
  {
    id: 1,
    name: "MacBook Neo",
    tagline: "Amazing Mac. Surprising price.",
    theme: "light",
    bg: "#f7f7f2",
    fg: "#1d1d1f",
    subtitleColor: "#1d1d1f",
    img: "/images/macbook_neo/hero_macbook_neo__gnm3snkti4a6_mediumtall_2x.jpg",
    imagePosition: "center bottom",
    links: [
      { label: "Learn more", href: "/mac" },
      {
        label: "Buy",
        href: "https://www.apple.com/in/shop/goto/buy_mac/macbook_neo",
        external: true,
      },
    ],
  },
  {
    id: 2,
    name: "iPad Air",
    logo: "/images/ipad_air/hero_logo_ipad_air__ejixj9pic0uq_medium_2x.png",
    tagline: "Now supercharged by M4.",
    theme: "light",
    bg: "#dff5fb",
    fg: "#1d1d1f",
    subtitleColor: "#1d1d1f",
    img: "/images/ipad_air/hero_ipad_air_m4__ew8k92mk1w6e_mediumtall_2x.jpg",
    mobileImg: "/images/ipad_air/hero_ipad_air_m4__ew8k92mk1w6e_small_2x.jpg",
    imagePosition: "center bottom",
    mobileImageHeight: "clamp(176px, 44vw, 220px)",
    mobileImagePosition: "center 68%",
    mobileImageTransform: "scale(1.14)",
    links: [
      { label: "Learn more", href: "/ipad" },
      {
        label: "Buy",
        href: "https://www.apple.com/in/shop/goto/buy_ipad/ipad_air",
        external: true,
      },
    ],
  },
];

export default function FeaturedDuo() {
  return (
    <section className="featured-duo">
      {featured.map((item) => (
        <div
          key={item.id}
          className={`featured-tile${item.name === "iPad Air" ? " featured-tile-mobile-hidden" : ""}`}
          style={{
            background: item.bg,
            color: item.fg,
            "--featured-image-position": item.imagePosition,
            "--featured-mobile-image-height": item.mobileImageHeight,
            "--featured-mobile-image-position": item.mobileImagePosition,
            "--featured-mobile-image-transform": item.mobileImageTransform,
            "--promo-link-color": item.theme === "dark" ? "#f5f5f7" : "#06c",
          }}
        >
          <div className="featured-tile-text">
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
                className="featured-name-logo"
              />
            ) : (
              <h2 className="featured-name">{item.name}</h2>
            )}
            <p
              className="featured-tagline"
              style={{ color: item.subtitleColor }}
            >
              {item.tagline}
            </p>
            <div className="promo-buttons featured-cta">
              {item.links.map((link, index) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`pill-btn ${index === 0 ? "pill-btn-filled" : "pill-btn-outline"}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`pill-btn ${index === 0 ? "pill-btn-filled" : "pill-btn-outline"}`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <picture>
            {item.mobileImg ? (
              <source media="(max-width: 480px)" srcSet={item.mobileImg} />
            ) : null}
            <img
              src={item.img}
              alt={item.name}
              className="featured-img-placeholder"
            />
          </picture>
        </div>
      ))}
    </section>
  );
}
