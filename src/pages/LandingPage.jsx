import Title from "../components/Title";
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
          <div className="w-full">
            <Title />
          </div>
          <div id="projects" className="w-full pt-8 md:pt-12 px-4 sm:px-8 md:px-16 lg:px-24">
            <TechStack />
          </div>
        </section>
        <section className="flex flex-col py-8 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 space-y-12 md:space-y-16 lg:space-y-24">
          <div className="space-y-12 md:space-y-16 lg:space-y-24">
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

