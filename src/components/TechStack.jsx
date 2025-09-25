const images = import.meta.glob("../assets/Techicons/*.png", { eager: true });

export default function Gallery() {
  return (
    <div className="grid grid-cols-8 gap-5 h-150 w-150">
      {Object.values(images).map((img, i) => (
        <img key={i} src={img.default || img} alt="Tech Icons" />
      ))}
    </div>
  );
}


