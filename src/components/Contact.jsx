import { contactData } from "../constants";

const Contact = () => {
  return (
    <div className="mt-[41px]">
      <div>
        <h3 className="text-center text-2xl text-[#2290f0] font-extrabold">
          GET IN TOUCH
        </h3>
        <h1 className="text-center text-3xl text-[#2d076e] font-bold">
          Contact
        </h1>
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-10">
        {contactData.map((item) => {
          const Icon = item.icon;
          return (
            <div className="bg-[#c1cbfa] hover:bg-[#2d076e] p-6 shadow-md h-[250px] flex flex-col gap-y-2 rounded-md text-[#2d076e] hover:text-[#c1cbfa] transition-all duration-600">
              <span className="mt-8">
                <Icon style={{ fontSize: "40px" }} />
              </span>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-md">{item.text1}</p>
              <p className="text-md">{item.text2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
