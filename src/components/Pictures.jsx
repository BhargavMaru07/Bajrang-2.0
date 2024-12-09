import React from 'react'

const Pictures = () => {

    let pictures = Array.from({length:6})
  return (
    <section className="px-4 py-4 mx-auto mt-12 mb-16 max-w-7xl sm:px-6">
      <div className="px-2 lg:px-4">
        <h1 className="mb-12 text-lg text-gray-600">
          Bajrang Latkan invites you to explore a vibrant collection of styles,
          blending classic charm with modern trends. With our customization
          options, you can bring your personal style to life.
        </h1>
        <div className="grid grid-cols-2 gap-8 py-2 mt-6 lg:grid-cols-3 xl:grid-cols-3">
          {pictures.map((_, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src="https://placehold.co/400"
                alt={`Picture ${index + 1}`}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pictures