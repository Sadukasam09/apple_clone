import { useCallback, useEffect, useRef, useState } from "react";

const shows = [
  {
    id: 1,
    title: "Hijack",
    genre: "Thriller",
    label: "Apple TV+",
    blurb: "Who can you trust when it's all on the line?",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/5hSLmiaBKPfXrtjUJ6GHTQ/980x551.jpg",
    href: "https://tv.apple.com/in/show/hijack/umc.cmc.1dg08zn0g3zx52hs8npoj5qe3",
  },
  {
    id: 2,
    title: "Severance",
    genre: "Comedy",
    label: "Apple TV+",
    blurb: "A workplace thriller where nothing stays compartmentalized.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    href: "https://tv.apple.com/in/channel/tvs.sbd.4000",
  },
  {
    id: 3,
    title: "The Morning Show",
    genre: "Drama",
    label: "Apple TV+",
    blurb: "Ambition, scandal and live television under pressure.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    href: "https://tv.apple.com/in/channel/tvs.sbd.4000",
  },
  {
    id: 4,
    title: "Slow Horses",
    genre: "Thriller",
    label: "Apple TV+",
    blurb: "British espionage with sharp edges and sharper fallout.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",
    href: "https://tv.apple.com/in/channel/tvs.sbd.4000",
  },
  {
    id: 5,
    title: "For All Mankind",
    genre: "Sci-Fi",
    label: "Apple TV+",
    blurb: "An alternate future where the space race never slowed down.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    href: "https://tv.apple.com/in/channel/tvs.sbd.4000",
  },
  {
    id: 6,
    title: "Presumed Innocent",
    genre: "Legal Thriller",
    label: "Apple TV+",
    blurb: "A courtroom drama where every detail changes the case.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
    href: "https://tv.apple.com/in/channel/tvs.sbd.4000",
  },
];

export default function TVCarousel() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollEndTimeoutRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getCards = useCallback(() => cardRefs.current.filter(Boolean), []);

  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;
    const cards = getCards();
    if (!track || cards.length === 0) return 0;

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    let nearestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }, [getCards]);

  const centerCardInTrack = useCallback((card, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track || !card) return;

    const targetLeft =
      card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const nextLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

    if (typeof track.scrollTo === "function") {
      track.scrollTo({ left: nextLeft, behavior });
    } else {
      track.scrollLeft = nextLeft;
    }
  }, []);

  const goToIndex = useCallback(
    (index, behavior = "smooth") => {
      const cards = getCards();
      if (cards.length === 0) return;

      const clampedIndex =
        ((index % cards.length) + cards.length) % cards.length;
      const card = cards[clampedIndex];
      if (!card) return;

      centerCardInTrack(card, behavior);

      activeIndexRef.current = clampedIndex;
      setActiveIndex(clampedIndex);
    },
    [getCards, centerCardInTrack],
  );

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const firstCard = cardRefs.current[0];
      if (!firstCard) return;

      centerCardInTrack(firstCard, "auto");
    });

    return () => window.cancelAnimationFrame(frame);
  }, [centerCardInTrack]);

  useEffect(() => {
    if (isPaused) return undefined;

    const intervalId = window.setInterval(() => {
      if (document.hidden) return;

      const nextIndex = (activeIndexRef.current + 1) % shows.length;
      goToIndex(nextIndex);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, goToIndex]);

  useEffect(() => {
    const handleResize = () => {
      goToIndex(activeIndexRef.current, "auto");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [goToIndex]);

  useEffect(() => {
    return () => {
      window.clearTimeout(scrollEndTimeoutRef.current);
    };
  }, []);

  const onScroll = useCallback(() => {
    window.clearTimeout(scrollEndTimeoutRef.current);
    scrollEndTimeoutRef.current = window.setTimeout(() => {
      const nearest = getNearestIndex();
      activeIndexRef.current = nearest;
      setActiveIndex(nearest);
    }, 90);
  }, [getNearestIndex]);

  const handleDotSelect = (index) => {
    goToIndex(index);
  };

  const handlePauseToggle = () => {
    setIsPaused((paused) => !paused);
  };

  return (
    <section className="tv-carousel-section">
      <div
        className="tv-carousel-track-wrapper"
        ref={trackRef}
        onScroll={onScroll}
      >
        <div className="tv-carousel-track">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className="tv-card"
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
            >
              <div
                className="tv-card-img"
                style={{ backgroundImage: `url(${show.image})` }}
              >
                <div className="tv-card-overlay" />
                <div className="tv-card-brand">tv+</div>
                <div className="tv-card-play">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="28"
                    height="28"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="tv-card-info">
                  <div className="tv-card-meta">
                    <a
                      href={show.href}
                      className="pill-btn pill-btn-filled-white tv-card-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Stream now
                    </a>
                    <p className="tv-card-copy">
                      <span className="tv-card-genre">{show.genre}</span>
                      <span className="tv-card-divider">.</span>
                      <span>{show.blurb}</span>
                    </p>
                  </div>
                  <div className="tv-card-title-wrap">
                    <span className="tv-card-label">{show.label}</span>
                    <p className="tv-card-title">{show.title}</p>
                  </div>
                </div>
              </div>
              <div className="tv-card-mobile-copy">
                <span className="tv-card-label">{show.label}</span>
                <p className="tv-card-title">{show.title}</p>
                <p className="tv-card-copy tv-card-copy-mobile">
                  <span className="tv-card-genre">{show.genre}</span>
                  <span className="tv-card-divider">.</span>
                  <span>{show.blurb}</span>
                </p>
                <div className="tv-card-cta">
                  <a
                    href={show.href}
                    className="pill-btn pill-btn-filled-white tv-card-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stream now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tv-carousel-controls">
        <div
          className="tv-carousel-dots"
          role="tablist"
          aria-label="Apple TV carousel pagination"
        >
          {shows.map((show, index) => (
            <button
              key={show.id}
              type="button"
              className={`tv-carousel-dot${index === activeIndex ? " is-active" : ""}`}
              aria-label={`Go to ${show.title}`}
              aria-selected={index === activeIndex}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => handleDotSelect(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className={`tv-carousel-pause${isPaused ? " is-paused" : ""}`}
          aria-label={
            isPaused ? "Resume carousel autoplay" : "Pause carousel autoplay"
          }
          onClick={handlePauseToggle}
        >
          {isPaused ? (
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
