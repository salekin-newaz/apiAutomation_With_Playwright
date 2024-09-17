import {test, expect, request} from "@playwright/test";
test.describe.parallel("API Testing", () =>{
    const baseUrl= 'https://reqres.in/api'

    /* Get Request */

    test("Simple API Test- Assert Response Status", async ({request})=>{
        const response = await request.get(`${baseUrl}/users/3`)
        expect(response.status()).toBe(200);

        const responseBody= JSON.parse(await response.text())

    })

    test("Simple API Test-2 Assert Response Status", async ({request})=>{
        const response = await request.get(`${baseUrl}/users/that-is-not-exist`)
        expect(response.status()).toBe(404);

    })

    test("Get request-- Get User Detail", async ({request})=>{
        const response= await request.get(`${baseUrl}/user/1`)
        const responseBody= JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(1)
        expect(responseBody.data.name).toContain("cerulean")
        //expect(responseBody.data.email).toBeTruthy()
        console.log(responseBody)
    })

    /* Post Request */

    test("Post Request - Create New User", async({request}) =>{
        const response= await request.post(`${baseUrl}/user`,{
            data:{
                id: 1000,
            },
        })
        const responseBody= JSON.parse(await response.text())
        expect(responseBody.id).toBe(1000)
        //console.log(responseBody)
    })

})