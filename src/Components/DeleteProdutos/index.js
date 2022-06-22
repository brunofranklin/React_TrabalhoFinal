import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import React, { Component } from "react";
import './styles.css'
import BuscaCategorias from '../BuscaCategoria';
import api from "../Service/api"

const DeleteProdutos = (props) =>{
    const [id, setId] = useState(props.id);
    const [produto, setProduto] = useState([]);
    
    //MODAL-----
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //---------
    
    const deletarProduto = async() => {
        const { data: produtoExcluido } = await api.delete(`/produtos/${id}`)
        const produtosFiltrados = produto.filter( prod => prod.id !== produtoExcluido.id)
        setProduto(produtosFiltrados);
        
        alert("Produto deletado com sucesso!")
        window.location.reload()
    }

    useEffect(() => {
        setId(props.id);
        return () => {
        };
    }, []);

    return (
        <>
            <button className="btn btn-danger" onClick={handleShow}>
                Excluir
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletar Produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <span>Você está prestes a deletar um produto, tem certeza que deseja continuar?
                            (sua ação não poderá ser revertida)
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button type='submit' variant="danger" onClick={deletarProduto}>
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default DeleteProdutos;