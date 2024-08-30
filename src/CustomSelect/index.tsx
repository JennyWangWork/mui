import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const selectTheme = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                select: {
                    padding: "0 12px",
                    // textAlign: "center",
                    // color: "#FFFFFF",
                },
                icon: {
                    top: "50%",
                    transform: "translateY(-50%)",
                },
                root: {
                    paddingBottom: 0,
                    // "&.Mui-disabled": {
                    //     backgroundColor: "#c7cad1",
                    // },
                },
            },
            defaultProps: {
                MenuProps: {
                    PaperProps: {
                        sx: {
                            "& .MuiMenuItem-root": {
                                padding: "0 12px",
                            },
                        },
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    padding: 0,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-input": {
                        padding: "12px 16px",
                    },
                    "& .MuiOutlinedInput-root": {
                        padding: "0",
                    },
                },
            },
        },
    },
});

function CustomSelect() {
    const [age, setAge] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <ThemeProvider theme={selectTheme}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </ThemeProvider>
    );
}

export default CustomSelect;
