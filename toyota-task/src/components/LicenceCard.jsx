import React from "react";

function LicenseCard({
    state = "empty", // empty | uploading | verified
    label = "Upload front",
    image,
    fileName,
    progress = 0,
    borderColor = "",
    showRemove = false,
    showCheck = false,
    className = "",
}) {
    const isEmpty = state === "empty";
    const isUploading = state === "uploading";
    const isVerified = state === "verified";

    return (
        <div
            className={`
                flex flex-col
                w-full
                p-4
                rounded-lg
                gap-y-2
                ${isEmpty
                    ? "items-center justify-center border-2 border-dashed border-gray-400 text-gray-600"
                    : `justify-center border-2 ${borderColor}`
                }
                ${className}
            `}
        >
            {isEmpty ? (
                <>
                    <i className="bi bi-plus-lg text-2xl"></i>

                    <p>{label}</p>
                </>
            ) : (
                <>
                    <div>
                        <img
                            src={image}
                            alt={fileName}
                        />
                    </div>

                    <div
                        className={`h-2 w-full bg-gray-300 ${isVerified ? "opacity-0" : ""
                            }`}
                    >
                        <div
                            className="h-full bg-black"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-y-2">
                            <p>{fileName}</p>

                            {showRemove && (
                                <p className="underline text-black text-lg">
                                    Remove
                                </p>
                            )}
                        </div>

                        {showCheck && (
                            <i className="bi bi-check-circle-fill text-2xl text-green-500"></i>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default LicenseCard;