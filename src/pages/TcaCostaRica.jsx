import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Brain, Users, Sparkles, CheckCircle2, GraduationCap, Award } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { FadeUp, SlideInLeft, SlideInRight, StaggerGrid, ScaleIn } from '../components/Animated'

const tcaConditions = [
  {
    title: 'Anorexia Nerviosa',
    desc: 'Acompañamiento nutricional especializado para la recuperación de la relación con la comida y el cuerpo.',
  },
  {
    title: 'Bulimia Nerviosa',
    desc: 'Trabajo integral con ciclos restrictivos y conductas compensatorias desde un enfoque clínico y compasivo.',
  },
  {
    title: 'Trastorno por Atracón',
    desc: 'Tratamiento de episodios de atracón, abordando la raíz emocional y la restricción que los sostiene.',
  },
  {
    title: 'Alimentación Emocional',
    desc: 'Herramientas para identificar y trabajar la relación entre emociones y comida sin culpa.',
  },
  {
    title: 'Imagen Corporal',
    desc: 'Proceso terapéutico nutricional para reconstruir una relación más amable con tu cuerpo.',
  },
  {
    title: 'Otros TCA',
    desc: 'ARFID, ortorexia, vigorexia y otros trastornos de la conducta alimentaria con abordaje individualizado.',
  },
]

const credentials = [
  { icon: GraduationCap, title: 'Máster en TCA', desc: 'Universidad Europea de Madrid' },
  { icon: GraduationCap, title: 'Nutricionista UCR', desc: 'Universidad de Costa Rica' },
  { icon: Award, title: 'Docente UCR', desc: 'Maestría en Nutrición' },
  { icon: Heart, title: 'Todos a la Mesa', desc: 'Fundadora · Organización sin fines de lucro para familias de personas con TCA' },
]

const approachItems = [
  { icon: Brain, title: 'Enfoque no centrado en peso', desc: 'Priorizamos salud, conducta alimentaria y bienestar integral, no el número en la balanza.' },
  { icon: Heart, title: 'Alimentación intuitiva', desc: 'Reconectar con señales de hambre, saciedad y disfrute, sin reglas externas restrictivas.' },
  { icon: Users, title: 'Trabajo multidisciplinario', desc: 'Coordinación con psicología y psiquiatría cuando es necesario, para un tratamiento integral del TCA.' },
  { icon: Sparkles, title: 'Acompañamiento humano', desc: 'Un espacio seguro, sin juicios, con tiempos respetados para cada proceso.' },
]

const faqs = [
  {
    q: '¿Qué son los trastornos alimenticios (TCA)?',
    a: 'Los trastornos de conducta alimentaria son condiciones complejas que afectan la relación con la comida, el cuerpo y las emociones. Incluyen anorexia nerviosa, bulimia nerviosa, trastorno por atracón, ARFID y otros. Requieren un acompañamiento profesional especializado con enfoque integral.',
  },
  {
    q: '¿Atendés TCA en Costa Rica?',
    a: 'Sí. Atiendo presencialmente en Momentum Pinares y Momentum Escazú en San José, Costa Rica. También brindo consulta online para toda Latinoamérica.',
  },
  {
    q: '¿Cuál es tu formación específica en TCA?',
    a: 'Cuento con Máster en Trastornos de Conducta Alimentaria por la Universidad Europea de Madrid, soy nutricionista de la Universidad de Costa Rica, docente de la Maestría en Nutrición de la UCR y fundadora de Todos a la Mesa, organización sin fines de lucro que acompaña a familias de personas con TCA.',
  },
  {
    q: '¿En qué consiste el tratamiento nutricional para TCA?',
    a: 'El tratamiento se enfoca en restaurar la relación con la comida y el cuerpo desde un enfoque no centrado en peso. Trabajamos hábitos, señales internas, pensamientos sobre comida, imagen corporal y, cuando corresponde, coordinamos con psicología/psiquiatría para un abordaje integral.',
  },
  {
    q: '¿Puedo agendar una consulta online si no estoy en Costa Rica?',
    a: 'Sí. Atiendo consulta online para toda Latinoamérica. Podés agendar tu primera cita por WhatsApp al +506 7011-7086 o al correo mibarranutricion@gmail.com.',
  },
  {
    q: '¿También trabajan con familias de personas con TCA?',
    a: 'Sí. Una parte importante de la recuperación es el acompañamiento al entorno. A través de Todos a la Mesa brindamos espacios de educación y acompañamiento a familiares de personas con TCA.',
  },
]

export default function TcaCostaRica() {
  useSEO({
    title: 'Tratamiento TCA Costa Rica | Nutricionista Trastornos Alimenticios',
    description: 'Tratamiento nutricional para TCA y trastornos alimenticios en Costa Rica. Marianela Ibarra, Máster en TCA. Anorexia, bulimia, atracones, alimentación emocional e imagen corporal. Consulta presencial en San José y online para Latinoamérica.',
    keywords: 'nutricionista TCA Costa Rica, tratamiento TCA Costa Rica, nutricionista trastornos alimenticios Costa Rica, tratamiento trastornos alimenticios, anorexia Costa Rica, bulimia Costa Rica, tratamiento atracones Costa Rica, Marianela Ibarra TCA',
    path: '/tca-costa-rica',
    jsonLdId: 'ld-tca',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          '@id': 'https://www.mibarranutricion.com/tca-costa-rica#webpage',
          url: 'https://www.mibarranutricion.com/tca-costa-rica',
          name: 'Tratamiento TCA Costa Rica | Nutricionista Trastornos Alimenticios',
          inLanguage: 'es-CR',
          medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
          about: [
            { '@type': 'MedicalCondition', name: 'Anorexia Nerviosa' },
            { '@type': 'MedicalCondition', name: 'Bulimia Nerviosa' },
            { '@type': 'MedicalCondition', name: 'Trastorno por Atracón' },
            { '@type': 'MedicalCondition', name: 'Trastornos de Conducta Alimentaria (TCA)' },
          ],
          mainContentOfPage: {
            '@type': 'WebPageElement',
            cssSelector: 'main',
          },
          specialty: 'EatingDisorders',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.mibarranutricion.com/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://www.mibarranutricion.com/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Tratamiento TCA Costa Rica', item: 'https://www.mibarranutricion.com/tca-costa-rica' },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
        {
          '@type': 'Service',
          name: 'Tratamiento nutricional para TCA y trastornos alimenticios',
          serviceType: 'MedicalTherapy',
          provider: {
            '@type': 'Person',
            name: 'Marianela Ibarra',
            jobTitle: 'Nutricionista · Máster en TCA',
            url: 'https://www.mibarranutricion.com/sobre-mi',
          },
          areaServed: ['Costa Rica', 'Latinoamérica', 'Online'],
          audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        },
      ],
    },
  })

  return (
    <div className="pt-24 pb-10">
      {/* Hero */}
      <section className="page-container mb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <span className="section-tag">Tratamiento TCA · Costa Rica</span>
            <h1 className="section-title mb-4">
              Tratamiento de TCA y trastornos alimenticios en{' '}
              <em className="text-sage-500 not-italic">Costa Rica</em>
            </h1>
            <p className="text-gray-500 leading-relaxed mb-3 max-w-xl">
              Acompañamiento nutricional especializado para personas que viven con trastornos de conducta alimentaria, desde un enfoque clínico, humano y no centrado en peso.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Dra. Marianela Ibarra · Nutricionista · Máster en Trastornos de Conducta Alimentaria
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Agendar consulta para tratamiento de TCA en Costa Rica por WhatsApp"
                title="Agendar tratamiento de TCA · WhatsApp"
              >
                Agendar consulta <ArrowRight size={16} />
              </a>
              <Link
                to="/sobre-mi"
                className="btn-outline"
                aria-label="Conocé las credenciales de Marianela Ibarra, nutricionista especializada en TCA Costa Rica"
                title="Marianela Ibarra · Nutricionista especializada en TCA"
              >
                Sobre Marianela
              </Link>
            </div>
          </SlideInLeft>

          <SlideInRight delay={100}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-terra-100 rounded-[2.5rem] rotate-2 scale-105" />
              <img
                src="/marianela.jpg"
                alt="Marianela Ibarra, nutricionista TCA en Costa Rica especializada en trastornos alimenticios"
                className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[2rem] shadow-2xl mx-auto"
                loading="eager"
                fetchpriority="high"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-semibold text-gray-700">Máster en TCA</p>
                <p className="text-[10px] text-gray-400">Universidad Europea de Madrid</p>
              </div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* TCA que acompaño */}
      <section className="py-12 md:py-14 bg-cream-100">
        <div className="page-container">
          <FadeUp className="text-center mb-8 max-w-2xl mx-auto">
            <span className="section-tag">Trastornos alimenticios que acompaño</span>
            <h2 className="section-title">Tratamiento especializado para TCA</h2>
            <p className="section-subtitle mt-3">
              Cada trastorno de conducta alimentaria es único. Trabajamos juntas con un plan personalizado según tu historia, tu momento y tus necesidades.
            </p>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerMs={100}>
            {tcaConditions.map(({ title, desc }) => (
              <div key={title} className="card p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-display text-lg text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Mi enfoque */}
      <section className="py-12 md:py-14">
        <div className="page-container max-w-5xl">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">Mi enfoque clínico</span>
            <h2 className="section-title">Cómo trabajo los TCA</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 gap-6" staggerMs={120}>
            {approachItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-sage-100 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-sage-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gray-800 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Credenciales */}
      <section className="py-12 md:py-14 bg-gradient-to-br from-sage-50 to-cream-100">
        <div className="page-container max-w-5xl">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">Formación especializada</span>
            <h2 className="section-title">Por qué elegir una nutricionista especializada en TCA</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-3">
              El tratamiento de los trastornos alimenticios requiere formación clínica específica y experiencia. Esta es la mía:
            </p>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerMs={90}>
            {credentials.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm text-center">
                <div className="w-10 h-10 rounded-xl bg-terra-100 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-terra-500" />
                </div>
                <h3 className="font-display text-base text-gray-800 mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-snug">{desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-14">
        <div className="page-container max-w-3xl">
          <FadeUp className="text-center mb-8">
            <span className="section-tag">Preguntas frecuentes</span>
            <h2 className="section-title">Sobre el tratamiento de TCA en Costa Rica</h2>
          </FadeUp>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <FadeUp key={i} delay={i * 60}>
                <details className="card p-5 group">
                  <summary className="font-display text-base md:text-lg text-gray-800 cursor-pointer list-none flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-sage-500 shrink-0 mt-1 group-open:rotate-90 transition-transform" />
                    <span>{q}</span>
                  </summary>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3 pl-7">{a}</p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-900">
        <FadeUp className="page-container text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-terra-300 mb-4">
            Tratamiento TCA · Costa Rica
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Da el primer paso hoy
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Agendá una consulta para conversar sobre tu proceso. Atiendo presencial en San José y online para toda Latinoamérica.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            aria-label="Agendar consulta nutricional para tratamiento de TCA en Costa Rica por WhatsApp"
            title="Agendar tu consulta para tratamiento de TCA"
          >
            Agendar por WhatsApp <ArrowRight size={16} />
          </a>
          <p className="text-xs text-gray-500 mt-6">
            <Link
              to="/servicios"
              className="hover:text-gray-300 underline-offset-4 hover:underline"
              aria-label="Ver todos los servicios de nutrición y TCA"
            >
              Ver todos los servicios
            </Link>
            {' · '}
            <Link
              to="/contacto"
              className="hover:text-gray-300 underline-offset-4 hover:underline"
              aria-label="Información de contacto y ubicaciones"
            >
              Contacto y ubicaciones
            </Link>
          </p>
        </FadeUp>
      </section>
    </div>
  )
}
