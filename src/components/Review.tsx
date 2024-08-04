import { Star } from "lucide-react"
import { getReview } from "./CustomerReviews"
import { primaryFillAccent, primaryTextAccent } from "./Global"
import './css/hidescrollbar.css'


interface ReviewProps {
    num: number;
}

export const Review = ({ num }: ReviewProps) => {
    const review = getReview(num)
    const stars = Array.from({ length: review.stars }, (_, i) => <Star key={i} className={`h-3 w-4 ${primaryTextAccent} ${primaryFillAccent}`} />)

    return (
        <>
            <div className="flex flex-auto flex-col lg:pr-8 xl:pr-16 bg-zinc-50 border border-amber-300
                    rounded-lg max-h-96 relative">

                <div className="bg-gradient-to-b from-transparent to-zinc-50 absolute bottom-0 w-full h-10 rounded-b-lg z-20" />
            

                <div className="flex flex-row bg-amber-100 rounded-full p-2 border border-amber-400
                        mt-4 ml-4">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 mr-5"
                        src={review.photo}
                        alt="user-image"/>
                        
                    <div className="flex flex-col">
                        <h3 className="">{review.name}</h3>
                        <div className="flex gap-0.5 mb-2">
                            {stars}
                        </div>
                    </div>
                </div>


                <div className=" py-8 px-5  overflow-y-auto scrollbar-hide">
                    
                    <div className="text-lg leading-snug -mt-4">
                        <p className="indent-4 text-base text-amber-950">{review.review}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review