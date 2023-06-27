import { Category } from "./category.model";

export interface Product {
    id: string
	productName : string
    description : string
	price: number
	isFeatures: boolean,
	category: Category[]
}