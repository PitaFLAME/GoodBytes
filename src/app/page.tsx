import { primaryTextAccent } from "@/components/Global";
import { Icons } from "@/components/Icons";
import LandingExposition from "@/components/home/LandingExposition";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Ratings from "@/components/home/Ratings";
import HowItWorks from "@/components/home/HowItWorks";
import CustomersSay from "@/components/home/CustomersSay";
import Image from "next/image";
import PrinterImages from "@/components/home/PrinterImages";
import LandingFooter from "@/components/home/LandingFooter";


export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0
         xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                
              </div>
              
              <LandingExposition />
              <Ratings />
              
            </div>
          </div>
        </MaxWidthWrapper> 
      </section>  {/* How it Works Section */}
      <section className="bg-slate-900">
        <MaxWidthWrapper className="flex flex-col items-center pt-16">
          
          <HowItWorks />

        </MaxWidthWrapper>
      </section> {/* Customers Say Section */}
      <section className="bg-gradient-to-b from-white to-zinc-300 py-24"> 
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          
          <CustomersSay />
          
        </MaxWidthWrapper>
      </section> {/* Animation Section */}
      <section className="bg-gradient-to-b from-zinc-300 to-zinc-500">

        <PrinterImages />
        
      </section> {/* Footer Section */}
      <section>

        <LandingFooter />

      </section>

    </div>
  );
}
