import Carousel from '../components/Carousel'

export default function BebesSingleCarouselSection() {
  const images = {
    basePath: '/nuestras-sesiones',
    images: ['/img1.webp', '/img2.webp', '/img3.webp'],
  }
  return (
    <section>
      <Carousel images={images} />
      <h3>Niños y familias</h3>
      <h4>200€</h4>
      <p>
        Reportajes para niños a partir de un año en exteriores, solos o junto a
        la familia, son ideales para capturar su desenvoltura y descubrir
        matices de su personalidad. Preciosos recuerdos recomendados para toda
        la familia.
      </p>
    </section>
  )
}
