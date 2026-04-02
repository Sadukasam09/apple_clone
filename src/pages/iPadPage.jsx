import "./iPadPage.css";

const chapterNavItems = [
  {
    label: "iPad Pro",
    href: "https://www.apple.com/in/ipad-pro/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-nav-select-202405?wid=88&hei=88&fmt=png-alpha&.v=1712892060006",
  },
  {
    label: "iPad Air",
    badge: "New",
    href: "https://www.apple.com/in/ipad-air/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-nav-select-202503?wid=88&hei=88&fmt=png-alpha&.v=1740769332690",
  },
  {
    label: "iPad",
    href: "https://www.apple.com/in/ipad-11/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-nav-yellow-202212?wid=88&hei=88&fmt=png-alpha&.v=1670372099015",
  },
  {
    label: "iPad mini",
    href: "https://www.apple.com/in/ipad-mini/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-nav-select-202501?wid=88&hei=88&fmt=png-alpha&.v=1730764635890",
  },
  {
    label: "Compare",
    href: "https://www.apple.com/in/ipad/compare/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/compare-ipad-nav-202501?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Apple Pencil",
    href: "https://www.apple.com/in/apple-pencil/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQUY3?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Keyboards",
    href: "https://www.apple.com/in/ipad-keyboards/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJQJ3?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Accessories",
    href: "https://www.apple.com/in/shop/goto/ipad/accessories",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-accessories-nav-202401?wid=88&hei=88&fmt=png-alpha",
  },
  {
    label: "Shop iPad",
    href: "https://www.apple.com/in/shop/goto/buy_ipad",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/shop-ipad-nav-202401?wid=88&hei=88&fmt=png-alpha",
  },
];

const lineupModels = [
  {
    id: "ipad-pro",
    name: "iPad Pro",
    tagline: "The ultimate iPad experience with the most advanced technology.",
    price: "From ₹99900.00**",
    emi: "or ₹15983.00/mo. for 6 mo.*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-unselect-gallery-1-202405?wid=800&hei=1000&fmt=png-alpha&.v=1713296391764",
    alt: "iPad Pro in space black.",
    colors: ["#1c1c1e", "#e8e8ed"],
    learnHref: "https://www.apple.com/in/ipad-pro/",
    buyHref: "https://www.apple.com/in/shop/goto/ipad_pro/select",
  },
  {
    id: "ipad-air",
    badge: "New",
    name: "iPad Air",
    tagline: "Serious performance in a thin and light design.",
    price: "From ₹64900.00**",
    emi: "or ₹10150.00/mo. for 6 mo.*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-select-wifi-blue-202503?wid=800&hei=1000&fmt=png-alpha&.v=1740769332690",
    alt: "iPad Air in blue.",
    colors: ["#68696e", "#6c8fbd", "#a47bb5", "#e8e3da"],
    learnHref: "https://www.apple.com/in/ipad-air/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_ipad/ipad_air",
  },
  {
    id: "ipad",
    name: "iPad",
    tagline: "The colourful, all-screen iPad for the things you do every day.",
    price: "From ₹34900.00**",
    emi: "or ₹5317.00/mo. for 6 mo.*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-select-yellow-202212?wid=800&hei=1000&fmt=png-alpha&.v=1670372099011",
    alt: "iPad in yellow.",
    colors: ["#6a9fd8", "#f5a7bb", "#f9e179", "#e8e8ed"],
    learnHref: "https://www.apple.com/in/ipad-11/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_ipad/ipad",
  },
  {
    id: "ipad-mini",
    name: "iPad mini",
    tagline: "The full iPad experience in an ultra-portable design.",
    price: "From ₹49900.00**",
    emi: "or ₹7817.00/mo. for 6 mo.*",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-select-wifi-purple-202501?wid=800&hei=1000&fmt=png-alpha&.v=1730764635890",
    alt: "iPad mini in purple.",
    colors: ["#68696e", "#6c8fbd", "#a47bb5", "#e8e3da"],
    learnHref: "https://www.apple.com/in/ipad-mini/",
    buyHref: "https://www.apple.com/in/shop/goto/buy_ipad/ipad_mini",
  },
];

const whyBuyCards = [
  {
    id: "ways-to-buy",
    label: "Ways to Buy",
    title: "Monthly payment options available.",
    copy: "Choose an easy way to finance with convenient payment options.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/ways_to_buy__f1j7cxfmvs82_large.jpg",
    href: "https://www.apple.com/in/shop/goto/ways_to_buy",
  },
  {
    id: "trade-in",
    label: "Apple Trade In",
    title: "Save with Apple Trade In.",
    copy: "Get credit towards your next iPad when you trade in an eligible device at an Apple Store.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/trade_in__byyqhgbmgzuu_large.jpg",
    href: "https://www.apple.com/in/shop/goto/trade_in",
  },
  {
    id: "education",
    label: "Education Pricing",
    title: "Save on a new iPad with education pricing.",
    copy: "Available to college students and educators.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/education__cfy0vhcfpmwy_large.jpg",
    href: "https://www.apple.com/in/shop/goto/educationrouting",
  },
  {
    id: "personal-setup",
    label: "Personal Setup",
    title: "Meet your new iPad with Personal Setup.",
    copy: "Jump into online sessions with a Specialist to set up your iPad and discover new features.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/personal_setup__eujkfxdmrmqy_large.jpg",
    href: "https://www.apple.com/in/shop/goto/personal_setup",
  },
  {
    id: "delivery-pickup",
    label: "Delivery and Pickup",
    title: "Get flexible delivery and easy pickup.",
    copy: "Get free delivery or pickup at your Apple Store.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/delivery__gbrpvjpmdyiq_large.jpg",
    href: "https://www.apple.com/in/shop/goto/shipping_pickup",
  },
  {
    id: "engraving",
    label: "Engraving",
    title: "Personalise your iPad for free.",
    copy: "Engrave your new iPad with a mix of emoji, names, initials and numbers.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/engraving__ddfbjkhgk1iq_large.jpg",
    href: "https://www.apple.com/in/shop/goto/help/engraving_and_gift_wrap",
  },
  {
    id: "guided-shopping",
    label: "Guided Shopping",
    title: "Shop live with a Specialist.",
    copy: "Let us guide you live over video and answer all of your questions.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/guided_shopping__dtyqe25ek66y_large.jpg",
    href: "https://contactretail.apple.com/?ap=com&c=in&l=en&pg=COM:retailStore",
  },
  {
    id: "store-app",
    label: "Apple Store App",
    title: "Explore a shopping experience designed around you.",
    copy: "Use the Apple Store app to get a more personal way to shop.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/why-apple/apple_store_app__bj2xb5hfqf2e_large.jpg",
    href: "https://apps.apple.com/in/app/apple-store/id375380948",
  },
];

const getToKnowCards = [
  {
    id: "ipados-apps",
    label: "iPadOS + Apps",
    title: "Flexible windowing.\nA multitasker’s delight.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/consider/ipados__bm50r6ftdca2_large.jpg",
    tone: "dark",
  },
  {
    id: "apple-intelligence",
    label: "Apple Intelligence",
    title: "Effortlessly helpful every day.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/consider/apple_intelligence__bqkx185k78qu_large.jpg",
    tone: "dark",
  },
  {
    id: "productivity",
    label: "Productivity",
    title: "Your workplace can be any place.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/consider/productivity__e2ufnttgtbqy_large.jpg",
    tone: "light",
  },
  {
    id: "creativity",
    label: "Creativity",
    title: "Take your inner artist out and about.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/consider/creativity__cxqmk4zy9tyu_large.jpg",
    tone: "dark",
  },
  {
    id: "learning",
    label: "Learning",
    title: "Your classroom can be anywhere.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/consider/learning__fjgnijmv6gue_large.jpg",
    tone: "light",
  },
  {
    id: "entertainment",
    label: "Entertainment",
    title: "Kick back. Tune in. Game on.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/consider/entertainment__c1gixzdyv4iu_large.jpg",
    tone: "dark",
  },
  {
    id: "apple-pencil",
    label: "Apple Pencil",
    title: "Dream it up.\nJot it down.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/consider/apple_pencil__fv9eodmg26uq_large.jpg",
    tone: "light",
  },
];

const essentialsCards = [
  {
    id: "pencil",
    title: "Apple Pencil",
    copy: "Dream it up. Jot it down.",
    cta: "Learn more",
    href: "https://www.apple.com/in/apple-pencil/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQUY3?wid=900&hei=720&fmt=jpeg&qlt=90",
  },
  {
    id: "keyboards",
    title: "Keyboards for iPad",
    copy: "Type it out. Take it with you.",
    cta: "Learn more",
    href: "https://www.apple.com/in/ipad-keyboards/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJQJ3?wid=900&hei=720&fmt=jpeg&qlt=90",
  },
];

const significantStories = [
  {
    id: "iphone",
    title: "iPad and iPhone",
    copy: "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/significant_others/ipad_iphone__cmg5iqw7yduu_large.jpg",
  },
  {
    id: "mac",
    title: "iPad and Mac",
    copy: "With Sidecar, you can extend or mirror your Mac workspace by using iPad as a second display. And with Universal Control, you can use a single mouse and keyboard to move between your Mac and iPad seamlessly.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/significant_others/ipad_mac__db2d5kfwlnsy_large.jpg",
  },
  {
    id: "watch",
    title: "iPad and Apple Watch",
    copy: "Keep an eye on notifications, timers and activity on Apple Watch while your creative and everyday work continues on iPad across the same Apple ecosystem.",
    image:
      "https://www.apple.com/v/ipad/home/cf/images/overview/significant_others/ipad_watch__dq8e4j5g5oyy_large.jpg",
  },
];

const routerColumns = [
  {
    title: "Explore iPad",
    links: [
      { label: "Explore All iPad", href: "https://www.apple.com/in/ipad/" },
      { label: "iPad Pro", href: "https://www.apple.com/in/ipad-pro/" },
      { label: "iPad Air", href: "https://www.apple.com/in/ipad-air/" },
      { label: "iPad", href: "https://www.apple.com/in/ipad-11/" },
      { label: "iPad mini", href: "https://www.apple.com/in/ipad-mini/" },
      {
        label: "Compare iPad",
        href: "https://www.apple.com/in/ipad/compare/",
      },
      {
        label: "Apple Pencil",
        href: "https://www.apple.com/in/apple-pencil/",
      },
      {
        label: "Keyboards",
        href: "https://www.apple.com/in/ipad-keyboards/",
      },
    ],
  },
  {
    title: "Shop iPad",
    links: [
      {
        label: "Shop iPad",
        href: "https://www.apple.com/in/shop/goto/buy_ipad",
      },
      {
        label: "iPad Accessories",
        href: "https://www.apple.com/in/shop/goto/ipad/accessories",
      },
      {
        label: "Ways to Buy",
        href: "https://www.apple.com/in/shop/goto/ways_to_buy",
      },
      {
        label: "Personal Setup",
        href: "https://www.apple.com/in/shop/goto/personal_setup",
      },
      {
        label: "Apple Trade In",
        href: "https://www.apple.com/in/shop/goto/trade_in",
      },
    ],
  },
  {
    title: "More from iPad",
    links: [
      {
        label: "iPad Support",
        href: "https://support.apple.com/en-in/ipad?cid=gn-ols-ipad-psp-prodfly",
      },
      {
        label: "AppleCare",
        href: "https://www.apple.com/in/applecare/?filter=ipad",
      },
      { label: "iPadOS 26", href: "https://www.apple.com/in/os/ipados/" },
      {
        label: "Apple Intelligence",
        href: "https://www.apple.com/in/apple-intelligence/",
      },
      { label: "Apps by Apple", href: "https://www.apple.com/in/apps/" },
      {
        label: "Apple Creator Studio",
        href: "https://www.apple.com/in/apple-creator-studio/",
      },
      { label: "iCloud+", href: "https://www.apple.com/in/icloud/" },
      { label: "Education", href: "https://www.apple.com/in/education/" },
    ],
  },
];

function IPadPage() {
  return (
    <div className="ipad-page">
      <div className="ipad-ribbon">
        <div className="ipad-shell">
          <p>
            Get up to 6 months of No Cost EMI plus up to ₹4000 instant cashback
            on iPad with eligible cards.{" "}
            <a href="https://www.apple.com/in/shop/goto/buy_ipad">Shop now</a>
          </p>
        </div>
      </div>

      <header className="ipad-header ipad-shell">
        <h2 className="ipad-header-title">iPad</h2>
      </header>

      <nav className="ipad-chapternav" aria-label="iPad family">
        <div className="ipad-shell ipad-chapternav-scroll">
          <div className="ipad-chapternav-track">
            {chapterNavItems.map((item) => (
              <a
                key={item.label}
                className="ipad-chapter-item"
                href={item.href}
              >
                <span className="ipad-chapter-media">
                  <img src={item.image} alt="" loading="lazy" />
                </span>
                <span className="ipad-chapter-label">{item.label}</span>
                {item.badge ? (
                  <span className="ipad-chapter-badge">{item.badge}</span>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="ipad-main">
        <section className="ipad-section ipad-shell">
          <div className="ipad-section-head">
            <h2>Explore the line-up.</h2>
            <a
              className="ipad-section-link"
              href="https://www.apple.com/in/ipad/compare/"
            >
              Compare all models <span>&rsaquo;</span>
            </a>
          </div>

          <div className="ipad-rail ipad-lineup-rail">
            {lineupModels.map((model) => (
              <article key={model.id} className="ipad-lineup-card">
                <div className="ipad-lineup-media">
                  <img src={model.image} alt={model.alt} loading="lazy" />
                </div>
                <div
                  className="ipad-lineup-colors"
                  aria-label="Available finishes"
                >
                  {model.colors.map((color) => (
                    <span
                      key={`${model.id}-${color}`}
                      className="ipad-color-dot"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="ipad-lineup-copy">
                  {model.badge ? (
                    <span className="ipad-badge">{model.badge}</span>
                  ) : null}
                  <h3>{model.name}</h3>
                  <p>{model.tagline}</p>
                  <p className="ipad-lineup-price">{model.price}</p>
                  <p className="ipad-lineup-emi">{model.emi}</p>
                </div>
                <div className="ipad-card-actions ipad-lineup-actions">
                  <a
                    className="ipad-button ipad-button-primary"
                    href={model.learnHref}
                  >
                    Learn more
                  </a>
                  <a className="ipad-lineup-buy-link" href={model.buyHref}>
                    Buy <span>&rsaquo;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ipad-section ipad-shell">
          <div className="ipad-section-head">
            <h2>
              Why Apple is the best
              <br />
              place to buy iPad.
            </h2>
            <a
              className="ipad-section-link"
              href="https://www.apple.com/in/shop/goto/buy_ipad"
            >
              Shop iPad <span>&rsaquo;</span>
            </a>
          </div>

          <div className="ipad-rail ipad-buy-rail">
            {whyBuyCards.map((card) => (
              <a key={card.id} className="ipad-buy-card" href={card.href}>
                <div className="ipad-buy-copy">
                  <p className="ipad-card-label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
                <div className="ipad-buy-media">
                  <img src={card.image} alt={card.label} loading="lazy" />
                </div>
                <span className="ipad-card-plus" aria-hidden="true">
                  +
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="ipad-section ipad-shell">
          <div className="ipad-section-head ipad-section-head-solo">
            <h2>Get to know iPad.</h2>
          </div>

          <div className="ipad-rail">
            {getToKnowCards.map((card) => (
              <article
                key={card.id}
                className={`ipad-feature-card ipad-card-tone-${card.tone}`}
              >
                <img src={card.image} alt={card.label} loading="lazy" />
                <div className="ipad-feature-overlay" />
                <div className="ipad-feature-copy">
                  <p className="ipad-card-label">{card.label}</p>
                  <h3 style={{ whiteSpace: "pre-line" }}>{card.title}</h3>
                </div>
                <span className="ipad-card-plus" aria-hidden="true">
                  +
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="ipad-section ipad-shell">
          <div className="ipad-section-head ipad-section-head-solo">
            <h2>iPad essentials.</h2>
          </div>

          <div className="ipad-essentials-grid">
            {essentialsCards.map((card) => (
              <a key={card.id} className="ipad-essential-card" href={card.href}>
                <div className="ipad-essential-copy">
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span className="ipad-inline-link">
                    {card.cta} <span>&rsaquo;</span>
                  </span>
                </div>
                <div className="ipad-essential-media">
                  <img src={card.image} alt={card.title} loading="lazy" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="ipad-section ipad-shell">
          <div className="ipad-section-head ipad-section-head-solo">
            <h2>Significant others.</h2>
          </div>

          <div className="ipad-story-grid">
            {significantStories.map((story) => (
              <article key={story.id} className="ipad-story-card">
                <div className="ipad-story-copy">
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                </div>
                <div className="ipad-story-media">
                  <img src={story.image} alt={story.title} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ipad-section ipad-shell ipad-router-section">
          <div className="ipad-router-surface">
            <h2 className="ipad-router-title">iPad</h2>
            <div className="ipad-router-grid">
              {routerColumns.map((column) => (
                <div key={column.title} className="ipad-router-column">
                  <h3>{column.title}</h3>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default IPadPage;
