import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router"

const Test = () => {
    const router = useRouter();

    useEffect(() => {
        axios.get('/api/pokemons')
        .then((res) => {
            console.log(res, 'data')
        })
    }, [])

    const onClickMe = () => {
        router.push('/')
    }

    return <div onClick={onClickMe}>Click me</div>
}

export default Test