import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import siteLogo from "../../public/assets/hospitelLogo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "font-extrabold text-[#c1cbfa] text-xl" : "font-bold";

  return (
    <div className="w-full bg-[#2d076e] h-[81px] flex items-center justify-around px-6 text-white relative">
      <img className="w-36" src={siteLogo} alt="logo" />

      <ul className="hidden md:flex gap-10 items-center text-lg font-bold">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className={linkClass}>
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={linkClass}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="hidden md:flex gap-6 items-center">
        <FaSearch className="text-2xl cursor-pointer" />
        <button className="text-lg font-medium px-6 py-2 rounded-3xl text-[#3d0071] bg-[#c1cbfa]">
          Appointment
        </button>
      </div>

      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {open && (
        <ul className="absolute top-[81px] left-0 w-full bg-[#2d076e] flex flex-col gap-6 py-6 text-center text-lg font-bold md:hidden">
          <li onClick={() => setOpen(false)}>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/about" className={linkClass}>
              About us
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/doctors" className={linkClass}>
              Doctors
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/news" className={linkClass}>
              News
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>

          <div className="flex justify-center gap-6 pt-4">
            <FaSearch className="text-2xl" />
            <button className="px-6 py-2 rounded-3xl text-[#3d0071] bg-[#c1cbfa]">
              Appointment
            </button>
          </div>
        </ul>
        // dfd
      )}
    </div>
  );
};

export default Navbar;
