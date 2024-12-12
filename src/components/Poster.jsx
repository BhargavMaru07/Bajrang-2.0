import React from "react";
import Post from "../assets/images/poster1.jpeg";

const Poster = () => {
  const poster = [
    {
      img: Post,
      name: "Indoor",
      title: "Peace Lily",
      price: 36,
    },
    {
      img: Post,
      name: "Indoor",
      title: "Peace Lily",
      price: 36,
    },
    {
      img: Post,
      name: "Indoor",
      title: "Peace Lily",
      price: 36,
    },
    {
      img: Post,
      name: "Indoor",
      title: "Peace Lily",
      price: 36,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl">
      {/* <div className="flex flex-wrap items-center justify-center p-1"> */}
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
            // <div
            //   key={index}
            //   className="relative flex flex-shrink-0 overflow-hidden bg-orange-500 rounded-lg shadow-lg group"
            // >
            //   <div className="relative flex items-center justify-center w-1/2 transition-transform group-hover:scale-110">
            //     <div
            //       className="absolute block w-full h-full"
            //       style={{
            //         background: "radial-gradient(black, transparent 60%)",
            //         transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            //         opacity: 0.2,
            //       }}
            //     />
            //     <img
            //       className="relative w-2/3"
            //       src={post.img}
            //       alt={post.name}
            //     />
            //   </div>
            //   <div className="relative flex flex-col justify-center w-1/2 px-6 py-6 text-white">
            //     <span className="block -mb-1 text-sm opacity-75 sm:text-base md:text-lg">
            //       {post.name}
            //     </span>
            //     <div className="flex items-center justify-between">
            //       <span className="block text-lg font-semibold sm:text-xl md:text-2xl">
            //         {post.title}
            //       </span>
            //       <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full sm:text-sm md:text-base">
            //         ${post.price}.00
            //       </span>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </section>
  );
};

export default Poster;
