import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "@mui/material/styles/createPalette";

function Body() {
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
            <Box sx={{ width: "140px" }}>Body</Box>

            <Typography variant="Body18" sx={{ width: "120px" }}>
                Body-18
            </Typography>
            <Typography variant="Body16" sx={{ width: "120px" }}>
                Body-16
            </Typography>
            <Typography variant="Body14" sx={{ width: "120px" }}>
                Body-14
            </Typography>
            <Typography variant="Body12" sx={{ width: "120px" }}>
                Body-12
            </Typography>
        </Box>
    );
}

export default Body;
