import Carousel from "../components/Carousel"

export default function NuestrasSesionesSection() {
  const images = {
    basePath: '/nuestras-sesiones/',
    images: [
      'img1.webp',
      'img2.webp',
      'img3.webp',
      'img4.webp',
      'img5.webp',
      'img6.webp',
      'img7.webp',
      'img8.webp',
      'img9.jpg',
      'img10.webp',
      'img11.webp',
      'img12.webp',
    ],
  }

  return (
    <section>
      <h2>Nuestras Sesiones</h2>
      <Carousel images={images} />
    </section>
  )
}
