// import profile from "../assets/profile.png";
import ExperiencesCarousel from "../components/ExperiencesCarousel";
import InterestsCarousel from "../components/InterestsCarousel";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <section id="about">
          {/* <img src={profile} alt="Profile" className="w-full h-full object-cover" /> */}
          <p className="text-center text-lg px-4 sm:px-8 md:px-16 lg:px-24 py-10">
            I’m leaving the British Army in February 2026 after an amazing
            12-year journey and moving full-time into software development! I've
            completed a 32 week part time intensive software engineering course,
            building solid full-stack skills and loving every bit of it. With a
            background in security and risk management—protecting high-profile
            officials and training others at Longmoor—I bring a mix of
            problem-solving, adaptability, and leadership that I’m excited to
            apply in the tech world. Can’t wait to jump into a new challenge and
            keep learning!
          </p>
        </section>
        <section className="flex flex-col md:flex-row py-10 gap-8 w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex-1">
            <ExperiencesCarousel />
          </div>
          <div className="flex-1">
            <InterestsCarousel />
          </div>
        </section>
      </div>
    </>
  );
}
