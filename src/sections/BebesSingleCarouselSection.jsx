import { Link } from 'react-router'
import Carousel from '../components/Carousel'

export default function BebesSingleCarouselSection() {
  const images = {
    basePath: '/bebes/carousel4',
    images: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp'],
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Carousel */}
          <div className="overflow-hidden rounded-sm shadow-lg">
            <Carousel images={images} />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <span className="text-brand-accent text-sm font-medium tracking-[0.3em] uppercase">
              Sesión especial
            </span>
            <h3 className="font-serif text-4xl font-bold tracking-tight">
              Niños y familias
            </h3>
            <div className="bg-brand-accent/20 inline-flex w-fit items-baseline gap-2 rounded-full px-5 py-2">
              <span className="text-brand-accent font-serif text-3xl font-bold">
                200€
              </span>
            </div>
            <p className="text-brand-muted max-w-lg text-lg leading-relaxed font-light">
              Reportajes para niños a partir de un año en exteriores, solos o
              junto a la familia, son ideales para capturar su desenvoltura y
              descubrir matices de su personalidad. Preciosos recuerdos
              recomendados para toda la familia.
            </p>
            <Link to="/contacto" className="btn-primary mt-4 w-fit">
              Reservar Sesión
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
