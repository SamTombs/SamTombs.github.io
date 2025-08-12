import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="justify-items-end flex flex-row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
