import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "@mui/material/styles/createPalette";

function Magenta() {
    // const theme = useTheme();

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={{ width: "80px", textAlign: "left" }}>Magenta</Box>
                <Chip
                    label="Magenta-50"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.50",
                    }}
                />
                <Chip
                    label="Magenta-100"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.100",
                    }}
                />
                <Chip
                    label="Magenta-200"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.200",
                    }}
                />
                <Chip
                    label="Magenta-300"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.300",
                    }}
                />
                <Chip
                    label="Magenta-400"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.400",
                    }}
                />
                <Chip
                    label="Magenta-500"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.500",
                    }}
                />
                <Chip
                    label="Magenta-600"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.600",
                    }}
                />
                <Chip
                    label="Magenta-700"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.700",
                    }}
                />
                <Chip
                    label="Magenta-800"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.800",
                    }}
                />
                <Chip
                    label="Magenta-900"
                    sx={{
                        width: "110px",
                        bgcolor: "magenta.900",
                    }}
                />
            </Stack>
        </>
    );
}

export default Magenta;
