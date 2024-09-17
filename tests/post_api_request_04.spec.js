//Load playwright module
import {json} from "node:stream/consumers";

const {test, expect}= require('@playwright/test')
const bookingAPIRequestBody =  require('../test-data/post_dynamic_request_body.json');
import {stringFormat} from "../utils/common";

// Write a test

test('Create POST api request using dynamic JSON file', async({request})=>{

    const dynamicRequestBody= stringFormat(JSON.stringify(bookingAPIRequestBody),"salekin","newaz","windows")
    // Create POST api request
    const postAPIResponse= await request.post('https://restful-booker.herokuapp.com/booking',{
        data: JSON.parse(dynamicRequestBody)
    })

    //Validation status code
    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody= await postAPIResponse.json();
    console.log(postAPIResponseBody);

    //Validation JSON api response
    expect(postAPIResponseBody.booking).toHaveProperty("firstname", "salekin");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", "newaz");

    //validate nested JSON objects
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2019-01-01");





})








//Validation nested JSON objects

