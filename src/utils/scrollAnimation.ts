export const smoothScrollTo = (targetId: string, offset: number = 80) => {
  const element = document.querySelector(targetId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const isElementInViewport = (element: Element, threshold: number = 0.1) => {
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold
  )
}

export const observeElements = (
  selector: string,
  callback: (element: Element) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, defaultOptions)

  const elements = document.querySelectorAll(selector)
  elements.forEach((element) => observer.observe(element))

  return observer
}