import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const MenuItems = () => (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li tabIndex={0}>
      <NavLink to="/publications">Publications</NavLink>
    </li>
    <li>
      <NavLink to="/projects">Research Projects</NavLink>
    </li>
    <li>
      <Link
        to="/assets/cv/Shafikul_Islam_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar-end")) {
        // Clicked outside of the navbar, close the menu
        handleCloseMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    <div className="navbar bg-base-100 flex-wrap sticky z-10 top-0">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Shafikul Islam / শফিকুল ইসলাম
        </a>
      </div>
      <div className="navbar-end">
        <div className="lg:hidden" onClick={handleToggleMenu}>
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        {menuOpen && (
          <div className="lg:hidden">
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 left-0">
              <MenuItems />
            </ul>
          </div>
        )}
        <ul className="menu menu-horizontal px-1 hidden lg:flex space-x-3">
          <MenuItems />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
