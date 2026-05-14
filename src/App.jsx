import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

// Eager-load Home for best LCP on entry route
import Home from './pages/Home'

// Lazy-load secondary routes for smaller initial bundle
const SobreMi = lazy(() => import('./pages/SobreMi'))
const Servicios = lazy(() => import('./pages/Servicios'))
const Blog = lazy(() => import('./pages/Blog'))
const Recursos = lazy(() => import('./pages/Recursos'))
const Contacto = lazy(() => import('./pages/Contacto'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const TcaCostaRica = lazy(() => import('./pages/TcaCostaRica'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function RouteFallback() {
  return (
    <div className="pt-32 pb-20 page-container">
      <div className="animate-pulse space-y-4 max-w-2xl">
        <div className="h-3 w-32 bg-cream-200 rounded" />
        <div className="h-10 w-3/4 bg-cream-200 rounded" />
        <div className="h-4 w-full bg-cream-100 rounded" />
        <div className="h-4 w-5/6 bg-cream-100 rounded" />
      </div>
    </div>
  )
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/tca-costa-rica" element={<TcaCostaRica />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
