import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "@mui/material/styles/createPalette";

function Functional() {
    // const theme = useTheme();

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={{ width: "80px", textAlign: "left" }}>Functional</Box>
                <Chip
                    label="light mask"
                    sx={{
                        width: "110px",
                        bgcolor: "functional.lightMask",
                    }}
                />
                <Chip
                    label="dark mask"
                    sx={{
                        width: "110px",
                        bgcolor: "functional.darkMask",
                    }}
                />
                <Chip
                    label="background"
                    sx={{
                        width: "110px",
                        bgcolor: "functional.background",
                    }}
                />
            </Stack>
        </>
    );
}

export default Functional;
