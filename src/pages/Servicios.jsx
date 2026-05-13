import { useState } from 'react'
import { ChevronDown, ArrowRight, Heart, Users, Mic, CheckCircle2 } from 'lucide-react'
import { FadeUp, StaggerGrid, ScaleIn } from '../components/Animated'
import { useSEO } from '../hooks/useSEO'

const items = [
  'Culpa al comer',
  'Atracones',
  'Historial de dietas crónicas',
  'Ansiedad con la comida / hambre emocional',
  'Imagen corporal',
  'Dificultad para sostener hábitos',
  'Desconexión con hambre y saciedad',
  'Autocuidado desde el respeto',
  'Trastornos de conducta alimentaria',
  'Recomendaciones para condiciones de salud',
]

const groupTopics = [
  'Culpa después de comer',
  '¿Cómo pensar menos en comida durante el día?',
  'Herramientas para una mejor relación con la comida',
  'Imagen corporal',
  'Nutrición sin reglas',
  'Conexión con señales corporales',
  'Acompañamiento y comunidad',
]

const groupForWho = [
  'Te sentís sola en este proceso',
  'Querés retomar tu camino con apoyo de otras',
  'No podés empezar ya tu proceso individual pero querés iniciar tu camino',
  'Ya estás en proceso individual y querés complementarlo',
  'Necesitás constancia y contención',
]

const topics = [
  '¿Qué es la cultura de dieta y por qué nos daña?',
  'Haciendo la paz con la comida',
  'Aceptación de la diversidad corporal',
  'Alimentación consciente y mindful eating',
  'Herramientas prácticas para el bienestar',
]

const services = [
  {
    id: 'consulta',
    icon: Heart,
    color: 'bg-terra-100 text-terra-500',
    tag: 'Individual',
    title: 'Consulta nutricional',
    subtitle: 'Enfoque no centrado en peso',
    summary: 'Un espacio personalizado para transformar tu relación con la comida — muy diferente a la nutrición tradicional.',
    description: `En la consulta nutricional, trabajaremos juntos para que transformes tu relación con la comida y tu cuerpo. Nos enfocaremos en tu bienestar integral dejando atrás métodos de control obsesivo de comida.

Revisamos tus hábitos, tu historia con la comida y a partir de donde estás, te acompaño a construir tu nueva rutina de bienestar.`,
    forWho: items,
    forWhoTitle: 'Trabajamos temas como',
    cta: { label: 'Agendar consulta', href: 'https://api.whatsapp.com/send/?phone=50670117086' },
  },
  {
    id: 'grupo',
    icon: Users,
    color: 'bg-sage-100 text-sage-500',
    tag: 'Comunidad',
    title: 'Grupo de apoyo',
    subtitle: 'Para mujeres',
    summary: 'Un espacio para mujeres que desean mejorar su relación con la comida y el cuerpo en comunidad.',
    description: `Muchas veces escuchar “a mí también me pasa” sana más de lo que imaginamos.

En el grupo trabajamos: culpa después de comer, cómo pensar menos en comida durante el día, herramientas para una mejor relación con la comida, imagen corporal, nutrición sin reglas, conexión con señales corporales y acompañamiento y comunidad.`,
    forWho: groupForWho,
    forWhoTitle: 'Ideal para vos si…',
    cta: { label: 'Quiero más info', href: 'https://api.whatsapp.com/send/?phone=50670117086' },
  },
  {
    id: 'charlas',
    icon: Mic,
    color: 'bg-rose-light text-rose-soft',
    tag: 'Grupos y Empresas',
    title: 'Charlas y Talleres',
    subtitle: 'Colegios, empresas, grupos',
    summary: 'Actividades diseñadas para promover bienestar físico y mental, y mejorar la relación con el cuerpo y la alimentación.',
    description: `Brindo charlas y talleres en empresas, colegios, escuelas y grupos. Cada actividad está diseñada para promover bienestar físico y mental así como mejorar la relación con el cuerpo y la alimentación.

Te aseguro que no escucharás lo tradicional de la nutrición que ya te sabés de memoria. Vamos a lo profundo: cultura de dieta, aceptación corporal, alimentación consciente.`,
    forWho: topics,
    cta: { label: 'Solicitar información', href: 'https://api.whatsapp.com/send/?phone=50670117086' },
  },
]

function ServiceCard({ service }) {
  const [open, setOpen] = useState(false)
  const { icon: Icon, color, tag, title, subtitle, summary, description, forWho, cta } = service

  return (
    <div className="card overflow-visible">
      {/* Header */}
      <div className="p-6 flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
          <Icon size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">{tag}</span>
          <h3 className="font-display text-xl text-gray-800 leading-tight">{title}</h3>
          <p className="text-sm text-gray-400 mt-0.5">{subtitle}</p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            open ? 'bg-sage-100 text-sage-600 rotate-180' : 'bg-cream-200 text-gray-500'
          }`}
          aria-label="Expandir"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      <p className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">{summary}</p>

      {/* Expanded */}
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6 border-t border-cream-200 pt-4">
          <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line mb-5">{description}</p>

          {forWho && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                {service.forWhoTitle || (service.id === 'charlas' ? 'Temas que tratamos' : '¿Es para vos si...')}
              </p>
              <ul className="space-y-2">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-sage-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            {cta.label}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Footer CTA when collapsed */}
      {!open && (
        <div className="px-6 pb-5">
          <button
            onClick={() => setOpen(true)}
            className="text-terra-500 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
          >
            Ver detalles <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  )
}

export default function Servicios() {
  useSEO({
    title: 'Servicios · Consulta nutricional online, grupo de apoyo y charlas',
    description: 'Consulta nutricional online y presencial con enfoque no centrado en peso. Grupo de apoyo virtual para mujeres y charlas/talleres para empresas y colegios. Trabajamos culpa al comer, atracones, hambre emocional, imagen corporal y TCA.',
    keywords: 'consulta nutricional online, consulta nutricional Costa Rica, enfoque no centrado en peso, grupo de apoyo trastornos alimentarios, grupo apoyo mujeres alimentación, tratamiento atracones, tratamiento hambre emocional, charlas nutrición empresas, talleres alimentación consciente',
    path: '/servicios',
    jsonLdId: 'ld-servicios',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'Service', position: 1, name: 'Consulta nutricional', serviceType: 'Nutrition counseling', provider: { '@type': 'Person', name: 'Marianela Ibarra' }, areaServed: ['Costa Rica', 'Latinoamérica', 'Online'] },
        { '@type': 'Service', position: 2, name: 'Grupo de apoyo virtual para mujeres', serviceType: 'Support group', provider: { '@type': 'Person', name: 'Marianela Ibarra' } },
        { '@type': 'Service', position: 3, name: 'Charlas y talleres', serviceType: 'Workshops', provider: { '@type': 'Person', name: 'Marianela Ibarra' } },
      ],
    },
  })
  return (
    <div className="pt-24 pb-10">
      {/* Hero */}
      <section className="page-container mb-10">
        <FadeUp className="max-w-2xl">
          <span className="section-tag">Lo que ofrezco</span>
          <h1 className="section-title mb-4">
            Un acompañamiento nutricional muy diferente a lo tradicional
          </h1>
          <p className="section-subtitle">
            Revisamos tus hábitos y tu relación con la comida, y desde donde estás, te acompaño a construir tu nueva rutina de bienestar — sin dietas, sin control obsesivo.
          </p>
        </FadeUp>
      </section>

      {/* Service cards */}
      <section className="page-container mb-12">
        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerMs={120}>
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </StaggerGrid>
      </section>

      {/* Group Support Banner */}
      <section className="page-container mb-12">
        <ScaleIn>
        <div className="bg-gradient-to-br from-sage-400 to-sage-600 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="p-8 md:p-12">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">¡PRÓXIMAMENTE!</span>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
                Grupo de apoyo virtual para mujeres
              </h2>
              <p className="text-sage-100 leading-relaxed mb-6">
                Un espacio para mujeres que desean mejorar su relación con la comida y el cuerpo en comunidad. Porque muchas veces escuchar “a mí también me pasa” sana más de lo que imaginamos.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-sage-600 font-semibold px-6 py-3 rounded-full hover:bg-cream-100 transition-colors"
              >
                Quiero más info <ArrowRight size={16} />
              </a>
            </div>
            <div className="hidden md:block h-full">
              <img
                src="/magnific_grupo-de-apoyo-virtual-pa_2976944329.png"
                alt="Grupo de mujeres"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </ScaleIn>
      </section>

      {/* Process steps */}
      <section className="bg-cream-200 py-14">
        <div className="page-container">
          <FadeUp className="text-center mb-10">
            <span className="section-tag">¿Cómo funciona?</span>
            <h2 className="section-title">El proceso</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-4 gap-6" staggerMs={100}>
            {[
              { step: '01', title: 'Primera consulta', desc: 'Nos conocemos y exploramos tu historia con la comida y tu cuerpo.' },
              { step: '02', title: 'Plan personalizado', desc: 'Juntos construimos un plan a tu medida — sin dietas rígidas.' },
              { step: '03', title: 'Seguimiento continuo', desc: 'Acompañamiento constante, ajustamos según tu progreso real.' },
              { step: '04', title: 'Transformación', desc: 'Más paz con la comida, más escucha corporal, más bienestar.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-terra-400 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </div>
  )
}
