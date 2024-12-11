// import React from "react";

// const Poster = () => {
//   return (
//     <section className="mx-auto max-w-7xl">
//       <div className="p-1 flex flex-wrap items-center justify-center">
//         <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
//           <svg
//             className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
//             viewBox="0 0 375 283"
//             fill="none"
//             style={{ opacity: 0.1 }}
//           >
//             <rect
//               x="159.52"
//               y="175"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 159.52 175)"
//               fill="white"
//             />
//             <rect
//               y="107.48"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 0 107.48)"
//               fill="white"
//             />
//           </svg>
//           <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
//             <div
//               className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
//               style={{
//                 background: "radial-gradient(black, transparent 60%)",
//                 transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
//                 opacity: 0.2,
//               }}
//             />
//             <img
//               className="relative w-40"
//               src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
//               alt=""
//             />
//           </div>
//           <div className="relative text-white px-6 pb-6 mt-6">
//             <span className="block opacity-75 -mb-1">Indoor</span>
//             <div className="flex justify-between">
//               <span className="block font-semibold text-xl">Peace Lily</span>
//               <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
//                 $36.00
//               </span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Poster;




//LANDSCAPE.......................................

import React from "react";

const Poster = () => {
  return (
    <section className="mx-auto max-w-7xl">
      {/* <div className="p-1 flex flex-wrap items-center justify-center"> */}
      <div className="px-4 py-2 place-items-center grid w-full gap-5 grid-cols-1 md:grid-cols-2 sm:px-6">
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-lg shadow-lg group flex">
          <div className="relative w-1/2 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-full h-full"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            />
            <img
              className="relative w-2/3"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt="Peace Lily"
            />
          </div>
          <div className="relative w-1/2 text-white px-6 py-6 flex flex-col justify-center">
            <span className="block opacity-75 -mb-1 text-sm sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs sm:text-sm md:text-base font-bold px-3 py-2 leading-none flex items-center">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-lg shadow-lg group flex">
          <div className="relative w-1/2 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-full h-full"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            />
            <img
              className="relative w-2/3"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt="Peace Lily"
            />
          </div>
          <div className="relative w-1/2 text-white px-6 py-6 flex flex-col justify-center">
            <span className="block opacity-75 -mb-1 text-sm sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs sm:text-sm md:text-base font-bold px-3 py-2 leading-none flex items-center">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-lg shadow-lg group flex">
          <div className="relative w-1/2 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-full h-full"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            />
            <img
              className="relative w-2/3"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt="Peace Lily"
            />
          </div>
          <div className="relative w-1/2 text-white px-6 py-6 flex flex-col justify-center">
            <span className="block opacity-75 -mb-1 text-sm sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs sm:text-sm md:text-base font-bold px-3 py-2 leading-none flex items-center">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-lg shadow-lg group flex">
          <div className="relative w-1/2 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-full h-full"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            />
            <img
              className="relative w-2/3"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt="Peace Lily"
            />
          </div>
          <div className="relative w-1/2 text-white px-6 py-6 flex flex-col justify-center">
            <span className="block opacity-75 -mb-1 text-sm sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs sm:text-sm md:text-base font-bold px-3 py-2 leading-none flex items-center">
                $36.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;

