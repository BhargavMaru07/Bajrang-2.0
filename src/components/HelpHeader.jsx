import React from "react";

const HelpHeader = () => {
  return (
    <header className="bg-bg">
      <div className="px-4 py-6 mx-auto mb-10 text-center sm:px-0 max-w-7xl">
        <h1 className="text-2xl font-bold md:text-3xl text-text">
          How can we help?
        </h1>
        <input
          type="text"
          placeholder="Type your question"
          className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-md md:w-2/3 lg:max-w-lg"
        />
      </div>
    </header>
  );
};

export default HelpHeader;
