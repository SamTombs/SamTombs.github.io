import { Link } from "react-router";
import IconLink from "./IconLink";

const NavBar = () => {
  return (
    <nav className="flex justify-between h-17 items-center px-4">

      <Link to="/" className="h-full">
        <IconLink />
      </Link>
      <ul className="flex flex-row gap-6">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
