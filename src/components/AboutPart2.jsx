import React from "react";
import { FaHandPaper, FaPalette, FaStar, FaCog } from "react-icons/fa";

const cards = [
  {
    icon: <FaHandPaper size={45} color="#4CAF50" />,
    title: "Handcrafted Designs",
    description:
      "Our latkans are meticulously handcrafted by skilled artisans using traditional techniques. We take pride in the attention to detail and quality that goes into each piece, ensuring a unique and beautiful latkan for every outfit.",
    color: "#4CAF50",
  },
  {
    icon: <FaPalette size={45} color="#2196F3" />,
    title: "Vast Variety",
    description:
      "We offer a wide range of latkan styles, colors, and materials to suit every taste and occasion. Whether you're looking for a classic and elegant latkan for a traditional outfit or a modern and trendy piece for a contemporary look, we have something for everyone. Explore our collection of latkans made with silk, cotton, beads, tassels, and more!",
    color: "#2196F3",
  },
  {
    icon: <FaStar size={45} color="#FF9800" />,
    title: "Premium Quality",
    description:
      "We use only the finest materials and techniques to ensure the highest quality latkans. We source our materials from reputable vendors and employ skilled artisans who take pride in their craft. Our commitment to quality results in latkans that are durable, long-lasting, and visually stunning.",
    color: "#FF9800",
  },
  {
    icon: <FaCog size={45} color="#9C27B0" />,
    title: "Customization",
    description:
      "We understand that you may have a specific vision for your latkan. That's why we offer customization options to create the perfect piece for you. Choose from our selection of colors, materials, and embellishments, or work with our designers to create a completely unique latkan. Let us bring your vision to life!",
    color: "#9C27B0",
  },
];

const AboutPart2 = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-2 mb-4 sm:px-6 mt-6">
      <div className="px-2 lg:px-4">
        <h1 className="font-black text-2xl sm:text-4xl text-[#6254F3] mb-2">What</h1>
        <h3 className="text-2xl sm:text-4xl font-semibold mb-4 ">We Do</h3>
        <p className="mb-12 text-gray-600 text-lg ">
          At HalfChoice we don't just provide children's clothing; we celebrate
          the art of childhood fashion. Here's what sets us apart:
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-8 px-2 py-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="p-6 border-2 rounded-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-3 cursor-pointer"
            style={{ borderColor: item.color }}
          >
            <div className="mb-6 ">{item.icon}</div>
            <div className="mb-4 font-bold">{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPart2;
