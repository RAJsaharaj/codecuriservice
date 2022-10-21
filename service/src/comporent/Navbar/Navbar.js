import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../images/logo.png";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      {/* <img src={logo} /> */}
      <img src={logo} class="img-responsive" alt="logo" />
      <nav ref={navRef}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About US</Link>
        </li>
        <li>
          <Link to="/">Service</Link>
        </li>
        <li>
          <Link to="/">Project</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
