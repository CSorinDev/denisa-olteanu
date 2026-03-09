export default function ComunionesAdditionalInfo({ notas }) {
  return (
    <section className="bg-brand-secondary py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="border-brand-primary/10 rounded-sm border bg-white p-8 shadow-sm md:p-12">
          <p className="text-brand-muted mb-8 text-sm leading-relaxed font-light italic">
            *Los packs no están sujetos a cambios excepto cambiar el tamaño de
            los linobooks o álbumes. Los linobooks solo disponen del Lino como
            material y no llevan foto en la portada, solo grabado.
          </p>

          <h4 className="mb-6 font-serif text-lg font-semibold">
            Información adicional
          </h4>
          <ul className="flex flex-col gap-3">
            {notas.map((nota, i) => (
              <li
                key={i}
                className="text-brand-muted flex items-start gap-3 text-sm font-light"
              >
                <span className="bg-brand-accent mt-1.5 h-1.5 w-1.5 flex-none rounded-full" />
                {nota}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
