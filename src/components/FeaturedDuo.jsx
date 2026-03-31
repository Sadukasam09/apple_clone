const featured = [
  {
    id: 1,
    name: "MacBook Neo",
    tagline: "Amazing Mac. Surprising price.",
    theme: "light",
    bg: "#fbfbfd",
    fg: "#1d1d1f",
    subtitleColor: "#1d1d1f",
    img: "/images/macbook_neo/hero_macbook_neo__gnm3snkti4a6_mediumtall_2x.jpg",
    imagePosition: "center bottom",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: 2,
    name: "iPad Air",
    logo: "/images/ipad_air/hero_logo_ipad_air__ejixj9pic0uq_medium_2x.png",
    tagline: "Now supercharged by M4.",
    theme: "light",
    bg: "#fbfbfd",
    fg: "#1d1d1f",
    subtitleColor: "#1d1d1f",
    img: "/images/ipad_air/hero_ipad_air_m4__ew8k92mk1w6e_mediumtall_2x.jpg",
    imagePosition: "center bottom",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
];

export default function FeaturedDuo() {
  return (
    <section className="featured-duo">
      {featured.map((item) => (
        <div
          key={item.id}
          className="featured-tile"
          style={{
            background: item.bg,
            color: item.fg,
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
              {item.links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`pill-btn ${index === 0 ? "pill-btn-filled" : "pill-btn-outline"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <img
            src={item.img}
            alt={item.name}
            className="featured-img-placeholder"
            style={
              item.imagePosition
                ? { objectPosition: item.imagePosition }
                : undefined
            }
          />
        </div>
      ))}
    </section>
  );
}
