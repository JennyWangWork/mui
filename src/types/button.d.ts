import { TypographyProps } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

interface ButtonStyledProps extends ButtonProps {
    variant: ButtonProps["variant"];
    colorStyle?: string;
    isLoading?: boolean;
}

interface ButtonComponentProps {
    variant: ButtonProps["variant"];
    text?: string;
    textStyle: TypographyProps["variant"];
    colorStyle?: string;
    backgroundColor?: string;
    borderRadius?: string;
    shadow?: number;
    gap?: string;
    startIcon?: string;
    startIconSize?: number;
    endIcon?: string;
    endIconSize?: number;
    disabled?: boolean;
    isLoading?: boolean;
    loadingIconSize?: number;
}
