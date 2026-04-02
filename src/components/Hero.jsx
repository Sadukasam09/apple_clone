import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="apple-hero">
      <div className="apple-hero-content">
        <h2 className="apple-hero-title">iPhone</h2>
        <p className="apple-hero-subtitle">Meet the latest iPhone lineup.</p>
        <div className="apple-hero-cta">
          <Link to="/iphone" className="pill-btn pill-btn-filled">
            Learn more
          </Link>
          <a
            href="https://www.apple.com/in/shop/goto/buy_iphone"
            className="pill-btn pill-btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            Shop iPhone
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
