export enum CategoryEnum {
    services = 'Services',
    foodandbeverage = 'Food and Beverage',
    fashion = 'Fashion',
    crafts = 'Crafts',
    experiences = 'Experiences',
}

export enum ModeEnum {
    physical = 'Physical',
    online = 'Online Order',
    both = 'Physical, Online Order',
}

export interface Business {
    id: number
    name: string
    category: CategoryEnum
    description: string
    location: string
    mode: ModeEnum
    socialmedia: {
        facebook: string
        instagram: string
        website: string
        phone: string
    }
    products: string
    pricerange: number
    // ratings: number
    reviews: string
    // photos: string[] (see how)
}
