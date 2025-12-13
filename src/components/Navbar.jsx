import siteLogo from "../../public/assets/hospitelLogo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-[#2d076e] h-[81px] flex items-center justify-around">
      <img className="w-30" src={siteLogo} alt="jpg" />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Doctors</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
      <div>
        <span>
          <IoSearch />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
