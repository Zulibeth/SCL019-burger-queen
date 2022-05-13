import { React, Fragment } from "react";
import data from "../data.json"
import Button from '@mui/material/Button';



const MenuBreakfast = () =>{
    const listOfBreakfast = data.breakFast;
  
    return(
        <div>
            {
                listOfBreakfast.map((item) =>
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

export default MenuBreakfast