import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import Typography from "@mui/material/Typography";
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
                <Box
                    sx={{
                        backgroundColor: "violet.700",
                        width: 500,
                        height: 250,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Box sx={{ width: "400px", height: "60px" }}>
                        <CustomBtton
                            variant="signUpOutlined"
                            colorStyle="violet"
                            shadow={0}
                            disabled={false}
                            isLoading={false}
                            loadingIconSize={24}
                        >
                            <Typography variant="Body16">Sign Up</Typography>
                        </CustomBtton>
                    </Box>

                    <Box sx={{ width: "400px", height: "60px" }}>
                        <CustomBtton
                            variant="signInContained"
                            colorStyle="violet"
                            shadow={0}
                            disabled={false}
                            isLoading={false}
                            loadingIconSize={24}
                        >
                            <Typography variant="Body16">Sigh In</Typography>
                        </CustomBtton>
                    </Box>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="text"
                        colorStyle="violet"
                        shadow={0}
                        gap="32px"
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                        onClick={() => console.log("click")}
                    >
                        <Typography variant="Body16">Text</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="text"
                        colorStyle="violet"
                        shadow={0}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Text</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        colorStyle="violet"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Outlined</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        colorStyle="violet"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Outlined</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "32px", height: "32px" }}>
                    <CustomBtton
                        variant="text"
                        colorStyle="violet"
                        shadow={2}
                        startIcon={
                            <LinkIcon
                                sx={{ width: "25.6px", height: "25.6px" }}
                            />
                        }
                        // startIconSize={24}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                        sx={{
                            backgroundColor: "violet.100",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "violet.400",
                            borderRadius: "4px",
                        }}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="outlined"
                        colorStyle="violet"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={32}
                    >
                        <Typography variant="Body16">Loading</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="violet"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Contained</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "56px", height: "48px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="violet"
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Add</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "86px", height: "48px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="violet"
                        gap="2px"
                        startIcon={<ArrowUpwardIcon />}
                        // startIconSize={18}
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Send</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="violet"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Contained</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "32px", height: "32px" }}>
                    <CustomBtton
                        variant="text"
                        colorStyle="violet"
                        startIcon={<CopyIcon />}
                        // startIconSize={24}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                        sx={{
                            backgroundColor: "violet.100",
                            borderRadius: "4px",
                        }}
                    />
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="violet"
                        shadow={2}
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Loading</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="magenta"
                        shadow={0}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Magenta</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="magenta"
                        shadow={0}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Magenta</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="contained"
                        colorStyle="magenta"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Magenta</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyOutlined"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Grey</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyOutlined"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Grey</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyOutlined"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Grey</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "298px", height: "40px" }}>
                    <CustomBtton
                        variant="greyOutlined"
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Back</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyContained"
                        shadow={2}
                        disabled={false}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Grey</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyContained"
                        shadow={2}
                        disabled={true}
                        isLoading={false}
                        loadingIconSize={24}
                    >
                        <Typography variant="Body16">Grey</Typography>
                    </CustomBtton>
                </Box>

                <Box sx={{ width: "400px", height: "60px" }}>
                    <CustomBtton
                        variant="greyContained"
                        disabled={false}
                        isLoading={true}
                        loadingIconSize={32}
                    >
                        <Typography variant="Body16">Grey</Typography>
                    </CustomBtton>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default DisplayBtton;
