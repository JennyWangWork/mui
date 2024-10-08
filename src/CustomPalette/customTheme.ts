import { createTheme, Theme } from "@mui/material/styles";
// import "@mui/material/styles/createPalette";

const customTheme: Theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: "greyContained" },
                            // style: {
                            //     textTransform: "none",
                            //     border: `2px solid red`,
                            //     backgroundColor: "#EBEBEB",
                            //     color: "#000000",
                            //     borderRadius: "8px",
                            //     "&:hover": {
                            //         backgroundColor: "#D6D6D6",
                            //         transition: "background-color 200ms ease",
                            //     },
                            //     "&:active": {
                            //         backgroundColor: "#C5C5C5",
                            //     },
                            //     "&:focus": {
                            //         outline: "2px solid #707BC2",
                            //     },
                            //     "&:disabled": {
                            //         backgroundColor: "#F5F5F5",
                            //         color: "#A9A9A9",
                            //     },
                            // },
                        },
                        {
                            props: { variant: "greyOutlined" },
                            // style: {
                            //     textTransform: "none",
                            //     border: `2px solid red`,
                            //     backgroundColor: "#EBEBEB",
                            //     color: "#000000",
                            //     borderRadius: "8px",
                            //     "&:hover": {
                            //         backgroundColor: "#D6D6D6",
                            //         transition: "background-color 200ms ease",
                            //     },
                            //     "&:active": {
                            //         backgroundColor: "#C5C5C5",
                            //     },
                            //     "&:focus": {
                            //         outline: "2px solid #707BC2",
                            //     },
                            //     "&:disabled": {
                            //         backgroundColor: "#F5F5F5",
                            //         color: "#A9A9A9",
                            //     },
                            // },
                        },
                        {
                            props: { variant: "signUpOutlined" },
                        },
                        {
                            props: { variant: "signInContained" },
                        },
                    ],
                },
            },
        },
    },
    palette: {
        grey: {
            50: "#FFFFFF",
            100: "#FBFBFB",
            200: "#F6F6F6",
            300: "#EBEBEB",
            400: "#D6D6D6",
            500: "#C5C7C9",
            600: "#9C9DA1",
            700: "#5C5D66",
            800: "#2E3133",
            900: "#000000",
        },
        violet: {
            50: "#F7F8FB",
            100: "#E6EBF7",
            200: "#D5DCF0",
            300: "#B4BEE0",
            400: "#909CD1",
            500: "#707BC2",
            600: "#535AB5",
            700: "#393D8F",
            800: "#262975",
            900: "#181A54",
        },
        yellow: {
            50: "#FCFAF4",
            100: "#FFF9C5",
            200: "#FAEEB4",
            300: "#FAE08C",
            400: "#F7CD59",
            500: "#F0BC01",
            600: "#EBA101",
            700: "#CF780E",
            800: "#AD500E",
            900: "#913C07",
        },
        cyan: {
            50: "#F4FBFE",
            100: "#DFF4FF",
            200: "#CCEAFA",
            300: "#80C7F1",
            400: "#49A8E3",
            500: "#1C95D9",
            600: "#1D7CBF",
            700: "#04629E",
            800: "#08487F",
            900: "#002E59",
        },
        magenta: {
            50: "#FCF6F5",
            100: "#FAE0DE",
            200: "#FFCBC8",
            300: "#F5A7A2",
            400: "#F28B83",
            500: "#E57870",
            600: "#DE554B",
            700: "#D73F34",
            800: "#B2281F",
            900: "#8C1008",
        },
        teal: {
            50: "#EBFAFA",
            100: "#DBF9F9",
            200: "#BAF0F1",
            300: "#93E4E6",
            400: "#3DC9CC",
            500: "#2DB7BA",
            600: "#2C9799",
            700: "#23797A",
            800: "#1A5A5C",
            900: "#144647",
        },
        functional: {
            lightMask: "rgba(244, 251, 254, 0.4)",
            darkMask: "rgba(0, 28, 53, 0.4)",
            background: "#F8F9FA",
        },
    },
    shadows: [
        "none",
        "0px 0px 3px 0px rgba(38, 41, 117, 0.12)",
        "0px 1px 6px 0px rgba(38, 41, 117, 0.12)",
        "0px 2px 20px 0px rgba(38, 41, 117, 0.06), 0px 3px 8px 0px rgba(38, 41, 117, 0.09)",
        "0px 4px 16px 0px rgba(38, 41, 117, 0.12), 0px 2px 20px 0px rgba(38, 41, 117, 0.08), 0px 3px 8px 0px rgba(38, 41, 117, 0.12)",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    typography: {
        fontFamily: '"Inter", sans-serif',
        B42: {
            fontSize: "48px",
            lineHeight: "calc(48px * 1.2)",
            fontWeight: "700",
        },
        B36: {
            fontSize: "36px",
            lineHeight: "calc(36px * 1.2)",
            fontWeight: "700",
        },
        B32: {
            fontSize: "32px",
            lineHeight: "calc(32px * 1.2)",
            fontWeight: "700",
        },
        B28: {
            fontSize: "28px",
            lineHeight: "calc(28px * 1.2)",
            fontWeight: "700",
        },
        B24: {
            fontSize: "24px",
            lineHeight: "calc(24px * 1.2)",
            fontWeight: "700",
        },
        H36: {
            fontSize: "36px",
            lineHeight: "calc(36px * 1.2)",
            fontWeight: "600",
        },
        H32: {
            fontSize: "32px",
            lineHeight: "calc(32px * 1.2)",
            fontWeight: "600",
        },
        H28: {
            fontSize: "28px",
            lineHeight: "calc(28px * 1.2)",
            fontWeight: "600",
        },
        H24: {
            fontSize: "24px",
            lineHeight: "calc(24px * 1.2)",
            fontWeight: "600",
        },
        H20: {
            fontSize: "20px",
            lineHeight: "calc(20px * 1.2)",
            fontWeight: "600",
        },
        H18: {
            fontSize: "18px",
            lineHeight: "calc(18px * 1.2)",
            fontWeight: "600",
        },
        H16: {
            fontSize: "16px",
            lineHeight: "calc(16px * 1.2)",
            fontWeight: "600",
        },
        H14: {
            fontSize: "14px",
            lineHeight: "calc(14px * 1.2)",
            fontWeight: "600",
        },
        Label22: {
            fontSize: "22px",
            lineHeight: "calc(22px * 1.2)",
            fontWeight: "500",
        },
        Label20: {
            fontSize: "20px",
            lineHeight: "calc(20px * 1.2)",
            fontWeight: "500",
        },
        Label18: {
            fontSize: "18px",
            lineHeight: "calc(18px * 1.2)",
            fontWeight: "500",
        },
        Label16: {
            fontSize: "16px",
            lineHeight: "calc(16px * 1.2)",
            fontWeight: "500",
        },
        Label14: {
            fontSize: "14px",
            lineHeight: "calc(14px * 1.2)",
            fontWeight: "500",
        },
        Label12: {
            fontSize: "12px",
            lineHeight: "calc(12px * 1.2)",
            fontWeight: "500",
        },
        Body18: {
            fontSize: "18px",
            lineHeight: "calc(18px * 1.6)",
        },
        Body16: {
            fontSize: "16px",
            lineHeight: "calc(16px * 1.6)",
        },
        Body14: {
            fontSize: "14px",
            lineHeight: "calc(14px * 1.6)",
        },
        Body12: {
            fontSize: "12px",
            lineHeight: "calc(12px * 1.6)",
        },
    },
});

export default customTheme;
