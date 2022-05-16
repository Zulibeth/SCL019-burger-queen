import React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";



const Home = () => {
    return(
        
       <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/order">
                    <Button variant="contained" size="large" color="primary">
                        Order
                    </Button>
                </Link>

                <Link to="/kitchen">
                    <Button variant="contained" size="large" color="secondary">
                        Kitchen
                    </Button>
                </Link>
            </Box>

        </Box>
            
    
    )
}

export default Home