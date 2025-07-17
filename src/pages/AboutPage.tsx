import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function AboutPage() {

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className="max-md:my-[100px] my-[150px] flex max-lg:flex-col gap-20 justify-between text-[#1b3434] max-sm:text-sm max-md:text-base max-lg:text-lg text-xl text-justify leading-8 tracking-wide">
                        <div className="lg:max-w-[550px]">
                            <p className="max-sm:text-2xl max-md:text-3xl text-4xl mb-[20px]">About <span className="text-[#0ead88]">Faqe Store</span></p>
                            <p>
                                Faqe Store is your one-stop online destination for everything you need, from the latest fashion trends and must-have gadgets to everyday essentials and unique finds. Designed for modern shoppers who value convenience, quality, and affordability, Faqe Store offers a seamless shopping experience with a curated selection of trusted brands and products.
                            </p>
                            <p>
                                With secure checkout, fast shipping, and responsive customer support, Faqe Store makes online shopping easy, reliable, and enjoyable. Whether you're upgrading your wardrobe, shopping for gifts, or just browsing, you'll always find something worth clicking at Faqe Store.
                            </p>
                        </div>
                        <div className="flex max-md:flex-col lg:flex-col items-center">
                            <img src="/src/assets/about_pic.jpg" className="max-lg:max-w-[300px] w-[400px]" />
                            <div className="flex flex-col gap-5 min-w-[300px] bg-[#0ead88] p-5 rounded-[15px] text-white">
                                <p>Something on your mind? Ask us anything about Faqe Store, we're just a message away!</p>
                                <div className="flex justify-end">
                                    <a href="https://wa.me/6285158784211" target="_blank" className="active:scale-95 transition-all">
                                        <img src="/src/assets/wa_pic.png" className="max-sm:h-10 max-md:h-12 h-14" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage