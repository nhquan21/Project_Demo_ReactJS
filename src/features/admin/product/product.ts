import type { CategoryResponse } from "../category/category";

export interface CreatedProduct{
    publicId: string
}
export interface DisplayCardProduct {
  name: string,
  quantity: number;
  warranty: number;
  power: number;
  price: number,
  size: string;      
  image: string,
  material: string;
  publicId: string;  
  createdDate: string;
}
export interface DisplayListingProduct {
  name: string;
  price: number;          
  quantity: number;
  productType: string;
  warranty: number;
  power: number;
  size: SizeType;
  image: string,
  material: string;
  category: CategoryResponse;
  publicId: string;
  createdDate: string; 
}
export interface SavedProduct{
    name: string;
    price: number; 
    quantity: number;
    productType: string;
    warranty: number;
    power: number;
    image: FileList,
    size: SizeType;
    material: string;
    categoryId: string;
}
export enum SizeType {
    RAM_4GB = 'RAM_4GB',
    RAM_8GB = 'RAM_8GB',
    RAM_16GB = 'RAM_16GB',
    RAM_32GB = 'RAM_32GB',
    RAM_64GB = 'RAM_64GB'
}