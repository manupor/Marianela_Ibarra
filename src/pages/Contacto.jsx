import { Mail, MapPin, Instagram, Clock, MessageCircle } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+(506) 7011-7086',
    sub: 'Respuesta rápida',
    color: 'bg-green-50 text-green-600 border-green-200',
    href: 'https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'mibarranutricion@gmail.com',
    sub: 'Para consultas formales',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    href: 'mailto:mibarranutricion@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@mibarranutricion',
    sub: 'Contenido y mensajes directos',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    href: 'https://www.instagram.com/mibarranutricion',
  },
]

const locations = [
  {
    name: 'Momentum Pinares',
    address: 'Torre Médica, 4to piso, C38\nSan José, Costa Rica',
    type: 'Presencial',
  },
  {
    name: 'Momentum Escazú',
    address: '3er piso, #21\nSan José, Costa Rica',
    type: 'Presencial',
  },
  {
    name: 'Consulta Virtual',
    address: 'Desde cualquier lugar\nVideollamada',
    type: 'Virtual',
  },
]

const hours = [
  { day: 'Lunes – Viernes', time: 'Según disponibilidad' },
  { day: 'Sábados', time: 'Consultar disponibilidad' },
]

export default function Contacto() {
  useSEO({
    title: 'Contacto · Nutricionista TCA Costa Rica | Agendá por WhatsApp',
    description: 'Agendá tu consulta con la Dra. Marianela Ibarra, nutricionista TCA en Costa Rica: WhatsApp +(506) 7011-7086 o mibarranutricion@gmail.com. Consulta presencial en Momentum Pinares, San José y consulta online para toda Latinoamérica.',
    keywords: 'nutricionista TCA Costa Rica contacto, agendar nutricionista WhatsApp, nutricionista San José, nutricionista trastornos alimenticios, nutricionista Momentum Pinares, nutricionista Escazú, consulta nutricional online Latinoamérica',
    path: '/contacto',
    jsonLdId: 'ld-contacto',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: 'https://www.mibarranutricion.com/contacto',
      mainEntity: {
        '@type': 'MedicalBusiness',
        name: 'Marianela Ibarra Nutrición',
        telephone: '+506-7011-7086',
        email: 'mibarranutricion@gmail.com',
        address: { '@type': 'PostalAddress', streetAddress: 'Momentum Pinares', addressLocality: 'San José', addressCountry: 'CR' },
      },
    },
  })
  return (
    <div className="pt-24 pb-10">
      {/* Header */}
      <section className="page-container mb-12">
        <span className="section-tag">Contacto</span>
        <h1 className="section-title mb-3">Escribime, con gusto te atiendo</h1>
        <p className="section-subtitle max-w-md">
          Para agendar una cita o si tenés alguna duda, podés comunicarte por cualquiera de estos medios.
        </p>
      </section>

      {/* WhatsApp hero CTA */}
      <section className="page-container mb-10">
        <a
          href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-green-500 hover:bg-green-600 transition-colors rounded-3xl p-8 text-white group"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="text-green-100 text-sm">La forma más rápida de comunicarte</p>
              <h2 className="font-display text-2xl font-bold">Agendar por WhatsApp</h2>
              <p className="text-green-100 text-sm">+(506) 7011-7086</p>
            </div>
          </div>
          <div className="shrink-0 bg-white text-green-600 font-semibold px-6 py-3 rounded-full group-hover:bg-green-50 transition-colors text-sm">
            Enviar mensaje →
          </div>
        </a>
      </section>

      {/* Contact channels */}
      <section className="page-container mb-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {channels.map(({ icon: Icon, label, value, sub, color, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card border p-5 flex items-start gap-4 hover:shadow-md transition-shadow ${color}`}
            >
              <Icon size={22} className="shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-0.5">{label}</p>
                <p className="font-medium text-sm leading-tight break-all">{value}</p>
                <p className="text-xs opacity-60 mt-0.5">{sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Locations + Hours grid */}
      <section className="page-container mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Locations */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={18} className="text-terra-400" />
              <h2 className="font-display text-xl text-gray-800">Ubicaciones</h2>
            </div>
            <div className="space-y-4">
              {locations.map(({ name, address, type }) => (
                <div key={name} className="card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-terra-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-terra-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-semibold text-gray-800 text-sm">{name}</h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        type === 'Virtual' ? 'bg-blue-50 text-blue-500' : 'bg-sage-100 text-sage-600'
                      }`}>{type}</span>
                    </div>
                    <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">{address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hours + Extra */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Clock size={18} className="text-sage-400" />
              <h2 className="font-display text-xl text-gray-800">Horarios</h2>
            </div>
            <div className="card p-5 mb-5">
              <ul className="space-y-3">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-medium">{day}</span>
                    <span className="text-gray-400">{time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-cream-200">
                <p className="text-xs text-gray-400">
                  * Los horarios exactos se coordinan directamente vía WhatsApp o correo.
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card overflow-hidden h-44">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62783.50127939786!2d-84.17195!3d9.93333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3433e5f49af%3A0x14e41e989ee97ca9!2sMomentum%20Pinares%2C%20San%20Jos%C3%A9!5e0!3m2!1ses!2scr!4v1697000000000!5m2!1ses!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación consultorio"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Todos a la Mesa */}
      <section className="page-container">
        <div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-3xl p-8 border border-sage-200 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-14 h-14 bg-sage-400 rounded-2xl flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-1">Organización sin fines de lucro</p>
            <h2 className="font-display text-xl text-gray-800 mb-2">Todos a la Mesa</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fundé esta organización para educar y acompañar a familiares de personas con Trastornos de la Conducta Alimentaria (TCA). Si tenés un ser querido que lo necesita, no están solos.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
