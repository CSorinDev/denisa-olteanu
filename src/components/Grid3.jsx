/**
 * @param {Object[]} articles - Array with 3 elements
 * @param {string} articles.title - Title of the article
 * @param {string} articles.text - Text of the article
 * @returns
 */
export default function Grid3({ articles }) {
  return (
    <section className="lg:grid lg:grid-cols-3">
      {articles.map(({ title, text }) => (
        <article key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  )
}
