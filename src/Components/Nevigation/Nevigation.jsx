import { useState, useEffect } from "react";
import "./Nevigation.css";
import { Link } from "react-router-dom";

const Nevigation = () => {

    const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
     <nav className={`navbar ${isScrolled ? "shrink" : ""}`}>
      <Link to="/" className="navbar-brand">
        <img
          src="https://nuvoco.com/static/media/logo.4ea493e1b272e146e560.png"
          alt="Nuvoco Logo"
          className="logo"
        />
      </Link>

      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nevigation
