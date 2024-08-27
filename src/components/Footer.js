// components/Footer.js
import Image from 'next/image';
import img1 from "../../public/assets/fp1.png"
import img2 from "../../public/assets/fp3.png"
import img3 from "../../public/assets/fp5.png"
import img4 from "../../public/assets/servicesbg.png"


const Footer = () => {
    const images = [
        {img: img1},
        {img: img2},
        {img: img3},
        {img: img4},
    ]
  return (
    <footer className="bg-black text-white py-10 lg:py-20 lg:px-52 px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">LOGO</h2>
            <p className="text-sm">Lorem ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>Architecture</li>
              <li>Interior design</li>
              <li>Lighting installation</li>
              <li>Floor Planning</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Our team</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Work</h3>
            <div className="grid grid-cols-2 gap-2">
              {images.map((num) => (
                <div key={num} className="">
                  <Image 
                    src={num.img} 
                    alt={`Recent work `} 
                    className="transition-transform object-cover rounded-lg duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t-[2px] border-zinc-400 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright © 2024 UI8 LLC. All rights reserved</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;