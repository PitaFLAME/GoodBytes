import MaxWidthWrapper from "./MaxWidthWrapper"


const PrinterImages = () => {
    return (
        <>
            <MaxWidthWrapper className="relative max-w-5xl">
                <div className="flex justify-center h-lvh">
                    <div className="h-[70rem] w-[50rem] absolute bg-gradient-to-b from-stone-700 to-amber-950 mt-8 rounded-[150px]"></div>
                    <img aria-hidden="true" src="/assets/flavorforge.png" className="mt-48 absolute" />
                    <img aria-hidden="true" src="/assets/flavorforge-foreground.png" className="mt-[199px] absolute z-50" />
                    
                     
                    <img aria-hidden="true" src="/assets/cheeseburger.png" className="z-40 h-40 w-52 mt-[36rem] " />
                    
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default PrinterImages