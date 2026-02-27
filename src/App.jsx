import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Quotation from './pages/Quotation'

export default function App() {
  const location = useLocation()
  const isQuotation = location.pathname === '/27022601' || location.pathname === '/quotation'

  if (isQuotation) {
    return (
      <>
        <ScrollToTop />
        <Quotation />
      </>
    )
  }

  return (
    <>
      <div className="star-bg" aria-hidden="true" />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
