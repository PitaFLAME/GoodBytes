import { Check } from "lucide-react"
import { primarybgAccent, primaryTextAccent } from "@/components/Global"


const LandingExposition = () => {
    return (
        <>
        <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight
                   text-gray-900 text-5xl md:text-6xl lg:text-7xl">
            Your <span className={`px-2 text-white ${primarybgAccent}`}>Cravings</span> printed in moments
        </h1>
        <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  Capture your cravings with GoodBytes
        </p>

      <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
        <div className="space-y-2">
            <li className="flex gap-1.5 items-center text-left">
                <Check className={`h-5 w-5 shrink-0 ${primaryTextAccent}`} />
                High-quality meals prepared by chefs
            </li>
            <li className="flex gap-1.5 items-center text-left">                      
                <Check className={`h-5 w-5 shrink-0 ${primaryTextAccent}`} />
              Delivered within seconds
            </li>
            <li className="flex gap-1.5 items-center text-left">
                <Check className={`h-5 w-5 shrink-0 ${primaryTextAccent}`} />
                Guraranteed to satisfy your cravings
            </li>
        </div>
      </ul>
      </>
    )
}

export default LandingExposition