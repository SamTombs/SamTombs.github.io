const images = import.meta.glob("../assets/Techicons/*.png", { eager: true });

export default function Gallery() {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-8 gap-5 justify-items-center items-center">
        {Object.values(images).map((img, i) => (
          <img key={i} src={img.default || img} alt="Tech Icons" className="w-auto h-auto max-w-[60px] max-h-[60px] object-contain" />
        ))}
      </div>
    </div>
  );
}


