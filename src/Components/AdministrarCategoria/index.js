import {Card} from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import Header from '../Header';
import './styles.css'
import api from "../Service/api"
import BuscaCategoria from '../BuscaCategoria';
import UpdateCategoria from '../UpdateCategoria';

const AdminCategoria = () =>{

    const [categoria, setCategoria] = useState([]);
    const [nomeCategoria, setNomeCategoria] = useState('TODOS');
    
    const getCategoria = async () => {
        const { data } = await api.get('/categorias');
        setCategoria(data);
    }

    const filtrarCategoria = () =>{
        return(
            <select className="form-select " onChange={(e) => setNomeCategoria(e.currentTarget.value)}>
                <option value="" disabled hidden>Selecione a Categoria</option>
                <option value="TODOS" selected>TODOS</option>
                <BuscaCategoria />
            </select>
        )     
    }

    useEffect(() => {
        getCategoria();
    }, [])

    return(
        <>
            <Header/>
            <div className='container-adminCate'> 
                <div className='row'>
                    {filtrarCategoria()}
                    {nomeCategoria === 'TODOS' ? categoria.map((item, index) => {return (
                    <Card>
                        <Card.Body><span key={index} className='categoria-text'>{item.nome}</span> 
                            <UpdateCategoria
                                id={item.id}
                                nome={item.nome}
                            />
                        </Card.Body>
                    </Card>)}) : categoria.filter(item => item.nome === nomeCategoria).map((item, index) => {return (
                    <Card>
                        <Card.Body><span key={index} className='categoria-text'>{item.nome}</span> 
                            <UpdateCategoria
                                id={item.id}
                                nome={item.nome}
                            />
                        </Card.Body>
                    </Card>)})}
                </div>
            </div>
        </>
    )
}

export default AdminCategoria;