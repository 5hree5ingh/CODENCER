import { motion } from 'framer-motion'
import './About.css'

const skills = [
    'HTML / CSS', 'JavaScript', 'React.js', 'Node.js',
    'Python', 'Discord.py', 'Shopify', 'React Native',
    'MongoDB', 'PostgreSQL', 'REST APIs', 'Git',
]

const timeline = [
    { year: '2016', event: 'Started coding as a hobby — built first HTML website at age 13.' },
    { year: '2018', event: 'Built first client project — a small business website for a local shop.' },
    { year: '2020', event: 'Expanded into Discord bots and automation. Built Vidhayak Ji bot.' },
    { year: '2021', event: 'Launched planttech.co.in — a full agri-tech web platform.' },
    { year: '2022', event: 'Started work on DealOnSeal.com and the DealOnSeal mobile app.' },
    { year: '2023', event: 'Built SaaS certificate generator software and secured international client.' },
    { year: '2024', event: 'Expanded to premium business websites; 30+ total projects delivered.' },
    { year: '2025', event: 'Founded CODENCER — official Indian coding agency serving businesses nationally.' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function About() {
    return (
        <div className="about">

            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero__orb page-hero__orb--left" aria-hidden="true" />
                <div className="page-hero__orb page-hero__orb--right" aria-hidden="true" />
                <div className="container">
                    <span className="section-label">About</span>
                    <h1 className="section-title">
                        Meet the <span className="gradient-text">Mind Behind</span> CODENCER
                    </h1>
                    <p className="section-subtitle">
                        8+ years of turning ideas into digital reality. One passionate developer, building for India and beyond.
                    </p>
                </div>
            </section>

            {/* Profile */}
            <section className="section">
                <div className="container about__profile-grid">
                    <motion.div
                        className="about__card glass-card"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="about__avatar">S</div>
                        <h2>Shreyansh</h2>
                        <p className="about__role">Founder & Lead Developer · CODENCER</p>
                        <div className="about__meta">
                            <div><span>📍</span> India</div>
                            <div><span>💼</span> Freelancer & Agency Owner</div>
                            <div><span>🌍</span> International Clientele</div>
                            <div><span>⭐</span> 8+ Years Experience</div>
                        </div>
                        <a
                            href="https://wa.me/918766358288"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary"
                            style={{ marginTop: 24 }}
                        >
                            💬 Chat with Me
                        </a>
                    </motion.div>

                    <div className="about__right">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h3 className="about__bio-title">The Story</h3>
                            <p className="about__bio">
                                I'm Shreyansh — a developer who started coding out of curiosity and turned it into a craft. With <strong>8+ years</strong> of experience across web, mobile, SaaS, and bot development, I've delivered projects ranging from simple business landing pages to complex SaaS platforms.
                            </p>
                            <p className="about__bio">
                                Through <strong>CODENCER</strong>, I bring agency-level quality to Indian businesses at fair, transparent pricing. I've worked with brands across India and with <strong>5+ international clients</strong>, always keeping the focus on code quality, design, and deadline commitment.
                            </p>

                            {/* Stats Grid */}
                            <div className="about__stats">
                                {[
                                    ['30+', 'Projects Delivered'],
                                    ['8+', 'Years Experience'],
                                    ['5+', 'International Clients'],
                                    ['∞', 'Lines of Code'],
                                ].map(([v, l]) => (
                                    <div key={l} className="about__stat">
                                        <span className="gradient-text">{v}</span>
                                        <p>{l}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* Skills */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <span className="section-label">Tech Stack</span>
                        <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
                    </div>
                    <div className="about__skills">
                        {skills.map((s, i) => (
                            <motion.div
                                key={s}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="about__skill"
                            >
                                {s}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* Timeline */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 64 }}>
                        <span className="section-label">Journey</span>
                        <h2 className="section-title">The <span className="gradient-text">Timeline</span></h2>
                    </div>
                    <div className="timeline">
                        {timeline.map(({ year, event }, i) => (
                            <motion.div
                                key={year}
                                className="timeline__item"
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div className="timeline__year">{year}</div>
                                <div className="timeline__dot" />
                                <div className="timeline__content glass-card">
                                    <p>{event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
