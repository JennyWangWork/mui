import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useAppSelector } from "../hooks/reducerHooks.ts";

declare module "@mui/material/styles" {
    // 能夠在 palette 中找到這個屬性
    interface Palette {
        tertiary: Palette["primary"];
    }
    // 能用使用 createTheme 來設定這個屬性
    interface PaletteOptions {
        tertiary?: PaletteOptions["primary"];
    }

    interface TypographyVariants {
        subtitle3: React.CSSProperties;
        subtitle4: React.CSSProperties;
        "body-18": React.CSSProperties;
        "body-16": React.CSSProperties;
        "body-14": React.CSSProperties;
        "body-12": React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        subtitle3?: React.CSSProperties;
        subtitle4?: React.CSSProperties;
        "body-18"?: React.CSSProperties;
        "body-16"?: React.CSSProperties;
        "body-14"?: React.CSSProperties;
        "body-12"?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        subtitle3: true;
        subtitle4: true;
        "body-18": true;
        "body-16": true;
        "body-14": true;
        "body-12": true;
    }
}

function themeModeToggler(nowMode: PaletteMode) {
    return {
        palette: {
            mode: nowMode,
            primary: {
                main: nowMode === "light" ? "#42469C" : "#2F327E",
            },
            secondary: {
                main: nowMode === "light" ? "#EEB301" : "#E3A702",
            },
            tertiary: {
                main: nowMode === "light" ? "#55B8EF" : "#0089D5",
            },
            error: {
                main: nowMode === "light" ? "#D73F34" : "#AC271E",
            },
            success: {
                main: nowMode === "light" ? "#1CC1C4" : "#269EA0",
            },
        },
        typography: {
            fontFamily:
                '"GothamPro", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            h1: {
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: 1.375,
            },
            h2: {
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: 1.375,
            },
            h3: {
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: 1.375,
            },
            h4: {
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: 1.375,
            },
            h5: {
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: 1.375,
            },
            h6: {
                fontWeight: "medium",
                fontSize: "24px",
                lineHeight: 1.375,
            },
            subtitle1: {
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: 1.375,
            },
            subtitle2: {
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: 1.375,
            },
            subtitle3: {
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: 1.375,
            },
            subtitle4: {
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: 1.375,
            },
            "body-18": {
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: 1.375,
            },
            "body-16": {
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: 1.375,
            },
            "body-14": {
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: 1.375,
            },
            "body-12": {
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: 1.375,
            },
        },
    };
}

export default function useCustomTheme() {
    const { mode } = useAppSelector((state) => state.common);
    const theme = useMemo(() => themeModeToggler(mode), [mode]);

    return createTheme(theme);
}
