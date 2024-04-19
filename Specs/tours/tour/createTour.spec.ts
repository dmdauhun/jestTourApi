import * as supertest from "supertest"
const request = supertest("localhost:8001/api/v1");
import { user } from "../../../data/user";
import { tour, createRandomTour, Neg1_noName, Neg2_longName, Neg3_shortName, Neg4_noDuration, Neg5_noMaxGroupSize, Neg6_noDifficulty, Neg7_noDifficulty_Empty, Neg8_noSummary_Empty } from "../../../data/tour";
import { deleteFunction, loginFunction, signUp, createTourFunction} from '../../../data/helpers';

let cookie: [x: string]
let tourId="";
describe("Tour", () => {
   

    beforeAll(async () => {
        await signUp(user).then((res) => {

            console.log(res.body, '===================================================================')
            expect(res.statusCode).toBe(201)
            expect(res.body.data.user.email).toBe(user.email);
            cookie = res.header['set-cookie'];
            console.log(cookie)

        })
    })

 

    
    describe("Tour POSITIVE", () => {
         
        afterEach(async () => {
          await request.delete(`/tours/${tourId}`).set('Cookie', cookie).then((el)=>{
          
                expect(204)
                console.log(tourId,"++++++++++++++++****************")
                console.log(el.body, '===================================================================')
               
    
          })
        })

        it('POS1 - create Tour DURATION equal', async () => {
            await createTourFunction(cookie,tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "POS1+++++++++++++++++++++++++++++++++++");
                   // console.log("+++++++++++++++++++++++++++++++++++", res.body, "POS1+++++++++++++++++++++++++++++++");
                   // console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                   //console.log(res.body.data.data.id,"&&&&&&&&&&&&&&&&&&&&&&&&&&&")
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data.data.duration).toBe(tour.duration)
                    tourId=res.body.data.data.id;
                })
                // await 
                // request.delete(`/tours/${tourId}`).set('Cookie', cookie).then((el) => {
                //     expect(el.statusCode).toBe(204);
                   
                // })
                 
        })

        it('POS2 - create Tour NAME is equal', async () => {
            await createTourFunction(cookie,tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "POS2+++++++++++++++++++++++++++++++++++");
                   // console.log("+++++++++++++++++++++++++++++++++++", res.body, "POS2+++++++++++++++++++++++++++++++");
                   // console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data.data.name).toBe(tour.name)
                    tourId=res.body.data.data.id;
                })
        })

        it('POS3 - create Tour DIFFICULTY type is string', async () => {
            await createTourFunction(cookie, tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                    expect(res.statusCode).toBe(201)
                    expect(typeof res.body.data.data.difficulty).toBe("string")
                    tourId=res.body.data.data.id;
                })
        })

        it('POS4 - create Tour PRICE less then 1200', async () => {
            await createTourFunction(cookie, tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data.data.price).toBeLessThan(1200)
                    tourId=res.body.data.data.id;
                })
        })

        it('POS5 - create Tour IMAGECOVER has on property .jpg', async () => {
            await createTourFunction(cookie,tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data.data.duration).toContain(".jpg")
                    expect(res.body.data.data).toHaveProperty("imageCover", tour.imageCover)
                    tourId=res.body.data.data.id;
                })
        })
        it('POS6 - create Tour DESCRIPTION has on property', async () => {
            await createTourFunction(cookie, tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data.data).toHaveProperty(tour.describtion)
                    tourId=res.body.data.data.id;
                })
        })

        it('POS7 - create Tour that has CAREATEDAT and STARTDATES', async () => {
            await createTourFunction(cookie, tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data.data).toHaveProperty("createdAt", "startDates")
                    tourId=res.body.data.data.id;
                })
        })

        it('POS8 - create Tour STARTLOCATION is object', async () => {
            await createTourFunction(cookie, tour)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour(), "RANDOM TOUR RANDOM")
                    expect(res.statusCode).toBe(201)
                    expect(typeof res.body.data.data.startLocation).toBe("object")
                    tourId=res.body.data.data.id;
                })
        })

        it.skip('POS1 - create Tour', function () {
            this.timeout(10000)
            const req = request
                .post('/tours')
                .set('Cookie', "cookie")//authorization
                .send(tour)

            return new Promise((resolve, reject) => {// 3 status (pending,fullfiled,reject)
                req.end((err, res) => {
                    if (err) {
                        console.error('Error', err);
                        console.log("Error", err)
                        reject(err)
                    } else {
                        console.log('upload successful:', res.body)
                        expect(res.status).toBe(200)
                        resolve(res)
                    }

                })


            })


        })
    })

    describe("Tour NEGATIVE", () => {

        it('NEG1 - create Tour without name', async () => {
            await createTourFunction(cookie, Neg1_noName)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour())
                    expect(res.statusCode).toBe(500)
                    expect(res.body.error.message).toBe('Tour validation failed: name: A tour must have a name')

                })
        })
        it('NEG2 - create Tour with long name more than 40 ', async () => {
            await createTourFunction(cookie, Neg2_longName)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour())
                    expect(res.statusCode).toBe(500)
                    expect(res.body.error.message).toBe('Tour validation failed: name: A tour name must have less or equal then 40 characters')

                })
        })

        it('NEG3 - create Tour with short name less than 10 ', async () => {
            await createTourFunction(cookie, Neg3_shortName)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++NEG3++++++++++++++");
                    console.log(createRandomTour())
                    expect(res.statusCode).toBe(500)
                    expect(res.body.error.message).toBe('Tour validation failed: name: A tour name must have more or equal then 10 characters')

                })

        })

        it('NEG4 - create Tour noDuration', async () => {
            await createTourFunction(cookie, Neg4_noDuration)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++NEG4++++++++++++++");
                    console.log(createRandomTour())
                    expect(res.statusCode).toBe(500)
                    expect(res.body.error.message).toBe('Tour validation failed: duration: A tour must have duration')

                })

        })
        it('NEG5 - create Tour typeof noMaxGroupSize string instead of number ', async () => {
            await createTourFunction(cookie, Neg5_noMaxGroupSize)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++NEG5++++++++++++++");
                    console.log(createRandomTour())
                    expect(res.statusCode).toBe(201)

                })

        })
        it('NEG6 - create Tour wrong typeof Difficulty number instead of string ', async () => {
            await createTourFunction(cookie, Neg6_noDifficulty)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++NEG6++++++++++++++");
                    console.log(createRandomTour())
                    expect(res.statusCode).toBe(500)
                    expect(res.body.error.message).toBe('Tour validation failed: difficulty: Difficulty is either: easy, medium, diffucult')

                })

        })

        it('NEG7 - create Tour with the Difficulty field is empty', async () => {
            await createTourFunction(cookie, Neg7_noDifficulty_Empty)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++NEG7++++++++++++++");
                    console.log(createRandomTour())
                    expect(res.statusCode).toBe(500)
                    expect(res.body.error.message).toBe("Tour validation failed: difficulty: A tour must have a difficulty")

                })

        })
        it('NEG8 - create a Tour with  no summary 500 expect ', async () => {

            await createTourFunction(cookie, Neg8_noSummary_Empty)
                .then(res => {
                    console.log("+++++++++++++++++++++++++++++++++++", tour, "+++++++++++++++++++++++++++++++++++");
                    console.log("+++++++++++++++++++++++++++++++++++", res.body, "+++++++++++++++++++++++++++++++");
                    console.log(createRandomTour(), "RANDOM TOUR=====================================RANDOM TOUR")
                    expect(res.statusCode).toBe(500)
                    expect(res.body.error.message).toBe('Tour validation failed: summary: A tour must have a summery')
                })
        })




    })
})
