import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router'

export default function Navbar() {
    const navigate = useNavigate()
    const [showSideBar, setShowSideBar] = useState<boolean>(false)
    const pages = [
        { path: "/", text: "Home", },
        { path: "/about", text: "About", },
        { path: "/products", text: "Products", },
    ]

    return (
        <>
            <div onClick={() => setShowSideBar(false)} className={`fixed h-svh w-svw z-40 transition-all duration-1000 ${showSideBar ? "bg-[rgba(0,0,0,0.4)]" : "bg-transparent pointer-events-none"}`}></div>
            <div className={`h-svh w-72 bg-white fixed z-50 transition-all duration-500 ${showSideBar ? "right-0" : "-right-72"}`}>
                <div className='flex justify-end'>
                    <XMarkIcon onClick={() => setShowSideBar(false)} className={`transition-all h-[36px] m-5 hover:scale-110 active:scale-95`} />
                </div>
                <div className='flex flex-col gap-5 mx-7'>
                    {
                        pages.map((data, index) => {
                            return (
                                <div key={index} onClick={() => navigate(data.path)} className={`cursor-default relative inline-block transition-all active:scale-95 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1b3434] after:transition-all after:duration-300 hover:after:w-full`}>
                                    {data.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`z-10 w-screen flex justify-center fixed text-[#1b3434] shadow-lg bg-white`}>
                <div className={`px-5 sm:px-20 h-16 w-[1280px] flex justify-between items-center`}>
                    <div onClick={() => navigate("/")} className="cursor-default flex gap-2 hover:gap-1 transition-all duration-300">
                        <div className="h-6 w-6 bg-[#1b3434] rounded-full">
                        </div>
                        <div className="h-6 w-6 bg-[#0ead88] rounded-full">
                        </div>
                        <div className='text-[#0ead88] text-xl'>
                            Faqe Store
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-9 h-full items-center">
                        {
                            pages.map((data, index) => {
                                return (
                                    <div key={index} onClick={() => navigate(data.path)} className={`cursor-default relative transition-all active:scale-95 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#1b3434] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full`}>
                                        {data.text}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='lg:hidden flex justify-end'>
                        <Bars3Icon onClick={() => setShowSideBar(true)} className={`transition-all h-[36px] m-5 hover:scale-110 active:scale-95`} />
                    </div>
                </div>
            </div>
        </>
    )
}