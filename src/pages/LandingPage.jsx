import Herobanner from "../assets/Herobanner.jpg";
import TechStack from "../components/TechStack";
import ProjectCard from "../components/ProjectCard";

const LandingPage = () => {
  return (
    <>
      <section className=" flex flex-col ">
        <div>
          <div>
            <img src={Herobanner} alt="Hero" />
          </div>
        </div>
        <div className="pt-10 h-auto justify-items-center">
          <TechStack />
        </div>
      </section>
      <section className=" flex flex-row h-1/2 w-screen">
        <div>
          <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
      <section className=" flex flex-row h-1/2 w-screen">
        <div>
          <div>
            <h1>About ME </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
