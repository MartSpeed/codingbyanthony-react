// const fetch = require('node-fetch');
// const fs = require('fs');


// *****CALLBACKS*****
// setTimeout

// setTimeout(() => {
//     console.log('waited 3 seconds');
// }, 3000);

// nested setTimeouts

// setTimeout(() => {
//     console.log('3 third');
//     setTimeout(() => {
//         console.log('2 second');
//         setTimeout(() => {
//             console.log('1 first');
//         }, 1000)
//     }, 1000)
// }, 1000)

// button event handler in browser javascript

// const btn;
// btn.addEventListener('click', () => {
//     console.log('click asyncg example')
// })


//  error first callback
// fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
//     console.log(data)
// })

// *****PROMISES*****
// create a promise

// const myPromise = new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 2);
//     if(rand === 0){
//         resolve();
//     }else{
//         reject();
//     }
// });

// myPromise.then(() => console.log('success'))
//             .catch(() => console.error('failure'));
// // fs readRFile with promises

// fs.promises.readFile('./test.txt', {encoding: 'utf-8'})
//     .then(data => console.log(data))
//     .catch((err) => console.error(err));

// fetch with promises

// fetch('https://pokeapi.co/api/v2/pokemon/garchomp')
//     .then(res => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// *****async & await*****
// load file with async/await



// loadFile();
// fetch pokemon with async/await



// fetchPokemon(2)
