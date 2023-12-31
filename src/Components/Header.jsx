import { Link, NavLink } from "react-router-dom";

import logo from "../assets/Logo.png";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/donation">
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/statistics">
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="container navbar relative z-50 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="hidden md:flex md:max-w-[180px]">
            <img
              className="w-full h-full object-contain"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end md:hidden flex">
          <Link to="/" className="max-w-[150px]">
            <img
              className="w-full h-full object-contain"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
