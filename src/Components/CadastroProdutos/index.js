import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import React, { Component } from "react";
import './styles.css'
import Footer from '../Footer';
import BuscaCategoria from '../BuscaCategoria';
import api from "../Service/api"


const CadastroProdutos = () => {   
  const [categoria, setCategoria] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [valor, setValor] = useState('');
  const [foto, setFoto] = useState('');

  const [produto, setProduto] = useState([]);
  
  const createProduto = async () => {
    if(nomeProduto === "" || valor === "") return
    const novoProduto = {
      nome: nomeProduto,
      valorUnitario: valor,
      categoria:categoria,
      foto: foto
    }
    alert("Produto cadastrado com sucesso");
    const { data } = await api.post('/produtos', novoProduto)

    setProduto([...produto,data])

    setNomeProduto("")
    setValor("")
    setFoto("")
  }

  return (
    <>
        <Header />
        <div className="body-produtoCad">
        <div className="container-cadastroProd">
        <h1 className='text-center'>Cadastro de Produtos</h1>
          <form className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Nome do Produto:</label>
              <input type="text" className="form-control" placeholder="Nome" value={nomeProduto} onChange={e => setNomeProduto(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Valor: R$</label>
              <input type="text" className="form-control" placeholder="valor" value={valor} onChange={e => setValor(e.target.value)} />
            </div>
            <select className="form-select w-95" value={categoria} onChange={e => setCategoria(e.target.value)}>
              <option value="" disabled selected hidden>Selecione a Categoria</option>
              <BuscaCategoria />
            </select>
            <div className="col-md-9">
              <label className="form-label">Foto URL</label>
              <input type="text" className="form-control" placeholder="ULR" value={foto} onChange={e => setFoto(e.target.value)} />
            </div>   
            <div className="col-md-2 moldura-foto">
              <img src={foto} alt="foto do produto cadastrado" className="foto-produto" />
            </div>      
            <div className="col-2 mb-4">
              <button className="btn btn-outline-danger" onClick={createProduto}>           
                  Adicionar
              </button>
            </div>
          </form>    
        </div>
        </div>
        <Footer/>
    </>
  )
}


export default CadastroProdutos;