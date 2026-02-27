import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
    {
        tier: 'Starter',
        emoji: '🌱',
        tagline: 'Small businesses & personal brands',
        price: '10,000',
        desc: 'A clean, professional 5–6 page introduction website to put your business online.',
        features: [
            '5–6 Pages (Home, About, Services, Contact...)',
            'Mobile Responsive Design',
            'Contact Form Integration',
            'Fast Loading & SEO Basics',
            'Social Media Links',
            '1 Month Free Support',
        ],
        cta: 'Get Started',
        highlight: false,
        color: 'cyan',
    },
    {
        tier: 'Business',
        emoji: '🚀',
        tagline: 'Growing Indian businesses',
        price: '15,000',
        desc: 'Full-featured business website with WhatsApp integration, gallery, and partnership section.',
        features: [
            'All Starter features +',
            'WhatsApp Redirection Button',
            'Gallery / Portfolio Section',
            'Partners & Logo Section',
            'Custom Branding & Logo',
            'Google Maps Integration',
            '2 Months Free Support',
        ],
        cta: 'Most Popular',
        highlight: true,
        color: 'purple',
    },
    {
        tier: 'Premium',
        emoji: '💎',
        tagline: 'Established brands & enterprises',
        price: '30,000',
        desc: 'The complete premium website experience — chatbot, brochure page, and a custom domain included.',
        features: [
            'All Business features +',
            'AI Chatbot Integration',
            'Brochure / Downloads Page',
            'Premium UI/UX Animations',
            'Domain Name Included (1yr)',
            '1-Year Free Hosting',
            '6 Months Priority Support',
        ],
        cta: 'Go Premium',
        highlight: false,
        color: 'violet',
    },
]

const addons = [
    { emoji: '🛒', name: 'E-Commerce (Shopify)', price: '₹15,000', desc: 'Full Shopify store with products, payments & inventory.' },
    { emoji: '💻', name: 'Custom Coded E-Commerce', price: '₹50,000', desc: 'Fully custom e-commerce built from ground up. No limitations.' },
    { emoji: '📱', name: 'Mobile Application', price: 'On Discussion', desc: 'Android/iOS app tailored to your exact requirements.' },
    { emoji: '⚙️', name: 'SaaS Product', price: 'On Discussion', desc: 'Full SaaS platform — subscriptions, dashboards, user auth & more.' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } }),
}

export default function Pricing() {
    return (
        <div className="pricing">
            <section className="page-hero">
                <div className="page-hero__orb page-hero__orb--left" aria-hidden="true" />
                <div className="page-hero__orb page-hero__orb--right" aria-hidden="true" />
                <div className="container">
                    <span className="section-label">Pricing</span>
                    <h1 className="section-title">
                        Simple, <span className="gradient-text">Transparent</span> Pricing
                    </h1>
                    <p className="section-subtitle">
                        No hidden fees. No surprises. Fixed packages for Indian businesses — pay once, get a premium product.
                    </p>
                </div>
            </section>

            {/* Plans */}
            <section className="section">
                <div className="container">
                    <div className="pricing__grid">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.tier}
                                className={`pricing-card glass-card pricing-card--${plan.color} ${plan.highlight ? 'pricing-card--featured' : ''}`}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                {plan.highlight && (
                                    <div className="pricing-card__badge">⭐ Most Popular</div>
                                )}
                                <div className="pricing-card__header">
                                    <span className="pricing-card__emoji">{plan.emoji}</span>
                                    <h3>{plan.tier}</h3>
                                    <p className="pricing-card__tagline">{plan.tagline}</p>
                                </div>
                                <div className="pricing-card__price">
                                    <span className="pricing-card__currency">₹</span>
                                    <span className="pricing-card__amount gradient-text">{plan.price}</span>
                                    <span className="pricing-card__freq">one-time</span>
                                </div>
                                <p className="pricing-card__desc">{plan.desc}</p>
                                <ul className="pricing-card__features">
                                    {plan.features.map(f => (
                                        <li key={f}>
                                            <span className="pricing-card__check">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="https://wa.me/918766358288?text=Hi%2C%20I%27m%20interested%20in%20the%20website%20package!"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={plan.highlight ? 'btn-primary' : 'btn-outline'}
                                >
                                    {plan.cta} →
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Add-ons */}
                    <div className="addons">
                        <div style={{ textAlign: 'center', marginBottom: 48 }}>
                            <span className="section-label">More Services</span>
                            <h2 className="section-title">Other <span className="gradient-text">Packages</span></h2>
                            <p className="section-subtitle" style={{ margin: '0 auto' }}>
                                Custom scope, custom price. Let's chat about what you need.
                            </p>
                        </div>
                        <div className="addons__grid">
                            {addons.map((a, i) => (
                                <motion.div
                                    key={a.name}
                                    className="addon-card glass-card"
                                    custom={i}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                >
                                    <span className="addon-card__emoji">{a.emoji}</span>
                                    <div>
                                        <h4>{a.name}</h4>
                                        <p>{a.desc}</p>
                                    </div>
                                    <div className="addon-card__price gradient-text">{a.price}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ note */}
                    <div className="pricing__note glass-card">
                        <span>💡</span>
                        <div>
                            <h4>Not sure which plan?</h4>
                            <p>WhatsApp me and we'll figure out the best fit for your budget and requirements — no pressure, no sales pitch.</p>
                            <a
                                href="https://wa.me/918766358288"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                                style={{ marginTop: 16, display: 'inline-flex' }}
                            >
                                💬 Talk to Shreyansh
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
