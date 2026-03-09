export default function Grid3({ articles }) {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-12">
      {articles.map(({ title, text }) => (
        <article
          key={title}
          className="group border-brand-primary/10 hover:border-brand-accent flex flex-col gap-6 border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="bg-brand-primary group-hover:bg-brand-accent flex h-12 w-12 items-center justify-center font-serif text-2xl text-white transition-colors">
            {title.charAt(0)}
          </div>
          <h3 className="text-brand-primary font-serif text-2xl font-bold tracking-tight">
            {title}
          </h3>
          <p className="text-brand-muted leading-relaxed font-light">{text}</p>
          <div className="mt-auto pt-4">
            <span className="text-brand-primary border-brand-accent border-b pb-1 text-xs font-semibold tracking-[0.2em] uppercase transition-all group-hover:pr-4">
              Leer más
            </span>
          </div>
        </article>
      ))}
    </div>
  )
}
