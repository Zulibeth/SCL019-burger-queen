import React from "react";
import { Paper, Button } from "@mui/material";

const TakeOrder = () => {

    return (
        <div>
            <Paper elevation={3}>
            Take Order 
            </Paper>

            <Button variant="contained" size="small" color="success">Send to <br/> Kitcken</Button>
        </div>
        
    )
}

export default TakeOrder