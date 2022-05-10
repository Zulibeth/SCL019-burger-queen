import { React,  Fragment } from "react";
import data from "../data.json";
import { Button } from "@mui/material";


const Meals = () => {
    const listOfMeals = data.meals;
    return(
        <div>
            {
                listOfMeals.map((item) => 
                <Fragment key={item.id}>
                   <Button variant="contained" size="small">
                      {item.item}
                     ${item.precio}
                   </Button>
                </Fragment> 
                )
            }
        </div>
    )
}

export default Meals 