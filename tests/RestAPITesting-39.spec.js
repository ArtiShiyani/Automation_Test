import {test,expect}from '@playwright/test'
import { waitForDebugger } from 'inspector';

var userid;

test('Get User',async({request})=>{

    const response =await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect (response.status()).toBe(200)

})

test.only('Create User',async({request})=>{

    const response=await request.post('https://reqres.in//api/users',
    {
        data:
        {
            "name":"Arti",
            "job":"SDET"
        },
        headers:
        {
            "Accept":"application/json"
        }

    })

    console.log(await response.json());
    expect(response.status()).toBe(201);

    const res = await response.json();
    userid=res.id;

})

test('Update User',async({request})=>{

})

test('Delete User',async({request})=>{

})