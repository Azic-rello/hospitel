import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Card() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <p className="text-xs text-violet-600 font-semibold mb-2">
          BETTER INFORMATION, BETTER HEALTH
        </p>
        <h3 className="text-2xl font-bold text-gray-900">News</h3>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src="/public/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg"
              alt="news"
              className="w-full h-44 object-cover"
            />

            <div className="p-4">
              <span className="text-xs text-gray-400">
                Monday 05, September 2021
              </span>

              <h4 className="font-semibold text-gray-800 mt-2 text-sm">
                This Article’s Title goes Here, but not too long.
              </h4>

              <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                <span>❤️ 68</span>
                <FaHeart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
