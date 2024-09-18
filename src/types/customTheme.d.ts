import "@mui/material/styles";
import "@mui/material/styles/createPalette";
import { SxProps, Theme } from "@mui/system";

type TypeSX = SxProps<Theme>;

declare module "@mui/material/styles" {
    interface Palette {
        grey: Palette["grey"];
        violet: Palette["grey"];
        yellow: Palette["grey"];
        cyan: Palette["grey"];
        magenta: Palette["grey"];
        teal: Palette["grey"];
        functional: {
            lightMask: string;
            darkMask: string;
            background: string;
        };
    }

    interface PaletteOptions {
        grey?: PaletteOptions["grey"];
        violet?: PaletteOptions["grey"];
        yellow?: PaletteOptions["grey"];
        cyan?: PaletteOptions["grey"];
        magenta?: PaletteOptions["grey"];
        teal?: PaletteOptions["grey"];
        functional?: {
            lightMask: string;
            darkMask: string;
            background: string;
        };
    }

    interface TypographyVariants {
        B42: React.CSSProperties;
        B36: React.CSSProperties;
        B32: React.CSSProperties;
        B28: React.CSSProperties;
        B24: React.CSSProperties;
        H36: React.CSSProperties;
        H32: React.CSSProperties;
        H28: React.CSSProperties;
        H24: React.CSSProperties;
        H20: React.CSSProperties;
        H18: React.CSSProperties;
        H16: React.CSSProperties;
        H14: React.CSSProperties;
        Label22: React.CSSProperties;
        Label20: React.CSSProperties;
        Label18: React.CSSProperties;
        Label16: React.CSSProperties;
        Label14: React.CSSProperties;
        Label12: React.CSSProperties;
        Body18: React.CSSProperties;
        Body16: React.CSSProperties;
        Body14: React.CSSProperties;
        Body12: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        B42: React.CSSProperties;
        B36: React.CSSProperties;
        B32: React.CSSProperties;
        B28: React.CSSProperties;
        B24: React.CSSProperties;
        H36: React.CSSProperties;
        H32: React.CSSProperties;
        H28: React.CSSProperties;
        H24: React.CSSProperties;
        H20: React.CSSProperties;
        H18: React.CSSProperties;
        H16: React.CSSProperties;
        H14: React.CSSProperties;
        Label22: React.CSSProperties;
        Label20: React.CSSProperties;
        Label18: React.CSSProperties;
        Label16: React.CSSProperties;
        Label14: React.CSSProperties;
        Label12: React.CSSProperties;
        Body18: React.CSSProperties;
        Body16: React.CSSProperties;
        Body14: React.CSSProperties;
        Body12: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        B42: true;
        B36: true;
        B32: true;
        B28: true;
        B24: true;
        H36: true;
        H32: true;
        H28: true;
        H24: true;
        H20: true;
        H18: true;
        H16: true;
        H14: true;
        Label22: true;
        Label20: true;
        Label18: true;
        Label16: true;
        Label14: true;
        Label12: true;
        Body18: true;
        Body16: true;
        Body14: true;
        Body12: true;
    }
}
