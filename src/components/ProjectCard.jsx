import KnightsQuest from "../assets/KnightsQuest.png";
import Élan from "../assets/Élan.png";
import ProteinPal from "../assets/ProteinPal.png";
import TravelMate from "../assets/TravelMate.png";

function ProjectCard1() {
  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-[400px] rounded-lg overflow-hidden shadow-sm">
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
        <img 
          src={KnightsQuest} 
          alt="Knights Quest" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Knights Quest</h1>
        <div className="text-gray-600 leading-relaxed">
          <p>Project Description</p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard2() {
  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-[400px] rounded-lg overflow-hidden shadow-sm">
      <div className="relative w-full md:w-1/2">
        <img 
          src={TravelMate} 
          alt="Travel Mate" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Travel Mate</h1>
        <div className="text-gray-600 leading-relaxed">
          <p>Project Description</p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard3() {
  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-[400px] rounded-lg overflow-hidden shadow-sm">
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
        <img 
          src={ProteinPal} 
          alt="Protein Pal" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Protein Pal</h1>
        <div className="text-gray-600 leading-relaxed">
          <p>Project Description</p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard4() {
  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-[400px] rounded-lg overflow-hidden shadow-sm">
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
        <img 
          src={Élan} 
          alt="Élan" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Élan</h1>
        <div className="text-gray-600 leading-relaxed">
          <p>Project Description</p>
        </div>
      </div>
    </section>
  );
}

export { ProjectCard1, ProjectCard2, ProjectCard3, ProjectCard4 };