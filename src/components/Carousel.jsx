export default function Carousel({ images }) {
  // Defensive check to handle multiple object structures
  const IMAGES_LIST = images.image || images.images || []
  const BASE_PATH = images.basePath || images.path || ''

  return (
    <div className="group relative overflow-hidden">
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 md:px-12">
        {IMAGES_LIST.map((img, idx) => {
          const rawPath = typeof img === 'string' ? img : img.path

          // Helper to join paths correctly without double slashes
          const joinPaths = (base, path) => {
            const b = base.endsWith('/') ? base.slice(0, -1) : base
            const p = path.startsWith('/') ? path : '/' + path
            return b + p
          }

          const src = joinPaths(BASE_PATH, rawPath)
          const alt =
            typeof img === 'string'
              ? `Fotografía ${idx + 1}`
              : img.alt || `Fotografía ${idx + 1}`
          const key = (typeof img === 'string' ? img : img.path) + idx

          return (
            <div
              key={key}
              className="bg-brand-primary/5 aspect-3/4 w-[75vw] flex-none snap-center overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl md:w-[450px]"
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:duration-500 hover:scale-105 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>

      {/* Decorative Gradient Overlays */}
      <div className="from-brand-secondary pointer-events-none absolute top-0 bottom-12 left-0 w-32 bg-linear-to-r to-transparent opacity-80" />
      <div className="from-brand-secondary pointer-events-none absolute top-0 right-0 bottom-12 w-32 bg-linear-to-l to-transparent opacity-80" />
    </div>
  )
}
