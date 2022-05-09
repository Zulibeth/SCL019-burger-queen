import React from "react";
import data from "../data.json";
import { Button, Grid } from "@mui/material";

const Meals = () => {
    const listOfMeals = data.meals;
    return(
        <div>
            {
                listOfMeals.map((item) => 
                <Grid item>
                    <Button variant="contained" size="small">
                    {item.item}<br />
                    {item.price}
                    </Button>
                </Grid>
                )
            }
        </div>
    )
}

export default Meals 