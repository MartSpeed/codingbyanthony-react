console.log(`Welcome to the Spiderverse!`)

// when the user clicks the button
// grab the data in the form and put it into something

// get a reference to the form
// anytime you see document that is client side JS
const form = document.querySelector('form')

// hide the logo when it thr form is now loading messages
const loadingElement = document.querySelector('.loading')
// whent hepage loads, hide the loading animation
loadingElement.style.display = 'none';

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
    console.log(spideyThwip)
})