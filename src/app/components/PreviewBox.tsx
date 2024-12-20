import React from "react";
import SnippetBox from "./SnippetBox";
import { GradientColor } from "../data/types";

interface PreviewBoxProps {
    position: string;
    from: GradientColor;
    to: GradientColor;
    snippet: string;
}

export default function PreviewBox({
    position,
    from,
    to,
    snippet,
}: PreviewBoxProps) {
    return (
        <div className="flex flex-col">
            <div
                style={{
                    "--tw-gradient-from":
                        from.hex + " var(--tw-gradient-from-position)",
                    "--tw-gradient-to":
                        to.hex + " var(--tw-gradient-to-position)",
                    "--tw-gradient-from-position": from.position,
                    "--tw-gradient-to-position": to.position,
                }}
                className={`w-full h-full min-h-96 rounded-xl ${position} from-sky-400 to-pink-400`}
            ></div>

            <SnippetBox snippet={snippet} />
        </div>
    );
}
