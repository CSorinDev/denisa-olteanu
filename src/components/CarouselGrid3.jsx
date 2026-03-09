import Carousel from './Carousel'

export default function CarouselGrid3({ carousels = [] }) {
  return (
    <section className="bg-brand-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
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
                {carouselData.title && (
                  <h3 className="font-serif text-2xl font-bold tracking-tight lg:text-xl xl:text-2xl">
                    {carouselData.title}
                  </h3>
                )}
                {carouselData.text && (
                  <p className="text-brand-muted leading-relaxed font-light">
                    {carouselData.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
