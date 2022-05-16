
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Container, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Home from "./views/home"
import Order from "./views/order";
import Kitchen from "./views/kitchen";

function App() {
  return (
    <BrowserRouter>
      <Container >
      <Box sx={{ display: 'flex', minHeight: '100vh'  }}>
        
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
        
        
        </Box>
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
