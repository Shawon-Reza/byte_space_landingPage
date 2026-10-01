import SignupForm from "./component/SignupForm"
import SignupPromo from "./component/SignupPromo"
import logo from "../../assets/icons/Vector.png"
import { useNavigate } from "react-router"


const SignUpPage = () => {
    const navigate = useNavigate()
    return (
        <main className="relative isolate min-h-dvh w-full overflow-x-hidden bg-[#003BE2] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">

            {/* ----------- bg ----------- */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
            />

            <div className="py-4 sm:py-6 lg:py-8">
                <img
                    src={logo}
                    alt="ByteSpace"
                    className="h-8 w-auto sm:h-9 cursor-pointer"
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </div>

            <div className="flex w-full flex-col gap-6 pb-6 sm:gap-8 sm:pb-10 lg:min-h-[calc(100dvh-112px)] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pb-8 xl:gap-14">
                <SignupPromo className="relative z-10 w-full lg:w-[50%] hidden lg:flex" />
                <SignupForm className="relative z-10 mx-auto w-full max-w-[500px] lg:mx-0 lg:w-[44%] lg:max-w-[560px] mt-15 lg:mt-0" />
            </div>
        </main>
    )
}

export default SignUpPage
