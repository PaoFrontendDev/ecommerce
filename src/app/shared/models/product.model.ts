import { Category } from "./category.model";

export interface Product {
	id: string
	name: string
	description: string
	price: number
	isFeatures: boolean,
	category: Category[],
	imageUrl: string

}