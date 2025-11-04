const images = import.meta.glob("../assets/Techicons/*.png", { eager: true });

export default function Gallery() {
  return (
    <div className="w-full py-4 md:py-8">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 justify-items-center items-center">
        {Object.values(images).map((img, i) => (
          <img 
            key={i} 
            src={img.default || img} 
            alt="Tech Icons" 
            className="w-auto h-auto max-w-[40px] max-h-[40px] sm:max-w-[50px] sm:max-h-[50px] md:max-w-[60px] md:max-h-[60px] object-contain" 
          />
        ))}
      </div>
    </div>
  );
}


