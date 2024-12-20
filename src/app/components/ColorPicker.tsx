import React from "react";
import defaultColors from "../data/defaultColors";

interface ColorPickerProps {
    label: string;
    color: string;
    onColorChange: (hexcode: string, className: string) => void;
}

export default function ColorPicker({
    label,
    color,
    onColorChange,
}: ColorPickerProps) {
    function handleColorChange(hexcode: string, className: string) {
        onColorChange(hexcode, className);
    }

    function handleCustomColorChange(hexcode: string) {
        onColorChange(hexcode, `${label.toLowerCase()}-[${hexcode}]`);
    }

    function constructClassName(colorName: string, colorCode: string) {
        return `${label.toLowerCase()}-${colorName.toLowerCase()}-${colorCode}`;
    }

    return (
        <div className="bg-white p-5 rounded-xl">
            <h2 className="text-xl mb-4">Select colors</h2>

            <fieldset className="flex flex-col gap-y-2 mb-6">
                <label htmlFor={label}>
                    Select custom color, or choose from Tailwind&apos;s default
                    colors
                </label>
                <input
                    type="text"
                    name={label}
                    id={label}
                    value={color}
                    className="p-3 rounded-xl bg-gray-200 max-w-52"
                    onChange={(e) => handleCustomColorChange(e.target.value)}
                />
            </fieldset>

            <div>
                <div className="flex flex-col gap-y-4 mt-8 overflow-y-scroll max-h-[32rem]">
                    {defaultColors.map((colorObj, i) => (
                        <div
                            key={i}
                            className="flex flex-wrap items-center gap-2"
                        >
                            <div className="w-full">{colorObj.name}</div>
                            {Object.keys(colorObj.colors).map(
                                (colorCode, i) => {
                                    const hex = colorObj.colors[colorCode as keyof typeof colorObj.colors];
                                    const className = constructClassName(
                                        colorObj.name,
                                        colorCode
                                    );

                                    return (
                                        <button
                                            key={i}
                                            onClick={() =>
                                                handleColorChange(
                                                    hex,
                                                    className
                                                )
                                            }
                                            className={`w-12 h-12 rounded-xl font-semibold text-sm ${
                                                Number.parseInt(colorCode) > 400
                                                    ? "text-white"
                                                    : "text-black"
                                            }`}
                                            style={{
                                                backgroundColor: hex,
                                            }}
                                        >
                                            {colorCode}
                                        </button>
                                    );
                                }
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
