import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#e">Education</a>
        </li>
        <li>
          <a href="#">Work Experience</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">References</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
