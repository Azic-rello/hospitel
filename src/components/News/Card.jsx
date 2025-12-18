import { FaUser, FaEye, FaComment } from "react-icons/fa";

const newsData = [
  {
    image: "/assets/fd23e4c9ed490a90412c8dda9d2f0b3ab784eeae.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare...",
  },
  {
    image: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare...",
  },
  {
    image: "/assets/3872cf531b67c6202c38dc53126a3cc49440d867.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare...",
  },
  {
    image: "/public/assets/8866c2d2d5b2cd8e3e1d48af05c0ec67c8ce2cb5.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare...",
  },
];

const recentPosts = [
  {
    img: "/assets/125b068b999f19c15df62b6df3372e124ec218e1.jpg",
    date: "Monday 05, September 2021",
    title: "This Article’s Title goes Here,but not too long.",
  },
  {
    img: "/assets/8866c2d2d5b2cd8e3e1d48af05c0ec67c8ce2cb5.jpg",
    date: "Monday 05, September 2021",
    title: "Article’s Title goes Here,but not too long.",
  },
  {
    img: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
    date: "Monday 05, September 2021",
    title: "This Article’s Title goes Here, but not too long.",
  },
  {
    img: "/public/assets/4f5792cf615ab11794b15f35bb74dce1d08d710f.jpg",
    date: "Monday 05, September 2021",
    title: "This Article’s Title goes Here, but not too long.",
  },
  {
    img: "/public/assets/3872cf531b67c6202c38dc53126a3cc49440d867.jpg",
    date: "Monday 05, September 2021",
    title: "This Article’s Title goes Here, but not too long.",
  },
  {
    img: "/assets/8866c2d2d5b2cd8e3e1d48af05c0ec67c8ce2cb5.jpg",
    date: "Monday 05, September 2021",
    title: "This Article’s Title goes Here, but not too long.",
  },
];

const categories = [
  { name: "Surgery", count: 3 },
  { name: "Health Care", count: 5 },
  { name: "Medical", count: 8 },
  { name: "Professional", count: 10 },
];

const Card = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-12">
          {newsData.map((item, i) => (
            <div
              key={i}
              className="shadow-xl rounded-md overflow-hidden bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6 h-80 flex flex-col gap-y-5">
                <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-3">
                  <span>📅 Monday, 05 September 2021</span>
                  <span className="flex items-center gap-1">
                    <FaUser className="text-xs" /> By Author
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye className="text-xs" /> 68
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComment className="text-xs" /> 86
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Convallis
                  felis vitae tortor augue.
                </p>
                <button className="text-blue-600 text-lg font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="w-full lg:w-80 bg-white rounded-xl shadow-md overflow-hidden sticky top-6">
            <div className="bg-blue-900 px-4 py-3 flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-white placeholder:text-white outline-none"
              />
              <span className="text-white text-lg">🔍</span>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex gap-3">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-14 h-14 rounded-md object-cover"
                    />
                    <div>
                      <p className="text-xs text-blue-600">{post.date}</p>
                      <p className="text-sm text-gray-800 leading-snug">
                        {post.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-gray-700"
                  >
                    <span>{cat.name}</span>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
