import { React, Fragment } from "react";
import data from "../data.json";
import Button from '@mui/material/Button';


const Drinks = (props) => {
    const listOfDrinks = data.drinks;

    const {onAdd} = props;
    return(
        <div>
            {
                listOfDrinks.map((item) =>
                <Fragment key={item.id}> 
                  <Button onClick={() => onAdd(item)} variant="contained" size="small">
                  <span>{item.item}</span>
                  <span>${item.precio}</span>
                  </Button>
                </Fragment>
                )
            }
        </div>
    )
}

export default Drinks