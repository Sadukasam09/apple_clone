import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const desktopMenus = {
  Store: {
    sections: [
      {
        title: "Shop",
        featured: [
          "Shop the Latest",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Accessories",
        ],
        footer: ["Apple Trade In", "Financing"],
      },
      {
        title: "Quick Links",
        links: ["Find a Store", "Order Status", "Ways to Buy"],
      },
      {
        title: "Store Services",
        links: ["Personal Setup", "Today at Apple", "Apple Trade In"],
      },
    ],
  },
  Mac: {
    sections: [
      {
        title: "Explore Mac",
        featured: [
          "Explore All Mac",
          "MacBook Neo",
          "MacBook Air",
          "MacBook Pro",
          "iMac",
          "Mac mini",
          "Mac Studio",
          "Displays",
        ],
        footer: ["Compare Mac", "Switch from PC to Mac"],
      },
      {
        title: "Shop Mac",
        links: ["Shop Mac", "Mac Accessories", "Ways to Buy", "Personal Setup"],
      },
      {
        title: "More from Mac",
        links: [
          "Mac Support",
          "AppleCare",
          "macOS Tahoe",
          "Apple Intelligence",
          "Apps by Apple",
          "Apple Creator Studio",
          "Better with iPhone",
          "iCloud+",
          "Mac for Business",
          "Education",
        ],
      },
    ],
  },
  iPad: {
    sections: [
      {
        title: "Explore iPad",
        featured: [
          "Explore All iPad",
          "iPad Pro",
          "iPad Air",
          "iPad",
          "Apple Pencil",
          "Keyboards",
        ],
        footer: ["Compare iPad", "Why iPad"],
      },
      {
        title: "Shop iPad",
        links: [
          "Shop iPad",
          "iPad Accessories",
          "Ways to Buy",
          "Personal Setup",
        ],
      },
      {
        title: "More from iPad",
        links: [
          "iPad Support",
          "AppleCare",
          "iPadOS",
          "Apps by Apple",
          "Education",
        ],
      },
    ],
  },
  iPhone: {
    sections: [
      {
        title: "Explore iPhone",
        featured: [
          "Explore All iPhone",
          "iPhone 16 Pro",
          "iPhone 16",
          "iPhone 15",
          "Compare iPhone",
        ],
        footer: ["Switch from Android", "Why iPhone"],
      },
      {
        title: "Shop iPhone",
        links: [
          "Shop iPhone",
          "iPhone Accessories",
          "Ways to Buy",
          "Carrier Offers",
        ],
      },
      {
        title: "More from iPhone",
        links: [
          "iPhone Support",
          "AppleCare",
          "iOS 19",
          "Apple Intelligence",
          "iCloud+",
        ],
      },
    ],
  },
  Watch: {
    sections: [
      {
        title: "Explore Watch",
        featured: [
          "Explore All Apple Watch",
          "Series 11",
          "Ultra 3",
          "SE",
          "Watch Bands",
        ],
        footer: ["Compare Watch", "Why Apple Watch"],
      },
      {
        title: "Shop Watch",
        links: [
          "Shop Apple Watch",
          "Apple Watch Studio",
          "Watch Bands",
          "Ways to Buy",
        ],
      },
      {
        title: "More from Watch",
        links: ["Watch Support", "AppleCare", "watchOS", "Fitness+"],
      },
    ],
  },
  Vision: {
    sections: [
      {
        title: "Explore Vision",
        featured: ["Explore Apple Vision", "Vision Pro", "Developer Resources"],
        footer: ["Guided Tour", "Book a Demo"],
      },
      {
        title: "Shop Vision",
        links: ["Shop Vision Pro", "Vision Accessories", "Ways to Buy"],
      },
      {
        title: "More from Vision",
        links: ["Vision Support", "visionOS", "AppleCare"],
      },
    ],
  },
  AirPods: {
    sections: [
      {
        title: "Explore AirPods",
        featured: [
          "Explore All AirPods",
          "AirPods 4",
          "AirPods Pro",
          "AirPods Max",
        ],
        footer: ["Compare AirPods"],
      },
      {
        title: "Shop AirPods",
        links: ["Shop AirPods", "AirPods Accessories"],
      },
      {
        title: "More from AirPods",
        links: ["AirPods Support", "Apple Music", "Hearing Health"],
      },
    ],
  },
  "TV & Home": {
    sections: [
      {
        title: "Explore TV & Home",
        featured: [
          "Explore TV & Home",
          "Apple TV 4K",
          "HomePod",
          "HomePod mini",
        ],
        footer: ["Home App", "Matter Accessories"],
      },
      {
        title: "Shop TV & Home",
        links: ["Shop Apple TV 4K", "Shop HomePod", "Shop Accessories"],
      },
      {
        title: "More from TV & Home",
        links: ["TV Support", "HomePod Support", "Apple TV+", "Home App"],
      },
    ],
  },
  Entertainment: {
    sections: [
      {
        title: "Explore Entertainment",
        featured: [
          "Explore Entertainment",
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
        ],
        footer: ["App Store", "Apple Podcasts"],
      },
      {
        title: "Support",
        links: [
          "Apple TV+ Support",
          "Apple Music Support",
          "Billing and Subscriptions",
        ],
      },
      {
        title: "More",
        links: ["Family Sharing", "Gift Cards", "Services"],
      },
    ],
  },
  Accessories: {
    sections: [
      {
        title: "Shop Accessories",
        featured: [
          "Shop All Accessories",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "AirPods",
        ],
        footer: ["Made by Apple", "Beats by Dr. Dre"],
      },
      {
        title: "Explore",
        links: ["Cases and Protection", "Chargers", "Audio", "Smart Home"],
      },
      {
        title: "Support",
        links: ["Accessory Support", "Compatibility"],
      },
    ],
  },
  Support: {
    sections: [
      {
        title: "Explore Support",
        featured: ["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV"],
        footer: ["Support Home", "Communities"],
      },
      {
        title: "Get Help",
        links: [
          "Check Coverage",
          "Repair",
          "Contact Us",
          "Account and Password",
        ],
      },
      {
        title: "Helpful Topics",
        links: ["AppleCare", "Billing", "Subscriptions", "Accessibility"],
      },
    ],
  },
};

const navLinks = [
  { label: "Store", href: "/store" },
  { label: "Mac", href: "/mac" },
  { label: "iPad", href: "/ipad" },
  { label: "iPhone", href: "/iphone" },
  { label: "Watch", href: "/watch" },
  { label: "Vision", href: "#" },
  { label: "AirPods", href: "/airpods" },
  { label: "TV & Home", href: "/tv-home" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Accessories", href: "/accessories" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [renderedMenu, setRenderedMenu] = useState(null);
  const [isMegaVisible, setIsMegaVisible] = useState(false);
  const closeTimerRef = useRef(null);
  const closeDelayTimerRef = useRef(null);
  const openFrameRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);

        if (closeTimerRef.current) {
          window.clearTimeout(closeTimerRef.current);
        }

        if (closeDelayTimerRef.current) {
          window.clearTimeout(closeDelayTimerRef.current);
          closeDelayTimerRef.current = null;
        }

        if (openFrameRef.current) {
          window.cancelAnimationFrame(openFrameRef.current);
          openFrameRef.current = null;
        }

        if (!renderedMenu) {
          setActiveMenu(null);
          setIsMegaVisible(false);
          return;
        }

        setActiveMenu(null);
        setIsMegaVisible(false);
        closeTimerRef.current = window.setTimeout(() => {
          setRenderedMenu(null);
          closeTimerRef.current = null;
        }, 460);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [renderedMenu]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }

      if (closeDelayTimerRef.current) {
        window.clearTimeout(closeDelayTimerRef.current);
      }

      if (openFrameRef.current) {
        window.cancelAnimationFrame(openFrameRef.current);
      }
    };
  }, []);

  const openDesktopMenu = (label) => {
    if (window.innerWidth <= 768) {
      return;
    }

    const isOpeningFresh = !renderedMenu;

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (closeDelayTimerRef.current) {
      window.clearTimeout(closeDelayTimerRef.current);
      closeDelayTimerRef.current = null;
    }

    if (openFrameRef.current) {
      window.cancelAnimationFrame(openFrameRef.current);
      openFrameRef.current = null;
    }

    if (isOpeningFresh) {
      setIsMegaVisible(false);
    }

    setRenderedMenu(label);
    setActiveMenu(label);

    if (!isOpeningFresh) {
      setIsMegaVisible(true);
      return;
    }

    openFrameRef.current = window.requestAnimationFrame(() => {
      openFrameRef.current = window.requestAnimationFrame(() => {
        setIsMegaVisible(true);
        openFrameRef.current = null;
      });
    });
  };

  const closeDesktopMenu = () => {
    if (!renderedMenu) {
      setActiveMenu(null);
      setIsMegaVisible(false);
      return;
    }

    setActiveMenu(null);
    setIsMegaVisible(false);

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    if (closeDelayTimerRef.current) {
      window.clearTimeout(closeDelayTimerRef.current);
      closeDelayTimerRef.current = null;
    }

    if (openFrameRef.current) {
      window.cancelAnimationFrame(openFrameRef.current);
      openFrameRef.current = null;
    }

    closeTimerRef.current = window.setTimeout(() => {
      setRenderedMenu(null);
      closeTimerRef.current = null;
    }, 460);
  };

  const scheduleDesktopMenuClose = () => {
    if (window.innerWidth <= 768 || !renderedMenu) {
      return;
    }

    if (closeDelayTimerRef.current) {
      window.clearTimeout(closeDelayTimerRef.current);
    }

    closeDelayTimerRef.current = window.setTimeout(() => {
      closeDesktopMenu();
      closeDelayTimerRef.current = null;
    }, 120);
  };

  const activeMenuData = renderedMenu ? desktopMenus[renderedMenu] : null;
  const desktopMenuVisible = Boolean(renderedMenu);

  return (
    <header
      className={`apple-nav-shell${menuOpen ? " apple-nav-shell-open" : ""}${desktopMenuVisible ? " apple-nav-shell-desktop-open" : ""}`}
      onMouseLeave={scheduleDesktopMenuClose}
    >
      <nav className="apple-nav">
        <div className="apple-nav-inner">
          <button
            type="button"
            className="apple-nav-hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

          <Link to="/" className="apple-nav-logo" aria-label="Apple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 814 1000"
              width="15"
              height="18"
              fill="currentColor"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 71 0 130.5 46.4 174.9 46.4 42.7 0 109.2-49.1 188.3-49.1V221c0-50.5-22.9-131.2 70.1-192.7C736.2 12.6 807 4.8 819.7 4.8c.8 0 1.6.1 2.4.1C820 10.9 788.1 172.5 788.1 340.9z" />
            </svg>
          </Link>

          <ul className="apple-nav-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                onMouseEnter={() => openDesktopMenu(link.label)}
              >
                {link.href === "#" ? (
                  <a
                    href={link.href}
                    onFocus={() => openDesktopMenu(link.label)}
                    aria-expanded={activeMenu === link.label}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.href}
                    onFocus={() => openDesktopMenu(link.label)}
                    aria-expanded={activeMenu === link.label}
                    className={({ isActive }) =>
                      isActive ? "apple-nav-link-active" : ""
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="apple-nav-icons">
            <a href="#" aria-label="Search" className="apple-nav-icon-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="44"
                viewBox="0 0 15 44"
                fill="currentColor"
              >
                <path d="M14.298 27.202l-3.87-3.87a6.217 6.217 0 0 0 1.34-3.852 6.22 6.22 0 0 0-6.22-6.22 6.22 6.22 0 0 0-6.22 6.22 6.22 6.22 0 0 0 6.22 6.22 6.192 6.192 0 0 0 3.852-1.34l3.87 3.87a.75.75 0 1 0 1.028-1.028zM1.48 19.48a4.72 4.72 0 1 1 9.44 0 4.72 4.72 0 0 1-9.44 0z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Shopping Bag"
              className="apple-nav-icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="44"
                viewBox="0 0 14 44"
                fill="currentColor"
              >
                <path d="M13.57 23.938L12.12 10.458a.75.75 0 0 0-.744-.666h-2.03a2.59 2.59 0 0 0-5.142 0H2.174a.75.75 0 0 0-.742.666L.02 23.938C.006 24.03 0 24.114 0 24.2c0 2.1 2.794 3.8 6.25 3.8H7.749c3.456 0 6.25-1.7 6.25-3.8 0-.087-.006-.172-.028-.262zM7 8.3a1.09 1.09 0 0 1 1.085 1.492H5.915A1.09 1.09 0 0 1 7 8.3zm.75 11.3a.75.75 0 1 1-1.5 0v-4a.75.75 0 1 1 1.5 0v4z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {activeMenuData && (
        <div
          className={`apple-nav-mega${isMegaVisible ? " apple-nav-mega-open" : " apple-nav-mega-closing"}`}
        >
          <div className="apple-nav-mega-inner">
            {activeMenuData.sections.map((section, sectionIndex) => (
              <div
                key={`${renderedMenu}-${section.title}`}
                className={`apple-nav-mega-column${sectionIndex === 0 ? " apple-nav-mega-column-featured" : ""}`}
              >
                <p className="apple-nav-mega-title">{section.title}</p>
                {section.featured && (
                  <div className="apple-nav-mega-featured-list">
                    {section.featured.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="apple-nav-mega-featured-link"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
                {section.links && (
                  <div className="apple-nav-mega-link-list">
                    {section.links.map((item) => (
                      <a key={item} href="#" className="apple-nav-mega-link">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
                {section.footer && (
                  <div className="apple-nav-mega-footer-list">
                    {section.footer.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="apple-nav-mega-footer-link"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!desktopMenuVisible && (
        <div className="apple-nav-promo">
          Get up to 6 months of No Cost EMI plus up to Rs. 10000 instant
          cashback on selected products with eligible cards.
          <Link to="/store"> Shop</Link>
        </div>
      )}

      {menuOpen && (
        <div className="apple-nav-mobile">
          <div className="apple-nav-mobile-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.298 13.942l-3.87-3.87a6.217 6.217 0 0 0 1.34-3.852A6.22 6.22 0 0 0 5.548 0a6.22 6.22 0 0 0 0 12.44 6.192 6.192 0 0 0 3.852-1.34l3.87 3.87a.75.75 0 1 0 1.028-1.028zM1.48 6.22a4.72 4.72 0 1 1 9.44 0 4.72 4.72 0 0 1-9.44 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search apple.com"
              aria-label="Search apple.com"
            />
          </div>
          <div className="apple-nav-mobile-links">
            {navLinks.map((link) =>
              link.href === "#" ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
