export interface User{

    userId: string
    username: string
    email: string
    avatar?: string
    password: string
    birthdate?: Date
    registeredAt?: Date
  
}

export interface Tour{

    name:string,
    slug?:string;
        duration:number,
        description:string,
        maxGroupSize:number,
        summary: string,
        difficulty:string,
        price:number,
        rating?:number,
        ratingsAverage?:number,
        imageCover: string,
        images?:[string],
        guides?:[],
        createdAt?:Date,
        startDates?:Date,
        secretTour?:boolean,

        location?: {
            latitude:number,
            longitude: number,
            description: string,
            address: string
        },
        startLocation:
       
             number[]
    
}