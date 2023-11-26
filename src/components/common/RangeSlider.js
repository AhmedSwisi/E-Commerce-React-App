import { Box, Typography, Slider, Button} from "@mui/material";
import React, {useState} from "react";


const RangeSlider = ({currentRange, setCurrentRange}) => {
    
    const handleSliderChange = (event, newValue) => (setCurrentRange(newValue))
    
    return (
        <Box display={"flex"} flexDirection={"column"} sx={{ width: 300 }} gap={"10px"}>
            <Slider
                min={0}
                max={1500}
                value={currentRange}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
            />
            <Typography variant="credits">Price: ${currentRange[0]} - ${currentRange[1]}</Typography>
    </Box>
    )
}

export default RangeSlider