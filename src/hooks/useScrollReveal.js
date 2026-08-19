import { useEffect } from 'react'

export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target)
        }
      })
    }, options)

    const elements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-scale')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [options.threshold, options.rootMargin])
}
