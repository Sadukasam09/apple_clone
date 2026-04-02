import { useEffect, useRef, useState } from "react";

import "./EntertainmentPage.css";

const appleOneBannerLogo =
  "https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/logo_apple_one__cftfcy53dtsi_large.png";
const appleOneRouteLogo =
  "https://www.apple.com/v/services/j/images/services/overview/apple-one/apple_services_apple_one__b80olquewa2u_large.png";
const appleOneServicesLogos =
  "https://www.apple.com/in/services/images/services/overview/apple-one/apple_services_logos__egjjf8y4n4sy_large.png";

const serviceIcons = {
  tv: "https://www.apple.com/v/services/j/images/services/overview/services/apple_tv_icon__bvibg7x6ma1y_large.png",
  music:
    "https://www.apple.com/v/services/j/images/services/overview/services/music_icon__eeojpjw8ldiu_large.png",
  arcade:
    "https://www.apple.com/v/services/j/images/services/overview/services/apple_arcade_icon__dui73v827lqq_large.png",
  fitness:
    "https://www.apple.com/v/services/j/images/services/overview/services/activity_icon__euwrtxxxeqky_large.png",
  podcasts:
    "https://www.apple.com/v/services/j/images/services/overview/services/podcast_icon__gdo1h9k9z8uy_large.png",
};

const bannerIcons = [
  { src: appleOneBannerLogo, wide: true, label: "Apple One" },
  {
    src: "https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_music__czz4szrg9qc2_large.png",
    label: "Apple Music",
  },
  {
    src: "https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_apple_tv__e3uyhyy0a4sy_large.png",
    label: "Apple TV",
  },
  {
    src: "https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_arcade__pg8i0s94i322_large.png",
    label: "Apple Arcade",
  },
  {
    src: "https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_icloud__cg2fz3fj3nau_large.png",
    label: "iCloud+",
  },
];

const tvHeroImage =
  "https://www.apple.com/v/services/j/images/services/overview/services/service-headers/services_tv_startframe__dsqpuhmpr9aq_large.jpg";
const musicHeroImage =
  "https://www.apple.com/v/services/j/images/services/overview/services/service-headers/music_2024_startframe__gkhou3rh32um_large.jpg";
const arcadeHeroImage =
  "https://www.apple.com/v/services/j/images/services/overview/services/service-headers/arcade_startframe_2024__cb6o2uwuqpaq_xlarge.jpg";
const fitnessHeroImage =
  "https://www.apple.com/v/services/j/images/services/overview/services/service-headers/hero_services_startframe__buktptg7pn36_large.jpg";

function resizeArtwork(url, size = "1200x1200bb") {
  if (!url) {
    return "";
  }

  return url.replace(/\/\d+x\d+bb\.(jpg|png)$/, (_match, ext) => {
    return `/${size}.${ext}`;
  });
}

function resolveAppleTemplate(url, width, height, format = "jpg") {
  return url
    .replace("{w}", String(width))
    .replace("{h}", String(height))
    .replace("{f}", format);
}

const serviceSections = [
  {
    id: "apple-tv",
    name: "Apple TV",
    iconSrc: serviceIcons.tv,
    bundleLabel: "Bundle with Apple One",
    panelStyle: "media",
    surface: "dark",
    headline: "Stream award-winning Apple Originals on every screen.",
    caption: "YOUR FRIENDS & NEIGHBOURS",
    primaryLabel: "Try it free",
    primaryHref:
      "https://tv.apple.com/in/channel/tvs.sbd.4000?itscg=10000&itsct=atv--services-pmo_try-apl-220804",
    primaryFootnote: "1",
    primaryVariant: "light",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-tv/",
    secondaryVariant: "outline-light",
    heroImage: tvHeroImage,
    galleryFormat: "landscape",
    showGalleryCopy: true,
    autoScroll: true,
    scrollSpeed: 54,
    gallery: [
      {
        title: "Twisted Yoga",
        meta: "Documentary",
        image: resolveAppleTemplate(
          "https://is1-ssl.mzstatic.com/image/thumb/Y4VdZOq6oULAMEqj0auCLA/{w}x{h}.{f}",
          838,
          472,
        ),
        href: "https://tv.apple.com/in/show/twisted-yoga/umc.cmc.5igm85np97uvzrg4cl7wpzz6f?l=en-GB",
      },
      {
        title: "Shrinking",
        meta: "Comedy",
        image: resolveAppleTemplate(
          "https://is1-ssl.mzstatic.com/image/thumb/OmAEHiPsBUBSNjqgm9ItjA/{w}x{h}.{f}",
          838,
          472,
        ),
        href: "https://tv.apple.com/in/show/shrinking/umc.cmc.apzybj6eqf6pzccd97kev7bs?l=en-GB",
      },
      {
        title: "The Last Thing He Told Me",
        meta: "Thriller",
        image: resolveAppleTemplate(
          "https://is1-ssl.mzstatic.com/image/thumb/rNjkfQo5hWI0wljgs4AvjA/{w}x{h}.{f}",
          838,
          472,
        ),
        href: "https://tv.apple.com/in/show/the-last-thing-he-told-me/umc.cmc.5dkcy23fuhcdhw1zcmqn10rc5?l=en-GB",
      },
      {
        title: "Eternity",
        meta: "Movie",
        image: resolveAppleTemplate(
          "https://is1-ssl.mzstatic.com/image/thumb/CDQqFfdLgWxYh_XxVEYEiA/{w}x{h}.{f}",
          838,
          472,
        ),
        href: "https://tv.apple.com/in/movie/eternity/umc.cmc.4dlymcfscta2oo4u1whkzaqpl?l=en-GB",
      },
    ],
  },
  {
    id: "apple-music",
    name: "Apple Music",
    iconSrc: serviceIcons.music,
    bundleLabel: "Bundle with Apple One",
    panelStyle: "media",
    surface: "dark",
    headline: "Listen to music you love in spatial audio with Dolby Atmos.",
    primaryLabel: "Get Apple Music",
    primaryHref:
      "https://offers.applemusic.apple/en-in/offer?itscg=10000&itsct=medusa_holi25_services_overview",
    primaryVariant: "light",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-music/",
    secondaryVariant: "outline-light",
    heroImage: musicHeroImage,
    galleryFormat: "square",
    showGalleryCopy: true,
    autoScroll: true,
    scrollSpeed: 58,
    gallery: [
      {
        title: "Sabrina Carpenter",
        meta: "Apple Music",
        image: resizeArtwork(
          "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/03/30/9e/03309ee0-dd2f-1665-5d25-3d0427a9853b/00050087373733.rgb.jpg/100x100bb.jpg",
        ),
        href: "https://music.apple.com/in/album/why-single/1444270106?uo=4",
      },
      {
        title: "Ariana Grande",
        meta: "Apple Music",
        image: resizeArtwork(
          "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ba/27/c8/ba27c847-f282-babf-79ca-842959b10764/00602577496325.rgb.jpg/100x100bb.jpg",
        ),
        href: "https://music.apple.com/in/album/7-rings-remix-feat-2-chainz-single/1451154051?uo=4",
      },
      {
        title: "Taylor Swift",
        meta: "Apple Music",
        image: resizeArtwork(
          "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/9e/92/699e92bb-b589-27f7-bdd1-d0cdc8a061e4/08UMGIM21979.rgb.jpg/100x100bb.jpg",
        ),
        href: "https://music.apple.com/in/album/taylor-swift-deluxe-edition/1440802681?uo=4",
      },
      {
        title: "Kendrick Lamar",
        meta: "Apple Music",
        image: resizeArtwork(
          "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/94/28/36/94283609-93bb-db1c-e997-44e82c157e90/00602567261216.rgb.jpg/100x100bb.jpg",
        ),
        href: "https://music.apple.com/in/album/damn-collectors-edition/1440907513?uo=4",
      },
    ],
  },
  {
    id: "apple-arcade",
    name: "Apple Arcade",
    iconSrc: serviceIcons.arcade,
    bundleLabel: "Bundle with Apple One",
    panelStyle: "media",
    surface: "dark",
    headline:
      "The best collection of mobile games, now in the Apple Games app.",
    primaryLabel: "Get the app",
    primaryHref:
      "https://apps.apple.com/in/arcade?itscg=10000&itsct=pod-services-arcade-apl-ann-21_1019",
    primaryVariant: "light",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-arcade/",
    secondaryVariant: "outline-light",
    heroImage: arcadeHeroImage,
    galleryFormat: "landscape",
    showGalleryCopy: true,
    autoScroll: true,
    scrollSpeed: 50,
    gallery: [
      {
        title: "Sneaky Sasquatch",
        meta: "Adventure",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/65/5e/69/655e6994-1516-b33a-5f37-2ad30c37ca9d/0ee2103c-38bb-4f96-9aff-b0ac984306ba_0_APP_IPHONE_55_0.png/406x228bb.png",
        href: "https://apps.apple.com/in/app/sneaky-sasquatch/id1098342019?uo=4",
      },
      {
        title: "SpongeBob Adventures: In A Jam",
        meta: "Adventure",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/41/cc/73/41cc7305-61db-bb04-cb3b-7038336120b0/1.png/406x228bb.png",
        href: "https://apps.apple.com/in/app/spongebob-adventures-in-a-jam/id1641251535?uo=4",
      },
      {
        title: "Solitaire",
        meta: "Card Game",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6e/c3/1d/6ec31d98-fb01-8113-6d54-32dae32ca54a/9dd3ef90-52e2-4443-bb80-4692df07321a_s1_5.5.jpg/392x696bb.jpg",
        href: "https://apps.apple.com/in/app/solitaire/id359917414?uo=4",
      },
      {
        title: "Subway Surfers",
        meta: "Endless Runner",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/41/db/f2/41dbf2b2-7039-6239-6d0e-0e34354d3809/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
        href: "https://apps.apple.com/in/app/subway-surfers/id512939461?uo=4",
      },
    ],
  },
  {
    id: "apple-fitness",
    name: "Apple Fitness+",
    iconSrc: serviceIcons.fitness,
    panelStyle: "media",
    surface: "dark",
    headline: "From Strength to Meditation, there’s something for everyone.",
    primaryLabel: "Try it free",
    primaryHref:
      "https://fitness.apple.com/in/subscribe?itscg=10000&itsct=pod-services-fitness-apl-ann-21_1019",
    primaryFootnote: "3",
    primaryVariant: "light",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-fitness-plus/",
    secondaryVariant: "outline-light",
    heroImage: fitnessHeroImage,
    galleryFormat: "landscape",
    showGalleryCopy: true,
    autoScroll: true,
    scrollSpeed: 46,
    gallery: [
      {
        title: "Strength",
        posterLabel: "Strength",
        meta: "Workout",
        backgroundImage: fitnessHeroImage,
        position: "8% center",
        href: "https://www.apple.com/in/apple-fitness-plus/",
      },
      {
        title: "Yoga",
        posterLabel: "Yoga",
        meta: "Mind and Body",
        backgroundImage: fitnessHeroImage,
        position: "34% center",
        href: "https://www.apple.com/in/apple-fitness-plus/",
      },
      {
        title: "Core",
        posterLabel: "Core",
        meta: "Workout",
        backgroundImage: fitnessHeroImage,
        position: "58% center",
        href: "https://www.apple.com/in/apple-fitness-plus/",
      },
      {
        title: "Meditation",
        posterLabel: "Meditation",
        meta: "Mindfulness",
        backgroundImage: fitnessHeroImage,
        position: "82% center",
        href: "https://www.apple.com/in/apple-fitness-plus/",
      },
    ],
  },
  {
    id: "apple-podcasts",
    name: "Apple Podcasts",
    iconSrc: serviceIcons.podcasts,
    panelStyle: "plain",
    surface: "light",
    headline:
      "Millions of shows, from the biggest names to the best independents.",
    primaryLabel: "Open the app",
    primaryHref:
      "https://podcasts.apple.com/in/?itscg=10000&itsct=pod-ovp-podcasts-apl-ann-21_1019",
    primaryVariant: "dark",
    secondaryLabel: "Learn more",
    secondaryHref: "https://www.apple.com/in/apple-podcasts/",
    secondaryVariant: "inline-dark",
    galleryFormat: "square",
    showGalleryCopy: true,
    autoScroll: true,
    scrollSpeed: 42,
    gallery: [
      {
        title: "Intermission",
        meta: "The Ken",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/72/2f/d5/722fd5ae-c1cb-efcf-24ec-4f20269ec921/mza_13660724427363767330.jpg/600x600bb.jpg",
        href: "https://podcasts.apple.com/in/podcast/intermission/id1881998715?uo=4",
      },
      {
        title: "The Ranveer Show हिंदी",
        meta: "BeerBiceps",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/85/0f/b1/850fb175-b567-dd00-59c1-f1160724d494/mza_11559786574812814174.jpg/600x600bb.jpg",
        href: "https://podcasts.apple.com/in/podcast/the-ranveer-show-%E0%A4%B9-%E0%A4%A6/id1542452346?uo=4",
      },
      {
        title: "20 Minute Books",
        meta: "20 Minute Books",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/58/c4/7b/58c47bd8-b264-5afa-437f-967aca84621d/mza_16715360875716481817.png/600x600bb.jpg",
        href: "https://podcasts.apple.com/in/podcast/20-minute-books/id1706194517?uo=4",
      },
      {
        title: "On Purpose with Jay Shetty",
        meta: "iHeartPodcasts",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/5e/a1/69/5ea169e2-18c4-40b0-0982-2fda3476d9a4/mza_9372864784596222041.jpg/600x600bb.jpg",
        href: "https://podcasts.apple.com/in/podcast/on-purpose-with-jay-shetty/id1450994021?uo=4",
      },
      {
        title: "The Morning Brief",
        meta: "The Economic Times",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/4d/48/d2/4d48d262-7fdf-4681-9352-ca34b3f9d9a7/mza_13713355823324564409.jpg/600x600bb.jpg",
        href: "https://podcasts.apple.com/in/podcast/the-morning-brief/id1568661777?uo=4",
      },
      {
        title: "The Diary Of A CEO",
        meta: "DOAC",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/69/af/0d/69af0ddd-1e0f-7ae3-c84b-88f18e31ad0c/mza_14445920128472365296.png/600x600bb.jpg",
        href: "https://podcasts.apple.com/in/podcast/the-diary-of-a-ceo-with-steven-bartlett/id1291423644?uo=4",
      },
    ],
  },
];

const chapterNavItems = [
  {
    id: "apple-one-banner",
    label: "Apple One",
    href: "#apple-one-banner",
    iconSrc: appleOneBannerLogo,
    wide: true,
  },
  ...serviceSections.map((service) => ({
    id: service.id,
    label: service.name,
    href: `#${service.id}`,
    iconSrc: service.iconSrc,
  })),
  {
    id: "apple-books",
    label: "Apple Books",
    href: "https://www.apple.com/in/apple-books/",
    icon: "books",
    external: true,
  },
];

const footnotes = [
  "New subscribers only. ₹99/month after free trial. Plan automatically renews until cancelled. Terms apply.",
  "Compatible hardware and software are required. Not all content is available in Dolby Atmos.",
  "Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. ₹149/month after trial. Plan automatically renews until cancelled. Terms apply.",
  "The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.",
];

function ActionLink({ href, className, label, footnote, external = true }) {
  const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <a href={href} className={className} {...linkProps}>
      <span>{label}</span>
      {footnote ? <sup>{footnote}</sup> : null}
    </a>
  );
}

function ChapterNavIcon({ item }) {
  if (item.wide) {
    return (
      <img
        src={item.iconSrc}
        alt=""
        className="ent-chapternav-icon-image is-wide"
      />
    );
  }

  if (item.id === "apple-tv") {
    return (
      <span className="ent-chapternav-glyph" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none">
          <rect
            x="7"
            y="11"
            width="30"
            height="18"
            rx="4.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M17 34h10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18.2 18.2h2.7v5.6M25.1 18.2h-2.5M23.85 18.2v5.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (item.id === "apple-music") {
    return (
      <span className="ent-chapternav-glyph" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none">
          <path
            d="M27 11v16.5a4.5 4.5 0 1 1-2-3.74V15.4l-10 2.3v12.8a4.5 4.5 0 1 1-2-3.74V16.1L27 11Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (item.id === "apple-arcade") {
    return (
      <span className="ent-chapternav-glyph" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none">
          <path
            d="M13.5 26.5c1.8-4.9 4.5-8 8.5-8s6.7 3.1 8.5 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 27.5h20a3.5 3.5 0 0 1 0 7H12a3.5 3.5 0 1 1 0-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M18 31h4M20 29v4M28.5 30.5h.01M31.5 33.5h.01"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  if (item.id === "apple-fitness") {
    return (
      <span className="ent-chapternav-glyph" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none">
          <circle
            cx="22"
            cy="22"
            r="12"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="22"
            cy="22"
            r="8"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="22"
            cy="22"
            r="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </span>
    );
  }

  if (item.id === "apple-podcasts") {
    return (
      <span className="ent-chapternav-glyph" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="18" r="2.8" fill="currentColor" />
          <path
            d="M22 22v9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17 30.5a5 5 0 0 1 10 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M14.8 28.2a8.3 8.3 0 0 1 14.4 0M11.7 25a12.2 12.2 0 0 1 20.6 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="ent-chapternav-book" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path
          d="M6.5 7.5C6.5 5.57 8.07 4 10 4h14a1.5 1.5 0 0 1 1.5 1.5v20a1.5 1.5 0 0 1-1.5 1.5H10A3.5 3.5 0 0 1 6.5 23.5v-16Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10 8h12M10 23h12M10 27V8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function PauseButton({ paused, onToggle, label, surface }) {
  return (
    <button
      type="button"
      className={`ent-pause-button ent-pause-button-${surface}${
        paused ? " is-paused" : ""
      }`}
      aria-label={paused ? `Play ${label} gallery` : `Pause ${label} gallery`}
      onClick={onToggle}
    >
      <span className="ent-pause-bars" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="ent-play-triangle" aria-hidden="true" />
    </button>
  );
}

function GalleryRail({ service, paused }) {
  const railRef = useRef(null);
  const dragStateRef = useRef({
    active: false,
    moved: false,
    pointerId: null,
    scrollLeft: 0,
    startX: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const items = service.autoScroll
    ? [...service.gallery, ...service.gallery]
    : service.gallery;

  useEffect(() => {
    const rail = railRef.current;

    if (!rail || paused || isDragging || !service.autoScroll) {
      return undefined;
    }

    let frameId = 0;
    let lastTimestamp = 0;
    const pixelsPerSecond = service.scrollSpeed ?? 48;

    function tick(timestamp) {
      const loopWidth = rail.scrollWidth / 2;

      if (loopWidth <= rail.clientWidth + 1) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      const elapsed = lastTimestamp ? timestamp - lastTimestamp : 16;
      lastTimestamp = timestamp;
      const nextLeft = rail.scrollLeft + pixelsPerSecond * (elapsed / 1000);

      if (nextLeft >= loopWidth) {
        rail.scrollLeft = nextLeft - loopWidth;
      } else {
        rail.scrollLeft = nextLeft;
      }

      frameId = window.requestAnimationFrame(tick);
    }

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isDragging, paused, service.autoScroll, service.scrollSpeed]);

  function handlePointerDown(event) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const rail = railRef.current;
    if (!rail) {
      return;
    }

    dragStateRef.current.active = true;
    dragStateRef.current.moved = false;
    dragStateRef.current.pointerId = event.pointerId;
    dragStateRef.current.scrollLeft = rail.scrollLeft;
    dragStateRef.current.startX = event.clientX;

    rail.setPointerCapture?.(event.pointerId);
    setIsDragging(true);
  }

  function handlePointerMove(event) {
    if (!dragStateRef.current.active) {
      return;
    }

    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const delta = event.clientX - dragStateRef.current.startX;
    if (Math.abs(delta) > 6) {
      dragStateRef.current.moved = true;
    }

    rail.scrollLeft = dragStateRef.current.scrollLeft - delta;
  }

  function handlePointerEnd(event) {
    if (!dragStateRef.current.active) {
      return;
    }

    railRef.current?.releasePointerCapture?.(
      dragStateRef.current.pointerId ?? event.pointerId,
    );

    dragStateRef.current.active = false;
    dragStateRef.current.pointerId = null;
    setIsDragging(false);

    window.requestAnimationFrame(() => {
      dragStateRef.current.moved = false;
    });
  }

  function handleCardClick(event) {
    if (!dragStateRef.current.moved) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className={`ent-gallery-shell ent-gallery-shell-${service.surface}`}>
      <div
        ref={railRef}
        className={`ent-gallery-rail ent-gallery-rail-${service.galleryFormat}${
          isDragging ? " is-dragging" : ""
        }`}
        aria-label={`${service.name} gallery`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        {items.map((item, index) => (
          <a
            key={`${service.id}-${item.title}-${index}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`ent-gallery-tile ent-gallery-tile-${service.galleryFormat}`}
            aria-label={item.title}
            onClick={handleCardClick}
          >
            <div className="ent-gallery-thumb">
              {item.image ? (
                <img src={item.image} alt={item.title} />
              ) : (
                <div
                  className="ent-gallery-fallback"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundPosition: item.position ?? "center center",
                  }}
                  aria-hidden="true"
                />
              )}
              {item.posterLabel && !service.showGalleryCopy ? (
                <span className="ent-gallery-poster-label">
                  {item.posterLabel}
                </span>
              ) : null}
            </div>
            <div className="ent-gallery-copy">
              <h3>{item.title}</h3>
              {item.meta ? <span>{item.meta}</span> : null}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function ServiceSection({ service }) {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id={service.id}
      className={`ent-service-section ent-service-section-${service.surface}`}
    >
      <div
        className={`ent-service-panel ent-service-panel-${service.panelStyle}`}
      >
        {service.panelStyle === "media" ? (
          <>
            <div
              className="ent-service-media"
              style={{ backgroundImage: `url(${service.heroImage})` }}
              aria-hidden="true"
            />
            <div className="ent-service-scrim" />
          </>
        ) : null}

        <div className="ent-service-panel-inner ent-content-width">
          <div className="ent-service-grid">
            <div className="ent-service-copy-block">
              <div className="ent-service-heading-top">
                <img
                  src={service.iconSrc}
                  alt=""
                  className="ent-service-icon"
                />
                <span className="ent-service-name">{service.name}</span>
                {service.bundleLabel ? (
                  <span className="ent-service-badge">
                    {service.bundleLabel}
                  </span>
                ) : null}
              </div>
              <h2 className="ent-service-title">{service.headline}</h2>
              {service.caption ? (
                <p className="ent-service-caption">{service.caption}</p>
              ) : null}
            </div>

            <div className="ent-service-actions">
              <ActionLink
                href={service.primaryHref}
                label={service.primaryLabel}
                footnote={service.primaryFootnote}
                className={`ent-pill ent-pill-${service.primaryVariant}`}
              />
              <ActionLink
                href={service.secondaryHref}
                label={service.secondaryLabel}
                className={
                  service.secondaryVariant.startsWith("inline")
                    ? `ent-inline-link ent-inline-link-${service.surface}`
                    : `ent-pill ent-pill-${service.secondaryVariant}`
                }
              />
            </div>
          </div>

          <PauseButton
            paused={paused}
            onToggle={() => setPaused((current) => !current)}
            label={service.name}
            surface={service.surface}
          />
        </div>
      </div>

      <GalleryRail service={service} paused={paused} />
    </section>
  );
}

export default function EntertainmentPage() {
  return (
    <main className="ent-page">
      <nav className="ent-chapternav" aria-label="Entertainment services">
        <div className="ent-content-width">
          <div className="ent-chapternav-list">
            {chapterNavItems.map((item) => {
              const external = item.external ?? false;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="ent-chapternav-link"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <span className="ent-chapternav-icon-wrap">
                    <ChapterNavIcon item={item} />
                  </span>
                  <span className="ent-chapternav-label">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <section className="ent-hero">
        <div className="ent-content-width ent-hero-content">
          <h1 className="ent-hero-title">
            Meet the A-list of
            <br />
            entertainment.
          </h1>
          <p className="ent-hero-copy">
            Award-winning movies. Binge-worthy shows. Your favourite music
            mastered in Spatial Audio. The most epic collection of mobile games.
            And the world’s largest library of 4K Ultra HD fitness content. The
            best entertainment and experiences live here, only on Apple.
          </p>
        </div>
      </section>

      <section id="apple-one-banner" className="ent-one-banner">
        <div className="ent-content-width ent-one-banner-inner">
          <div className="ent-one-banner-icon-window" aria-hidden="true">
            <div className="ent-one-banner-icon-track">
              {bannerIcons.map((item) => (
                <div key={item.label} className="ent-one-banner-icon-frame">
                  <img
                    src={item.src}
                    alt=""
                    className={`ent-one-banner-icon${item.wide ? " is-wide" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="ent-one-banner-copy">
            Get four services in one and enjoy more for less.
          </p>
          <ActionLink
            href="https://www.apple.com/in/apple-one/"
            label="Learn more"
            className="ent-pill ent-pill-outline-light"
          />
        </div>
      </section>

      {serviceSections.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      <section id="apple-one" className="ent-one-router">
        <div className="ent-content-width ent-one-router-grid">
          <div className="ent-one-router-copy">
            <img
              src={appleOneRouteLogo}
              alt="Apple One"
              className="ent-one-router-logo"
            />
            <p className="ent-one-router-title">
              Bundle up to four Apple services and enjoy more for less.
            </p>
            <div className="ent-one-router-actions">
              <ActionLink
                href="https://one.apple.com/in/?itscg=10000&itsct=pod-ovp-apple_one-apl-ann-21_1019"
                label="Try Apple One free"
                footnote="4"
                className="ent-pill ent-pill-dark"
              />
              <ActionLink
                href="https://www.apple.com/in/apple-one/"
                label="Learn more"
                className="ent-pill ent-pill-outline-dark"
              />
            </div>
          </div>

          <div className="ent-one-router-visual">
            <img src={appleOneServicesLogos} alt="Apple service logos" />
          </div>
        </div>
      </section>

      <section className="ent-footnotes">
        <div className="ent-content-width">
          <ol>
            {footnotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
