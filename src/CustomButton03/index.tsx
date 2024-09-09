import { useTheme } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { ReactNode } from "react";

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        greyContained: true;
        greyOutlined: true;
        signUpOutlined: true;
        signInContained: true;
    }
}

interface ButtonStyledProps extends ButtonProps {
    variant: ButtonProps["variant"];
    colorStyle?: string;
    isLoading?: boolean;
}

interface ButtonComponentProps {
    variant: ButtonProps["variant"];
    width?: string;
    height?: string;
    children?: React.ReactNode;
    colorStyle?: keyof PaletteOptions;
    shadow?: number;
    gap?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    loadingIconSize?: number;
    sx?: object;
    onClick?: () => void;
}

const CustomizedButton = styled(Button, {
    shouldForwardProp: (prop: string) =>
        prop !== "colorStyle" && prop !== "isLoading",
})(({ colorStyle, isLoading }: ButtonStyledProps) => {
    const theme = useTheme();
    const palette = theme.palette;
    const selectedColorPalette = colorStyle
        ? palette[colorStyle as keyof typeof palette]
        : palette.grey;
    const colorDetails = selectedColorPalette as { [key: string]: string };

    return {
        "&.MuiButton-text": {
            color: `${colorDetails["700"]}`,
            "&:hover": {
                outline: "none",
                backgroundColor: `${colorDetails["100"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                backgroundColor: `${colorDetails["100"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: `${palette.grey["300"]}`,
            },
        },

        "&.MuiButton-outlined": {
            color: `${colorDetails["700"]}`,
            border: `1px solid ${colorDetails["700"]}`,
            "&:hover": {
                outline: "none",
                backgroundColor: `${colorDetails["100"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                backgroundColor: `${colorDetails["100"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? `${colorDetails["700"]}`
                    : `${colorDetails["300"]}`,
                backgroundColor: isLoading && `${colorDetails["100"]}`,
                borderColor: isLoading
                    ? `${colorDetails["700"]}`
                    : `${colorDetails["300"]}`,
            },
        },

        "&.MuiButton-contained": {
            color: `${palette.grey["50"]}`,
            backgroundColor: `${colorDetails["700"]}`,
            border: "none",
            "&:hover": {
                outline: "none",
                backgroundColor: `${colorDetails["600"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                backgroundColor: `${colorDetails["800"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? `${colorDetails["700"]}`
                    : `${palette.grey["50"]}`,
                backgroundColor: `${colorDetails["200"]}`,
            },
        },

        "&.MuiButton-greyOutlined": {
            color: `${palette.grey["700"]}`,
            border: `1px solid ${palette.grey["500"]}`,
            "&:hover": {
                outline: "none",
                backgroundColor: `${palette.grey["200"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                backgroundColor: `${palette.grey["200"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? `${palette.grey["700"]}`
                    : `${palette.grey["300"]}`,
                backgroundColor: isLoading && `${palette.grey["200"]}`,
                borderColor: isLoading
                    ? `${palette.grey["500"]}`
                    : `${palette.grey["300"]}`,
            },
        },

        "&.MuiButton-greyContained": {
            color: `${palette.grey["900"]}`,
            backgroundColor: `${palette.grey["300"]}`,
            "&:hover": {
                outline: "none",
                backgroundColor: `${palette.grey["400"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                backgroundColor: `${palette.grey["500"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? `${palette.grey["900"]}`
                    : `${palette.grey["50"]}`,
                backgroundColor: isLoading
                    ? `${palette.grey["500"]}`
                    : `${palette.grey["300"]}`,
            },
        },

        "&.MuiButton-signUpOutlined": {
            color: `${palette.grey["50"]}`,
            border: "1px",
            borderStyle: "solid",
            borderColor: `${palette.grey["50"]}`,
            "&:hover": {
                outline: "none",
                border: "none",
                backgroundColor: `${colorDetails["500"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                border: "none",
                backgroundColor: `${colorDetails["400"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? `${palette.grey["50"]}`
                    : `${colorDetails["500"]}`,
                backgroundColor: isLoading
                    ? `${colorDetails["400"]}`
                    : "transparent",
                borderColor: isLoading
                    ? `${colorDetails["400"]}`
                    : `${colorDetails["500"]}`,
            },
        },

        "&.MuiButton-signInContained": {
            color: `${colorDetails["700"]}`,
            backgroundColor: `${palette.grey["50"]}`,
            "&:hover": {
                outline: "none",
                color: `${palette.grey["50"]}`,
                backgroundColor: `${colorDetails["500"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                color: `${palette.grey["50"]}`,
                backgroundColor: `${colorDetails["400"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? `${palette.grey["50"]}`
                    : `${colorDetails["700"]}`,
                backgroundColor: isLoading
                    ? `${colorDetails["400"]}`
                    : `${colorDetails["500"]}`,
            },
        },
    };
});

function ButtonComponent({
    variant,
    width,
    height,
    colorStyle,
    children,
    shadow,
    gap,
    startIcon,
    endIcon,
    disabled,
    isLoading,
    loadingIconSize,
    sx,
    onClick,
}: ButtonComponentProps) {
    const theme = useTheme();

    return (
        <CustomizedButton
            disableFocusRipple={true}
            disableRipple={true}
            disableElevation={true}
            variant={variant}
            colorStyle={colorStyle}
            startIcon={isLoading ? null : startIcon}
            endIcon={isLoading ? null : endIcon}
            disabled={isLoading ? true : disabled}
            isLoading={isLoading}
            onClick={onClick}
            sx={{
                width: width ? width : "100%",
                minWidth: "0",
                height: height ? height : "100%",
                textTransform: "none",
                ...sx,
                boxShadow: shadow && theme.shadows[shadow],
                "&:hover": {
                    boxShadow: shadow && theme.shadows[shadow],
                },
                "&:focus": {
                    boxShadow: shadow && theme.shadows[shadow],
                },
                "&:disabled": {
                    boxShadow: shadow && theme.shadows[shadow],
                },
                "& .MuiButton-startIcon": {
                    marginRight: gap ? gap : 0,
                    marginLeft: 0,
                },
                "& .MuiButton-endIcon": {
                    marginRight: 0,
                    marginLeft: gap ? gap : 0,
                },
            }}
        >
            {isLoading ? (
                <CircularProgress color="inherit" size={loadingIconSize} />
            ) : (
                children
            )}
        </CustomizedButton>
    );
}

export default ButtonComponent;
