'use client'

import React from "react"
import { Button } from "../ui/button"
import { AlignJustify, X } from "lucide-react"


const Hamburger = ({className, children} : {
    className?: string;
    children?: React.ReactNode;
}) => {
    const [isHamburgerOpen, toggleHamburger] = React.useState(false)
    const openHamburger = () => { toggleHamburger(!isHamburgerOpen) }
    const childrenArray = React.Children.toArray(children).map(child => 
        React.cloneElement(child as React.ReactElement, { onClick: openHamburger }))
    const lastChild = childrenArray.pop()

    return (
        <>
            <div className="flex items-center justify-center h-10 w-11 bg-zinc-900 rounded-lg
                drop-shadow-xl shadow-xl">
                <input type="checkbox" className="absolute h-10 w-10 opacity-0" checked={isHamburgerOpen}
                    onChange={openHamburger} />
                { !isHamburgerOpen ? <AlignJustify className="h-8 w-6 text-zinc-50" /> : <X className="h-8 w-6 text-zinc-50" /> }
            </div>
            { isHamburgerOpen ? 
                <>
                    <div className="flex absolute flex-col w-[80vw] h-[100vw] right-0.5 top-14
                    shadow-zinc-950 shadow-2xl p-5
                    rounded-b-xl border-l-4 border-b-4 border-zinc-700 bg-zinc-900">
                        
                        {childrenArray}

                        <div className="flex absolute bottom-0 w-full justify-center pr-[12vw]">
                            {lastChild}
                        </div>
                    </div>
                    
                </>

                :
                null
            }


            
        </>
    );

}

export default Hamburger