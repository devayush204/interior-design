"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "../../public/assets/testimg1.png";
import img2 from "../../public/assets/testimg2.jpg";
import bgimg from "../../public/assets/testbg.png";

const Testimonials = () => {
  const data = [
    {
      name: "Carlton Trapp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sapiente? Nam laboriosam, consectetur, eius nostrum rerum fuga nulla rem mollitia, temporibus aliquam hic accusamus assumenda.",
      image: "/path/to/image1.jpg",
      rating: 5,
      img: img2,
    },
    {
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sapiente? Nam laboriosam, consectetur, eius nostrum rerum fuga nulla rem mollitia, temporibus aliquam hic accusamus assumenda.",
      image: "/path/to/image2.jpg",
      rating: 4,
      img: img1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative  ">
      <Image
        alt="bg"
        src={bgimg}
        className="absolute h-[80vh] object-cover -z-10 opacity-20 "
      />
      <div className="lg:py-20 lg:px-52 flex flex-col gap-5  pt-10">
        <h2 className="text-center text-4xl font-bold ">
          What The People Think About Us
        </h2>
        <div className="flex items-center justify-center">
          <button
            className="absolute lg:top-[50%] top-[40%] left-[10%] md:left-[15%] bg-[#3A7365] text-white  py-2 px-4 text-xl rounded-lg z-20"
            onClick={prevSlide}
          >
            &lt;
          </button>

          <motion.div
            className="w-full p-4  "
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
              <Image
                src={data[currentIndex].img}
                alt="pp"
                className="w-[350px] h-[400px] rounded-xl object-cover hover:scale-105 transition-all"
              />
              <div className="flex flex-col w-[400px] bg-white bg-opacity-70 p-6">
                <p className=" italic lg:mt-0 mt-10">{data[currentIndex].testimonial}</p>
                <div className="flex ">
                  {Array.from({ length: data[currentIndex].rating }).map(
                    (_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.09 2.67 1-5.82L2 7.47l5.91-.86L10 2l2.09 4.61L18 7.47l-3.91 3.38 1 5.82L10 15z" />
                      </svg>
                    )
                  )}
                </div>
                <span className="absolute top-[67%] md:top-[65%]  lg:top-[32%] p-4 rounded-full bg-[#3A7365] text-white  ">
                  <svg
                    className="w-6  fill-white "
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 32 32"
                    transform="matrix(-1, 0, 0, -1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.064"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g id="right_x5F_quote">
                          {" "}
                          <g>
                            {" "}
                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />{" "}
                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
                <p className="mt-4 font-bold">{data[currentIndex].name}</p>
              </div>
            </div>
          </motion.div>

          <button
            className="absolute lg:top-[50%] top-[40%] right-[10%] md:right-[15%]  bg-[#3A7365] text-white py-2 px-4 text-xl rounded-lg z-20"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
