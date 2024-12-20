import React, { useState } from "react";

export default function SnippetBox({ snippet }: { snippet: string }) {
    const [copied, setCopied] = useState<boolean>();

    function copySnippet() {
        navigator.clipboard.writeText(snippet);
        setCopied(true);

        setTimeout(() => setCopied(false), 1000);
    }

    return (
        <div className="bg-sky-950 text-white rounded-xl p-5 mt-10 flex overflow-hidden">
            <p className="grow">{snippet}</p>
            <button
                className={`bg-sky-500 hover:bg-sky-600 duration-300 py-3 px-6 -m-5 ${
                    copied === true ? "copied" : ""
                } [&.copied]:bg-white [&.copied]:text-sky-500`}
                onClick={copySnippet}
            >
                {copied === true ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m12 15 2 2 4-4" />
                        <rect
                            width="14"
                            height="14"
                            x="8"
                            y="8"
                            rx="2"
                            ry="2"
                        />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect
                            width="14"
                            height="14"
                            x="8"
                            y="8"
                            rx="2"
                            ry="2"
                        />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                )}
            </button>
        </div>
    );
}
