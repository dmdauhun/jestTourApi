import * as supertest from "supertest";
import { upload } from "../data/helpers";

const request = supertest("https://practice-react.sdetunicorns.com/api/test");

describe('UPLOAD', () => {

    it("upload multiple documents", async () => {
        const files: string[] = ["data/image/th.jpg", "data/image/descr.jpg"];
        const res = await upload(files)
        console.log(res.body);
        expect(res.status).toBe(200);
    });
    it.only("upload multiple documents", () => {
        const files: string[] = ["data/image/th.jpg", "data/image/descr.jpg"];
        const req = request.post('/upload/multiple')

        for (const el of files) {
            console.log(el,"+++++++++++++++++++++++++++++++++++++++++++++++++el++++++++++++++++++++++++++++")
            req.attach('multiple', el)
        }

        return new Promise((resolve, reject) => {
            req.end((err, res) => {
                if (err) {
                    console.error('Error', err);
                    reject(err)
                } else {
                    console.log('Upload successful:', res.body)
                    expect(res.status).toBe(200)
                    resolve(res)
                }
            })
        })
    });
})