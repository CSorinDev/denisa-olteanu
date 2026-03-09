export default function Carousel({ images }) {
  const IMAGES_LIST = images.image || images.images || []
  const BASE_PATH = images.basePath || images.path || ''

  const joinPaths = (base, path) => {
    const b = base.endsWith('/') ? base.slice(0, -1) : base
    const p = path.startsWith('/') ? path : '/' + path
    return b + p
  }

  return (
    <div className="group relative overflow-hidden">
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:gap-6 md:px-12">
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

      {/* Gradient fades */}
      <div className="from-brand-secondary pointer-events-none absolute top-0 bottom-6 left-0 w-16 bg-linear-to-r to-transparent md:w-24" />
      <div className="from-brand-secondary pointer-events-none absolute top-0 right-0 bottom-6 w-16 bg-linear-to-l to-transparent md:w-24" />
    </div>
  )
}
