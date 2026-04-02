import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Apple at 50",
    logo: "/images/grid/apple_logo/promo_logo_apple_50_headline__5493ndwfu0iy_medium_2x.png",
    tagline: "",
    theme: "light",
    bg: "#fbfbfd",
    fg: "#1d1d1f",
    img: "/images/grid/apple_logo/promo_apple_50__cb3xo5si7y6a_medium_2x.jpg",
    imageFit: "contain",
    imagePosition: "center center",
    imageBoxed: true,
    imageWidth: "82%",
    imageMask:
      "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.08) 8%, rgba(0, 0, 0, 0.45) 16%, black 34%, black 66%, rgba(0, 0, 0, 0.45) 84%, rgba(0, 0, 0, 0.08) 92%, transparent 100%)",
    contentPosition: "bottom",
    links: [
      {
        label: "Read the letter from Tim",
        href: "https://www.apple.com/in/50-years-of-thinking-different/",
        external: true,
      },
    ],
  },
  {
    id: 2,
    name: "MacBook Pro",
    tagline: "Now with M5, M5 Pro and M5 Max.",
    theme: "dark",
    bg: "#000000",
    fg: "#f5f5f7",
    img: "/images/grid/macbook_Pro/promo_macbook_pro__e3xqrygvp9ea_medium_2x.jpg",
    imageFit: "contain",
    imagePosition: "center center",
    links: [
      { label: "Learn more", href: "/mac" },
      {
        label: "Buy",
        href: "https://www.apple.com/in/shop/goto/buy_mac/macbook_pro",
        external: true,
      },
    ],
  },
  {
    id: 3,
    name: "AirPods Max 2",
    tagline: "Listening. Remastered.",
    subcopy: "Available early next month",
    theme: "light",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    img: "/images/grid/airpods_promax/promo_airpods_max_2_announce__gixce23ubaa2_medium_2x.jpg",
    imageFit: "contain",
    imagePosition: "center center",
    contentPosition: "bottom",
    links: [
      { label: "Learn more", href: "/airpods" },
      {
        label: "Order",
        href: "https://www.apple.com/in/shop/goto/buy_airpods/airpods_max_2",
        external: true,
      },
    ],
  },
  {
    id: 4,
    name: "Apple Watch Series 11",
    logo: "/images/grid/apple_watch/promo_logo_apple_watch_series_11_preorder__fl4pzqrs45me_medium_2x.png",
    tagline: "The ultimate watch for a healthy life.",
    theme: "light",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    img: "/images/grid/apple_watch/promo_apple_watch_series_11__b63hxviqvonm_medium_2x.jpg",
    imageFit: "contain",
    imagePosition: "center center",
    links: [
      { label: "Learn more", href: "/watch" },
      {
        label: "Buy",
        href: "https://www.apple.com/in/shop/goto/buy_watch/apple_watch_series_11",
        external: true,
      },
    ],
  },
  {
    id: 5,
    name: "iPad Pro",
    tagline: "Advanced AI performance and game-changing capabilities.",
    theme: "dark",
    bg: "#000000",
    fg: "#f5f5f7",
    img: "/images/grid/ipad_pro/promo_ipad_pro__c529dk533k4m_medium_2x.jpg",
    imagePosition: "center center",
    links: [
      { label: "Learn more", href: "/ipad" },
      {
        label: "Buy",
        href: "https://www.apple.com/in/shop/goto/ipad_pro/select",
        external: true,
      },
    ],
  },
  {
    id: 6,
    name: "Apple Trade In",
    logo: "/images/grid/trade_in/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png",
    tagline: "Upgrade and save. It's that easy.",
    theme: "light",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    img: "/images/grid/trade_in/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg",
    imagePosition: "center center",
    links: [
      {
        label: "Get your estimate",
        href: "https://www.apple.com/in/shop/goto/trade_in",
        external: true,
      },
    ],
  },
];

function ProductCard({ product }) {
  return (
    <div
      className="apple-product-card"
      style={{
        background: product.bg,
        color: product.fg,
        "--promo-link-color": product.theme === "dark" ? "#f5f5f7" : "#06c",
        "--product-image-fit": product.imageFit ?? "cover",
        "--product-image-width": product.imageWidth ?? "100%",
        "--product-image-mask": product.imageMask ?? "none",
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        className={`apple-product-img-placeholder${product.imageBoxed ? " apple-product-img-boxed" : ""}`}
        style={
          product.imagePosition
            ? { objectPosition: product.imagePosition }
            : undefined
        }
      />
      <div
        className={`apple-product-text${product.contentPosition === "bottom" ? " apple-product-text-bottom" : ""}`}
      >
        {product.logo ? (
          <img
            src={product.logo}
            alt={product.name}
            className="apple-product-logo"
          />
        ) : (
          <h2 className="apple-product-name">{product.name}</h2>
        )}
        {product.tagline ? (
          <p className="apple-product-tagline">{product.tagline}</p>
        ) : null}
        {product.subcopy ? (
          <p className="apple-product-subcopy">{product.subcopy}</p>
        ) : null}
        <div className="promo-buttons apple-product-cta">
          {product.links.map((link, index) =>
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
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="apple-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
