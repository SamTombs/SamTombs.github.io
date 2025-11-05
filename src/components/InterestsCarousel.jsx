import Runner from "../assets/Runner.png";
import Formula1 from "../assets/Formula1.png";
import Scuba from "../assets/Scuba.png";
import Skiier from "../assets/Skiier.png";
import Interests from "../assets/Interests.png";

import { useState } from "react";

export default function InterestsCarousel() {
  const images = [
    {
      src: Interests,
      alt: "Interests",
    },
    {
      src: Runner,
      alt: "Runner",
    },
    {
      src: Formula1,
      alt: "Formula1",
    },
    {
      src: Scuba,
      alt: "Scuba",
    },
    {
      src: Skiier,
      alt: "Skiier",
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
    <section className="relative flex flex-col md:flex-row items-center min-h-[300px] md:min-h-[400px] lg:min-h-[450px] rounded-xl overflow-hidden shadow-xl/20">
      <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] max-h-[450px] flex-shrink-0 overflow-hidden bg-white">
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
