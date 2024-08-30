import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "@mui/material/styles/createPalette";

function Violet() {
    // const theme = useTheme();

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={{ width: "80px", textAlign: "left" }}>Violet</Box>
                <Chip
                    label="Violet-50"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.50",
                    }}
                />
                <Chip
                    label="Violet-100"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.100",
                    }}
                />
                <Chip
                    label="Violet-200"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.200",
                    }}
                />
                <Chip
                    label="Violet-300"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.300",
                    }}
                />
                <Chip
                    label="Violet-400"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.400",
                    }}
                />
                <Chip
                    label="Violet-500"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.500",
                    }}
                />
                <Chip
                    label="Violet-600"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.600",
                    }}
                />
                <Chip
                    label="Violet-700"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.700",
                    }}
                />
                <Chip
                    label="Violet-800"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.800",
                    }}
                />
                <Chip
                    label="Violet-900"
                    sx={{
                        width: "110px",
                        bgcolor: "violet.900",
                    }}
                />
            </Stack>
        </>
    );
}

export default Violet;
