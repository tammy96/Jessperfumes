import aboutImage1 from "./Jess Images/about-us image1.1.jpg"
import { Link } from "react-router-dom"
import Collections from "./About-Us/Collections"

const About = () => {

    return (
        <div>
        <section className="w-full bg-navpurple font-serif relative">
        <h1 className="font-unna text-slate-200 mx-auto w-fit py-36 text-4xl md:text-8xl relative line">
            About Us
            {/* <h2 className="line"></h2> */}
        </h1>
       
            </section>
            
            <section className="font-unna text-black py-12">
            <div className="flex flex-col-reverse gap-4 flex-wrap w-full px-3 md:flex-row md:items-center  md:justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-6xl font-bold font-unna">
                        Your Scent Our Responsibility
                    </h2>
                    <p className="text-2xl max-w-xl">
                    Our fragrances are more than just a splash of scent;
                    they're an extension of your personality, a whisper of your
                    story waiting to be told. our collection offers a symphony of
                    scents to suit every mood and occasion.
                   
                        </p>
                <div className="mt-6">
                <Link to="" className="w-fit px-6 py-3 bg-navpurple text-white text-2xl">see our collections</Link>       
                </div>
                    </div>
                    <img src={ aboutImage1} alt="first image" className="md:full"/>
                </div>

            </section>

            <section>
            <Collections />
            </section>

        </div>
    )
}

export default About