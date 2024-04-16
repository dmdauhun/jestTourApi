import * as supertest from "supertest";

const request = supertest("localhost:8001/api/v1");

import { user } from "../../data/user"

describe('USER SIGN UP', () => {
    describe('POSITIVE TESTING', () => {
        it.skip('create new user', async () => {
            const res = await request
                .post("/users/signup")
                .send({
                    "email": "1zmitrxxy13121@gmail.com",
                    "password": "pass123489",
                    "passwordConfirm": "pass123489",
                    "name": "Dzmitry Money1"
                })
                .expect(201)
            console.log(res.body);
            expect(res.body.data.user.name).toBe("Dzmitry Money1");
            expect(res.body.data.user.email).toBe("111zmitrxxy13121@gmail.com")
            expect(res.body.token).toBeDefined();
            expect(typeof res.body.token).toBe('string');
        });
        it.skip('create new user imported data', async () => {
            const res = await request
                .post("/users/signup")
                .send(user)
                .expect(201);
            console.log(res.body, "==================================================");
            expect(res.body.data.user.name).toBe(user.name);
            expect(res.body.data.user.email).toBe(user.email);
            expect(res.body.token).toBeDefined();
            expect(typeof res.body.token).toBe('string');
            expect(res.body.data.user.role).toBe("user")
            expect(res.body.status).toBe('success')
            expect(res.body.data.user.active).toBe(true)

        });
        it.skip('create new user imported data with THEN', async () => {
            const res = await request
                .post("/users/signup")
                .send(user)
                .then(response=>{
                expect(201);
            console.log(response.body, "==================================================");
            expect(response.body.data.user.name).toBe(user.name);
            expect(response.body.data.user.email).toBe(user.email);
            expect(response.body.token).toBeDefined();
            expect(typeof response.body.token).toBe('string');
            expect(response.body.data.user.role).toBe("user")
            expect(response.body.status).toBe('success')
            expect(response.body.data.user.active).toBe(true)
        })
        });

        it('create new user imported data with DONE',  (done) => {
            request
                .post("/users/signup")
                .send(user)
                .expect(201)
                .end((err,res)=>{
                    if(err) return done(err);
            console.log(res.body, "=====================IT WITH DONE=============================");
            expect(res.body.data.user.name).toBe(user.name);
            expect(res.body.data.user.email).toBe(user.email);
            expect(res.body.token).toBeDefined();
            expect(typeof res.body.token).toBe('string');
            expect(res.body.data.user.role).toBe("admin")
            expect(res.body.status).toBe('success')
            expect(res.body.data.user.active).toBe(true)
            expect(typeof res.body.data.user.active).not.toBe(null)
            done();
        })
        });







    });
    describe('Negative TESTING', () => {
        it.skip('should not create a user with the same email', async () => {
            const response = await request.post('/users/signup').send(user);
            const response2 = await request.post('/users/signup').send(user).then(resp => {
                console.log(resp.body, '============================================')
                console.log(resp.body, '================================================================');
                console.log(user.email, '==============================email==================================');
                expect(resp.body.message).toBe(`E11000 duplicate key error collection: test.users index: email_1 dup key: { email: "${user.email}" }`);
                expect(resp.body.status).toBe('error')
                expect(resp.body.error.code).toBe(11000)
                expect(resp.body.error.statusCode).toBe(500)
                expect(resp.body.error.index).toBe(0)
                expect(resp.body.error.keyPattern.email).toBe(1)
            })
        })
        it.skip("should not create a user with the same name field", async () => {
            await request.post("/users/signup").send(
                {
                    "email": user.email,
                    "password": user.password,
                    "passwordConfirm": user.password,

                }).then(el => {
                    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", el, "el");
                    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", el.body);
                    expect(el.body.status).toBe('error')
                    expect(el.body.error._message).toBe("User validation failed")
                    expect(el.body.error.statusCode).toBe(500)
                    expect(el.body.error.name).toBe("ValidationError")
                    expect(el.body.message).toBe("User validation failed: name: Please tell us your name!")
                    expect(el.body.error.message).toBe("User validation failed: name: Please tell us your name!")
                })

        })


    })
});