import React from "react"

function BlockTemplate(props) {
    return (    
        <div className="flex grid col-span-12 my-8 mt-4 sm:mx-6 md:mx-8 sm:flex sm:items-center md:col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="flex-1 p-4 prose text-white lg:p-6 md:text-xl sm:text-lg">
            {props.children}
            </div>
            <img
            className={`flex-1 p-4 sm:h-auto sm:w-1/3 lg:w-1/2 ${props.block.alignLeft ? " sm:order-first" : ""}`}
            src={props.block.img}
            alt={props.block.img_alt}
            />
        </div>
    )
}
export default BlockTemplate