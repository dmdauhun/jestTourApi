import * as supertest from "supertest"

const request = supertest('https://jsonplaceholder.typicode.com')

describe('COMMENTS', () => {
    it('get request', async () => {
        const res = await request.get('/comments')
        console.log(res);
        expect(res.statusCode).toEqual(200);
        expect(res.body[3].id).toBe(4);
        //expect(res).toHaveProperty('bod');
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('email');
        expect(res.body[0]).toHaveProperty('name');
        expect(Array.isArray(res.body)).toBe(true);

        //expect(res.body[0]).toHaveLength(100);

    });
    it('post request', async () => {
        const data = {
            name: "Winner",
            mail: "Donnie@alfreda.biz",
            body: "minus nihil sunt dolor\nipsum a illum quis\nquasi officiis cupiditate architecto sit consequatur ut\net sed quasi quam doloremque",
            userId: 501
        }
        const res = await request.post("/comments").send(data);
        expect(res.body.id).toEqual(501);
        expect(res.body.name).toEqual("Winner");
    });
});