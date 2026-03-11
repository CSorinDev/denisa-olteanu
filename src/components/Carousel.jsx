import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ images }) {
  const IMAGES_LIST = images.image || images.images || []
  const BASE_PATH = images.basePath || images.path || ''
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const joinPaths = (base, path) => {
    // Determine the application's base URL (e.g., '/' or '/denisa-olteanu/')
    const appBase = import.meta.env.BASE_URL || '/'

    // Normalize base: remove leading slash if any, ensuring it starts from appBase
    const normalizedBase = base.startsWith('/') ? base.slice(1) : base
    const b = normalizedBase.endsWith('/')
      ? normalizedBase
      : normalizedBase + '/'

    // Normalize path: remove leading slash
    const p = path.startsWith('/') ? path.slice(1) : path

    // Ensure appBase ends with /
    const root = appBase.endsWith('/') ? appBase : appBase + '/'

    return root + b + p
  }

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)

    // Find active index based on scroll position
    const cardWidth = el.querySelector('[data-carousel-item]')?.offsetWidth || 1
    const gap = 16
    const idx = Math.round(el.scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.min(idx, IMAGES_LIST.length - 1))
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [IMAGES_LIST.length])

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth =
      el.querySelector('[data-carousel-item]')?.offsetWidth || 300
    const gap = 16
    const amount = (cardWidth + gap) * (direction === 'left' ? -1 : 1)
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className="group/carousel relative">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:gap-6 md:px-12"
      >
        {IMAGES_LIST.map((img, idx) => {
          const rawPath = typeof img === 'string' ? img : img.path
          const src = joinPaths(BASE_PATH, rawPath)
          const alt =
            typeof img === 'string'
              ? `Fotografía ${idx + 1}`
              : img.alt || `Fotografía ${idx + 1}`
          const key = (typeof img === 'string' ? img : img.path) + idx

          return (
            <div
              key={key}
              data-carousel-item
              className="aspect-3/4 w-[65vw] flex-none snap-center overflow-hidden bg-neutral-100 shadow-md transition-all duration-500 hover:shadow-2xl sm:w-[45vw] md:w-[320px] lg:w-[360px]"
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>

      {/* Desktop arrow buttons – only visible on md+ */}
      {canScrollLeft && IMAGES_LIST.length > 1 && (
        <button
          onClick={() => scroll('left')}
          className="hover:bg-brand-accent absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:text-white md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft size={22} />
        </button>
      )}
      {canScrollRight && IMAGES_LIST.length > 1 && (
        <button
          onClick={() => scroll('right')}
          className="hover:bg-brand-accent absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:text-white md:flex"
          aria-label="Siguiente"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Mobile dot indicators */}
      {IMAGES_LIST.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 pt-3 md:hidden">
          {IMAGES_LIST.length <= 10 ? (
            // Show all dots if <= 10 images
            IMAGES_LIST.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-brand-accent w-6'
                    : 'bg-brand-primary/20 w-1.5'
                }`}
              />
            ))
          ) : (
            // Show counter if > 10 images
            <span className="text-brand-muted text-xs font-light tracking-wide">
              {activeIndex + 1} / {IMAGES_LIST.length}
            </span>
          )}
        </div>
      )}

      {/* Gradient fades */}
      <div className="from-brand-secondary pointer-events-none absolute top-0 bottom-6 left-0 w-8 bg-linear-to-r to-transparent md:w-16" />
      <div className="from-brand-secondary pointer-events-none absolute top-0 right-0 bottom-6 w-8 bg-linear-to-l to-transparent md:w-16" />
    </div>
  )
}
