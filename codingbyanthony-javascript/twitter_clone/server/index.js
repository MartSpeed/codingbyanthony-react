const express = require('express');
const app = express();

const spideyModels = [
    "Spider-Man", 
    "Mary Jane Watson", 
    "Green Goblin", 
    "Venom", 
    "Doctor Octopus", 
    "Black Cat", 
    "Electro", 
    "Sandman", 
    "Lizard", 
    "Rhino", 
    "Mysterio", 
    "Kraven the Hunter", 
    "Vulture", 
    "Carnage", 
    "Scorpion", 
    "Shocker", 
    "Kingpin", 
    "Prowler", 
    "Silver Sable", 
    "Tombstone", 
    "Hammerhead", 
    "Jackal", 
    "Chameleon", 
    "Black Widow"
];

app.get('/', (request, response) => [
    response.json({
        message: 'You friendly neighborhood Spider-Man! '
    })
])

app.post('/spideySense', (request, response) => {
    console.log(request.body)
})

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})