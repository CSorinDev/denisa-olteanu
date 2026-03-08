import CarouselGrid3 from '../components/CarouselGrid3'

export default function NavidadCarouselSection() {
  const carousel1 = {
    basePath: '/navidad/carousel1/',
    images: ['img1.webp', 'img2.webp', 'img3.webp'],
  }
  const carousel2 = {
    basePath: '/navidad/carousel2/',
    images: ['img1.webp', 'img2.webp', 'img3.webp'],
  }
  const carousel3 = {
    basePath: '/navidad/carousel3',
    images: ['1.webp', '2.webp', '3.webp'],
  }

  const carousels = [carousel1, carousel2, carousel3]
  const titles = ['PACK ELFO - 95€', 'PACK BÚHO - 195€', 'PACK NOEL - 210€']
  const texts = [
    '- Sesión de fotos de 15 min. - Un decorado, - 5 fotografías editadas, - 5 copias 13x18cm',
    '- Sesión de fotos de 20 min - Un decorado - 8 fotografías editadas - Fotolibro 20x20cm - Saco Navideño',
    '- Sesión de fotos de 30 minutos - Dos decorados - 12 fotografías editadas - Fotolibro 20x20cm - Caja con foto - Taco de madera con foto',
  ]

  return (
    <CarouselGrid3 carousels={carousels} texts={texts} titles={titles} />
  )
}
