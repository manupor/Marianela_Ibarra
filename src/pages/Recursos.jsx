import { Link } from 'react-router-dom'
import { PlayCircle, ArrowRight, BookOpen, Headphones } from 'lucide-react'

const resources = [
  {
    type: 'Video',
    icon: PlayCircle,
    color: 'bg-terra-100 text-terra-500',
    title: 'Entrevista completa — Alimentación Intuitiva',
    desc: 'Conocé más sobre mi enfoque de trabajo, qué es la alimentación intuitiva y cómo puede transformar tu relación con la comida.',
    href: 'https://www.youtube.com/watch?v=sf1Spxc59Lw&list=PL7vf_bPQItC55nzaGauyDEJOFFP59lJgP&index=3&t=2s',
    external: true,
    featured: true,
  },
  {
    type: 'Blog',
    icon: BookOpen,
    color: 'bg-sage-100 text-sage-500',
    title: 'Blog: Nutriendo tu bienestar',
    desc: 'Artículos sobre alimentación consciente, manejo de atracones, relación con el cuerpo y mucho más.',
    href: '/blog',
    external: false,
    featured: false,
  },
  {
    type: 'Instagram',
    icon: Headphones,
    color: 'bg-rose-light text-rose-soft',
    title: 'Contenido en Instagram',
    desc: 'Seguime en @mibarranutricion para tips diarios, reflexiones y recursos sobre alimentación sin dietas.',
    href: 'https://www.instagram.com/mibarranutricion',
    external: true,
    featured: false,
  },
]

export default function Recursos() {
  return (
    <div className="pt-24 pb-10">
      {/* Header */}
      <section className="page-container mb-12">
        <span className="section-tag">Recursos adicionales</span>
        <h1 className="section-title mb-4">
          ¿Todavía tenés dudas de iniciar este proceso?
        </h1>
        <p className="section-subtitle max-w-xl">
          Te comparto recursos gratuitos para que puedas conocerme mejor y explorar algunos conceptos que trabajaríamos juntas.
        </p>
      </section>

      {/* Featured video */}
      <section className="page-container mb-14">
        <div className="card overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* YouTube embed */}
            <div className="relative bg-black aspect-video md:aspect-auto md:h-72">
              <iframe
                src="https://www.youtube.com/embed/sf1Spxc59Lw"
                title="Entrevista Marianela Ibarra — Alimentación Intuitiva"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
            </div>
            <div className="p-8">
              <span className="section-tag">Video destacado</span>
              <h2 className="font-display text-2xl text-gray-800 mb-3">
                Entrevista: Conocé mi enfoque
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                En esta entrevista explico qué es la alimentación intuitiva, cómo funciona el abordaje no-dieta y por qué es tan diferente a la nutrición tradicional.
              </p>
              <a
                href="https://www.youtube.com/watch?v=sf1Spxc59Lw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ver en YouTube
                <PlayCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="page-container mb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {resources.map(({ type, icon: Icon, color, title, desc, href, external }) => (
            <div key={title} className="card p-6 flex flex-col">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon size={22} />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-1">{type}</span>
              <h3 className="font-display text-lg text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-terra-500 text-sm font-semibold hover:gap-2 transition-all"
                >
                  Ir al recurso <ArrowRight size={14} />
                </a>
              ) : (
                <Link
                  to={href}
                  className="inline-flex items-center gap-1 text-terra-500 text-sm font-semibold hover:gap-2 transition-all"
                >
                  Ir al blog <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-container">
        <div className="bg-gradient-to-br from-terra-100 to-cream-200 rounded-3xl p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-gray-800 mb-3">
            ¿Lista para dar el primer paso?
          </h2>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            Agenda tu consulta inicial y descubre lo diferente que puede ser trabajar desde un abordaje no-dieta.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=50670117086"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar cita <ArrowRight size={16} />
            </a>
            <Link to="/servicios" className="btn-outline">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
