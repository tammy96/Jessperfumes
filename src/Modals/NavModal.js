import { useState, useEffect } from "react";

const NavModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set isOpen to true after the component mounts to trigger the slide-in animation
    setIsOpen(true);
  }, []);

  return (
    <>
      <div
        className="w-full bg-black opacity-50 h-screen fixed top-0 left-0 z-[1000]"
        onClick={props.showModal}
      ></div>

      <div
        className={`w-[35vw] fixed top-0 right-0 bg-white h-screen z-[1000]
          ${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300`}
      ></div>
    </>
  );
};

export default NavModal;
