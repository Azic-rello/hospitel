import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./News/Hero";
import Card from "./News/Card";

const News = () => {
  const posts = [
    {
      image: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
      date: "January 15, 2024",
      title: "A passion for helping patients find better solutions",
      text: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
      image: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
      date: "January 20, 2024",
      title: "5 solutions for better patient treatment",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
    },
    {
      image: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
      date: "January 25, 2024",
      title: "Health care tips for daily living",
      text: "It has roots in a piece of classical Latin literature from 45 BC...",
    },
     {
      image: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
      date: "January 15, 2024",
      title: "A passion for helping patients find better solutions",
      text: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
      image: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
      date: "January 20, 2024",
      title: "5 solutions for better patient treatment",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
    },
    {
      image: "/assets/2ce17cfb7b7df3a6607f4db7373cb37c61b1a840.jpg",
      date: "January 25, 2024",
      title: "Health care tips for daily living",
      text: "It has roots in a piece of classical Latin literature from 45 BC...",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((item, i) => (
            <Card
              key={i}
              image={item.image}
              date={item.date}
              title={item.title}
              text={item.text}
              className="hover:shadow-2xl transition-shadow duration-300"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
