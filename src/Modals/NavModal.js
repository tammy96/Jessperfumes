import { useState, useEffect } from "react";
import closeicon from "../Jess Images/closeicon.png"
import logofooter from "../Jess Images/logofooter.png"
import navimage from "../Jess Images/homeimage1.jpeg"
import navimage2 from "../Jess Images/homimage2.jpeg"
import navimage3 from "../Jess Images/about image3.jpeg"
import navimage4 from "../Jess Images/homeimage4.jpeg"
import navimage5 from "../Jess Images/about-image 4.1.jpeg"
import navimage6 from "../Jess Images/homeimage6.jpeg"
import instagramfooter from "../Jess Images/instagramfooter.png"
import locationicon from "../Jess Images/locationlogo.png"
import messageicon from "../Jess Images/messageicon.png"
import phonelogo from "../Jess Images/phone icon (1).png"
import { Link } from "react-router-dom";

const NavModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set isOpen to true after the component mounts to trigger the slide-in animation
    setIsOpen(true);
  }, []);

  return (
    <>
      <div
        className="w-full bg-black opacity-70 h-screen fixed top-0 left-0 z-[1000]"
        
      ></div>

      <div
        className={`w-72 md:w-[25vw] fixed top-0 right-0 bg-navpurple h-screen z-[1000]
          ${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300`}
          >
        <img src={closeicon} alt="close icon" className="w-4 absolute top-6 right-6 cursor-pointer" onClick={props.showModal} />
        <ul className="flex flex-col gap-4 items-center mt-16">
          <li onClick={props.showModal}>
            <Link className="text-slate-300 text-3xl font-unna" to="/">Home</Link>
          </li>
          <li onClick={props.showModal}>
            <Link className="text-slate-300 text-3xl font-unna" to="/about">About</Link>
          </li>
          <li onClick={props.showModal}>
            <Link className="text-slate-300 text-3xl font-unna" to="/">Contact</Link>
          </li>
        </ul>
              <div className="flex flex-col gap-4 items-center mt-16">
                  <img src={logofooter} alt="logo footer" className="w-24 md:w-36" />
                  <h2 className="font-unna text-slate-300 text-xl max-w-xs text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          
          <a href="">
          <div className="flex flex-row gap-1">
            <img src={ instagramfooter} alt="instagram footer" className="w-6 h-6 opacity-50" />
            <p className="opacity-50">my_handle</p>
          </div>
         </a>

    <div className="flex flex-row justify-center w-[300px] flex-wrap gap-1">
        <div className="relative w-20  group">
            <img src={navimage5} alt="first image" className="w-full h-fit" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-black/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
          </div>
          </div>
        <div className="relative w-20  group">
            <img src={navimage2} alt="first image" className="w-20 h-fit" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-black/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
          </div>
          </div>
        <div className="relative w-20  group">
            <img src={navimage3} alt="first image" className="w-full" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-black/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
          </div>
          </div>
        <div className="relative w-20  group">
            <img src={navimage4} alt="first image" className="w-full" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-black/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
          </div>
          </div>
        <div className="relative w-20  group">
            <img src={navimage} alt="first image" className="w-full" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-black/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
          </div>
          </div>
        <div className="relative w-20  group">
            <img src={navimage6} alt="first image" className="w-full" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-black/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
        </div>
    </div>
                     
          </div>
          <div className="text-sm text-slate-300 space-y-2">
            <div className="flex dlex-row gap-2 max-w-md items-center">
              <img src={locationicon} alt="location icon" className="w-6 h-6 opacity-70" />
              <p className="max-w-sm">
              Jln Cempaka Wangi No 22, Jakarta <br/> - Indonesia
              </p>
            </div>
            <div className="flex dlex-row gap-2 max-w-md items-center px-1">
              <img src={messageicon} alt="location icon" className="w-4 h-4 opacity-70" />
              <p className="max-w-sm">
              support@domain.tld
              </p>
            </div>
            <div className="flex dlex-row gap-2 max-w-md items-center px-2">
              <img src={phonelogo} alt="location icon" className="w-4 h-4 opacity-70" />
              <p className="max-w-sm">
              +6221.2002.2012
              </p>
            </div>
          </div>
              </div>
      </div>
    </>
  );
};

export default NavModal;
