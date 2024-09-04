import { TypographyProps } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

interface ButtonStyledProps extends ButtonProps {
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
    borderColor?: string;
    shadow?: number;
    gap?: string;
    startIcon?: ReactNode;
    // startIconSize?: number;
    endIcon?: ReactNode;
    // endIconSize?: number;
    disabled?: boolean;
    isLoading?: boolean;
    loadingIconSize?: number;
    onClick?: () => void;
}
