import React from "react";
import data from "../data.json"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const MenuBreakfast = () =>{
    const listOfBreakfast = data.breakFast;
    return(
        <div>
            {
                listOfBreakfast.map((item) =>
                    // <p key={item.id}>{item.item} {item.precio}</p>;
                    <Box sx={{width: '100%' }}>
                        <Grid container spacing={2}> 
                        <Grid item>
                                <Button variant="contained" size="small">
                                {item.item} <br/>
                                {item.precio}
                                </Button>
                            </Grid>
                        </Grid>
                           
                    </Box>
                    )
            }
        </div>
      
    )
    
 
    // const desayunos = data.breakFast.name;
    // const listFood = desayunos.map(item =>
    //     <li key={item.id}> {item.name} </li>
    //     );
    //     return (
    //         <ul>{listFood}</ul>
    //     )
    // const {comidas, setComidas} = React.useState([])

    // React.useEffect(() => {
    //     console.log("viendo el menu Break-Fast")
    //     getMenu()
    // })

    // const getMenu = async () => {
    //     const menuData = await data.json()
    //     setComidas(menuData)
    // }
    // const listFood = comidas.map((comida) => (
    //     <li key={comida.id}>{comida.item} - {comida.precio}</li>
    // ));

    // return (
    //     <div>
    //         <button> Break-Fast </button>
    //         <ul>{listFood}</ul>
    //     </div>
    // )

}

export default MenuBreakfast