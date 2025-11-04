import { Link } from "react-router";
import IconLink from "./IconLink";

const NavBar = () => {
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.getElementById("navbar").offsetHeight;
      window.scrollBy({ top: navbarHeight, behavior: "smooth" });
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav id="navbar" className="sticky top-0 z-50 bg-white flex rounded-lg justify-between h-17 shadow-xl items-center px-4">
      <Link onClick={(event) => handleNavClick(event, "home")} className="h-full">
        <IconLink />
      </Link>
      <ul className="flex flex-row gap-6">
        <li>
          <Link 
            onClick={(event) => handleNavClick(event, "projects")}
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            onClick={(event) => handleNavClick(event, "about")}
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            onClick={(event) => handleNavClick(event, "contact")}
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
