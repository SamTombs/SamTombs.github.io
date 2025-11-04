import Herobanner from "../assets/Herobanner.jpg";
import TechStack from "../components/TechStack";
import {
  ProjectCard1,
  ProjectCard2,
  ProjectCard3,
  ProjectCard4,
} from "../components/ProjectCard";

export default function LandingPage() {
  return (
    <>
      <div className="bg-white">
        <section id="home" className="flex flex-col">
          <div>
            <div>
              <img src={Herobanner} alt="Hero" />
            </div>
          </div>
          <div id="projects"  className="w-full pt-12 px-24">
            <TechStack />
          </div>
        </section>
        <section className="flex flex-col py-12 px-8 md:px-16 lg:px-24 space-y-16 md:space-y-24">
          <div className="space-y-16 md:space-y-24">
            <ProjectCard1 />
            <ProjectCard2 />
            <ProjectCard3 />
            <ProjectCard4 />
          </div>
        </section>
      </div>
    </>
  );
};

