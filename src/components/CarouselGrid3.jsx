import Carousel from './Carousel'

export default function CarouselGrid3({
  carousels = [],
  titles = [],
  texts = [],
}) {
  return (
    <div className="flex flex-col gap-24 py-16">
      {carousels.map((carouselData, index) => {
        return (
          <div key={index} className="flex flex-col gap-8">
            <div className="mx-auto w-full max-w-7xl px-6 text-center md:text-left">
              {titles[index] && (
                <h3 className="mb-3 font-serif text-3xl font-bold tracking-tight">
                  {titles[index]}
                </h3>
              )}
              {texts[index] && (
                <p className="text-brand-muted max-w-2xl text-lg font-light">
                  {texts[index]}
                </p>
              )}
            </div>

            <Carousel images={carouselData} />
          </div>
        )
      })}
    </div>
  )
}
