import { useRef } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { advantageData, testimonialData } from "../services/homePageData";
import { useNavigate } from "react-router";
import Button from "../components/Button";

function HomePage() {
    const navigate = useNavigate()
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    };


    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className="flex max-lg:flex-col max-md:mt-16 max-lg:my-20 max-lg:mb-32 my-40 justify-between items-center lg:gap-20">
                        <div><img src="/src/assets/hero_pic.jpg" className="max-w-[450px] max-sm:max-w-[250px] max-md:max-w-[300px]" /></div>
                        <div className="gap-3 flex flex-col">
                            <div>
                                <div className="max-sm:text-2xl max-md:text-3xl max-lg:text-4xl text-5xl text-[#1b3434]">Your Everyday Style</div>
                                <div className="max-sm:text-2xl max-md:text-3xl max-lg:text-4xl text-5xl text-[#1b3434]">Starts at <span className="max-sm:text-4xl max-md:text-5xl max-lg:text-6xl text-7xl text-[#0ead88] whitespace-nowrap">Faqe Store</span></div>
                            </div>
                            <Button
                                label={"View products ❤️"}
                                onClick={() => navigate("/products")}
                            />
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="max-md:h-[100px] h-[160px] flex justify-center">
                            <img src="/src/assets/shirt.png" className="max-md:h-[50px] h-[80px] rotate-12" />
                        </div>
                        <div className="max-md:h-[100px] h-[160px] flex justify-center items-end">
                            <img src="/src/assets/coat.png" className="max-md:h-[50px] h-[80px] rotate-45" />
                        </div>
                        <div className="max-md:h-[100px] h-[160px] flex justify-center">
                            <img src="/src/assets/jeans.png" className="max-md:h-[50px] h-[80px] rotate-90" />
                        </div>
                        <div className="max-md:h-[100px] h-[160px] flex justify-center items-end">
                            <img src="/src/assets/backpack.png" className="max-md:h-[50px] h-[80px] -rotate-12" />
                        </div>
                        <div className="max-md:h-[100px] h-[160px] flex justify-center">
                            <img src="/src/assets/ring.png" className="max-md:h-[50px] h-[80px] -rotate-90" />
                        </div>
                        <div className="max-md:h-[100px] h-[160px] flex justify-center items-end">
                            <img src="/src/assets/laptop.png" className="max-md:h-[50px] h-[80px]" />
                        </div>
                    </div>
                    <p className="max-sm:text-sm max-md:text-base max-lg:text-lg text-xl text-[#1b3434] text-justify max-md:mt-10 mt-20 max-sm:leading-7 max-md:leading-8 max-lg:leading-9 leading-10 tracking-wide">
                        Faqe Store is your one-stop online destination for everything you need, from the latest fashion trends and must-have gadgets to everyday essentials and unique finds. Designed for modern shoppers who value convenience, quality, and affordability, Faqe Store offers a seamless shopping experience with a curated selection of trusted brands and products.
                    </p>
                    <div className="flex flex-col items-center w-full bg-[#0ead88] rounded-[15px] text-white gap-10 max-md:px-5 px-10 max-sm:my-20 max-md:my-32 my-40">
                        <p className="max-sm:text-lg max-md:text-xl max-lg:text-2xl text-3xl mt-10">Why shop at Faqe Store?</p>
                        <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-y-10 gap-x-5 mb-10 max-md:text-sm max-lg:text-base text-xl w-full">
                            {
                                advantageData.map((data, index) => {
                                    return (
                                        <div key={index} className="flex items-center gap-5">
                                            <div className="bg-white max-md:h-[50px] max-md:w-[50px] h-[70px] w-[70px] flex items-center justify-center rounded-full shrink-0 max-md:p-3 p-5">
                                                <img src={data.img_path} />
                                            </div>
                                            <p className="w-[400px]">{data.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="text-[#1b3434] relative flex flex-col items-center max-md:mb-20 mb-32 pb-[300px]">
                        <p className="max-sm:text-lg max-md:text-xl max-lg:text-2xl text-3xl">Testimonial</p>
                        <p className="max-md:text-sm max-lg:text-base text-xl mt-5">Let's take a look at what they say about us 💬❤️</p>
                        <div className="w-full flex items-center absolute bottom-0 max-md:text-sm text-base">
                            <div onClick={scrollLeft} className="hover:scale-110 active:scale-95 transition-all bg-[#0ead88] h-[40px] w-[40px] mb-[50px] rounded-full shrink-0 flex items-center justify-center"><ChevronLeftIcon className="h-5 text-white" /></div>
                            <div ref={scrollRef} className="flex px-[20px] pb-[50px] overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                                {
                                    testimonialData.map((data, index) => {
                                        return (
                                            <div key={index} className="bg-white w-[350px] h-[200px] shrink-0 mr-10 border-2 border-[#0ead88] shadow-gray-500 shadow-xl rounded-[15px] flex flex-col items-center justify-between px-10 py-5">
                                                <img src="/src/assets/quote.png" className="h-5" />
                                                <p className="leading-5 tracking-wide">{data.text}</p>
                                                <p>{data.author}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div onClick={scrollRight} className="hover:scale-110 active:scale-95 transition-all right-0 bg-[#0ead88] h-[40px] w-[40px] mb-[50px] rounded-full flex shrink-0 items-center justify-center"><ChevronRightIcon className="h-5 text-white" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage