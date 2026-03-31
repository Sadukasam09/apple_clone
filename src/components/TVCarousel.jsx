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
  },
  {
    id: 2,
    title: "Severance",
    genre: "Comedy",
    label: "Apple TV+",
    blurb: "A workplace thriller where nothing stays compartmentalized.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "The Morning Show",
    genre: "Drama",
    label: "Apple TV+",
    blurb: "Ambition, scandal and live television under pressure.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Slow Horses",
    genre: "Thriller",
    label: "Apple TV+",
    blurb: "British espionage with sharp edges and sharper fallout.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "For All Mankind",
    genre: "Sci-Fi",
    label: "Apple TV+",
    blurb: "An alternate future where the space race never slowed down.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    title: "Presumed Innocent",
    genre: "Legal Thriller",
    label: "Apple TV+",
    blurb: "A courtroom drama where every detail changes the case.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function TVCarousel() {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const scrollEndTimeoutRef = useRef(null);
  const interactionTimeoutRef = useRef(null);
  const programmaticScrollTimeoutRef = useRef(null);
  const programmaticScrollRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  function getPointerX(event) {
    if ("touches" in event && event.touches.length > 0) {
      return event.touches[0].pageX;
    }

    if ("changedTouches" in event && event.changedTouches.length > 0) {
      return event.changedTouches[0].pageX;
    }

    return event.pageX;
  }

  const getCards = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [];
    return Array.from(track.querySelectorAll(".tv-card"));
  }, []);

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

  const scrollToIndex = useCallback(
    (index, behavior = "smooth") => {
      const track = trackRef.current;
      const cards = getCards();
      const card = cards[index];
      if (!track || !card) return;

      const targetLeft =
        card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const nextLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

      programmaticScrollRef.current = true;
      window.clearTimeout(programmaticScrollTimeoutRef.current);
      track.scrollTo({
        left: nextLeft,
        behavior,
      });
      programmaticScrollTimeoutRef.current = window.setTimeout(
        () => {
          programmaticScrollRef.current = false;
        },
        behavior === "auto" ? 0 : 500,
      );
      setActiveIndex(index);
    },
    [getCards],
  );

  function beginUserInteraction() {
    window.clearTimeout(interactionTimeoutRef.current);
    setIsUserInteracting(true);
  }

  function endUserInteraction(delay = 2200) {
    window.clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = window.setTimeout(() => {
      setIsUserInteracting(false);
    }, delay);
  }

  const snapToNearest = useCallback(
    (behavior = "smooth") => {
      scrollToIndex(getNearestIndex(), behavior);
    },
    [getNearestIndex, scrollToIndex],
  );

  useEffect(() => {
    if (isPaused || isUserInteracting) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % shows.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, isUserInteracting, scrollToIndex]);

  useEffect(() => {
    function handleResize() {
      scrollToIndex(activeIndex, "auto");
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    return () => {
      window.clearTimeout(scrollEndTimeoutRef.current);
      window.clearTimeout(interactionTimeoutRef.current);
      window.clearTimeout(programmaticScrollTimeoutRef.current);
    };
  }, []);

  function onMouseDown(e) {
    beginUserInteraction();
    window.clearTimeout(scrollEndTimeoutRef.current);
    drag.current = {
      active: true,
      startX: getPointerX(e) - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
    };
    trackRef.current.style.cursor = "grabbing";
  }
  function onMouseUp() {
    if (!drag.current.active) return;
    drag.current.active = false;
    trackRef.current.style.cursor = "grab";
    snapToNearest();
    endUserInteraction();
  }
  function onMouseMove(e) {
    if (!drag.current.active) return;
    e.preventDefault();
    const x = getPointerX(e) - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft =
      drag.current.scrollLeft - (x - drag.current.startX) * 1.5;
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;

    setActiveIndex(getNearestIndex());

    if (programmaticScrollRef.current || drag.current.active) return;

    beginUserInteraction();
    window.clearTimeout(scrollEndTimeoutRef.current);
    scrollEndTimeoutRef.current = window.setTimeout(() => {
      snapToNearest();
      endUserInteraction();
    }, 140);
  }

  return (
    <section className="tv-carousel-section">
      <div
        className="tv-carousel-track-wrapper"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onTouchCancel={onMouseUp}
        onTouchMove={onMouseMove}
        onScroll={onScroll}
      >
        <div className="tv-carousel-track">
          {shows.map((show) => (
            <div key={show.id} className="tv-card">
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
                      href="#"
                      className="pill-btn pill-btn-filled-white tv-card-btn"
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
                    href="#"
                    className="pill-btn pill-btn-filled-white tv-card-btn"
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
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="tv-carousel-pause"
          aria-label={
            isPaused ? "Resume carousel autoplay" : "Pause carousel autoplay"
          }
          onClick={() => setIsPaused((paused) => !paused)}
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
