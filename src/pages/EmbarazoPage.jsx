import PageTitleSection from '../sections/PageTitleSection'
import { carousels } from '../lib/embarazoCarouselGrid.js'
import CarouselGrid3 from '../components/CarouselGrid3'

export default function EmbarazoPage() {
  return (
    <>
      <PageTitleSection
        title="Embarazo"
        text="Los reportajes durante la etapa del embarazo son una bonita forma de recordarlo tiempo después. Esas fotos que más adelante verás y enseñarás a tus hijos al hacerse mayores. Son recuerdos imborrables."
      />
      <CarouselGrid3 carousels={carousels} />
    </>
  )
}
