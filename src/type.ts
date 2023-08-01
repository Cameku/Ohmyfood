

export type RestaurantType = {
    id: number;
    restImage: string;
    name: string;
    location: string;
    menus: Menu[];
}

export type Menu = {
name: string;
description: string;
price: number;
type: string;
}