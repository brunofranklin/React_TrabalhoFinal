import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import UpdateProdutos from '../UpdateProdutos';
import DeleteProdutos from '../DeleteProdutos';

const CardProduto = (props) =>{
    
    return(
        <Card key={props.index} style={{ width: '14rem', height: '100%' }} className='card-produto'>
            <Card.Img variant="top" src={props.foto} />
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>
                    <span>R$:</span> {props.valor} <br />
                    <span>CATEGORIA:</span> {props.categoria}
                    <div>
                        <UpdateProdutos className="btn-update"
                            id={props.id}
                            nome={props.nome}
                            valor={props.valor}
                            categ={props.categoria}
                            foto={props.foto}
                        />
                        <DeleteProdutos className="btn-delete"
                            id={props.id}
                            nome={props.nome}
                            valor={props.valor}
                            categ={props.categoria}
                            foto={props.foto}
                        />
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardProduto;