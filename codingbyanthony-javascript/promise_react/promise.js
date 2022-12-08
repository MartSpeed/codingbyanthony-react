// 
let p = new Promise((resolve, reject) => {
    // define the promise
    let a = 1 + 2
    if ( a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// anything that runs at dot then, will run for the resolve function
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})