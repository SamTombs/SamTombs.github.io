import { Link, useLocation, useNavigate } from "react-router";
import IconLink from "./IconLink";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const handleProjectClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      const projectsElement = document.getElementById("projects");
      if (projectsElement) {
        const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
        const elementPosition = projectsElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const projectsElement = document.getElementById("projects");
        if (projectsElement) {
          const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
          const elementPosition = projectsElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    }
  };

  return (
    <nav id="navbar" className="sticky top-0 z-50 bg-white flex rounded-lg justify-between h-17 shadow-xl items-center px-4">
      <Link onClick={handleHomeClick} className="h-full">
        <IconLink />
      </Link>
      <ul className="flex flex-row gap-6">
        <li>
          <Link 
            onClick={handleProjectClick}
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
