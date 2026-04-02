import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const footerColumns = [
  {
    heading: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    heading: "Apple Wallet",
    links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    heading: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    heading: "Entertainment",
    links: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    heading: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    heading: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    heading: "For Education",
    links: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    heading: "For Healthcare",
    links: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
  },
  {
    heading: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supply Chain",
    ],
  },
  {
    heading: "About Apple",
    links: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];

const footerLinkTargets = {
  Store: "/store",
  Mac: "/mac",
  iPad: "/ipad",
  iPhone: "/iphone",
  Watch: "/watch",
  AirPods: "/airpods",
  "TV & Home": "/tv-home",
  Accessories: "/accessories",
  "Apple One": "/entertainment",
  "Apple TV+": "https://www.apple.com/in/apple-tv-plus/",
  "Apple Music": "https://www.apple.com/in/apple-music/",
  "Apple Arcade": "https://www.apple.com/in/apple-arcade/",
  "Apple Fitness+": "https://www.apple.com/in/apple-fitness-plus/",
  "Apple Podcasts": "https://www.apple.com/in/apple-podcasts/",
  "Apple Books": "https://www.apple.com/in/apple-books/",
  "App Store": "https://www.apple.com/in/app-store/",
  "Find a Store": "https://www.apple.com/in/retail/",
  "Today at Apple": "https://www.apple.com/in/today/",
  "Apple Store App": "https://www.apple.com/in/apple-store/",
  "Apple Trade In": "https://www.apple.com/in/shop/goto/trade_in",
  Financing: "https://www.apple.com/in/shop/ways-to-buy",
  "Order Status": "https://secure.store.apple.com/in/shop/order/list",
  "Shopping Help": "https://www.apple.com/in/shop/goto/help",
  "Manage Your Apple ID": "https://account.apple.com/",
  "Apple Store Account": "https://secure.store.apple.com/in/shop/account/home",
  "iCloud.com": "https://www.icloud.com/",
  Accessibility: "https://www.apple.com/in/accessibility/",
  Education: "https://www.apple.com/in/education/",
  Environment: "https://www.apple.com/in/environment/",
  Privacy: "https://www.apple.com/in/privacy/",
  Newsroom: "https://www.apple.com/in/newsroom/",
  "Apple Leadership": "https://www.apple.com/leadership/",
  "Career Opportunities": "https://jobs.apple.com/en-in",
  Investors: "https://investor.apple.com/",
  Events: "https://www.apple.com/in/apple-events/",
  "Contact Apple": "https://www.apple.com/in/contact/",
  "Privacy Policy": "https://www.apple.com/in/legal/privacy/",
  "Terms of Use": "https://www.apple.com/in/legal/terms/site.html",
  "Sales and Refunds": "https://www.apple.com/in/shop/goto/help/sales_refunds",
  Legal: "https://www.apple.com/in/legal/",
  "Site Map": "https://www.apple.com/in/sitemap/",
};

function FooterLink({ label }) {
  const target = footerLinkTargets[label] ?? "https://www.apple.com/in/";

  if (target.startsWith("/")) {
    return <Link to={target}>{label}</Link>;
  }

  return (
    <a href={target} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

export default function Footer() {
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.innerWidth <= 734;
  });
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 734px)");
    const syncViewport = (event) => {
      setIsMobileView(event.matches);
    };

    setIsMobileView(mediaQuery.matches);
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      setOpenSections({});
    }
  }, [isMobileView]);

  useEffect(() => {
    setOpenSections({});
  }, [location.pathname]);

  const toggleSection = (heading) => {
    if (!isMobileView) {
      return;
    }

    setOpenSections((currentSections) => ({
      ...currentSections,
      [heading]: !currentSections[heading],
    }));
  };

  return (
    <footer className="apple-footer">
      <div className="apple-footer-top">
        <p>
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device.{" "}
          <a
            href="https://www.apple.com/in/shop/goto/trade_in"
            target="_blank"
            rel="noreferrer"
          >
            See how much your device is worth.
          </a>
        </p>
      </div>

      <div className="apple-footer-links">
        {footerColumns.map((col, index) => {
          const isOpen = !isMobileView || Boolean(openSections[col.heading]);
          const sectionId = `apple-footer-section-${index}`;

          return (
            <section
              key={col.heading}
              className={`apple-footer-col${isOpen ? " is-open" : ""}`}
            >
              {isMobileView ? (
                <h3 className="apple-footer-heading">
                  <button
                    type="button"
                    className="apple-footer-toggle"
                    onClick={() => toggleSection(col.heading)}
                    aria-expanded={isOpen}
                    aria-controls={sectionId}
                  >
                    <span>{col.heading}</span>
                    <span className="apple-footer-chevron" aria-hidden="true" />
                  </button>
                </h3>
              ) : (
                <h3 className="apple-footer-heading-static">{col.heading}</h3>
              )}

              <div
                id={sectionId}
                className="apple-footer-list-wrap"
                aria-hidden={isMobileView ? !isOpen : undefined}
              >
                <div className="apple-footer-list-inner">
                  <ul>
                    {col.links.map((link) => (
                      <li key={link}>
                        <FooterLink label={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="apple-footer-bottom">
        <p>
          Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights
          reserved.
        </p>
        <div className="apple-footer-legal">
          <FooterLink label="Privacy Policy" />
          <FooterLink label="Terms of Use" />
          <FooterLink label="Sales and Refunds" />
          <FooterLink label="Legal" />
          <FooterLink label="Site Map" />
        </div>
        <p className="apple-footer-country">India</p>
      </div>
    </footer>
  );
}
