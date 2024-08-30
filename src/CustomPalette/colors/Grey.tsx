import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "@mui/material/styles/createPalette";

function Grey() {
    // const theme = useTheme();

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={{ width: "80px", textAlign: "left" }}>Grey</Box>
                <Chip
                    label="Grey-50"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.50",
                    }}
                />
                <Chip
                    label="Grey-100"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.100",
                    }}
                />
                <Chip
                    label="Grey-200"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.200",
                    }}
                />
                <Chip
                    label="Grey-300"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.300",
                    }}
                />
                <Chip
                    label="Grey-400"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.400",
                    }}
                />
                <Chip
                    label="Grey-500"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.500",
                    }}
                />
                <Chip
                    label="Grey-600"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.600",
                    }}
                />
                <Chip
                    label="Grey-700"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.700",
                    }}
                />
                <Chip
                    label="Grey-800"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.800",
                    }}
                />
                <Chip
                    label="Grey-900"
                    sx={{
                        width: "110px",
                        bgcolor: "grey.900",
                    }}
                />
            </Stack>
        </>
    );
}

export default Grey;
