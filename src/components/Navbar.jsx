import { FaSearch } from "react-icons/fa";
import siteLogo from "../../public/assets/hospitelLogo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full bg-[#2d076e] h-[81px] flex items-center justify-around text-white">
      <img className="w-40" src={siteLogo} alt="jpg" />
      <ul className="flex gap-10 items-center -ml-80 text-lg font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-extrabold text-[#c1cbfa] text-xl" : "font-bold"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-extrabold text-[#c1cbfa] text-xl" : "font-bold"
            }
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "font-extrabold text-[#c1cbfa] text-xl" : "font-bold"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "font-extrabold text-[#c1cbfa] text-xl" : "font-bold"
            }
          >
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "font-extrabold text-[#c1cbfa] text-xl" : "font-bold"
            }
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-extrabold text-[#c1cbfa] text-xl" : "font-bold"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-9 items-center">
        <span className="text-2xl">
          <FaSearch />
        </span>
        <button className="text-lg font-medium p-[8px_22px] rounded-3xl text-[#3d0071] bg-[#c1cbfa]">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
