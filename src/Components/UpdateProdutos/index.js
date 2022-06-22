import {Button, Modal} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import './styles.css'
import BuscaCategorias from '../BuscaCategoria';
import api from "../Service/api"

const UpdateProdutos = (props) =>{
    const [categoria, setCategoria] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [valor, setValor] = useState('');
    const [foto, setFoto] = useState('');
    const [id, setId] = useState(props.id);
    const [produto, setProduto] = useState([]);
    
    //MODAL-----
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //---------
    
    const salvarProduto = async() => {
        const produtoData = {
            id: id,
            nome: nomeProduto,
            valorUnitario: valor,
            categoria:categoria,
            foto: foto
        }
    
        const { data } = await api.put(`/produtos/${props.id}`, produtoData)
    
        const produtoEditado = produto.map( produto => {
          if(produto.id === data.id) {
            return {
              id: produto.id,...produtoData
            }
          }
          return produto
        })
    
        setProduto(produtoEditado)
        setNomeProduto("")
        setValor("")
        setFoto("")
        
        alert("Produto atualizado com sucesso")
        window.location.reload()
    }

    useEffect(() => {
        setId(props.id);
        setNomeProduto(props.nome);
        setValor(props.valor);
        setFoto(props.foto);
        return () => {
        };
    }, []);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Atualizar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Atualizar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <form className="row g-3 mt-2">
                            <div className="col-md-6">
                                <label className="form-label">Nome do Produto:</label>
                                <input type="text" className="form-control" placeholder={props.nome} onChange={e => setNomeProduto(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Valor: R$</label>
                                <input type="text" className="form-control" placeholder={props.valor} onChange={e => setValor(e.target.value)} />
                            </div>
                            <select className="form-select w-100" onChange={e => setCategoria(e.target.value)}>
                                <option value="" disabled selected hidden>Selecione a Categoria</option>
                                <BuscaCategorias />
                            </select>
                            <div className="col-md-9">
                                <label className="form-label">Foto URL</label>
                                <input type="text" className="form-control" placeholder={props.foto} onChange={e => setFoto(e.target.value)} />
                            </div>
                            <div className="col-md-6 moldura-foto">
                                <img src={props.foto} alt="" width="200vw" height="200vh" />
                            </div>
                            <hr />
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button type='submit' variant="primary" onClick={salvarProduto}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default UpdateProdutos;