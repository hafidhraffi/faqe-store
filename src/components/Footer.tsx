import { useNavigate } from "react-router"

function Footer() {
    const navigate = useNavigate()

    return (
        <>
            <div className="w-full pt-20 pb-10 bg-[#1b3434] text-white justify-center flex">
                <div className="px-5 sm:px-20 w-[1280px] flex flex-col gap-20">
                    <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-20">
                        <div onClick={() => navigate("/")} className="cursor-default flex gap-2 hover:gap-1 transition-all duration-300  w-min min-w-[180px] h-min">
                            <div className="h-6 w-6 bg-white rounded-full">
                            </div>
                            <div className="h-6 w-6 bg-white rounded-full">
                            </div>
                            <div className='text-xl'>
                                Faqe Store
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="mb-5">LINK</p>
                            <div onClick={() => navigate("/")} className="cursor-default hover:scale-110 active:scale-95 w-fit transition-all">Home</div>
                            <div onClick={() => navigate("/about")} className="cursor-default hover:scale-110 active:scale-95 w-fit transition-all">About</div>
                            <div onClick={() => navigate("/products")} className="cursor-default hover:scale-110 active:scale-95 w-fit transition-all">Products</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="mb-5">HELP</p>
                            <div onClick={() => navigate("/terms-and-conditions")} className="cursor-default hover:scale-110 active:scale-95 w-fit transition-all">Terms & Conditions</div>
                            <div onClick={() => navigate("/privacy-and-security")} className="cursor-default hover:scale-110 active:scale-95 w-fit transition-all">Privacy & Security</div>
                            <div onClick={() => navigate("/other-informations")} className="cursor-default hover:scale-110 active:scale-95 w-fit transition-all">Other Informations</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="mb-5">CONTACT</p>
                            <p>(+62) 888-8888-8888</p>
                            <p>faqestore@email.com</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p>Copyright &copy; 2025 Faqe Store</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer