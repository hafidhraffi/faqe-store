import { useNavigate } from "react-router"
import Button from "../components/Button"

function UnderDevPage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className="w-full h-screen flex flex-col gap-3 text-[#1b3434] text-xl items-center justify-center tracking-wide">
                        <p className="text-[#0ead88] text-3xl">Sorry!</p>
                        <p className="max-sm:text-sm max-md:text-base max-lg:text-lg text-xl text-center">This page is under development ⚙️.</p>
                        <img src="/src/assets/development.jpg" className="w-[500px]" />
                        <Button
                            label={"Back"}
                            onClick={() => navigate(-1)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnderDevPage