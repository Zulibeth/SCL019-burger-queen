import React from "react";
import data from "../data.json";
import Button from '@mui/material/Button';


const Drinks = () => {
    const listOfDrinks = data.drinks;
    return(
        <div>
            {
                listOfDrinks.map((item) =>
                <Button variant="contained" size="small">
                    {item.item}<br />
                    {item.precio}
                </Button>)
            }
        </div>
    )
}

export default Drinks