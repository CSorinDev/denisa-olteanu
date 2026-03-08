import CarouselGrid3 from '../components/CarouselGrid3'

export default function CarouselGridSection() {
  const carousel1 = {
    path: '/nuestras-sesiones',
    images: ['/img1.webp', '/img2.webp', '/img3.webp'],
  }
  const carousel2 = {
    path: '/nuestras-sesiones',
    images: ['/img4.webp', '/img5.webp', '/img6.webp'],
  }
  const carousel3 = {
    path: '/nuestras-sesiones',
    images: ['/img7.webp', '/img8.webp', 'img9.jpg'],
  }

  const carousels = [carousel1, carousel2, carousel3]
  const titles = ['Estudio', 'Exteriores', 'Embarazo + Bebé']
  const texts = [
    'Reportajes de corta duración, en estudio, creativas y diferentes, vestuario incluido. Incluye 12 fotografías editadas, en alta calidad en entrega digital.',
    'Reportajes al atardecer en localizaciones que te definan, junto a tu pareja, a tu familia y vestuario incluido. Incluye 30 fotografías editadas, en alta calidad en entrega digital.',
    'Llévate las 12/30 fotos del embarazo impresas en 2 pliegos extra en el álbum de tu bebé al contratar los dos reportajes de forma gratuita.',
  ]

  return (
    <CarouselGrid3 carousels={carousels} titles={titles} texts={texts} />
  )
}
