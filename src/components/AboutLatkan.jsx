import React from "react";
import about3 from "../assets/Banner/m1.jpg";
import about2 from "../assets/Banner/m2.jpg";
import about1 from "../assets/Banner/m3.jpg";
import Button from "../Styles/Button";
import { Link } from "react-router-dom";

const AboutLatkan = () => {
  return (
    <section className="flex items-center gap-8 p-6 lg:p-16 lg:h-[80vh] justify-evenly md:flex-row flex-col-reverse">
      <div className="container lg:w-1/2">
        <h2 className="mb-4 text-2xl font-semibold text-head">About</h2>
        <h1 className="mb-6 text-3xl font-semibold sm:text-3xl">
          Bajrang Latkan
        </h1>
        <p className="mb-6 text-lg text-text">
          Bajrang Latkan : Where Elegance Meets Craftsmanship
        </p>
        <p className="mb-6 text-lg text-text">
          At Bajrang Latkan, we're your ultimate destination for exquisite and
          innovative latkan designs. Our mission is simple: provide
          premium-quality latkans that enhance the beauty of your outfits, all
          at an affordable price. We offer a diverse range of latkans, from
          traditional to contemporary styles, designed to add charm and elegance
          to every attire.
        </p>
        <p className="mb-6 text-lg text-text">
          At Our latkans are crafted to perfection, using high-quality materials
          to ensure durability and style. Whether you're adorning sarees,
          dupattas, or any festive ensemble, our collection is designed to
          celebrate individuality and creativity. With excellent customer
          service and hassle-free returns, we're here to make accessorizing your
          outfits a delightful experience.
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <Link to="/shop">
            <Button className="rounded-md">View Collection</Button>
          </Link>
          <Link to="/shop">
            <Button className="rounded-md !bg-text">Shop Now</Button>
          </Link>
        </div>
      </div>
      {/* <div className="md:w-[27%]"> */}
      <div className="grid grid-cols-2 gap-4 lg:w-[27%] sm:w-[50%]">
        <div>
          <img
            src={about1}
            alt="Exquisite Latkan Lehenga"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src={about2}
            alt="Vibrant Lehenga Collection"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center col-span-2 mx-auto">
          <img
            src={about3}
            alt="Bride wearing Latkan Lehenga"
            className="w-[50%] col-span-2 rounded-lg"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutLatkan;
