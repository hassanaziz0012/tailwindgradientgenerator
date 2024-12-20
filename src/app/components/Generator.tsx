"use client";
import { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import Tabs from "./Tabs";
import PreviewBox from "./PreviewBox";
import { gradientPositions, colorPositions } from "../data/constants";
import { GradientColor, Tab } from "../data/types";

export default function Generator() {
    const [from, setFrom] = useState<GradientColor>({
        hex: "#38bdf8",
        position: undefined,
        className: "from-sky-400",
    });
    const [to, setTo] = useState<GradientColor>({
        hex: "#f472b6",
        position: undefined,
        className: "to-pink-400",
    });
    const [via, setVia] = useState<GradientColor | undefined>();
    const [gradientPosition, setGradientPosition] =
        useState<string>("bg-gradient-to-t");

    const [snippet, setSnippet] = useState<string>(
        createSnippet(gradientPosition, from, undefined, to)
    );

    const tabs: Array<Tab> = [
        {
            name: "From",
            render: () => (
                <ColorPicker
                    label={"From"}
                    color={from.hex}
                    onColorChange={handleFromColorChange}
                />
            ),
        },
        {
            name: "To",
            render: () => (
                <ColorPicker
                    label={"To"}
                    color={to.hex}
                    onColorChange={handleToColorChange}
                />
            ),
        },
    ];

    function handleFromColorChange(hexcode: string, className: string) {
        setFrom({ ...from, hex: hexcode, className: className });
    }

    function handleToColorChange(hexcode: string, className: string) {
        setTo({ ...to, hex: hexcode, className: className });
    }

    function handleGradientPositionChange(position: string) {
        setGradientPosition(position);
    }

    function handleFromPositionChange(position: string | undefined) {
        setFrom({ ...from, position: position });
    }

    function handleToPositionChange(position: string | undefined) {
        setTo({ ...to, position: position });
    }

    useEffect(() => {
        setSnippet(createSnippet(gradientPosition, from, via, to));
    }, [gradientPosition, from, via, to]);

    function createSnippet(
        position: string,
        from: GradientColor,
        via: GradientColor | undefined,
        to: GradientColor
    ) {
        const s = `
            ${position} 
            ${from.className} 
            ${from.position ? `from-${from.position} ` : ""} 
            ${via !== undefined ? "via-" + via.className : ""} 
            ${to.className} 
            ${to.position ? `to-${to.position}` : ""} 
            `
            .replaceAll("\n", "")
            .replaceAll("  ", "");
        return s;
    }

    return (
        <div className="max-w-screen-2xl mx-auto p-5 ">
            <div className="grid grid-cols-2 gap-12 p-5">
                <div>
                    <Tabs tabs={tabs}></Tabs>
                </div>

                <div>
                    <div className="flex justify-between py-5 mb-6">
                        <fieldset className="flex flex-col gap-y-2">
                            <label htmlFor="direction">Direction</label>
                            <select
                                name="direction"
                                id="direction"
                                className="p-3 border-r-8 border-transparent rounded-xl bg-gray-200"
                                onChange={(e) =>
                                    handleGradientPositionChange(
                                        gradientPositions[
                                            e.target
                                                .value as keyof typeof gradientPositions
                                        ]
                                    )
                                }
                            >
                                {Object.keys(gradientPositions).map(
                                    (position, i) => (
                                        <option key={i} value={position}>
                                            {position}
                                        </option>
                                    )
                                )}
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-y-2">
                            <label htmlFor="direction">From %</label>
                            <select
                                name="direction"
                                id="direction"
                                className="p-3 border-r-8 border-transparent rounded-xl bg-gray-200"
                                onChange={(e) =>
                                    handleFromPositionChange(
                                        colorPositions[
                                            e.target
                                                .value as keyof typeof colorPositions
                                        ]
                                    )
                                }
                            >
                                {Object.keys(colorPositions).map(
                                    (position, i) => (
                                        <option key={i} value={position}>
                                            {position}
                                        </option>
                                    )
                                )}
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-y-2">
                            <label htmlFor="direction">To %</label>
                            <select
                                name="direction"
                                id="direction"
                                className="p-3 border-r-8 border-transparent rounded-xl bg-gray-200"
                                onChange={(e) =>
                                    handleToPositionChange(
                                        colorPositions[
                                            e.target
                                                .value as keyof typeof colorPositions
                                        ]
                                    )
                                }
                            >
                                {Object.keys(colorPositions).map(
                                    (position, i) => (
                                        <option key={i} value={position}>
                                            {position}
                                        </option>
                                    )
                                )}
                            </select>
                        </fieldset>
                    </div>
                    <PreviewBox
                        from={from}
                        to={to}
                        position={gradientPosition}
                        snippet={snippet}
                    />
                </div>
            </div>
        </div>
    );
}
