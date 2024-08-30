import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "@mui/material/styles/createPalette";

function Display() {
    // const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                textAlign: "left",
            }}
        >
            <Box sx={{ width: "140px" }}>Display</Box>

            <Typography variant="B42" sx={{ width: "120px" }}>
                B-42
            </Typography>
            <Typography variant="B36" sx={{ width: "120px" }}>
                B-36
            </Typography>
            <Typography variant="B32" sx={{ width: "120px" }}>
                B-32
            </Typography>
            <Typography variant="B28" sx={{ width: "120px" }}>
                B-28
            </Typography>
            <Typography variant="B24" sx={{ width: "120px" }}>
                B-24
            </Typography>
        </Box>
    );
}

export default Display;
