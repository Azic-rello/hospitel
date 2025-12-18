import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Futer = () => {
  return (
    <div>
      <div className="h-30"></div>
      <div className="bg-[#2d076e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold">MEDDICAL</h2>
              <p className="text-sm text-gray-300 leading-6">
                Leading the Way in Medical Excellence, Trusted Care.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white cursor-pointer">Appointment</li>
                <li className="hover:text-white cursor-pointer">Doctors</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Call: (237) 681-812-255</li>
                <li>Email: fildineeseo@gmail.com</li>
                <li>Address: 0123 Some place</li>
                <li>Some country</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex items-center bg-white rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 text-sm text-gray-700 outline-none"
                />
                <button className="px-4 py-3 text-[#2d076e]">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>

          <hr className="my-10" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300">
            <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>

            <div className="flex gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
                <FaLinkedinIn />
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futer;
