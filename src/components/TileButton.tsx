import Link from "next/link";
import React from "react";


interface TileButtonProps {
    title: string;
    image: string;
}

const TileButton: React.FC<TileButtonProps> = ({ title, image }) => {

    return (
        <>
            <Link href="">
                <div className="w-full h-[18vh] bg-zinc-300 border 
                    border-slate-950 rounded-lg">
                    <img src={image} />
                    

                </div>
            </Link>
        </>
    );
}

export default TileButton;