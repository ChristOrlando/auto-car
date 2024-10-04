import localFont from "next/font/local";


export const poppins = localFont({
    src: [
        {
            path: "../app/fonts/Poppins-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/Poppins-Medium.otf",
            weight: "500",
            style: "medium",
        },
        {
            path: "../app/fonts/Poppins-SemiBold.otf",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../app/fonts/Poppins-Bold.otf",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-poppins",
});

export const clashSans = localFont({
    src: [
        {
            path: "../app/fonts/ClashDisplay-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/ClashDisplay-Medium.otf",
            weight: "500",
            style: "medium",
        },
        {
            path: "../app/fonts/ClashDisplay-Semibold.otf",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../app/fonts/ClashDisplay-Bold.otf",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-clash-sans",
});

export const dmSans = localFont({
    src: [
        {
            path: "../app/fonts/DMSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/DMSans-Medium.ttf",
            weight: "500",
            style: "medium",
        },
        {
            path: "../app/fonts/DMSans-SemiBold.ttf",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../app/fonts/DMSans-Bold.ttf",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-dm-sans",
});

