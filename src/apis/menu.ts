import axios, { type AxiosResponse } from "axios"
import type { DishesType,DrinksType } from "../hooks/menu"


const BASE_URL:string = import.meta.env.VITE_API_BASE_URL



const instance = axios.create({
    baseURL : `${BASE_URL}`,
    timeout : 5000,
    headers :{'Content-Type' : 'application/json'}
})

export async function getDishes(): Promise<DishesType[]>{
    const response : AxiosResponse<DishesType[]>= await instance.get(`${BASE_URL}Dishes`)
    const dishes : DishesType[] = response.data
   return dishes
}

export async function getDrinks(): Promise<DrinksType[]>{
    const response = await instance.get(`${BASE_URL}Drinks`)
   return response.data
}