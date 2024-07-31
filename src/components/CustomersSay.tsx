import { Star } from "lucide-react"
import { primaryFillAccent, primaryTextAccent } from "./Global"


const CustomersSay = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 ">
                <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight 
                            font-bold text-5xl md:text-6xl text-gray-900">What our <span className="relative px-2">customers</span> say</h2>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
                <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                    <div className="flex gap-0.5 mb-2">
                        <Star className={`h-5 w-5 ${primaryTextAccent} ${primaryFillAccent}`} />
                        <Star className={`h-5 w-5 ${primaryTextAccent} ${primaryFillAccent}`} />
                        <Star className={`h-5 w-5 ${primaryTextAccent} ${primaryFillAccent}`} />
                        <Star className={`h-5 w-5 ${primaryTextAccent} ${primaryFillAccent}`} />
                        <Star className={`h-5 w-5 ${primaryTextAccent} ${primaryFillAccent}`} />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomersSay