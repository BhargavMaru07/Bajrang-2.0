import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "Shopping & Gifting",
    title: "How to Buy a Bajrang Latkan Gift Card",
  },
  {
    category: "Shopping & Gifting",
    title: "How to Purchase an Item on Bajrang Latkan",
  },
  { category: "After You Purchase", title: "What's the Status of My Order?" },
  {
    category: "Searching for Items",
    title: "How to Search for Items and Shops on Bajrang Latkan",
  },
  {
    category: "Buying Safely",
    title: "Tips for Buying Safely on Bajrang Latkan",
  },
];

const FeaturedArticles = () => {
  return (
    <section className="px-4 py-8 mx-auto mb-10 max-w-7xl sm:p-0">
      <h2 className="mb-4 text-3xl font-[300] tracking-[0.5] text-center text-text">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-start">
        {articles.map((article, index) => (
          <Link to="#">
            <div
              key={index}
              className="w-full max-w-xs p-4 bg-white rounded-lg cursor-pointer hover:shadow-md"
            >
              <h3 className="font-semibold text-text">{article.category}</h3>
              <p className="text-base font-semibold text-black">
                {article.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
