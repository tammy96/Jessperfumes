import navimage from "../Jess Images/homeimage1.jpeg"
import navimage2 from "../Jess Images/homimage2.jpeg"
import navimage3 from "../Jess Images/about image3.jpeg"
import navimage4 from "../Jess Images/homeimage4.jpeg"
import navimage5 from "../Jess Images/about-image 4.1.jpeg"
import navimage6 from "../Jess Images/homeimage6.jpeg"


const Gallery = () => {


    return (
        <>
            <section className="w-full p-8 bg-slate-200">
                <h1 className="font-unna text-4xl text-navpurple opacity-60 md:text-6xl py-8 text-center">Gallery Product</h1>
            <div className="flex flex-row justify-center flex-wrap gap-2">
                <div className="relative w-36 h-28 md:w-44 md:h-36 lg:w-96 lg:h-72  group">
                    <img src={navimage5} alt="first image" className=" w-full h-full object-cover md:object-cover" />  
                    <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-navpurple/50 
                    transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
                </div>
                </div>
                <div className="relative w-36 h-28 md:w-44 md:h-36 lg:w-96 lg:h-72  group">
                    <img src={navimage2} alt="first image" className="w-full h-full object-cover md:object-cover" />  
                    <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-navpurple/50 
                    transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
                </div>
                </div>
                <div className="relative w-36 h-28 md:w-44 md:h-36 lg:w-96 lg:h-72  group">
                    <img src={navimage3} alt="first image" className="w-full h-full object-cover md:object-cover" />  
                    <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-navpurple/50 
                    transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
                </div>
                </div>
                <div className="relative w-36 h-28 md:w-44 md:h-36 lg:w-96 lg:h-72  group">
                    <img src={navimage4} alt="first image" className="w-full h-full object-cover md:object-cover" />  
                    <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-navpurple/50 
                    transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
                </div>
                </div>
        <div className="relative w-36 h-28 md:w-44 md:h-36 lg:w-96 lg:h-72 group">
            <img src={navimage} alt="first image" className="w-full h-full object-cover md:object-cover" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-navpurple/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
          </div>
          </div>
        <div className="relative w-36 h-28 md:w-44 md:h-36 lg:w-96 lg:h-72 group">
            <img src={navimage6} alt="first image" className="w-full h-full object-cover md:object-cover" />  
            <div className="w-full h-full absolute top-0 left-0 cursor-pointer bg-navpurple/50 
            transition duration-300 ease-in-out overflow-hidden opacity-0 hover:opacity-100">
        </div>
        </div>
        </div>
    </section>
        </>
    )
}

export default Gallery