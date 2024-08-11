'use client'

import { ChevronDown, ChevronRight } from "lucide-react";
import { getFavorites, getRecents } from "./data/CustomerData"
import TileButton from "./TileButton"
import React from "react";


const Recents = ({ email }: {
    email: string;
}) => {
    const recents = email? getRecents(email) : []
    const delays = recents.map((_, index) => index * 300)

    const [isExpanded, toggleExpandible] = React.useState(false)
    const openExpandible = () => { toggleExpandible(!isExpanded) }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center py-4 -mt-4">
                <h1 className="text-stone-800 font-extrabold text-4xl ml-8">
                    Recents
                </h1>
                { isExpanded ?
                    <ChevronDown className="text-color-800 h-8 w-8 ml-auto mr-8" /> :
                    <ChevronRight className="text-color-800 h-8 w-8 ml-auto mr-8" /> }
                <input type="checkbox" className="absolute h-10 w-10 right-28 opacity-0 cursor-pointer"
                    checked={isExpanded}
                    onChange={openExpandible}
                    
                    />
            </div>
 
            <div className={`grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-2 gap-4 mx-4
                ${isExpanded ? '' : 'hidden'}`}>
                {recents.map((itemID, index) => (
                    <TileButton id={itemID} animDelay={delays[index]} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Recents