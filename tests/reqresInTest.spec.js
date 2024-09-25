// @ts-check
const { test, expect } = require('@playwright/test');
let userid;


test('Get user', async ({ request }) => {
    console.log('Test is starting');
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
    console.log('Test is ending');
})

test('Create User', async ({ request }) => {
    console.log('Test is starting');
    const response = await request.post('https://reqres.in/api/users',
        {            data:{"name": "morpheus", "job": "leader"},
            headers:{"Accept": "application.json"}
        });


    console.log(await response.json())
    expect(response.status()).toBe(201)
    const res = await response.json();
    userid=res.id
    console.log('Test is ending');
})

test('Update user', async ({ request }) => {
    console.log("Test is started");
    const response = await request.put('https://reqres.in/api/users/'+userid,
        {
            data:{"name": "salekin", "job": "engineer"},
            headers:{"Accept": "application.json"}
        });
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("Delete user", async ({request}) =>{
    const response= await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)
})
