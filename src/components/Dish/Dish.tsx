import { Box, Button } from "@mui/material";
import type { dishProps } from "../../hooks/menu";
import { useState } from "react";

export function Dish({dish}:dishProps){
    const[isShowingDescription,setIsShowingDescription] = useState(false)
    return(
    <Box sx={{display:"flex",flexDirection:"column",border:1, borderRadius: "16px",backgroundColor:"rgba(223, 226, 231, 0.87)"}}>    
        <Box sx={{display:"flex", flexDirection:"row", border:1, borderRadius: "16px",backgroundColor:"white", borderColor:"rgb(223, 226, 231)"}}>
            <img src="../foodImg/Bruschette.jpg" width="256px" height="256px" style={{ border:1, borderRadius:"16px"}} />
            <Box sx={{display:"flex", flexDirection:"column",alignItems:"start"}}>
                <h2 style={{paddingRight:"30px", paddingLeft:"30px"}}>{dish.name.toUpperCase()}</h2>
                <Box sx={{display:"flex", flexDirection:"column",paddingLeft:"75px", }}>
                    <br />
                    <br />
                    <Button onClick={()=>setIsShowingDescription(!isShowingDescription)}>Ingredients</Button>
                    <br />
                    <br />
                </Box>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <b style={{ display:"flex", flexDirection:"column",marginTop:"5px", paddingLeft:"30px"}}>{"€"+dish.price}</b>
                        <Button sx={{display:"flex", flexDirection:"column",paddingLeft:"175px"}}>Ordina</Button>
                </Box>
            </Box>
        </Box>
        {isShowingDescription && dish.description}
    </Box>
    )
}