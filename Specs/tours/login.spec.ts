import * as supertest from "supertest";

const request = supertest("localhost:8001/api/v1");

import { user } from "../../data/user";
import { deleteFunction, loginFunction, signUp } from '../../data/helpers'



describe('USER SIGNUP AND LOGIN', () => {
    describe('POSITIVE', () => {

        let cookie: [x: string];

        beforeEach(async () => {
            await signUp(user).then((res) => {
                expect(res.statusCode).toBe(201);
                expect(res.body.data.user.email).toEqual(user.email);
                expect(res.body.data.user.name).toEqual(user.name);
                expect(res.body.data.user.role).toEqual('user');
                cookie = res.header['set-cookie'];
            });
        })

        afterEach(async () => {
            await deleteFunction(cookie).then((el) => {
                expect(el.statusCode).toBe(204);
                expect(el.body).toEqual({});
            })
            await loginFunction(user).then((el) => {
                expect(el.statusCode).toBe(401);
               
            })
        });

        /* it.only('create user with delete request', async () => {
              
             await signUp(user).then((res)=>{
 
                 //expect(201)
                 expect(res.statusCode).toBe(201)
                 expect(res.body.data.user.email).toEqual(user.email)
            // console.log(res.body, 'res==========================');
            // console.log(res.header['content-type'], 'res==========================');
             //expect(res.header['content-type']).toBe("application/json; charset=utf-8")
 
              }
              )
 
             
 
             // const resLogin = await request.post('/users/login').send({
             //       email: user.email,
             //    password: user.password
             // }).expect(200)
 
            // const resLogin = await loginFunction()
 
            cookie = await loginFunction(user).then(el=>{
                 console.log(el.body,"=======================================body")
                 expect(el.statusCode).toBe(200)
                 return el.header['set-cookie']
 
 
             })
             await deleteFunction(cookie).then((el) => {
                 console.log(el.body, "el");
                 expect(el.statusCode).toBe(204);
               });
               await loginFunction(user).then(el=>{
                 console.log(el.body, "body================");
                 expect(el.statusCode).toBe(401);
               })
             })
 
             
 
 
             //console.log(resLogin.body, "resLogin=======================================")
             
             expect(resLogin.body.status).toBe('success')
             expect(resLogin.body.data.user.role).toBe('user')
             expect(typeof resLogin.body).toBe('object')
             expect(typeof resLogin.body.token).toBe('string')
             expect(resLogin.body.data).toHaveProperty('user')
             expect(resLogin.body.data.user).toHaveProperty('_id')
             console.log(resLogin)
 
             await deleteFunction(resLogin).then(el => console.log(el.body, 'el'))
             await request
                 .post("/users/login")
                 .send(user)
                 .then(res => {
                     expect(res.statusCode).toBe(401);
                 
 
 
 
             //await request.delete('/users/deleteMe')
             //.set('Cookie',resLogin.header['set-cookie'])
             //.expect(204)
 
 
         });
 
         it.skip('user login with THEN', async () => {
             const res = await request
                 .post('/users/signup')
                 .send(user)
                 .expect(201)
             console.log(res.body, "====================================================================")
             console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
             console.log((res.header['content-type'].split(';')[0]))
             expect(res.header['content-type'].split(';')[0]).toBe("application/json")  //charset=utf-8
 
             await request.post('/users/login')
               .send({
               email: user.email,
               password: user.password})
             //const resLogin = await loginFunction()
                 .then(response => {
                     expect(200)
                     console.log(response.body, "=============================BODY====================================")
                     expect(response.body.status).toBe('success')
                     expect(typeof response.body.token).toBe('string')
                     expect(response.body.data.user.role).toBe('user')
 
                 })
             await deleteFunction(response).then(el => console.log(el.body, 'el'))
             await request
                 .post("/users/login")
                 .send(user)
                 .then(res => {
                     expect(res.statusCode).toBe(401);
 
 
 
                 })
         })
 
         it.skip('user login with DONE', (done) => {
             request
                 .post('/users/signup')
                 .send(user)
                 .expect(201)
 
                 .end((cd) => {
                     request.post('/users/login')
                         .send({
                             email: user.email,
                             password: user.password
                         })
                         .expect(200)
                         .end((err, res) => {
                             if (err) return done(err);
                             console.log("===============================", res.body, "================================")
                             expect(res.body.status).toBe('success')
                             expect(typeof res.body.token).toBe('string')
                             expect(res.body.data.user.role).toBe('user')
                             done();
 
 
                         })
 
 
                 })
                 */

        it("login user ", async () => {
            //  await signUp(user).then((res)=>{
            //    expect(res.statusCode).toBe(201);
            //   expect(res.body.data.user.email).toEqual(user.email);
            //  })
            cookie = await loginFunction(user).then(el => {
                expect(el.statusCode).toBe(200);
                return el.header['set-cookie']
            })
            /*  await deleteFunction(cookie).then((el) => {
                  expect(el.statusCode).toBe(204);
              });
              await loginFunction(user).then(el => {
                  expect(el.statusCode).toBe(401);
              })*/

             

        });


        it('login user with done', (done) => {
            request.post('/users/login').send({ email: user.email, password: user.password }).expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    expect(res.body.status).toEqual('success')
                    expect(res.body.data.user.name).not.toBe('')
                    expect(typeof res.body.data.user.photo).toBe('string')
                    done();
                })
        }) 





        it("sign up 2-nd time user ", async () => {
            await signUp(user).then((res) => {
                expect(res.statusCode).toBe(500);
                expect(res.body.error.index).toEqual(0);
                console.log(res.body.error.keyValue.email, "===================================", res.body, "=================================================", user.email)
                expect(res.body.error.index).toEqual(0);
                expect(res.body.error.keyValue.email).toEqual(user.email);
                expect(res.body.error.keyValue.email).toBe(user.email);
                expect(res.body.error.statusCode).toBe(500);
                // expect(res.method).toBe("POST");
                // console.log("+++++++++++++++++++++++++++++++++",res,"+++++++++++++++++++++++++++++++++++")
            })
        });




        /*    it.skip("sign up second time with the  request", async () => {
                  await signUp(user).then((res)=>{
                    expect(res.statusCode).toBe(500);
                   expect(res.body.status).toBe("error");
                   //expect(res.body.keyValue.email).toBe(user.email);
                 //  expect(res.body.message).toHaveProperty(
                   // "E11000 duplicate key error collection: test.users index: email_1 dup key: ")
                 })
                })*/


    })



    //==========================================================================NEGATIVE=============================================================================



    describe.only('NEGATIVE', () => {
        let cookie: [x: string];
        beforeEach(async () => {
            await signUp(user).then((res) => {
                expect(res.statusCode).toBe(201);
                expect(res.body.data.user.email).toEqual(user.email);
                expect(res.body.data.user.name).toEqual(user.name);
                expect(res.body.data.user.role).toEqual('admin');
                cookie = res.header['set-cookie'];
            });


        })
        afterEach(async () => {
            await deleteFunction(cookie).then((el) => {
                expect(el.statusCode).toBe(204);
                expect(el.body).toEqual({});
            })
        });



        it('user can not login with invalid cred + THEN', async () => {
            await loginFunction({
                email: user.email + "1",
                password: user.password + "1",

            }).then(el => {
                console.log(el.body, '=================body================')
                expect(el.statusCode).toBe(401)
            })
        });

        it('user cant sign up 2-nd time with the same cred + Async-Await', async () => {
            const res = await request
                .post('/users/signup')
                .send(user)
                .expect(500)
                console.log(res.body, "====================================================================")
                expect(res.body.error.keyValue.email).toBe(user.email);
                expect(res.body.error.statusCode).toBe(500);
        })

        
        it('user can not login with wrong endpoint  DONE', (done) => {
            request.post('/users/login').send({ email: user.email, password: user.password }).expect(200)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body.status).toEqual('success')
                expect(res.body.data.user.name).not.toBe('')
                expect(typeof res.body.data.user.photo).toBe('string')
                done();
            })

                })




    });
})
