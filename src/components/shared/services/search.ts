import { Item } from "@prisma/client";
import { axiosInstance } from "./AxiosInstance"

export const search = async(query:string): Promise<Item[]> => {
    const {data} = await axiosInstance.get<Item[]>('items/search', {params: {query}});
    return data;
}