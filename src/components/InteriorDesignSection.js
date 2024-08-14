import Image from 'next/image';
import img1 from "../../public/assets/designsection1.png"
import img2 from "../../public/assets/designsection2.png"
import img3 from "../../public/assets/designsection3.png"
import img4 from "../../public/assets/threeboxes.png"



const InteriorDesignSection = () => {
  return (
    <div className="container mx-auto relative ">
      {/* Creative Solutions Section */}
      <div className="mb-16 flex lg:flex-row flex-col lg:px-40 lg:pt-20">
        <div className='lg:px-20'>
          <h1 className="text-4xl tracking-wider font-bold mb-4">Creative Solutions by Professional</h1>
          <p className="text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          {/* Stats */}
          <div className="flex flex-wrap  mb-8">
            <div className="w-full sm:w-auto mb-4 sm:mb-0 px-10 ">
              <p className="text-3xl font-bold text-teal-600">53k</p>
              <p className="text-gray-600 text-sm">Happy Client</p>
            </div>
            <div className="w-full sm:w-auto mb-4 sm:mb-0 border-l-[3px] border-l-[#4E4E4E] border-r-[3px] border-r-[#4E4E4E] px-10 ">
              <p className="text-3xl font-bold text-teal-600">10k</p>
              <p className="text-gray-600 text-sm">Projects Done</p>
            </div>
            <div className="w-full sm:w-auto px-10">
              <p className="text-3xl font-bold text-teal-600 ">120</p>
              <p className="text-gray-600 text-sm">Get Award</p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <Image
              src={img1}
              width={500}
              height={300}
              alt="Yellow chair in interior"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Image
              src={img2}
              width={500}
              height={300}
              alt="Modern living room"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Interiors Section */}
      <div className="flex   items-start justify-start bg-[#fffaf4] lg:py-20 lg:px-40 relative">
        <div className="w-full lg:w-1/2  mb-8 lg:ml-32 lg:mb-0">
          <Image
            src={img3}
            width={900}
            height={900}
            alt="Modern kitchen design"
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/3 lg:px-12 bg-white shadow-lg py-5 rounded-xl lg:absolute lg:right-[20%] lg:top-[30%] ">
          <h2 className="text-3xl font-bold mb-4">Our interiors designed to last a lifetime</h2>
          <p className="text-gray-600 text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s industry. Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>
        <div className="w-52 absolute lg:top-5 lg:left-16 hidden lg:block">
          <Image
            src={img4}
            width={900}
            height={900}
            alt="Modern kitchen design"
            className="rounded-lg"
          />
        </div>
        
      </div>
        <div className="w-52 absolute lg:top-0 lg:right-5 hidden lg:block">
          <Image
            src={img4}
            width={900}
            height={900}
            alt="Modern kitchen design"
            className="rounded-lg"
          />
        </div>
    </div>
  );
};

export default InteriorDesignSection;