import React from "react";

function WaiverCard({
    state = "pending", // pending | required | accepted
    image,
    onClick,
    className = "",
}) {
    const isPending = state === "pending";
    const isRequired = state === "required";
    const isAccepted = state === "accepted";

    const borderColor = isAccepted
        ? "border-green-500"
        : isRequired
        ? "border-red-500"
        : "border-gray-400";

    return (
        <>
            <div
                className={`
                    flex-1
                    grid grid-cols-7
                    border-2
                    rounded-lg
                    ${borderColor}
                    ${className}
                `}
            >
                <div className="col-span-3 flex items-center justify-center">
                    <div className="h-full p-4">
                        <img
                            src={image}
                            alt="Waiver Document"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="col-span-4 flex flex-col items-center justify-center gap-y-5" onClick={onClick}>
                    {isAccepted ? (
                        <>
                            <i className="bi bi-check-circle-fill text-2xl text-green-500"></i>

                            <p className="lg:text-xl text-center text-green-500">
                                Waiver accepted
                            </p>

                            <p className="underline text-black text-lg">
                                Click to view
                            </p>
                        </>
                    ) : (
                        <>
                            <i className="bi bi-pencil text-2xl lg:text-3xl"></i>

                            <p className="lg:text-xl text-center">
                                Click to review & accept
                            </p>
                        </>
                    )}
                </div>
            </div>

            {isPending && (
                <div className="mt-3 text-sm text-gray-600 invisible hidden lg:block">
                    <p>
                        Supported formats PDF, .JPEG, and .PNG, up to 5MB
                    </p>
                </div>
            )}

            {isRequired && (
                <div className="mt-3 text-sm text-red-500">
                    <p>
                        To proceed with your best test drive, acceptance of the
                        waiver is required
                    </p>
                </div>
            )}

            {isAccepted && (
                <div className="mt-3 text-sm text-red-500 invisible hidden lg:block">
                    <p>
                        To proceed with your best test drive, acceptance of the
                        waiver is required
                    </p>
                </div>
            )}
        </>
    );
}

export default WaiverCard;