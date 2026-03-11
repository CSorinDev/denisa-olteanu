import Carousel from './Carousel'

export default function CarouselGrid3({ carousels = [] }) {
  /**
   * If the text contains periods followed by text, split into bullet points.
   * Otherwise render as a plain paragraph.
   */
  const renderText = (text) => {
    if (!text) return null

    // Check if text has sentence separators like ". " or " - " or starts with "- "
    const hasBullets = text.includes('. ') && text.split('. ').length > 2

    if (hasBullets) {
      const items = text
        .split('. ')
        .map((s) => s.replace(/^[-–]\s*/, '').trim())
        .filter(Boolean)

      return (
        <ul className="text-brand-muted flex flex-col gap-2 text-sm font-light">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="bg-brand-accent/50 mt-1.5 h-1.5 w-1.5 flex-none rounded-full" />
              <span>{item.endsWith('.') ? item : item + '.'}</span>
            </li>
          ))}
        </ul>
      )
    }

    return <p className="text-brand-muted leading-relaxed font-light">{text}</p>
  }

  return (
    <section className="bg-brand-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-3 xl:gap-8">
          {carousels.map((carouselData, index) => (
            <div
              key={index}
              className="group border-brand-primary/5 flex flex-col overflow-hidden rounded-sm border bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Carousel */}
              <div className="relative overflow-hidden">
                <Carousel images={carouselData} />
              </div>

              {/* Text content */}
              <div className="flex grow flex-col gap-4 p-6 lg:p-8">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                  {carouselData.title && (
                    <h3 className="font-serif text-2xl font-bold tracking-tight lg:text-xl xl:text-2xl">
                      {carouselData.title}
                    </h3>
                  )}
                  {carouselData.price && (
                    <div className="bg-brand-accent/15 inline-flex items-baseline gap-1 rounded-full px-4 py-1.5 transition-transform group-hover:scale-105">
                      {carouselData.price.includes('Desde') && (
                        <span className="text-brand-accent/70 text-xs font-medium uppercase tracking-tighter">
                          Desde
                        </span>
                      )}
                      <span className="text-brand-accent font-serif text-2xl font-bold">
                        {carouselData.price.replace('Desde ', '')}
                      </span>
                    </div>
                  )}
                </div>
                {carouselData.text && renderText(carouselData.text)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
