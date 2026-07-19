import React from "react";

function Modal({
    open,
    onClose,
    children,
    footer,
    showCloseButton = true,
    position = "bottom",
    modalClassName = "",
    bodyClassName = "p-5 lg:p-7",
    scrollContent = false,
}) {
    if (!open) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex justify-center bg-black/50 ${
                position === "center"
                    ? "items-center"
                    : "items-end lg:items-center"
            }`}
        >

            <div
                className={`
                    w-full lg:max-w-2xl
                    bg-white
                    rounded-t-lg lg:rounded-lg
                    flex flex-col
                    max-h-[90vh]
                    ${modalClassName}
                `}
            >

                {showCloseButton && (
                    <div className="flex justify-between items-center p-5 pb-0 lg:pb-5">
                        <button
                            onClick={onClose}
                            className="text-xl ml-auto"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                )}


                <div
                    className={
                        scrollContent
                            ? "flex-1 overflow-y-auto"
                            : ""
                    }
                >
                    <div className={bodyClassName}>
                        {children}
                    </div>
                </div>


                {footer && (
                    <div>
                        {footer}
                    </div>
                )}

            </div>

        </div>
    );
}

export default Modal;