export default function PageTitleSection({ title, text }) {
  return (
    <section className="bg-brand-secondary pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="mb-8 font-serif text-5xl font-bold tracking-tighter md:text-7xl">
          {title}
        </h1>
        {text && (
          <div className="mx-auto max-w-2xl">
            <p className="text-brand-muted text-lg leading-relaxed font-light md:text-xl">
              {text}
            </p>
          </div>
        )}
        <div className="bg-brand-accent mx-auto mt-12 h-px w-24" />
      </div>
    </section>
  )
}
