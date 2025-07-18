import { useNavigate } from "react-router"
import Button from "./components/Button"

function NotFound() {
    const navigate = useNavigate()

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center tracking-wide">
                        <p className="text-[#0ead88] text-3xl">This page could not be found</p>
                        <Button
                            label={"Back to home page"}
                            onClick={() => navigate('/')}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound