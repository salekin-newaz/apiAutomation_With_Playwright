//Load playwright module
const {test, expect}= require('@playwright/test')

// Write a test

test('Create POST api request using static request body', async({request})=>{

    // Create POST api request
    const postAPIResponse= await request.post('https://restful-booker.herokuapp.com/booking',{
        data:{
            "firstname": "Salekin",
            "lastname": "Newaz",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "super bowls"
        }
    })

    //Validation status code
    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody= await postAPIResponse.json();
    console.log(postAPIResponseBody);

    //Validation JSON api response
    expect(postAPIResponseBody.booking).toHaveProperty("firstname", "Salekin");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Newaz");

    //validate nested JSON objects
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2019-01-01");





})








//Validation nested JSON objects

