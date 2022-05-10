import { React, Fragment } from "react";
import data from "../data.json"
import Button from '@mui/material/Button';



const MenuBreakfast = () =>{
    const listOfBreakfast = data.breakFast;
  
    return(
        <div>
            {
                listOfBreakfast.map((item) =>
                    <Fragment key={item.id}>
                      <Button variant="contained" size="small">
                          {item.item} 
                         ${item.precio}
                      </Button>
                    </Fragment>
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