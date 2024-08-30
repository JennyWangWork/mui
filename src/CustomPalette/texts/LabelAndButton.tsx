import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "@mui/material/styles/createPalette";

function LabelAndButton() {
    // const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                textAlign: "left",
                width: "100vw",
            }}
        >
            <Box sx={{ width: "140px" }}>Label And Button</Box>

            <Typography variant="Label22" sx={{ width: "120px" }}>
                Label-22
            </Typography>
            <Typography variant="Label20" sx={{ width: "120px" }}>
                Label-20
            </Typography>
            <Typography variant="Label18" sx={{ width: "120px" }}>
                Label-18
            </Typography>
            <Typography variant="Label16" sx={{ width: "120px" }}>
                Label-16
            </Typography>
            <Typography variant="Label14" sx={{ width: "120px" }}>
                Label-14
            </Typography>
            <Typography variant="Label12" sx={{ width: "120px" }}>
                Label-12
            </Typography>
        </Box>
    );
}

export default LabelAndButton;
