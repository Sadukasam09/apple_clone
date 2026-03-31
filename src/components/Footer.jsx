const footerColumns = [
  {
    heading: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
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

export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="apple-footer-top">
        <p>
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device.{" "}
          <a href="#">See how much your device is worth.</a>
        </p>
      </div>

      <div className="apple-footer-links">
        {footerColumns.map((col) => (
          <div key={col.heading} className="apple-footer-col">
            <h3>{col.heading}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="apple-footer-bottom">
        <p>
          Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights
          reserved.
        </p>
        <div className="apple-footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales and Refunds</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
        <p className="apple-footer-country">United States</p>
      </div>
    </footer>
  );
}
