import Footer from "../Footer"
import Header from "../Header"
import {Form, Button, Modal } from "react-bootstrap"
import React, {useState} from "react"
import "./styles.css"

const FaleConosco = () => {
      const [show, setShow] = useState(false);
      const [email, setEmail] = useState('');
      const [txtArea, setTxtArea] = useState('');

    const handleClose = () => {  
        setShow(false);
        setEmail('');
        setTxtArea('');
    
    };
    const handleShow = () => {
        setShow(true);
    }
    
    return (
        <>
        <Header/>
            <div className="fale-conosco-form">
                <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Formulário</Form.Label>
                    <Form.Control className='textarea' as="textarea" value={txtArea} maxlenght="200"rows={3} onChange={(e) => setTxtArea(e.target.value)} />
                </Form.Group>
                </Form>
                <Button className="botao-fale-conosco btn-dark" onClick={handleShow}>
                    Enviar Formulário
                </Button>
            </div>
        

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>CONFIRMAR ENVIO?</Modal.Title>
                </Modal.Header>
               
                <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Sair
                </Button>
                <Button variant="dark" onClick={handleClose}>
                    Enviar
                </Button>
                </Modal.Footer>
            </Modal>   
        <Footer className="footer"/>
        </>
       
    )
}

export default FaleConosco