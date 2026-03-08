import CarouselGrid3 from '../components/CarouselGrid3'
import PageTitleSection from '../sections/PageTitleSection'

export default function ComunionesPage() {
  return (
    <>
      <PageTitleSection
        title="Comuniones"
        text="Nuevo año, nuevos packs con novedades en materiales y acabados. Continuemos escribiendo juntos las memorias de los más pequeños de la casa."
      />
      <CarouselGrid3 />
      <small>
        *Los packs no están sujetos a cambios excepto cambiar el tamaño* de los
        linobooks o álbumes. *Los linobooks solo disponen del Lino como material
        y no llevan foto en la portada, solo grabado.
      </small>
      <ul>
        <li>
          Fotografía extra a editar tiene un coste adicional de 10€ por foto.
        </li>
        <li>
          Tapa de matacrilato en Pack Sencillo tiene coste adicional de 10,95€.
        </li>
        <li>Grabado en UVI (color) tiene coste adicional de 10,95€.</li>
        <li>
          Cambiar tamaño del linobook a 30x35 tiene coste adicional de 30€.
        </li>
        <li>Cambiar tamaño del álbum a 30x35 tiene coste adicional de 40€.</li>
        <li>
          Cambiar portada del linobook a fotoportada tiene coste adicional de
          28,95€.
        </li>
      </ul>
    </>
  )
}
