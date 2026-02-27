// v4 – QR code added
import { QRCodeSVG } from 'qrcode.react'
import './Quotation.css'

export default function Quotation() {
    return (
        <div className="q-body">
            <div className="q-print-bar">
                <span>CODENCER – ASIANHDR Website Development Quotation</span>
                <button className="q-print-btn" onClick={() => window.print()}>
                    Print / Save as PDF
                </button>
            </div>

            <div className="q-pages-container">

                {/* ══════════════ PAGE 1 — QUOTATION ══════════════ */}
                <div className="q-page">

                    <svg className="q-wave-top" viewBox="0 0 794 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="glow1" cx="70%" cy="20%" r="60%">
                                <stop offset="0%" stopColor="#3d8ef5" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#0f1340" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0f1340" />
                                <stop offset="60%" stopColor="#1565c0" />
                                <stop offset="100%" stopColor="#0f1340" />
                            </linearGradient>
                        </defs>
                        <rect width="794" height="160" fill="url(#waveGrad1)" />
                        <ellipse cx="560" cy="30" rx="220" ry="60" fill="url(#glow1)" />
                        <path d="M0,160 Q200,60 400,100 Q600,140 794,50 L794,0 L0,0 Z" fill="#0f1a5580" />
                        <path d="M0,160 Q250,80 500,120 Q650,150 794,80 L794,160 Z" fill="#ffffff" />
                        <circle cx="120" cy="45" r="2" fill="#7eb8ff" opacity="0.8"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" /></circle>
                        <circle cx="650" cy="35" r="2.5" fill="#60a5fa" opacity="0.9"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" /></circle>
                        <line x1="60" y1="30" x2="200" y2="80" stroke="#5d8ef530" strokeWidth="1" />
                        <line x1="600" y1="25" x2="730" y2="70" stroke="#5d8ef530" strokeWidth="1" />
                    </svg>

                    <div className="q-header">
                        <div className="q-logo-row">
                            <svg className="q-logo-icon" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#5d5fef" />
                                        <stop offset="100%" stopColor="#3d8ef5" />
                                    </linearGradient>
                                </defs>
                                <polygon points="23,4 42,23 23,42 4,23" fill="none" stroke="url(#lg1)" strokeWidth="3.5" />
                                <polyline points="16,23 20,18 20,28" fill="none" stroke="url(#lg1)" strokeWidth="2.5" strokeLinecap="round" />
                                <polyline points="30,23 26,18 26,28" fill="none" stroke="#00c6ff" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                            <span className="q-logo-text">CODENCER</span>
                        </div>
                        <div className="q-tagline">www.codencer.com</div>
                        <div className="q-header-divider" />
                    </div>

                    <div className="q-content">

                        <div className="q-doc-title-banner">
                            <h1>ASIANHDR Website Development Quotation</h1>
                            <div className="q-doc-meta">
                                <div className="q-meta-item">Quotation No: <span>27022601</span></div>
                                <div className="q-meta-item">Date: <span>27 February 2026</span></div>
                            </div>
                        </div>

                        <div className="q-info-grid">
                            <div className="q-info-card">
                                <div className="q-info-card-title">Bill To (Client)</div>
                                <p>
                                    <strong>Plot No-2, Shivani Puram 2</strong><br />
                                    Raja Garden, Kankhal<br />
                                    Haridwar, Uttarakhand – 249408<br />
                                    India
                                </p>
                            </div>
                            <div className="q-info-card">
                                <div className="q-info-card-title">From (Service Provider)</div>
                                <p>
                                    <strong>Shreyansh</strong> (Coder &amp; Developer)<br />
                                    <strong>CODENCER</strong><br />
                                    www.codencer.com
                                </p>
                            </div>
                        </div>

                        <div className="q-pricing-box">
                            <div>
                                <div className="q-pricing-label">Total Project Cost</div>
                                <div className="q-pricing-amount"><sup>₹</sup>15,000</div>
                                <div className="q-pricing-note">7 Pages Static Website</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div className="q-pricing-label">Hosting Cost</div>
                                <div className="q-free-tag">FREE ✓</div>
                                <div className="q-pricing-note" style={{ marginTop: '5px' }}>Deployed on Vercel – No hosting fee</div>
                            </div>
                        </div>

                        <div className="q-section-title">
                            <span className="q-pill">SCOPE</span> Pages Included
                        </div>
                        <table className="q-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Page Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>Home Page</td><td>Hero section, overview, CTA, WhatsApp redirect (Get Quote button)</td></tr>
                                <tr><td>2</td><td>About Us</td><td>Company story, team, vision &amp; mission</td></tr>
                                <tr><td>3</td><td>Facilities</td><td>Services and facilities showcase</td></tr>
                                <tr><td>4</td><td>Projects</td><td>Portfolio of completed projects</td></tr>
                                <tr><td>5</td><td>Gallery</td><td>Photo and media gallery</td></tr>
                                <tr><td>6</td><td>Partners</td><td>Partner logos and collaborations</td></tr>
                                <tr><td>7</td><td>Contact Us</td><td>Contact form, map, social links</td></tr>
                            </tbody>
                        </table>

                        <div className="q-section-title">
                            <span className="q-pill">EXTRAS</span> Additional Features
                        </div>
                        <div className="q-tech-row" style={{ marginBottom: '10px' }}>
                            <div className="q-tech-badge">WhatsApp Redirect — Get Quote Button</div>
                            <div className="q-tech-badge">Stamp &amp; Certified Strip</div>
                            <div className="q-tech-badge">Logo Designing</div>
                            <div className="q-tech-badge"><span className="q-badge-green">FREE</span>&nbsp;1 Year Full Support</div>
                        </div>

                        <div className="q-section-title">
                            <span className="q-pill">TECH</span> Technologies Used
                        </div>
                        <div className="q-tech-row">
                            <div className="q-tech-badge"><div className="q-dot" />&nbsp;React JS</div>
                            <div className="q-tech-badge"><div className="q-dot" />&nbsp;Vanilla CSS</div>
                            <div className="q-tech-badge"><div className="q-dot" />&nbsp;Vite</div>
                            <div className="q-tech-badge"><div className="q-dot" />&nbsp;GitHub</div>
                            <div className="q-tech-badge"><div className="q-dot" />&nbsp;Vercel (Deployment)</div>
                        </div>

                        <div style={{ paddingTop: '18px' }}>
                            <div className="q-section-title">
                                <span className="q-pill">T&amp;C</span> Terms &amp; Conditions
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                                <ul className="q-terms-list" style={{ flex: 1, margin: 0 }}>
                                    <li><span className="q-t-num">T1</span>Full website support is provided for <strong>1 year</strong> from the date of deployment. If the website goes down or crashes due to technical issues on our end, it will be restored at <strong>no additional cost</strong>.</li>
                                </ul>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                                    <div style={{ padding: '6px', background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '8px' }}>
                                        <QRCodeSVG
                                            value="https://www.codenser.com/27022601"
                                            size={72}
                                            bgColor="#ffffff"
                                            fgColor="#0f1340"
                                            level="M"
                                        />
                                    </div>
                                    <span style={{ fontSize: '9px', color: '#6b7280', letterSpacing: '0.5px' }}>Scan to verify</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <svg className="q-wave-bottom" viewBox="0 0 794 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="glow2" cx="30%" cy="80%" r="60%">
                                <stop offset="0%" stopColor="#3d8ef5" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#0f1340" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="waveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0f1340" />
                                <stop offset="60%" stopColor="#1565c0" />
                                <stop offset="100%" stopColor="#0f1340" />
                            </linearGradient>
                        </defs>
                        <path d="M0,80 Q200,10 400,60 Q600,110 794,30 L794,140 L0,140 Z" fill="url(#waveGrad2)" />
                        <ellipse cx="200" cy="110" rx="180" ry="50" fill="url(#glow2)" />
                        <path d="M0,100 Q300,40 600,90 Q700,110 794,60 L794,140 L0,140 Z" fill="#0f1a5540" />
                        <circle cx="90" cy="110" r="2" fill="#7eb8ff" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.8s" repeatCount="indefinite" /></circle>
                    </svg>
                    <div className="q-footer"><span className="q-footer-url">www.codencer.com</span></div>
                </div>


                {/* ══════════════ PAGE 2 — TIMELINE ══════════════ */}
                <div className="q-page">

                    <svg className="q-wave-top" viewBox="0 0 794 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="glow3" cx="70%" cy="20%" r="60%">
                                <stop offset="0%" stopColor="#3d8ef5" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#0f1340" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0f1340" />
                                <stop offset="60%" stopColor="#1565c0" />
                                <stop offset="100%" stopColor="#0f1340" />
                            </linearGradient>
                        </defs>
                        <rect width="794" height="160" fill="url(#waveGrad3)" />
                        <ellipse cx="560" cy="30" rx="220" ry="60" fill="url(#glow3)" />
                        <path d="M0,160 Q200,60 400,100 Q600,140 794,50 L794,0 L0,0 Z" fill="#0f1a5580" />
                        <path d="M0,160 Q250,80 500,120 Q650,150 794,80 L794,160 Z" fill="#ffffff" />
                        <circle cx="120" cy="45" r="2" fill="#7eb8ff" opacity="0.8"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" /></circle>
                        <circle cx="650" cy="35" r="2.5" fill="#60a5fa" opacity="0.9"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" /></circle>
                        <line x1="60" y1="30" x2="200" y2="80" stroke="#5d8ef530" strokeWidth="1" />
                        <line x1="600" y1="25" x2="730" y2="70" stroke="#5d8ef530" strokeWidth="1" />
                    </svg>

                    <div className="q-header">
                        <div className="q-logo-row">
                            <svg className="q-logo-icon" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#5d5fef" />
                                        <stop offset="100%" stopColor="#3d8ef5" />
                                    </linearGradient>
                                </defs>
                                <polygon points="23,4 42,23 23,42 4,23" fill="none" stroke="url(#lg2)" strokeWidth="3.5" />
                                <polyline points="16,23 20,18 20,28" fill="none" stroke="url(#lg2)" strokeWidth="2.5" strokeLinecap="round" />
                                <polyline points="30,23 26,18 26,28" fill="none" stroke="#00c6ff" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                            <span className="q-logo-text">CODENCER</span>
                        </div>
                        <div className="q-tagline">www.codencer.com</div>
                        <div className="q-header-divider" />
                    </div>

                    <div className="q-content">

                        <div className="q-doc-title-banner">
                            <h1>Project Timeline &amp; Delivery Schedule</h1>
                            <div className="q-doc-meta">
                                <div className="q-meta-item">Ref: <span>27022601</span></div>
                                <div className="q-meta-item">Page: <span>2 of 2</span></div>
                            </div>
                        </div>

                        <div className="q-section-title">
                            <span className="q-pill">PAYMENT</span> Payment Schedule
                        </div>
                        <div className="q-payment-highlight">
                            <div className="q-ph-title">Payment Breakdown</div>
                            <div className="q-payment-row">
                                <div className="q-payment-cell">
                                    <div className="q-pc-label">Advance Payment (Phase 1)</div>
                                    <div className="q-pc-value">₹7,500</div>
                                    <div className="q-pc-note">50% — Due before 25 Feb 2026</div>
                                </div>
                                <div className="q-payment-cell">
                                    <div className="q-pc-label">Final Payment (On Deployment)</div>
                                    <div className="q-pc-value">₹7,500</div>
                                    <div className="q-pc-note">50% — Due after Phase 3 delivery</div>
                                </div>
                                <div className="q-payment-cell">
                                    <div className="q-pc-label">Total Project Cost</div>
                                    <div className="q-pc-value">₹15,000</div>
                                    <div className="q-pc-note">7-Page Static Website</div>
                                </div>
                            </div>
                        </div>

                        <div className="q-section-title">
                            <span className="q-pill">TIMELINE</span> Development Phases
                        </div>

                        {/* Phase 1 */}
                        <div className="q-phase-card q-phase-1">
                            <div className="q-phase-header">
                                <div className="q-phase-num">01</div>
                                <div className="q-phase-info">
                                    <div className="q-ph-title">Phase 1 — Foundation &amp; Core Pages</div>
                                    <div className="q-ph-dates">25 February 2026 – 2 March 2026</div>
                                </div>
                            </div>
                            <div className="q-phase-body">
                                <div className="q-phase-deliverables">
                                    <span className="q-deliverable-tag">Home Page</span>
                                    <span className="q-deliverable-tag">About Us</span>
                                    <span className="q-deliverable-tag">Facilities</span>
                                    <span className="q-deliverable-tag">WhatsApp Get Quote Button</span>
                                    <span className="q-deliverable-tag">Base Design System</span>
                                </div>
                                <div className="q-revision-bar">
                                    <strong>1st Revision:</strong>&nbsp; 2 March 2026 — Client review &amp; feedback round
                                </div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="q-phase-card q-phase-2">
                            <div className="q-phase-header">
                                <div className="q-phase-num">02</div>
                                <div className="q-phase-info">
                                    <div className="q-ph-title">Phase 2 — Portfolio &amp; Media Pages</div>
                                    <div className="q-ph-dates">3 March 2026 – 9 March 2026</div>
                                </div>
                            </div>
                            <div className="q-phase-body">
                                <div className="q-phase-deliverables">
                                    <span className="q-deliverable-tag">Projects</span>
                                    <span className="q-deliverable-tag">Gallery</span>
                                    <span className="q-deliverable-tag">Partners</span>
                                    <span className="q-deliverable-tag">Phase 1 Revisions Applied</span>
                                </div>
                                <div className="q-revision-bar">
                                    <strong>2nd Revision:</strong>&nbsp; 9 March 2026 — Client review &amp; feedback round
                                </div>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="q-phase-card q-phase-3">
                            <div className="q-phase-header">
                                <div className="q-phase-num">03</div>
                                <div className="q-phase-info">
                                    <div className="q-ph-title">Phase 3 — Completion, Testing &amp; Deployment</div>
                                    <div className="q-ph-dates">9 March 2026 – 14 March 2026</div>
                                </div>
                            </div>
                            <div className="q-phase-body">
                                <div className="q-phase-deliverables">
                                    <span className="q-deliverable-tag">Contact Us</span>
                                    <span className="q-deliverable-tag">Stamp &amp; Certified Strip</span>
                                    <span className="q-deliverable-tag">Footer</span>
                                    <span className="q-deliverable-tag">Bug Fixing</span>
                                    <span className="q-deliverable-tag">Vercel Deployment</span>
                                </div>
                                <div className="q-revision-bar">
                                    <strong>3rd Revision &amp; Final Delivery:</strong>&nbsp; 14 March 2026 — Full website live on Vercel
                                </div>
                            </div>
                        </div>

                        {/* Signatures */}
                        <div className="q-sig-section" style={{ marginTop: '22px' }}>
                            <div className="q-sig-box">
                                <div className="q-sb-label">Client Signature &amp; Stamp</div>
                                <div className="q-sb-name">Authorized Signatory</div>
                                <div className="q-sb-role">Client — Haridwar, Uttarakhand</div>
                            </div>
                            <div className="q-sig-box">
                                <div className="q-sb-label">Service Provider Signature</div>
                                <div className="q-sb-name">Shreyansh</div>
                                <div className="q-sb-role">Developer — CODENCER</div>
                            </div>
                        </div>

                    </div>

                    <svg className="q-wave-bottom" viewBox="0 0 794 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="glow4" cx="30%" cy="80%" r="60%">
                                <stop offset="0%" stopColor="#3d8ef5" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#0f1340" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="waveGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0f1340" />
                                <stop offset="60%" stopColor="#1565c0" />
                                <stop offset="100%" stopColor="#0f1340" />
                            </linearGradient>
                        </defs>
                        <path d="M0,80 Q200,10 400,60 Q600,110 794,30 L794,140 L0,140 Z" fill="url(#waveGrad4)" />
                        <ellipse cx="200" cy="110" rx="180" ry="50" fill="url(#glow4)" />
                        <path d="M0,100 Q300,40 600,90 Q700,110 794,60 L794,140 L0,140 Z" fill="#0f1a5540" />
                        <circle cx="90" cy="110" r="2" fill="#7eb8ff" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.8s" repeatCount="indefinite" /></circle>
                    </svg>
                    <div className="q-footer"><span className="q-footer-url">www.codencer.com</span></div>
                </div>

            </div>
        </div>
    )
}
