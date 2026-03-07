import Grid3 from "../components/Grid3"

export default function ReportajesSection() {
  const articles = [
    {
      title: 'Reportajes en estudio',
      text: 'Desde el embarazo hasta el nacimiento del bebé, en sus primeros meses y años, eventos importantes de sus vidas, he estado ahí para capturar cada instante y poco a poco formar parte de sus recuerdos.',
    },
    {
      title: 'Reportajes en exteriores',
      text: 'Estas sesiones son muy divertidas y llenas de personalidad donde cada persona se expresa en su ambiente, rodeado de sus lugares favoritos, espacio libre para ser uno mismo. Reportajes de mis favoritos, sin duda.',
    },
    {
      title: 'Eventos',
      text: 'Hacerme partícipe de los momentos únicos en vuestra vida es de agradecer. Ser la persona en la que confiáis para estar junto a vosotros, ser uno más de la piña; eso es lo que me gusta mostrar con mi trabajo.',
    },
  ]
  return (
    <section>
      <h2>Reportajes</h2>
      <Grid3 articles={articles} />
    </section>
  )
}
