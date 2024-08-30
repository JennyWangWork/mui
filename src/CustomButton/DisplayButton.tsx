import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import CustomBtton from ".";
import customTheme from "../CustomPalette/customTheme";
import arrowUpward from "../assets/arrowUpward.svg";

function DisplayBtton() {
    const id: number = 12;

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="text"
                        text="Send"
                        textStyle="Body16"
                        colorStyle="cyan"
                        borderRadius="188px"
                        shadow={3}
                        startIcon={arrowUpward}
                        startIconSize={20}
                        // endIcon={<AccessAlarmsIcon />}
                        // endIconSize={200}
                        disabled={id === 1}
                        loading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Button variant="contained">123</Button>
            </Box>
        </ThemeProvider>
    );
}

export default DisplayBtton;
