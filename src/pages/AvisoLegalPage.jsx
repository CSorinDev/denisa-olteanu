import PageTitleSection from '../sections/PageTitleSection'

export default function AvisoLegalPage() {
  return (
    <>
      <PageTitleSection
        title="Aviso Legal"
        text="Información legal relativa al sitio web de Denisa Olteanu Photography."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-brand text-brand-primary/80 max-w-none leading-relaxed font-light">
            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              1. Datos Identificativos
            </h2>
            <p className="mb-4">
              En cumplimiento con el deber de información recogido en artículo
              10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
              de la Información y del Comercio Electrónico, a continuación se
              reflejan los siguientes datos:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-6">
              <li>
                <strong>Titular:</strong> Denisa Nicoleta Olteanu
              </li>
              <li>
                <strong>NIF/CIF:</strong> [Completar con tu NIF]
              </li>
              <li>
                <strong>Domicilio:</strong> C/ Alloza 119, 12001 Castellón de la
                Plana
              </li>
              <li>
                <strong>Correo electrónico:</strong>{' '}
                denisanicoletaolteanu@gmail.com
              </li>
              <li>
                <strong>Teléfono:</strong> 642 01 71 28
              </li>
            </ul>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              2. Usuarios
            </h2>
            <p className="mb-8">
              El acceso y/o uso de este portal de Denisa Olteanu Photography
              atribuye la condición de USUARIO, que acepta, desde dicho acceso
              y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las
              citadas Condiciones serán de aplicación independientemente de las
              Condiciones Generales de Contratación que en su caso resulten de
              obligado cumplimiento.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              3. Uso del Portal
            </h2>
            <p className="mb-8">
              Este sitio web proporciona el acceso a multitud de informaciones,
              servicios, programas o datos (en adelante, "los contenidos") en
              Internet pertenecientes a Denisa Olteanu Photography o a sus
              licenciantes a los que el USUARIO pueda tener acceso. El USUARIO
              asume la responsabilidad del uso del portal.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              4. Propiedad Intelectual e Industrial
            </h2>
            <p className="mb-4">
              Denisa Olteanu Photography por sí o como cesionaria, es titular de
              todos los derechos de propiedad intelectual e industrial de su
              página web, así como de los elementos contenidos en la misma (a
              título enunciativo, imágenes, sonido, audio, vídeo, software o
              textos; marcas o logotipos, combinaciones de colores, estructura y
              diseño, selección de materiales usados, etc.), titularidad de
              Denisa Olteanu Photography o bien de sus licenciantes.
            </p>
            <p className="text-brand-primary mb-8 font-semibold">
              Queda expresamente prohibida la reproducción, la distribución y la
              comunicación pública, incluida su modalidad de puesta a
              disposición, de la totalidad o parte de los contenidos de esta
              página web, con fines comerciales, en cualquier soporte y por
              cualquier medio técnico, sin la autorización de Denisa Olteanu
              Photography.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              5. Exclusión de Garantías y Responsabilidad
            </h2>
            <p className="mb-8">
              Denisa Olteanu Photography no se hace responsable, en ningún caso,
              de los daños y perjuicios de cualquier naturaleza que pudieran
              ocasionar, a título enunciativo: errores u omisiones en los
              contenidos, falta de disponibilidad del portal o la transmisión de
              virus o programas maliciosos o lesivos en los contenidos, a pesar
              de haber adoptado todas las medidas tecnológicas necesarias para
              evitarlo.
            </p>

            <h2 className="text-brand-primary mb-6 font-serif text-2xl font-bold">
              6. Modificaciones
            </h2>
            <p className="mb-8">
              Denisa Olteanu Photography se reserva el derecho de efectuar sin
              previo aviso las modificaciones que considere oportunas en su
              portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y
              servicios que se presten a través de la misma como la forma en la
              que éstos aparezcan presentados o localizados en su portal.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
