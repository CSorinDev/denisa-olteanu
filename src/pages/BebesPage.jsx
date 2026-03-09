import BebesSingleCarouselSection from '../sections/BebesSingleCarouselSection'
import CarouselGrid3 from '../components/CarouselGrid3'
import PageTitleSection from '../sections/PageTitleSection'
import { carousels } from '../lib/bebesCarouselGrid'

export default function BebesPage() {
  return (
    <>
      <PageTitleSection
        title="Bebés"
        text="Siempre recordaré aquel día que nos sentamos mi mamá y yo a revisar algunas fotos antiguas de cuando era bebé y darnos cuenta de que mías solo habían dos, y en una de ellas no poder distinguir si era mi hermano o yo. Nos reímos mucho. Pero ese fue el detonante para dedicarme a la fotografía infantil. Si fuera por mí, ningún bebé se quedaba sin."
      />
      <CarouselGrid3 carousels={carousels} />
      <BebesSingleCarouselSection />
    </>
  )
}
