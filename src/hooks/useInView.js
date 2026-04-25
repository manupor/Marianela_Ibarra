import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

export function useParallax(speed = 0.25) {
  const ref = useRef(null)

  useEffect(() => {
    let rafId
    const update = () => {
      if (ref.current) {
        const scrollY = window.scrollY
        ref.current.style.transform = `translateY(${scrollY * speed}px)`
      }
    }
    const handler = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      window.removeEventListener('scroll', handler)
      cancelAnimationFrame(rafId)
    }
  }, [speed])

  return ref
}

export function useCounter(target, duration = 1200) {
  const ref = useRef(null)
  const { inView } = useInView()
  const [count, setCount] = useState(0)
  const triggered = useRef(false)

  useEffect(() => {
    if (inView && !triggered.current) {
      triggered.current = true
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(ease * target))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }, [inView, target, duration])

  return { ref, count }
}
