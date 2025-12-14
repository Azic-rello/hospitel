import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Card = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      department: "Neurology",
      image: "/public/assets/Doctor1.png",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      department: "Cardiology",
      image: "/public/assets/Doctor2.png",
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      department: "Orthopedics",
      image: "/public/assets/Doctor3.png",
    },
     {
      id: 1,
      name: "Dr. John Smith",
      department: "Neurology",
      image: "/public/assets/Doctor1.png",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      department: "Cardiology",
      image: "/public/assets/Doctor2.png",
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      department: "Orthopedics",
      image: "/public/assets/Doctor3.png",
    },
  ]

  const Card = ({ doctor }) => {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm w-full">
        <div className="w-full h-72 bg-gray-200">
          <img
            className="w-full h-full object-cover"
            src={doctor.image}
            alt={doctor.name}
          />
        </div>

        <div className="p-6 bg-blue-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {doctor.name}
          </h2>

          <h3 className="text-base font-bold text-indigo-700 uppercase tracking-wide mb-4">
            {doctor.department}
          </h3>

          <div className="flex justify-center gap-3 mb-4">
            <button className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaLinkedinIn />
            </button>
            <button className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaFacebookF />
            </button>
            <button className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaInstagram />
            </button>
          </div>

          <button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-2 px-4 rounded-lg">
            View Profile
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

export default Card;
