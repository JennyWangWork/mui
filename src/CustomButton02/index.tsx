import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ButtonComponentProps, ButtonStyledProps } from "../types/button";

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        greyContained: true;
        greyOutlined: true;
    }
}

const CustomizedButton = styled(Button, {
    shouldForwardProp: (prop: string) =>
        prop !== "colorStyle" && prop !== "isLoading",
})<ButtonStyledProps>(({ colorStyle, isLoading }) => {
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
    };
});

function CustomBtton({
    variant,
    text,
    textStyle,
    colorStyle,
    backgroundColor,
    borderRadius,
    borderColor,
    shadow,
    gap,
    startIcon,
    // startIconSize,
    endIcon,
    // endIconSize,
    disabled,
    isLoading,
    loadingIconSize,
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
            sx={{
                width: "100%",
                minWidth: "0",
                height: "100%",
                textTransform: "none",
                backgroundColor: backgroundColor,
                borderWidth: borderColor ? "1px" : "none",
                borderStyle: borderColor ? "solid" : "none",
                borderColor: borderColor,
                borderRadius: borderRadius,
                boxShadow: shadow && theme.shadows[shadow],
                "&:hover": {
                    boxShadow: shadow && theme.shadows[shadow],
                    borderColor: borderColor,
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
                <Typography variant={textStyle}>{text}</Typography>
            )}
        </CustomizedButton>
    );
}

export default CustomBtton;
