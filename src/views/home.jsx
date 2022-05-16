import React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import BurgerD3 from '../assets/img/BurgerD3.png';



const Home = () => {
    return(
        
       <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: {sm:700 }, flexDirection: 'column' }}>

            <Box sx={{ display: 'flex', justifyContent:"flex-end", my:2}}>
                <Link to="/order">
                    <Button variant="contained" size="large" color="primary" sx={{ width:200 }}>
                        Order
                    </Button>
                </Link>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent:"flex-end", my:2}}>
                <Link to="/kitchen">
                    <Button variant="contained" size="large" color="secondary" sx={{ width:200 }}>
                        Kitchen
                    </Button>
                </Link>
            </Box>
            <Box component="footer" sx={{ mt:8}}>
            <img src={BurgerD3} alt="logo"></img>
            </Box>
        </Box>
            
       
    )
}

export default Home