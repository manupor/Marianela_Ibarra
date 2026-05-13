import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import { FadeUp, StaggerGrid, ScaleIn } from '../components/Animated'
import { useSEO } from '../hooks/useSEO'

const categories = ['Todos', 'Alimentación Consciente', 'Alimentación Emocional', 'Bienestar', 'Familias', 'TCA']

const categoryColors = {
  'Bienestar': 'bg-sage-100 text-sage-600',
  'Familias': 'bg-blue-50 text-blue-600',
  'Alimentación Consciente': 'bg-terra-100 text-terra-500',
  'TCA': 'bg-rose-light text-rose-soft',
  'Alimentación Emocional': 'bg-amber-50 text-amber-600',
}

export default function Blog() {
  useSEO({
    title: 'Blog · Alimentación intuitiva, atracones, imagen corporal y TCA',
    description: 'Artículos sobre alimentación intuitiva, alimentación consciente, hambre emocional, atracones, imagen corporal y trastornos de conducta alimentaria. Un espacio para aprender, reflexionar y sentirte menos sola.',
    keywords: 'blog alimentación intuitiva, blog nutrición sin dietas, alimentación consciente, alimentación emocional, hambre emocional, atracones, imagen corporal, blog TCA, mindful eating español',
    path: '/blog',
    jsonLdId: 'ld-blog',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog — Marianela Ibarra Nutrición',
      url: 'https://www.mibarranutricion.com/blog',
      inLanguage: 'es-CR',
      author: { '@type': 'Person', name: 'Marianela Ibarra' },
    },
  })
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <div className="pt-24 pb-10">
      {/* Header */}
      <section className="page-container mb-10">
        <FadeUp>
        <span className="section-tag">Blog</span>
        <h1 className="section-title mb-3">Nutriendo tu bienestar</h1>
        <p className="section-subtitle max-w-xl">
          Un espacio para aprender, reflexionar y sentirte menos sola en este proceso.
        </p>
        </FadeUp>
      </section>

      {/* Category filters */}
      <section className="page-container mb-10">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sage-400 text-white shadow-md'
                  : 'bg-white text-gray-500 border border-cream-300 hover:border-sage-300 hover:text-sage-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="page-container mb-12">
        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerMs={100}>
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="card group hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-500'}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold text-gray-800 leading-snug mb-2 group-hover:text-sage-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-[10px] text-gray-400 bg-cream-200 px-2 py-0.5 rounded-full">
                      <Tag size={8} />
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-terra-500 text-sm font-semibold group-hover:gap-2 transition-all">
                  Leer artículo <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </StaggerGrid>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No hay artículos en esta categoría todavía.</p>
          </div>
        )}
      </section>

      {/* Instagram CTA */}
      <section className="page-container">
          <ScaleIn>
          <div className="card p-8 text-center bg-gradient-to-br from-cream-100 to-cream-200">
          <p className="text-xs uppercase tracking-widest font-semibold text-sage-400 mb-2">Más contenido</p>
          <h2 className="font-display text-2xl text-gray-800 mb-3">¿Querés seguir aprendiendo a relacionarte diferente con la comida y tu cuerpo?</h2>
          <p className="text-gray-500 mb-6">Seguime en Instagram donde comparto contenido diario sobre alimentación consciente, cuerpo y bienestar.</p>
          <a
            href="https://www.instagram.com/mibarranutricion"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @mibarranutricion
          </a>
          </div>
          </ScaleIn>
      </section>
    </div>
  )
}
