import React from "react";
import Image from 'next/image'
import CardProps from "@/types/card-props";

export const Card = ({ body, imgSrc, imgAlt }: CardProps) => {
    return <>
        <div className="flex flex-col w-full p-4 space-y-4 my-4 bg-white bg-opacity-20 rounded-3xl relative md:h-80 md:flex-row md:even:flex-row-reverse md:space-x-16 md:even:space-x-reverse md:space-y-0">
            <div className="flex flex-col text-justify justify-between w-full space-y-4 md:w-1/2 md:space-y-0">
                {body}
            </div>
            <div className="w-full h-40 md:w-1/2 md:h-full relative rounded-3xl overflow-hidden">
                <Image
                    fill
                    objectFit="fill"
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
        </div>
    </>

}