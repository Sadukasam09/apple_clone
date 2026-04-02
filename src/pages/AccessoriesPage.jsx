import { useEffect, useState } from "react";
import "./AccessoriesPage.css";

const localNavLinks = [
  { id: "search", label: "Search" },
  { id: "iphone-accessories", label: "Featured iPhone Accessories" },
  { id: "watch-straps", label: "Apple Watch Straps" },
  { id: "ipad-accessories", label: "Featured iPad Accessories" },
  { id: "mac-accessories", label: "Featured Mac Accessories" },
  { id: "sound-essentials", label: "Sound Essentials" },
  { id: "more-to-explore", label: "More to Explore" },
];

const browserProductLinks = [
  {
    label: "Mac",
    href: "https://www.apple.com/in/shop/mac/accessories",
    icon: "mac",
  },
  {
    label: "iPad",
    href: "https://www.apple.com/in/shop/ipad/accessories",
    icon: "ipad",
  },
  {
    label: "iPhone",
    href: "https://www.apple.com/in/shop/iphone/accessories",
    icon: "iphone",
  },
  {
    label: "Watch",
    href: "https://www.apple.com/in/shop/watch/accessories",
    icon: "watch",
  },
  {
    label: "AirPods",
    href: "https://www.apple.com/in/shop/airpods/accessories",
    icon: "airpods",
  },
  {
    label: "TV & Home",
    href: "https://www.apple.com/in/shop/smart-home/accessories",
    icon: "tv",
  },
  {
    label: "Beats",
    href: "https://www.apple.com/in/shop/accessories/all/beats-featured",
    icon: "beats",
  },
];

const browserCategoryLinks = [
  {
    label: "New Arrivals",
    href: "https://www.apple.com/in/shop/accessories/all/new-arrivals",
    icon: "spark",
  },
  {
    label: "Cases & Protection",
    href: "https://www.apple.com/in/shop/accessories/all/cases-protection",
    icon: "case",
  },
  {
    label: "Charging Essentials",
    href: "https://www.apple.com/in/shop/accessories/all/charging-essentials",
    icon: "charge",
  },
  {
    label: "MagSafe",
    href: "https://www.apple.com/in/shop/accessories/all/magsafe",
    icon: "magsafe",
  },
  {
    label: "Headphones & Speakers",
    href: "https://www.apple.com/in/shop/accessories/all/headphones-speakers",
    icon: "audio",
  },
  {
    label: "Apple Watch Straps",
    href: "https://www.apple.com/in/shop/accessories/all/bands",
    icon: "strap",
  },
  {
    label: "Home Office",
    href: "https://www.apple.com/in/shop/accessories/all/home-office",
    icon: "home",
  },
  {
    label: "Smart Home Accessories",
    href: "https://www.apple.com/in/shop/accessories/all/homekit",
    icon: "smart-home",
  },
];

const iphoneAccessories = [
  {
    name: "iPhone 17 Pro Silicone Case with MagSafe - Bright Guava",
    price: "MRP ₹4900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHW04?wid=532&hei=582&fmt=png-alpha&.v=1771521942518",
    swatches: [
      "#ff6f8c",
      "#ffe7b2",
      "#f3edb8",
      "#52667e",
      "#6d5549",
      "#8a90bf",
      "plus",
    ],
    badge: "New",
    href: "https://www.apple.com/in/shop/product/mhw04zm/a/iphone-17-pro-silicone-case-with-magsafe-bright-guava",
    keywords: ["iphone", "case", "guava", "magsafe"],
  },
  {
    name: "Crossbody Strap - Bright Guava",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHYX4?wid=532&hei=582&fmt=png-alpha&.v=1770738257934",
    swatches: [
      "#ffd7d7",
      "#ff7a94",
      "#d5ea7a",
      "#627ca5",
      "#b9c0c8",
      "#cfd1d3",
      "plus",
    ],
    badge: "New",
    href: "https://www.apple.com/in/shop/product/mhyx4zm/a/crossbody-strap-bright-guava",
    keywords: ["iphone", "strap", "guava"],
  },
  {
    name: "MagSafe Charger (1m)",
    price: "MRP ₹4500.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?wid=532&hei=582&fmt=png-alpha&.v=1755025001125",
    href: "https://www.apple.com/in/shop/product/mgd74zm/a/magsafe-charger-1m",
    keywords: ["iphone", "magsafe", "charger"],
  },
  {
    name: "iPhone Air Case with MagSafe - Shadow",
    price: "MRP ₹4900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGH24?wid=532&hei=582&fmt=png-alpha&.v=1757447274816",
    swatches: ["#f2f3f4", "#3e4046"],
    href: "https://www.apple.com/in/shop/product/mgh24zm/a/iphone-air-case-with-magsafe-shadow",
    keywords: ["iphone", "air", "shadow", "case"],
  },
  {
    name: "Beats iPhone 17 Pro Kickstand Case with MagSafe and Camera Control - Pebble Pink",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGY84_AV4?wid=532&hei=582&fmt=png-alpha&.v=1757941441066",
    swatches: ["#f1a3b8", "#88898f"],
    href: "https://www.apple.com/in/shop/product/mgy84ll/a/beats-iphone-17-pro-kickstand-case-with-magsafe-and-camera-control-pebble-pink",
    keywords: ["beats", "iphone", "kickstand", "pink"],
  },
  {
    name: "Beats iPhone Air Case with MagSafe and Camera Control - Lime Stone",
    price: "MRP ₹4500.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGJU4?wid=532&hei=582&fmt=png-alpha&.v=1755254077480",
    swatches: ["#b9be7c"],
    href: "https://www.apple.com/in/shop/product/mgju4ll/a/beats-iphone-air-case-with-magsafe-and-camera-control-lime-stone",
    keywords: ["beats", "iphone", "air", "lime"],
  },
];

const watchStyleAccessories = [
  {
    name: "Powerbeats Pro 2 - Nike Special Edition",
    price: "MRP ₹29900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ2D4?wid=532&hei=582&fmt=png-alpha&.v=1769620333321",
    badge: "New",
    href: "https://www.apple.com/in/shop/product/mj2d4zm/a/powerbeats-pro-2-nike-special-edition",
    keywords: ["beats", "nike", "powerbeats", "sport"],
  },
  {
    name: "46mm Volt Splash Nike Sport Loop",
    price: "MRP ₹4500.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD24_AV1?wid=532&hei=582&fmt=png-alpha&.v=1755127736963",
    swatches: ["#ff8257", "#6b7698", "#f6d8ba", "#85878f", "#a9bc74"],
    href: "https://www.apple.com/in/shop/product/mgd24zm/a/46mm-volt-splash-nike-sport-loop",
    keywords: ["watch", "nike", "sport loop", "volt"],
  },
  {
    name: "Beats iPhone 17 Pro Rugged Case with MagSafe and Camera Control - Everest Black",
    price: "MRP ₹7900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGJM4?wid=532&hei=582&fmt=png-alpha&.v=1755191061678",
    swatches: ["#ff8c5b", "#8b938e", "#b6afa5", "#626264"],
    href: "https://www.apple.com/in/shop/product/mgjm4ll/a/beats-iphone-17-pro-rugged-case-with-magsafe-and-camera-control-everest-black",
    keywords: ["beats", "iphone", "rugged case", "black"],
  },
  {
    name: "46mm Veiled Grey Nike Sport Loop",
    price: "MRP ₹4500.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD44?wid=532&hei=582&fmt=png-alpha&.v=1755127735752",
    swatches: ["#1f2328", "#f29caf", "#6686e0", "#7d7f85", "#b9c153"],
    href: "https://www.apple.com/in/shop/product/mgd44zm/a/46mm-veiled-grey-nike-sport-loop",
    keywords: ["watch", "nike", "veiled grey", "sport loop"],
  },
  {
    name: "Powerbeats Pro 2 - High-Performance Earbuds - Quick Sand",
    price: "MRP ₹29900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733_AV4?wid=532&hei=582&fmt=png-alpha&.v=1737155847640",
    href: "https://www.apple.com/in/shop/product/mx733zm/a/powerbeats-pro-2-high-performance-earbuds-quick-sand",
    keywords: ["beats", "quick sand", "earbuds"],
  },
  {
    name: "Beats iPhone 17 Pro Max Rugged Case with MagSafe and Camera Control - Sierra Orange",
    price: "MRP ₹7900.00 (Incl. of all taxes)",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGJC4?wid=532&hei=582&fmt=png-alpha&.v=1759261110054",
    swatches: ["#d56a3b", "#8b938e", "#b6afa5", "#626264"],
    href: "https://www.apple.com/in/shop/product/mgjc4ll/a/beats-iphone-17-pro-max-rugged-case-with-magsafe-and-camera-control-sierra-orange",
    keywords: ["beats", "rugged case", "orange"],
  },
];

const additionalSections = [
  {
    id: "ipad-accessories",
    title: "Featured iPad Accessories",
    linkLabel: "Shop all iPad accessories",
    href: "https://www.apple.com/in/shop/ipad/accessories",
    items: [
      {
        name: "Apple Pencil Pro",
        price: "MRP ₹11900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-pencil-pro-select-202405?wid=532&hei=582&fmt=png-alpha&.v=1713986907871",
        href: "https://www.apple.com/in/shop/product/mx2d3zm/a/apple-pencil-pro",
        keywords: ["ipad", "pencil"],
      },
      {
        name: 'Magic Keyboard for iPad Air 11" (M4) - Black',
        price: "MRP ₹26900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGYX4?wid=532&hei=582&fmt=png-alpha&.v=1758796841232",
        swatches: ["#1d1d1f"],
        href: "https://www.apple.com/in/shop/product/mgyx4hn/a/magic-keyboard-for-ipad-air-11-m4-us-english-black",
        keywords: ["ipad", "keyboard"],
      },
      {
        name: "Smart Folio for iPad Pro 11-inch",
        price: "MRP ₹8500.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/smart-folio-ipad-pro-11-M4-202405?wid=532&hei=582&fmt=png-alpha&.v=1713386130559",
        href: "https://www.apple.com/in/shop/product/mw993zm/a/smart-folio-for-ipad-pro-11-inch-m4-black",
        keywords: ["ipad", "folio"],
      },
      {
        name: "USB-C Apple Pencil",
        price: "MRP ₹7900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUWA3?wid=532&hei=582&fmt=png-alpha&.v=1695933856693",
        href: "https://www.apple.com/in/shop/product/muwa3zm/a/apple-pencil-usb-c",
        keywords: ["ipad", "pencil"],
      },
    ],
  },
  {
    id: "mac-accessories",
    title: "Featured Mac Accessories",
    linkLabel: "Shop all Mac accessories",
    href: "https://www.apple.com/in/shop/mac/accessories",
    items: [
      {
        name: "Magic Keyboard with Touch ID",
        price: "MRP ₹17500.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK293?wid=532&hei=582&fmt=png-alpha&.v=1628010471000",
        href: "https://www.apple.com/in/shop/product/mk293hn/a/magic-keyboard-with-touch-id-for-mac-models-with-apple-silicon-us-english",
        keywords: ["mac", "keyboard"],
      },
      {
        name: "Magic Mouse",
        price: "MRP ₹8500.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK2E3?wid=532&hei=582&fmt=png-alpha&.v=1626468075000",
        href: "https://www.apple.com/in/shop/product/mk2e3zm/a/magic-mouse-white-multi-touch-surface",
        keywords: ["mac", "mouse"],
      },
      {
        name: "Magic Trackpad",
        price: "MRP ₹14500.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK2D3?wid=532&hei=582&fmt=png-alpha&.v=1626468075000",
        href: "https://www.apple.com/in/shop/product/mk2d3zm/a/magic-trackpad-white-multi-touch-surface",
        keywords: ["mac", "trackpad"],
      },
      {
        name: "Studio Display",
        price: "MRP ₹189900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/studio-display-og-202203?wid=532&hei=582&fmt=png-alpha&.v=1646957000000",
        href: "https://www.apple.com/in/studio-display/",
        keywords: ["mac", "display"],
      },
    ],
  },
  {
    id: "sound-essentials",
    title: "Sound Essentials",
    linkLabel: "Shop Headphones and Speakers",
    href: "https://www.apple.com/in/shop/accessories/all/headphones-speakers",
    items: [
      {
        name: "AirPods Max",
        price: "MRP ₹59900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=532&hei=582&fmt=png-alpha&.v=1724927042498",
        href: "https://www.apple.com/in/airpods-max/",
        keywords: ["airpods", "headphones"],
      },
      {
        name: "AirPods 4 with Active Noise Cancellation",
        price: "MRP ₹17900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=532&hei=582&fmt=png-alpha&.v=1725502639798",
        href: "https://www.apple.com/in/airpods-4/",
        keywords: ["airpods", "earbuds"],
      },
      {
        name: "HomePod mini",
        price: "MRP ₹10900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-mini-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617495683000",
        href: "https://www.apple.com/in/homepod-mini/",
        keywords: ["homepod", "speaker"],
      },
      {
        name: "Beats Pill",
        price: "MRP ₹16900.00 (Incl. of all taxes)",
        image:
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/beats-pill-select-black-202406?wid=532&hei=582&fmt=png-alpha&.v=1717096384304",
        href: "https://www.apple.com/in/shop/product/mu7d3pa/a/beats-pill-wireless-bluetooth-speaker",
        keywords: ["beats", "speaker"],
      },
    ],
  },
];

const moreToExplore = [
  {
    title: "AirTag",
    copy: "Keep track of keys, bags and everything in between.",
    href: "https://www.apple.com/in/shop/goto/buy_airtag/airtag",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104?wid=800&hei=800&fmt=jpeg&qlt=90",
  },
  {
    title: "MagSafe",
    copy: "Snap-on charging, wallets and mounts that just click.",
    href: "https://www.apple.com/in/shop/accessories/all/magsafe",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/magsafe-family-202403?wid=800&hei=800&fmt=jpeg&qlt=90",
  },
  {
    title: "Power & Cables",
    copy: "Every adapter, cable and charger you need for your Apple setup.",
    href: "https://www.apple.com/in/shop/accessories/all/power-cables",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/chargers-cables-card-202402?wid=800&hei=800&fmt=jpeg&qlt=90",
  },
  {
    title: "Smart Home Accessories",
    copy: "Sensors, cameras and lighting designed to work beautifully with Home.",
    href: "https://www.apple.com/in/shop/smart-home/accessories",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/smart-home-accessories-card-202403?wid=800&hei=800&fmt=jpeg&qlt=90",
  },
];

const serviceCards = [
  {
    title: "Free delivery and pickup",
    copy: "Get free delivery or pick up at your Apple Store.",
    href: "https://www.apple.com/in/shop/shipping-pickup",
    linkLabel: "Learn more",
  },
  {
    title: "Ways to Buy",
    copy: "Buy the way that's right for you.",
    href: "https://www.apple.com/in/shop/ways-to-buy",
    linkLabel: "Learn more about financing",
  },
  {
    title: "Enjoy Apple Music on us",
    copy: "Get 3 months free with selected Beats products.*",
    href: "https://offers.applemusic.apple/en-in/new-device-offer?itscg=10000&itsct=hwb_medusa_aso_beats_landing",
    linkLabel: "Check eligibility",
  },
];

const footnotes = [
  "Certain products are only available at selected resellers.",
  "New subscribers only. ₹99.00/month after trial. Offer is available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Plan automatically renews until cancelled. Restrictions and terms apply.",
  "‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).",
];

function useCardsPerView() {
  const getCardsPerView = () => {
    if (typeof window === "undefined") {
      return 3;
    }

    if (window.innerWidth <= 734) {
      return 1;
    }

    if (window.innerWidth <= 1068) {
      return 2;
    }

    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return cardsPerView;
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle
        cx="8.5"
        cy="8.5"
        r="5.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m12.5 12.5 4.2 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="m4.5 6 3.5 4 3.5-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ direction = "right" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d={
          direction === "right"
            ? "m7 4.5 5.5 5.5-5.5 5.5"
            : "m13 4.5-5.5 5.5 5.5 5.5"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrowserIcon({ type }) {
  switch (type) {
    case "mac":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect
            x="14"
            y="18"
            width="36"
            height="22"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <path
            d="M10 46h44"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ipad":
    case "iphone":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect
            x="22"
            y="11"
            width="20"
            height="42"
            rx={type === "ipad" ? 4 : 5}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <path
            d="M30 16h4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "watch":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect
            x="26"
            y="8"
            width="12"
            height="10"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <rect
            x="20"
            y="18"
            width="24"
            height="28"
            rx="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <rect
            x="26"
            y="46"
            width="12"
            height="10"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
        </svg>
      );
    case "airpods":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M24 18a8 8 0 0 0-8 8v8a5 5 0 0 0 5 5h2v7a3 3 0 0 0 6 0V26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 18a8 8 0 0 1 8 8v8a5 5 0 0 1-5 5h-1v7a3 3 0 0 1-6 0V26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tv":
      return <span className="acc-browser-wordmark">tv</span>;
    case "beats":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="20" fill="currentColor" />
          <path d="M27 20v24h8.5a7.5 7.5 0 0 0 0-15H27Z" fill="#fff" />
          <path d="M35 29h-4v7h4a3.5 3.5 0 1 0 0-7Z" fill="currentColor" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M32 14 36 28l14 4-14 4-4 14-4-14-14-4 14-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "case":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect
            x="18"
            y="10"
            width="28"
            height="44"
            rx="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <circle cx="32" cy="19" r="2" fill="currentColor" />
        </svg>
      );
    case "charge":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M28 12h8v16h8L24 52l8-20h-8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "magsafe":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle
            cx="32"
            cy="32"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <path
            d="M32 16v-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "audio":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M20 37a10 10 0 1 1 10-10v17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 37a10 10 0 1 0-10-10v17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "strap":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M26 8h22l4 12H22Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path
            d="M22 20h20l-4 36H26Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M14 30 32 15l18 15v20h24Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path
            d="M26 50V34h22v16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "smart-home":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M32 10 50 24v26h24V24Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <circle
            cx="32"
            cy="35"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
        </svg>
      );
    default:
      return null;
  }
}

function ProductCard({ item }) {
  return (
    <a
      className="acc-pinwheel-card"
      href={item.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="acc-pinwheel-image-wrap">
        <img src={item.image} alt={item.name} />
      </div>
      {item.swatches?.length ? (
        <div className="acc-pinwheel-swatches" aria-hidden="true">
          {item.swatches.map((swatch, index) =>
            swatch === "plus" ? (
              <span
                key={`${item.name}-${index}`}
                className="acc-swatch acc-swatch-more"
              >
                +
              </span>
            ) : (
              <span
                key={`${item.name}-${index}`}
                className="acc-swatch"
                style={{ backgroundColor: swatch }}
              />
            ),
          )}
        </div>
      ) : (
        <div
          className="acc-pinwheel-swatches acc-pinwheel-swatches-empty"
          aria-hidden="true"
        />
      )}
      {item.badge ? (
        <p className="acc-pinwheel-badge">{item.badge}</p>
      ) : (
        <div className="acc-pinwheel-badge-spacer" />
      )}
      <h4>{item.name}</h4>
      <p>{item.price}</p>
    </a>
  );
}

function PinwheelSection({
  id,
  sectionHeading,
  title,
  linkLabel,
  href,
  items,
  cardsPerView,
  query,
  linkPlacement = "bottom",
}) {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = normalizedQuery
    ? items.filter((item) => {
        const haystack =
          `${item.name} ${(item.keywords || []).join(" ")}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : items;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [cardsPerView, normalizedQuery]);

  const maxIndex = Math.max(filteredItems.length - cardsPerView, 0);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  if (!filteredItems.length) {
    return null;
  }

  const visibleItems = filteredItems.slice(index, index + cardsPerView);
  const dotCount = maxIndex + 1;

  return (
    <section id={id} className="acc-pinwheel-section">
      <div className="acc-content-width">
        {sectionHeading ? (
          <h2 className="acc-pinwheel-superheading">{sectionHeading}</h2>
        ) : null}
        {linkPlacement === "top" ? (
          <a
            className="acc-pinwheel-link acc-pinwheel-link-top"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {linkLabel} &rsaquo;
          </a>
        ) : null}
        <h3 className="acc-pinwheel-title">{title}</h3>
        <div className="acc-pinwheel-shell">
          {index > 0 ? (
            <button
              type="button"
              className="acc-pinwheel-arrow acc-pinwheel-arrow-left"
              onClick={() => setIndex((current) => Math.max(current - 1, 0))}
              aria-label={`Previous ${title}`}
            >
              <ArrowIcon direction="left" />
            </button>
          ) : null}
          {index < maxIndex ? (
            <button
              type="button"
              className="acc-pinwheel-arrow acc-pinwheel-arrow-right"
              onClick={() =>
                setIndex((current) => Math.min(current + 1, maxIndex))
              }
              aria-label={`Next ${title}`}
            >
              <ArrowIcon direction="right" />
            </button>
          ) : null}
          <div className="acc-pinwheel-track">
            {visibleItems.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </div>
        <div className="acc-pinwheel-dots" aria-hidden="true">
          {Array.from({ length: dotCount }).map((_, dotIndex) => (
            <span
              key={`${title}-${dotIndex}`}
              className={`acc-pinwheel-dot ${dotIndex === index ? "is-active" : ""}`}
            />
          ))}
        </div>
        {linkPlacement === "bottom" ? (
          <a
            className="acc-pinwheel-link acc-pinwheel-link-bottom"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {linkLabel} &rsaquo;
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default function AccessoriesPage() {
  const cardsPerView = useCardsPerView();
  const [activeBrowserTab, setActiveBrowserTab] = useState("product");
  const [searchQuery, setSearchQuery] = useState("");

  const tabItems =
    activeBrowserTab === "product" ? browserProductLinks : browserCategoryLinks;

  const visibleProductSectionCount = [
    iphoneAccessories,
    watchStyleAccessories,
    ...additionalSections.map((section) => section.items),
  ]
    .flat()
    .filter((item) => {
      const haystack =
        `${item.name} ${(item.keywords || []).join(" ")}`.toLowerCase();
      return haystack.includes(searchQuery.trim().toLowerCase());
    }).length;

  return (
    <div className="acc-page">
      <nav className="acc-localnav" aria-label="Accessories local navigation">
        <div className="acc-content-width acc-localnav-inner">
          <span className="acc-localnav-title">Accessories</span>
          <details className="acc-localnav-menu">
            <summary>
              Browse all
              <ChevronIcon />
            </summary>
            <div className="acc-localnav-flyout">
              {localNavLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </nav>

      <section className="acc-hero">
        <div className="acc-content-width">
          <div className="acc-hero-copy">
            <p className="acc-hero-eyebrow">Accessories</p>
            <h2>Meet your match.</h2>
            <p>
              The accessories you love. In a new mix of colours and textures.
            </p>
            <div className="acc-hero-links">
              <a
                href="https://www.apple.com/in/shop/iphone/accessories"
                target="_blank"
                rel="noreferrer"
              >
                Shop all iPhone accessories &rsaquo;
              </a>
              <a
                href="https://www.apple.com/in/shop/watch/bands"
                target="_blank"
                rel="noreferrer"
              >
                Shop all Apple Watch straps &rsaquo;
              </a>
            </div>
          </div>
          <div className="acc-hero-media">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/aalp-accessories-header-202603?wid=2880&hei=960&fmt=png-alpha&.v=cXVFMVFCS1JoYzFoR295K2ZIQXBab2FRaGhIb1Q2ZGREYTZCWVhxaE1xc1BKb3FGVGIrRVd2UlBKeHJydWNJVW15d1FhSDJ0bkR0ZGZtUjZJNmFveFFSQks5VVp2NS91MTcxZVhWZSsxem8"
              alt="Apple accessories assortment"
            />
          </div>
        </div>
      </section>

      <section id="search" className="acc-browser-section">
        <div className="acc-content-width acc-browser-inner">
          <h2>Find the accessories you're looking for.</h2>
          <label className="acc-search-field" htmlFor="accessory-search">
            <SearchIcon />
            <input
              id="accessory-search"
              type="search"
              placeholder="Search accessories"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>

          <div
            className="acc-browser-tabs"
            role="tablist"
            aria-label="Accessory browser tabs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeBrowserTab === "product"}
              className={`acc-browser-tab ${activeBrowserTab === "product" ? "is-active" : ""}`}
              onClick={() => setActiveBrowserTab("product")}
            >
              Browse by Product
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeBrowserTab === "category"}
              className={`acc-browser-tab ${activeBrowserTab === "category" ? "is-active" : ""}`}
              onClick={() => setActiveBrowserTab("category")}
            >
              Browse by Category
            </button>
          </div>

          <div className="acc-browser-grid">
            {tabItems.map((item) => (
              <a
                key={item.label}
                className="acc-browser-item"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="acc-browser-icon">
                  <BrowserIcon type={item.icon} />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {searchQuery.trim() && !visibleProductSectionCount ? (
            <p className="acc-search-empty">
              No featured accessories match your search yet.
            </p>
          ) : null}
        </div>
      </section>

      <PinwheelSection
        id="iphone-accessories"
        title="Featured iPhone Accessories"
        linkLabel="Shop all iPhone accessories"
        href="https://www.apple.com/in/shop/iphone/accessories"
        items={iphoneAccessories}
        cardsPerView={cardsPerView}
        query={searchQuery}
      />

      <PinwheelSection
        id="watch-straps"
        sectionHeading="Apple Watch Straps"
        title="Sport with style."
        linkLabel="Shop all Watch straps"
        href="https://www.apple.com/in/shop/watch/bands"
        items={watchStyleAccessories}
        cardsPerView={cardsPerView}
        query={searchQuery}
        linkPlacement="top"
      />

      {additionalSections.map((section) => (
        <PinwheelSection
          key={section.id}
          id={section.id}
          title={section.title}
          linkLabel={section.linkLabel}
          href={section.href}
          items={section.items}
          cardsPerView={cardsPerView}
          query={searchQuery}
        />
      ))}

      <section id="more-to-explore" className="acc-more-section">
        <div className="acc-content-width">
          <h2 className="acc-pinwheel-superheading">More to Explore</h2>
          <div className="acc-more-grid">
            {moreToExplore.map((item) => (
              <a
                key={item.title}
                className="acc-more-card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="acc-more-media">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="acc-more-copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span>Learn more &rsaquo;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="acc-benefits-section">
        <div className="acc-content-width acc-benefits-grid">
          {serviceCards.map((card) => (
            <article key={card.title} className="acc-benefit-card">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <a href={card.href} target="_blank" rel="noreferrer">
                {card.linkLabel} &rsaquo;
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="acc-footnotes">
        <div className="acc-content-width">
          {footnotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
