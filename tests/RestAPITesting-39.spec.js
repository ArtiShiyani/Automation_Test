import {test,expect}from '@playwright/test'

var userid;

test('Get User',async({request})=>{

    const response =await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect (response.status()).toBe(200)

})

test('Create User',async({request})=>{

    const response=await request.post('https://reqres.in/api/users',
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
    expect(response.status()).toBe(201)

    const res = await response.json();
    userid=res.id;

    /*try {
        const response = await fetch('https://reqres.in//api/users');
        
        if (response.status === 404) {
            // Handle 404 error if needed
            console.log('Resource not found.');
            // You might want to throw an error or return early here
            return;
        }
    
        // Check if the response is in the success range (e.g., 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
    
        // Perform your assertion on the response status
        expect(response.status).toBe(201); // Remove the parentheses after status
    
        // Additional handling or assertions with 'data' if needed
    } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle or report the error appropriately
    }*/
    

})

test('Update User',async({request})=>{

    const response=await request.put('https://reqres.in/api/users'+userid,
    {
        data:
        {
            "name":"Arti Shiyani",
            "job":" Senior Manager SDET"
        },
        headers:
        {
            "Accept":"application/json"
        }

    })

    console.log(await response.json())
    expect(response.status()).toBe(201)

})

test('Delete User',async({request})=>{

    const response =await request.delete('https://reqres.in/api/users/'+userid);
    expect(response.status()).toBe(204);

})
