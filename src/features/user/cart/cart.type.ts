export interface CartItem {
  publicId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};

export type OrderItemRequest = {
  orderId:string,
  productId:string,
  quantity:number,
  priceAtPurchase:number
}

export type CartRequest = {
  customerId: string,
  totalAmount: number,
  items:OrderItemRequest[]

}
