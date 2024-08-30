import { TypographyProps, useTheme } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CustomIcon from "./CustomIcon";

interface CustomizedButtonProps extends ButtonProps {
    variant: ButtonProps["variant"];
    colorStyle?: string;
}

const CustomizedButton = styled(Button, {
    shouldForwardProp: (prop: string) => prop !== "colorStyle",
})(({ colorStyle }: CustomizedButtonProps) => {
    const theme = useTheme();
    const palette = theme.palette;
    const selectedColorPalette = colorStyle
        ? palette[colorStyle as keyof typeof palette]
        : undefined;
    const colorDetails = selectedColorPalette as { [key: string]: string };

    return {
        "&.MuiButton-text": {
            color: `${colorDetails["900"]}`,
            backgroundColor: `${colorDetails["300"]}`,
            "&:focus": {
                outline: "none",
                border: `1px solid ${colorDetails["900"]}`,
            },
            "& .MuiSvgIcon-root": {
                // fontSize: "inherit",
                color: `${colorDetails["900"]}`,
            },
        },

        "&.MuiButton-outlined": {
            backgroundColor: `${colorDetails["400"]}`,
        },

        "&.MuiButton-contained": {
            backgroundColor: `${colorDetails["400"]}`,
            "&:hover": {
                backgroundColor: `${colorDetails["50"]}`,
                borderColor: `${colorDetails["200"]}`,
            },
            "&:active": {
                backgroundColor: `${colorDetails["200"]}`,
                borderColor: `${colorDetails["200"]}`,
            },
            "&:focus": {
                borderColor: `${colorDetails["900"]}`,
                boxShadow: `0 0 0 3px ${colorDetails["200"]}`,
                outline: "none",
            },
            "&.Mui-disabled": {
                backgroundColor: `${colorDetails["200"]}`,
                color: `${colorDetails["800"]}`,
                borderColor: `${colorDetails["300"]}`,
            },
        },
    };
});

function CustomBtton({
    variant,
    text,
    textStyle,
    colorStyle,
    borderRadius,
    shadow,
    startIcon,
    startIconSize,
    endIcon,
    endIconSize,
    disabled,
    loading,
    loadingIconSize,
}: {
    variant: ButtonProps["variant"];
    text?: string;
    textStyle: TypographyProps["variant"];
    colorStyle?: string;
    borderRadius?: string;
    shadow?: number;
    startIcon?: string | null;
    startIconSize?: number;
    endIcon?: React.ReactNode;
    endIconSize?: number;
    disabled?: boolean;
    loading?: boolean;
    loadingIconSize?: number;
}) {
    const theme = useTheme();

    return (
        <CustomizedButton
            disableFocusRipple={true}
            disableRipple={true}
            disableElevation={true}
            variant={variant}
            colorStyle={colorStyle}
            startIcon={
                loading ? null : (
                    <CustomIcon src={startIcon} iconSize={startIconSize} />
                )
                //   startIcon && (
                //       <Box
                //           component="img"
                //           sx={{
                //               color: "red",
                //               height: { startIconSize },
                //               width: { startIconSize },
                //           }}
                //           src={startIcon}
                //       />
                //   )
            }
            endIcon={loading ? null : endIcon}
            disabled={disabled}
            sx={{
                width: "100%",
                height: "100%",
                textTransform: "none",
                borderRadius: { borderRadius },
                boxShadow:
                    shadow !== undefined ? theme.shadows[shadow] : "none",
                "& .MuiSvgIcon-root": {
                    fontSize: "inherit",
                },
                "&.MuiButton-startIcon": {
                    marginRight: 0,
                    marginLeft: 0,
                },
                "& .MuiButton-endIcon": {
                    fontSize: endIconSize,
                },
            }}
        >
            {loading ? (
                <CircularProgress color="inherit" size={loadingIconSize} />
            ) : (
                <Typography variant={textStyle}>{text}</Typography>
            )}
        </CustomizedButton>
    );
}

export default CustomBtton;
