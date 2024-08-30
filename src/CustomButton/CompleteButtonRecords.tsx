// import LoadingButton from "@mui/lab/LoadingButton";
import { TypographyProps, useTheme } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CustomIcon from "./CustomIcon";

interface CustomizedButtonProps extends ButtonProps {
    variant: ButtonProps["variant"];
    colorStyle?: string;
    borderColor?: string;
    startIconSize?: number;
    endIconSize?: number;
}

// 使用 shouldForwardProp 過濾不需要的 props
const CustomizedButton = styled(Button, {
    shouldForwardProp: (prop: string) =>
        prop !== "colorStyle" &&
        prop !== "borderColor" &&
        prop !== "startIconSize" &&
        prop !== "endIconSize",
})(
    ({
        colorStyle,
        borderColor,
        startIconSize,
        endIconSize,
    }: CustomizedButtonProps) => {
        const theme = useTheme();
        const palette = theme.palette;
        const selectedColorPalette = colorStyle
            ? palette[colorStyle as keyof typeof palette]
            : undefined;
        const colorDetails = selectedColorPalette as { [key: string]: string };

        return {
            width: "100%",
            height: "100%",
            textTransform: "none",
            color: `${colorDetails["800"]}`,
            // "&.Mui-disabled": {
            //     backgroundColor: `${colorDetails["300"]}`,
            //     color: `${colorDetails["800"]}`,
            //     borderColor: `${colorDetails["600"]}`,
            // },
            "&.MuiButton-text": {
                backgroundColor: `${colorDetails["300"]}`,
                "&:focus": {
                    borderColor: `${colorDetails["200"]}`,
                    boxShadow: `0 0 0 3px ${colorDetails["200"]}`,
                },
            },
            "&.MuiButton-outlined": {
                borderColor: borderColor,
            },
            "&.MuiButton-contained": {
                backgroundColor: `${colorDetails["400"]}`,
                "&:hover": {
                    backgroundColor: `${colorDetails["50"]}`,
                    borderColor: `${colorDetails["200"]}`,
                    cursor: "pointer",
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

            "& .MuiSvgIcon-root": {
                fontSize: "inherit",
            },
            "&.MuiButton-startIcon": {
                fontSize: startIconSize,
            },
            "& .MuiButton-endIcon": {
                fontSize: endIconSize,
            },
        };
    }
);

function CompleteButtonRecords({
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
    startIconSize: number;
    endIcon?: React.ReactNode;
    endIconSize: number;
    disabled?: boolean;
    loading?: boolean;
    loadingIconSize?: number;
}) {
    const theme = useTheme();
    // const pathData = useSvgPath(startIcon ? startIcon : "");

    // const CustomIcon: React.FC<SvgIconProps> = () => {
    //     return (
    //         <SvgIcon>
    //             <path d={pathData || ""} />
    //         </SvgIcon>
    //     );
    // };
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
            }
            startIconSize={startIconSize}
            endIcon={loading ? null : endIcon}
            endIconSize={endIconSize}
            disabled={disabled}
            sx={{
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

export default CompleteButtonRecords;

// import { Theme, TypographyProps, useTheme } from "@mui/material";
// import Button, { ButtonProps } from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import "@mui/material/styles/createPalette";
// import Typography from "@mui/material/Typography";

// interface CustomizedButtonProps extends ButtonProps {
//     theme: Theme;
//     variant: ButtonProps["variant"];
//     colorStyle?: string;
//     borderColor?: string;
// }

// // const CustomizedButton = styled(Button)<CustomizedButtonProps>(
// //     ({ theme, colorStyle, borderColor }) => ({
// //         width: "100%",
// //         height: "100%",
// //         textTransform: "none",
// //         borderColor: borderColor,
// //         color: colorStyle
// //             ? theme.palette[colorStyle]?.[200]
// //             : theme.palette.primary.main,
// //         // backgroundColor: "#0063cc",
// //         // disableFocusRipple: "true",
// //         // disabledRipple: "true",

// //         // "&:hover": {
// //         //     backgroundColor: "#0069d9",
// //         //     borderColor: "#0062cc",
// //         //     boxShadow: "none",
// //         // },
// //         // "&:active": {
// //         //     boxShadow: "none",
// //         //     backgroundColor: "#0062cc",
// //         //     borderColor: "#005cbf",
// //         // },
// //         // "&:focus": {
// //         //     boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
// //         // },
// //     })
// // );

// const CustomizedButton = styled(Button)(
//     ({ theme, variant, colorStyle, borderColor }: CustomizedButtonProps) => {
//         const palette = theme.palette;
//         const color =
//             colorStyle && palette[colorStyle as keyof typeof palette]
//                 ? (
//                       palette[colorStyle as keyof typeof palette] as {
//                           [key: string]: string;
//                       }
//                   )["400"]
//                 : palette.primary.main;

//         return {
//             width: "100%",
//             height: "100%",
//             textTransform: "none",
//             borderColor:
//                 variant === "outlined"
//                     ? borderColor
//                     : theme.palette.primary.main,
//             color: color,
//         };
//     }
// );

// function CustomBtton({
//     variant,
//     text,
//     textStyle,
//     colorStyle,
//     borderColor,
// }: // startIcon,
// {
//     variant: ButtonProps["variant"];
//     text: string;
//     textStyle: TypographyProps["variant"];
//     colorStyle: string;
//     borderColor: string;
//     // startIcon?: React.ReactNode;
// }) {
//     const theme = useTheme();

//     return (
//         <>
//             <CustomizedButton
//                 theme={theme}
//                 disableFocusRipple={true}
//                 disableRipple={true}
//                 variant={variant}
//                 colorStyle={colorStyle}
//                 borderColor={borderColor}
//                 // startIcon={startIcon}
//                 // color={colorStyle}
//             >
//                 <Typography variant={textStyle}>{text}</Typography>
//             </CustomizedButton>
//         </>
//     );
// }

// export default CustomBtton;
