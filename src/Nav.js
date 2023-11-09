import { Link, NavLink } from "react-router-dom";
import logo from "./Jess Images/jesslogo.png"
import { useState } from "react";
import NavModal from "./Modals/NavModal";

const Nav = () => {

  const [isShown, setIsShown] = useState(false)

  const showModal = () => {
    setIsShown(!isShown)
  }

    return(
      <nav className="flex flex-row justify-between items-center bg-slate-900 text-slate-100">
        {isShown && (
          <NavModal showModal={showModal} /> 
        )}
        <div>
            <img src={logo} alt="website logo" className="p-3 w-24"/>
        </div>
        <div className="flex gap-3 px-3">
        <div className="hidden md:flex gap-x-6 px-6">
            <div className="relative after:block">
              <Link to="/" className="after font-custom text-xl">Home</Link>
           </div>
            <div className="relative after:block">
            <NavLink to="about" className="after font-custom text-xl">About Us</NavLink>
            </div>
            <div className="relative after:block">
            <NavLink to="about" className="after font-custom text-xl">Contact Us</NavLink>
            </div>
          </div>
          <div className="block" onClick={showModal}>
              <button className="flex flex-col justify-center w-8 h-8" id="hamburger-icon">
                  <span className="block w-6 h-0.5 bg-white transition-all my-1" id="line1"></span>
                  <span className="block w-6 h-0.5 bg-white transition-all my-1" id="line2"></span>
                  <span className="block w-6 h-0.5 bg-white transition-all my-1" id="line3"></span>
              </button>
          </div>
        </div>
        
        






        </nav>
    )
}

export default Nav