import React from "react";
import { Paper, Button } from "@mui/material";


const TakeOrder = (props) => {

   const {cartItems, onAdd, onRemove} = props;
    return (
        <div>
            <Paper elevation={3}>
            Take Order 

            <div>
                {cartItems.length === 0 && <div> No Order Yet </div>}
            </div>
            <div>
                {cartItems.map((item) =>(
                    <div key={item.id}>
                        <div>{item.item}</div>

                        <div>
                            <button onClick={() => onAdd(item)}>+</button>
                            <button onClick={() => onRemove(item)}>-</button>
                        </div>

                        <div>
                            {item.qty} x ${item.precio.toFixed(2)}
                        </div>
                    </div>

                ))}
            </div>
            </Paper>



            <Button variant="contained" size="small" color="success">Send to <br/> Kitcken</Button>
        </div>
        
    )
}

export default TakeOrder