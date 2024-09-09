import Grid from "@mui/material/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayBtton from "./CustomButton/DisplayButton";
import DisplayBtton02 from "./CustomButton02/DisplayButton02";
import DisplayBtton03 from "./CustomButton03/DisplayButton03";
import CustomPalette from "./CustomPalette";
import HomePage from "./HomePage";

function App() {
    return (
        <BrowserRouter>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/palette" element={<CustomPalette />} />
                        <Route path="/button" element={<DisplayBtton />} />
                        <Route path="/button02" element={<DisplayBtton02 />} />
                        <Route path="/button03" element={<DisplayBtton03 />} />
                    </Routes>
                </Grid>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
