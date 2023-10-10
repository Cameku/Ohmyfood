

export type RestaurantType = {
    id: number;
    restImage: string;
    name: string;
    location: string;
    menus: MenuType[];
}

export type MenuType = {
name: string;
description: string;
price: number;
type: string;
}