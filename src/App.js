
import React from "react";
import MenuBreakfast from "./components/breakfast";
import Drinks from "./components/drinks";
import Meals from "./components/meals";
import { Button, IconButton, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

// const MenuSelected = () => {
//   return(
//     <Meals />
//   )
// }

function App() {
  return (
    <div>
      <h1>Order</h1>
      <IconButton variant="contained" size="small" color="primary"> <HomeIcon></HomeIcon></IconButton>
      <br />
      <Button variant="contained" size="small">Break-Fast</Button>
      <Button variant="outlined" size="small" >Meal's</Button>
      <MenuBreakfast />
      <br></br>
      
      <Meals /> 
      <br></br>
      <Button variant="contained" size="small">Drink's</Button>
      <Drinks />
      <br />
      <Paper elevation={3} square="true">
        Take Order 
      </Paper>
      <br/>
      <Button variant="contained" size="small" color="success">Send to <br/> Kitcken</Button>
    </div>
  );
}

export default App;
