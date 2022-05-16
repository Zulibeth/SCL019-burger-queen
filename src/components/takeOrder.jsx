import React from "react";
import { Paper, Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box } from "@mui/system";



// const useStyles = makeStyles((theme) => ({
//     root:{
//         "& > *": {
//             margin: theme.spacing(1),
//             width: theme.spacing(32),
//             height: theme.spacing(16),
//             borderRadius: 25
//         }
//     }

// }));

const TakeOrder = (props) => {

   const {cartItems, onAdd, onRemove} = props;
   const totalPrice = cartItems.reduce((a,c) => a + c.precio * c.qty, 0);

//    const classes = useStyles();
    return (
        <div>
            <Paper sx={{ elevation:"3" }} >
            <h3>Take Order </h3>
            <Box sx={{ display: 'inline', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    {cartItems.length === 0 && <div> --- </div>}
                </div>
                <div>
                    {cartItems.map((item) =>(
                        <div key={item.id}>
                            <h4>{item.item}</h4>

                            <div>
                                <IconButton onClick={() => onAdd(item)}><AddCircleOutlineIcon fontSize="small"/></IconButton>
                                <div>
                                {item.qty} x ${item.precio.toFixed(2)}
                                </div>
                                <IconButton onClick={() => onRemove(item)}><RemoveCircleOutlineIcon fontSize="small" /></IconButton>
                            </div>

                            
                        </div>

                    ))}
                </div>
            </Box>
            </Paper>
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div>
                        <div>TOTAL</div>
                        <div>${totalPrice.toFixed(2)}</div>
                    </div>
                </>
            ) }



            <Button variant="contained" size="small" color="success">Send to <br/> Kitcken</Button>
        </div>
        
    )
}

export default TakeOrder