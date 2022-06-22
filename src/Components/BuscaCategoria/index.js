import {useState, useEffect} from 'react'
import api from "../Service/api"


const BuscaCategorias = () => {
    const [categoria, setCategoria] = useState([])

    const getCategoria = async () => {
        const { data } = await api.get('/categorias')
        setCategoria(data)
    }

    useEffect(() => {
        getCategoria();
    }, [])

    return(

        <>
            {categoria && categoria.map((item) => {return(
            <>
                <option key={item} value={item.nome}>{item.nome}</option>
            </> 
            )})}
        </>

    )
}

export default BuscaCategorias;