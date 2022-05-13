import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <div>
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
            
        </div>
    )
}

export default Home