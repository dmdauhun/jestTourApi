import * as supertest from "supertest";
import { user } from "./user";
import { createRandomTour, tour } from "./tour";
const request = supertest("localhost:8001/api/v1");
//import{cookie} from '/Specs/tours/tour/createTour.specs.ts'
const requestSDET = supertest("https://practice-react.sdetunicorns.com/api/test");


export async function deleteFunction(cookie: [x: string]): Promise<any> {

    return await request
        .delete('/users/deleteMe')
        .set('Cookie', cookie)


}



export async function loginFunction(user: { email: string, password: string }): Promise<any> {

    return await request
        .post('/users/login')
        .send({
            email: user.email,
            password: user.password
        })
}

export async function signUp(user: string | object | undefined): Promise<any> {

    return await request
        .post('/users/signup')
        .send(user)
}

export async function upload(files: string[]): Promise<any> {
    const req = requestSDET

        .post('/upload/multiple')

    files.forEach(file => {
        req.attach('multiple', file)
    })
    return req
}

 export async function createTourFunction(cookie: string[],tour: string | object | undefined): Promise<any> {

     return await request
        .post('/tours')
         .set('Cookie', cookie)//authorization
          .send(tour)
}

