import { Link } from 'react-router-dom'
import { ArrowRight, Users, Mic, BookOpen, Star, Heart, CheckCircle2, ChevronRight, AlertCircle, Sparkles } from 'lucide-react'
import { FadeUp, SlideInLeft, SlideInRight, ScaleIn, StaggerGrid } from '../components/Animated'
import { useParallax } from '../hooks/useInView'
import { useSEO } from '../hooks/useSEO'

const services = [
  {
    icon: Heart,
    title: 'Consulta nutricional',
    tag: 'Individual',
    desc: 'Un espacio personalizado con enfoque no centrado en peso para trabajar culpa, atracones, imagen corporal, hábitos y más.',
    color: 'bg-terra-100 text-terra-500',
    link: '/servicios',
  },
  {
    icon: Users,
    title: 'Grupo de apoyo',
    tag: 'Comunidad',
    desc: 'Un espacio para mujeres que desean mejorar su relación con la comida y el cuerpo en comunidad.',
    color: 'bg-sage-100 text-sage-500',
    link: '/servicios',
  },
  {
    icon: Mic,
    title: 'Charlas y talleres',
    tag: 'Grupos y Empresas',
    desc: 'Charlas sobre alimentación intuitiva, consciente y diversidad corporal para empresas, colegios y grupos.',
    color: 'bg-rose-light text-rose-soft',
    link: '/servicios',
  },
]

const painPoints = [
  'Empiezas dieta cada lunes',
  'Sientes culpa después de comer',
  'Piensas en comida todo el día',
  'Sientes que no tienes control cuando comes ciertos alimentos',
  'Te cuesta comer sin reglas',
  'Pensar en tu cuerpo te quita mucha energía mental',
  'Estás cansada de intentarlo y sentir que fallas',
]

const beliefs = [
  'Más disciplina',
  'Controlar más',
  'Bajar peso para estar bien',
  'Encontrar “la dieta correcta”',
]

const realNeeds = [
  'Entender qué está pasando en su cuerpo y mente',
  'Salir del ciclo restricción-descontrol',
  'Aprender a comer con confianza',
  'Reconectar con señales internas',
  'Construir hábitos sostenibles',
  'Dejar de vivir peleando con ellas mismas',
]

const focusAreas = [
  'Relación con la comida',
  'Salud física y emocional',
  'Mejorar tu energía',
  'Hábitos sostenibles',
  'Imagen corporal',
  'Calidad de vida',
]

const possibleChanges = [
  'La comida ya no ocupa tu mente todo el día',
  'Podés comer sin culpa',
  'Salís a comer sin ansiedad',
  'Tu cuerpo deja de sentirse enemigo',
  'Tenés energía más estable',
  'Vivís más presente y menos en guerra',
]

const journey = [
  { step: '01', title: 'Descubrir', desc: 'Empezás a explorar el enfoque no centrado en peso.' },
  { step: '02', title: 'Construir', desc: 'Creamos un camino realista para vos.' },
  { step: '03', title: 'Transformar', desc: 'Un paso a la vez se va transformando tu relación con la comida y tu cuerpo.' },
  { step: '04', title: 'Vivir', desc: 'Recuperás paz y libertad que se refleja en muchas áreas de tu vida.' },
]

const values = [
  'Sin dietas restrictivas',
  'Enfoque en bienestar integral',
  'Experiencia +15 años',
]

const testimonials = [
  {
    text: 'En estos espacios todos hemos, estamos o pasamos por algo similar y al estar en un lugar seguro para hablarlo y expresarlo es mucho más fácil ver una luz en el túnel.',
    name: 'Participante',
    role: 'Grupo de apoyo',
  },
  {
    text: 'Estar con personas que han pasado lo mismo, es una ayuda y motivación que uno no se imagina hasta que lo vive.',
    name: 'Participante',
    role: 'Grupo de apoyo',
  },
  {
    text: 'El proceso de un TCA en muchos casos puede llegar a sentirse muy solo y poder encontrar un espacio seguro con personas que han vivido experiencias muy similares a las personales, lo hace sentirse acompañado, escuchado y comprendido.',
    name: 'Participante',
    role: 'Grupo de apoyo',
  },
  {
    text: 'La escucha con empatía fue una de las experiencias más bonitas que viví durante este grupo.',
    name: 'Participante',
    role: 'Grupo de apoyo',
  },
]

export default function Home() {
  useSEO({
    title: 'Nutricionista no-dieta · Alimentación intuitiva · Online y Costa Rica',
    description: 'Nutricionista especializada en alimentación intuitiva, enfoque no centrado en peso y TCA. Acompaño a personas cansadas de las dietas, la culpa y la obsesión a construir paz con la comida y su cuerpo. Consulta online (Latinoamérica) y presencial en San José.',
    keywords: 'nutricionista alimentación intuitiva, nutricionista no dieta, enfoque no centrado en peso, nutricionista online, nutricionista Costa Rica, salud sin dietas, alimentación consciente, Marianela Ibarra nutricionista',
    path: '/',
    jsonLdId: 'ld-home',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Marianela Ibarra Nutrición',
      url: 'https://www.mibarranutricion.com/',
      image: 'https://www.mibarranutricion.com/marianela.jpg',
      telephone: '+506-7011-7086',
      email: 'mibarranutricion@gmail.com',
      medicalSpecialty: 'Nutrition',
      areaServed: ['Costa Rica', 'Online'],
      address: { '@type': 'PostalAddress', addressLocality: 'San José', addressCountry: 'CR' },
      sameAs: ['https://www.instagram.com/mibarranutricion'],
    },
  })
  const blobRef1 = useParallax(-0.15)
  const blobRef2 = useParallax(0.1)
  const heroImgRef = useParallax(0.08)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={blobRef1} className="absolute -top-32 -right-32 w-96 h-96 bg-sage-100 rounded-full opacity-60 blur-3xl will-change-transform" />
          <div ref={blobRef2} className="absolute -bottom-20 -left-20 w-80 h-80 bg-terra-100 rounded-full opacity-50 blur-3xl will-change-transform" />
        </div>

        <div className="page-container relative z-10 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <SlideInLeft className="order-2 md:order-1">
            <span className="section-tag">Nutricionista · Costa Rica</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-[1.15] mb-6">
              Transforma tu relación con la comida y tu{' '}
              <em className="text-sage-500 not-italic">cuerpo</em>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-md">
              Acompaño a personas cansadas de las dietas, la culpa y la obsesión a construir una relación de paz, libertad y confianza con la comida y su cuerpo.
            </p>
            <p className="text-sm font-semibold text-terra-500 mb-8">
              Dra. Marianela Ibarra — Nutricionista · Máster en TCA
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
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
                  <p className="text-sm font-bold text-gray-800">+15 años</p>
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

      {/* ¿Cómo te puedo ayudar? + Pain points */}
      <section className="py-12 md:py-14">
        <div className="page-container">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">¿Cómo te puedo ayudar?</span>
            <h2 className="section-title">Un acompañamiento nutricional diferente</h2>
          </FadeUp>

          <FadeUp className="max-w-3xl mx-auto bg-cream-100 rounded-3xl p-6 md:p-8 border border-cream-300">
            <p className="text-gray-700 font-semibold mb-4">Si te relacionas con algunas de estas cosas:</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                  <AlertCircle size={15} className="text-terra-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              <strong className="text-sage-600">No sos un fracaso.</strong>{' '}
              Probablemente has estado intentando resolverlo desde el lugar equivocado.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* No se trata de más fuerza de voluntad */}
      <section className="py-12 bg-cream-100">
        <div className="page-container">
          <FadeUp className="text-center mb-8 max-w-2xl mx-auto">
            <span className="section-tag">Cambio de perspectiva</span>
            <h2 className="section-title">No se trata de más fuerza de voluntad</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeUp className="card p-6 md:p-7">
              <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-3">Lo que muchas creen que necesitan</p>
              <ul className="space-y-2">
                {beliefs.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-terra-400 mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp className="card p-6 md:p-7 bg-sage-50 border border-sage-100" delay={100}>
              <p className="text-xs uppercase tracking-widest font-semibold text-sage-600 mb-3">Lo que realmente necesitan</p>
              <ul className="space-y-2">
                {realNeeds.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-sage-500 shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Te cuento de mi enfoque */}
      <section className="py-12">
        <div className="page-container max-w-4xl">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">Mi enfoque</span>
            <h2 className="section-title">Te cuento de mi enfoque</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-3">
              Trabajo desde un <strong className="text-sage-600">“enfoque no centrado en peso”</strong>. Esto significa que más allá de tu peso, trabajamos juntos en:
            </p>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" staggerMs={90}>
            {focusAreas.map((f) => (
              <div key={f} className="card p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center shrink-0">
                  <Heart size={16} className="text-sage-500" />
                </div>
                <p className="text-sm text-gray-700 font-medium">{f}</p>
              </div>
            ))}
          </StaggerGrid>
          <FadeUp className="text-center text-gray-500 italic mt-8 max-w-xl mx-auto">
            Porque tu vida es mucho más que un número en la balanza.
          </FadeUp>
        </div>
      </section>

      {/* Lo que puede cambiar */}
      <section className="py-12 bg-gradient-to-br from-sage-50 to-cream-100">
        <div className="page-container max-w-4xl">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">Lo que puede cambiar</span>
            <h2 className="section-title">Imaginá que…</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 gap-3 mb-8" staggerMs={80}>
            {possibleChanges.map((c) => (
              <div key={c} className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Sparkles size={16} className="text-terra-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{c}</p>
              </div>
            ))}
          </StaggerGrid>
          <FadeUp className="text-center">
            <p className="text-gray-700 mb-5">Esto es posible y puede empezar con una conversación.</p>
            <a
              href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Conversemos <ArrowRight size={16} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Mis servicios */}
      <section className="py-12 md:py-14">
        <div className="page-container">
          <FadeUp className="text-center mb-8 max-w-2xl mx-auto">
            <span className="section-tag">Mis servicios</span>
            <h2 className="section-title mb-3">Cada proceso es distinto</h2>
            <p className="section-subtitle">
              Por eso podés elegir la modalidad de acompañamiento que mejor se adapte a tus necesidades, tu momento actual y la forma en que hoy te sentís.
            </p>
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

      {/* ¿Cómo se ve tu camino conmigo? */}
      <section className="py-12 bg-cream-200">
        <div className="page-container">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">Tu proceso</span>
            <h2 className="section-title">¿Cómo se ve tu camino conmigo?</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerMs={100}>
            {journey.map(({ step, title, desc }) => (
              <div key={step} className="card p-6 text-center">
                <div className="w-12 h-12 bg-terra-400 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-display text-lg text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Próximamente — Grupo de apoyo */}
      <section className="py-12">
        <div className="page-container">
          <ScaleIn>
            <div className="bg-gradient-to-br from-sage-400 to-sage-600 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 items-stretch">
                <div className="p-8 md:p-12">
                  <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">¡PRÓXIMAMENTE!</span>
                  <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
                    Grupo de apoyo virtual para mujeres
                  </h2>
                  <p className="text-sage-100 leading-relaxed mb-6">
                    Un espacio para empezar a navegar el mundo de una alimentación libre de dietas al mismo tiempo que generás comunidad con otras que comparten tus mismos retos.
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
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-12 bg-cream-200">
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
              { n: '+15', label: 'Años de experiencia' },
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
      <section className="py-12 md:py-14">
        <div className="page-container">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">Testimonios · Grupo de apoyo</span>
            <h2 className="section-title">Lo que dicen</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerMs={130}>
            {testimonials.map(({ text, name, role }, i) => (
              <div key={i} className="card p-6">
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
      <section className="py-12 bg-gray-900">
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
