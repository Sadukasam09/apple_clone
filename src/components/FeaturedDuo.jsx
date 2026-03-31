const featured = [
  {
    id: 1,
  
    name: "iPad Air",
    logo: "/images/ipad_air/hero_logo_ipad_air__ejixj9pic0uq_medium_2x.png",
    tagline: "Now supercharged by M4.",
    theme: "light",
    bg: "#fbfbfd",
    fg: "#1d1d1f",
    subtitleColor: "#1d1d1f",
    linkColor: "#0071e3",
    img: "/images/ipad_air/hero_ipad_air_m4__ew8k92mk1w6e_mediumtall_2x.jpg",
    imgCropTop: "-20px",
  },
  {
    id: 2,
    
    name: "MacBook Air",
    tagline: "Incredibly thin. Exceptionally capable.",
    theme: "light",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    subtitleColor: "#6e6e73",
    linkColor: "#0071e3",
    img: "/images/macbook_neo/hero_macbook_neo__gnm3snkti4a6_mediumtall_2x.jpg",
    imgCropTop: "-20px",
  },
];

export default function FeaturedDuo() {
  return (
    <section className="featured-duo">
      {featured.map((item) => (
        <div
          key={item.id}
          className="featured-tile"
          style={{ background: item.bg, color: item.fg, "--tile-bg": item.bg }}
        >
          <div className="featured-tile-text">
            <p
              className="featured-eyebrow"
              style={{ color: item.subtitleColor }}
            >
              {item.eyebrow}
            </p>
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
            <div className="featured-cta">
              <a href="#" className="pill-btn pill-btn-filled">
                Learn more
              </a>
              <a href="#" className="pill-btn pill-btn-outline">
                Buy
              </a>
            </div>
          </div>
          <img
            src={item.img}
            alt={item.name}
            className="featured-img-placeholder"
            style={item.imgCropTop ? { marginTop: item.imgCropTop } : undefined}
          />
        </div>
      ))}
    </section>
  );
}
