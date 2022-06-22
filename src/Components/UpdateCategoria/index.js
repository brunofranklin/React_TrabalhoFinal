import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import React, { Component } from "react";
import api from "../Service/api"
import './styles.css'

const UpdateCategoria = (props) =>{

    const [categoria, setCategoria] = useState([]);
    const [nomeCategoria, setNomeCategoria] = useState('');
    const [id, setId] = useState(props.id);

    //MODAL-----
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //---------

    const salvarCategoria = async() => {
        const categoriaData = {
            id: id,
            nome: nomeCategoria
        }
    
        const { data } = await api.put(`/categorias/${props.id}`, categoriaData)
    
        const categoriaEditada = categoria.map( categoria => {
          if(categoria.id === data.id) {
            return {
              id: categoria.id,...categoriaData
            }
          }
          return categoria
        })
    
        setCategoria(categoriaEditada)
        setNomeCategoria("")
        
        alert("Categoria atualizada com sucesso")
        window.location.reload()
    }

    useEffect(() => {
        setId(props.id);
        setNomeCategoria(props.nome)
        return () => {
        };
    }, []);

    return (
        <>
            <Button variant="warning" className='btn-atualizar' onClick={handleShow}>
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
                                <label className="form-label">Nome da Categoria:</label>
                                <input type="text" className="form-control" placeholder={props.nome} onChange={e => setNomeCategoria(e.target.value)} />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button type='submit' variant="primary" onClick={salvarCategoria}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateCategoria;