import KnightsQuest from "../assets/KnightsQuest.png";
import Élan from "../assets/Élan.png";
import ProteinPal from "../assets/ProteinPal.png";
import TravelMate from "../assets/TravelMate.png";
import github from "../assets/TechIcons/github.png";

function ProjectCard1() {
  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-[300px] md:min-h-[400px] lg:min-h-[450px] rounded-xl overflow-hidden shadow-xl/20">
      <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] max-h-[450px] flex-shrink-0 overflow-hidden">
        <img
          src={KnightsQuest}
          alt="Knights Quest"
          className="w-full h-full object-cover lg:object-contain rounded-xl"
        />
      </div>
      <div className="w-full md:w-1/2 h-full bg-white p-6 sm:p-8 md:p-12 flex flex-col">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
          Knights Quest
        </h1>
        <div className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 flex flex-col">
          <p className="flex-1">
            Knights Quest is a pixel-art, choose-your-own-adventure web game
            where you play as a knight on a quest to rescue a kidnapped magical
            cat from an evil king. I chose this game, as it reminded me off my
            favourite books as a child. This is a good choice for me for my
            first project as I could show a bit of creativity, put it some solid
            but not too heavy JS and show my attention to detail,
            replicating/altering code over multiple HTML pages.
          </p>
        </div>
        <a
          href="https://github.com/SamTombs/knights-quest"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        >
          <img src={github} alt="GitHub" className="h-5 w-5" />
          <span>View on GitHub</span>
        </a>
      </div>
    </section>
  );
}

function ProjectCard2() {
  return (
    <section className="relative flex flex-col md:flex-row-reverse items-center min-h-[300px] md:min-h-[400px] lg:min-h-[450px] rounded-lg overflow-hidden shadow-xl/20">
      <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 md:p-12 flex flex-col h-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
          Travel Mate
        </h1>
        <div className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 flex flex-col">
          <p className="flex-1">
            This CRUD application is a simple yet powerful tool for organizing
            your life. Whether you're planning a trip, managing a to-do list, or
            keeping track of places you want to visit, this app helps you
            create, view, update, and delete entries easily. With a clean
            EJS-powered interface and a MongoDB backend, you can store and
            manage tasks, destinations, and passenger information — all in one
            place.
          </p>
        </div>
        <a
          href="https://github.com/SamTombs/travel-planner"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        >
          <img src={github} alt="GitHub" className="h-5 w-5" />
          <span>View on GitHub</span>
        </a>
      </div>
      <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] max-h-[450px] flex-shrink-0 overflow-hidden">
        <img
          src={TravelMate}
          alt="Travel Mate"
          className="w-full h-full object-cover lg:object-contain rounded-xl"
        />
      </div>
    </section>
  );
}

function ProjectCard3() {
  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-[300px] md:min-h-[400px] lg:min-h-[450px] rounded-lg overflow-hidden shadow-xl/20">
      <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] max-h-[450px] flex-shrink-0 overflow-hidden">
        <img
          src={ProteinPal}
          alt="Protein Pal"
          className="w-full h-full object-cover lg:object-contain rounded-xl"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 md:p-12 flex flex-col h-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
          Protein Pal
        </h1>
        <div className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 flex flex-col">
          <p className="flex-1">
            I created a React app designed to inspire users to shop for protein
            products. Aesthetically I wanted to aim for the modern Millenial;
            Sunday Morning Coffees, Autumnal Walks and nothing too drastic for
            the eye. Users can explore different protein options while
            discovering motivation to stay consistent with their health goals.
          </p>
        </div>
        <a
          href="https://github.com/SamTombs/protein-pal-front-end"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        >
          <img src={github} alt="GitHub" className="h-5 w-5" />
          <span>View on GitHub</span>
        </a>
      </div>
    </section>
  );
}

function ProjectCard4() {
  return (
    <section className="relative flex flex-col md:flex-row-reverse items-center min-h-[300px] md:min-h-[400px] lg:min-h-[450px] rounded-lg overflow-hidden shadow-xl/20">
      <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 md:p-12 flex flex-col h-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
          Élan
        </h1>
        <div className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 flex flex-col">
          <p className="flex-1">
            I created a slightly tongue in cheek React Shopping app designed to
            sell a unique and time limited luxury leisurewear. Aesthetically I
            wanted to aim to corner the gym/run club goer; with dark tones on
            some of the pages and a more natural look for the explore page.
            Users can explore the clothing line and look to be prepared to spend
            a lot of money. All products including images are store on the
            Django Back End with the Basket linked to the user.
          </p>
        </div>
        <a
          href="https://github.com/SamTombs/elan-front-end"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        >
          <img src={github} alt="GitHub" className="h-5 w-5" />
          <span>View on GitHub</span>
        </a>
      </div>
      <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] max-h-[450px] flex-shrink-0 overflow-hidden">
        <img
          src={Élan}
          alt="Élan"
          className="w-full h-full object-cover lg:object-contain rounded-xl"
        />
      </div>
    </section>
  );
}

export { ProjectCard1, ProjectCard2, ProjectCard3, ProjectCard4 };


// className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col h-full"