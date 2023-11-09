import aboutImage3 from "../Jess Images/about image3.jpeg"
import aboutImage4 from "../Jess Images/about-image 4.1.jpeg" 

const Collections = () => {

    return (
        <>
            <section className="bg-secondlightpink font-unna py-12 px-6">
                <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between gap-3">
                <img src={ aboutImage4} alt="about image 4" className="md:w-[50vw]" />
                    <div>
                        <h3 className="text-lg text-navgold mb-3">
                            <i>Jess Varieties</i>
                        </h3>

                        <div className="md:max-w-2xl">
                        <h1 className="text-4xl md:text-6xl text-slate-600 mb-8">
                        Warm Sensation and Delightful
                        </h1>
                        <p className="font-serif text-xl text-navpurple max-w-lg mb-12">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut elit tellus, luctus
                            nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        </div>
                        <img src={aboutImage3 } alt="about image 3" className="md:w-[32vw]" />
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Collections