import { IProduct } from "./IProduct";

export class Product implements IProduct {
    id: number;    
    name: string;
    code: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageURL: string;
}