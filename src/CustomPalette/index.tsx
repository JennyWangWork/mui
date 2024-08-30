import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import customTheme from "./customTheme";
import ForColors from "./ForColors";
import ForTexts from "./ForTexts";

function CustomPalette() {
    return (
        <ThemeProvider theme={customTheme}>
            <ForColors />
            <ForTexts />
            <Box sx={{ color: grey[500] }}>For Test</Box>
        </ThemeProvider>
    );
}

export default CustomPalette;
