import React, { useState } from "react";
import MenuBreakfast from "./breakfast";
import Meals from "./meals";
import Drinks from "./drinks";
import { Button, Container, Grid, Box } from "@mui/material";

const MenuSelected = (props) => {

    const [ menu, setMenu] = useState("breakfast");
    const {onAdd} = props;


    return(
        <Container>
            <Grid container>
                <Box my={2}>
                <Button variant={ menu === "breakfast" ? "contained" : "outlined"} size="small" onClick={()=>setMenu("breakfast")}>Break-Fast</Button>
                <Button variant={menu !== "breakfast" ? "contained" : "outlined"} size="small" onClick={()=>setMenu("meals")}>Meal's</Button>
                </Box>
            </Grid>
            
            <Grid container>
                <Box my={2}>
                    <Grid item xs={8} md={8}>
                        {menu === "breakfast" && <MenuBreakfast onAdd={onAdd} />}
                        {menu !== "breakfast" && <Meals onAdd={onAdd}/>}
                    </Grid>
                </Box>
            </Grid>

           
          
            <Button variant="contained" size="small">Drink's</Button>
            <Grid container>
                <Box my={2}>
                    <Grid item sm={8} >
                    <Drinks onAdd={onAdd} />
                    </Grid>
                </Box>
            </Grid>
            
            
        </Container>
    )
}

export default MenuSelected