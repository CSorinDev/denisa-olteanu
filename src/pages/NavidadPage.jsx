import CarouselGrid3 from '../components/CarouselGrid3'
import { carousels } from '../lib/navidadCarouselGrid'
import NavidadHero from '../sections/NavidadHero'
import NavidadMoreInfo from '../sections/NavidadMoreInfo'
import NavidadOptionalPack from '../sections/NavidadOptionalPack'

export default function NavidadPage() {
  return (
    <>
      <NavidadHero />
      <CarouselGrid3 carousels={carousels} />
      {/* <NavidadCarouselSection /> */}
      <NavidadOptionalPack />
      <NavidadMoreInfo />
    </>
  )
}
