import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "@mui/material/styles/createPalette";
import Cyan from "./colors/Cyan";
import Functional from "./colors/Functional";
import Grey from "./colors/Grey";
import Magenta from "./colors/Magenta";
import Teal from "./colors/Teal";
import Violet from "./colors/Violet";
import Yellow from "./colors/Yellow";

function ForColors() {
    // const theme = useTheme();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="B36">Colors</Typography>

            <Grey />
            <Violet />
            <Yellow />
            <Cyan />
            <Magenta />
            <Teal />
            <Functional />
        </Box>
    );
}

export default ForColors;
