'use client'

import { ChevronRight, Heart } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { buildImagePaths, getFood } from "../data/Foods";


const TileButton = ({ id, animDelay }: {
    id: number;
    animDelay?: number;
}) => {

    const foodInfo = getFood(id);
    const imagePaths = buildImagePaths(id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [isFavorited, toggleFavorite] = React.useState(true)
    const setFavorite = () => { toggleFavorite(!isFavorited) }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
            }, 12000);

            return () => clearInterval(interval);
        }, animDelay);

        return () => clearTimeout(timeout);
    }, [animDelay, imagePaths.length]);

    

    return (
        <div className="relative">
            <Link href="">
                <div className="flex group relative w-full h-[18vh] bg-zinc-300  
                    border-2 border-zinc-200 rounded-lg overflow-hidden items-center
                    ">

                    {imagePaths.map((path, index) => (
                        <img
                            key={index}
                            src={path}
                            className={`object-cover w-full h-full absolute transition-opacity 
                                ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
                                transition-transform duration-500 ease-out transform group-hover:scale-105
                                `}
                            style={{ transition: 'opacity 1s ease-out, transform 0.3s ease-out' }}
                        />
                    ))}

                    <div className="relative w-full h-full hidden group-hover:block">

                        <div className="absolute w-full h-24 bottom-0
                            bg-gradient-to-b from-transparent to-zinc-900 opacity-60" />
                        
                        


                        <div className="flex flex-row absolute text-zinc-100 items-center justify-end
                            w-full bottom-2 z-10 gap-2">
                            <h1 className="font-medium text-3xl mb-1 hover:underline underline-offset-3">
                                {foodInfo.name}
                            </h1>
                            <ChevronRight className="h-8 w-8 mr-4" />
                        </div>
                        
                        <div className="absolute w-full h-full
                            bg-gradient-to-b from-transparent to-zinc-800 opacity-30" />

                    </div>
                    

                </div>
            </Link>

            <div className="absolute right-0 top-2 z-40">
                { isFavorited ?
                    <Heart className="h-8 w-8 text-zinc-100 fill-transparent mr-4 mt-1" /> :
                    <Heart className="h-8 w-8 text-pink-400 fill-transparent mr-4 mt-1" />
                    
                }
                <input type="checkbox" className="absolute h-8 w-8 right-4 top-1 cursor-default 
                    z-30 opacity-0"
                    checked={isFavorited}
                    onChange={setFavorite} 
                />
            </div>

        </div>
    );
}

export default TileButton;