import Image from "next/image";
import React from "react";
import img1 from "../../public/assets/fp1.png";
import img2 from "../../public/assets/fp2.png";
import img3 from "../../public/assets/fp3.png";
import img4 from "../../public/assets/fp4.png";
import img5 from "../../public/assets/fp5.png";
import threeboxes from "../../public/assets/threeboxes.png";

const featuredProducts = () => {
  return (
    <section className="relative flex flex-col  justify-center items-center gap-8 mt-[680px] md:mt-[950px] lg:mt-0 md:h-[75vh] lg:h-[110vh] h-[150vh] w-full px-5 lg:px-48 lg:py-20">
      <div className="flex flex-row items-center w-full justify-between ">
        <p className="md:text-4xl text-2xl capitalize font-bold w-[50%]">our featured products</p>
        <button className="capitalize bg-[#4A8780] text-white rounded-lg md:px-5 md:py-2 py-2 px-4  hover:scale-105 transition-all">
          view more
        </button>
      </div>
      <div className="flex flex-col gap-3 h-[90vh] w-full  lg:p-5">
        <div className="w-full flex-col md:flex-row  flex gap-5">
          {/* <div className="w-[60%] h-full"> */}
            <Image src={img1} className="rounded-xl w-full md:w-[70%] h-[200px] md:h-[300px]  hover:scale-105 transition-all" alt="img" />
          {/* </div> */}
          <div className="flex flex-col gap-4 md:w-[30%] md:h-[300px]  ">
            <Image src={img2} className="rounded-xl md:h-[142px]  hover:scale-105 transition-all " alt="img" />
            <Image src={img3} className="rounded-xl md:h-[142px]  hover:scale-105 transition-all" alt="img" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 ">
              <Image src={img4} className="rounded-xl md:w-[60%] hover:scale-105 transition-all" alt="img" />
              <Image src={img5} className="rounded-xl md:w-[40%] hover:scale-105 transition-all " alt="img" />
        </div>
      </div>
      <div className="lg:w-52 w-20 top-10 md:-top-20 right-0 absolute lg:top-10 rotate-90 lg:-right-5  lg:block">
          <Image
            src={threeboxes}
            width={900}
            height={900}
            alt="Modern kitchen design"
            className="rounded-lg"
          />
        </div>
      <div className="lg:w-52 w-20 bottom-10 md:bottom-20 left-0 absolute lg:bottom-60 rotate-90 lg:left-20  lg:block">
          <Image
            src={threeboxes}
            width={900}
            height={900}
            alt="Modern kitchen design"
            className="rounded-lg"
          />
        </div>
    </section>
  );
};

export default featuredProducts;
