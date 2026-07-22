import React from "react";
import Button from "./Button";

function UploadContainer({
    title,
    description,

    buttonLabel,
    mobileButtonLabel,
    desktopButtonLabel,

    buttonVariant = "outline",
    buttonSize = "md",
    buttonWidth = "auto",
    buttonClassName = "",

    onButtonClick,
    className = "",
}) {
    return (
        <div
            className={`
                flex flex-col
                lg:flex-row
                lg:justify-between
                lg:items-center
                gap-x-10
                p-4
                border-2
                border-gray-300
                rounded-lg
                ${className}
            `}
        >
            <div className="flex flex-col gap-y-3">
                <h1 className="font-bold text-2xl lg:text-xl text-black">
                    {title}
                </h1>

                <p className="text-lg">
                    {description}
                </p>
            </div>

            <div>
                <Button
                    variant={buttonVariant}
                    size={buttonSize}
                    width={buttonWidth}
                    className={`mt-5 lg:mt-0 whitespace-nowrap ${buttonClassName}`}
                    onClick={onButtonClick}
                >
                    {mobileButtonLabel || desktopButtonLabel ? (
                        <>
                            <span className="lg:hidden">
                                {mobileButtonLabel}
                            </span>

                            <span className="hidden lg:inline">
                                {desktopButtonLabel}
                            </span>
                        </>
                    ) : (
                        buttonLabel
                    )}
                </Button>
            </div>
        </div>
    );
}

export default UploadContainer;