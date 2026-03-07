export default function Carousel({ images }) {
  return (
    <article>
      <div className="slider">
        {images.images.map((image) => (
          <img key={image} src={images.basePath + '/' + image} alt={image} />
        ))}
      </div>
    </article>
  )
}
