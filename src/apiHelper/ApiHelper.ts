import { RestaurantType } from "../type";


export class ApiHelper {
  getApiData = async (): Promise<RestaurantType[]> => {
   const response = await fetch("http://localhost:3000/restaurants"); 
   const data = response.json();
   return await data;
  }
}