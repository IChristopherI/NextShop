import { CartDTO } from "@/src/lib/get-cart-detail";
import { axiosInstance } from "./AxiosInstance";
import { CreateCartItem } from "./Cart_dto";

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


export const addCartItem = async (values:CreateCartItem): Promise<CartDTO> => {
  const {data} = await axiosInstance.post<CartDTO>(`/cart`, values);
  return data;
}