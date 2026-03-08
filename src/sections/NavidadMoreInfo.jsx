export default function NavidadMoreInfo() {
  const info = [
    'Puedes comprar la galería completa, en bruto, por 40€ más. Además puedes elegir fotografías extra a editar por 10€/foto',
    '**Para bloquear la fecha de tu sesión debes realizar un pago de 17,00€ en concepto de reserva, que luego será descontado del precio final del pack que elijas el día de la sesión.',
    '**Se puede pagar vía transferencia bancaria, bizum o acudiendo al estudio y pagando en efectivo.',
    '**La cancelación de la sesión supone la pérdida de la reserva.',
    '**No presentarse el día de la sesión supone la pérdida de la reserva.',
    '**La cancelación de la sesión por motivos de salud con justificante médico supone la posibilidad de aplazamiento de la sesión según disponibilidad del fotógrafo o canjear los 30,00€ por productos de impresión en el estudio en un plazo de máximo 30 días.',
    '***Reservar tu sesión supone la aceptación de las bases anteriormente escritas.',
  ]
  return (
    <ul>
      {info.map((info) => (
        <li> {info} </li>
      ))}
    </ul>
  )
}
