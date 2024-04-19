import { Tour } from "./interface"
import { faker } from '@faker-js/faker';

export const tour = {

    name: createRandomTour().name,
    duration: createRandomTour().duration,
    maxGroupSize: createRandomTour().maxGroupSize,
    difficulty:createRandomTour().difficulty,
    price: createRandomTour().price,
    summary:createRandomTour().summary.trim(),
    describtion: createRandomTour().description,
    //images:createRandomTour().images,
    imageCover: createRandomTour().imageCover,
    startLocation:{
        
        coordinates:createRandomTour().startLocation
       
    }
}

export function createRandomTour(): Tour{
    const array = ['easy', 'medium', 'difficult'];
    const diffElement=array[Math.floor( Math.random()* 3)]


return {

name:faker.lorem.words(3)+" Tour",
duration: faker.number.int({min:1, max:5}),
maxGroupSize: faker.number.int({min:1, max:10}),
difficulty:diffElement,
ratingsAverage: faker.number.int({min:1,max:5}),
rating: faker.number.int({min:1,max:5}),
price: faker.number.int({min:50,max:1200}), 
summary: "Test tour "+faker.lorem.sentence({min:2,max:7}),
description: faker.lorem.sentence({min:1,max:2}),
imageCover: "tour-"+faker.number.int({min:1, max:5})+"-cover.jpg",
createdAt:faker.date.recent({days:5}),
startDates:faker.date.soon({days:5}),
startLocation: //faker.location.nearbyGPSCoordinate()

     //"coordinates"
     [-78.005974*Math.random()*2,40.071276400*Math.random()*2]
}
}
export const Neg1_noName=
{

    duration: tour.duration,
    maxGroupSize: tour.maxGroupSize,
    difficulty: tour.difficulty,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: {

        coordinates: createRandomTour().startLocation
    }
}

export const Neg2_longName=
{
    name: "ksnafsajfbasfbahsbfjahsbfjhsdbfsjhdfbsdhfbs",
    duration: tour.duration,
    maxGroupSize: tour.maxGroupSize,
    difficulty: tour.difficulty,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: { coordinates: createRandomTour().startLocation }

}

export const Neg3_shortName=
{
    name: "ksna",
    duration: tour.duration,
    maxGroupSize: tour.maxGroupSize,
    difficulty: tour.difficulty,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: { coordinates: createRandomTour().startLocation }

}

export const Neg4_noDuration=
{
    name: faker.lorem.words(3),
    
    maxGroupSize: tour.maxGroupSize,
    difficulty: tour.difficulty,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: { coordinates: createRandomTour().startLocation }

}

export const Neg5_noMaxGroupSize=
{
    name: faker.lorem.words(3),
    duration: tour.duration,
    maxGroupSize: "100",
    difficulty: tour.difficulty,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: { coordinates: createRandomTour().startLocation }


}
export const Neg6_noDifficulty=
{
    name: faker.lorem.words(3),
    duration: tour.duration,
    maxGroupSize: 10,
    difficulty: 10,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: { coordinates: createRandomTour().startLocation }


}
export const Neg7_noDifficulty_Empty=
{
    name: faker.lorem.words(3),
    duration: tour.duration,
    maxGroupSize: 10,
   
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: { coordinates: createRandomTour().startLocation }


}
export const Neg8_noSummary_Empty=
{
    name: faker.lorem.words(3),
    duration: tour.duration,
    maxGroupSize: tour.maxGroupSize,
    difficulty: tour.difficulty,
    price: tour.price,
   // summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: {

        coordinates: createRandomTour().startLocation
    }  


}

export const tour1=
{
    name: faker.lorem.words(3),
    duration: tour.duration,
    maxGroupSize: tour.maxGroupSize,
    difficulty: tour.difficulty,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: {

        coordinates: createRandomTour().startLocation
    }  


}


export let PosTour=
{
    name: faker.lorem.words(3),
    duration: tour.duration,
    maxGroupSize: tour.maxGroupSize,
    difficulty: tour.difficulty,
    price: tour.price,
    summary: tour.summary.trim(),
    describtion: tour.imageCover,
    imageCover: tour.imageCover,
    startLocation: {

        coordinates: createRandomTour().startLocation
    }  


}

