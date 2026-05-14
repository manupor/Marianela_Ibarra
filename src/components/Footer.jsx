import { NavLink } from 'react-router-dom'
import { Instagram, Mail, MapPin, Heart } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio', aria: 'Inicio · Nutricionista TCA Costa Rica' },
  { to: '/sobre-mi', label: 'Sobre Mí', aria: 'Sobre Marianela Ibarra, nutricionista TCA en Costa Rica' },
  { to: '/servicios', label: 'Servicios', aria: 'Servicios de nutrición y tratamiento de trastornos alimenticios' },
  { to: '/tca-costa-rica', label: 'Tratamiento TCA', aria: 'Tratamiento de TCA y trastornos alimenticios en Costa Rica' },
  { to: '/blog', label: 'Blog', aria: 'Blog sobre alimentación intuitiva y TCA' },
  { to: '/recursos', label: 'Recursos', aria: 'Recursos sobre nutrición y trastornos alimenticios' },
  { to: '/contacto', label: 'Contacto', aria: 'Contacto y agendar consulta nutricional' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 mb-14 md:mb-0">
      <div className="page-container py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="Marianela Ibarra Nutrición"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Te acompaño a transformar tu relación con la comida y tu cuerpo, dejar las dietas y empezar a vivir.
          </p>
          <a
            href="https://www.instagram.com/mibarranutricion"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sage-300 transition-colors"
          >
            <Instagram size={16} />
            @mibarranutricion
          </a>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs uppercase tracking-widest text-sage-400 font-semibold mb-4">Páginas</p>
          <ul className="space-y-2">
            {links.map(({ to, label, aria }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  aria-label={aria}
                  title={aria}
                  className="text-sm text-gray-400 hover:text-sage-300 transition-colors"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-sage-400 font-semibold mb-4">Contacto</p>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:mibarranutricion@gmail.com"
                className="flex items-start gap-2 text-sm text-gray-400 hover:text-sage-300 transition-colors"
              >
                <Mail size={15} className="mt-0.5 shrink-0" />
                mibarranutricion@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=50670117086"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-gray-400 hover:text-sage-300 transition-colors"
              >
                <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +(506) 7011-7086
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>San José, Costa Rica<br/>Momentum Pinares & Escazú<br/>Citas presenciales y virtuales</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="page-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Marianela Ibarra Nutrición. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={12} className="text-terra-400 fill-terra-400" /> en Costa Rica
          </p>
        </div>
      </div>
    </footer>
  )
}
