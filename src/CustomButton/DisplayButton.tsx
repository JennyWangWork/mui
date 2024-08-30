import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import CustomBtton from ".";
import IconCopy from ".././assets/IconCopy.svg";
import customTheme from "../CustomPalette/customTheme";
import IconLink from "../assets/IconLink.svg";
import arrowUpward from "../assets/arrowUpward.svg";

function DisplayBtton() {
    return (
        <ThemeProvider theme={customTheme}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                }}
            >
                {/* <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="text"
                        text="Send"
                        textStyle="Body16"
                        colorStyle="cyan"
                        backgroundColor="red"
                        borderRadius="8px"
                        shadow={2}
                        gap=""
                        startIcon={arrowUpward}
                        startIconSize={36}
                        endIcon={IconClose}
                        endIconSize={20}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box> */}

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="text"
                        text="Text"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        shadow={0}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="text"
                        text="Text"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        shadow={0}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        text="Outlined"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        text="Outlined"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "298px", height: "40px" }}>
                    <CustomBtton
                        variant="outlined"
                        text="Back"
                        textStyle="Body16"
                        colorStyle="grey"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "32px", height: "32px" }}>
                    <CustomBtton
                        variant="outlined"
                        textStyle="Body14"
                        colorStyle="violet"
                        backgroundColor="violet.100"
                        borderRadius="4px"
                        startIcon={IconLink}
                        startIconSize={24}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "32px", height: "32px" }}>
                    <CustomBtton
                        variant="text"
                        textStyle="Body14"
                        colorStyle="violet"
                        backgroundColor="violet.100"
                        borderRadius="4px"
                        startIcon={IconCopy}
                        startIconSize={24}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        text="Loading"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={32}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Contained"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "56px", height: "48px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Add"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "86px", height: "48px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Send"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        gap="2px"
                        startIcon={arrowUpward}
                        startIconSize={18}
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Contained"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Loading"
                        textStyle="Body14"
                        colorStyle="violet"
                        borderRadius="8px"
                        shadow={2}
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Magenta"
                        textStyle="Body14"
                        colorStyle="magenta"
                        borderRadius="8px"
                        shadow={0}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Magenta"
                        textStyle="Body14"
                        colorStyle="magenta"
                        borderRadius="8px"
                        shadow={0}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Magenta"
                        textStyle="Body14"
                        colorStyle="magenta"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Grey"
                        textStyle="Body14"
                        colorStyle="grey"
                        borderRadius="8px"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Grey"
                        textStyle="Body14"
                        colorStyle="grey"
                        borderRadius="8px"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        text="Grey"
                        textStyle="Body14"
                        colorStyle="grey"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        text="Grey"
                        textStyle="Body14"
                        colorStyle="grey"
                        borderRadius="8px"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        text="Grey"
                        textStyle="Body14"
                        colorStyle="grey"
                        borderRadius="8px"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        text="Grey"
                        textStyle="Body14"
                        colorStyle="grey"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={32}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default DisplayBtton;
