import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "@mui/material/styles/createPalette";

function Teal() {
    // const theme = useTheme();

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={{ width: "80px", textAlign: "left" }}>Teal</Box>
                <Chip
                    label="Teal-50"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.50",
                    }}
                />
                <Chip
                    label="Teal-100"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.100",
                    }}
                />
                <Chip
                    label="Teal-200"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.200",
                    }}
                />
                <Chip
                    label="Teal-300"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.300",
                    }}
                />
                <Chip
                    label="Teal-400"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.400",
                    }}
                />
                <Chip
                    label="Teal-500"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.500",
                    }}
                />
                <Chip
                    label="Teal-600"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.600",
                    }}
                />
                <Chip
                    label="Teal-700"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.700",
                    }}
                />
                <Chip
                    label="Teal-800"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.800",
                    }}
                />
                <Chip
                    label="Teal-900"
                    sx={{
                        width: "110px",
                        bgcolor: "teal.900",
                    }}
                />
            </Stack>
        </>
    );
}

export default Teal;
