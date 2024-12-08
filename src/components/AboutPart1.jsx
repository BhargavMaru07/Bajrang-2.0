import React from "react";
import { FaShippingFast, FaShieldAlt, FaUserClock } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";

const service = [
  {
    icon: <FaShippingFast size={45} color="#4CAF50" />,
    title: "Free Shipping",
    description:
      "Get free shipping on all Latkan orders, anywhere in the country.",
  },
  {
    icon: <FaShieldAlt size={45} color="#2196F3" />,
    title: "Secure Payments",
    description: "Your payments are safe with our trusted and secure gateway.",
  },
  {
    icon: <FaPeopleCarryBox size={45} color="#FF9800" />,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days, no questions asked.",
  },
  {
    icon: <FaUserClock size={45} color="#9C27B0" />,
    title: "24/7 Support",
    description:
      "We're here to help you with your queries anytime, day or night.",
  },
];

const AboutPart1 = () => {
  return (
    <div className="px-4 py-4 mx-auto mt-12 mb-16 max-w-7xl sm:px-6">
      <div className="px-2 py-2 lg:px-4 ">
        <h1 className="mb-3 text-2xl font-semibold text-head">Our</h1>
        <h3 className="mb-4 text-3xl font-semibold sm:text-3xl">
          Value Proposition
        </h3>
        <p className="mb-12 text-lg text-gray-600 ">
          Discover a world of Latkan possibilities at Bajrang Latkan. From
          classic to contemporary, we offer a vast array of styles and designs.
          Our customization options allow you to create a unique piece that
          reflects your personal style.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 px-4 py-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {service.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 transition duration-300 ease-in-out transform cursor-pointer hover:scale-110 hover:-translate-y-1"
          >
            <div className="w-20 h-20">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPart1;
