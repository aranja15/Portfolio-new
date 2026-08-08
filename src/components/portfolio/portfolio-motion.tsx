'use client'

import { useLayoutEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type PortfolioMotionProps = {
  children: ReactNode
}

export function PortfolioMotion({ children }: PortfolioMotionProps) {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!root.current) return

    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) return

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { duration: 0.72, ease: 'power3.out' },
      })

      heroTimeline
        .from('[data-hero-status]', { opacity: 0, y: 12 })
        .from('[data-hero-title] > span', { opacity: 0, y: 34, stagger: 0.08 }, '-=0.42')
        .from('[data-hero-copy]', { opacity: 0, y: 18 }, '-=0.42')
        .from('[data-hero-actions] > *', { opacity: 0, y: 12, stagger: 0.06 }, '-=0.42')
        .from('[data-model-index]', { opacity: 0, x: 18 }, '-=0.6')
        .from('[data-metric]', { opacity: 0, y: 14, stagger: 0.06 }, '-=0.46')

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 28,
          duration: 0.72,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-rule]').forEach((element) => {
        gsap.from(element, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.9,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            once: true,
          },
        })
      })

      gsap.utils
        .toArray<HTMLElement>('[data-architecture-line]')
        .forEach((element) => {
          gsap.from(element, {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.55,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          })
        })
    }, root)

    return () => context.revert()
  }, [])

  return <div ref={root}>{children}</div>
}
