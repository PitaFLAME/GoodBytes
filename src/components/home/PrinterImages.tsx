'use client'

import { useRef, useState, useEffect } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import MaxWidthWrapper from "../MaxWidthWrapper"

const DISHES = [
    "/assets/dishes/nachos.png",
    "/assets/dishes/sushi.png",
    "/assets/dishes/cheeseburger.png",
    "/assets/dishes/pasta.png",
]

const PrinterImages = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.4})
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % DISHES.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <MaxWidthWrapper className="relative max-w-5xl">
                <div className="flex justify-center
                    lg:h-[1380px]
                    md:h-[1240px]
                    sm:h-[940px]
                    h-[570px]">
                    <div className="flex justify-center w-[88vw] max-w-[900px] absolute bg-gradient-to-b 
                        from-stone-700 to-amber-950 
                        lg:rounded-[150px] lg:h-[1400px]
                        md:rounded-[100px] md:h-[1240px] md:mt-8
                        sm:rounded-[100px] sm:h-[980px]
                        rounded-[50px] h-[600px]
                        "
                        style={{ boxShadow: '1px 14px 12px rgba(0, 0, 0, 0.4' }}>
                        <img aria-hidden="true" src="/assets/flavorforge.png" 
                            className="absolute z-10
                                lg:w-[800px] 
                                md:w-[700px] md:mt-48
                                sm:w-[580px] sm:mt-28
                                w-[340px] mt-20
                                " />
                        <img aria-hidden="true" src="/assets/flavorforge-foreground.png" 
                            className="absolute  z-50
                                lg:w-[800px]
                                md:w-[700px] md:mt-48
                                sm:w-[580px]
                                w-[340px] mt-20
                                " />
                        
                        
                        <div
                        ref={containerRef}
                        className="flex justify-center relative z-40
                            min-h-20 overflow-hidden
                            lg:mt-[620px] lg:h-[280px] lg:w-[640px]
                            md:mt-[565px] md:h-[240px] md:w-[560px]
                            sm:mt-[430px] sm:h-[200px] sm:w-[480px]
                            mt-[260px] h-[160px] w-[280px]
                            ">
                            <AnimatePresence>
                                <motion.img
                                    key={currentImageIndex}
                                    src={DISHES[currentImageIndex]}
                                    initial={{ x: '-200%', y: '-8%', opacity: 0.9 }}
                                    animate={{ x: 0, y: 0, opacity: 1}}
                                    exit={{ x: '200%', y: '-8%', opacity: 0.9 }}
                                    transition={{ 
                                        type: 'spring',
                                        duration: 1.4,
                                    }}
                                    className="absolute object-cover z-40
                                        lg:w-[320px]
                                        md:w-[280px]
                                        sm:w-[220px]
                                        w-[140px]"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                    
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default PrinterImages