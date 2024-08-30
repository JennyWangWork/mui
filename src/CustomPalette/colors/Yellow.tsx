import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "@mui/material/styles/createPalette";

function Yellow() {
    // const theme = useTheme();

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={{ width: "80px", textAlign: "left" }}>Yellow</Box>
                <Chip
                    label="Yellow-50"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.50",
                    }}
                />
                <Chip
                    label="Yellow-100"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.100",
                    }}
                />
                <Chip
                    label="Yellow-200"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.200",
                    }}
                />
                <Chip
                    label="Yellow-300"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.300",
                    }}
                />
                <Chip
                    label="Yellow-400"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.400",
                    }}
                />
                <Chip
                    label="Yellow-500"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.500",
                    }}
                />
                <Chip
                    label="Yellow-600"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.600",
                    }}
                />
                <Chip
                    label="Yellow-700"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.700",
                    }}
                />
                <Chip
                    label="Yellow-800"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.800",
                    }}
                />
                <Chip
                    label="Yellow-900"
                    sx={{
                        width: "110px",
                        bgcolor: "yellow.900",
                    }}
                />
            </Stack>
        </>
    );
}

export default Yellow;
