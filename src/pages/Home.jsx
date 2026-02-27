import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Delivered' },
    { value: '∞', label: 'Lines of Code' },
    { value: '5+', label: 'International Clients' },
]

const services = [
    {
        icon: '🌐',
        title: 'Web Development',
        desc: 'From simple landing pages to complex business portals — we craft stunning, fast websites that convert visitors into customers.',
        tags: ['React', 'Next.js', 'HTML/CSS'],
    },
    {
        icon: '📱',
        title: 'Mobile Applications',
        desc: 'Native-feel mobile apps built to scale. Intuitive UX, smooth performance, and robust backend integration.',
        tags: ['React Native', 'Android', 'iOS'],
    },
    {
        icon: '⚙️',
        title: 'SaaS Products',
        desc: 'End-to-end SaaS platforms from architecture to deployment. Subscription systems, dashboards, user management & more.',
        tags: ['Cloud', 'APIs', 'Databases'],
    },
    {
        icon: '🤖',
        title: 'Discord Bots & Automation',
        desc: 'Custom Discord bots for communities, automation pipelines, chatbots, and API integrations — fully tailored.',
        tags: ['Bot Dev', 'API', 'Automation'],
    },
    {
        icon: '🛒',
        title: 'E-Commerce',
        desc: 'Launch your online store with Shopify or custom-built solutions. Product catalogs, payment gateways, inventory & more.',
        tags: ['Shopify', 'Razorpay', 'UPI'],
    },
    {
        icon: '🎓',
        title: 'Certificate Software',
        desc: 'Automated certificate generation SaaS — bulk creation, custom templates, PDF export, and email delivery.',
        tags: ['SaaS', 'PDF', 'Automation'],
    },
]

const clients = ['Planttech', 'Asian Enterprises', 'DealOnSeal', 'Phytoingredients']

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function Home() {
    return (
        <div className="home">

            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="hero">
                <div className="hero__orb hero__orb--purple" aria-hidden="true" />
                <div className="hero__orb hero__orb--cyan" aria-hidden="true" />

                <div className="container">
                    <div className="hero__row">
                        {/* Left: text content */}
                        <div className="hero__content">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="hero__eyebrow"
                            >
                                <span className="badge badge-purple">🇮🇳 Indian Coding Agency</span>
                            </motion.div>

                            <motion.h1
                                className="hero__title"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                Premium Digital Products
                                <br />
                                <span className="gradient-text">Built for Bharat.</span>
                            </motion.h1>

                            <motion.p
                                className="hero__subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                            >
                                Premium websites, mobile apps, SaaS platforms and Discord bots — crafted with code, powered by passion.
                                <strong> 8+ years</strong> of expertise, delivered for Indian businesses and beyond.
                            </motion.p>

                            <motion.div
                                className="hero__ctas"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                            >
                                <Link to="/pricing" className="btn-primary">View Pricing →</Link>
                                <Link to="/projects" className="btn-outline">See Our Work</Link>
                            </motion.div>

                            <motion.div
                                className="hero__stats"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                {stats.map(({ value, label }) => (
                                    <div className="hero__stat" key={label}>
                                        <span className="hero__stat-value gradient-text">{value}</span>
                                        <span className="hero__stat-label">{label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right: code card */}
                        <motion.div
                            className="hero__code-card float"
                            aria-hidden="true"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="hero__code-dots">
                                <span style={{ background: '#FF5F57' }} />
                                <span style={{ background: '#FEBC2E' }} />
                                <span style={{ background: '#28C840' }} />
                            </div>
                            <pre>{`const project = {
  client: "Your Brand",
  budget: "₹10,000+",
  timeline: "2-4 weeks",
  quality: "Premium ✨"
}`}</pre>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Trusted By ───────────────────────────────────── */}
            <section className="trusted section">
                <div className="container">
                    <p className="trusted__label">Trusted by growing Indian brands</p>
                    <div className="trusted__logos">
                        {clients.map(c => (
                            <div className="trusted__logo-chip" key={c}>{c}</div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* ── Services ─────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="home__section-head">
                        <span className="section-label">What We Do</span>
                        <h2 className="section-title">
                            Full-Stack <span className="gradient-text">Digital Solutions</span>
                        </h2>
                        <p className="section-subtitle">
                            From a single landing page to a full SaaS ecosystem — we code it all with precision, speed, and flair.
                        </p>
                    </div>

                    <div className="services__grid">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                className="glass-card service-card"
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div className="service-card__icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div className="service-card__tags">
                                    {s.tags.map(t => <span key={t} className="badge badge-purple">{t}</span>)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* ── Why Us ───────────────────────────────────────── */}
            <section className="section why-us">
                <div className="why-us__orb" aria-hidden="true" />
                <div className="container why-us__inner">
                    <div>
                        <span className="section-label">Why CODENCER?</span>
                        <h2 className="section-title">Built for <span className="gradient-text">Indian Businesses</span></h2>
                        <p className="section-subtitle" style={{ marginBottom: 40 }}>
                            We understand the Indian market — UPI payments, WhatsApp integrations, regional languages, and competitive pricing. Your digital partner, not just a vendor.
                        </p>
                        <div className="why-us__points">
                            {[
                                ['⚡', 'Fast Delivery', '2–4 week turnarounds without compromising quality'],
                                ['💰', 'Transparent Pricing', 'Fixed cost packages — no hidden charges, no surprises'],
                                ['🤝', 'Indian-First', 'WhatsApp support, INR pricing, GST invoices'],
                                ['🏆', 'Premium Quality', 'Designs that rival international agencies at local pricing'],
                            ].map(([icon, title, desc]) => (
                                <div className="why-us__point" key={title}>
                                    <span className="why-us__icon">{icon}</span>
                                    <div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="why-us__card glass-card">
                        <div className="why-us__profile">
                            <div className="why-us__avatar">S</div>
                            <div>
                                <h4>Shreyansh</h4>
                                <p>Founder & Lead Developer</p>
                            </div>
                        </div>
                        <blockquote>
                            "I started coding 8 years ago with a simple goal — to build products that actually work for Indian businesses. Every project we take on is treated as our own."
                        </blockquote>
                        <div className="why-us__stats-row">
                            <div><strong className="gradient-text">30+</strong><span>Projects</span></div>
                            <div><strong className="gradient-text">8+</strong><span>Years</span></div>
                            <div><strong className="gradient-text">🌍</strong><span>Global</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ───────────────────────────────────── */}
            <section className="cta-banner">
                <div className="container">
                    <div className="cta-banner__inner glass-card">
                        <div>
                            <h2>Ready to build something <span className="gradient-text">amazing?</span></h2>
                            <p>Let's discuss your project over WhatsApp — fast, simple, and to the point.</p>
                        </div>
                        <div className="cta-banner__actions">
                            <a
                                href="https://wa.me/918766358288?text=Hi%2C%20I%20want%20to%20build%20a%20website!"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                            >
                                💬 WhatsApp Now
                            </a>
                            <Link to="/pricing" className="btn-outline">See Pricing</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
