import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-mi', label: 'Sobre Mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/blog', label: 'Blog' },
  { to: '/recursos', label: 'Recursos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="page-container flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Marianela Ibarra Nutrición"
              className="h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-sage-100 text-sage-600 font-semibold'
                        : 'text-gray-600 hover:text-sage-600 hover:bg-sage-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
            >
              Agendar cita
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-cream-200 text-gray-700 hover:bg-cream-300 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-t border-gray-100`}
        >
          <ul className="page-container py-4 flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sage-100 text-sage-700 font-semibold'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Agendar cita por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-cream-300 pb-safe">
        <ul className="flex justify-around items-center h-14">
          {links.slice(0, 5).map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors ${
                    isActive ? 'text-sage-600' : 'text-gray-400 hover:text-gray-600'
                  }`
                }
              >
                <span className="text-[10px] font-medium">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
