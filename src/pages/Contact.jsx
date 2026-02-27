import './Contact.css'

const contactMethods = [
    {
        icon: '💬',
        title: 'WhatsApp (Preferred)',
        desc: 'Fastest way to reach me. Get a response within hours.',
        action: 'Chat Now',
        link: 'https://wa.me/918766358288?text=Hi%20Shreyansh%2C%20I%20want%20to%20discuss%20a%20project!',
        color: 'green',
    },
    {
        icon: '📧',
        title: 'Email',
        desc: 'For detailed project briefs and formal inquiries.',
        action: 'Send Email',
        link: 'mailto:shreyanshmainmail@gmail.com',
        color: 'purple',
    },
    {
        icon: '📍',
        title: 'Location',
        desc: 'Based in India. Available for remote work globally.',
        action: null,
        link: null,
        color: 'cyan',
    },
]

const faqs = [
    {
        q: 'How long does it take to build a website?',
        a: 'Typically 2–4 weeks for a standard business website. Complex projects (SaaS, custom coding) take longer and are scoped individually.',
    },
    {
        q: 'Do you provide maintenance after delivery?',
        a: 'Yes! Free support is included for 1–6 months depending on the package. Extended maintenance plans are also available.',
    },
    {
        q: 'What payment modes do you accept?',
        a: 'UPI, Bank Transfer, Razorpay — all common Indian payment methods. GST invoice provided.',
    },
    {
        q: 'Can I request changes after delivery?',
        a: 'Minor revisions are included during the support period. Major feature changes are scoped and quoted separately.',
    },
    {
        q: 'Do you also handle hosting and domain?',
        a: 'Yes. The Premium plan includes 1-year domain + hosting. For other plans, I help you set it up and guide you through the process.',
    },
]

export default function Contact() {
    return (
        <div className="contact">
            <section className="page-hero">
                <div className="page-hero__orb page-hero__orb--left" aria-hidden="true" />
                <div className="page-hero__orb page-hero__orb--right" aria-hidden="true" />
                <div className="container">
                    <span className="section-label">Contact</span>
                    <h1 className="section-title">
                        Let's Build <span className="gradient-text">Something Great</span>
                    </h1>
                    <p className="section-subtitle">
                        Have a project in mind? WhatsApp is the fastest way — we'll go from idea to quote in under 24 hours.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Contact Methods */}
                    <div className="contact__methods">
                        {contactMethods.map(m => (
                            <div key={m.title} className={`contact-method glass-card contact-method--${m.color}`}>
                                <span className="contact-method__icon">{m.icon}</span>
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                                {m.link && (
                                    <a href={m.link} target="_blank" rel="noreferrer" className="btn-primary">
                                        {m.action} →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="contact__layout">
                        {/* Form */}
                        <div className="contact__form-wrap glass-card">
                            <h2>Send a Message</h2>
                            <p>Fill the form and I'll get back to you on WhatsApp or email.</p>
                            <form
                                className="contact__form"
                                onSubmit={e => {
                                    e.preventDefault()
                                    const name = e.target.name.value
                                    const msg = e.target.message.value
                                    window.open(`https://wa.me/918766358288?text=Hi%20Shreyansh%2C%20I%27m%20${encodeURIComponent(name)}.%20${encodeURIComponent(msg)}`, '_blank')
                                }}
                            >
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input id="name" name="name" type="text" placeholder="Amit Kumar" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">WhatsApp Number</label>
                                        <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input id="email" name="email" type="email" placeholder="you@company.in" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service Required</label>
                                    <select id="service" name="service">
                                        <option value="">Select a service…</option>
                                        <option>Starter Website (₹10,000)</option>
                                        <option>Business Website (₹15,000)</option>
                                        <option>Premium Website (₹30,000)</option>
                                        <option>E-Commerce (Shopify)</option>
                                        <option>Custom E-Commerce</option>
                                        <option>Mobile Application</option>
                                        <option>SaaS Product</option>
                                        <option>Discord Bot</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Project Details *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell me about your project, your business, and what you need…"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    💬 Send via WhatsApp →
                                </button>
                            </form>
                        </div>

                        {/* FAQ */}
                        <div className="contact__faq">
                            <h3 className="contact__faq-title">Frequently Asked <span className="gradient-text">Questions</span></h3>
                            <div className="faq-list">
                                {faqs.map(({ q, a }) => (
                                    <details key={q} className="faq-item glass-card">
                                        <summary>{q}</summary>
                                        <p>{a}</p>
                                    </details>
                                ))}
                            </div>

                            <div className="contact__india-flag glass-card">
                                <span style={{ fontSize: '2rem' }}>🇮🇳</span>
                                <div>
                                    <h4>Proudly Made in India</h4>
                                    <p>GST invoices · UPI payments · Hindi support available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
