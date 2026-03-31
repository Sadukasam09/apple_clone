import { useRef } from "react";

const shows = [
  {
    id: 1,
    title: "Severance",
    genre: "Drama",
    label: "New Season",
    bg: "linear-gradient(160deg, #0a0a0f 0%, #1a1a2e 100%)",
    accent: "#4fc3f7",
  },
  {
    id: 2,
    title: "Ted Lasso",
    genre: "Comedy",
    label: "Watch Now",
    bg: "linear-gradient(160deg, #1b3a2d 0%, #0d2318 100%)",
    accent: "#81c784",
  },
  {
    id: 3,
    title: "The Morning Show",
    genre: "Drama",
    label: "All Episodes",
    bg: "linear-gradient(160deg, #1a1a1a 0%, #2d1b1b 100%)",
    accent: "#ef9a9a",
  },
  {
    id: 4,
    title: "Slow Horses",
    genre: "Thriller",
    label: "New Season",
    bg: "linear-gradient(160deg, #1c1c1e 0%, #2c2c2e 100%)",
    accent: "#ce93d8",
  },
  {
    id: 5,
    title: "For All Mankind",
    genre: "Sci-Fi",
    label: "New Season",
    bg: "linear-gradient(160deg, #0d1b2a 0%, #1b3a5c 100%)",
    accent: "#90caf9",
  },
  {
    id: 6,
    title: "Monarch",
    genre: "Drama",
    label: "New",
    bg: "linear-gradient(160deg, #1a1200 0%, #3d2c00 100%)",
    accent: "#ffe082",
  },
  {
    id: 7,
    title: "Presumed Innocent",
    genre: "Legal Thriller",
    label: "Watch Now",
    bg: "linear-gradient(160deg, #0f0f0f 0%, #1a1a1a 100%)",
    accent: "#b0bec5",
  },
  {
    id: 8,
    title: "Sugar",
    genre: "Mystery",
    label: "All Episodes",
    bg: "linear-gradient(160deg, #1a0f00 0%, #3d2000 100%)",
    accent: "#ffb74d",
  },
];

export default function TVCarousel() {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  function onMouseDown(e) {
    drag.current = {
      active: true,
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
    };
    trackRef.current.style.cursor = "grabbing";
  }
  function onMouseUp() {
    drag.current.active = false;
    trackRef.current.style.cursor = "grab";
  }
  function onMouseMove(e) {
    if (!drag.current.active) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft =
      drag.current.scrollLeft - (x - drag.current.startX) * 1.5;
  }

  return (
    <section className="tv-carousel-section">
      <div className="tv-carousel-header">
        <div className="tv-carousel-header-left">
          {/* Apple TV+ logo */}
          <svg
            width="50"
            height="18"
            viewBox="0 0 50 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="14"
              fontFamily="-apple-system,sans-serif"
              fontWeight="700"
              fontSize="14"
              fill="#f5f5f7"
            >
              Apple TV
            </text>
            <text
              x="42"
              y="10"
              fontFamily="-apple-system,sans-serif"
              fontWeight="700"
              fontSize="9"
              fill="#f5f5f7"
            >
              +
            </text>
          </svg>
          <h2 className="tv-carousel-title">Endless entertainment.</h2>
        </div>
        <a
          href="https://tv.apple.com"
          className="pill-btn pill-btn-outline-white"
          target="_blank"
          rel="noreferrer"
        >
          See all
        </a>
      </div>

      <div
        className="tv-carousel-track-wrapper"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="tv-carousel-track">
          {shows.map((show) => (
            <div
              key={show.id}
              className="tv-card"
              style={{ background: show.bg }}
            >
              <div className="tv-card-img" style={{ background: show.bg }}>
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
              </div>
              <div className="tv-card-info">
                <span className="tv-card-label" style={{ color: show.accent }}>
                  {show.label}
                </span>
                <p className="tv-card-title">{show.title}</p>
                <p className="tv-card-genre">{show.genre}</p>
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
    </section>
  );
}
