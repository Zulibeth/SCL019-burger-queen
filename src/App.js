
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Container, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Home from "./views/home"
import Order from "./views/order";
import Kitchen from "./views/kitchen";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Link to="/">
          <IconButton variant="contained" color="primary"> 
            <HomeIcon fontSize="large"></HomeIcon>
          </IconButton>
        </Link>
        
        
        <Routes>

          
          <Route path="/order" element={<Order />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
        
        
      
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
