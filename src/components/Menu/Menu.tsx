import { LowerBar } from "../LowerBar/LowerBar";
import { UpperBar } from "../UpperBar/UpperBar";
import { getDishes,getDrinks } from "../../apis/menu";
import { useEffect } from "react";
import { create } from "zustand";
import { type DishesType, type DrinksType } from "../../hooks/menu";
import { DishesList } from "../DishesList/DishesList";
import { Box } from "@mui/material";

interface MenuState {
    Dishes : DishesType[];
    Drinks : DrinksType[];
    fetchMenu : ()=>Promise<void>
}

const useMenu = create<MenuState>((set)=>({
    Dishes:[],
    Drinks:[],
    fetchMenu: async()=>{
        const Dishes:DishesType[] = await getDishes()
        console.log(Dishes)
        set({Dishes})
        const Drinks = await getDrinks()
        set({Drinks})
    }
})

)


export function Menu(){
    const menu=useMenu((state)=>state.Dishes)
    const drinks= useMenu((state)=>state.Drinks)
    const fetchMenu = useMenu((state)=>state.fetchMenu)

    useEffect(()=>{
        fetchMenu()
    },[])

    return(
        <Box sx={{ paddingTop:"64px", paddingBottom:"64px"}}>
            <UpperBar />
                <DishesList dishes={menu} drinks={drinks}/>
            <LowerBar />
        </Box>
    )
}