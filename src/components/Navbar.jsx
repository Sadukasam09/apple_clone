import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const appleUrl = (path) => `https://www.apple.com/in${path}`;
const supportUrl = (path) => `https://support.apple.com/en-in${path}`;
const menuItem = (label, href) => ({ label, href });

const desktopMenus = {
  Store: {
    sections: [
      {
        title: "Shop",
        featured: [
          menuItem("Shop the Latest", appleUrl("/shop/goto/store")),
          menuItem("Mac", appleUrl("/shop/goto/buy_mac")),
          menuItem("iPad", appleUrl("/shop/goto/buy_ipad")),
          menuItem("iPhone", appleUrl("/shop/goto/buy_iphone")),
          menuItem("Apple Watch", appleUrl("/shop/goto/buy_watch")),
          menuItem("AirPods", appleUrl("/shop/goto/airpods/accessories")),
          menuItem("Accessories", appleUrl("/shop/goto/buy_accessories")),
        ],
      },
      {
        title: "Quick Links",
        links: [
          menuItem("Find a Store", appleUrl("/retail/")),
          menuItem("Order Status", appleUrl("/shop/goto/order/list")),
          menuItem("Apple Trade In", appleUrl("/shop/goto/trade_in")),
          menuItem("Ways to Buy", appleUrl("/shop/goto/ways_to_buy")),
          menuItem("Personal Setup", appleUrl("/shop/goto/personal_setup")),
        ],
      },
      {
        title: "Shop Special Stores",
        links: [
          menuItem("Education", appleUrl("/shop/goto/educationrouting")),
          menuItem("Business", appleUrl("/retail/business/")),
        ],
      },
    ],
  },
  Mac: {
    sections: [
      {
        title: "Explore Mac",
        featured: [
          menuItem("Explore All Mac", "/mac"),
          menuItem("MacBook Neo", appleUrl("/macbook-neo/")),
          menuItem("MacBook Air", appleUrl("/macbook-air/")),
          menuItem("MacBook Pro", appleUrl("/macbook-pro/")),
          menuItem("iMac", appleUrl("/imac/")),
          menuItem("Mac mini", appleUrl("/mac-mini/")),
          menuItem("Mac Studio", appleUrl("/mac-studio/")),
          menuItem("Displays", appleUrl("/displays/")),
        ],
        footer: [
          menuItem("Compare Mac", appleUrl("/mac/compare/")),
          menuItem("Switch from PC to Mac", appleUrl("/mac/mac-does-that/")),
        ],
      },
      {
        title: "Shop Mac",
        links: [
          menuItem("Shop Mac", appleUrl("/shop/goto/buy_mac")),
          menuItem("Mac Accessories", appleUrl("/shop/goto/mac/accessories")),
          menuItem("Ways to Buy", appleUrl("/shop/goto/ways_to_buy")),
          menuItem("Personal Setup", appleUrl("/shop/goto/personal_setup")),
        ],
      },
      {
        title: "More from Mac",
        links: [
          menuItem("Mac Support", supportUrl("/mac")),
          menuItem("AppleCare", appleUrl("/applecare/?filter=mac")),
          menuItem("macOS Tahoe", appleUrl("/os/macos/")),
          menuItem("Apple Intelligence", appleUrl("/apple-intelligence/")),
          menuItem("Apps by Apple", appleUrl("/apps/")),
          menuItem("Apple Creator Studio", appleUrl("/apple-creator-studio/")),
          menuItem("Better with iPhone", appleUrl("/macos/continuity/")),
          menuItem("iCloud+", appleUrl("/icloud/")),
          menuItem("Mac for Business", appleUrl("/business/mac/")),
          menuItem("Education", appleUrl("/education/")),
        ],
      },
    ],
  },
  iPad: {
    sections: [
      {
        title: "Explore iPad",
        featured: [
          menuItem("Explore All iPad", "/ipad"),
          menuItem("iPad Pro", appleUrl("/ipad-pro/")),
          menuItem("iPad Air", appleUrl("/ipad-air/")),
          menuItem("iPad", appleUrl("/ipad-11/")),
          menuItem("iPad mini", appleUrl("/ipad-mini/")),
          menuItem("Apple Pencil", appleUrl("/apple-pencil/")),
          menuItem("Keyboards", appleUrl("/ipad-keyboards/")),
        ],
        footer: [menuItem("Compare iPad", appleUrl("/ipad/compare/"))],
      },
      {
        title: "Shop iPad",
        links: [
          menuItem("Shop iPad", appleUrl("/shop/goto/buy_ipad")),
          menuItem("iPad Accessories", appleUrl("/shop/goto/ipad/accessories")),
          menuItem("Ways to Buy", appleUrl("/shop/goto/ways_to_buy")),
          menuItem("Personal Setup", appleUrl("/shop/goto/personal_setup")),
        ],
      },
      {
        title: "More from iPad",
        links: [
          menuItem("iPad Support", supportUrl("/ipad")),
          menuItem("AppleCare", appleUrl("/applecare/?filter=ipad")),
          menuItem("iPadOS 26", appleUrl("/os/ipados/")),
          menuItem("Apple Intelligence", appleUrl("/apple-intelligence/")),
          menuItem("Apps by Apple", appleUrl("/apps/")),
          menuItem("Apple Creator Studio", appleUrl("/apple-creator-studio/")),
          menuItem("iCloud+", appleUrl("/icloud/")),
          menuItem("Education", appleUrl("/education/")),
        ],
      },
    ],
  },
  iPhone: {
    sections: [
      {
        title: "Explore iPhone",
        featured: [
          menuItem("Explore All iPhone", "/iphone"),
          menuItem("iPhone 17 Pro", appleUrl("/iphone-17-pro/")),
          menuItem("iPhone Air", appleUrl("/iphone-air/")),
          menuItem("iPhone 17", appleUrl("/iphone-17/")),
          menuItem("iPhone 17e", appleUrl("/iphone-17e/")),
          menuItem("iPhone 16", appleUrl("/shop/goto/buy_iphone/iphone_16")),
        ],
        footer: [
          menuItem("Compare iPhone", appleUrl("/iphone/compare/")),
          menuItem("Switch from Android", appleUrl("/iphone/switch/")),
        ],
      },
      {
        title: "Shop iPhone",
        links: [
          menuItem("Shop iPhone", appleUrl("/shop/goto/buy_iphone")),
          menuItem(
            "iPhone Accessories",
            appleUrl("/shop/goto/iphone/accessories"),
          ),
          menuItem("Apple Trade In", appleUrl("/shop/goto/trade_in")),
          menuItem("Ways to Buy", appleUrl("/shop/goto/ways_to_buy")),
          menuItem("Personal Setup", appleUrl("/shop/goto/personal_setup")),
        ],
      },
      {
        title: "More from iPhone",
        links: [
          menuItem("iPhone Support", supportUrl("/iphone")),
          menuItem("AppleCare", appleUrl("/applecare/?filter=iphone")),
          menuItem("iOS 26", appleUrl("/os/ios/")),
          menuItem("Apple Intelligence", appleUrl("/apple-intelligence/")),
          menuItem("Apps by Apple", appleUrl("/apps/")),
          menuItem("iPhone Privacy", appleUrl("/privacy/")),
          menuItem("Better with Mac", appleUrl("/macos/continuity/")),
          menuItem("iCloud+", appleUrl("/icloud/")),
          menuItem("Wallet", appleUrl("/wallet/")),
          menuItem("Siri", appleUrl("/siri/")),
        ],
      },
    ],
  },
  Watch: {
    sections: [
      {
        title: "Explore Watch",
        featured: [
          menuItem("Explore All Apple Watch", "/watch"),
          menuItem(
            "Apple Watch Series 11",
            appleUrl("/apple-watch-series-11/"),
          ),
          menuItem("Apple Watch SE 3", appleUrl("/apple-watch-se-3/")),
          menuItem("Apple Watch Ultra 3", appleUrl("/apple-watch-ultra-3/")),
          menuItem("Apple Watch Nike", appleUrl("/apple-watch-nike/")),
        ],
        footer: [
          menuItem("Compare Watch", appleUrl("/watch/compare/")),
          menuItem("Why Apple Watch", appleUrl("/watch/why-apple-watch/")),
        ],
      },
      {
        title: "Shop Watch",
        links: [
          menuItem("Shop Apple Watch", appleUrl("/shop/goto/buy_watch")),
          menuItem("Apple Watch Straps", appleUrl("/shop/goto/watch/bands")),
          menuItem(
            "Apple Watch Accessories",
            appleUrl("/shop/goto/watch/accessories"),
          ),
          menuItem("Ways to Buy", appleUrl("/shop/goto/ways_to_buy")),
          menuItem("Personal Setup", appleUrl("/shop/goto/personal_setup")),
        ],
      },
      {
        title: "More from Watch",
        links: [
          menuItem("Apple Watch Support", supportUrl("/watch")),
          menuItem("AppleCare", appleUrl("/applecare/?filter=watch")),
          menuItem("watchOS 26", appleUrl("/os/watchos/")),
          menuItem(
            "Apple Watch For Your Kids",
            appleUrl("/apple-watch-for-your-kids/"),
          ),
          menuItem("Apps by Apple", appleUrl("/apps/")),
          menuItem("Apple Fitness+", appleUrl("/apple-fitness-plus/")),
        ],
      },
    ],
  },
  AirPods: {
    sections: [
      {
        title: "Explore AirPods",
        featured: [
          menuItem("Explore All AirPods", "/airpods"),
          menuItem("AirPods 4", appleUrl("/airpods-4/")),
          menuItem("AirPods Pro 3", appleUrl("/airpods-pro/")),
          menuItem("AirPods Max 2", appleUrl("/airpods-max/")),
        ],
        footer: [menuItem("Compare AirPods", appleUrl("/airpods/compare/"))],
      },
      {
        title: "Shop AirPods",
        links: [
          menuItem(
            "Shop AirPods",
            appleUrl(
              "/shop/goto/accessories/all_accessories/headphones_speakers/",
            ),
          ),
          menuItem(
            "AirPods Accessories",
            appleUrl("/shop/goto/airpods/accessories"),
          ),
        ],
      },
      {
        title: "More from AirPods",
        links: [
          menuItem("AirPods Support", supportUrl("/airpods")),
          menuItem("AppleCare", appleUrl("/applecare/?filter=headphones")),
          menuItem("Apple Music", appleUrl("/apple-music/")),
          menuItem("Apple Fitness+", appleUrl("/apple-fitness-plus/")),
        ],
      },
    ],
  },
  "TV & Home": {
    sections: [
      {
        title: "Explore TV & Home",
        featured: [
          menuItem("Explore TV & Home", "/tv-home"),
          menuItem("Apple TV 4K", appleUrl("/apple-tv-4k/")),
          menuItem("HomePod", appleUrl("/homepod-2nd-generation/")),
          menuItem("HomePod mini", appleUrl("/homepod-mini/")),
        ],
      },
      {
        title: "Shop TV & Home",
        links: [
          menuItem(
            "Shop Apple TV 4K",
            appleUrl("/shop/goto/buy_tv/apple_tv_4k"),
          ),
          menuItem("Shop HomePod", appleUrl("/shop/goto/buy_homepod/homepod")),
          menuItem(
            "Shop HomePod mini",
            appleUrl("/shop/goto/buy_homepod/homepod_mini"),
          ),
          menuItem("Shop Siri Remote", appleUrl("/shop/goto/product/MW5G3")),
          menuItem(
            "TV & Home Accessories",
            appleUrl("/shop/goto/smart_home/accessories"),
          ),
        ],
      },
      {
        title: "More from TV & Home",
        links: [
          menuItem("Apple TV Support", supportUrl("/apple-tv")),
          menuItem("HomePod Support", supportUrl("/homepod")),
          menuItem("AppleCare for Apple TV", appleUrl("/applecare/?filter=tv")),
          menuItem(
            "AppleCare for HomePod",
            appleUrl("/applecare/?filter=homepod"),
          ),
          menuItem("Apple TV app", appleUrl("/apple-tv-app/")),
          menuItem("Apple TV", appleUrl("/apple-tv/")),
          menuItem("Home app", appleUrl("/home-app/")),
          menuItem("Apple Music", appleUrl("/apple-music/")),
          menuItem("Siri", appleUrl("/siri/")),
          menuItem("AirPlay", appleUrl("/airplay/")),
        ],
      },
    ],
  },
  Entertainment: {
    sections: [
      {
        title: "Explore Entertainment",
        featured: [
          menuItem("Explore Entertainment", "/entertainment"),
          menuItem("Apple One", appleUrl("/apple-one/")),
          menuItem("Apple TV", appleUrl("/apple-tv/")),
          menuItem("Apple Music", appleUrl("/apple-music/")),
          menuItem("Apple Arcade", appleUrl("/apple-arcade/")),
          menuItem("Apple Fitness+", appleUrl("/apple-fitness-plus/")),
          menuItem("Apple Podcasts", appleUrl("/apple-podcasts/")),
          menuItem("Apple Books", appleUrl("/apple-books/")),
          menuItem("App Store", appleUrl("/app-store/")),
        ],
      },
      {
        title: "Support",
        links: [
          menuItem("Apple TV Support", supportUrl("/tv")),
          menuItem("Apple Music Support", supportUrl("/music")),
        ],
      },
    ],
  },
  Accessories: {
    sections: [
      {
        title: "Shop Accessories",
        featured: [
          menuItem("Shop All Accessories", "/accessories"),
          menuItem("Mac", appleUrl("/shop/goto/mac/accessories")),
          menuItem("iPad", appleUrl("/shop/goto/ipad/accessories")),
          menuItem("iPhone", appleUrl("/shop/goto/iphone/accessories")),
          menuItem("Apple Watch", appleUrl("/shop/goto/watch/accessories")),
          menuItem("AirPods", appleUrl("/shop/goto/airpods/accessories")),
          menuItem("TV & Home", appleUrl("/shop/goto/smart_home/accessories")),
        ],
      },
      {
        title: "Explore Accessories",
        links: [
          menuItem(
            "Made by Apple",
            appleUrl("/shop/goto/accessories/all_accessories/made_by_apple"),
          ),
          menuItem(
            "Beats",
            appleUrl("/shop/goto/accessories/all_accessories/beats_featured"),
          ),
          menuItem("AirTag", appleUrl("/airtag/")),
        ],
      },
    ],
  },
  Support: {
    sections: [
      {
        title: "Explore Support",
        featured: [
          menuItem("iPhone", supportUrl("/iphone")),
          menuItem("Mac", supportUrl("/mac")),
          menuItem("iPad", supportUrl("/ipad")),
          menuItem("Watch", supportUrl("/watch")),
          menuItem("AirPods", supportUrl("/airpods")),
          menuItem("Music", supportUrl("/music")),
          menuItem("TV", supportUrl("/tv")),
        ],
        footer: [menuItem("Explore Support", "/support")],
      },
      {
        title: "Get Help",
        links: [
          menuItem("Community", "https://discussions.apple.com/"),
          menuItem("Check Coverage", "https://checkcoverage.apple.com/in/en"),
          menuItem("Genius Bar", appleUrl("/retail/geniusbar/")),
          menuItem("Repair", supportUrl("/repair")),
        ],
      },
      {
        title: "Helpful Topics",
        links: [
          menuItem("Get AppleCare", appleUrl("/applecare/")),
          menuItem("Apple Account and Password", supportUrl("/apple-account")),
          menuItem("Billing & Subscriptions", supportUrl("/billing")),
          menuItem("Accessibility", supportUrl("/accessibility")),
        ],
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
  { label: "AirPods", href: "/airpods" },
  { label: "TV & Home", href: "/tv-home" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Accessories", href: "/accessories" },
  { label: "Support", href: "/support" },
];

const appleSearchHref = "https://www.apple.com/in/search/";
const mobileQuickLinks = [
  menuItem("Shop the Latest", "/store"),
  menuItem("Find a Store", appleUrl("/retail/")),
  menuItem("Order Status", appleUrl("/shop/goto/order/list")),
  menuItem("Get Support", "/support"),
];

function getMenuItemLabel(item) {
  return typeof item === "string" ? item : item.label;
}

function getMenuItemHref(item) {
  return typeof item === "string" ? appleUrl("/") : item.href;
}

function getMenuSectionItems(section) {
  return [
    ...(section.featured ?? []),
    ...(section.links ?? []),
    ...(section.footer ?? []),
  ];
}

function isExternalHref(href) {
  return href.startsWith("http");
}

function NavigationItemLink({ href, className, children, onClick, ...props }) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [renderedMenu, setRenderedMenu] = useState(null);
  const [isMegaVisible, setIsMegaVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = useRef(null);
  const closeDelayTimerRef = useRef(null);
  const openFrameRef = useRef(null);

  const clearDesktopTimers = () => {
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
  };

  const closeMenusImmediately = () => {
    setMenuOpen(false);
    setMobileExpandedMenu(null);
    clearDesktopTimers();
    setActiveMenu(null);
    setIsMegaVisible(false);
    setRenderedMenu(null);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (!menuOpen) {
      setMobileExpandedMenu(null);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileExpandedMenu(null);

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

    setActiveMenu(null);
    setIsMegaVisible(false);
    setRenderedMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileExpandedMenu(null);

        clearDesktopTimers();

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
      clearDesktopTimers();
    };
  }, []);

  const openDesktopMenu = (label) => {
    if (window.innerWidth <= 768) {
      return;
    }

    const isOpeningFresh = !renderedMenu;

    clearDesktopTimers();

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

    clearDesktopTimers();

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

  const toggleMobileMenu = (label) => {
    setMobileExpandedMenu((currentLabel) =>
      currentLabel === label ? null : label,
    );
  };

  const activeMenuData = renderedMenu ? desktopMenus[renderedMenu] : null;
  const desktopMenuVisible = Boolean(renderedMenu);

  useEffect(() => {
    const shouldBlurContent = menuOpen || desktopMenuVisible;
    document.body.classList.toggle("apple-nav-overlay-open", shouldBlurContent);

    return () => {
      document.body.classList.remove("apple-nav-overlay-open");
    };
  }, [menuOpen, desktopMenuVisible]);

  return (
    <header
      className={`apple-nav-shell${menuOpen ? " apple-nav-shell-open" : ""}${desktopMenuVisible ? " apple-nav-shell-desktop-open" : ""}${isScrolled ? " apple-nav-shell-scrolled" : ""}`}
      onMouseLeave={scheduleDesktopMenuClose}
    >
      <nav className="apple-nav" aria-label="Primary">
        <div className="apple-nav-inner">
          <button
            type="button"
            className="apple-nav-hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="apple-mobile-nav"
          >
            <span />
            <span />
          </button>

          <Link
            to="/"
            className="apple-nav-logo"
            aria-label="Apple"
            onClick={closeMenusImmediately}
          >
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
                {isExternalHref(link.href) ? (
                  <NavigationItemLink
                    href={link.href}
                    onFocus={() => openDesktopMenu(link.label)}
                    aria-expanded={activeMenu === link.label}
                    aria-haspopup="true"
                    aria-controls="apple-nav-mega-menu"
                    className="apple-nav-link"
                  >
                    {link.label}
                  </NavigationItemLink>
                ) : (
                  <NavLink
                    to={link.href}
                    onFocus={() => openDesktopMenu(link.label)}
                    aria-expanded={activeMenu === link.label}
                    aria-haspopup="true"
                    aria-controls="apple-nav-mega-menu"
                    className={({ isActive }) =>
                      `apple-nav-link${isActive ? " apple-nav-link-active" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="apple-nav-icons">
            <a
              href={appleSearchHref}
              aria-label="Search"
              className="apple-nav-icon-link"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenusImmediately}
            >
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
            <Link
              to="/store"
              aria-label="Shopping Bag"
              className="apple-nav-icon-link"
              onClick={closeMenusImmediately}
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
            </Link>
          </div>
        </div>
      </nav>

      {activeMenuData && (
        <div
          id="apple-nav-mega-menu"
          className={`apple-nav-mega${isMegaVisible ? " apple-nav-mega-open" : " apple-nav-mega-closing"}`}
          aria-hidden={!isMegaVisible}
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
                    {section.featured.map((item) => {
                      const label = getMenuItemLabel(item);
                      const href = getMenuItemHref(item);

                      return (
                        <NavigationItemLink
                          key={`${renderedMenu}-${section.title}-${label}`}
                          href={href}
                          className="apple-nav-mega-featured-link"
                          onClick={closeMenusImmediately}
                        >
                          {label}
                        </NavigationItemLink>
                      );
                    })}
                  </div>
                )}
                {section.links && (
                  <div className="apple-nav-mega-link-list">
                    {section.links.map((item) => {
                      const label = getMenuItemLabel(item);
                      const href = getMenuItemHref(item);

                      return (
                        <NavigationItemLink
                          key={`${renderedMenu}-${section.title}-${label}`}
                          href={href}
                          className="apple-nav-mega-link"
                          onClick={closeMenusImmediately}
                        >
                          {label}
                        </NavigationItemLink>
                      );
                    })}
                  </div>
                )}
                {section.footer && (
                  <div className="apple-nav-mega-footer-list">
                    {section.footer.map((item) => {
                      const label = getMenuItemLabel(item);
                      const href = getMenuItemHref(item);

                      return (
                        <NavigationItemLink
                          key={`${renderedMenu}-${section.title}-${label}`}
                          href={href}
                          className="apple-nav-mega-footer-link"
                          onClick={closeMenusImmediately}
                        >
                          {label}
                        </NavigationItemLink>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!desktopMenuVisible && !menuOpen && (
        <div className="apple-nav-promo">
          <span>
            Get up to 6 months of No Cost EMI plus up to Rs. 10000 instant
            cashback on selected products with eligible cards.
          </span>
          <Link to="/store" onClick={closeMenusImmediately}>
            Shop
          </Link>
        </div>
      )}

      {menuOpen && (
        <button
          type="button"
          className="apple-nav-mobile-backdrop"
          aria-label="Close menu overlay"
          onClick={closeMenusImmediately}
        />
      )}

      {menuOpen && (
        <div
          id="apple-mobile-nav"
          className="apple-nav-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
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
            <NavigationItemLink
              href={appleSearchHref}
              className="apple-nav-mobile-search-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="apple-nav-mobile-search-label">
                Search apple.com
              </span>
              <span className="apple-nav-mobile-search-copy">
                Products, support, and stories
              </span>
            </NavigationItemLink>
          </div>

          <div className="apple-nav-mobile-sections">
            {navLinks.map((link) => {
              const isExpanded = mobileExpandedMenu === link.label;
              const sectionId = `apple-mobile-section-${link.label
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;
              const mobileMenuData = desktopMenus[link.label];

              return (
                <section
                  key={link.label}
                  className={`apple-nav-mobile-section${isExpanded ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="apple-nav-mobile-section-toggle"
                    onClick={() => toggleMobileMenu(link.label)}
                    aria-expanded={isExpanded}
                    aria-controls={sectionId}
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${link.label} section`}
                  >
                    <span className="apple-nav-mobile-section-label">
                      {link.label}
                    </span>
                    <span
                      className="apple-nav-mobile-section-icon"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </button>

                  <div
                    id={sectionId}
                    className="apple-nav-mobile-section-panel"
                    aria-hidden={!isExpanded}
                  >
                    <div className="apple-nav-mobile-section-panel-inner">
                      <NavigationItemLink
                        href={link.href}
                        className="apple-nav-mobile-overview-link"
                        onClick={closeMenusImmediately}
                        tabIndex={isExpanded ? 0 : -1}
                      >
                        Browse {link.label}
                      </NavigationItemLink>

                      {mobileMenuData?.sections.map((section) => (
                        <div
                          key={`${link.label}-${section.title}`}
                          className="apple-nav-mobile-group"
                        >
                          <p className="apple-nav-mobile-group-title">
                            {section.title}
                          </p>

                          <div className="apple-nav-mobile-group-links">
                            {getMenuSectionItems(section).map((item) => {
                              const label = getMenuItemLabel(item);
                              const href = getMenuItemHref(item);

                              return (
                                <NavigationItemLink
                                  key={`${link.label}-${section.title}-${label}`}
                                  href={href}
                                  className="apple-nav-mobile-sublink"
                                  onClick={closeMenusImmediately}
                                  tabIndex={isExpanded ? 0 : -1}
                                >
                                  {label}
                                </NavigationItemLink>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="apple-nav-mobile-quicklinks">
            <p className="apple-nav-mobile-quicklinks-title">Quick Links</p>

            <div className="apple-nav-mobile-quicklinks-grid">
              {mobileQuickLinks.map((item) => (
                <NavigationItemLink
                  key={item.label}
                  href={item.href}
                  className="apple-nav-mobile-quicklink"
                  onClick={closeMenusImmediately}
                >
                  {item.label}
                </NavigationItemLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
