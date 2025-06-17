import type { MenuProps } from "../../hooks/menu";
import { Box } from "@mui/material";
import { Dish } from "../Dish/Dish";
import { Fragment } from "react/jsx-runtime";

export function DishesList({dishes,drinks}: MenuProps){
    const appetizers = dishes.filter((dish)=>dish.type==='Appetizer')
    const mainCourses = dishes.filter((dish)=>dish.type==='Main Course')
    const desserts = dishes.filter((dish)=>dish.type==='Dessert')
    const dishesDividedBycategory = [
      { type: "APPETIZERS", dishes: appetizers },
      { type: "MAIN COURSES", dishes: mainCourses },
      { type: "DESSERTS", dishes: desserts },
    ];

    return (
      <div>
        {dishesDividedBycategory.map((dishType) =>
            <Box key={dishType.type}>
                <h2>{dishType.type}</h2>
                <br />
                {dishType.dishes.map((dish) => (
                    <Fragment key={dish.name}>
                        <Dish dish={dish} />
                        <br />
                    </Fragment>
                ))}
            </Box>
        )}
        </div>
    )
}