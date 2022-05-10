import { React, Fragment } from "react";
import data from "../data.json";
import Button from '@mui/material/Button';


const Drinks = () => {
    const listOfDrinks = data.drinks;
    return(
        <div>
            {
                listOfDrinks.map((item) =>
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

export default Drinks