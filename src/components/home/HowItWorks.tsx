import { ArrowRight } from "lucide-react"
import { primaryTextAccent } from "../Global"
import { Icons } from "../Icons"
import { buttonVariants } from "../ui/button"
import Link from "next/link"

const HowItWorks = () => {
    return (
        <>
            <h2 className="order-1 mt-5 tracking-tight text-center !leading-tight
                        font-bold text-5xl md:text-6xl text-white">How it works</h2>
            <div className="w-full order-2 -mb-20">
                <Icons.underline className={` pointer-events-none left-1/2 relative lg:scale-110 md:scale-110 sm:scale-105
                    transform -translate-x-1/2 w-full xl:bottom-24 lg:bottom-24 md:bottom-20
                    sm:bottom-16 bottom-12 ${primaryTextAccent}`} />
            </div>
            <img src="/assets/food-3d-printing-3d-printed-food.png" className="order-3 border-4 border-slate-700
                w-[95vw] mt-8 sm:mt-0" />
            <div className="order-4 h-px w-4/5 mt-10 sm:mt-16 bg-slate-500"></div>
            <div className="order-5">
            <p className="text-white text-center md:text-left mt-5 mb-5 md:text-xl text-lg">
                At <span className="font-semibold text-stone-300">Good<span className={`${primaryTextAccent}`}>Bytes</span></span>, 
                we transform your meal planning into a delightful adventure. Begin by exploring our diverse
                selection of meal types, ranging from hearty breakfasts and sumptuous lunches to decadent dinners and
                delectable desserts. Our intuitive interface allows you to seamlessly navigate through various categories,
                ensuring you find the perfect base for your culinary creation.
            </p>
            <p className="text-white text-center md:text-left mb-5 md:text-xl text-lg">
                Once you&apos;ve selected your desired meal type, it&apos;s time to get creative! Customize every aspect of your dish
                to suit your taste. Choose from an extensive array of fresh ingredients, adjust portion sizes, and experiment
                with different cooking techniques. Whether you prefer your steak medium-rare or your vegetables steamed to
                perfection, <span className="font-semibold text-stone-300">Good<span className={`${primaryTextAccent}`}>Bytes </span></span>
                empowers you to craft a meal that matches your exact specifications.
            </p>
            <p className="text-white text-center md:text-left mb-5 md:text-xl text-lg">
                Satisfied with your masterpiece? Simply click the &apos;Print&apos; button, and watch as your customized meal is sent
                to your <span className="text-stone-300 underline">
                <a href="/api/compatibility">FlavorForge</a></span> 3D printer. 
                <span className="font-semibold text-stone-300">Good<span className={`${primaryTextAccent}`}>Bytes </span></span>
                effortlessly communicates your precise instructions to the printer,
                ensuring that every detail is flawlessly executed. In no time, your kitchen will be filled with the enticing
                aromas of a meal tailored just for you.
            </p>
            <p className="text-white md:text-left text-center mb-10 md:text-xl text-lg">
                No more mundane meal prep or last-minute trips to the grocery store. With <span className="font-semibold text-stone-300">
                Good<span className={`${primaryTextAccent}`}>Bytes </span></span>and your <span className="text-stone-300 underline">
                <a href="/api/compatibility">FlavorForge</a></span>,
                gourmet dining is always at your fingertips. Relish the convenience of having your favorite dishes made
                to order, perfectly personalized, and ready whenever you are. Welcome to a new era of culinary delight,
                where your imagination is the only limit!
            </p>
            </div>

            <div className="order-6 w-full flex items-center justify-center flex-col">
            
                <Link href="/api/auth/register" className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1 bg-zinc-300 hover:bg-slate-400 text-slate-900 text-xl font-bold p-2 -mb-5 mt-5 p-6"
                    })}>
                    Get Started
                    <ArrowRight className="ml-1.5 h-8 w-8" />
                </Link>
                
                <div className="h-px w-1/2 mt-16 mb-10 bg-slate-500"></div>
            </div>
            
        </>
    )
}

export default HowItWorks