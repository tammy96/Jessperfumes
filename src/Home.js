import { Link } from "react-router-dom";
import homeImage2 from "./Jess Images/homimage2.jpeg"
import homeimage3 from "./Jess Images/homeimage3.jpeg"
import homeimage4 from "./Jess Images/homeimage4.jpeg"
import homeImage1 from "./Jess Images/homeimage1.jpeg"
import homeImage5 from "./Jess Images/homeimage5.jpeg"
import CEO from "./Jess Images/lance-reis--EKIQx3h8Eg-unsplash.jpg"
import facebooklogo from "./Jess Images/facebooklogo.png"
import instagramlogo from "./Jess Images/instagramlogo.png"
import twitterlogo from "./Jess Images/twitterlogo.png"
const Home = () => {
    return (
      <div>
        <section style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url('https://images.unsplash.com/photo-1543857261-f71238eb4188?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover', // Adjust the background properties to fit your layout
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
                height: '100vh', // Set the height of your section
        }}>
        <div className="pt-44 mx-auto text-center  md:max-w-3xl md:text-left font-serif
         max-w-lg md:mx-24 space-y-8">
        <h1 className=" text-white text-4xl md:text-6xl">
        Discover Your Signature Scent with Jess Perfumes & Fragrances</h1>  

        <p className="text-white text-lg">
        Discover unique scents that reflect your charisma. Find elegance
        in our curated collection, a symphony of luxury and passion, embracing boundless
        possibilities at Jess Perfumes.
        </p> 
        <div>
        <Link to="" className="w-fit px-6 py-3 bg-navpurple text-white text-2xl">Discover More</Link>       
        </div>
        </div>
            </section>
            
            <section className="">
                
                <div className="flex flex-col mx-6 my-24 md:flex-row justify-between gap-4 lg:mx-24">
                <img src={homeImage1} alt="about us" className="w-full md:w-1/3"/>
                    <div className="max-w-prose md:max-w-3xl w-full font-serif text-black space-y-8">
                        <h1 className="text-3xl md:text-6xl">Our Fragrance Journey at Jess Perfume & Fragrance</h1>
                        <p className="text-md mt-6">
                            At Jess Perfume & Fragrance, our passion lies in crafting scents
                            that transcend time, redefining elegance with a deep appreciation
                            for the art of perfumery. Each fragrance is a symphony of high-quality
                            ingredients and skilled artisanship, evoking emotions and memories.
                            Committed to excellence, we source global essences, ensuring sophistication
                            and a unique character in every creation. Our diverse collection celebrates
                            individuality, offering timeless classics and contemporary blends. Join us on
                            this olfactory expedition, where scents transform into cherished memories,
                            enhancing your presence and reflecting your unique lifestyle. Experience the
                            essence of elegance woven into every fragrance at Jess Perfume & Fragrance."
                        </p>
                        <div className="mt-6 flex flex-col items-center md:items-start md:px-6 py-3 w-full md:w-fit bg-navpurple text-white text-xl">
                            Discover More
                        {/* </p> */}
                        </div>
                   </div>
                   
                </div>
            </section>

            <section className="w-full px-2 md:px-1">
                <div className="flex flex-col md:flex-row justify-center gap-12">
                <div className="w-full md:w-96 space-y-3">
                        <img src={homeImage2} alt="image gallery first" className="w-full md:h-96" />
                        <h1 className="px-2">Jess Varieties</h1>
                        <p className="px-2">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <div className="px-2">
                        <Link to="" className="w-fit px-6 py-2 border-2 border-solid border-navpurple text-navpurple text-xl">Discover More</Link>  
                        </div>
                </div>
                <div className="w-full md:w-96 space-y-3">
                        <img src={homeimage3} alt="image gallery first" className="w-full md:h-96" />
                        <h1 className="px-2">Jess Varieties</h1>
                        <p className="px-2">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <div className="px-2">
                        <Link to="" className="w-fit px-6 py-2 border-2 border-solid border-navpurple text-navpurple text-xl">Discover More</Link>  
                        </div>
                </div>
                <div className="w-full md:w-96 space-y-3">
                        <img src={homeimage4} alt="image gallery first" className="w-full md:h-96" />
                        <h1 className="px-2">Jess Varieties</h1>
                        <p className="px-2">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <div className="px-2">
                        <Link to="" className="w-fit px-6 py-2 border-2 border-solid border-navpurple text-navpurple text-xl">Discover More</Link>  
                        </div>
                </div>
                </div>
            </section>

            <section className="bg-lightpink w-full mt-12 font-serif py-24">
                <div className="flex flex-col mx-3  lg:flex-row lg:justify-around lg:items-center">
                    <div className="space-y-6">
                        <h1 className="font-serif text-navgold text-4xl  max-w-3xl">
                        Perfume Stays Sharp 'Til The Bottom Of The Glass.
                        </h1>
                        <p  className="text-md text-xl mt-6 md:max-w-3xl text-navpurple">
                            Maximus sagittis nec tristique dui donec tortor posuere.
                            Laoreet sapien natoque augue proin tristique nunc. Per nam nisi
                            id eleifend tellus. Curabitur molestie non netus tempor fermentum.
                            Himenaeos maximus amet litora vulputate. Sit a magnis letius parturient eget.
                            Sed euismod diam accumsan blandit fames. Curae volutpat luctus massa tempus taciti.
                            Finibus cursus interdum pharetra sodales ut fusce accumsan. Venenatis ipsum gravida
                            hendrerit. Tincidunt tempor nibh nec eget felis ridiculus conubia. Mi fusce taciti
                            pellentesque vehicula. Rhoncus vehicula laoreet taciti auctor non quis.
                        </p>

                        <div className="flex flex-col-reverse gap-3 md:flex-row max-w-3xl justify-between">
                            <div className="max-w-lg spacr-y-6">
                                <h1 className="text-navgold text-4xl">Masterpiece Perfume.</h1>
                                <p className="text-xl text-navpurple">
                                    Montes auctor tincidunt nullam<br/> pharetra consectetur lectus.
                                    Sociosqu est felis laoreet vivamus nulla et sed dictumst quis elit ad.
                                </p>
                                <div className="my-6 md:mt-12">
                                <Link to="" className="w-fit px-6 py-3 bg-navgold text-white text-lg">Discover More</Link>  
                                </div>
                            </div>
                            <img src={homeImage5 } alt="home image 5" className="w-full md:w-56" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center gap-y-2 mt-3">
                        <img src={CEO } alt="CEO" className="lg:w-96"  />
                        <h2 className="text-navgold text-4xl">Beleye Abel</h2>
                        <p className="text-slate-400 text-lg"><i>Founder | CEO</i></p>
                        <hr />
                        <div className="flex flex-row gap-4 justify-center">
                            <a href="https://web.facebook.com/">
                            <img src={facebooklogo } alt="facebook" className="w-6 opacity-[50%]" />
                            </a>

                            <a href="https://web.facebook.com/">
                            <img src={instagramlogo } alt="instagram" className="w-6 opacity-[50%]" />
                            </a>

                            <a href="https://web.facebook.com/">
                            <img src={twitterlogo} alt="twitter" className="w-6 opacity-[50%]" />
                            </a>
                           
                        </div>
                  </div>
                </div>
            </section>
      </div>
    );
  };
  
  export default Home;
  