import { useState } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const CATEGORIES = ['All', 'Web', 'Mobile', 'SaaS', 'Bot', 'Game']

const projects = [
    {
        title: 'planttech.co.in',
        category: 'Web',
        status: 'live',
        emoji: '🌿',
        desc: 'Full agri-tech web platform for Indian farming solutions. Custom product listings, blog, and inquiry system.',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: 'https://planttech.co.in',
    },
    {
        title: 'Asian Enterprises',
        category: 'Web',
        status: 'ongoing',
        emoji: '🏭',
        desc: 'Premium business website for calibration and industrial services. Advanced hero section with animated stats.',
        tags: ['React', 'Framer Motion', 'CSS'],
        link: '#',
    },
    {
        title: 'DealOnSeal.com',
        category: 'Web',
        status: 'ongoing',
        emoji: '🤝',
        desc: 'Deal-making platform connecting buyers and sellers in India. Complete product catalog and business directory.',
        tags: ['React', 'Next.js', 'API'],
        link: 'https://dealonseal.com',
    },
    {
        title: 'Phytoingredients.com',
        category: 'Web',
        status: 'ongoing',
        emoji: '🌱',
        desc: 'E-commerce and catalog website for phytochemical and plant extract products.',
        tags: ['React', 'Shopify', 'CSS'],
        link: 'https://phytoingredients.com',
    },
    {
        title: 'DealOnSeal App',
        category: 'Mobile',
        status: 'ongoing',
        emoji: '📱',
        desc: 'Mobile companion app for DealOnSeal.com. Real-time deal alerts, user profiles, and seamless UX.',
        tags: ['React Native', 'Node.js', 'Firebase'],
        link: '#',
    },
    {
        title: 'Vidhayak Ji — Discord Bot',
        category: 'Bot',
        status: 'live',
        emoji: '🤖',
        desc: 'Feature-rich Discord bot for community management. Moderation, custom commands, announcements, and AI chat.',
        tags: ['Discord.py', 'Python', 'AI'],
        link: '#',
    },
    {
        title: 'API & Chatbot Bot Suite',
        category: 'Bot',
        status: 'live',
        emoji: '⚡',
        desc: 'Collection of Discord bots — API integration bot, conversational chatbot, and task-automation pipelines.',
        tags: ['Python', 'REST API', 'Automation'],
        link: '#',
    },
    {
        title: 'Taboo Game',
        category: 'Game',
        status: 'ongoing',
        emoji: '🎮',
        desc: 'Online multiplayer Taboo word-guessing game. Real-time rooms, score tracking, and animated gameplay.',
        tags: ['React', 'Socket.io', 'Node.js'],
        link: '#',
    },
    {
        title: 'Certificate Generator SaaS',
        category: 'SaaS',
        status: 'live',
        emoji: '🎓',
        desc: 'Automated certificate generation platform. Bulk PDF creation, custom templates, branding, and email delivery.',
        tags: ['SaaS', 'PDF.js', 'Node.js'],
        link: '#',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function Projects() {
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

    return (
        <div className="projects">
            <section className="page-hero">
                <div className="page-hero__orb page-hero__orb--left" aria-hidden="true" />
                <div className="page-hero__orb page-hero__orb--right" aria-hidden="true" />
                <div className="container">
                    <span className="section-label">Portfolio</span>
                    <h1 className="section-title">
                        Our <span className="gradient-text">Work Speaks</span>
                    </h1>
                    <p className="section-subtitle">
                        Real projects, real clients, real impact. Browse our portfolio of 30+ delivered projects across web, mobile, SaaS, and automation.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="projects__tabs">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`projects__tab ${active === cat ? 'projects__tab--active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="projects__grid">
                        {filtered.map((p, i) => (
                            <motion.div
                                key={p.title}
                                className="project-card glass-card"
                                custom={i}
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                layout
                            >
                                <div className="project-card__top">
                                    <span className="project-card__emoji">{p.emoji}</span>
                                    <span className={`badge badge-${p.status}`}>
                                        {p.status === 'live' ? '🟢 Live' : '🔄 Ongoing'}
                                    </span>
                                </div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="project-card__tags">
                                    {p.tags.map(t => <span key={t} className="badge badge-cyan">{t}</span>)}
                                </div>
                                {p.link !== '#' && (
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-card__link"
                                    >
                                        View Live →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="projects__cta">
                        <p>Want to add your project here?</p>
                        <a
                            href="https://wa.me/918766358288"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary"
                        >
                            💬 Let's Build Together
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
