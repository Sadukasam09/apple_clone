import { useState } from "react";

const navLinks = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="apple-nav">
      <div className="apple-nav-inner">
        {/* Apple Logo */}
        <a href="#" className="apple-nav-logo" aria-label="Apple">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 814 1000"
            width="15"
            height="18"
            fill="currentColor"
          >
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 71 0 130.5 46.4 174.9 46.4 42.7 0 109.2-49.1 188.3-49.1V221c0-50.5-22.9-131.2 70.1-192.7C736.2 12.6 807 4.8 819.7 4.8c.8 0 1.6.1 2.4.1C820 10.9 788.1 172.5 788.1 340.9z" />
          </svg>
        </a>

        {/* Desktop Nav Links */}
        <ul className="apple-nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="apple-nav-icons">
          {/* Search */}
          <a href="#" aria-label="Search">
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
          {/* Cart */}
          <a href="#" aria-label="Shopping Bag">
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

        {/* Mobile Hamburger */}
        <button
          className="apple-nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="apple-nav-mobile">
          {navLinks.map((link) => (
            <a key={link} href="#" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
