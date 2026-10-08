import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { BottomNav } from './components/BottomNav'
import { CursorFollow } from './components/CursorFollow'
import { ProfileHeader } from './components/ProfileHeader'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { Studies } from './pages/Studies'
import { CV } from './pages/CV'

export default function App() {
  const location = useLocation()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <ProfileHeader />
      <main id="main" className="site-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<Works />} />
            <Route path="/studies" element={<Studies />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <BottomNav />
      <CursorFollow />
    </>
  )
}
