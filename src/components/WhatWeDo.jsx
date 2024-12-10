import React from "react";
import { ICONS } from "../assets/Icons/icon";

const cards = [
  {
    icon: <ICONS.HAND size={45} color="#4CAF50" />,
    title: "Handcrafted Designs",
    description:
      "Our latkans are meticulously handcrafted by skilled artisans using traditional techniques. We take pride in the attention to detail and quality that goes into each piece, ensuring a unique and beautiful latkan for every outfit.",
    color: "#4CAF50",
  },
  {
    icon: <ICONS.PALETTE size={45} color="#2196F3" />,
    title: "Vast Variety",
    description:
      "We offer a wide range of latkan styles, colors, and materials to suit every taste and occasion. Whether you're looking for a classic and elegant latkan for a traditional outfit or a modern and trendy piece for a contemporary look, we have something for everyone. Explore our collection of latkans made with silk, cotton, beads, tassels, and more!",
    color: "#2196F3",
  },
  {
    icon: <ICONS.STAR size={45} color="#FF9800" />,
    title: "Premium Quality",
    description:
      "We use only the finest materials and techniques to ensure the highest quality latkans. We source our materials from reputable vendors and employ skilled artisans who take pride in their craft. Our commitment to quality results in latkans that are durable, long-lasting, and visually stunning.",
    color: "#FF9800",
  },
  {
    icon: <ICONS.STAR size={45} color="#9C27B0" />,
    title: "Customization",
    description:
      "We understand that you may have a specific vision for your latkan. That's why we offer customization options to create the perfect piece for you. Choose from our selection of colors, materials, and embellishments, or work with our designers to create a completely unique latkan. Let us bring your vision to life!",
    color: "#9C27B0",
  },
];

const WhatWeDo = () => {
  return (
    <div className="px-4 py-2 mx-auto mt-6 mb-4 max-w-7xl sm:px-6">
      <div className="px-2 lg:px-4">
        <h1 className="mb-2 text-2xl font-semibold text-head">What</h1>
        <h3 className="mb-4 text-3xl font-semibold sm:text-3xl">We Do</h3>
        <p className="mb-12 text-lg text-gray-600 ">
          At Bajrang Latkan, we elevate traditional artistry. Our latkans are
          meticulously handcrafted, using only the finest materials and
          intricate techniques. We blend heritage with modern style, creating
          exquisite pieces that add a touch of elegance to every outfit.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 px-2 py-2 mt-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="p-6 transition duration-300 ease-in-out transform border-2 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-3"
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

export default WhatWeDo;
