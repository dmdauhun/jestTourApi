import * as supertest from "supertest"
//import { errorMonitor } from "supertest/lib/test";

const request =supertest('https://jsonplaceholder.typicode.com')

describe('POSTS',()=>{
    it.skip('get request',async ()=>{
        const res=await request.get('/posts')
        console.log(res);
        expect(res.statusCode).toEqual(200)
        expect(res.body[0].id).toBe(1)

    });
    it.skip('post request',async ()=>{
        const data={
        title:"request111",
        body:"This is first post request",
        userId:1001
    }
    const res=await request.post("/posts").send(data);
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual("request111");
    expect(res.body.userId).toEqual(1001);
    });

it("PATCH request", async ()=>{
const data={title:"Hello"}
const getRes=await request.get('/posts/1')
const beforeTitle=getRes.body.title


    const res=await request.patch('/posts/1').send(data)
    expect(res.statusCode).toEqual(200)
    expect(res.body.title).toBe(data.title)
    expect(res.body.title).not.toBe(beforeTitle)
})

it.only("PATCH 2",(done)=>{
    const data={
        title:"My one"
    }

//const getRes=await request.get('/post/1')
//const beforeTitle=getRes.body.title
 request
.patch('/posts/1')
.send(data)
.expect(200)
.end((err,res)=>{
    if(err)return done(err)
    console.log(res.body,'=================')
    //expect(res.statusCode).toEqual(200)
    expect(res.body.title).toBe(data.title)
    done()
    //expect(res.body.title).not.toBe(beforeTitle)
})
})

it("DELETE request", async()=>{
const res=await request.delete('/posts/1')
console.log(res.body,'----------body-------------')
expect(res.statusCode).toEqual(200)
expect(res.body).toEqual({})

})



});