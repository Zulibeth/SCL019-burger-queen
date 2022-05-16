import { React,  Fragment } from "react";
import data from "../data.json";
import { Button } from "@mui/material";


const Meals = (props) => {
    const listOfMeals = data.meals;

    const {onAdd} = props;
    return(
        <div>
            {
                listOfMeals.map((item) => 
                <Fragment key={item.id}>
                   <Button onClick={() => onAdd(item)} variant="contained" size="small" sx={{ width:140, height: 50, m:0.5 }}>
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