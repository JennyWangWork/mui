import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./App.css";
import CustomSelect from "./CustomSelect";
import FormControlWords from "./FormControlWords";
import { bytesCounter } from "./functions/byteCounter";

function HomePage() {
    const [byteValue, setByteValue] = useState("");
    const [byte, setByte] = useState(0);

    const handleByte = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setByteValue(e.target.value);

        const byteResult = bytesCounter(e.target.value);
        setByte(byteResult);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CustomSelect />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    value={byteValue}
                    onChange={(e) => handleByte(e)}
                ></TextField>
                <Typography>byte:{byte}</Typography>
            </Grid>

            <Grid item xs={12}>
                <FormControlWords />
            </Grid>
        </Grid>
    );
}

export default HomePage;
