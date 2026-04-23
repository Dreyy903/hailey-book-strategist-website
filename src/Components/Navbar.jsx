import React, { useState, useEffect } from "react";
import hamburgerWhite from "../assets/hamburger-white.png";
import hamburgerBlack from "../assets/hamburger-black.jpg";
import crossIcon from "../assets/cross-iconn.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Team", id: "team" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-xl font-bold">
          Ideal Success Literary
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-orange-500 transition">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={menuOpen ? crossIcon : scrolled ? hamburgerBlack : hamburgerWhite}
            alt="menu"
            className="w-7 h-7"
          />
        </button>
      </div>

      {menuOpen && (
        <div className="bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-white text-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500 transition transform hover:scale-110"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 px-6 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
