import React from "react";
import { ICONS } from "../assets/Icons/icon";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: <ICONS.CART size={45} color="#4CAF50" />,
    title: "Buying on Bajrang Latkan",
    items: ["Shopping & Gifting", "Searching for Items", "Buying Safely"],
  },
  {
    icon: <ICONS.PAYMENT size={45} color="#2196F3" />,
    title: "Cart & Payment",
    items: [
      "Using Gift Cards & Coupons",
      "Taxes & Customs Fees",
      "Checkout",
      "Payment Options",
    ],
  },
  {
    icon: <ICONS.PEOPLE_BOX size={45} color="#FF9800" />,
    title: "Your Orders",
    items: ["After You Purchase", "Order Issues & Returns"],
  },
  {
    icon: <ICONS.ACCOUNT size={45} color="#9C27B0" />,
    title: "Your Account",
    items: ["Sign In & Password", "Account Settings", "Contacting Support"],
  },
];

const ShopSection = () => {
  return (
    <section className="px-4 py-8 mx-auto max-w-7xl sm:px-0">
      <h2 className="mb-4 text-3xl font-[300] tracking-[0.5] text-center text-text">
        Shop on Bajrang Latkan
      </h2>
      <div className="grid grid-cols-1 gap-8 px-4 py-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 sm:px-0">
        {sections.map((section, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="">{section.icon}</div>
            <div>
              <h3 className="mb-2 font-bold">{section.title}</h3>
              <ul className="text-sm text-gray-700 list-disc ">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:underline">
                    <Link>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
