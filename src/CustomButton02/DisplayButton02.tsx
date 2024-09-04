import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import CustomBtton from ".";
import { ArrowUpwardIcon } from "../assets/ArrowUpwardIcon";
import { CopyIcon } from "../assets/CopyIcon";
import { LinkIcon } from "../assets/LinkIcon";
import customTheme from "../CustomPalette/customTheme";

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

                <Box sx={{ width: "32px", height: "32px" }}>
                    <CustomBtton
                        variant="text"
                        textStyle="Body14"
                        colorStyle="violet"
                        backgroundColor="violet.100"
                        borderColor="violet.400"
                        borderRadius="4px"
                        shadow={2}
                        startIcon={
                            <LinkIcon
                                sx={{ width: "25.6px", height: "25.6px" }}
                            />
                        }
                        // startIconSize={24}
                        disabled={false}
                        isLoading={false}
                        onClick={() => console.log("click")}
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
                        startIcon={<ArrowUpwardIcon />}
                        // startIconSize={18}
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

                <Box sx={{ width: "32px", height: "32px" }}>
                    <CustomBtton
                        variant="text"
                        textStyle="Body14"
                        colorStyle="violet"
                        backgroundColor="violet.100"
                        borderRadius="4px"
                        startIcon={<CopyIcon />}
                        // startIconSize={24}
                        disabled={false}
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
                        variant="greyOutlined"
                        text="Grey"
                        textStyle="Body14"
                        borderRadius="8px"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyOutlined"
                        text="Grey"
                        textStyle="Body14"
                        borderRadius="8px"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyOutlined"
                        text="Grey"
                        textStyle="Body14"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "298px", height: "40px" }}>
                    <CustomBtton
                        variant="greyOutlined"
                        text="Back"
                        textStyle="Body16"
                        borderRadius="8px"
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyContained"
                        text="Grey"
                        textStyle="Body14"
                        borderRadius="8px"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyContained"
                        text="Grey"
                        textStyle="Body14"
                        borderRadius="8px"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyContained"
                        text="Grey"
                        textStyle="Body14"
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
