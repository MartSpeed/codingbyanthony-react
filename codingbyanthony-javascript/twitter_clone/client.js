console.log(`Welcome to the Spiderverse!`)

// when the user clicks the button
// grab the data in the form and put it into something

// get a reference to the form
// anytime you see document that is client side JS
const from = document.querySelector('form')

// listen to when the user clicks submit using an event listener
// grab the data from the textarea
from.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(`form was submitted`)
})