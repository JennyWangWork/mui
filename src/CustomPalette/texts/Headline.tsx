import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "@mui/material/styles/createPalette";

function Headline() {
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
            <Box sx={{ width: "140px" }}>Headline</Box>

            <Typography variant="H36" sx={{ width: "120px" }}>
                H-36
            </Typography>
            <Typography variant="H32" sx={{ width: "120px" }}>
                H-32
            </Typography>
            <Typography variant="H28" sx={{ width: "120px" }}>
                H-28
            </Typography>
            <Typography variant="H24" sx={{ width: "120px" }}>
                H-24
            </Typography>
            <Typography variant="H20" sx={{ width: "120px" }}>
                H-20
            </Typography>
            <Typography variant="H18" sx={{ width: "120px" }}>
                H-18
            </Typography>
            <Typography variant="H16" sx={{ width: "120px" }}>
                H-16
            </Typography>
            <Typography variant="H14" sx={{ width: "120px" }}>
                H-14
            </Typography>
        </Box>
    );
}

export default Headline;
