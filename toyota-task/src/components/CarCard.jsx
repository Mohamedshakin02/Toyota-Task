import React from "react";


function CarCard({
    image,
    title,
    variant = "horizontal",
    edit = false,
    children
}) {


    return (

        <div
            className={`
relative 
        rounded-lg
        mr-4 
        lg:mr-0
        pb-3
${variant === "summary"
                    ?
                    "border-2 border-dashed border-gray-400"
                    :
                    "bg-gray-200 border border-gray-400"
                }
`}
        >


            {
                edit &&
                <i className="bi bi-pencil absolute top-4 right-4 text-xl text-red-600"></i>
            }


            <div
                className={
                    variant === "horizontal"
                        ?
                        "flex lg:flex-col"
                        :
                        "flex flex-col"
                }
            >


                <div className="flex justify-center flex-1">

                    <img
                        src={image}
                        className="w-4/6 object-contain"
                    />

                </div>



                <div className="p-4 flex-1">

                    <p className="font-bold text-xl">
                        {title}
                    </p>


                    {children}


                </div>


            </div>


        </div>

    )

}

export default CarCard;