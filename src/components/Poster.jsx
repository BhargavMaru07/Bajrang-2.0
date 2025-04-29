import React from "react";
import Post2 from "../assets/images/Poster/post2.webp";
import Post3 from "../assets/images/Poster/post3.webp";
import Post4 from "../assets/images/Poster/post4.webp";
import Post5 from "../assets/images/Poster/post5.webp";

const Poster = () => {
  const poster = [
    {
      img: Post2,
    },
    {
      img: Post5,
    },
    {
      img: Post3,
    },
    {
      img: Post4,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl">
      <div className="grid w-full grid-cols-1 gap-5 px-4 py-2 place-items-center md:grid-cols-2">
        {poster.map((post, index) => {
          return (
            <div key={index}>
              <img
                src={post.img}
                alt="poster"
                className="rounded-lg hover:opacity-[0.8] cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Poster;
