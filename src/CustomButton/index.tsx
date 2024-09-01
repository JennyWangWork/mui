import { TypographyProps, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface CustomizedButtonProps extends ButtonProps {
    variant: ButtonProps["variant"];
    colorStyle?: string;
    isLoading?: boolean;
}

const CustomizedButton = styled(Button, {
    shouldForwardProp: (prop: string) =>
        prop !== "colorStyle" && prop !== "isLoading",
})(({ colorStyle, isLoading }: CustomizedButtonProps) => {
    const theme = useTheme();
    const palette = theme.palette;
    const selectedColorPalette = colorStyle
        ? palette[colorStyle as keyof typeof palette]
        : undefined;
    const colorDetails = selectedColorPalette as { [key: string]: string };
    const isGrey = colorStyle === "grey";
    const disabledOutlinedColor = isGrey
        ? `${colorDetails["400"]}`
        : `${colorDetails["300"]}`;
    const loadingOutlinedBackgroundColor = isGrey
        ? `${colorDetails["200"]}`
        : `${colorDetails["100"]}`;
    const loadingOutlinedBorderColor = isGrey
        ? `${colorDetails["500"]}`
        : `${colorDetails["700"]}`;
    const loadingContainedColor = isGrey
        ? `${colorDetails["700"]}`
        : `${colorDetails["800"]}`;

    return {
        "&.MuiButton-text": {
            color: `${colorDetails["700"]}`,
            borderColor: "none",
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
            borderColor: isGrey
                ? `${colorDetails["500"]}`
                : `${colorDetails["700"]}`,
            "&:hover": {
                outline: "none",
                backgroundColor: isGrey
                    ? `${colorDetails["200"]}`
                    : `${colorDetails["100"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                backgroundColor: isGrey
                    ? `${colorDetails["200"]}`
                    : `${colorDetails["100"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? `${colorDetails["700"]}`
                    : disabledOutlinedColor,
                backgroundColor: isLoading && loadingOutlinedBackgroundColor,
                borderColor: isLoading
                    ? loadingOutlinedBorderColor
                    : `${colorDetails["300"]}`,
            },
        },

        "&.MuiButton-contained": {
            color: isGrey ? `${colorDetails["900"]}` : `${palette.grey["50"]}`,
            backgroundColor: isGrey
                ? `${colorDetails["300"]}`
                : `${colorDetails["700"]}`,
            "&:hover": {
                outline: "none",
                backgroundColor: isGrey
                    ? `${colorDetails["400"]}`
                    : `${colorDetails["600"]}`,
                transition: "background-color 200ms ease-out",
            },
            "&:active": {
                outline: "none",
                backgroundColor: isGrey
                    ? `${colorDetails["500"]}`
                    : `${colorDetails["700"]}`,
            },
            "&:focus": {
                outline: "none",
            },
            "&:disabled": {
                color: isLoading
                    ? loadingContainedColor
                    : `${palette.grey["50"]}`,
                backgroundColor: isGrey
                    ? `${colorDetails["300"]}`
                    : `${colorDetails["200"]}`,
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
    shadow,
    gap,
    startIcon,
    startIconSize,
    endIcon,
    endIconSize,
    disabled,
    isLoading,
    loadingIconSize,
}: {
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
}) {
    const theme = useTheme();

    const CustomIcon = (icon?: string, iconSize?: number) => {
        return (
            <>
                <Box
                    component="img"
                    sx={{
                        width: iconSize,
                        height: iconSize,
                    }}
                    src={icon}
                />
            </>
        );
    };

    return (
        <CustomizedButton
            disableFocusRipple={true}
            disableRipple={true}
            disableElevation={true}
            variant={variant}
            colorStyle={colorStyle}
            startIcon={isLoading ? null : CustomIcon(startIcon, startIconSize)}
            endIcon={isLoading ? null : CustomIcon(endIcon, endIconSize)}
            disabled={isLoading ? true : disabled}
            isLoading={isLoading}
            sx={{
                width: "100%",
                minWidth: "0",
                height: "100%",
                textTransform: "none",
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
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
                <Typography variant={textStyle}>{text}</Typography>
            )}
        </CustomizedButton>
    );
}

export default CustomBtton;
