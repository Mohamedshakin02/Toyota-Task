import React from "react";

function LocationCard({
    title,
    address,
    image,
    selected = false,
    lastVisited = false,
    hiddenMobile = false,
}) {
    return (
        <div
            className={`
                ${hiddenMobile ? "hidden lg:flex" : "flex"}
                ${selected ? "mt-8 lg:mt-0 bg-gray-300 border border-black" : "bg-gray-200"}
                relative rounded-2xl lg:rounded-lg p-2 gap-x-4
            `}
        >
            {lastVisited && (
                <div className="inline-block lg:hidden absolute bottom-[calc(100%-1px)] right-2.5 bg-black text-white px-4 py-1.5 rounded-t-xl text-sm -z-1">
                    Last Visited
                </div>
            )}

            <div className="bg-white p-3 flex-1 rounded-xl lg:rounded-lg">
                <h1 className="font-medium">{title}</h1>
                <p className="text-sm mt-2 text-gray-600">
                    {address}
                </p>
            </div>

            <div className="w-28 h-auto flex-shrink-0 border-3 lg:border-2 border-white rounded-xl lg:rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
}

export default LocationCard;