//can tag test by using '@' followed by  name 
//by default all test  executes when script run but can execute only tagged test by command 'npx playwright test --grep@name'
//sequence of the tag matters.
// --grep -invert@name >> this is for exclude the tag

import{test, expect} from'@playwright/test'

test('Test1@sanity',async({page})=>{

    console.log('Test1....')
})
test('Test2@sanity',async({page})=>{

    console.log('Test2....')
})
test('Test3@reg',async({page})=>{

    console.log('Test3....')
})
test('Test4@reg',async({page})=>{

    console.log('Test4....')
})
test('Test5@reg@sanity',async({page})=>{

    console.log('Test5....')
})