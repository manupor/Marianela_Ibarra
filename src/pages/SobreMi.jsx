import { Link } from 'react-router-dom'
import { Instagram, GraduationCap, Heart, ArrowRight, Award } from 'lucide-react'
import { FadeUp, SlideInLeft, SlideInRight, ScaleIn, StaggerGrid } from '../components/Animated'
import { useSEO } from '../hooks/useSEO'

const formation = [
  {
    title: 'Licenciatura en Nutrición',
    institution: 'Universidad de Costa Rica',
    type: 'Grado',
  },
  {
    title: 'Máster en Trastornos de Conducta Alimentaria',
    institution: 'Universidad Europea de Madrid',
    type: 'Posgrado',
  },
  {
    title: 'Diplomado en Psicología de la Alimentación Consciente',
    institution: 'Basado en Mindfulness, Aceptación y Compasión — Escuela Salud y Consciencia, Chile',
    type: 'Especialización',
  },
  {
    title: 'Diplomado en TCA',
    institution: 'Comenzar de Nuevo, México',
    type: 'Especialización',
  },
  {
    title: 'Diplomado en Acompañamiento Terapéutico para TCA',
    institution: 'Comenzar de Nuevo, México',
    type: 'Especialización',
  },
  {
    title: 'Múltiples formaciones en Alimentación Intuitiva',
    institution: 'Abordaje no-dieta — formación continua',
    type: 'Formación continua',
  },
]

const highlights = [
  {
    icon: Award,
    title: '+15 años de experiencia',
    desc: 'En consulta nutricional clínica, especializada en TCA y alimentación intuitiva.',
  },
  {
    icon: GraduationCap,
    title: 'Docente universitaria',
    desc: 'He sido docente en la Maestría de Nutrición de la UCR y en diplomados internacionales.',
  },
  {
    icon: Heart,
    title: 'Todos a la Mesa',
    desc: 'Fundadora de esta organización sin fines de lucro que acompaña a familias de personas con TCA.',
  },
]

export default function SobreMi() {
  useSEO({
    title: 'Marianela Ibarra | Nutricionista especializada en TCA Costa Rica',
    description: 'Marianela Ibarra, nutricionista en Costa Rica especializada en TCA y trastornos alimenticios. +15 años de experiencia, Máster en Trastornos de Conducta Alimentaria (Universidad Europea de Madrid), docente UCR y fundadora de Todos a la Mesa.',
    keywords: 'Marianela Ibarra nutricionista, nutricionista TCA Costa Rica, nutricionista trastornos alimenticios, especialista TCA, Máster Trastornos de Conducta Alimentaria, nutricionista UCR, Todos a la Mesa, nutricionista 15 años experiencia',
    path: '/sobre-mi',
    type: 'profile',
    jsonLdId: 'ld-sobre-mi',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Marianela Ibarra',
        givenName: 'Marianela',
        familyName: 'Ibarra',
        jobTitle: 'Nutricionista especializada en TCA · Máster en Trastornos de Conducta Alimentaria',
        description: 'Nutricionista en Costa Rica especializada en trastornos alimenticios (TCA), alimentación intuitiva y enfoque no centrado en peso.',
        url: 'https://www.mibarranutricion.com/sobre-mi',
        image: 'https://www.mibarranutricion.com/marianela.jpg',
        knowsAbout: [
          'Trastornos de Conducta Alimentaria (TCA)',
          'Trastornos Alimenticios',
          'Anorexia Nerviosa',
          'Bulimia Nerviosa',
          'Trastorno por Atracón',
          'Alimentación Intuitiva',
          'Imagen Corporal',
          'Enfoque No Centrado en Peso',
        ],
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Universidad Europea de Madrid' },
          { '@type': 'CollegeOrUniversity', name: 'Universidad de Costa Rica' },
        ],
        worksFor: { '@type': 'Organization', name: 'Todos a la Mesa' },
        sameAs: ['https://www.instagram.com/mibarranutricion'],
      },
    },
  })
  return (
    <div className="pt-24 pb-10">
      {/* Hero */}
      <section className="page-container mb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <SlideInLeft className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-cream-300 rounded-[2rem] rotate-2 scale-105" />
              <img
                src="/marianela.jpg"
                alt="Marianela Ibarra, nutricionista con Máster en TCA, especializada en trastornos alimenticios en Costa Rica"
                className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[1.75rem] shadow-2xl"
                loading="eager"
                fetchpriority="high"
                width="320"
                height="384"
              />
              <div className="absolute -bottom-5 right-0 bg-white rounded-2xl shadow-xl px-5 py-3">
                <p className="text-xs text-gray-400">Fundadora de</p>
                <p className="text-sm font-bold text-sage-600">Todos a la Mesa</p>
              </div>
            </div>
          </SlideInLeft>

          {/* Text */}
          <SlideInRight delay={100}>
            <span className="section-tag">Sobre mí · Nutricionista TCA Costa Rica</span>
            <h1 className="section-title mb-6">
              Hola, soy Marianela Ibarra
            </h1>
            <p className="text-gray-500 leading-relaxed mb-4">
              Soy nutricionista, pero no de las tradicionales.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Me he formado ampliamente en cómo ayudar a las personas en su relación con la comida, imagen corporal y en el tratamiento de trastornos de conducta alimentaria.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Pero además de mi formación profesional, también conozco este tema desde lo personal. Sé lo que se siente vivir atrapada entre control, culpa, frustración y pensamientos constantes sobre comida y cuerpo. Y también sé que hay salida.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Por eso hoy acompaño a otras personas a salir del ciclo de dietas, culpa y control obsesivo, para aprender una forma de alimentarse más tranquila, sostenible y coherente con la vida que realmente quieren vivir. No desde la perfección, sino reconectando con sus necesidades, su cuerpo y consigo mismas.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Me mueve profundamente ver cómo se nos va la vida por tratar de entrar en cierta talla de ropa o vernos de cierta forma. Mi deseo es poder ser una voz que te recuerda que <strong className="text-sage-600 font-semibold">tu vida es más que la comida y el cuerpo.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/servicios" className="btn-primary">
                Ver servicios <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.instagram.com/mibarranutricion"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-cream-200 py-14">
        <div className="page-container">
          <FadeUp className="text-center mb-10">
            <span className="section-tag">Trayectoria</span>
            <h2 className="section-title">Mi trabajo</h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-3 gap-6" staggerMs={120}>
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-sage-500" />
                </div>
                <h3 className="font-display text-lg text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Formation */}
      <section className="py-12">
        <div className="page-container max-w-3xl">
          <FadeUp className="text-center mb-10">
            <span className="section-tag">Educación</span>
            <h2 className="section-title">Formación académica</h2>
          </FadeUp>
          <StaggerGrid className="space-y-4" staggerMs={100}>
            {formation.map(({ title, institution, type }, i) => (
              <div
                key={i}
                className="card flex items-start gap-4 p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-terra-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap size={18} className="text-terra-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-terra-400">{type}</span>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">{title}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{institution}</p>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-12">
        <div className="page-container">
          <ScaleIn>
            <div className="bg-gradient-to-br from-sage-400 to-sage-600 rounded-3xl p-8 md:p-12 text-center">
            <Instagram size={36} className="text-white/80 mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
              Seguime en Instagram
            </h2>
            <p className="text-sage-100 mb-6 max-w-sm mx-auto">
              Comparto tips, reflexiones y mucho contenido sobre alimentación consciente y cuerpo.
            </p>
            <a
              href="https://www.instagram.com/mibarranutricion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-sage-600 font-semibold px-6 py-3 rounded-full hover:bg-cream-100 transition-colors"
            >
              <Instagram size={18} />
              @mibarranutricion
            </a>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  )
}
