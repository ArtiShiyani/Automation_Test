import{test, expect} from '@playwright/test'


//test.describe is used to make group of test block
//also we can put the hooks before the 'describe' block
//Group can be skip and only .

test.beforeAll(async()=>{

    console.log('This is before all hook')

})
test.beforeEach(async()=>{
    console.log('This is before  each hook')

})
test.afterAll(async()=>{
    console.log('This is after all hook')

})
test.afterEach(async()=>{
    console.log('This is after each hook')

})

test.describe.only('Group 1',()=>{

    test('Test 1',async ()=>{

        console.log('Test 1')
    
    })
    test('Test 2',async ()=>{
    
        console.log('Test 2')
    
    })

})

test.describe.skip('Group 2',()=>{

    test('Test 3',async ()=>{

        console.log('Test 3')
    
    })
    test('Test 4',async ()=>{
    
        console.log('Test 4')
    
    })

})


