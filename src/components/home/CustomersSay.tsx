import { Star } from "lucide-react"
import { primaryFillAccent, primaryTextAccent } from "../Global"
import { getReviews } from "./CustomerReviews"
import Review from "./Review"


const CustomersSay = () => {
    const reviews = getReviews(2)

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 ">
                <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight 
                            font-bold text-5xl md:text-6xl text-gray-900">What our <span className="relative px-2 text-amber-600">customers</span> say</h2>
            </div>
            {/* Desktop */}
            <div className="hidden lg:grid mx-auto  max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16 gap-x-8">
            <Review num={reviews[0]} />
            <Review num={reviews[1]} />
                        
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden overflow-x-auto w-screen px-6
                shadow-inner py-8 gap-6 scrollbar-hide
                
                ">
            <Review num={reviews[0]} />
            <Review num={reviews[1]} />
                        
            </div>
        </>
    )
}

export default CustomersSay