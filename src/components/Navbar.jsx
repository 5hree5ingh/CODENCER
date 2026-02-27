import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import './Navbar.css'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <Link to="/" className="navbar__logo">
                    <Logo height={32} />
                </Link>

                <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            className={({ isActive }) =>
                                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                            }
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn-primary navbar__cta" onClick={() => setOpen(false)}>
                        Get a Quote
                    </Link>
                </nav>

                <button
                    className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    )
}
