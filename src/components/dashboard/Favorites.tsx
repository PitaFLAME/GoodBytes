'use client'

import { ChevronDown, ChevronRight } from "lucide-react";
import { getFavorites } from "../data/CustomerData"
import TileButton from "./TileButton"
import React, { useEffect, useState } from "react";


const Favorites = ({ email }: {
    email: string;
}) => {
    const [favs, setFavs] = useState<number[]>([]);
    const delays = favs.map((_, index) => index * 300)

    const [isExpanded, toggleExpandible] = React.useState(false)
    const openExpandible = () => { toggleExpandible(!isExpanded) }

    useEffect(() => {
        const fetchFavorites = async () => {
            if (email) {
                const favorites = await getFavorites(email);
                setFavs(favorites);
            }
        };
        fetchFavorites();
    }, [email]);

    return (
        <div className="flex flex-col">
            <div className="relative flex flex-row justify-center items-center py-4 -mt-4">
                <h1 className="text-stone-800 font-extrabold text-4xl ml-8">
                    Favorites
                </h1>
                { isExpanded ?
                    <ChevronDown className="text-color-800 h-8 w-8 ml-auto mr-8" /> :
                    <ChevronRight className="text-color-800 h-8 w-8 ml-auto mr-8" /> }
                <input type="checkbox" className="absolute h-10 w-10 right-8 opacity-0 cursor-pointer"
                    checked={isExpanded}
                    onChange={openExpandible}
                    
                    />
            </div>
 
            <div className={`grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-2 gap-4 mx-4
                ${isExpanded ? '' : 'hidden'}`}>
                {favs.map((itemID, index) => (
                    <TileButton id={itemID} animDelay={delays[index]} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Favorites