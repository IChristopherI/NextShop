import { axiosInstance } from "./AxiosInstance";
import { CartDTO } from "@/lib/get-cart-detail";

export const getCart = async (): Promise<CartDTO> => {
   const {data} =  await axiosInstance.get<CartDTO>('/cart');
   return data;
  };

export const updateCartItemQuantity = async (id:number, quantity:number): Promise<CartDTO> =>{
const {data} = await axiosInstance.patch<CartDTO>(`/cart/${id}`,  { quantity }, {params:{quantity}} );
return data;

}

export const deleteCartItem = async (id:number):Promise<CartDTO> =>{
const {data} = await axiosInstance.delete<CartDTO>(`/cart/${id}`);
return data;

}