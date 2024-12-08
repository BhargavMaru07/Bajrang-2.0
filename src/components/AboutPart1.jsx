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
    icon: <FaUserClock size={45} color="#FF9800" />,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days, no questions asked.",
  },
  {
    icon: <FaPeopleCarryBox size={45} color="#9C27B0" />,
    title: "24/7 Support",
    description:
      "We're here to help you with your queries anytime, day or night.",
  },
];

const AboutPart1 = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 mt-12 mb-16 sm:px-6">
      <div className="lg:px-4 py-2 px-2 ">
        <h1 className="text-[#6254F3] font-semibold mb-3 text-2xl sm:text-4xl ">OUR</h1>
        <h3 className="font-bold text-2xl sm:text-4xl mb-4">
          Value Proposition
        </h3>
        <p className="mb-12 text-gray-600 text-lg ">
          We empower kids to be themselves through high-quality, affordable
          clothing that combines style, comfort, and durability. Our designs
          celebrate childhood while giving parents peace of mind.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 px-4 py-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {service.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 hover:scale-110 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="h-20 w-20">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPart1;
