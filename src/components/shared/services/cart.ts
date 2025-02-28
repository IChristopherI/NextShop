import { axiosInstance } from "./AxiosInstance";
import { CartDTO, CreateCartItem } from "./Cart_dto";

export const getCart = async (): Promise<CartDTO> => {
   const {data} =  await axiosInstance.get<CartDTO>('/cart');
   return data;
  };

export const updateCartItemQuantity = async (itemId:number, quantity:number): Promise<CartDTO> =>{
const {data} = await axiosInstance.patch<CartDTO>(`/cart/${itemId}`,  {quantity});
return data;

}

export const deleteCartItem = async (id:number):Promise<CartDTO> =>{
const {data} = await axiosInstance.delete<CartDTO>(`/cart/` + id);
return data;

}


export const addCartItem = async (values:CreateCartItem): Promise<CartDTO> => {
  const {data} = await axiosInstance.post<CartDTO>(`/cart`, values);
  return data;
}