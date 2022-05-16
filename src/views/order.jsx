import React, { useState } from "react";
import MenuSelected from "../components/menu";
import TakeOrder from "../components/takeOrder";
import { Container, Grid } from "@mui/material";
// import data from "../data.json"


const Order = () => {
    
    const [cartItems, setCartItems] = useState([]);

    //Agregar productos a la orden
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist){
            setCartItems(
                cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1 }: x)
            );
        }else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    //Quitar productos de la orden

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        }else{
            setCartItems(
                cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1 }: x)
            );
        }
    }

    return(
        <Container>
            <Grid container >
                <h1>Order</h1>
                
                <MenuSelected onAdd={onAdd} />

                <TakeOrder onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            </Grid>
        </Container>
       
    )
}

export default Order