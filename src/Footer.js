import logofooter from "./Jess Images/logofooter.png"
import footerfacebook from "./Jess Images/facebookfooter.png"
import instagramfooterlogo from "./Jess Images/instagramfooter.png"
import footertwitter from "./Jess Images/twitterfooter.png"
import youtubefooter from "./Jess Images/public.png"
import jesslogo from "./Jess Images/footerjesslogo.png"

const Footer = () => {

    return (
        <div className="bg-navpurple w-full py-12 px-6 md:px-2 text-slate-300">
            <div className="flex flex-col items-center text-white text-center gap-6 pb-8">
            <img src={logofooter } alt="footer logo" className="w-28 opacity-80 md:w-44" />
                <h1 className="text-3xl text-slate-300 md:text-6xl font-extralight font-unna">
                The Ideal Fragrance. 
                </h1>
                <p className="font-serif text-slate-300 text-md md:text-xl md:max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut elit tellus, luctus nec ullamcorper mattis,
                    pulvinar dapibus leo.
                </p>
                <div className="flex flex-row gap-2">
                    <a href="">
                    <div className="w-fit p-2 bg-slate-700">
                    <img src={ footerfacebook} alt="footer facebook" className="w-4"/>
                   </div>
                    </a>

                    <a href="">
                    <div className="w-fit p-1 bg-slate-700">
                    <img src={instagramfooterlogo} alt="footer instagram" className="w-5"/>
                   </div>
                    </a>

                    <a href="">
                    <div className="w-fit p-2 bg-slate-700">
                    <img src={ footertwitter} alt="footer twitter" className="w-4"/>
                   </div>
                    </a>

                    <a href="">
                    <div className="w-fit p-2 bg-slate-700">
                    <img src={ youtubefooter} alt="footer youtube" className="w-4"/>
                   </div>
                    </a>
                </div>
            </div>
            <hr className="md:w-3/4 mx-auto"/>
            <div className="flex flex-col md:flex-row justify-center flex-wrap items-center text-center text-slate-300 font-serif mt-8">
                <ul className="flex flex-row justify-center gap-6 items-center text-lg flex-wrap text-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms & Services</li>
                </ul>

                <img src={ jesslogo} alt="footer logo icon" className="opacity-80" />
                
                <p className="text-lg text-slate-300">
                Copyright © 2023 Jess Perfume & Fragrances, All rights reserved.
                </p>
           </div>
        </div>
    )
}

export default Footer