import React, { useState } from "react";
import MenuBreakfast from "./breakfast";
import Meals from "./meals";
import Drinks from "./drinks";
import { Button, Container, Grid } from "@mui/material";

const MenuSelected = () => {

    const [ menu, setMenu] = useState("breakfast");


    return(
        <Container>
            <Grid container>
                <Grid item  >
                <Button variant={ menu === "breakfast" ? "contained" : "outlined"} size="small" onClick={()=>setMenu("breakfast")}>Break-Fast</Button>
                <Button variant={menu !== "breakfast" ? "contained" : "outlined"} size="small" onClick={()=>setMenu("meals")}>Meal's</Button>
                </Grid>
            </Grid>
            
            <Grid container rowspacing={1}>
                <Grid item xs={6} md={6}>
                    {menu === "breakfast" && <MenuBreakfast />}
                    {menu !== "breakfast" && <Meals />}
                </Grid>
            </Grid>

           
          
            <Button variant="contained" size="small">Drink's</Button>
            <Grid container>
                <Grid item xs={6} md={6}>
                <Drinks />
                </Grid>
            </Grid>
            
            
        </Container>
    )
}

export default MenuSelected