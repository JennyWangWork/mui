import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "@mui/material/styles/createPalette";
import Body from "./texts/Body";
import Display from "./texts/Display";
import Headline from "./texts/Headline";
import LabelAndButton from "./texts/LabelAndButton";

function ForTexts() {
    // const theme = useTheme();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
            <Typography variant="B36">Texts</Typography>

            <Box
                sx={{ display: "flex", flexDirection: "column", gap: 5, mb: 4 }}
            >
                <Display />
                <Headline />
                <LabelAndButton />
                <Body />
            </Box>
        </Box>
    );
}

export default ForTexts;
