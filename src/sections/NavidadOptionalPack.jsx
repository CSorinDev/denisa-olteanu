export default function NavidadOptionalPack() {
  const opciones = [
    'Lote de 3 calendarios de faldilla con foto 30x30cm - 19,95€',
    'Lote de 6 calendarios de faldilla con foto 15x10 - 18,95€',
    'Calendario wire-o grande - 18,95€',
    'Lote de 18 calendarios de bolsillo 7x10 - 10,95€',
    'Lote de 6 postales dípticos 15x15cm - 15,95€',
    'Lote de 12 postales dípticos 15x15cm - 24,95€',
    'Lote de 24 postales dípticos 15x15cm - 44,95€',
    'Lote de 4 tarjetones 15x15cm - 9,95€',
    'Minicuadro 9x13cm con caballete - 6,95€',
    'Minicuadro 10x15cm con caballete - 7,95€',
    'Cuadro con forma (corazón, nube, óvalo, cometa) impresión UVI - 55,00€',
    'Cuadro/Lienzo a consultar tamaños y precios.',
  ]
  return (
    <>
      <section>
        <h3>Puedes añadir a tu pack más complementos</h3>
        <ul>
          {
            opciones.map(opcion => (
                <li>
                    {opcion}
                </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}
