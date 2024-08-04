'use client'

import { useRef, useState, useEffect } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import MaxWidthWrapper from "./MaxWidthWrapper"

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
                <div className="flex justify-center h-lvh">
                    <div className="h-[70rem] w-[50rem] absolute bg-gradient-to-b 
                        from-stone-700 to-amber-950 mt-8 rounded-[150px]"
                        style={{ boxShadow: '1px 14px 12px rgba(0, 0, 0, 0.4' }}></div>
                    <img aria-hidden="true" src="/assets/flavorforge.png" className="mt-48 absolute z-10" />
                    <img aria-hidden="true" src="/assets/flavorforge-foreground.png" className="mt-[199px] absolute z-50" />
                    
                     
                    <div
                    ref={containerRef}
                    className="relative z-40 h-[240px] w-[560px] mt-[495px] overflow-hidden"
                    >
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
                                className="absolute object-cover z-40 h-40 w-56 mt-20 ml-40"
                            />
                        </AnimatePresence>
                    </div>
                    
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default PrinterImages