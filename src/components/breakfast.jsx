import { React, Fragment } from "react";
import data from "../data.json"
import Button from '@mui/material/Button';



const MenuBreakfast = (props) =>{
    const listOfBreakfast = data.breakFast;

    const {onAdd} = props;
  
    return(
        <div>
            {
                listOfBreakfast.map((item) =>
                    <Fragment key={item.id}>
                      <Button onClick={() => onAdd(item)} variant="contained" size="small" >
                          {item.item} 
                         ${item.precio}
                      </Button>
                    </Fragment>
                    )
            }
        </div>
      
    )
    
 
}

export default MenuBreakfast