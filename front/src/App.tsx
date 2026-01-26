import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PrivacyModal } from './components/PrivacyModal'
import { Integrations } from './components/Integrations'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { ServicesPage } from './pages/Services'
import { PortfolioPage } from './pages/Portfolio'
import { ContactPage } from './pages/Contact'
import { PrivacyPage } from './pages/Privacy'
import { NotFoundPage } from './pages/NotFound'
import { BlogPage } from './pages/Blog'
import { BlogPostPage } from './pages/BlogPost'

function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <HelmetProvider>
      <HashRouter>
        <Integrations />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
        <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      </HashRouter>
    </HelmetProvider>
  )
}

export default App
