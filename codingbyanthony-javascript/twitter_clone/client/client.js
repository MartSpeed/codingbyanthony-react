console.log(`Welcome to the Spiderverse!`)

// when the user clicks the button
// grab the data in the form and put it into something

// get a reference to the form
// anytime you see document that is client side JS
const form = document.querySelector('form')

// hide the logo when it thr form is now loading messages
const loadingElement = document.querySelector('.loading')
// whent hepage loads, hide the loading animation
// when we submit the form, hide the message and show the loading gif
loadingElement.style.display = 'none';
const API_URL = 'https://localhost:5000/spideySense'
// where is the server I am making request to


// listen to when the user clicks submit using an event listener
// grab the data from the textarea
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name')
    const content = formData.get('content')

    const spideyThwip = {
        name,
        content
    }
    form.style.display = 'none';
    loadingElement.style.display = '';

    //
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(spideyThwip),
        headers: {
            'content-type': 'application.json'
        }
    })
})