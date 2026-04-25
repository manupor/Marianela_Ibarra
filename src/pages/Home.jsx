import { Link } from 'react-router-dom'
import { ArrowRight, Users, Mic, BookOpen, Star, Heart, CheckCircle2, ChevronRight } from 'lucide-react'
import { FadeUp, SlideInLeft, SlideInRight, ScaleIn, StaggerGrid } from '../components/Animated'
import { useParallax } from '../hooks/useInView'

const services = [
  {
    icon: Heart,
    title: 'Acompañamiento Nutricional',
    tag: 'Consulta Individual',
    desc: 'Transformamos tu relación con la comida desde un enfoque no-dieta, trabajando en tu bienestar integral sin control obsesivo.',
    color: 'bg-terra-100 text-terra-500',
    link: '/servicios',
  },
  {
    icon: Users,
    title: 'Grupo de Apoyo',
    tag: '¡Próximamente!',
    desc: 'Navega el mundo de la alimentación libre de dietas en comunidad con mujeres que comparten tus retos.',
    color: 'bg-sage-100 text-sage-500',
    link: 'https://forms.gle/cr3cr1VcaQH1xQ6b9',
    external: true,
  },
  {
    icon: Mic,
    title: 'Charlas y Talleres',
    tag: 'Grupos y Empresas',
    desc: 'Charlas sobre alimentación intuitiva, consciente y diversidad corporal para empresas, colegios y grupos.',
    color: 'bg-rose-light text-rose-soft',
    link: '/servicios',
  },
]

const values = [
  'Sin dietas restrictivas',
  'Enfoque en bienestar real',
  'Compasión corporal',
  'Alimentación intuitiva',
]

const testimonials = [
  {
    text: 'Marianela me ayudó a dejar de pelear con mi cuerpo. Por primera vez en años, como sin culpa.',
    name: 'Ana G.',
    role: 'Paciente',
  },
  {
    text: 'El proceso fue transformador. Aprendí que la salud no tiene un número en la báscula.',
    name: 'Laura M.',
    role: 'Paciente',
  },
  {
    text: 'Nunca pensé que podría tener una relación normal con la comida. Hoy es posible gracias a este trabajo.',
    name: 'Sofía R.',
    role: 'Paciente',
  },
]

export default function Home() {
  const blobRef1 = useParallax(-0.15)
  const blobRef2 = useParallax(0.1)
  const heroImgRef = useParallax(0.08)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={blobRef1} className="absolute -top-32 -right-32 w-96 h-96 bg-sage-100 rounded-full opacity-60 blur-3xl will-change-transform" />
          <div ref={blobRef2} className="absolute -bottom-20 -left-20 w-80 h-80 bg-terra-100 rounded-full opacity-50 blur-3xl will-change-transform" />
        </div>

        <div className="page-container relative z-10 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <SlideInLeft className="order-2 md:order-1">
            <span className="section-tag">Nutricionista · Costa Rica</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-[1.15] mb-6">
              Transforma tu relación con la comida y tu{' '}
              <em className="text-sage-500 not-italic">cuerpo</em>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-md">
              Deja las dietas atrás. Te acompaño a escuchar tu cuerpo, hacer las paces con la comida y vivir con bienestar real.
            </p>
            <p className="text-sm font-semibold text-terra-500 mb-8">
              Dra. Marianela Ibarra — Nutricionista · Máster en TCA
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar cita
                <ArrowRight size={16} />
              </a>
              <Link to="/sobre-mi" className="btn-outline">
                Conoceme
              </Link>
            </div>

            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <CheckCircle2 size={15} className="text-sage-400 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </SlideInLeft>

          {/* Image */}
          <SlideInRight className="order-1 md:order-2 flex justify-center" delay={100}>
            <div className="relative" ref={heroImgRef} style={{willChange:'transform'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-terra-100 rounded-[2.5rem] rotate-3 scale-105" />
              <img
                src="/marianela.jpg"
                alt="Dra. Marianela Ibarra, Nutricionista"
                className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[2rem] shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center">
                  <BookOpen size={18} className="text-sage-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Experiencia</p>
                  <p className="text-sm font-bold text-gray-800">+10 años</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-terra-400 rounded-2xl shadow-xl px-4 py-3">
                <p className="text-white text-xs font-semibold">Máster en TCA</p>
                <p className="text-terra-100 text-[10px]">Univ. Europea de Madrid</p>
              </div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* Group Banner */}
      <section className="bg-gradient-to-r from-sage-500 to-sage-400 py-5">
        <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">¡PRONTO!</span>
            <p className="text-white font-medium text-sm md:text-base">
              Grupo de apoyo virtual para mujeres — alimentación libre de dietas
            </p>
          </div>
          <a
            href="https://forms.gle/cr3cr1VcaQH1xQ6b9"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-sage-600 font-semibold text-sm px-5 py-2 rounded-full hover:bg-cream-100 transition-colors flex items-center gap-1"
          >
            Más información <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="page-container">
          <FadeUp className="text-center mb-10">
            <span className="section-tag">Lo que ofrezco</span>
            <h2 className="section-title">Servicios</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerMs={120}>
            {services.map(({ icon: Icon, title, tag, desc, color, link, external }) => (
              <div key={title} className="card group hover:shadow-md transition-shadow duration-300 flex flex-col">
                <div className="p-6 flex-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-1 block">{tag}</span>
                  <h3 className="font-display text-xl text-gray-800 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <div className="px-6 pb-6">
                  {external ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-terra-500 text-sm font-semibold hover:gap-2 transition-all"
                    >
                      Más información <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link
                      to={link}
                      className="inline-flex items-center gap-1 text-terra-500 text-sm font-semibold hover:gap-2 transition-all"
                    >
                      Más información <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-cream-200">
        <div className="page-container grid md:grid-cols-2 gap-12 items-center">
          <SlideInLeft delay={0}>
            <span className="section-tag">Sobre mí</span>
            <h2 className="section-title mb-4">
              Un enfoque diferente a la nutrición tradicional
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Desde el primer día que empecé a estudiar nutrición tenía claro que quería ayudar a las personas a tener una relación sana con la comida — no sólo una "buena dieta".
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Trabajo desde un abordaje no-dieta: salud sin restricción, más conexión con tu cuerpo y sin el ciclo agotador de comer bien / comer mal.
            </p>
            <Link to="/sobre-mi" className="btn-secondary">
              Conocé mi historia <ArrowRight size={16} />
            </Link>
          </SlideInLeft>
          <StaggerGrid className="grid grid-cols-2 gap-4" staggerMs={80}>
            {[
              { n: '+10', label: 'Años de experiencia' },
              { n: 'UCR', label: 'Docente Maestría Nutrición' },
              { n: 'TCA', label: 'Máster especializada' },
              { n: '🌱', label: 'Alimentación sin culpa' },
            ].map(({ n, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <p className="font-display text-3xl font-bold text-sage-500 mb-1">{n}</p>
                <p className="text-xs text-gray-500 leading-tight">{label}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="page-container">
          <FadeUp className="text-center mb-10">
            <span className="section-tag">Voces de pacientes</span>
            <h2 className="section-title">Lo que dicen</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-3 gap-6" staggerMs={130}>
            {testimonials.map(({ text, name, role }) => (
              <div key={name} className="card p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{name}</p>
                    <p className="text-xs text-gray-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900">
        <FadeUp className="page-container text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-terra-300 mb-4">¿Lista para empezar?</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Tu relación con la comida puede cambiar
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Agenda tu primera consulta y comenzamos juntas a construir tu bienestar — sin dietas, sin culpa.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            Escribime por WhatsApp
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </FadeUp>
      </section>
    </div>
  )
}
