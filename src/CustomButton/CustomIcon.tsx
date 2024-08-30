import { SvgIcon, SvgIconProps } from "@mui/material";
import useSvgPath from "./useSvgPath";

interface IconProps extends SvgIconProps {
    src: string | null | undefined;
    iconSize: number | null | undefined;
}

const CustomIcon: React.FC<IconProps> = (props) => {
    const pathData = useSvgPath(props.src || "");
    console.log(pathData);
    return (
        <SvgIcon
            color="inherit"
            sx={{ width: props.iconSize, height: props.iconSize }}
            viewBox={`0 0 ${pathData.width} ${pathData.height}`}
        >
            <path d={pathData.pathData || ""} />
        </SvgIcon>
    );
};

export default CustomIcon;
