import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import './styles.css'
import Footer from '../Footer';
import api from "../Service/api"
import BuscaCategoria from '../BuscaCategoria';
import UpdateProdutos from '../UpdateProdutos';
import DeleteProdutos from '../DeleteProdutos';
import CardProduto from '../CardProduto';


const AdminProdutos = () => {
    
    const [produto, setProduto] = useState([]);
    const [categoria, setCategoria] = useState('TODOS');
    console.log(categoria)

    const getProduto = async () =>{
        const { data } = await api.get('/produtos');
        setProduto(data);
    }

    const filtrarProduto = () =>{
        return(
            <select className="form-select" onChange={(e) => setCategoria(e.currentTarget.value)}>
                <option value="" disabled hidden>Selecione a Categoria</option>
                <option value="TODOS" selected>TODOS</option>
                <BuscaCategoria />
            </select>
        )
      
    }

    useEffect(() => {
        getProduto();
      }, [])


    return(
        <>
            <Header/>
            <div className='container-adminProd'>
                <div className='row'>
                    <div className='col-5 offset-2'>
                        {filtrarProduto()}
                    </div>

                </div>
            </div>
            <div className='container container-produtos'>
                {categoria === 'TODOS' ? produto.map((item, index) => {
                    return (
                        <CardProduto
                            index={index}
                            id={item.id}
                            nome={item.nome}
                            valor={item.valorUnitario}
                            categoria={item.categoria.nome}
                            foto={item.foto}
                        />
                    )
                }): produto.filter(item => item.categoria.nome === categoria).map((item, index) => {
                        return (
                            <CardProduto
                                index={index}
                                id={item.id}
                                nome={item.nome}
                                valor={item.valorUnitario}
                                categoria={item.categoria.nome}
                                foto={item.foto}
                            />
                        )
                    })}
                
            </div>
            <Footer/>
        </>
    )
}

export default AdminProdutos;