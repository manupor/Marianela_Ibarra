import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Tag, ArrowRight, CheckCircle2 } from 'lucide-react'
import { getPostBySlug, blogPosts } from '../data/blogPosts'

const categoryColors = {
  'Bienestar': 'bg-sage-100 text-sage-600',
  'Familias': 'bg-blue-50 text-blue-600',
  'Alimentación Consciente': 'bg-terra-100 text-terra-500',
  'TCA': 'bg-rose-light text-rose-soft',
  'Alimentación Emocional': 'bg-amber-50 text-amber-600',
}

function BlockRenderer({ block }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-5">
          {block.text}
        </p>
      )
    case 'heading':
      return (
        <h2 className="font-display text-xl md:text-2xl text-gray-800 mt-8 mb-4">
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-terra-400 bg-terra-100/50 rounded-r-2xl px-6 py-4 my-6">
          <p className="text-terra-600 font-medium text-base md:text-lg italic leading-relaxed">
            {block.text}
          </p>
        </blockquote>
      )
    case 'list':
      return (
        <ul className="space-y-3 my-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
              <CheckCircle2 size={18} className="text-sage-400 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'cta':
      return (
        <div className="mt-10 p-6 md:p-8 bg-gradient-to-br from-sage-100 to-cream-200 rounded-3xl text-center">
          <p className="text-sm font-semibold text-sage-600 uppercase tracking-widest mb-2">¿Querés trabajar esto?</p>
          <p className="font-display text-xl text-gray-800 mb-2">
            Iniciar un proceso para mejorar tu relación con la comida ¡vale la pena!
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Te aseguro que verás mejorar tu bienestar físico y mental.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=50670117086&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quiero más información
            <ArrowRight size={16} />
          </a>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="pt-32 pb-20 page-container text-center">
        <h1 className="font-display text-3xl text-gray-800 mb-4">Artículo no encontrado</h1>
        <p className="text-gray-500 mb-6">Este artículo no existe o fue removido.</p>
        <Link to="/blog" className="btn-primary">Volver al blog</Link>
      </div>
    )
  }

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2)

  return (
    <div className="pt-24 pb-16">
      {/* Back */}
      <div className="page-container mb-6">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-sage-600 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al blog
        </button>
      </div>

      {/* Hero image */}
      <div className="page-container mb-8">
        <div className="relative rounded-3xl overflow-hidden h-56 md:h-80">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-500'}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/80">
                <Clock size={12} />
                {post.readTime} de lectura
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-4xl text-white leading-tight text-balance">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="page-container">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          {/* Article */}
          <article>
            {/* Author row */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-cream-300">
              <img
                src="/marianela.jpg"
                alt="Dra. Marianela Ibarra"
                className="w-11 h-11 rounded-full object-cover object-top border-2 border-sage-200"
              />
              <div>
                <p className="font-semibold text-gray-800 text-sm">Dra. Marianela Ibarra</p>
                <p className="text-xs text-gray-400">Nutricionista · Máster en TCA</p>
              </div>
            </div>

            {/* Blocks */}
            <div>
              {post.content.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-cream-300 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs text-gray-500 bg-cream-200 px-3 py-1.5 rounded-full"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Author card */}
            <div className="card p-5">
              <img
                src="/marianela.jpg"
                alt="Dra. Marianela Ibarra"
                className="w-20 h-20 rounded-2xl object-cover object-top mx-auto mb-4"
              />
              <div className="text-center mb-4">
                <p className="font-display font-semibold text-gray-800">Dra. Marianela Ibarra</p>
                <p className="text-xs text-gray-400 mt-0.5">Nutricionista · Máster TCA · UCR</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed text-center mb-4">
                Especialista en alimentación consciente, abordaje no-dieta y trastornos de conducta alimentaria.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=50670117086"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm py-2"
              >
                Agendar cita
              </a>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="card p-5">
                <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4">Artículos relacionados</p>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="flex gap-3 group"
                    >
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-16 h-14 object-cover rounded-xl shrink-0 group-hover:opacity-90 transition-opacity"
                      />
                      <div className="min-w-0">
                        <p className="text-xs text-gray-800 font-medium leading-snug group-hover:text-sage-600 transition-colors line-clamp-3">
                          {r.title}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">{r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All posts link */}
            <Link
              to="/blog"
              className="flex items-center justify-center gap-2 text-sm text-sage-600 font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft size={14} />
              Ver todos los artículos
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}
