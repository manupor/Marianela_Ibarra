import { useEffect } from 'react'

const SITE_URL = 'https://www.mibarranutricion.com'
const SITE_NAME = 'Marianela Ibarra Nutrición'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

function upsertMeta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * useSEO — sets per-page SEO tags without altering visible content.
 * @param {object} opts
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string} [opts.keywords]
 * @param {string} [opts.path] - pathname starting with '/'
 * @param {string} [opts.image] - absolute URL
 * @param {'website'|'article'|'profile'} [opts.type]
 * @param {object} [opts.jsonLd] - structured data object
 * @param {string} [opts.jsonLdId] - id for the JSON-LD script tag
 */
export function useSEO({
  title,
  description,
  keywords,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
  jsonLdId = 'ld-page',
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const url = `${SITE_URL}${path}`

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    if (keywords) upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1')
    upsertLink('canonical', url)

    // Open Graph
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'es_CR')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    if (jsonLd) upsertJsonLd(jsonLdId, jsonLd)

    return () => {
      if (jsonLd) {
        const el = document.getElementById(jsonLdId)
        if (el) el.remove()
      }
    }
  }, [title, description, keywords, path, image, type, jsonLd, jsonLdId])
}

export { SITE_URL, SITE_NAME, DEFAULT_IMAGE }
