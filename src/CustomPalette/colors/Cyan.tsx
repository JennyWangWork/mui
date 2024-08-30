import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "@mui/material/styles/createPalette";

function Cyan() {
    // const theme = useTheme();

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={{ width: "80px", textAlign: "left" }}>Cyan</Box>
                <Chip
                    label="Cyan-50"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.50",
                    }}
                />
                <Chip
                    label="Cyan-100"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.100",
                    }}
                />
                <Chip
                    label="Cyan-200"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.200",
                    }}
                />
                <Chip
                    label="Cyan-300"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.300",
                    }}
                />
                <Chip
                    label="Cyan-400"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.400",
                    }}
                />
                <Chip
                    label="Cyan-500"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.500",
                    }}
                />
                <Chip
                    label="Cyan-600"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.600",
                    }}
                />
                <Chip
                    label="Cyan-700"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.700",
                    }}
                />
                <Chip
                    label="Cyan-800"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.800",
                    }}
                />
                <Chip
                    label="Cyan-900"
                    sx={{
                        width: "110px",
                        bgcolor: "cyan.900",
                    }}
                />
            </Stack>
        </>
    );
}

export default Cyan;
