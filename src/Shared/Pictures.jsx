import React from "react";
import Insta1 from "../assets/images/Instagram/insta1.png";
import Insta2 from "../assets/images/Instagram/insta2.png";
import Insta3 from "../assets/images/Instagram/insta3.webp";

// let pictures = Array.from({ length: 6 });

const InstaPost = [{ Insta: Insta1 }, { Insta: Insta2 }, { Insta: Insta3 }];

const Pictures = () => {
  return (
    <section className="px-4 py-4 mx-auto my-4 max-w-7xl sm:px-6">
      <div className="px-2 lg:px-4">
        <h1 className="mb-12 text-lg text-gray-600">
          Bajrang Latkan invites you to explore a vibrant collection of styles,
          blending classic charm with modern trends. With our customization
          options, you can bring your personal style to life.
        </h1>
        <div className="grid grid-cols-2 gap-8 py-2 mt-6 lg:grid-cols-3 xl:grid-cols-3">
          {InstaPost.map((post, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={post.Insta}
                alt={`Picture ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute inset-0 transition-opacity duration-300 bg-gray-400 bg-opacity-50 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pictures;
