import "./gallery.css";

const images = [
  "https://i.pravatar.cc/400",
  "https://i.pravatar.cc/400",
  "https://i.pravatar.cc/400",
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((image, i) => (
        <img key={i} src={image} alt={`Avatar ${i}`} />
      ))}
    </div>
  );
}

export default Gallery;
