import PageTitleSection from '../sections/PageTitleSection'

export default function PrivacidadPage() {
  return (
    <>
      <PageTitleSection
        title="Política de Privacidad"
        text="Tu privacidad es nuestra prioridad. Te explicamos cómo tratamos tus datos."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-brand text-brand-primary/80 max-w-none leading-relaxed font-light">
            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              1. Responsable del Tratamiento
            </h2>
            <p className="mb-8">
              La responsable del tratamiento de los datos personales recogidos
              es <strong>Denisa Nicoleta Olteanu</strong>, con domicilio en C/
              Alloza 119, 12001 Castellón de la Plana, y correo electrónico de
              contacto: <strong>denisanicoletaolteanu@gmail.com</strong>.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              2. Finalidad del Tratamiento
            </h2>
            <p className="mb-4">
              Sus datos personales serán tratados con las siguientes
              finalidades:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-6">
              <li>
                Gestionar la solicitud realizada a través del formulario de
                contacto.
              </li>
              <li>
                Mantener la relación comercial y la contratación de servicios de
                fotografía.
              </li>
              <li>Cumplir con las obligaciones legales correspondientes.</li>
              <li>
                Informar sobre nuevos servicios o promociones (solo si se ha
                dado consentimiento expreso).
              </li>
            </ul>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              3. Legitimación
            </h2>
            <p className="mb-8">
              El tratamiento de sus datos se realiza con base en el
              consentimiento del interesado al contactar con nosotros o al
              contratar un servicio. El tratamiento es necesario para el
              desarrollo de la relación contractual y el cumplimiento de
              obligaciones legales.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              4. Plazo de Conservación
            </h2>
            <p className="mb-8">
              Los datos personales proporcionados se conservarán mientras se
              mantenga la relación comercial o no se solicite su supresión por
              el interesado, y durante los plazos legales para el cumplimiento
              de obligaciones fiscales y legales.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              5. Destinatarios
            </h2>
            <p className="mb-8">
              No se cederán datos a terceros, salvo obligación legal. No se
              realizan transferencias internacionales de datos.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              6. Derechos de los Interesados
            </h2>
            <p className="mb-4">
              Cualquier persona tiene derecho a obtener confirmación sobre si
              estamos tratando datos personales que les conciernan, o no. Las
              personas interesadas tienen derecho a:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-6">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de los datos inexactos.</li>
              <li>
                Solicitar su supresión cuando, entre otros motivos, los datos ya
                no sean necesarios para los fines que fueron recogidos.
              </li>
              <li>Solicitar la limitación de su tratamiento.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Solicitar la portabilidad de los datos.</li>
            </ul>
            <p className="mb-8">
              Puede ejercer sus derechos dirigiendo un correo electrónico a{' '}
              <strong>denisanicoletaolteanu@gmail.com</strong> adjuntando copia
              de su DNI.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              7. Procedencia de los Datos
            </h2>
            <p className="mb-8">
              Los datos personales provienen directamente del interesado a
              través del formulario de contacto del sitio web o vía
              telefónica/email.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
