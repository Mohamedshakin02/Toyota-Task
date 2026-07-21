import React from "react";

function LicenseContainer({
    children,
    status = "upload",
    preserveHeight = false,
}) {
    const messages = {
        upload: {
            text: "Supported formats PDF, .JPEG, and .PNG, up to 5MB",
            color: "text-gray-600",
        },
        verified: {
            text: "Document successfully verified",
            color: "text-green-600",
        },
        error: {
            text: "Document verification failed",
            color: "text-red-600",
        },
    };

    return (
        <>
            <div className="flex-1 flex gap-x-5">
                {children}
            </div>

            <div className={`mt-3 text-sm ${messages[status].color}`}>
                <p>{messages[status].text}</p>

                {preserveHeight && <br className="xl:hidden" />}
            </div>
        </>
    );
}

export default LicenseContainer;