import Botswana from "../assets/Botswana.jpg";
import Egypt from "../assets/Egypt.jpg";
import Ukraine from "../assets/Ukraine.jpg";
import Military from "../assets/Military.png";
import Experiences from "../assets/Experiences.png";
import { useState } from "react";

export default function ImageCarousel() {
  const images = [
    {
      src: Experiences,
      alt: "Experiences",
    },
    {
      src: Botswana,
      alt: "Botswana",
    },
    {
      src: Egypt,
      alt: "Egypt",
    },
    {
      src: Ukraine,
      alt: "Ukraine",
    },
    {
      src: Military,
      alt: "Military",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <section className="relative justify-center flex flex-col md:flex-row items-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[450px] rounded-xl overflow-hidden shadow-xl/20">
      <div className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[450px] flex-shrink-0 overflow-hidden bg-white">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-contain rounded-xl"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-4">
          <button 
            onClick={handlePreviousClick}
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Previous
          </button>
          <button 
            onClick={handleNextClick}
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
