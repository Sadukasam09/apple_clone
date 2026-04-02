import { useState } from "react";
import "./SupportPage.css";

const productLinks = [
  {
    name: "iPhone Support",
    href: "https://support.apple.com/en-in/iphone",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone17-pro-finish-select-202509-6-3inch-blacktitanium?wid=300&hei=300&fmt=png-alpha",
  },
  {
    name: "Mac Support",
    href: "https://support.apple.com/en-in/mac",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=300&hei=300&fmt=png-alpha&qlt=90",
  },
  {
    name: "iPad Support",
    href: "https://support.apple.com/en-in/ipad",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-select-wifi-blue-202503?wid=300&hei=300&fmt=png-alpha&.v=1740769332690",
  },
  {
    name: "Apple Watch Support",
    href: "https://support.apple.com/en-in/watch",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-series11-unselect-gallery-1-202409?wid=300&hei=300&fmt=png-alpha",
  },
  {
    name: "AirPods Support",
    href: "https://support.apple.com/en-in/airpods",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro3-select-202409?wid=300&hei=300&fmt=png-alpha",
  },
  {
    name: "TV Support",
    href: "https://support.apple.com/en-in/tv",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=300&hei=300&fmt=png-alpha&.v=1664896361408",
  },
];

const supportTools = [
  {
    title: "Reset your Apple Account password",
    copy: "Use iforgot to recover access to your Apple Account quickly and securely.",
    href: "https://iforgot.apple.com/",
  },
  {
    title: "Check your warranty or AppleCare plan",
    copy: "See your coverage status and service eligibility in a few clicks.",
    href: "https://checkcoverage.apple.com/?locale=en_IN",
  },
  {
    title: "Manage subscriptions",
    copy: "Review or change your subscriptions from the Apple Account site.",
    href: "https://account.apple.com/account/manage/section/subscriptions",
  },
];

const exploreCards = [
  {
    title: "Apple Support app",
    copy: "Get help for all of your Apple products in one place, or connect with an expert.",
    href: "https://apps.apple.com/in/app/apple-support/id1130498044?pt=2003&ct=support.home&mt=8&l=en",
  },
  {
    title: "Today at Apple",
    copy: "Learn, create and be inspired in hands-on sessions at your Apple Store.",
    href: "https://www.apple.com/in/today/",
  },
  {
    title: "Apple Repair and Service",
    copy: "Find repair options, mail-in service and trusted support with genuine Apple parts.",
    href: "https://support.apple.com/en-in/repair",
  },
  {
    title: "My Support",
    copy: "Track your devices, support history and upcoming service activity.",
    href: "https://support.apple.com/en-in/my-support",
  },
];

const servicePrograms = [
  {
    title: "Mac mini Service Programme for No Power Issue",
    href: "https://support.apple.com/en-in/mac-mini-2023-service-program-for-no-power-issue",
  },
  {
    title: "iPhone 14 Plus Service Programme for Rear Camera Issue",
    href: "https://support.apple.com/en-in/iphone-14-plus-service-program-for-rear-camera-issue",
  },
  {
    title: "15-inch MacBook Pro Battery Recall Programme",
    href: "https://support.apple.com/en-in/15-inch-macbook-pro-battery-recall",
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      setSearchError("Enter a question or keyword to search support.");
      return;
    }

    if (query.length < 2) {
      setSearchError("Use at least 2 characters for better results.");
      return;
    }

    setSearchError("");

    window.open(
      `https://support.apple.com/en-in/search?q=${encodeURIComponent(query)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="sup-page">
      <section className="sup-hero">
        <div className="sup-content-width">
          <img
            className="sup-hero-logo"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_heroes/support-home-apple-logo-circle-blue.png"
            alt="Apple Support"
          />
          <h2>Need help? Start here.</h2>
          <p>
            Search articles, explore product help and reach trusted Apple
            support resources from one place.
          </p>
          <form className="sup-search-form" onSubmit={handleSubmit}>
            <div className="sup-search-field">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  if (searchError) {
                    setSearchError("");
                  }
                }}
                placeholder="Search Support"
                aria-label="Search Support"
                aria-invalid={Boolean(searchError)}
                aria-describedby="sup-search-helper"
              />
              {searchQuery ? (
                <button
                  type="button"
                  className="sup-search-clear"
                  onClick={() => {
                    setSearchQuery("");
                    setSearchError("");
                  }}
                  aria-label="Clear support search"
                >
                  Clear
                </button>
              ) : null}
            </div>
            <button type="submit" disabled={searchQuery.trim().length === 0}>
              Search
            </button>
          </form>
          <p
            id="sup-search-helper"
            className={`sup-search-helper${searchError ? " is-error" : ""}`}
            role="status"
          >
            {searchError ||
              "Tip: press Enter to search articles and troubleshooting steps."}
          </p>
        </div>
      </section>

      <section className="sup-products-section">
        <div className="sup-content-width">
          <h2>Support by product</h2>
          <div className="sup-products-grid">
            {productLinks.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sup-tools-section">
        <div className="sup-content-width">
          <div className="sup-section-header">
            <h2>Support Tools</h2>
          </div>
          <div className="sup-tools-grid">
            {supportTools.map((tool) => (
              <article key={tool.title} className="sup-tool-card">
                <h3>{tool.title}</h3>
                <p>{tool.copy}</p>
                <a href={tool.href} target="_blank" rel="noreferrer">
                  Open tool &rsaquo;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sup-spotlight-section">
        <div className="sup-content-width sup-spotlight-grid">
          <article className="sup-spotlight-card is-blue">
            <p className="sup-spotlight-eyebrow">Handled with AppleCare</p>
            <h2>One-stop service for your Apple products.</h2>
            <p>
              Every AppleCare plan provides expert support, easy service and
              coverage for accidents such as drops and spills.
            </p>
            <a
              href="https://www.apple.com/in/applecare/?cid=aaa-ols-home-acpp-psp-0922"
              target="_blank"
              rel="noreferrer"
            >
              Find out more &rsaquo;
            </a>
          </article>
          <article className="sup-spotlight-card is-light">
            <p className="sup-spotlight-eyebrow">Apple Repair and Service</p>
            <h2>Trusted experts. Genuine Apple parts.</h2>
            <p>
              We can help you find an Apple-certified repair at an Apple Store
              or authorised service provider.
            </p>
            <a
              href="https://support.apple.com/en-in/repair"
              target="_blank"
              rel="noreferrer"
            >
              Start a repair &rsaquo;
            </a>
          </article>
        </div>
      </section>

      <section className="sup-explore-section">
        <div className="sup-content-width">
          <div className="sup-section-header">
            <h2>More to Explore</h2>
          </div>
          <div className="sup-explore-grid">
            {exploreCards.map((card) => (
              <article key={card.title} className="sup-explore-card">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <a href={card.href} target="_blank" rel="noreferrer">
                  Learn more &rsaquo;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sup-warning-section">
        <div className="sup-content-width">
          <article className="sup-warning-card">
            <div className="sup-warning-copy">
              <p className="sup-spotlight-eyebrow">
                Beware of counterfeit parts
              </p>
              <h2>
                Protect your device with genuine Apple parts and certified
                service.
              </h2>
              <p>
                Some counterfeit and third-party batteries, adapters and
                displays may not be designed properly and could result in safety
                or performance issues.
              </p>
              <a
                href="https://locate.apple.com/in/en/"
                target="_blank"
                rel="noreferrer"
              >
                Find an Apple Authorised Service Provider &rsaquo;
              </a>
            </div>
            <div className="sup-warning-media" aria-hidden="true" />
          </article>
        </div>
      </section>

      <section className="sup-programmes-section">
        <div className="sup-content-width">
          <div className="sup-section-header">
            <h2>Apple Service Programmes</h2>
          </div>
          <div className="sup-programmes-list">
            {servicePrograms.map((programme) => (
              <a
                key={programme.title}
                href={programme.href}
                target="_blank"
                rel="noreferrer"
              >
                {programme.title}
                <span>&rsaquo;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sup-footnotes">
        <div className="sup-content-width">
          <p>
            AppleCare products, repair options and support availability vary by
            product and region.
          </p>
          <p>
            Service programmes are subject to eligibility requirements and may
            be revised or withdrawn by Apple.
          </p>
        </div>
      </section>
    </div>
  );
}
