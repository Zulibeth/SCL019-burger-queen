
import React from "react";
// import MenuBreakfast from "./components/breakfast";
// import Drinks from "./components/drinks";
// import Meals from "./components/meals";
import MenuSelected from "./components/menu";
import { Button, Container, IconButton, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

// const MenuSelected = () => {
//   return(
//     <Meals />
//   )
// }

function App() {
  return (
    <Container>
      <IconButton variant="contained" color="primary"> <HomeIcon fontSize="large"></HomeIcon></IconButton>
      <h1>Order</h1>
      
      <br />
     
      <MenuSelected />

      <br />
      <Paper elevation={3}>
        Take Order 
      </Paper>
      <br/>
      <Button variant="contained" size="small" color="success">Send to <br/> Kitcken</Button>
    </Container>

    
  );
}

export default App;
