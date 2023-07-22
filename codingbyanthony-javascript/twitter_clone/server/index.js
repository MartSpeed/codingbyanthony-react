const express = require('express');
const app = express();

app.get('/', (request, response) => [
    response.json({
        message: 'You friendly neighborhood Spider-Man!'
    })
])

app.listen(5000, () => {
    console.log('Listening on http://loaclhost:5000')
})