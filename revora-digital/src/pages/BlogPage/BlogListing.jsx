import React, { useState, useEffect, useRef } from "react";
import {
  BsGrid,
  BsMegaphone,
  BsSearch,
  BsCode,
  BsPhone,
  BsGraphUpArrow,
  BsRocket,
  BsBullseye,
  BsCalendar3,
  BsClock,
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsArrowLeft,
  BsShare,
  BsBookmark,
  BsHeart,
  BsCheckCircleFill,
  BsLightbulb,
  BsPeopleFill,
  BsBarChart,
} from "react-icons/bs";
import styles from "./BlogListing.module.css";

// ── CONFIG ────────────────────────────────────────────────────────────────────
const POSTS_PER_PAGE = 6;

// ── DATA ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "all", label: "All Categories", Icon: BsGrid },
  { id: "digital-marketing", label: "Digital Marketing", Icon: BsMegaphone },
  { id: "seo", label: "SEO", Icon: BsSearch },
  { id: "web-dev", label: "Web Development", Icon: BsCode },
  { id: "mobile-dev", label: "Mobile Development", Icon: BsPhone },
  { id: "business-growth", label: "Business Growth", Icon: BsGraphUpArrow },
];

const POSTS = [
  {
    id: 1,
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    bgColor: "#e8650a",
    Icon: BsMegaphone,
    date: "March 10, 2025",
    readTime: "8 min read",
    title: "The Complete Digital Marketing Guide for Small Businesses in India (2025)",
    excerpt:
      "From SEO and Google Ads to social media and WhatsApp marketing — this is the no-fluff, practical digital marketing playbook every Indian small business owner needs to read.",
    content: {
      intro:
        "Digital marketing has transformed how small businesses compete in India. With over 700 million internet users and rapidly growing smartphone adoption, the opportunity has never been bigger — but neither has the competition.",
      sections: [
        {
          heading: "1. Start with Google My Business",
          icon: BsSearch,
          body: "Before spending a single rupee on ads, claim and optimise your Google My Business profile. It's free, powerful, and directly affects how you appear in local search results. Fill in every detail — opening hours, photos, services, and collect genuine reviews from your customers.",
        },
        {
          heading: "2. SEO — Your Long-Term Growth Engine",
          icon: BsBarChart,
          body: "Search Engine Optimisation is the most cost-effective digital marketing strategy for small businesses. Focus on local keywords, create helpful content consistently, and build backlinks from credible Indian websites and directories.",
        },
        {
          heading: "3. WhatsApp Marketing — India's Secret Weapon",
          icon: BsPeopleFill,
          body: "India has over 500 million WhatsApp users. A WhatsApp Business account with a product catalogue, automated replies, and a broadcast list to your existing customers can generate repeat sales at zero cost.",
        },
        {
          heading: "4. Google Ads — Paid Traffic That Converts",
          icon: BsBullseye,
          body: "Start with a modest budget of ₹5,000–10,000/month. Use exact-match keywords, write compelling ad copy, and send traffic to a dedicated landing page — not your homepage. Track every conversion.",
        },
        {
          heading: "5. Measure Everything",
          icon: BsLightbulb,
          body: "Install Google Analytics 4 and Google Search Console on day one. Know your cost per lead, best-performing pages, and where your visitors drop off. Data-driven decisions separate growing businesses from stagnant ones.",
        },
      ],
      conclusion:
        "Digital marketing success doesn't come from doing everything — it comes from doing a few things exceptionally well and improving consistently. Start with the channels your customers already use, measure results, and reinvest in what works.",
      tips: [
        "Claim your Google My Business today",
        "Post 3× per week on the social platform your audience uses most",
        "Collect 10 new Google reviews this month",
        "Set up Google Analytics if you haven't already",
      ],
    },
  },
  {
    id: 2,
    category: "seo",
    categoryLabel: "SEO",
    bgColor: "#16a34a",
    Icon: BsSearch,
    date: "February 28, 2025",
    readTime: "7 min read",
    title: "SEO in 2025: How to Rank Your Business on Google's First Page",
    excerpt:
      "Google's first page captures 92% of all search traffic. Here's a practical, up-to-date SEO guide that explains exactly what it takes to rank in 2025.",
    content: {
      intro:
        "Ranking on Google's first page is no longer optional for businesses that want to grow online. In 2025, with AI-powered search results and ever-smarter algorithms, the rules have evolved — but the fundamentals have never been more important.",
      sections: [
        {
          heading: "1. E-E-A-T: Experience, Expertise, Authority, Trust",
          icon: BsCheckCircleFill,
          body: "Google's quality guidelines now heavily weight E-E-A-T. Publish content written or reviewed by genuine experts, cite credible sources, display author bios, and earn coverage from reputable publications.",
        },
        {
          heading: "2. Core Web Vitals Still Matter",
          icon: BsBarChart,
          body: "Page speed, interactivity, and visual stability are official ranking signals. Use Google PageSpeed Insights to diagnose issues. Aim for LCP under 2.5s, FID under 100ms, and CLS under 0.1.",
        },
        {
          heading: "3. Topic Clusters Over Single Pages",
          icon: BsGrid,
          body: "Build topic clusters: a comprehensive pillar page surrounded by detailed supporting articles. This demonstrates topical authority and creates a web of internal links that Google loves.",
        },
        {
          heading: "4. AI Overviews — Adapt Your Strategy",
          icon: BsLightbulb,
          body: "Google's AI Overviews now appear above organic results for many queries. Write clear, factual answers early in your content, use structured data markup, and create genuinely helpful content.",
        },
      ],
      conclusion:
        "SEO in 2025 rewards businesses that genuinely help their users. Focus on expertise, page experience, and comprehensive content — and the rankings will follow.",
      tips: [
        "Run a Core Web Vitals audit this week",
        "Add structured data markup to your top 5 pages",
        "Build one topic cluster around your core service",
        "Publish at least one expert-authored article per month",
      ],
    },
  },
  {
    id: 3,
    category: "mobile-dev",
    categoryLabel: "Mobile Development",
    bgColor: "#7c3aed",
    Icon: BsPhone,
    date: "February 15, 2025",
    readTime: "6 min read",
    title: "Flutter Mobile App Development: The Smart Choice for Your Business in 2025",
    excerpt:
      "Flutter lets you build one app that runs on Android, iOS, and the web — at a fraction of the cost of native development.",
    content: {
      intro:
        "Building a mobile app used to mean hiring separate teams for Android and iOS — doubling your cost and timeline. Flutter changed that equation entirely, and in 2025 it's the go-to choice for startups and SMBs across India.",
      sections: [
        {
          heading: "1. One Codebase, Every Platform",
          icon: BsCode,
          body: "Flutter's single codebase compiles to native ARM code for Android, iOS, web, desktop, and embedded devices. You write once and ship everywhere — with performance that rivals fully native apps.",
        },
        {
          heading: "2. Beautiful UI Out of the Box",
          icon: BsLightbulb,
          body: "Flutter's widget system gives you pixel-perfect control over every element. Your app looks identical on every device — no platform-specific bugs, no inconsistent rendering.",
        },
        {
          heading: "3. Hot Reload = Faster Development",
          icon: BsRocket,
          body: "Flutter's hot reload lets developers see changes instantly without restarting the app. This speeds up iteration cycles, reduces development time, and makes it easier to experiment and fix bugs.",
        },
        {
          heading: "4. Strong Indian Developer Ecosystem",
          icon: BsPeopleFill,
          body: "India now has one of the largest Flutter developer communities globally. Finding skilled Flutter talent is easier and more affordable than finding experienced native iOS or Android developers.",
        },
      ],
      conclusion:
        "For most Indian businesses launching a mobile app in 2025, Flutter is the pragmatic choice. It's fast, cost-effective, and produces genuinely great apps.",
      tips: [
        "Get a Flutter proof-of-concept built in 2 weeks",
        "Compare Flutter vs native quotes from 3 agencies",
        "Check FlutterFlow for no-code Flutter development",
        "Look at apps like Google Pay — they use Flutter",
      ],
    },
  },
  {
    id: 4,
    category: "business-growth",
    categoryLabel: "Business Growth",
    bgColor: "#0a6e70",
    Icon: BsRocket,
    date: "February 05, 2025",
    readTime: "5 min read",
    title: "10 Proven Ways to Grow Your Business in 2025",
    excerpt:
      "Growth doesn't happen by chance. Discover 10 proven strategies that successful businesses are using in 2025 to attract more customers and scale faster.",
    content: {
      intro:
        "Every successful business owner will tell you the same thing: growth is intentional. It requires the right strategies, consistent execution, and the courage to invest before the returns arrive.",
      sections: [
        {
          heading: "1–3: Customer Acquisition",
          icon: BsBullseye,
          body: "Run referral programmes that reward existing customers for bringing new ones. Double your Google review count — businesses with 50+ reviews see dramatically higher conversion rates. Launch targeted Google Ads campaigns with a clear cost-per-acquisition goal.",
        },
        {
          heading: "4–6: Revenue Expansion",
          icon: BsBarChart,
          body: "Introduce annual pricing for your services with a discount. Create a premium tier with white-glove service for your best customers. Build a complementary product that your existing customers naturally need.",
        },
        {
          heading: "7–8: Systems & Operations",
          icon: BsCheckCircleFill,
          body: "Document your top 3 core processes so they can be delegated or automated. Implement a CRM to track every lead and follow-up systematically. Most businesses lose sales from inconsistent follow-up, not bad products.",
        },
        {
          heading: "9–10: Brand & Community",
          icon: BsPeopleFill,
          body: "Start a monthly newsletter for your customers — it's the highest-ROI retention tool available. Invest in your personal brand: speak at one industry event or publish one thought-leadership article this quarter.",
        },
      ],
      conclusion:
        "Pick two or three strategies that align with your biggest growth bottleneck right now, execute them with discipline for 90 days, and measure the results.",
      tips: [
        "Launch a referral programme this month",
        "Set up a free HubSpot CRM account today",
        "Write one thought-leadership article this quarter",
        "Ask 10 happy customers for a Google review",
      ],
    },
  },
  {
    id: 5,
    category: "web-dev",
    categoryLabel: "Web Development",
    bgColor: "#db2777",
    Icon: BsCode,
    date: "January 25, 2025",
    readTime: "8 min read",
    title: "Top 7 Web Development Trends to Watch in 2025",
    excerpt:
      "From AI-powered websites to no-code platforms, here are the top web development trends that will shape the digital landscape in 2025.",
    content: {
      intro:
        "The web development landscape is shifting faster than ever. AI tools, edge computing, and new browser capabilities are rewriting what's possible — and what's expected.",
      sections: [
        {
          heading: "1. AI-Powered Development Tools",
          icon: BsLightbulb,
          body: "GitHub Copilot, Cursor, and similar AI coding assistants are now standard in professional development workflows. Developers using AI tools report 30–50% productivity gains.",
        },
        {
          heading: "2. Edge Computing & Edge Functions",
          icon: BsGraphUpArrow,
          body: "Running code at the edge — closer to users — dramatically reduces latency. Platforms like Vercel, Cloudflare Workers, and Netlify Edge make it easy to deploy globally distributed applications.",
        },
        {
          heading: "3. Web Components & Micro-Frontends",
          icon: BsCode,
          body: "Large organisations are breaking monolithic frontends into independently deployable micro-frontends. This allows different teams to work on different parts of a site using different frameworks.",
        },
        {
          heading: "4. No-Code & Low-Code Expansion",
          icon: BsGrid,
          body: "Platforms like Webflow, Framer, and FlutterFlow are handling increasingly sophisticated use cases. For many business websites and MVPs, no-code is now faster and more cost-effective than custom development.",
        },
      ],
      conclusion:
        "The most adaptable developers and businesses will thrive in 2025. Embrace AI tools, invest in performance, and always ask whether a simpler approach could achieve the same goal.",
      tips: [
        "Try Cursor or GitHub Copilot for one week",
        "Audit your site's Core Web Vitals scores",
        "Explore Webflow for your next landing page",
        "Deploy one function to Cloudflare Workers",
      ],
    },
  },
  {
    id: 6,
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    bgColor: "#d97706",
    Icon: BsBullseye,
    date: "January 15, 2025",
    readTime: "7 min read",
    title: "Local SEO Guide for Indian Businesses (2025)",
    excerpt:
      "Want more local customers? This step-by-step local SEO guide will help your business rank higher in Google Maps and attract more nearby customers.",
    content: {
      intro:
        "46% of all Google searches have local intent. Nearly half of people searching Google are looking for something near them. Local SEO is how you capture that traffic.",
      sections: [
        {
          heading: "1. Optimise Google My Business Completely",
          icon: BsSearch,
          body: "A fully optimised GMB profile is the cornerstone of local SEO. Choose the most specific primary category, upload 20+ high-quality photos, write a keyword-rich description, and post weekly updates.",
        },
        {
          heading: "2. NAP Consistency Across the Web",
          icon: BsCheckCircleFill,
          body: "Your Name, Address, and Phone number must be identical everywhere online — your website, JustDial, Sulekha, IndiaMART, and every other directory. Inconsistencies confuse Google and hurt rankings.",
        },
        {
          heading: "3. Generate and Respond to Reviews",
          icon: BsPeopleFill,
          body: "Reviews are the single most powerful local ranking signal. Send every satisfied customer a direct Google review link. Respond to every review — positive and negative — within 24 hours.",
        },
        {
          heading: "4. Local Content and Landing Pages",
          icon: BsLightbulb,
          body: "Create dedicated landing pages for each city or neighbourhood you serve. Target hyperlocal keywords like 'best accountant in Andheri West'. Include local landmarks and customer testimonials from that area.",
        },
      ],
      conclusion:
        "Local SEO is one of the highest-ROI investments for any Indian business serving a specific geography. The businesses that dominate local search own their market.",
      tips: [
        "Get 10 new Google reviews this month",
        "Audit your NAP consistency across 5 major directories",
        "Create location pages for your top 3 service areas",
        "Post once a week on Google My Business",
      ],
    },
  },
  {
    id: 7,
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    bgColor: "#e8650a",
    Icon: BsMegaphone,
    date: "March 10, 2025",
    readTime: "8 min read",
    title: "The Complete Digital Marketing Guide for Small Businesses in India (2025)",
    excerpt:
      "From SEO and Google Ads to social media and WhatsApp marketing — this is the no-fluff, practical digital marketing playbook every Indian small business owner needs to read.",
    content: {
      intro:
        "Digital marketing has transformed how small businesses compete in India. With over 700 million internet users and rapidly growing smartphone adoption, the opportunity has never been bigger — but neither has the competition.",
      sections: [
        {
          heading: "1. Start with Google My Business",
          icon: BsSearch,
          body: "Before spending a single rupee on ads, claim and optimise your Google My Business profile. It's free, powerful, and directly affects how you appear in local search results. Fill in every detail — opening hours, photos, services, and collect genuine reviews from your customers.",
        },
        {
          heading: "2. SEO — Your Long-Term Growth Engine",
          icon: BsBarChart,
          body: "Search Engine Optimisation is the most cost-effective digital marketing strategy for small businesses. Focus on local keywords, create helpful content consistently, and build backlinks from credible Indian websites and directories.",
        },
        {
          heading: "3. WhatsApp Marketing — India's Secret Weapon",
          icon: BsPeopleFill,
          body: "India has over 500 million WhatsApp users. A WhatsApp Business account with a product catalogue, automated replies, and a broadcast list to your existing customers can generate repeat sales at zero cost.",
        },
        {
          heading: "4. Google Ads — Paid Traffic That Converts",
          icon: BsBullseye,
          body: "Start with a modest budget of ₹5,000–10,000/month. Use exact-match keywords, write compelling ad copy, and send traffic to a dedicated landing page — not your homepage. Track every conversion.",
        },
        {
          heading: "5. Measure Everything",
          icon: BsLightbulb,
          body: "Install Google Analytics 4 and Google Search Console on day one. Know your cost per lead, best-performing pages, and where your visitors drop off. Data-driven decisions separate growing businesses from stagnant ones.",
        },
      ],
      conclusion:
        "Digital marketing success doesn't come from doing everything — it comes from doing a few things exceptionally well and improving consistently. Start with the channels your customers already use, measure results, and reinvest in what works.",
      tips: [
        "Claim your Google My Business today",
        "Post 3× per week on the social platform your audience uses most",
        "Collect 10 new Google reviews this month",
        "Set up Google Analytics if you haven't already",
      ],
    },
  },
];

// ── ARTICLE DETAIL ────────────────────────────────────────────────────────────
const ArticleDetail = ({ post, onBack }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setVisible(true), 30);
  }, []);

  return (
    <div className={`${styles.detailPage} ${visible ? styles.detailVisible : ""}`}>
      {/* Hero */}
      <div className={styles.detailHero} style={{ background: post.bgColor }}>
        <span className={styles.detailShape1} />
        <span className={styles.detailShape2} />
        <div className={styles.detailHeroInner}>
          <button className={styles.backBtn} onClick={onBack} type="button">
            <BsArrowLeft /> Back to Articles
          </button>
          <div className={styles.detailHeroContent}>
            <span className={styles.detailCategoryBadge}>
              <post.Icon /> {post.categoryLabel}
            </span>
            <h1 className={styles.detailTitle}>{post.title}</h1>
            <div className={styles.detailMeta}>
              <span><BsCalendar3 /> {post.date}</span>
              <span className={styles.metaDivider}>•</span>
              <span><BsClock /> {post.readTime}</span>
            </div>
          </div>
          <div className={styles.detailHeroIcon}>
            <post.Icon />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={styles.detailBody}>
        <div className={styles.detailContainer}>
          {/* Action bar */}
          <div className={styles.actionBar}>
            <button
              className={`${styles.actionBtn} ${liked ? styles.actionActive : ""}`}
              onClick={() => setLiked(!liked)}
              type="button"
              style={liked ? { background: "#fee2e2", color: "#dc2626", borderColor: "#dc2626" } : {}}
            >
              <BsHeart /> {liked ? "Liked" : "Like"}
            </button>
            <button
              className={`${styles.actionBtn} ${saved ? styles.actionActive : ""}`}
              onClick={() => setSaved(!saved)}
              type="button"
              style={saved ? { background: post.bgColor + "18", color: post.bgColor, borderColor: post.bgColor } : {}}
            >
              <BsBookmark /> {saved ? "Saved" : "Save"}
            </button>
            <button className={styles.actionBtn} type="button">
              <BsShare /> Share
            </button>
          </div>

          {/* Intro */}
          <p className={styles.detailIntro}>{post.content.intro}</p>

          {/* Sections */}
          <div className={styles.sectionsGrid}>
            {post.content.sections.map((sec, i) => (
              <div key={i} className={styles.detailSection} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.sectionIconRow}>
                  <span className={styles.sectionIconBadge} style={{ background: post.bgColor }}>
                    <sec.icon />
                  </span>
                  <h2 className={styles.sectionHeading}>{sec.heading}</h2>
                </div>
                <p className={styles.sectionBody}>{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Tips box */}
          <div className={styles.tipsBox} style={{ borderLeftColor: post.bgColor }}>
            <h3 className={styles.tipsTitle} style={{ color: post.bgColor }}>
              <BsCheckCircleFill /> Quick Action Tips
            </h3>
            <ul className={styles.tipsList}>
              {post.content.tips.map((tip, i) => (
                <li key={i} className={styles.tipItem}>
                  <span className={styles.tipBullet} style={{ background: post.bgColor }} />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className={styles.conclusionBox}>
            <h3 className={styles.conclusionTitle}>Conclusion</h3>
            <p className={styles.conclusionText}>{post.content.conclusion}</p>
          </div>

          {/* Back bottom */}
          <div className={styles.backBottomRow}>
            <button
              className={styles.backBtnBottom}
              onClick={onBack}
              type="button"
              style={{ background: post.bgColor }}
            >
              <BsArrowLeft /> Back to All Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── BLOG CARD ─────────────────────────────────────────────────────────────────
const BlogCard = ({ post, index, onRead }) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSeen(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`${styles.card} ${seen ? styles.cardVisible : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.cardBanner} style={{ background: post.bgColor }}>
        <span className={styles.cardTag}><post.Icon /> {post.categoryLabel}</span>
        <div className={styles.cardIconWrap}><post.Icon /></div>
        <span className={styles.bannerCircle1} />
        <span className={styles.bannerCircle2} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.metaItem}><BsCalendar3 /> {post.date}</span>
          <span className={styles.metaDot}>•</span>
          <span className={styles.metaItem}><BsClock /> {post.readTime}</span>
        </div>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
        <button
          className={styles.readLink}
          style={{ color: post.bgColor }}
          onClick={() => onRead(post)}
          type="button"
        >
          Read Article <BsArrowRight />
        </button>
      </div>
    </article>
  );
};

// ── PAGINATION ────────────────────────────────────────────────────────────────
const Pagination = ({ page, setPage, totalPages }) => {
  const getPages = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Left ellipsis — only when current page is far enough from the start
    if (page > 3) {
      pages.push("left-dots");
    }

    // Window of pages around the current page
    const start = Math.max(2, page - 1);
    const end   = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Right ellipsis — only when current page is far enough from the end
    if (page < totalPages - 2) {
      pages.push("right-dots");
    }

    // Always show last page (avoid duplicate if totalPages === 1)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    // De-duplicate (edge case: window overlaps first/last page)
    return [...new Set(pages)];
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      {/* Previous */}
      <button
        className={styles.pageBtn}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <BsChevronLeft />
      </button>

      {/* Page numbers + ellipses */}
      {getPages().map((p, i) =>
        typeof p === "string" ? (
          <span key={p} className={styles.pageDots}>…</span>
        ) : (
          <button
            key={p}
            className={`${styles.pageBtn} ${page === p ? styles.pageBtnActive : ""}`}
            onClick={() => setPage(p)}
            aria-label={`Page ${p}`}
            aria-current={page === p ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        className={styles.pageBtn}
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

// ── MAIN ──────────────────────────────────────────────────────────────────────
const BlogListing = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage]           = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter posts by active category
  const filtered = activeTab === "all"
    ? POSTS
    : POSTS.filter((p) => p.category === activeTab);

  // Pagination derived values
  const totalPages   = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const startIndex   = (page - 1) * POSTS_PER_PAGE;
  const paginated    = filtered.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset to page 1 whenever the category changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setPage(1);
  };

  if (selectedPost) {
    return <ArticleDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className={styles.page}>
      {/* Category tab bar */}
      <div className={styles.tabBarWrap}>
        <div className={styles.tabBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ""}`}
              onClick={() => handleTabChange(cat.id)}
              type="button"
            >
              <span className={styles.tabIcon}><cat.Icon /></span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Posts grid — only the current page's slice */}
      <div className={styles.grid}>
        {paginated.length > 0 ? (
          paginated.map((post, i) => (
            <BlogCard
              key={post.id}
              post={post}
              index={i}
              onRead={setSelectedPost}
            />
          ))
        ) : (
          <p className={styles.empty}>No posts in this category yet.</p>
        )}
      </div>

      {/* Dynamic pagination */}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default BlogListing;