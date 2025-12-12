


export default function Card({ image, date, title, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      <img src={image} alt="" className="w-full h-60 object-cover" />

      <div className="p-5">
        <p className="text-blue-600 text-sm">{date}</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-2 text-blue-900">
          {title}
        </h2>

        <p className="text-gray-700 mt-2">{text}</p>

        <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg">
          Read More →
        </button>
      </div>
    </div>
  );
}
