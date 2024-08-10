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
                <div className="flex justify-center h-[90vh]">
                    <div className="flex justify-center h-[158vw] w-[88vw] max-w-[900px] absolute bg-gradient-to-b 
                        from-stone-700 to-amber-950 mt-8 lg:rounded-[150px] md:rounded-[150px] 
                        sm:rounded-[100px] xs:rounded-[80px] "
                        style={{ boxShadow: '1px 14px 12px rgba(0, 0, 0, 0.4' }}>
                        <img aria-hidden="true" src="/assets/flavorforge.png" className="mt-48 absolute z-10 w-[78vw]" />
                        <img aria-hidden="true" src="/assets/flavorforge-foreground.png" className="mt-[199px] absolute 
                            z-50 w-[78vw]" />
                        
                        
                        <div
                        ref={containerRef}
                        className="flex justify-center relative z-40 h-[40vw] w-[62vw] mt-[495px] 
                            overflow-hidden bg-green-500"
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
                                    className="absolute object-cover z-40 mt-20 w-[32vw]"
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