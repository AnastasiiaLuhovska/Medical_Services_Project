import { useEffect } from 'react'
import { observeElements } from './scrollAnimation'

export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = (element: Element) => {
      element.classList.add('animate-in')
    }

    const observer = observeElements(
      '[data-animate]',
      animateOnScroll,
      { threshold: 0.1, rootMargin: '-50px' }
    )

    return () => observer.disconnect()
  }, [])
}

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-parallax-speed') || '0.5'
        const yPos = -(scrolled * parseFloat(speed))
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    const throttledScroll = throttle(handleScroll, 16)
    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])
}

const throttle = (func: Function, delay: number) => {
  let timeoutId: number
  let lastExecTime = 0
  
  return function (...args: any[]) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}