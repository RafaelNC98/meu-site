import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import {  Nav, Navbar, Image, Form, FormControl} from 'react-bootstrap'
//import './App.css';
import Logo from '../avatar.png';
import LogoMarca from '../rede.png';
import LoginModal from './components/modal'
import { TOKEN } from '../../constants'

const Header = () => {
  const [showModalLogin,setShowModalLogin] = useState(false);
  const [logged,setLogged] = useState(!!localStorage.getItem(TOKEN))
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN)
    setLogged(false)
  }, [])

  return (
    <div>
      {showModalLogin && (
        <LoginModal 
          showModalLogin={showModalLogin}
          setShowModalLogin={setShowModalLogin}
          setLogged={setLogged}
        />
      )}
      <Navbar className="BackgroundHeader" expand="lg">
      <div className="LarguraHeader">
        <div>
            <Image className="logoMarca float-left" src={LogoMarca} roundedCircle />
        </div>
      {logged ? (
          <div >
            <Button className="buttonMinhaconta  float-right" onClick={logout}>
              <Image className="LogoMinhaConta" src={Logo} roundedCircle />
            </Button>
          </div>
        
        ) : (
        <Button className="buttonMinhaconta  float-right" onClick={() => setShowModalLogin(true)}>
            <span>Entrar</span>
        </Button>
      )}
      </div>
     
      </Navbar>
      <div>
        <Navbar className="BackgroundHeader " expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                  Produtos
          </DropdownToggle>
                <DropdownMenu>

                  <DropdownItem tag={Link} to="/Bebidas" >Bebidas</DropdownItem>
                  <DropdownItem tag={Link} to="/Comidas">Comidas</DropdownItem>

                  <DropdownItem tag={Link} to="/Outros">Outros</DropdownItem>

                </DropdownMenu>
              </Dropdown>

            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
              <Button className="buttonBuscar">Busca</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
    )
}

export default Header;
