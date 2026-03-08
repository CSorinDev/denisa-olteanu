import Carousel from '../components/Carousel'

export default function NuestrasSesionesSection() {
  const carousel = {
    basePath: '/nuestras-sesiones/',
    image: [
      { path: '/img1.webp', alt: 'image1' },
      { path: '/img2.webp', alt: 'image2' },
      { path: '/img3.webp', alt: 'image3' },
      { path: '/img4.webp', alt: 'image4' },
      { path: '/img5.webp', alt: 'image5' },
      { path: '/img6.webp', alt: 'image6' },
      { path: '/img7.webp', alt: 'image7' },
      { path: '/img8.webp', alt: 'image8' },
      { path: '/img9.jpg', alt: 'image9' },
      { path: '/img10.webp', alt: 'image10' },
      { path: '/img11.webp', alt: 'image11' },
      { path: '/img12.webp', alt: 'image12' },
    ],
  }

  return (
    <section className="bg-brand-secondary py-24" id="sesiones">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center md:text-left">
        <span className="text-brand-accent mb-4 block text-sm font-medium tracking-[0.3em] uppercase">
          Portfolio
        </span>
        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          Nuestras Sesiones
        </h2>
      </div>
      <div className="w-full overflow-hidden">
        <Carousel images={carousel} />
      </div>
    </section>
  )
}
