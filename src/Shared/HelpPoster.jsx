import React from "react";
import { Link } from "react-router-dom";

const HelpPoster = () => {
  return (
    <section className="bg-[#FDEBD2]">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-0">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-[300] tracking-[0.5]">
            Didn't find what you needed? Try these.
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 mt-8">
            <Link className="px-6 py-3 text-white transition bg-black rounded-full hover:bg-gray-800  md:w-[30%] w-[80%]">
              Help with an order
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 transition border border-black rounded-full md:w-[30%] w-[80%]"
            >
              Contact Bajrang Latkan Support
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div>
            <Link className="hover:underline">
              <h3 className="mb-2 text-lg font-semibold">
                Read our Policies →
              </h3>
            </Link>
            <p className="text-sm text-gray-700">
              Get the ins and outs of buying and selling on Bajrang Latkan.
            </p>
          </div>
          <div>
            <Link className="hover:underline">
              <h3 className="mb-2 text-lg font-semibold">
                Check out the Bajrang Journal →
              </h3>
            </Link>
            <p className="text-sm text-gray-700">
              Explore ideas and inspiration for creative living.
            </p>
          </div>
          <div>
            <Link className="hover:underline">
              <h3 className="mb-2 text-lg font-semibold">
                See how you're protected →
              </h3>
            </Link>
            <p className="text-sm text-gray-700">
              Find out more about safety and security in our marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpPoster;
