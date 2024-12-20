import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "Raleway, sans-serif",
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                pink: colors.pink,
            },
        },
    },
    plugins: [],
} satisfies Config;
