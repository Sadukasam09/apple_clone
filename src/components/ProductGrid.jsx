const products = [
  {
    id: 1,
    name: "MacBook Pro",
    tagline: "Mind-blowing. Head-turning.",
    theme: "dark",
    bg: "#000000",
    fg: "#f5f5f7",
    img: "/images/grid/macbook_Pro/promo_macbook_pro__e3xqrygvp9ea_medium_2x.jpg",
    imgCropTop: "-100px",
  },
  {
    id: 2,
    name: "iPad Pro",
    tagline: "Thinnest product Apple has ever made.",
    theme: "dark",
    bg: "#000000",
    fg: "#f5f5f7",
    img: "/images/grid/ipad_pro/promo_ipad_pro__c529dk533k4m_medium_2x.jpg",
    imgCropBottom: "-120px",
  },
  {
    id: 3,
    name: "Apple Watch Series 11",
    tagline: "The ultimate way to watch your health.",
    theme: "light",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    img: "/images/grid/apple_watch/promo_apple_watch_series_11__b63hxviqvonm_medium_2x.jpg",
  },
  {
    id: 4,
    name: "AirPods Pro Max",
    tagline: "Listening. Remastered.",
    theme: "light",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    img: "/images/grid/airpods_promax/promo_airpods_max_2_announce__gixce23ubaa2_medium_2x.jpg",
  },
  {
    id: 5,
    name: "Apple at 50",
    tagline: "Celebrating five decades of innovation.",
    theme: "light",
    bg: "#fbfbfd",
    fg: "#1d1d1f",
    img: "/images/grid/apple_logo/promo_apple_50__cb3xo5si7y6a_medium_2x.jpg",
  },
  {
    id: 6,
    name: "iPhone Trade In",
    tagline: "Get credit toward a new iPhone.",
    theme: "light",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    img: "/images/grid/trade_in/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg",
  },
];

function ProductCard({ product }) {
  const isDark = product.theme === "dark";
  return (
    <div
      className="apple-product-card"
      style={{
        background: product.bg,
        color: product.fg,
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        className="apple-product-img-placeholder"
        style={{
          ...(product.imgCropTop ? { marginTop: product.imgCropTop } : {}),
          ...(product.imgCropBottom ? { marginBottom: product.imgCropBottom } : {}),
        }}
      />
      <div className="apple-product-text">
        <h2 className="apple-product-name">{product.name}</h2>
        <p className="apple-product-tagline">{product.tagline}</p>
        <div className="apple-product-cta">
          <a href="#" className="pill-btn pill-btn-filled">
            Learn more
          </a>
          <a href="#" className="pill-btn pill-btn-outline">
            Shop
          </a>
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
