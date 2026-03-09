import CarouselGrid3 from '../components/CarouselGrid3'
import { carousels } from '../lib/comunionesCarouselGrid'
import ComunionesAdditionalInfo from '../sections/ComunionesAdditionalInfo'
import PageTitleSection from '../sections/PageTitleSection'

export default function ComunionesPage() {
  const notas = [
    'Fotografía extra a editar tiene un coste adicional de 10€ por foto.',
    'Tapa de metacrilato en Pack Sencillo tiene coste adicional de 10,95€.',
    'Grabado en UVI (color) tiene coste adicional de 10,95€.',
    'Cambiar tamaño del linobook a 30x35 tiene coste adicional de 30€.',
    'Cambiar tamaño del álbum a 30x35 tiene coste adicional de 40€.',
    'Cambiar portada del linobook a fotoportada tiene coste adicional de 28,95€.',
  ]

  const title = 'Comuniones'
  const text =
    'Nuevo año, nuevos packs con novedades en materiales y acabados. Continuemos escribiendo juntos las memorias de los más pequeños de la casa.'

  return (
    <>
      <PageTitleSection title={title} text={text} />
      <CarouselGrid3 carousels={carousels} />
      <ComunionesAdditionalInfo notas={notas} />
    </>
  )
}
