import LandingExposition from "@/components/LandingExposition";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Ratings from "@/components/Ratings";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0
         xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/assets/logo.png" className="w-full" alt="logo" />
              </div>
              
              <LandingExposition />
              <Ratings />

            </div>
          </div>
        </MaxWidthWrapper> 
      </section>
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 ">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight 
                            font-bold text-5xl md:text-6xl text-gray-900">What our <span className="relative px-2">customers</span> say</h2>
          </div>
        </MaxWidthWrapper>
      </section>


    </div>
  );
}
