import axios from "axios";

const handler = async (req, res) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

    //console.log('response', response)

    res.status(200).json(response.data)
}

export default handler