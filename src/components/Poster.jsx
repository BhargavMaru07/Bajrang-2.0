// import React from "react";

// const Poster = () => {
//   return (
//     <section className="mx-auto max-w-7xl">
//       <div className="flex flex-wrap items-center justify-center p-1">
//         <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden bg-orange-500 rounded-lg shadow-lg group">
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
//           <div className="relative flex items-center justify-center px-10 pt-10 transition-transform group-hover:scale-110">
//             <div
//               className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"
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
//           <div className="relative px-6 pb-6 mt-6 text-white">
//             <span className="block -mb-1 opacity-75">Indoor</span>
//             <div className="flex justify-between">
//               <span className="block text-xl font-semibold">Peace Lily</span>
//               <span className="flex items-center block px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full">
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
      {/* <div className="flex flex-wrap items-center justify-center p-1"> */}
      <div className="grid w-full grid-cols-1 gap-5 px-4 py-2 place-items-center md:grid-cols-2">
        <div className="relative flex flex-shrink-0 overflow-hidden bg-orange-500 rounded-lg shadow-lg group">
          <div className="relative flex items-center justify-center w-1/2 transition-transform group-hover:scale-110">
            <div
              className="absolute block w-full h-full"
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
          <div className="relative flex flex-col justify-center w-1/2 px-6 py-6 text-white">
            <span className="block -mb-1 text-sm opacity-75 sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex items-center justify-between">
              <span className="block text-lg font-semibold sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full sm:text-sm md:text-base">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex flex-shrink-0 overflow-hidden bg-orange-500 rounded-lg shadow-lg group">
          <div className="relative flex items-center justify-center w-1/2 transition-transform group-hover:scale-110">
            <div
              className="absolute block w-full h-full"
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
          <div className="relative flex flex-col justify-center w-1/2 px-6 py-6 text-white">
            <span className="block -mb-1 text-sm opacity-75 sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex items-center justify-between">
              <span className="block text-lg font-semibold sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full sm:text-sm md:text-base">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex flex-shrink-0 overflow-hidden bg-orange-500 rounded-lg shadow-lg group">
          <div className="relative flex items-center justify-center w-1/2 transition-transform group-hover:scale-110">
            <div
              className="absolute block w-full h-full"
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
          <div className="relative flex flex-col justify-center w-1/2 px-6 py-6 text-white">
            <span className="block -mb-1 text-sm opacity-75 sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex items-center justify-between">
              <span className="block text-lg font-semibold sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full sm:text-sm md:text-base">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex flex-shrink-0 overflow-hidden bg-orange-500 rounded-lg shadow-lg group">
          <div className="relative flex items-center justify-center w-1/2 transition-transform group-hover:scale-110">
            <div
              className="absolute block w-full h-full"
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
          <div className="relative flex flex-col justify-center w-1/2 px-6 py-6 text-white">
            <span className="block -mb-1 text-sm opacity-75 sm:text-base md:text-lg">
              Indoor
            </span>
            <div className="flex items-center justify-between">
              <span className="block text-lg font-semibold sm:text-xl md:text-2xl">
                Peace Lily
              </span>
              <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full sm:text-sm md:text-base">
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

