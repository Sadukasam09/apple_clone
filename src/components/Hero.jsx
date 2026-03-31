export default function Hero() {
  return (
    <section className="apple-hero">
      <div className="apple-hero-content">
        <p className="apple-hero-eyebrow">New</p>
        <h1 className="apple-hero-title">iPhone</h1>
        <p className="apple-hero-subtitle">Hello, Apple Intelligence.</p>
        <div className="apple-hero-cta">
          <a href="#" className="pill-btn pill-btn-filled">
            Learn more
          </a>
          <a href="#" className="pill-btn pill-btn-outline">
            Buy
          </a>
        </div>
      </div>
      <div className="apple-hero-image">
        <img
          src="/images/iphones/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg"
          alt="iPhone 17 family"
          className="apple-hero-img-placeholder"
        />
      </div>
    </section>
  );
}
