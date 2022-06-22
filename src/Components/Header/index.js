import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./styles.css"


const Header = () => {

  return (
    <Navbar collapseOnSelect expand="md" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/"><img src="https://cdn.discordapp.com/attachments/979120601966997514/988940035615227924/Design_sem_nome__15_-removebg-preview.png" className="icone" /></Link></Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="corpo">
            <Nav className="me-auto text-light">
              <NavDropdown title="Produtos" id="collasible-nav-dropdown" >
                <NavDropdown.Item><Link to="/cadastro/produtos/">Cadastrar Produtos</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/admin/produtos/">Administrar Produtos</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link to="/cadastro/categorias" className="text-deco">Cadastrar Categorias</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/admin/categorias/">Administrar Categorias</Link></NavDropdown.Item>
              </NavDropdown>
              <Link to="/faleconosco" className="fale-conosco" >Fale Conosco </Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="/login"> LogOut</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;