
export interface DishesType{
    name : string
    description: string
    price: number
    vegetarian: boolean
    type: string
    img : string
}

export interface DrinksType{
    name : string;
    description: string;
    price: number;
    alcoholic: boolean;
    img : string
}

export interface MenuProps{
    dishes : DishesType[]
    drinks: DrinksType[] 
}

export interface dishProps{
    dish : DishesType
}