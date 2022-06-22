import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import axios from 'axios'
import React, { Component } from "react";
import './styles.css'
import Footer from '../Footer';
import BuscaCategoria from '../BuscaCategoria';
import useAxiosGet from '../hooks/useAxiosGet';
import api from "../Service/api"


const CadastroCategoria = () => {   
  const [nomeCategoria, setNomeCategoria] = useState('');
  // const { tasks } = useAxiosGet('/produtos')

  const [categoria, setCategoria] = useState([]);
  
  const createCategoria = async () => {
    if(nomeCategoria === "") return
    
    const novaCategoria = {
      nome: nomeCategoria,
    }
    
    alert("Categoria cadastrada com sucesso");
    const { data } = await api.post('/categorias', novaCategoria)

    setCategoria([...categoria,data])

    setNomeCategoria("");

  }

  return (
    <>
        <Header />
        <div className="body-categoriaCad">         
          <div className="container-categoriaCad">
          <h1 className='text-center'>Cadastro de Categorias</h1>
            <form className="row g-3 mt-2">
              <div className="col-md-6">
                <label className="form-label">Nome do Categoria:</label>
                <input type="text" className="form-control" placeholder="Nome" value={nomeCategoria} onChange={e => setNomeCategoria(e.target.value)} />
              </div>
              <div className="col-2 mb-4">
                <button type="button" className="btn btn-outline-success" onClick={createCategoria}>
                  <div className='d-flex align-items-center'>
                    Adicionar
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer className='footer' />
      
    </>
  )
}


export default CadastroCategoria;